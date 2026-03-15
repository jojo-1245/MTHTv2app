#!/usr/bin/env bash
# MetaHint 실기기 지연 원인 모니터링용 logcat
# 사용법: ./scripts/logcat-perf-monitor.sh [출력파일]
# 1. 앱 실행 후 로그인 화면까지 둔 다음
# 2. 이 스크립트 실행
# 3. 로그인 → 메인 이동 수행
# 4. Ctrl+C로 종료 후 출력파일에서 Choreographer / ReactNativeJS 등 확인

set -e
OUT="${1:-logcat-perf-$(date +%Y%m%d-%H%M%S).txt}"
PACKAGE="ai.metahint.appw"

echo "=== MetaHint logcat 성능 모니터링 ==="
echo "출력: $OUT"
echo "패키지: $PACKAGE"
echo "로그인 → 메인 이동 후 Ctrl+C로 종료하세요."
echo ""

# 기기 연결 확인
if ! adb devices | grep -q "device$"; then
  echo "오류: 연결된 기기가 없습니다. (adb devices)"
  exit 1
fi

# 이전 로그 비우기 (선택)
adb logcat -c

# 핵심 태그만 보기 (*:S = 나머지 태그 숨김)
# - Choreographer: 프레임 드롭 (Skipped N frames = 메인 스레드가 N*16ms 이상 블로킹)
# - ReactNativeJS: 앱의 console.log / [Perf], [authApi] 등
# - ReactNative: 네이티브 브릿지
# - InputDispatcher: 터치/입력 지연
# - ActivityManager: 화면 전환 (Displayed ...)
adb logcat -v threadtime \
  Choreographer:I \
  ReactNativeJS:V \
  ReactNative:V \
  InputDispatcher:I \
  ActivityManager:I \
  "*:S" \
  2>&1 | tee "$OUT"
