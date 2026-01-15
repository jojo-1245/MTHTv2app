import v_a3453e, { v_5ab095, v_e662ae, v_de06a3 } from 'bapkr';
import {
  v_03e392,
  v_472849,
  v_19b633,
  v_4623af,
  v_3094a2,
  v_cf9c33,
  v_700696,
  v_122070,
  v_9cabcb,
  v_79c4f2,
} from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_dec439, v_25515d } from 'zvyjokvuouwvifyzks';
import { v_e0068c } from 'vvfgtwbmdpbnvhtfbtbgudicfmpscw';
import { v_cf763b } from 'ixigazcpvfldbecwtbvavtbi';
import { v_b5df25 } from 'ernurodqvmtspux';
import { v_570c34, v_5deec6 } from '../components';
import type { v_8ad91b } from '../navigation';
import { v_a0daa8 } from '../navigation';
import { v_1bfbd0, v_843035, v_9b1a04, v_ef658a } from '../constants';
import type { v_80b5f0 } from '../components/SidebarMenu';
import { v_556baf } from '../components';

const v_9b2456 = require('../../assets/images/main_top_img.png');
const v_a6b742 = require('../../assets/images/character.png');

const { width: v_0d9f50 } = v_700696.get('window');

type Props = v_432191<v_8ad91b, 'MetaHome'>;

const v_74dc09 = [
  {
    id: '1',
    question: '주름개선 하는방법 알려줘.',
    preview: 'Youcod 주름개선 화장품 추천 .....',
  },
  {
    id: '2',
    question: '다크서클 없애는 방법은?',
    preview: '다크서클 개선을 위해서는 .....',
  },
  {
    id: '3',
    question: '피부 수분 관리 방법',
    preview: '피부 수분을 유지하려면 .....',
  },
  {
    id: '4',
    question: '모공 축소하는 방법',
    preview: '모공 관리를 위해서는 .....',
  },
];

const MetaHomeScreen: v_a3453e.FC<Props> = () => {
  const { navigate: v_9b57fc } = v_a0daa8();
  const v_033e14 = v_e0068c();
  const [v_2f29a7, v_5fe1ef] = v_5ab095(false);
  const [v_89bb03, v_39f9a7] = v_5ab095('');

  const v_18219f = (item: v_80b5f0) => {
    switch (v_8c0b26.id) {
      case 'wallet':
        v_9b57fc('Wallet');
        break;
      case 'shop':
        v_03e392.alert('안내', 'Shop 화면은 준비 중입니다.');
        break;
      case 'skin':
        v_9b57fc('SkinAnalysis');
        break;
      case 'health':
        v_9b57fc('HealthAnalysis');
        break;
      case 'connect':
        v_03e392.alert('안내', '건강정보 연결하기 화면은 준비 중입니다.');
        break;
      case 'grandma':
      case 'grandpa':
        v_03e392.alert('안내', '가족 프로필 화면은 준비 중입니다.');
        break;
      case 'history':
        v_03e392.alert('안내', '검색 기록 화면은 준비 중입니다.');
        break;
      default:
        if (v_8c0b26.id.startsWith('suggestion-')) {
          v_03e392.alert('검색', v_8c0b26.label);
        }
        break;
    }
  };

  const v_74d6ea = () => {
    v_9b57fc('SkinAnalysis');
  };

  const v_ae6f36 = () => {
    v_9b57fc('HealthAnalysis');
  };

  const v_128506 = (v_180423) => {
    v_03e392.alert('질문', v_180423);
  };

  const v_5e757d = () => {
    if (v_89bb03.trim()) {
      v_03e392.alert('검색', v_89bb03);
    }
  };

  const v_b5f731 = ({ item: v_8c0b26 }: { item: typeof v_74dc09[0] }) => (
    <TouchableOpacity
      style={v_d81136.questionCard}
      onPress={() => v_128506(v_8c0b26.question)}
      activeOpacity={0.8}
    >
      <View style={v_d81136.questionHeader}>
        <Text style={v_d81136.questionLabel}>Q.</Text>
        <Text style={v_d81136.questionText}>{v_8c0b26.question}</Text>
      </View>
      <Text style={v_d81136.questionPreview}>{v_8c0b26.preview}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      {}
      <StatusBar style={v_2f29a7 ? "dark" : "light"} />
      <SafeView style={v_d81136.screen} showBottomBackground={true}>
        {}
        <View style={[v_d81136.statusBarBackground, { height: v_033e14.top }]} />

        <SafeScrollView
          style={v_d81136.scrollView}
          contentContainerStyle={{ ...v_d81136.scrollContent, paddingTop: v_033e14.top }}
          showBottomBackground={false}
        >
          {}
          <View style={v_d81136.headerSection}>
            {}
            <View style={v_d81136.headerIcons}>
              <TouchableOpacity
                onPress={() => v_5fe1ef(true)}
                style={v_d81136.iconButton}
                activeOpacity={0.7}
                accessibilityRole="button"
                accessibilityLabel="메뉴 열기"
              >
                <Feather name="menu" size={24} color="#FFFFFF" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => v_03e392.alert('알림', '알림 기능은 준비 중입니다.')}
                style={v_d81136.iconButton}
                activeOpacity={0.7}
                accessibilityRole="button"
                accessibilityLabel="알림"
              >
                <Ionicons name="notifications-outline" size={24} color="#FFFFFF" />
              </TouchableOpacity>
            </View>

            {}
            <View style={v_d81136.greetingContainer}>
              <Text style={v_d81136.greetingText}>안녕하세요.</Text>
              <Text style={v_d81136.greetingTitle}>건강분석 AI 힌티 입니다</Text>
            </View>

            {}
            <Image
              source={v_9b2456}
              style={v_d81136.mainImage}
              resizeMode="contain"
            />
          </View>

          {}
          <View style={v_d81136.searchContainer}>
            <View style={v_d81136.searchBar}>
              <TextInput
                style={v_d81136.searchInput}
                placeholder="TED 님, 무엇이 궁금하신가요?"
                placeholderTextColor="#999"
                value={v_89bb03}
                onChangeText={v_39f9a7}
                onSubmitEditing={v_5e757d}
                returnKeyType="search"
              />
              <TouchableOpacity onPress={v_5e757d} style={v_d81136.searchButton}>
                <Ionicons name="search" size={22} color="#6B7280" />
              </TouchableOpacity>
            </View>
          </View>

          {}
          <View style={v_d81136.section}>
            <Text style={v_d81136.sectionTitle}>인기있는 질문</Text>
            <FlatList
              data={v_74dc09}
              renderItem={v_b5f731}
              keyExtractor={(v_8c0b26) => v_8c0b26.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={v_d81136.questionList}
              snapToInterval={v_0d9f50 - 80}
              decelerationRate="fast"
            />
          </View>

          {}
          <View style={v_d81136.section}>
            <Text style={v_d81136.sectionTitle}>내 건강상태</Text>
            <View style={v_d81136.healthStatusCard}>
              {}
              <TouchableOpacity
                style={[v_d81136.analysisButton, v_d81136.analysisButtonSkin]}
                onPress={v_74d6ea}
                activeOpacity={0.8}
              >
                <Text style={v_d81136.analysisButtonText}>피부</Text>
                <Text style={v_d81136.analysisButtonText}>분석하기</Text>
              </TouchableOpacity>

              {}
              <View style={v_d81136.characterContainer}>
                <Image
                  source={v_a6b742}
                  style={v_d81136.characterImage}
                  resizeMode="contain"
                />
              </View>

              {}
              <TouchableOpacity
                style={v_d81136.analysisButton}
                onPress={v_ae6f36}
                activeOpacity={0.8}
              >
                <Text style={v_d81136.analysisButtonText}>건강</Text>
                <Text style={v_d81136.analysisButtonText}>분석하기</Text>
              </TouchableOpacity>
            </View>
          </View>

          {}
          <View style={v_d81136.section}>
            <Text style={v_d81136.sectionTitle}>나의 건강레벨</Text>
            <View style={v_d81136.healthLevelCard}>
              <View style={v_d81136.levelIconContainer}>
                <Image
                  source={v_a6b742}
                  style={v_d81136.levelIcon}
                  resizeMode="contain"
                />
              </View>
              <View style={v_d81136.levelInfoContainer}>
                <View style={v_d81136.levelInfo}>
                  <View style={v_d81136.levelBadge}>
                    <Text style={v_d81136.levelBadgeText}>Level 9</Text>
                  </View>
                  <Text style={v_d81136.levelStatus}>양호단계</Text>
                </View>
                <Text style={v_d81136.levelDescription}>
                  상태 유지를 위한 지속적 관리 필요
                </Text>
              </View>
            </View>
          </View>

          {}
          <View style={{ height: 40 }} />
        </SafeScrollView>
      </SafeView>

      <SidebarMenu
        visible={v_2f29a7}
        onClose={() => v_5fe1ef(false)}
        onMenuItemPress={v_18219f}
        userProfile={{ name: 'TED' }}
      />
    </>
  );
};

const v_d81136 = v_472849.create({
  screen: {
    flex: 1,
    backgroundColor: '#F5F5F7',
  },

  statusBarBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#4A5099',
    zIndex: 100,
  },

  headerSection: {
    backgroundColor: '#4A5099',
    paddingTop: v_9b1a04.medium,
    paddingBottom: 50, 
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: v_9b1a04.large,
    marginBottom: v_9b1a04.medium,
  },
  iconButton: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greetingContainer: {
    paddingHorizontal: v_9b1a04.large,
    marginBottom: v_9b1a04.medium,
  },
  greetingText: {
    fontSize: v_ef658a.xlarge,
    fontFamily: v_843035.medium,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  greetingTitle: {
    fontSize: 24,
    fontFamily: v_843035.bold,
    color: '#FFFFFF',
  },
  mainImage: {
    width: '100%',
    height: 180,
    marginTop: v_9b1a04.small,
  },

  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },

  searchContainer: {
    paddingHorizontal: v_9b1a04.large,
    marginTop: -30,
    marginBottom: v_9b1a04.large,
    zIndex: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingHorizontal: v_9b1a04.large,
    paddingVertical: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  searchInput: {
    flex: 1,
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.text,
    paddingVertical: 12,
  },
  searchButton: {
    padding: 8,
  },

  section: {
    paddingHorizontal: v_9b1a04.large,
    paddingBottom: v_9b1a04.xlarge,
  },
  sectionTitle: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
    marginBottom: v_9b1a04.medium,
  },

  questionList: {
    paddingRight: v_9b1a04.large,
    paddingVertical: v_9b1a04.small,
    paddingHorizontal: 3,
  },
  questionCard: {
    width: v_0d9f50 - 100,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: v_9b1a04.large,
    marginRight: v_9b1a04.medium,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  questionHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: v_9b1a04.small,
  },
  questionLabel: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.bold,
    color: '#7C3AED',
    marginRight: v_9b1a04.small,
  },
  questionText: {
    flex: 1,
    fontSize: v_ef658a.large,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
    lineHeight: 24,
  },
  questionPreview: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.regular,
    color: '#6B7280',
    marginLeft: 24,
  },

  healthStatusCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: v_9b1a04.large,
  },
  analysisButton: {
    backgroundColor: '#3A3C79',
    borderRadius: 12,
    paddingVertical: v_9b1a04.medium,
    paddingHorizontal: v_9b1a04.large,
    alignItems: 'center',
    width: '50%',
  },
  analysisButtonSkin: {
    backgroundColor: '#5E62AC',
  },
  analysisButtonText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.semibold,
    color: '#FFFFFF',
    lineHeight: 18,
  },
  characterContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: "50%",
    transform: [{ translateX: -50 }],
    zIndex: 2,
    width: 100,
    height: 100,
  },
  characterImage: {
    width: 100,
    height: 100,
  },

  healthLevelCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#EBE9FF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#DADADA',
    padding: v_9b1a04.large,
  },
  levelInfoContainer: {
    flex: 1,
    flexDirection: 'column',
    gap: v_9b1a04.small,
  },
  levelIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: v_9b1a04.medium,
  },
  levelIcon: {
    width: 40,
    height: 40,
  },
  levelInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  levelBadge: {
    backgroundColor: '#10B981',
    borderRadius: 24,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: v_9b1a04.small,
  },
  levelBadgeText: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.bold,
    color: '#FFFFFF',
  },
  levelStatus: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
  },
  levelDescription: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: '#6B7280',
  },
});

export default v_7aeeb0;
