#!/usr/bin/env bash
#
# 시뮬레이터용 Release 빌드 + OTA 채널 주입 + 설치
#
# 왜 필요한가
#   `expo run:ios` 기본(Debug) 빌드는 expo-updates 가 꺼져 있어 OTA 를 아예 조회하지 않는다.
#   Release 로 빌드해야 Expo.plist 에 EXUpdatesEnabled/URL/RuntimeVersion 이 들어간다.
#   다만 로컬 빌드에는 **채널 헤더가 붙지 않아**(EAS 빌드만 자동 주입) 어느 브랜치를 받을지
#   결정하지 못한다. 그래서 빌드 후 Expo.plist 에 expo-channel-name 을 직접 넣는다.
#   시뮬레이터 앱은 코드서명 검증이 없어 .app 내부 수정이 가능하다.
#
# 주의 — "업데이트 없음"이 정상인 경우
#   EAS Update 는 **임베디드 번들보다 오래된 업데이트는 내려주지 않는다.**
#   방금 만든 빌드는 최신 코드이므로, 그 이전에 올린 OTA 는 NoUpdatesAvailable 로 나온다.
#   OTA 적용을 확인하려면 빌드 이후에 `eas update` 를 한 번 더 올려야 한다.
#
# 사용법
#   tools/sim-release-ota.sh                 # production 채널, iPhone 16 Pro
#   tools/sim-release-ota.sh preview         # 채널 지정
#   tools/sim-release-ota.sh production "iPhone 15"
#
set -euo pipefail

CHANNEL="${1:-production}"
DEVICE="${2:-iPhone 16 Pro}"
BUNDLE_ID="ai.metahint.appw"
DEST="build/sim/MetaHint-Release.app"   # build/sim/ 은 .gitignore 대상

cd "$(dirname "$0")/.."

echo "▶ 1/5 Release 빌드 ($DEVICE)"
# Podfile.lock 을 되돌린 적이 있으면 sandbox 불일치로 실패한다 → 먼저 맞춘다
(cd ios && pod install >/dev/null)
npx expo run:ios --configuration Release --device "$DEVICE"

SRC=$(find "${XCODE_DERIVED_DATA:-/Volumes/exDN/tmp/XcodeDerivedData}" \
        -maxdepth 5 -type d -name 'MetaHint.app' -path '*Release-iphonesimulator*' 2>/dev/null | head -1)
[ -n "$SRC" ] || { echo "✖ Release .app 을 찾지 못했다"; exit 1; }

echo "▶ 2/5 보관본 복사 → $DEST"
mkdir -p build/sim
rm -rf "$DEST"
cp -R "$SRC" "$DEST"

echo "▶ 3/5 채널 주입 (expo-channel-name = $CHANNEL)"
PL="$DEST/Expo.plist"
/usr/libexec/PlistBuddy -c "Delete :EXUpdatesRequestHeaders" "$PL" 2>/dev/null || true
/usr/libexec/PlistBuddy -c "Add :EXUpdatesRequestHeaders dict" "$PL"
/usr/libexec/PlistBuddy -c "Add :EXUpdatesRequestHeaders:expo-channel-name string $CHANNEL" "$PL"
plutil -p "$PL"

echo "▶ 4/5 시뮬레이터 설치"
SIM=$(xcrun simctl list devices available | grep -m1 "$DEVICE (" | sed -E 's/.*\(([0-9A-F-]{36})\).*/\1/')
[ -n "$SIM" ] || { echo "✖ 시뮬레이터를 찾지 못했다: $DEVICE"; exit 1; }
xcrun simctl boot "$SIM" 2>/dev/null || true
open -a Simulator
xcrun simctl terminate "$SIM" "$BUNDLE_ID" 2>/dev/null || true
xcrun simctl uninstall "$SIM" "$BUNDLE_ID" 2>/dev/null || true
xcrun simctl install "$SIM" "$DEST"
xcrun simctl launch "$SIM" "$BUNDLE_ID"

echo "▶ 5/5 완료. OTA 로그 확인:"
echo "  tools/sim-ota-log.sh"
