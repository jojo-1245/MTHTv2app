import v_a3453e from 'bapkr';
import {
  v_472849,
  v_19b633,
  v_4623af,
  v_3094a2,
  v_326be8,
} from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_86c222, v_a43dd8, v_7ebf51, v_56d16a } from 'wjvlskvsbzsrojdbjsl';
import { v_b5df25 } from 'ernurodqvmtspux';
import { v_570c34, v_1c1837, v_729608 } from '../components';
import { v_556baf } from '../components';
import { v_772971 } from 'jmpfvteuuztnp';
import type { v_8ad91b } from '../navigation';
import { v_a0daa8 } from '../navigation';
import { v_e0068c } from 'vvfgtwbmdpbnvhtfbtbgudicfmpscw';
import { v_1bfbd0, v_843035, v_9b1a04, v_ef658a } from '../constants';

const v_ff4e8b = 20;

type Props = v_432191<v_8ad91b, 'Analysis'>;

const AnalysisScreen: v_a3453e.FC<Props> = () => {
  const { navigate: v_9b57fc } = v_a0daa8();
  const { t: v_8d41d7 } = v_772971();
  const v_033e14 = v_e0068c();

  return (
    <MainLayout activeKey="analysis">
      <StatusBar style="dark" />
      <SafeView style={v_d81136.screen} showBottomBackground={false}>
        <Header
          variant="analysis"
          iconLeft={<BarChart3 size={24} color="#FFFFFF" />}
          title={v_8d41d7('analysis.title')}
          subtitle={v_326be8.OS === 'ios' ? v_8d41d7('analysis.subtitle_ios') : v_8d41d7('analysis.subtitle')}
          containerStyle={{ paddingTop: v_033e14.top + v_9b1a04.medium }}
        />
        <SafeScrollView
          style={v_d81136.scrollView}
          showBottomBackground={false}
          disableBottomPadding={true}
          contentContainerStyle={v_d81136.scrollContent}
        >
          {}
          <View style={[v_d81136.section, v_d81136.healthSection]}>
            <Text style={v_d81136.sectionTitle}>{v_326be8.OS === 'ios' ? v_8d41d7('analysis.health_title_ios') : v_8d41d7('analysis.health_title')}</Text>
            <Text style={v_d81136.sectionDesc}>{v_326be8.OS === 'ios' ? v_8d41d7('analysis.health_desc_ios') : v_8d41d7('analysis.health_desc')}</Text>
            <TouchableOpacity
              style={v_d81136.card}
              onPress={() => v_9b57fc('HealthAnalysis')}
              activeOpacity={0.8}
            >
              <View style={[v_d81136.cardIconWrap, v_d81136.healthIconWrap]}>
                <Heart size={24} color="#EF4444" />
              </View>
              <View style={v_d81136.cardText}>
                <Text style={v_d81136.cardTitle}>{v_326be8.OS === 'ios' ? v_8d41d7('analysis.health_measure_ios') : v_8d41d7('analysis.health_measure')}</Text>
                <Text style={v_d81136.cardSub}>{v_326be8.OS === 'ios' ? v_8d41d7('analysis.health_measure_sub_ios') : v_8d41d7('analysis.health_measure_sub')}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={v_d81136.card}
              onPress={() => v_9b57fc('HealthAnalysis', { initialTab: 'records' })}
              activeOpacity={0.8}
            >
              <View style={[v_d81136.cardIconWrap, v_d81136.healthIconWrap]}>
                <ClipboardList size={24} color="#EF4444" />
              </View>
              <View style={v_d81136.cardText}>
                <Text style={v_d81136.cardTitle}>{v_326be8.OS === 'ios' ? v_8d41d7('analysis.health_records_ios') : v_8d41d7('analysis.health_records')}</Text>
                <Text style={v_d81136.cardSub}>{v_326be8.OS === 'ios' ? v_8d41d7('analysis.health_records_sub_ios') : v_8d41d7('analysis.health_records_sub')}</Text>
              </View>
            </TouchableOpacity>
          </View>

          {}
          <View style={[v_d81136.section, v_d81136.skinSection]}>
            <Text style={v_d81136.sectionTitle}>{v_8d41d7('analysis.skin_title')}</Text>
            <Text style={v_d81136.sectionDesc}>{v_326be8.OS === 'ios' ? v_8d41d7('analysis.skin_desc_ios') : v_8d41d7('analysis.skin_desc')}</Text>
            <TouchableOpacity
              style={v_d81136.card}
              onPress={() => v_9b57fc('SkinAnalysis')}
              activeOpacity={0.8}
            >
              <View style={[v_d81136.cardIconWrap, v_d81136.skinIconWrap]}>
                <Droplet size={24} color="#3B82F6" />
              </View>
              <View style={v_d81136.cardText}>
                <Text style={v_d81136.cardTitle}>{v_326be8.OS === 'ios' ? v_8d41d7('analysis.skin_measure_ios') : v_8d41d7('analysis.skin_measure')}</Text>
                <Text style={v_d81136.cardSub}>{v_8d41d7('analysis.skin_measure_sub')}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={v_d81136.card}
              onPress={() => v_9b57fc('SkinAnalysis', { initialTab: 'records' })}
              activeOpacity={0.8}
            >
              <View style={[v_d81136.cardIconWrap, v_d81136.skinIconWrap]}>
                <ClipboardList size={24} color="#3B82F6" />
              </View>
              <View style={v_d81136.cardText}>
                <Text style={v_d81136.cardTitle}>{v_326be8.OS === 'ios' ? v_8d41d7('analysis.skin_records_ios') : v_8d41d7('analysis.skin_records')}</Text>
                <Text style={v_d81136.cardSub}>{v_8d41d7('analysis.skin_records_sub')}</Text>
              </View>
            </TouchableOpacity>
          </View>

        </SafeScrollView>
      </SafeView>
    </MainLayout>
  );
};

const v_d81136 = v_472849.create({
  screen: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: v_ff4e8b,
    paddingTop: v_9b1a04.medium,
    paddingBottom: v_9b1a04.xlarge,
  },
  section: {
    marginBottom: v_9b1a04.xlarge,
    padding: v_9b1a04.large,
    borderRadius: 16,
  },
  healthSection: {
    backgroundColor: '#FDF2F8',
  },
  skinSection: {
    backgroundColor: '#EEF2FF',
  },
  sectionTitle: {
    fontSize: v_ef658a.xlarge,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
    marginBottom: 8,
  },
  sectionDesc: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    lineHeight: 22,
    marginBottom: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: v_9b1a04.large,
    marginBottom: v_9b1a04.small,
    borderWidth: 1,
    borderColor: v_1bfbd0.borderLight,
  },
  cardIconWrap: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  healthIconWrap: {
    backgroundColor: '#FEE2E2',
  },
  skinIconWrap: {
    backgroundColor: '#DBEAFE',
  },
  cardText: {
    flex: 1,
  },
  cardTitle: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
    marginBottom: 4,
  },
  cardSub: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
  },
});

export default v_7f9fad;
