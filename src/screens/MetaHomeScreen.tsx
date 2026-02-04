import v_a3453e, { v_5ab095 } from 'bapkr';
import {
  v_03e392,
  v_472849,
  v_19b633,
  v_4623af,
  v_3094a2,
  v_cf9c33,
  v_700696,
  v_122070,
  v_e45a99,
} from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import {
  v_4b79e2,
  v_0ae9ff,
  v_1df8e7,
  v_3ebb07,
  v_20f6a6,
  v_1a7837,
  v_7ebf51,
  v_4ce80f,
  v_56d16a,
  v_3e7a50,
  v_2e2f88,
} from 'wjvlskvsbzsrojdbjsl';
import { v_e0068c } from 'vvfgtwbmdpbnvhtfbtbgudicfmpscw';
import { v_b5df25 } from 'ernurodqvmtspux';
import { v_5ade23 } from 'xbfwaaanosqvazmrqoah';
import { v_570c34, v_1c1837 } from '../components';
import { v_772971 } from 'jmpfvteuuztnp';
import type { v_8ad91b } from '../navigation';
import { v_a0daa8 } from '../navigation';
import { v_1bfbd0, v_843035, v_9b1a04, v_ef658a } from '../constants';
import { v_556baf } from '../components';

const v_9b2456 = require('../../assets/images/main_top_img.png');
const v_2e47ea = require('../../assets/images/robot_face.png');
const v_9c75ed = [
  require('../../assets/images/product/yucod_01.png'),
  require('../../assets/images/product/yucod_02.png'),
  require('../../assets/images/product/yucod_03.png'),
];
const v_def560 = require('../../assets/images/symbol_hint_brown.png');

const { width: v_0d9f50 } = v_700696.get('window');
const v_66f2f8 = 12;
const v_11fb5c = 16;
const v_ff4e8b = 20;

type Props = v_432191<v_8ad91b, 'MetaHome'>;

const v_684a52 = [
  { id: '1', title: 'Sebum & Pore Control Serum', subtitle: '복합성 피부 & 유수분 밸런싱', price: '100', rating: '4.8', reviews: 324, imageIndex: 0 },
  { id: '2', title: 'Hydro - Ceramide Serum', subtitle: '건성 피부 & 극강 보습', price: '100', rating: '4.8', reviews: 324, imageIndex: 1 },
  { id: '3', title: 'Brightening Serum', subtitle: '칙칙한 피부', price: '1', rating: '4.0', reviews: 120, imageIndex: 2 },
];

const v_2eadfb = ['월', '화', '수', '목', '금', '토', '일'];

const MetaHomeScreen: v_a3453e.FC<Props> = () => {
  const { navigate: v_9b57fc } = v_a0daa8();
  const { t: v_8d41d7 } = v_772971();
  const v_033e14 = v_e0068c();
  const { width: v_06db8f } = v_e45a99();
  const [v_9cb8cb] = v_5ab095(true);
  const [v_39cb7a] = v_5ab095<number | null>(8);
  const [v_9ab1d9] = v_5ab095<number | null>(65);
  const [v_79dc58] = v_5ab095([true, true, true, true, true, true, false]); 
  const v_05cf57 = v_79dc58.filter(Boolean).length;
  const [v_dc679a] = v_5ab095(7500);
  const [v_011173] = v_5ab095(10000);
  const [v_27d364, v_798518] = v_5ab095(0);

  const v_047e65 = v_39cb7a != null && v_39cb7a >= 8 ? v_8d41d7('home.health_labels.high') : v_39cb7a != null && v_39cb7a >= 6 ? v_8d41d7('home.health_labels.good') : v_8d41d7('home.health_labels.normal');
  const v_086582 = v_9ab1d9 != null && v_9ab1d9 >= 70 ? v_8d41d7('home.health_labels.high') : v_9ab1d9 != null && v_9ab1d9 >= 50 ? v_8d41d7('home.health_labels.normal') : v_8d41d7('home.health_labels.caution');
  const v_597fae = (v_06db8f - v_ff4e8b * 2 - v_66f2f8) / 2;
  const v_312c9c = Math.floor((v_06db8f - v_ff4e8b * 2 - v_9b1a04.large * 2 - 6 * 2) / 7);
  const v_765ddb = v_06db8f - v_ff4e8b * 2;
  const v_3af450 = (v_765ddb - v_11fb5c) / 1.5;

  const v_74d6ea = () => v_9b57fc('SkinAnalysis');
  const v_ae6f36 = () => v_9b57fc('HealthAnalysis');

  const v_dd0316 = (v_9e86fd) => {
    const v_cbddfc = v_9e86fd.nativeEvent.contentOffset.x;
    const v_2365e9 = Math.round(v_cbddfc / (v_3af450 + v_11fb5c));
    if (v_2365e9 >= 0 && v_2365e9 < v_684a52.length) {
      v_798518(v_2365e9);
    }
  };

  return (
    <MainLayout activeKey="home">
      <SafeView style={v_d81136.screen} showBottomBackground={false}>
        <SafeScrollView
          style={v_d81136.scrollView}
          showBottomBackground={false}
          disableBottomPadding={true}
          contentContainerStyle={v_472849.flatten([v_d81136.scrollContent, { paddingTop: 0 }])}
        >
          <View style={v_d81136.headerContainer}>
            {}
            <LinearGradient
              colors={['#615FFF', '#AD46FF', '#F6339A']}
              locations={[0, 0.5, 1]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={[v_d81136.headerGradient, { paddingTop: v_033e14.top + v_9b1a04.medium }]}
            >
              <View style={v_d81136.headerTop}>
                <View style={v_d81136.greetingWrap}>
                  <Text style={v_d81136.greetingMain}>{v_8d41d7('home.welcome')}</Text>
                  <Text style={v_d81136.greetingSub}>{v_8d41d7('home.ai_intro')}</Text>
                </View>
                <View style={v_d81136.headerRight}>
                  <TouchableOpacity onPress={() => v_9b57fc('MyInfoNotify')} style={v_d81136.headerIconBtn} hitSlop={8}>
                    <View style={[v_d81136.headerIconPill, v_d81136.notifPill]}>
                      <Bell size={22} color="#FFFFFF" />
                      {v_9cb8cb && <View style={v_d81136.notifBadge} />}
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={v_d81136.headerIconBtn} hitSlop={8}>
                    <View style={[v_d81136.headerIconPill, v_d81136.pointsPill]}>
                      <Coins size={20} color="#FFFFFF" />
                      <Text style={v_d81136.pointsText}>1250</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <Image source={v_9b2456} style={v_d81136.headerImage} resizeMode="contain" />
            </LinearGradient>

            {}
            <View style={v_d81136.metricsRow}>
              <TouchableOpacity style={[v_d81136.metricCard, { width: v_597fae }]} onPress={v_ae6f36} activeOpacity={0.9}>
                <View style={v_d81136.metricCardHeader}>
                  <Heart size={24} color="#EF4444" />
                  <Text style={v_d81136.metricTitle}>{v_8d41d7('home.health_index')}</Text>
                </View>

                <Text style={v_d81136.metricDate}>{v_39cb7a != null ? '2026.01.30' : v_8d41d7('home.before_measurement')}</Text>
                <View style={v_d81136.metricScoreWrap}>
                  <View style={v_d81136.metricScoreGroup}>
                    <Text style={v_d81136.metricScore}>{v_39cb7a != null ? v_39cb7a : '--'}</Text>
                    {v_39cb7a != null && <Text style={v_d81136.metricScoreUnit}>/ 10</Text>}
                  </View>
                  {v_39cb7a != null && (
                    <View style={[v_d81136.metricTag, { backgroundColor: '#3B82F620' }]}>
                      <Text style={[v_d81136.metricTagText, { color: '#3B82F6' }]}>{v_047e65}</Text>
                    </View>
                  )}
                </View>
                <View style={v_d81136.metricProgressBar}>
                  {v_39cb7a != null && <View style={[v_d81136.metricProgressFill, { width: `${(v_39cb7a / 10) * 100}%`, backgroundColor: '#3B82F6' }]} />}
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[v_d81136.metricCard, { width: v_597fae }]} onPress={v_74d6ea} activeOpacity={0.9}>
                <View style={v_d81136.metricCardHeader}>
                  <Droplet size={24} color="#38BDF8" />
                  <Text style={v_d81136.metricTitle}>{v_8d41d7('home.skin_score')}</Text>
                </View>
                <Text style={v_d81136.metricDate}>{v_9ab1d9 != null ? '2026.01.30' : v_8d41d7('home.before_measurement')}</Text>
                <View style={v_d81136.metricScoreWrap}>
                  <View style={v_d81136.metricScoreGroup}>
                    <Text style={v_d81136.metricScore}>{v_9ab1d9 != null ? v_9ab1d9 : '--'}</Text>
                    {v_9ab1d9 != null && <Text style={v_d81136.metricScoreUnit}>/ 100</Text>}
                  </View>
                  {v_9ab1d9 != null && (
                    <View style={[v_d81136.metricTag, { backgroundColor: '#F9731620' }]}>
                      <Text style={[v_d81136.metricTagText, { color: '#F97316' }]}>{v_086582}</Text>
                    </View>
                  )}
                </View>
                <View style={v_d81136.metricProgressBar}>
                  {v_9ab1d9 != null && <View style={[v_d81136.metricProgressFill, { width: `${v_9ab1d9}%`, backgroundColor: '#F97316' }]} />}
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {}
          <View style={v_d81136.section}>
            <Text style={v_d81136.sectionTitle}>{v_8d41d7('home.my_health_management')}</Text>
            <View style={v_d81136.managementRow}>
              <TouchableOpacity style={[v_d81136.managementCard, { width: v_597fae }]} onPress={v_ae6f36} activeOpacity={0.8}>
                <View style={[v_d81136.mgmtIconWrap, { backgroundColor: '#FEE2E2' }]}>
                  <Heart size={28} color="#EF4444" />
                </View>
                <Text style={v_d81136.mgmtTitle}>{v_8d41d7('home.health_analysis')}</Text>
                <Text style={v_d81136.mgmtSub}>{v_8d41d7('home.comprehensive_health_check')}</Text>
                <Text style={v_d81136.mgmtLink}>{v_8d41d7('home.start_btn')}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[v_d81136.managementCard, { width: v_597fae }]} onPress={v_74d6ea} activeOpacity={0.8}>
                <View style={[v_d81136.mgmtIconWrap, { backgroundColor: '#DBEAFE' }]}>
                  <Droplet size={28} color="#3B82F6" />
                </View>
                <Text style={v_d81136.mgmtTitle}>{v_8d41d7('home.skin_analysis')}</Text>
                <Text style={v_d81136.mgmtSub}>{v_8d41d7('home.ai_skin_diagnosis')}</Text>
                <Text style={v_d81136.mgmtLink}>{v_8d41d7('home.start_btn')}</Text>
              </TouchableOpacity>
            </View>
          </View>

          {}
          <TouchableOpacity style={v_d81136.aiHintyCard} onPress={v_ae6f36} activeOpacity={0.9}>
            <LinearGradient
              colors={['#615FFF', '#AD46FF']}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              style={v_d81136.aiHintyGradient}
            >
              <Text style={v_d81136.aiHintyTop}>{v_8d41d7('home.check_health_without_hospital')}</Text>
              <View style={v_d81136.aiHintyTitleRow}>
                <Image source={v_2e47ea} style={v_d81136.aiHintyRobot} resizeMode="contain" />
                <Text style={v_d81136.aiHintyTitle}>{v_8d41d7('home.ai_hinty_health_checkup')}</Text>
              </View>
              <Text style={v_d81136.aiHintyDesc}>{v_8d41d7('home.ai_hinty_health_desc')}</Text>
              <View style={v_d81136.familySection}>
                <Users size={20} color="#FFFFFF" />
                <View style={v_d81136.familySectionInner}>
                  <Text style={v_d81136.familyTitle}>{v_8d41d7('home.family_health_connect')}</Text>
                  <Text style={v_d81136.familyDesc}>{v_8d41d7('home.family_health_desc')}</Text>
                </View>
              </View>
              <View style={v_d81136.aiHintyBtn}>
                <Text style={v_d81136.aiHintyBtnText}>{v_8d41d7('home.ai_hinty_start')}</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>

          {}
          <View style={v_d81136.section}>
            <Text style={v_d81136.sectionTitle}>{v_8d41d7('home.attendance_check')}</Text>
            <View style={v_d81136.attendanceCardWrapper}>
              <LinearGradient
                colors={['#EEF2FF', '#FAF5FF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={v_d81136.attendanceCard}
              >
                <View style={v_d81136.attendanceHeader}>
                  <View style={v_d81136.attendanceHeaderText}>
                    <Text style={v_d81136.attendanceMain}>{v_8d41d7('home.daily_attendance_coins')}</Text>
                    <Text style={v_d81136.attendanceSub}>
                      {v_8d41d7('home.consecutive_prefix')}
                      <Text style={v_d81136.attendanceSubHighlight}>{v_05cf57}{v_8d41d7('home.consecutive_suffix')}</Text>
                      {v_8d41d7('home.consecutive_tail')}
                    </Text>
                  </View>
                  <View style={v_d81136.calendarIcon}>
                    <CalendarCheck size={22} color="#615FFF" />
                  </View>
                </View>
                <View style={v_d81136.weekStatus}>
                  <Text style={v_d81136.weekLabel}>{v_8d41d7('home.week_attendance_status')}</Text>
                  <Text style={v_d81136.weekDays}>{v_8d41d7('home.days_format', { current: v_05cf57, total: 7 })}</Text>
                </View>
                <View style={v_d81136.weekGrid}>
                  {v_2eadfb.map((v_087ffc, v_ebec57) => (
                    <View key={v_087ffc} style={v_d81136.weekDayCol}>
                      <View style={[v_d81136.weekDayBox, { width: v_312c9c, height: v_312c9c }, v_79dc58[v_ebec57] ? v_d81136.weekDayDone : v_d81136.weekDayPending]}>
                        {v_79dc58[v_ebec57] ? (
                          <Check size={22} color="#FFFFFF" />
                        ) : (
                          <Image source={v_def560} style={v_d81136.weekDayHintIcon} resizeMode="contain" />
                        )}
                      </View>
                      <Text style={v_d81136.weekDayText}>{v_087ffc}</Text>
                    </View>
                  ))}
                </View>
                <TouchableOpacity style={v_d81136.attendanceBtn} activeOpacity={0.8}>
                  <LinearGradient
                    colors={['#615FFF', '#AD46FF']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={v_d81136.attendanceBtnGrad}
                  >
                    <Coins size={18} color="#FFFFFF" />
                    <Text style={v_d81136.attendanceBtnText}>{v_8d41d7('home.today_attendance_check')}</Text>
                  </LinearGradient>
                </TouchableOpacity>
                <View style={v_d81136.attendanceBonusRow}>
                  <Coins size={14} color="#615FFF" />
                  <Text style={v_d81136.attendanceBonus}>{v_8d41d7('home.attendance_bonus')}</Text>
                </View>
              </LinearGradient>
            </View>
          </View>

          {}
          <View style={v_d81136.section}>
            <Text style={v_d81136.sectionTitle}>{v_8d41d7('home.health_challenge')}</Text>
            <View style={v_d81136.challengeCardWrapper}>
              <LinearGradient
                colors={['#ECFDF5', '#F0FDF4']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={v_d81136.challengeCard}
              >
                <View style={v_d81136.challengeHeader}>
                  <View style={v_d81136.challengeHeaderText}>
                    <Text style={v_d81136.challengeTitle}>{v_8d41d7('home.today_step_goal')}</Text>
                    <Text style={v_d81136.challengeReward}>
                      {v_8d41d7('home.goal_reward_prefix')}
                      <Text style={v_d81136.challengeRewardHighlight}>{v_8d41d7('home.goal_reward_highlight')}</Text>
                      {v_8d41d7('home.goal_reward_suffix')}
                    </Text>
                  </View>
                  <View style={v_d81136.ecgIcon}>
                    <Activity size={24} color="#FFFFFF" />
                  </View>
                </View>
                <View style={v_d81136.stepsRow}>
                  <Text style={v_d81136.stepsLabel}>{v_8d41d7('home.today_steps')}</Text>
                  <Text style={v_d81136.stepsValue}>{v_8d41d7('home.steps_format', { current: v_dc679a.toLocaleString(), goal: v_011173.toLocaleString() })}</Text>
                </View>
                <View style={v_d81136.progressBar}>
                  <View style={[v_d81136.progressFill, { width: `${(v_dc679a / v_011173) * 100}%` }]} />
                </View>
                <Text style={v_d81136.stepsRemaining}>
                  {v_8d41d7('home.steps_remaining_prefix')}
                  <Text style={v_d81136.stepsRemainingHighlight}>{(v_011173 - v_dc679a).toLocaleString()}{v_8d41d7('home.steps_remaining_suffix')}</Text>
                  {v_8d41d7('home.steps_remaining_tail')}
                </Text>
                <TouchableOpacity style={v_d81136.challengeBtn} activeOpacity={0.8}>
                  <View style={v_d81136.challengeBtnInner}>
                    <Coins size={18} color="#FFFFFF" />
                    <Text style={v_d81136.challengeBtnText}>{v_8d41d7('home.get_coins_on_goal')}</Text>
                  </View>
                </TouchableOpacity>
                <View style={v_d81136.stepTip}>
                  <Footprints size={16} color="#9CA3AF" />
                  <Text style={v_d81136.stepTipText}>{v_8d41d7('home.step_tip')}</Text>
                </View>
              </LinearGradient>
            </View>
          </View>

          {}
          <View style={v_d81136.section}>
            <View style={v_d81136.coinHeader}>
              <Text style={v_d81136.sectionTitle}>{v_8d41d7('home.coin_products')}</Text>
              <TouchableOpacity onPress={() => v_03e392.alert(v_8d41d7('common.notification'), v_8d41d7('home.view_all'))}>
                <Text style={v_d81136.viewAll}>{v_8d41d7('home.view_all')}</Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              onMomentumScrollEnd={v_dd0316}
              contentContainerStyle={v_d81136.productList}
              decelerationRate="fast"
              snapToInterval={v_3af450 + v_11fb5c}
              snapToAlignment="start"
            >
              {v_684a52.map((v_e2a85c) => (
                <View key={v_e2a85c.id} style={[v_d81136.productCard, { width: v_3af450, marginRight: v_11fb5c }]}>
                  <View style={v_d81136.productImageBox}>
                    <Image source={v_9c75ed[v_e2a85c.imageIndex]} style={v_d81136.productImage} resizeMode="contain" />
                  </View>
                  <View style={v_d81136.productInfo}>
                    <Text style={v_d81136.productTitle} numberOfLines={2}>{v_e2a85c.title}</Text>
                    <Text style={v_d81136.productSub}>{v_e2a85c.subtitle}</Text>
                    <View style={v_d81136.productPrice}>
                      <Coins size={14} color="#615FFF" />
                      <Text style={v_d81136.productPriceText}>{v_e2a85c.price} MTHT</Text>
                    </View>
                    <View style={v_d81136.productRating}>
                      <Star size={12} color="#FBBF24" />
                      <Text style={v_d81136.productRatingText}>{v_e2a85c.rating} ({v_e2a85c.reviews})</Text>
                    </View>
                  </View>
                </View>
              ))}
            </ScrollView>
            <View style={v_d81136.paginationDots}>
              {v_684a52.map((v_37eab7, v_ebec57) => (
                <View key={v_ebec57} style={[v_d81136.dot, v_ebec57 === v_27d364 && v_d81136.dotActive]} />
              ))}
            </View>
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
  headerContainer: {
    height: 450,
    marginBottom: v_9b1a04.xlarge,
  },
  headerGradient: {
    paddingHorizontal: v_ff4e8b,
    height: '100%',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: v_9b1a04.medium,
  },
  metricCardHeader: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  metricScoreWrap: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 2, marginTop: 8 },
  metricScoreGroup: { flexDirection: 'row', alignItems: 'center', gap: 2 },
  metricScoreUnit: { fontSize: v_ef658a.small, fontFamily: v_843035.regular, color: '#6A7282' },
  metricTag: { alignSelf: 'flex-start', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12, marginTop: 8 },
  greetingWrap: { flex: 1 },
  greetingMain: { fontSize: 24, fontFamily: v_843035.medium, color: '#FFFFFF', marginBottom: 4 },
  greetingSub: { fontSize: v_ef658a.medium, fontFamily: v_843035.regular, color: '#FFFFFF' },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 0 },
  headerIconBtn: { padding: 4 },
  headerIconPill: {
    borderRadius: 14,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 255, 255, 0.30)',
    backgroundColor: 'rgba(255, 255, 255, 0.20)',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'visible',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 6,

    elevation: 0,
  },
  notifPill: { width: 44, height: 44, position: 'relative' },
  pointsPill: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingHorizontal: 14, paddingVertical: 10, minHeight: 44 },
  notifBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EF4444',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  pointsText: { fontSize: v_ef658a.medium, fontFamily: v_843035.bold, color: '#FFFFFF' },
  headerImage: { width: '100%', height: 200, alignSelf: 'center', marginTop: 4 },
  metricsRow: {
    flexDirection: 'row',
    gap: v_66f2f8,
    paddingHorizontal: v_ff4e8b,
    marginTop: -24,
    marginBottom: v_9b1a04.large,
    transform: [{ translateY: '-100%' }],
  },
  metricCard: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 16,
    padding: v_9b1a04.large,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  metricTitle: { fontSize: v_ef658a.medium, fontFamily: v_843035.medium, color: v_1bfbd0.text, },
  metricDate: { fontSize: v_ef658a.small, fontFamily: v_843035.regular, color: '#9CA3AF', marginTop: 8 },
  metricScore: { fontSize: 24, fontFamily: v_843035.bold, color: v_1bfbd0.text, },
  metricTagText: { fontSize: 12, fontFamily: v_843035.medium },
  metricProgressBar: { height: 6, backgroundColor: '#E5E7EB', borderRadius: 3, marginTop: 12, overflow: 'hidden' },
  metricProgressFill: { height: '100%', borderRadius: 3 },
  section: { paddingHorizontal: v_ff4e8b, marginBottom: v_9b1a04.xlarge },
  sectionTitle: { fontSize: v_ef658a.large, fontFamily: v_843035.bold, color: v_1bfbd0.text, marginBottom: v_9b1a04.medium },
  managementRow: { flexDirection: 'row', gap: v_66f2f8 },
  managementCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: v_9b1a04.large,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  mgmtIconWrap: { width: 48, height: 48, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  mgmtTitle: { fontSize: v_ef658a.large, fontFamily: v_843035.bold, color: v_1bfbd0.text, marginTop: 12 },
  mgmtSub: { fontSize: 12, fontFamily: v_843035.regular, color: '#6B7280', marginTop: 4 },
  mgmtLink: { fontSize: 14, fontFamily: v_843035.semibold, color: '#3B82F6', marginTop: 8 },
  aiHintyCard: { marginHorizontal: v_ff4e8b, marginBottom: v_9b1a04.xlarge, borderRadius: 14, overflow: 'hidden', shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.1, shadowRadius: 15, elevation: 6 },
  aiHintyGradient: { padding: v_9b1a04.large },
  aiHintyTop: { fontSize: 12, fontFamily: v_843035.medium, color: 'rgba(255,255,255,0.9)', marginBottom: 8 },
  aiHintyTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 },
  aiHintyRobot: { width: 32, height: 32 },
  aiHintyTitle: { fontSize: 18, fontFamily: v_843035.bold, color: '#FFFFFF', flex: 1 },
  aiHintyDesc: { fontSize: 13, fontFamily: v_843035.regular, color: 'rgba(255,255,255,0.9)', lineHeight: 20, marginBottom: 16 },
  familySection: { flexDirection: 'row', gap: 12, marginBottom: 16, backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: 12, padding: 12 },
  familySectionInner: { flex: 1 },
  familyTitle: { fontSize: 14, fontFamily: v_843035.semibold, color: '#FFFFFF' },
  familyDesc: { fontSize: 12, fontFamily: v_843035.regular, color: 'rgba(255,255,255,0.85)', marginTop: 4 },
  aiHintyBtn: { borderRadius: 12, paddingVertical: 14, alignItems: 'center', backgroundColor: '#FFFFFF' },
  aiHintyBtnText: { fontSize: 16, fontFamily: v_843035.bold, color: '#4F39F6' },
  attendanceCardWrapper: { overflow: 'hidden', borderRadius: 14, borderWidth: 1.108, borderColor: '#E0E7FF', shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.1, shadowRadius: 15, elevation: 6 },
  attendanceCard: { padding: v_9b1a04.large, overflow: 'hidden', borderRadius: 14 },
  attendanceHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 },
  attendanceHeaderText: { flex: 1 },
  attendanceMain: { fontSize: 17, fontFamily: v_843035.bold, color: v_1bfbd0.text, marginBottom: 4 },
  attendanceSub: { fontSize: 14, fontFamily: v_843035.regular, color: v_1bfbd0.text },
  attendanceSubHighlight: { fontFamily: v_843035.bold, color: '#615FFF' },
  calendarIcon: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#E0E7FF', alignItems: 'center', justifyContent: 'center' },
  weekStatus: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  weekLabel: { fontSize: 13, fontFamily: v_843035.regular, color: '#6B7280' },
  weekDays: { fontSize: 13, fontFamily: v_843035.semibold, color: '#615FFF' },
  weekGrid: { flexDirection: 'row', justifyContent: 'space-between', gap: 2, marginBottom: 16 },
  weekDayCol: { flex: 1, alignItems: 'center', minWidth: 0 },
  weekDayBox: { borderRadius: 12, alignItems: 'center', justifyContent: 'center', overflow: 'hidden' },
  weekDayDone: { backgroundColor: '#615FFF' },
  weekDayPending: { backgroundColor: '#FFD740' },
  weekDayHintIcon: { width: 24, height: 24 },
  weekDayText: { fontSize: 12, fontFamily: v_843035.medium, color: '#9CA3AF', marginTop: 8 },
  attendanceBtn: { borderRadius: 12, overflow: 'hidden', marginBottom: 12 },
  attendanceBtnGrad: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, paddingVertical: 14 },
  attendanceBtnText: { fontSize: 16, fontFamily: v_843035.bold, color: '#FFFFFF' },
  attendanceBonusRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6 },
  attendanceBonus: { fontSize: 14, fontFamily: v_843035.regular, color: '#6B7280' },
  challengeCardWrapper: { overflow: 'hidden', borderRadius: 14, borderWidth: 1.108, borderColor: '#D0FAE5', shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.1, shadowRadius: 15, elevation: 6 },
  challengeCard: { padding: v_9b1a04.large, overflow: 'hidden', borderRadius: 14 },
  challengeHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 },
  challengeHeaderText: { flex: 1 },
  challengeTitle: { fontSize: 17, fontFamily: v_843035.bold, color: v_1bfbd0.text, marginBottom: 4 },
  challengeReward: { fontSize: 13, fontFamily: v_843035.regular, color: '#6B7280' },
  challengeRewardHighlight: { fontFamily: v_843035.bold, color: '#22C55E' },
  ecgIcon: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#22C55E', alignItems: 'center', justifyContent: 'center' },
  stepsRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  stepsLabel: { fontSize: 14, fontFamily: v_843035.medium, color: '#6B7280' },
  stepsValue: { fontSize: 16, fontFamily: v_843035.bold, color: v_1bfbd0.text },
  progressBar: { height: 8, backgroundColor: '#E5E7EB', borderRadius: 4, overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: '#374151', borderRadius: 4 },
  stepsRemaining: { fontSize: 13, fontFamily: v_843035.regular, color: '#6B7280', marginTop: 8 },
  stepsRemainingHighlight: { fontFamily: v_843035.bold, color: '#22C55E' },
  challengeBtn: { borderRadius: 12, marginTop: 16, backgroundColor: '#22C55E' },
  challengeBtnInner: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, paddingVertical: 14 },
  challengeBtnText: { fontSize: 16, fontFamily: v_843035.medium, color: '#FFFFFF' },
  stepTip: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 12 },
  stepTipText: { fontSize: 12, fontFamily: v_843035.regular, color: '#9CA3AF', flex: 1 },
  coinHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: v_9b1a04.medium },
  viewAll: { fontSize: 14, fontFamily: v_843035.semibold, color: '#3B82F6' },
  productList: { paddingRight: v_ff4e8b },
  productCard: { borderRadius: 16, overflow: 'hidden', borderWidth: 1, borderColor: '#E5E7EB' },
  productImageBox: { borderTopLeftRadius: 16, borderTopRightRadius: 16, paddingVertical: 16, paddingHorizontal: 12, alignItems: 'center', justifyContent: 'center', minHeight: 120 },
  productImage: { width: '100%', height: 100, alignSelf: 'center' },
  productInfo: { padding: v_9b1a04.medium, paddingTop: 12 },
  productTitle: { fontSize: 14, fontFamily: v_843035.bold, color: '#000000', marginBottom: 4, height: 40, lineHeight: 20 },
  productSub: { fontSize: 11, fontFamily: v_843035.regular, color: '#6A7282', marginBottom: 8 },
  productPrice: { flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: 4 },
  productPriceText: { fontSize: 13, fontFamily: v_843035.bold, color: '#000000', letterSpacing: -0.5 },
  productRating: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  productRatingText: { fontSize: 12, fontFamily: v_843035.regular, color: '#9CA3AF' },
  paginationDots: { flexDirection: 'row', justifyContent: 'center', gap: 6, marginTop: 12 },
  dot: { width: 8, height: 8, borderRadius: 8, backgroundColor: '#D1D5DB' },
  dotActive: { backgroundColor: '#3B82F6', },
  scrollView: { flex: 1 },
  scrollContent: { flexGrow: 1, paddingBottom: v_9b1a04.xlarge },
});

export default v_7aeeb0;
