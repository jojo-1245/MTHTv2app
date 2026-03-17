#!/bin/bash
# 앱 빌드 대상 전환 스크립트
# 사용법: ./scripts/use-app.sh [metahint|metahin]

TARGET=$1

if [ -z "$TARGET" ]; then
  echo "사용법: ./scripts/use-app.sh [metahint|metahin]"
  echo ""
  echo "  metahint  — ai.metahint.appw (기존 앱, EAS remote credentials)"
  echo "  metahin   — ai.metahin.appw  (신규 앱, local keystore)"
  exit 1
fi

case "$TARGET" in
  metahin)
    if [ ! -f "credentials/android/keystore.metahin.jks" ]; then
      echo "⚠ 오류: credentials/android/keystore.metahin.jks 파일이 없습니다."
      exit 1
    fi

    echo "▶ 현재 android/ 폴더를 git stash에 저장 중..."
    git stash push android/ -m "metahint-android-backup" --quiet
    if [ $? -ne 0 ]; then
      echo "⚠ git stash 실패. git 상태를 확인하세요."
      exit 1
    fi

    cp credentials.metahin.json credentials.json

    echo "▶ android/ 폴더 재생성 중 (ai.metahin.appw)..."
    APP_VARIANT=metahin npx expo prebuild --clean --platform android --no-install

    echo ""
    echo "✔ 전환 완료: ai.metahin.appw"
    echo "  AAB:  eas build --profile store-metahin --platform android --local"
    echo "  APK:  eas build --profile apk-metahin --platform android --local"
    echo ""
    echo "  복귀:  ./scripts/use-app.sh metahint"
    ;;

  metahint)
    echo "▶ android/ 폴더를 git에서 복원 중 (ai.metahint.appw)..."
    git checkout -- android/
    if [ $? -ne 0 ]; then
      echo "⚠ git checkout 실패. 수동으로 'git stash pop' 시도하세요."
      exit 1
    fi

    cp credentials.metahint.json credentials.json

    echo ""
    echo "✔ 복귀 완료: ai.metahint.appw"
    echo "  AAB:  eas build --profile store --platform android --local"
    echo "  APK:  eas build --profile apk --platform android --local"
    ;;

  *)
    echo "오류: 알 수 없는 대상 '$TARGET'"
    echo "사용법: ./scripts/use-app.sh [metahint|metahin]"
    exit 1
    ;;
esac
