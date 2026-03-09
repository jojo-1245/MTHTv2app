#!/usr/bin/env bash
# Expo 옵션 A: Expo 관련 패키지만 제거 후 재설치
# 사용법: 프로젝트 루트에서 실행
#   ./scripts/expo-reinstall-option-a.sh
#   또는
#   bash scripts/expo-reinstall-option-a.sh
#
# 백업은 이미 package-lock.json.bak 으로 되어 있음.
# 스크립트 후에 직접 실행할 것:
#   npx expo start -c
#   npx expo-doctor

set -e
cd "$(dirname "$0")/.."

echo "[1/2] Expo 관련 패키지 제거..."
npm uninstall expo \
  expo-apple-authentication expo-build-properties expo-camera expo-clipboard \
  expo-dev-client expo-device expo-face-detector expo-file-system expo-font \
  expo-image-manipulator expo-image-picker expo-linear-gradient expo-localization \
  expo-location expo-media-library expo-sensors expo-sharing expo-splash-screen \
  expo-status-bar expo-web-browser \
  @expo/metro-runtime @expo/vector-icons @expo-google-fonts/roboto

echo "[2/2] Expo 관련 패키지 재설치 (package.json 버전)..."
npm install expo@~54.0.31 \
  expo-apple-authentication@~8.0.8 expo-build-properties@~1.0.10 expo-camera@~17.0.10 \
  expo-clipboard@~8.0.8 expo-dev-client@~6.0.20 expo-device@~8.0.10 \
  expo-face-detector@^13.0.2 expo-file-system@^19.0.21 expo-font@~14.0.9 \
  expo-image-manipulator@~14.0.8 expo-image-picker@~17.0.10 expo-linear-gradient@~15.0.8 \
  expo-localization@~17.0.8 expo-location@~19.0.8 expo-media-library@~18.2.1 \
  expo-sensors@~15.0.8 expo-sharing@~14.0.8 expo-splash-screen@~31.0.13 \
  expo-status-bar@~3.0.9 expo-web-browser@^55.0.9 \
  @expo/metro-runtime@~6.1.2 @expo/vector-icons@^15.0.3 @expo-google-fonts/roboto@^0.4.1

echo ""
echo "옵션 A 재설치 완료. 다음을 직접 실행하세요:"
echo "  npx expo start -c"
echo "  npx expo-doctor"
