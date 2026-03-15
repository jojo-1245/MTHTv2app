#!/usr/bin/env bash
# Expo 옵션 B: node_modules 전부 삭제 후 클린 재설치
# 사용법: 프로젝트 루트에서 실행
#   ./scripts/expo-reinstall-option-b.sh
#   또는
#   bash scripts/expo-reinstall-option-b.sh
#
# 백업: package-lock.json.bak 이 있으면 유지, 없으면 생성.
# 스크립트 후에 직접 실행할 것:
#   npx expo start -c
#   npx expo-doctor
# Android/iOS 네이티브 사용 시: npm run android:clean 후 expo run:android 등

set -e
cd "$(dirname "$0")/.."

if [ ! -f package-lock.json.bak ]; then
  echo "[백업] package-lock.json → package-lock.json.bak"
  cp package-lock.json package-lock.json.bak
else
  echo "[백업] package-lock.json.bak 이미 있음 (유지)"
fi

echo "[1/3] node_modules 삭제..."
rm -rf node_modules

echo "[2/3] npm 캐시 정리..."
npm cache clean --force

echo "[3/3] npm install (전체 재설치)..."
npm install

echo ""
echo "옵션 B 클린 재설치 완료. 다음을 직접 실행하세요:"
echo "  npx expo start -c"
echo "  npx expo-doctor"
echo ""
echo "Android 네이티브 빌드 사용 시:"
echo "  npm run android:clean"
echo "  npx expo run:android --device"
echo ""
echo "iOS 네이티브 빌드 사용 시:"
echo "  cd ios && pod install && cd .."
echo "  npx expo run:ios"
