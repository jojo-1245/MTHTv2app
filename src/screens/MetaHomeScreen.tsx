import v_a3453e, { v_de06a3, v_c4deb2, v_df9f57, v_5ab095 } from 'bapkr';
import { v_03e392, v_cf9c33, v_122070, v_472849, v_19b633, v_4623af, v_3094a2, v_e45a99 } from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_cf763b } from 'ixigazcpvfldbecwtbvavtbi';
import { v_2d4718 } from 'rcmrninabrnb';
import { v_0ae9ff, v_1df8e7, v_3ebb07, v_1a7837, v_7ebf51, v_4ce80f, v_56d16a, v_2e2f88 } from 'wjvlskvsbzsrojdbjsl';
import { v_e0068c } from 'vvfgtwbmdpbnvhtfbtbgudicfmpscw';
import { v_5ade23 } from 'xbfwaaanosqvazmrqoah';
import v_570c34 from '../components/SafeScrollView';
import v_1c1837 from '../components/MainLayout';
import v_556baf from '../components/SafeView';
import v_1a40c4 from '../components/Button';
import v_dd725b from '../components/GradientButton';
import { v_772971 } from 'jmpfvteuuztnp';
import type { v_8ad91b } from '../navigation/types';
import { v_a0daa8 } from '../navigation/useAppNavigation';
import { v_1bfbd0, v_843035, v_ef658a, v_9b1a04, v_f54309, v_b47b09, v_57793c } from '../constants';
import { v_4ebe12 } from '../services/healthApi';
import { v_52c734 } from '../services/skinApi';
import { v_998b9d } from '../utils/authErrorHandler';
import { v_b008ca, v_cbf5f1, v_e8dda3, v_6c47a7, v_2ca7ff, v_d0556f } from '../services/rewardsApi';
import { v_75c3c7 } from '../context';
import { v_312d93 } from '../utils/dateUtils';

const v_87993b = require('../../assets/images/logo_white.png');
const v_2e47ea = require('../../assets/images/robot_face.png');
const v_def560 = require('../../assets/images/symbol_hint_brown.png');
const v_ff4e8b = 20;
const v_66f2f8 = 12;
const v_55087c = 0.015;
const v_a1871a = 0.01;
const v_857bbc = ['weekday_mon', 'weekday_tue', 'weekday_wed', 'weekday_thu', 'weekday_fri', 'weekday_sat', 'weekday_sun'] as const;

const v_c19e2d = 10000;
const v_2258bf = 10;
const v_7c2566 = 10;
const v_5f1613 = v_7c2566 * (v_c19e2d / v_2258bf);
const v_113ab0 = 120;
const v_006281 = 10;
const v_234582 = 25;

type Props = v_432191<v_8ad91b, 'MetaHome'>;

const MetaHomeScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d }) => {
  const { t: v_8d41d7, i18n: v_9c213b } = v_772971();
  const { navigate: v_9b57fc } = v_a0daa8();
  const v_033e14 = v_e0068c();
  const { width: v_06db8f } = v_e45a99();
  const v_597fae = (v_06db8f - v_ff4e8b * 2 - v_66f2f8) / 2;
  const { currentSteps: v_dc679a, stepGoal: v_011173 } = v_75c3c7();
  const v_616ba8 = v_df9f57(
    () => Array.from({ length: v_c19e2d / v_2258bf }, (v_37eab7, v_ebec57) => (v_ebec57 + 1) * v_2258bf),
    []
  );
  const v_81d478 = v_616ba8.slice(0, v_234582);

  const [v_39cb7a, v_ecd01c] = v_5ab095<number | null>(null);
  const [v_9ab1d9, v_6bf58d] = v_5ab095<number | null>(null);
  const [v_05a030, v_435f99] = v_5ab095<string | null>(null);
  const [v_32c7b6, v_07829a] = v_5ab095<string | null>(null);

  const v_56263a = v_de06a3(async () => {
    try {
      const v_3722b7 = await v_4ebe12();
      if (v_3722b7) {
        v_ecd01c(v_3722b7.health_index);
        v_435f99(v_3722b7.record_date);
      } else {
        v_ecd01c(null);
        v_435f99(null);
      }
      const v_51e81e = await v_52c734();
      if (v_51e81e) {
        v_6bf58d(v_51e81e.overall_score);
        v_07829a(v_51e81e.record_date);
      } else {
        v_6bf58d(null);
        v_07829a(null);
      }
    } catch (v_5e9bfe) {
      console.error('[MetaHomeScreen] 최신 점수 로드 실패:', v_5e9bfe);
      if (v_998b9d(v_c65f5d, v_5e9bfe)) return;
    }
  }, [v_c65f5d]);

  v_cf763b(
    v_de06a3(() => {
      const v_2cf1d0 = v_2d4718.runAfterInteractions(() => {
        v_56263a();
      });
      return () => v_2cf1d0.cancel();
    }, [v_56263a])
  );

  const v_30ddf9 = v_39cb7a != null ? v_b47b09(v_39cb7a) : null;
  const v_129031 = v_9ab1d9 != null ? v_57793c(v_9ab1d9) : null;
  const v_047e65 = v_30ddf9 ? v_8d41d7(`home.health_labels.${v_30ddf9}`) : '';
  const v_086582 = v_129031 ? v_8d41d7(`home.health_labels.${v_129031}`) : '';
  const v_b08678 = v_30ddf9 ? v_f54309[v_30ddf9] : null;
  const v_5d590c = v_129031 ? v_f54309[v_129031] : null;

  const [v_79dc58, v_5b2bbb] = v_5ab095([false, false, false, false, false, false, false]);
  const [v_05cf57, v_0d7691] = v_5ab095(0);
  const [v_f2fb87, v_c34f93] = v_5ab095(0);
  const [v_b43899, v_468450] = v_5ab095(7);
  const [v_1f7868, v_e3bbea] = v_5ab095(false);
  const [v_b1361b, v_04f4d8] = v_5ab095<number[]>([]);
  const [v_cd6f97, v_5ce610] = v_5ab095(false);
  const v_8aab53 = (new Date().getDay() + 6) % 7;
  const v_74891a = v_79dc58[v_8aab53];
  const v_312c9c = Math.floor((v_06db8f - v_ff4e8b * 2 - v_9b1a04.large * 2 - 6 * 2) / 7);

  const v_ab4ad9 = (v_a86996): number => {
    const v_8dffde = new Date(v_a86996);
    return (v_8dffde.getDay() + 6) % 7;
  };

  v_c4deb2(() => {
    const v_2cf1d0 = v_2d4718.runAfterInteractions(() => {
      const v_58b642 = async () => {
        try {
          const v_3ea33e = await v_e8dda3(v_c65f5d);
          const v_cf60ad = [false, false, false, false, false, false, false];
          v_3ea33e.recent_status.forEach((v_8c0b26) => {
            const v_62a264 = v_ab4ad9(v_8c0b26.date);
            if (v_62a264 >= 0 && v_62a264 < 7) {
              v_cf60ad[v_62a264] = v_8c0b26.attended;
            }
          });
          v_5b2bbb(v_cf60ad);
          v_0d7691(v_3ea33e.current_streak);
          v_c34f93(v_3ea33e.week_attended);
          v_468450(v_3ea33e.week_total);
        } catch (v_5e9bfe) {
          console.error('[MetaHomeScreen] 출석 상태 상세 로드 실패:', v_5e9bfe);
          if (v_998b9d(v_c65f5d, v_5e9bfe)) return;
          try {
            const v_d308b5 = await v_cbf5f1(v_c65f5d);
            if (v_d308b5.checked_today) {
              v_5b2bbb((v_ba2215) => {
                const v_a448ad = [...v_ba2215];
                v_a448ad[v_8aab53] = true;
                return v_a448ad;
              });
            }
            v_0d7691(v_d308b5.streak_days);
          } catch (v_741f30) {
            console.error('[MetaHomeScreen] 출석 상태 로드 실패 (폴백):', v_741f30);
            if (v_998b9d(v_c65f5d, v_741f30)) return;
          }
        }
      };
      v_58b642();
    });
    return () => v_2cf1d0.cancel();
  }, [v_c65f5d, v_8aab53]);

  v_c4deb2(() => {
    const v_2cf1d0 = v_2d4718.runAfterInteractions(() => {
      const v_0f9a7b = async () => {
        try {
          const v_227df7 = v_312d93(v_9c213b.language);
          const v_5268c1 = await v_6c47a7(v_227df7);
          v_04f4d8(Array.isArray(v_5268c1) ? v_5268c1 : []);
        } catch (v_5e9bfe) {
          console.error('[MetaHomeScreen] 걸음수 보상 상태 로드 실패:', v_5e9bfe);
        }
      };
      v_0f9a7b();
    });
    return () => v_2cf1d0.cancel();
  }, [v_9c213b.language]);

  const v_c907cb = async (v_af3e48) => {
    const v_c5110a = v_616ba8[v_af3e48];
    if (v_c5110a == null || v_cd6f97 || v_dc679a < v_c5110a || v_b1361b.includes(v_af3e48)) {
      return;
    }
    v_5ce610(true);
    try {
      const v_227df7 = v_312d93(v_9c213b.language);
      const v_f29bbd = v_dc679a * 1000;
      const v_43c42e = await v_2ca7ff(v_227df7, v_f29bbd, v_011173, v_c65f5d, v_af3e48);
      if (Array.isArray(v_43c42e.state_idx)) {
        v_04f4d8(v_43c42e.state_idx);
      }
      const v_59ccdc = v_43c42e.new_rewards_count > 0
        ? `${v_8d41d7('common.success')}\n${v_8d41d7('home.step_reward_received', { count: v_43c42e.new_rewards_count, amount: v_43c42e.total_reward_paid })}`
        : v_8d41d7('home.step_sync_success');
      v_03e392.alert(v_8d41d7('common.success'), v_59ccdc);
    } catch (v_5e9bfe) {
      console.error('[MetaHomeScreen] 걸음수 보상 받기 실패:', v_5e9bfe);
      if (v_998b9d(v_c65f5d, v_5e9bfe)) return;
      const v_1744b9 = v_5e9bfe instanceof Error ? v_5e9bfe.message : v_8d41d7('home.step_reward_failed');
      v_03e392.alert(v_8d41d7('common.error'), v_1744b9);
    } finally {
      v_5ce610(false);
    }
  };

  const v_d0c5d7 = async () => {
    if (v_74891a || v_1f7868) return;
    v_e3bbea(true);
    try {
      const v_43c42e = await v_b008ca(v_c65f5d);
      try {
        const v_3ea33e = await v_e8dda3(v_c65f5d);
        const v_cf60ad = [false, false, false, false, false, false, false];
        v_3ea33e.recent_status.forEach((v_8c0b26) => {
          const v_62a264 = v_ab4ad9(v_8c0b26.date);
          if (v_62a264 >= 0 && v_62a264 < 7) {
            v_cf60ad[v_62a264] = v_8c0b26.attended;
          }
        });
        v_5b2bbb(v_cf60ad);
        v_0d7691(v_3ea33e.current_streak);
        v_c34f93(v_3ea33e.week_attended);
        v_468450(v_3ea33e.week_total);
      } catch {
        v_5b2bbb((v_ba2215) => {
          const v_a448ad = [...v_ba2215];
          v_a448ad[v_8aab53] = true;
          return v_a448ad;
        });
        v_0d7691(v_43c42e.streak_days);
      }
      const v_59ccdc = v_43c42e.is_bonus
        ? v_8d41d7('home.attendance_bonus_received', { amount: v_43c42e.reward_amount, days: v_43c42e.streak_days })
        : v_8d41d7('home.attendance_reward_received', { amount: v_43c42e.reward_amount });
      v_03e392.alert(v_8d41d7('common.success'), v_59ccdc);
    } catch (v_5e9bfe) {
      console.error('[MetaHomeScreen] 출석 체크 실패:', v_5e9bfe);
      if (v_998b9d(v_c65f5d, v_5e9bfe)) return;
      if (v_5e9bfe instanceof v_d0556f) {
        v_5b2bbb((v_ba2215) => {
          const v_a448ad = [...v_ba2215];
          v_a448ad[v_8aab53] = true;
          return v_a448ad;
        });
        v_03e392.alert(v_8d41d7('common.notification'), v_8d41d7('home.already_checked_today'));
        return;
      }
      const v_1744b9 = v_5e9bfe instanceof Error ? v_5e9bfe.message : v_8d41d7('home.attendance_check_failed');
      v_03e392.alert(v_8d41d7('common.error'), v_1744b9);
    } finally {
      v_e3bbea(false);
    }
  };

  return (
    <MainLayout activeKey="home">
      <SafeView style={v_d81136.screen} showBottomBackground={false}>
        <SafeScrollView
          style={v_d81136.scrollView}
          showBottomBackground={false}
          disableBottomPadding={true}
          showStatusBarBackground={true}
          statusBarBackgroundColor="#FFFFFF"
          contentContainerStyle={v_d81136.scrollContent}
        >
          <View style={v_d81136.headerContainer}>
            <LinearGradient
              colors={['#615FFF', '#AD46FF', '#F6339A']}
              locations={[0, 0.5, 1]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={[v_d81136.headerGradient, { paddingTop: v_033e14.top + v_9b1a04.medium }]}
            >
              <View style={v_d81136.headerTop}>
                <View style={v_d81136.headerLeft}>
                  <Image source={v_87993b} style={v_d81136.headerLogo} resizeMode="contain" />
                </View>
                <View style={v_d81136.headerRight}>
                  <TouchableOpacity onPress={() => v_9b57fc('MyInfoNotify')} style={v_d81136.headerIconBtn} hitSlop={8}>
                    <View style={[v_d81136.headerIconPill, v_d81136.notifPill]}>
                      <Bell size={22} color="#FFFFFF" />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => v_9b57fc('Wallet')} style={v_d81136.headerIconBtn} hitSlop={8}>
                    <View style={[v_d81136.headerIconPill, v_d81136.pointsPill]}>
                      <Coins size={20} color="#FFFFFF" />
                      <Text style={v_d81136.pointsText}>1250</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </LinearGradient>
          </View>

          <View style={v_d81136.metricsRow}>
            <TouchableOpacity style={[v_d81136.metricCard, { width: v_597fae }]} onPress={() => v_9b57fc('HealthAnalysis', { initialTab: 'records' })} activeOpacity={0.9}>
              <View style={v_d81136.metricCardHeader}>
                <Heart size={24} color="#EF4444" />
                <Text style={v_d81136.metricTitle}>{v_8d41d7('home.health_index')}</Text>
              </View>
              <Text style={v_d81136.metricDate}>
                {v_39cb7a != null && v_05a030 ? v_05a030.replace(/-/g, '.') : v_8d41d7('home.before_measurement')}
              </Text>
              <View style={v_d81136.metricScoreWrap}>
                <View style={v_d81136.metricScoreGroup}>
                  <Text style={v_d81136.metricScore}>{v_39cb7a != null ? v_39cb7a : '--'}</Text>
                  {v_39cb7a != null && <Text style={v_d81136.metricScoreUnit}>/ 10</Text>}
                </View>
                {v_39cb7a != null && v_b08678 && (
                  <View style={[v_d81136.metricTag, { backgroundColor: v_b08678.bgColor }]}>
                    <Text style={[v_d81136.metricTagText, { color: v_b08678.color }]}>{v_047e65}</Text>
                  </View>
                )}
              </View>
              <View style={v_d81136.metricProgressBar}>
                {v_39cb7a != null && v_b08678 && (
                  <View style={[v_d81136.metricProgressFill, { width: `${(v_39cb7a / 10) * 100}%`, backgroundColor: v_b08678.color }]} />
                )}
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[v_d81136.metricCard, { width: v_597fae }]} onPress={() => v_9b57fc('SkinAnalysis', { initialTab: 'records' })} activeOpacity={0.9}>
              <View style={v_d81136.metricCardHeader}>
                <Droplet size={24} color="#38BDF8" />
                <Text style={v_d81136.metricTitle}>{v_8d41d7('home.skin_score')}</Text>
              </View>
              <Text style={v_d81136.metricDate}>
                {v_9ab1d9 != null && v_32c7b6 ? v_32c7b6.replace(/-/g, '.') : v_8d41d7('home.before_measurement')}
              </Text>
              <View style={v_d81136.metricScoreWrap}>
                <View style={v_d81136.metricScoreGroup}>
                  <Text style={v_d81136.metricScore}>{v_9ab1d9 != null ? v_9ab1d9 : '--'}</Text>
                  {v_9ab1d9 != null && <Text style={v_d81136.metricScoreUnit}>/ 100</Text>}
                </View>
                {v_9ab1d9 != null && v_5d590c && (
                  <View style={[v_d81136.metricTag, { backgroundColor: v_5d590c.bgColor }]}>
                    <Text style={[v_d81136.metricTagText, { color: v_5d590c.color }]}>{v_086582}</Text>
                  </View>
                )}
              </View>
              <View style={v_d81136.metricProgressBar}>
                {v_9ab1d9 != null && v_5d590c && (
                  <View style={[v_d81136.metricProgressFill, { width: `${v_9ab1d9}%`, backgroundColor: v_5d590c.color }]} />
                )}
              </View>
            </TouchableOpacity>
          </View>

          <View style={v_d81136.section}>
            <Text style={v_d81136.sectionTitle}>{v_8d41d7('home.my_health_management')}</Text>
            <View style={v_d81136.managementRow}>
              <TouchableOpacity style={[v_d81136.managementCard, { width: v_597fae }]} onPress={() => v_9b57fc('HealthAnalysis')} activeOpacity={0.8}>
                <View style={[v_d81136.mgmtCardDeco, { backgroundColor: 'rgba(239, 68, 68, 0.15)' }]} />
                <View style={[v_d81136.mgmtCardDeco2, { backgroundColor: 'rgba(239, 68, 68, 0.15)' }]} />
                <View style={[v_d81136.mgmtIconWrap, { backgroundColor: '#FEE2E2' }]}>
                  <Heart size={28} color="#EF4444" />
                </View>
                <View>
                  <Text style={v_d81136.mgmtTitle}>{v_8d41d7('home.health_analysis')}</Text>
                  <Text style={v_d81136.mgmtSub}>{v_8d41d7('home.comprehensive_health_check')}</Text>
                </View>
                <Text style={[v_d81136.mgmtLink, { color: '#EF4444' }]}>{v_8d41d7('home.start_btn')}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[v_d81136.managementCard, { width: v_597fae }]} onPress={() => v_9b57fc('SkinAnalysis')} activeOpacity={0.8}>
                <View style={[v_d81136.mgmtCardDeco, { backgroundColor: 'rgba(59, 130, 246, 0.15)' }]} />
                <View style={[v_d81136.mgmtCardDeco2, { backgroundColor: 'rgba(59, 130, 246, 0.15)' }]} />
                <View style={[v_d81136.mgmtIconWrap, { backgroundColor: '#DBEAFE' }]}>
                  <Droplet size={28} color="#3B82F6" />
                </View>
                <Text style={v_d81136.mgmtTitle}>{v_8d41d7('home.skin_analysis')}</Text>
                <Text style={v_d81136.mgmtSub}>{v_8d41d7('home.ai_skin_diagnosis')}</Text>
                <Text style={v_d81136.mgmtLink}>{v_8d41d7('home.start_btn')}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={v_d81136.aiHintyCard}>
            <LinearGradient
              colors={['#615FFF', '#AD46FF']}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              style={v_d81136.aiHintyGradient}
            >
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
              <Button
                variant="filled"
                title={v_8d41d7('home.ai_hinty_start')}
                onPress={() => v_9b57fc('Chat')}
                style={v_d81136.aiHintyBtn}
                textStyle={v_d81136.aiHintyBtnText}
              />
            </LinearGradient>
          </View>

          <View style={v_d81136.section}>
            <Text style={v_d81136.sectionTitle}>{v_8d41d7('home.attendance_check')}</Text>
            <View style={v_d81136.attendanceCardWrapper}>
              <View style={v_d81136.attendanceCard}>
                <View style={v_d81136.attendanceHeader}>
                  <View style={v_d81136.attendanceHeaderText}>
                    <Text style={v_d81136.attendanceMain}>{v_8d41d7('home.daily_attendance_coins')}</Text>
                    <Text style={v_d81136.challengeReward}>
                      {v_8d41d7('home.attendance_reward_prefix')}
                      <Text style={v_d81136.attendanceRewardHighlight}>+{v_55087c} MTHT</Text>
                      {v_8d41d7('home.attendance_reward_suffix')}
                    </Text>
                  </View>
                  <View style={v_d81136.calendarIcon}>
                    <CalendarCheck size={22} color="#615FFF" />
                  </View>
                </View>
                <View style={v_d81136.weekStatus}>
                  <Text style={v_d81136.weekLabel}>{v_8d41d7('home.week_attendance_status')}</Text>
                  <Text style={v_d81136.weekDays}>{v_8d41d7('home.days_format', { current: v_f2fb87, total: v_b43899 })}</Text>
                </View>
                <View style={v_d81136.weekGrid}>
                  {v_857bbc.map((v_b24339, v_ebec57) => (
                    <View key={v_b24339} style={v_d81136.weekDayCol}>
                      <View style={[v_d81136.weekDayBox, { width: v_312c9c, height: v_312c9c }, v_79dc58[v_ebec57] ? v_d81136.weekDayDone : v_d81136.weekDayPending]}>
                        {v_79dc58[v_ebec57] ? (
                          <Check size={22} color="#FFFFFF" />
                        ) : (
                          <Image source={v_def560} style={v_d81136.weekDayHintIcon} resizeMode="contain" />
                        )}
                      </View>
                      <Text style={v_d81136.weekDayText}>{v_8d41d7(`common.${v_b24339}`)}</Text>
                    </View>
                  ))}
                </View>
                <GradientButton
                  title={
                    v_1f7868
                      ? v_8d41d7('home.attendance_checking', '체크 중...')
                      : v_74891a
                        ? v_8d41d7('home.attendance_check_complete')
                        : v_8d41d7('home.attendance_check')
                  }
                  leftIcon={<Coins size={16} color="#FFFFFF" />}
                  style={[v_d81136.attendanceBtn, (v_74891a || v_1f7868) && v_d81136.attendanceBtnDisabled]}
                  onPress={v_d0c5d7}
                  disabled={v_74891a || v_1f7868}
                />
                <View style={v_d81136.attendanceBonusRow}>
                  <Coins size={14} color="#615FFF" />
                  <Text style={v_d81136.attendanceBonus}>
                    {v_8d41d7('home.attendance_bonus_prefix')}
                    <Text style={v_d81136.attendanceBonusHighlight}>{v_a1871a} MTHT</Text>
                    {v_8d41d7('home.attendance_bonus_suffix')}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={v_d81136.section}>
            <Text style={v_d81136.sectionTitle}>{v_8d41d7('home.health_challenge')}</Text>
            <View style={v_d81136.challengeCardWrapper}>
              <LinearGradient
                colors={['#F5F3FF', '#EDE9FE', '#FDF4FF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={v_d81136.challengeCard}
              >
                <View style={v_d81136.challengeHeader}>
                  <View style={v_d81136.challengeHeaderText}>
                    <Text style={v_d81136.challengeTitle}>{v_8d41d7('home.today_step_goal')}</Text>
                    <Text style={v_d81136.challengeReward}>
                      {v_8d41d7('home.goal_reward_prefix')}
                      <Text style={v_d81136.challengeRewardHighlight}>+{v_5f1613} MTHT</Text>
                      {v_8d41d7('home.goal_reward_suffix')}
                    </Text>
                  </View>
                  <View style={v_d81136.stepChallengeIcon}>
                    <Footprints size={22} color="#7C3AED" />
                  </View>
                </View>
                <View style={v_d81136.stepsRow}>
                  <Text style={v_d81136.stepsLabel}>{v_8d41d7('home.today_steps')}</Text>
                  <Text style={v_d81136.stepsValue}>
                    <Text style={v_d81136.stepsValueCurrent}>{v_dc679a.toLocaleString()}</Text>
                    <Text style={v_d81136.stepsValueSlash}>/</Text>
                    <Text style={v_d81136.stepsValueGoal}>{v_011173.toLocaleString()}</Text>
                    <Text style={v_d81136.stepsValueUnit}> {v_8d41d7('home.steps_unit')}</Text>
                  </Text>
                </View>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={v_d81136.stepMilestonesList}
                >
                  {v_81d478.map((v_c5110a, v_a56041) => {
                    const v_fa25a3 = v_dc679a >= v_c5110a;
                    const v_ddef54 = v_b1361b.includes(v_a56041);
                    const v_26dce6 = v_fa25a3 && !v_ddef54 && !v_cd6f97;
                    const v_e0ed2f = !v_fa25a3;
                    return (
                      <View key={v_c5110a} style={[v_d81136.stepMilestoneCard, { width: v_113ab0 }]}>
                        <Text style={v_d81136.stepMilestoneLabelText}>
                          {v_8d41d7('home.steps_milestone', { count: v_c5110a })}
                        </Text>
                        <Text style={v_d81136.stepMilestoneLabel}>+{v_7c2566}M</Text>
                        <TouchableOpacity
                          style={[
                            v_d81136.stepMilestoneBtn,
                            v_26dce6 && v_d81136.stepMilestoneBtnActive,
                            v_ddef54 && v_d81136.stepMilestoneBtnClaimed,
                            v_e0ed2f && v_d81136.stepMilestoneBtnInactive,
                          ]}
                          onPress={() => v_c907cb(v_a56041)}
                          disabled={!v_26dce6 || v_cd6f97}
                          activeOpacity={0.8}
                        >
                          {v_26dce6 ? (
                            <LinearGradient
                              colors={['#7C3AED', '#A78BFA']}
                              start={{ x: 0, y: 0 }}
                              end={{ x: 1, y: 0 }}
                              style={v_d81136.stepMilestoneBtnGradient}
                            >
                              <Coins size={14} color="#FFFFFF" />
                              <Text style={v_d81136.stepMilestoneBtnTextActive}>{v_8d41d7('home.step_receive')}</Text>
                            </LinearGradient>
                          ) : (
                            <View style={v_d81136.stepMilestoneBtnInner}>
                              <Coins size={14} color={v_ddef54 ? '#A78BFA' : '#9CA3AF'} />
                              <Text
                                style={[
                                  v_d81136.stepMilestoneBtnText,
                                  v_ddef54 && v_d81136.stepMilestoneBtnTextClaimed,
                                  v_e0ed2f && v_d81136.stepMilestoneBtnTextInactive,
                                ]}
                              >
                                {v_ddef54 ? v_8d41d7('home.step_claimed') : v_8d41d7('home.step_receive')}
                              </Text>
                            </View>
                          )}
                        </TouchableOpacity>
                      </View>
                    );
                  })}
                </ScrollView>
                <View style={v_d81136.stepTip}>
                  <Footprints size={16} color="#A78BFA" />
                  <Text style={v_d81136.stepTipText}>{v_8d41d7('home.step_tip')}</Text>
                </View>
              </LinearGradient>
            </View>
          </View>
        </SafeScrollView>
      </SafeView>
    </MainLayout>
  );
};

const v_d81136 = v_472849.create({
  screen: { flex: 1, backgroundColor: '#F9FAFB' },
  scrollView: { flex: 1, backgroundColor: '#F9FAFB' },
  scrollContent: { flexGrow: 1, paddingBottom: 24 },
  headerContainer: {
    height: 120,
    marginBottom: v_9b1a04.large,
    overflow: 'hidden',
  },
  headerGradient: {
    paddingHorizontal: v_ff4e8b,
    height: '100%',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: { flexDirection: 'row', alignItems: 'flex-start' },
  headerLogo: { width: 120, height: 20, opacity: 0.9 },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  headerIconBtn: { padding: 4 },
  headerIconPill: {
    borderRadius: 12,
    borderWidth: 1.1,
    borderColor: 'rgba(255, 255, 255, 0.30)',
    backgroundColor: 'rgba(255, 255, 255, 0.20)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notifPill: { width: 40, height: 40 },
  pointsPill: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingHorizontal: 12, paddingVertical: 8, minHeight: 40 },
  pointsText: { fontSize: v_ef658a.medium, fontFamily: v_843035.bold, color: '#FFFFFF' },
  metricsRow: {
    flexDirection: 'row',
    gap: v_66f2f8,
    paddingHorizontal: v_ff4e8b,
    marginTop: -24,
    marginBottom: v_9b1a04.large,
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
  metricCardHeader: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  metricTitle: { fontSize: v_ef658a.medium, fontFamily: v_843035.medium, color: v_1bfbd0.text },
  metricDate: { fontSize: v_ef658a.small, fontFamily: v_843035.regular, color: '#9CA3AF', marginTop: 8 },
  metricScoreWrap: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 2, marginTop: 8 },
  metricScoreGroup: { flexDirection: 'row', alignItems: 'center', gap: 2 },
  metricScore: { fontSize: 24, fontFamily: v_843035.bold, color: v_1bfbd0.text },
  metricScoreUnit: { fontSize: v_ef658a.small, fontFamily: v_843035.regular, color: '#6A7282' },
  metricTag: { alignSelf: 'flex-start', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12, marginTop: 8 },
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
    shadowColor: '#cccccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: v_1bfbd0.borderLight,
  },
  mgmtCardDeco: {
    position: 'absolute',
    top: -20,
    right: -25,
    width: 75,
    height: 75,
    borderRadius: 75,
    opacity: 0.3,
  },
  mgmtCardDeco2: {
    position: 'absolute',
    bottom: -24,
    left: -24,
    width: 100,
    height: 100,
    borderRadius: 100,
    opacity: 0.3,
  },
  mgmtIconWrap: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mgmtTitle: { fontSize: v_ef658a.large, fontFamily: v_843035.bold, color: v_1bfbd0.text, marginTop: 12 },
  mgmtSub: { fontSize: 12, fontFamily: v_843035.regular, color: '#6B7280', marginTop: 4 },
  mgmtLink: { fontSize: 14, fontFamily: v_843035.semibold, color: '#3B82F6', marginTop: 8 },
  aiHintyCard: {
    marginHorizontal: v_ff4e8b,
    marginBottom: v_9b1a04.xlarge,
    borderRadius: 14,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 6,
  },
  aiHintyGradient: { padding: v_9b1a04.large },
  aiHintyTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 },
  aiHintyRobot: { width: 32, height: 32 },
  aiHintyTitle: { fontSize: 18, fontFamily: v_843035.bold, color: '#FFFFFF', flex: 1 },
  aiHintyDesc: { fontSize: 13, fontFamily: v_843035.regular, color: 'rgba(255,255,255,0.9)', lineHeight: 20, marginBottom: 16 },
  familySection: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 12,
    padding: 12,
  },
  familySectionInner: { flex: 1 },
  familyTitle: { fontSize: 14, fontFamily: v_843035.semibold, color: '#FFFFFF' },
  familyDesc: { fontSize: 12, fontFamily: v_843035.regular, color: 'rgba(255,255,255,0.85)', marginTop: 4 },
  aiHintyBtn: { backgroundColor: '#FFFFFF', borderWidth: 0 },
  aiHintyBtnText: { color: '#4F39F6' },
  attendanceCardWrapper: {
    overflow: 'hidden',
    borderRadius: 14,
    borderWidth: 1.108,
    borderColor: '#efefef',
    shadowColor: '#cccccc',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 6,
    backgroundColor: '#ffffff',
  },
  attendanceCard: { padding: v_9b1a04.large, overflow: 'hidden', borderRadius: 14 },
  attendanceHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 },
  attendanceHeaderText: { flex: 1 },
  attendanceMain: { fontSize: 17, fontFamily: v_843035.bold, color: v_1bfbd0.text, marginBottom: 4 },
  challengeReward: { fontSize: 13, fontFamily: v_843035.regular, color: '#6B7280' },
  attendanceRewardHighlight: { fontFamily: v_843035.bold, color: '#615FFF' },
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
  attendanceBtn: { marginBottom: 12 },
  attendanceBtnDisabled: { opacity: 0.6 },
  attendanceBonusRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6 },
  attendanceBonus: { fontSize: v_ef658a.medium, color: '#6B7280' },
  attendanceBonusHighlight: { fontFamily: v_843035.bold, color: '#615FFF' },
  challengeCardWrapper: {
    overflow: 'hidden',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E9E5FF',
    shadowColor: '#7C3AED',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 6,
  },
  challengeCard: { padding: v_9b1a04.large, overflow: 'hidden', borderRadius: 12 },
  challengeHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 },
  stepChallengeIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  challengeHeaderText: { flex: 1 },
  challengeTitle: { fontSize: 18, fontFamily: v_843035.bold, color: '#4C1D95', marginBottom: 4 },
  challengeRewardHighlight: { fontFamily: v_843035.bold, color: '#7C3AED' },
  stepsRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  stepsLabel: { fontSize: 14, fontFamily: v_843035.medium, color: '#6B7280' },
  stepsValue: { fontSize: 14, fontFamily: v_843035.bold },
  stepsValueCurrent: { color: '#4C1D95' },
  stepsValueSlash: { color: '#9CA3AF' },
  stepsValueGoal: { color: '#9CA3AF', fontFamily: v_843035.regular },
  stepsValueUnit: { color: '#9CA3AF', fontFamily: v_843035.regular },
  stepMilestonesList: { flexDirection: 'row', gap: v_006281, paddingRight: v_ff4e8b },
  stepMilestoneCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#EDE9FE',
    alignItems: 'center',
    aspectRatio: 1.05,
    shadowColor: '#7C3AED',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  stepMilestoneLabel: { fontSize: 14, fontFamily: v_843035.bold, color: '#4C1D95', marginBottom: 8 },
  stepMilestoneLabelText: {
    fontSize: v_ef658a.small,
    letterSpacing: -0.5,
    fontFamily: v_843035.regular,
    textAlign: 'center',
    color: '#6B7280',
  },
  stepMilestoneBtn: { width: '100%', borderRadius: 8, overflow: 'hidden' },
  stepMilestoneBtnActive: { overflow: 'hidden' },
  stepMilestoneBtnClaimed: {
    backgroundColor: '#F5F3FF',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepMilestoneBtnInactive: {
    backgroundColor: '#F3F4F6',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepMilestoneBtnInner: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6 },
  stepMilestoneBtnGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  stepMilestoneBtnText: { fontSize: 12, fontFamily: v_843035.semibold, color: '#9CA3AF' },
  stepMilestoneBtnTextClaimed: { color: '#A78BFA' },
  stepMilestoneBtnTextInactive: { color: '#9CA3AF' },
  stepMilestoneBtnTextActive: { fontSize: 12, fontFamily: v_843035.bold, color: '#FFFFFF' },
  stepTip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#EDE9FE',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: v_9b1a04.small,
    padding: v_9b1a04.small,
  },
  stepTipText: { fontSize: 12, fontFamily: v_843035.regular, color: '#6B7280', flex: 1 },
});

export default v_7aeeb0;
