#!/usr/bin/env bash
# extract-ipa.sh — xcarchive에서 IPA 수동 추출
#
# 배경: macOS Tahoe/Sequoia + Xcode 26.x 환경에서 openrsync vs
#       IDEDistributionCreateIPAStep 비호환으로 `exportArchive Copy failed`
#       (Exit 70) 발생. archive 자체는 정상이라 직접 zip으로 IPA 만들면 됨.
# 참고: KB/projects/metahint/docs/2026-05-19_ios-build-openrsync-issue.md
#
# 사용법:
#   ./scripts/extract-ipa.sh                       # 가장 최신 archive 자동 선택
#   ./scripts/extract-ipa.sh <archive 경로>          # 특정 archive 지정
#   ./scripts/extract-ipa.sh --open                # 생성된 IPA를 Transporter로 자동 오픈
#   ./scripts/extract-ipa.sh <archive> --open      # 두 옵션 조합 가능
#
# 출력: $TMPDIR/ipa-build-<timestamp>/MetaHint.ipa

set -euo pipefail

APP_NAME="MetaHint"
ARCHIVES_ROOT="$HOME/Library/Developer/Xcode/Archives"
WORK_ROOT="${TMPDIR:-/tmp}"

OPEN_TRANSPORTER=0
ARCHIVE_PATH=""

for arg in "$@"; do
    case "$arg" in
        --open)
            OPEN_TRANSPORTER=1
            ;;
        -h|--help)
            sed -n '2,17p' "$0"
            exit 0
            ;;
        -*)
            echo "❌ 알 수 없는 옵션: $arg" >&2
            exit 1
            ;;
        *)
            ARCHIVE_PATH="$arg"
            ;;
    esac
done

# archive 자동 탐지
if [ -z "$ARCHIVE_PATH" ]; then
    ARCHIVE_PATH=$(find "$ARCHIVES_ROOT" -type d -name "${APP_NAME}*.xcarchive" 2>/dev/null \
        | xargs -I{} stat -f '%m %N' "{}" 2>/dev/null \
        | sort -rn | head -1 | cut -d' ' -f2-)
    if [ -z "$ARCHIVE_PATH" ]; then
        echo "❌ ${ARCHIVES_ROOT} 에서 ${APP_NAME}*.xcarchive 를 찾지 못했습니다." >&2
        echo "   먼저 'npm run build:store -- --platform ios' 로 archive 를 만드세요." >&2
        exit 1
    fi
    echo "🔍 가장 최신 archive 자동 선택"
fi

if [ ! -d "$ARCHIVE_PATH" ]; then
    echo "❌ archive 디렉토리가 없습니다: $ARCHIVE_PATH" >&2
    exit 1
fi

APP_BUNDLE="$ARCHIVE_PATH/Products/Applications/${APP_NAME}.app"
if [ ! -d "$APP_BUNDLE" ]; then
    echo "❌ .app 번들을 찾지 못했습니다: $APP_BUNDLE" >&2
    exit 1
fi

echo "📦 Archive: $ARCHIVE_PATH"
echo "📱 App:     $APP_BUNDLE"
echo "🗂  TMPDIR:  ${TMPDIR:-(unset, /tmp 사용)}"
echo ""

WORK="$WORK_ROOT/ipa-build-$(date +%s)"
mkdir -p "$WORK/Payload"

echo "📁 복사 중..."
cp -R "$APP_BUNDLE" "$WORK/Payload/"

echo ""
echo "🔐 코드 사이닝 검증:"
codesign -dv "$WORK/Payload/${APP_NAME}.app" 2>&1 | head -6 || {
    echo "⚠️  codesign 검증 실패 — IPA 는 만들었지만 사이닝 점검 필요" >&2
}

echo ""
echo "📦 IPA 생성 중..."
(cd "$WORK" && zip -qry "${APP_NAME}.ipa" Payload)

IPA_PATH="$WORK/${APP_NAME}.ipa"
IPA_SIZE=$(du -h "$IPA_PATH" | awk '{print $1}')

echo ""
echo "✅ IPA 생성 완료"
echo "   경로: $IPA_PATH"
echo "   크기: $IPA_SIZE"
echo ""

if [ "$OPEN_TRANSPORTER" -eq 1 ]; then
    if [ -d "/Applications/Transporter.app" ]; then
        echo "🚀 Transporter.app 으로 오픈..."
        open -a "Transporter" "$IPA_PATH"
    else
        echo "⚠️  Transporter.app 이 설치되어 있지 않습니다."
        echo "   Mac App Store 에서 'Transporter' 검색 → 설치 후 다시 실행."
    fi
fi

echo ""
echo "다음 단계:"
echo "  - Transporter.app 에서 IPA 드래그 → Deliver"
echo "  - 또는 CLI: xcrun altool --upload-app -f \"$IPA_PATH\" --type ios \\"
echo "             --apiKey <KEY_ID> --apiIssuer <ISSUER_ID>"
