#!/usr/bin/env bash
#
# 시뮬레이터에 설치된 앱의 expo-updates 로그 확인
#
# 읽는 값
#   checkCompleteAvailable / NoUpdatesAvailable  ← 서버가 업데이트를 줬는지
#   didFinishWithLauncher isUpToDate=1           ← 최신 상태로 실행됨
#   Launched update / update ID                  ← 실제로 적용된 업데이트
#
# 사용법
#   tools/sim-ota-log.sh                # 최근 20줄
#   tools/sim-ota-log.sh 50             # 줄 수 지정
#
set -euo pipefail

LINES="${1:-20}"
BUNDLE_ID="ai.metahint.appw"

SIM=$(xcrun simctl list devices | grep -m1 "Booted" | sed -E 's/.*\(([0-9A-F-]{36})\).*/\1/')
[ -n "$SIM" ] || { echo "✖ 부팅된 시뮬레이터가 없다"; exit 1; }

DATA=$(xcrun simctl get_app_container "$SIM" "$BUNDLE_ID" data 2>/dev/null) || {
  echo "✖ 앱이 설치되어 있지 않다: $BUNDLE_ID"; exit 1; }

LOG="$DATA/Library/Application Support/dev.expo.modules.core.logging.expo-updates.txt"
[ -f "$LOG" ] || { echo "✖ expo-updates 로그가 없다 (Debug 빌드는 updates 가 꺼져 있어 로그를 남기지 않는다)"; exit 1; }

python3 - "$LOG" "$LINES" <<'PY'
import json, re, sys
path, n = sys.argv[1], int(sys.argv[2])
raw = open(path, encoding='utf-8', errors='replace').read()
# 한 줄에 여러 JSON 이 붙어 나오는 경우가 있어 객체 단위로 끊는다
out = []
for m in re.finditer(r'\{[^{}]*\}', raw):
    try:
        j = json.loads(m.group(0))
    except Exception:
        continue
    msg = j.get('message', '')
    if not msg:
        continue
    code = j.get('code', '')
    tag = f"[{code}] " if code and code != 'None' else ""
    out.append(tag + msg)
for line in out[-n:]:
    print(line[:200])
PY
