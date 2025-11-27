import v_a3453e, { v_a7b0d7 } from 'bapkr';
import {
  v_03e392,
  v_122070,
  v_472849,
  v_19b633,
  v_4623af,
  v_3094a2,
} from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_dec439 } from 'zvyjokvuouwvifyzks';
import {
  v_f4e704,
  v_ae275d,
  v_cb41de,
  v_8714fe,
} from '../components';
import type { v_8ad91b } from '../navigation';
import { v_1bfbd0, v_a61db3, v_843035, v_9b1a04 } from '../constants';
import type { v_7369b0 } from '../components/BottomNavigationBar';

type Props = v_432191<v_8ad91b, 'Home'>;

type QuickAction = {
  key: string;
  label: string;
  description: string;
  icon: v_a7b0d7<typeof v_dec439>['name'];
  tint: string;
  route?: keyof v_8ad91b | string;
};

const STACK_ROUTES: readonly (keyof v_8ad91b)[] = [
  'Home',
  'Login',
  'Signup',
  'ForgotPassword',
  'PasswordVerification',
  'ResetPassword',
  'PasswordChanged',
  'EmailVerification',
  'CountrySelect',
];

const v_03c87c = [
  {
    key: 'wallet',
    label: 'XRUN 지갑',
    description: '보유 자산 확인',
    icon: 'credit-card',
    tint: '#F4F0FF',
  },
  {
    key: 'map',
    label: 'AR 지도',
    description: '근처 미션 찾기',
    icon: 'map',
    tint: '#E9F7FF',
  },
  {
    key: 'shop',
    label: 'AfterLife Shop',
    description: '티켓/굿즈 구매',
    icon: 'shopping-bag',
    tint: '#FDF3E7',
  },
  {
    key: 'logout',
    label: '로그아웃',
    description: '세션 종료',
    icon: 'log-out',
    tint: '#FFEFEF',
    route: 'Login',
  },
];

const bottomNavItems: v_7369b0[] = [
  { key: 'home', label: 'Home', icon: 'home', route: 'Home' },
  { key: 'wallet', label: 'Wallet', icon: 'credit-card' },
  { key: 'map', label: 'Map', icon: 'navigation-2' },
  { key: 'shop', label: 'Shop', icon: 'shopping-bag' },
  { key: 'info', label: 'My', icon: 'user' },
];

const v_70b159 = [
  {
    id: 'mission-1',
    title: 'AfterLife 포털 정렬',
    description: '메인 AR 포털의 에너지 밸런스를 맞추세요.',
    meta: '남은 시간 02:15:23',
    badgeLabel: '우선 순위',
    status: 'warning' as const,
    iconName: 'orbit',
  },
  {
    id: 'mission-2',
    title: 'XR 메시지 캡처',
    description: '도시 곳곳의 신호를 수집해 커뮤니티에 공유하세요.',
    meta: '오늘 18:30 마감',
    badgeLabel: '협업',
    status: 'info' as const,
    iconName: 'access-point',
  },
];

const v_9561b7 = [
  {
    id: 'community-1',
    title: 'AfterLife 라디오 세션',
    description: 'DJ VEGA가 준비한 몰입형 사운드 세션이 시작됩니다.',
    meta: '20:00 · 45분',
    badgeLabel: 'LIVE',
    status: 'warning' as const,
    iconName: 'headphones',
  },
  {
    id: 'community-2',
    title: '리추얼 매뉴얼 업데이트',
    description: '새로운 장례 프로토콜이 추가되었습니다. 팀과 공유하세요.',
    meta: '업데이트 1시간 전',
    badgeLabel: 'NEW',
    status: 'success' as const,
    iconName: 'book-open-page-variant',
  },
  {
    id: 'community-3',
    title: '커뮤니티 체크인',
    description: '오늘의 기분과 다짐을 기록하면 보상이 주어집니다.',
    meta: '매일 1회 참여',
    status: 'info' as const,
    iconName: 'clipboard-check-outline',
  },
];

const v_c97998 = (v_c7daf6): v_c7daf6 is keyof v_8ad91b => {
  return Boolean(v_c7daf6 && v_8ea156.includes(v_c7daf6 as keyof v_8ad91b));
};

const HomeScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d }) => {
  const v_428baa = (v_9b064f) => {
    if (v_c97998(v_9b064f.route)) {
      v_c65f5d.navigate(v_9b064f.route);
      return;
    }

    if (v_9b064f.key === 'wallet') {
      v_03e392.alert('XRUN 지갑', '지갑 기능은 추후 업데이트될 예정입니다.');
      return;
    }

    if (v_9b064f.key === 'map') {
      v_03e392.alert('AR 지도', 'AR 미션 지도는 곧 공개됩니다.');
      return;
    }

    if (v_9b064f.key === 'shop') {
      v_03e392.alert('Shop', 'AfterLife Shop을 준비 중이에요.');
      return;
    }

    v_03e392.alert('알림', '곧 만나보실 수 있어요.');
  };

  const v_116756 = (item: v_7369b0) => {
    if (v_c97998(v_8c0b26.route)) {
      v_c65f5d.navigate(v_8c0b26.route);
      return;
    }

    v_03e392.alert('준비 중인 메뉴', `${v_8c0b26.label} 기능은 곧 제공될 예정입니다.`);
  };

  const v_fea89c = (v_9f1622) => {
    v_03e392.alert('미션 선택', `${v_9f1622} 미션 세부 정보를 준비 중입니다.`);
  };

  return (
    <View style={v_d81136.screen}>
      <ScrollView
        contentContainerStyle={v_d81136.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={v_d81136.container}>
          <View style={v_d81136.heroCard}>
            <View style={v_d81136.heroHeader}>
              <Text style={v_d81136.heroEyebrow}>AfterLife Network</Text>
              <Text style={v_d81136.heroTitle}>안녕하세요, 익스플로러</Text>
              <Text style={v_d81136.heroSubtitle}>
                오늘의 XRUN 미션과 커뮤니티 소식을 확인하세요.
              </Text>
            </View>

            <View style={v_d81136.heroBody}>
              <View style={v_d81136.heroStat}>
                <Text style={v_d81136.statLabel}>보유 XRUN</Text>
                <Text style={v_d81136.statValue}>12,450</Text>
                <Text style={v_d81136.statChange}>+320 (24h)</Text>
              </View>
              <View style={v_d81136.heroDivider} />
              <View style={v_d81136.heroStat}>
                <Text style={v_d81136.statLabel}>활성 미션</Text>
                <Text style={v_d81136.statValue}>3</Text>
                <Text style={v_d81136.statMeta}>팀과 동기화됨</Text>
              </View>
            </View>

            <View style={v_d81136.heroActions}>
              <PrimaryButton
                title="새 미션 시작"
                onPress={() => v_fea89c('새 미션')}
                fullWidth={false}
                style={v_d81136.heroButton}
              />
              <SecondaryButton
                title="일정 보기"
                onPress={() => v_03e392.alert('일정', '캘린더 연동을 준비 중입니다.')}
                fullWidth={false}
                style={v_d81136.heroButton}
              />
            </View>
          </View>

          <View style={v_d81136.section}>
            <View style={v_d81136.sectionHeader}>
              <Text style={v_d81136.sectionTitle}>빠른 액션</Text>
              <TouchableOpacity
                onPress={() => v_03e392.alert('맞춤 설정', '빠른 액션 편집 기능 준비 중입니다.')}
                activeOpacity={0.85}
              >
                <Text style={v_d81136.sectionLink}>맞춤 편집</Text>
              </TouchableOpacity>
            </View>
            <View style={v_d81136.quickGrid}>
              {v_03c87c.map(v_9b064f => (
                <TouchableOpacity
                  key={v_9b064f.key}
                  style={v_d81136.quickCard}
                  onPress={() => v_428baa(v_9b064f)}
                  activeOpacity={0.85}
                >
                  <View style={[v_d81136.quickIcon, { backgroundColor: v_9b064f.tint }]}>
                    <Feather name={v_9b064f.icon} size={18} color={v_1bfbd0.text} />
                  </View>
                  <Text style={v_d81136.quickLabel}>{v_9b064f.label}</Text>
                  <Text style={v_d81136.quickDescription}>{v_9b064f.description}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={v_d81136.section}>
            <View style={v_d81136.sectionHeader}>
              <Text style={v_d81136.sectionTitle}>진행 중인 미션</Text>
              <TouchableOpacity
                onPress={() => v_03e392.alert('미션', '전체 미션 리스트를 준비 중입니다.')}
                activeOpacity={0.85}
              >
                <Text style={v_d81136.sectionLink}>전체 보기</Text>
              </TouchableOpacity>
            </View>

            <View style={v_d81136.listStack}>
              {v_70b159.map(v_8c0b26 => (
                <DashboardListItem
                  key={v_8c0b26.id}
                  title={v_8c0b26.title}
                  description={v_8c0b26.description}
                  meta={v_8c0b26.meta}
                  badgeLabel={v_8c0b26.badgeLabel}
                  status={v_8c0b26.status}
                  iconName={v_8c0b26.iconName}
                  onPress={() => v_fea89c(v_8c0b26.title)}
                />
              ))}
            </View>
          </View>

          <View style={v_d81136.section}>
            <View style={v_d81136.sectionHeader}>
              <Text style={v_d81136.sectionTitle}>커뮤니티 업데이트</Text>
              <TouchableOpacity
                onPress={() => v_03e392.alert('커뮤니티', '커뮤니티 세부 화면은 곧 제공됩니다.')}
                activeOpacity={0.85}
              >
                <Text style={v_d81136.sectionLink}>피드 이동</Text>
              </TouchableOpacity>
            </View>

            <View style={v_d81136.listStack}>
              {v_9561b7.map(v_8c0b26 => (
                <DashboardListItem
                  key={v_8c0b26.id}
                  title={v_8c0b26.title}
                  description={v_8c0b26.description}
                  meta={v_8c0b26.meta}
                  badgeLabel={v_8c0b26.badgeLabel}
                  status={v_8c0b26.status}
                  iconName={v_8c0b26.iconName}
                  onPress={() => v_03e392.alert('커뮤니티', `${v_8c0b26.title} 상세 정보를 준비 중입니다.`)}
                />
              ))}
            </View>
          </View>

          <View style={[v_d81136.bottomSection, v_a61db3.bottomSection]}>
            <Text style={v_d81136.bottomTitle}>AfterLife Explorer</Text>
            <Text style={v_d81136.bottomDescription}>
              커뮤니티 알림과 미션 업데이트를 놓치지 않도록 알림을 유지해주세요.
            </Text>
            <SecondaryButton
              title="알림 설정 이동"
              onPress={() => v_03e392.alert('알림', '설정 화면은 추후 연결됩니다.')}
              fullWidth={false}
              style={v_d81136.bottomButton}
            />
          </View>
        </View>
      </ScrollView>

      <BottomNavigationBar
        items={v_fce460}
        activeKey="home"
        onTabPress={v_116756}
      />
    </View>
  );
};

const v_d81136 = v_472849.create({
  screen: {
    flex: 1,
    backgroundColor: v_1bfbd0.background,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 140,
  },
  container: {
    width: '100%',
    maxWidth: 780,
    paddingHorizontal: v_9b1a04.large,
    paddingTop: 32,
    gap: v_9b1a04.xlarge,
  },
  heroCard: {
    borderRadius: 32,
    padding: v_9b1a04.xlarge,
    backgroundColor: '#F7F8FF',
    borderWidth: v_472849.hairlineWidth,
    borderColor: '#E4E6F4',
    gap: v_9b1a04.large,
  },
  heroHeader: {
    gap: 6,
  },
  heroEyebrow: {
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: v_1bfbd0.secondaryText,
    fontFamily: v_843035.medium,
  },
  heroTitle: {
    fontSize: 26,
    fontFamily: v_843035.extrabold,
    color: v_1bfbd0.text,
  },
  heroSubtitle: {
    fontSize: 14,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.secondaryText,
    lineHeight: 20,
  },
  heroBody: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: v_1bfbd0.background,
    borderRadius: 24,
    paddingHorizontal: v_9b1a04.large,
    paddingVertical: v_9b1a04.medium,
    borderWidth: v_472849.hairlineWidth,
    borderColor: '#E3E5EE',
  },
  heroStat: {
    flex: 1,
  },
  heroDivider: {
    width: 1,
    height: '80%',
    backgroundColor: '#ECEEF7',
    marginHorizontal: v_9b1a04.large,
  },
  statLabel: {
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.secondaryText,
  },
  statValue: {
    fontSize: 26,
    fontFamily: v_843035.extrabold,
    color: v_1bfbd0.text,
    marginTop: 4,
  },
  statChange: {
    fontSize: 13,
    fontFamily: v_843035.medium,
    color: '#1FB67C',
    marginTop: 2,
  },
  statMeta: {
    fontSize: 13,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.secondaryText,
    marginTop: 2,
  },
  heroActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: v_9b1a04.medium,
  },
  heroButton: {
    flex: 1,
  },
  section: {
    gap: v_9b1a04.medium,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
  },
  sectionLink: {
    fontSize: 14,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.primary,
  },
  quickGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  quickCard: {
    width: '48%',
    borderRadius: 20,
    backgroundColor: '#F9FAFB',
    borderWidth: v_472849.hairlineWidth,
    borderColor: v_1bfbd0.border,
    padding: v_9b1a04.medium,
    marginBottom: v_9b1a04.medium,
  },
  quickIcon: {
    width: 40,
    height: 40,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: v_9b1a04.small,
  },
  quickLabel: {
    fontSize: 15,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
  },
  quickDescription: {
    marginTop: 4,
    fontSize: 13,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    lineHeight: 18,
  },
  listStack: {
    gap: v_9b1a04.medium,
  },
  bottomSection: {
    alignItems: 'center',
    gap: v_9b1a04.medium,
  },
  bottomTitle: {
    fontSize: 16,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
  },
  bottomDescription: {
    fontSize: 13,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    textAlign: 'center',
    lineHeight: 18,
  },
  bottomButton: {
    paddingHorizontal: v_9b1a04.large,
  },
});

export default v_c316d8;

