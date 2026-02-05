#!/bin/bash

# 색상 정의
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Gradle 캐시 정리를 시작합니다...${NC}"

# 1. Gradle 데몬 중지
echo -e "${GREEN}1. 실행 중인 Gradle 데몬 중지 중...${NC}"
# 프로젝트 루트에서 실행된다고 가정
if [ -f "./android/gradlew" ]; then
    cd android && ./gradlew --stop && cd ..
else
    echo "android/gradlew를 찾을 수 없습니다. 강제로 프로세스를 종료합니다."
    pkill -f '.*GradleDaemon.*' 2>/dev/null || true
fi

# 2. 글로벌 Gradle 캐시 삭제 (가장 용량을 많이 차지함)
echo -e "${GREEN}2. 글로벌 Gradle 캐시 삭제 (~/.gradle/caches)...${NC}"
rm -rf ~/.gradle/caches

# 3. Gradle 데몬 데이터 삭제
echo -e "${GREEN}3. Gradle 데몬 데이터 삭제 (~/.gradle/daemon)...${NC}"
rm -rf ~/.gradle/daemon

# 4. 프로젝트 로컬 빌드 캐시 삭제
echo -e "${GREEN}4. 프로젝트 로컬 빌드 파일 및 캐시 삭제 (android/.gradle, build 폴더 등)...${NC}"
rm -rf android/.gradle
rm -rf android/build
rm -rf android/app/build

# 5. React Native 관련 캐시도 함께 정리 (선택사항)
echo -e "${GREEN}5. Metro Bundler 캐시 정리 (선택사항)...${NC}"
rm -rf $TMPDIR/metro-* 2>/dev/null || true
rm -rf $TMPDIR/haste-map-* 2>/dev/null || true

echo -e "${YELLOW}완료되었습니다! 다음 빌드는 캐시를 다시 생성하느라 시간이 조금 더 걸릴 수 있습니다.${NC}"
