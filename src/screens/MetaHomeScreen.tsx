import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import {
  ActivityIndicator,
  Alert,
  Animated,
  AppState,
  BackHandler,
  Easing,
  InteractionManager,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  ScrollView,
  Switch,
  useWindowDimensions,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useFocusEffect } from '@react-navigation/native';
import {
  Activity,
  Bell,
  CalendarCheck,
  Check,
  RefreshCw,
  Clock,
  Coins,
  Droplet,
  Footprints,
  Heart,
  Star,
  Users,
} from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeScrollView, MainLayout, GradientButton, Button, UpdateOverlay, MedicalDisclaimerModal } from '../components';
import { useTranslation } from 'react-i18next';
import { useVersionCheck } from '../hooks/useVersionCheck';
import { usePushToken } from '../hooks';
import type { RootStackParamList } from '../navigation';
import { useAppNavigation } from '../navigation';
import { COLORS, FONTS, SIZES, FONT_SIZE, SCORE_LEVEL_COLORS, getHealthScoreLevel, getSkinScoreLevel } from '../constants';
import { SafeView } from '../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useStepTracking, useWallet } from '../context';
import { getLatestHealthRecord, getLatestSkinRecord, getNotifications, checkAttendance, getAttendanceStatusDetail, getRewardConfig, getStepsSyncState, syncSteps, getMonthlyStepStatus, AlreadyCheckedInError, getMe, logToServer } from '../services';
import { isStepNotificationSupported } from '../services/stepTrackingService';
import type { AttendanceStatusDetailResponse } from '../services';
import { showRewardedAd } from '../services/admob';
import { showOfferwall } from '../services/pointClickOfferwall';
import { handleAuthError } from '../utils/authErrorHandler';
import { getEnv } from '../utils/env';
import {
  getTodayDateStringForLocale,
  parseCalendarDate,
  resolveCalendarWeekRange,
  getWeekdayIndexFromCalendarDate,
  getTodayDateStringForClientTimeZone,
  getTodayDateStringForLocale,
  getMondayOfCalendarWeek,
  mapRecentStatusToWeekGrid,
} from '../utils/dateUtils';

const metahintLogo = require('../../assets/images/logo_white.png');
const hintiClosedMouth = require('../../assets/images/hinti_01.png');   
const hintiOpenMouth = require('../../assets/images/hinti_mouth.png'); 

const HintiMouth = React.memo(({ isTalking, style }: { isTalking: boolean; style: any }) => {
  const [mouthOpen, setMouthOpen] = useState(false);
  useEffect(() => {
    if (!isTalking) {
      setMouthOpen(false);
      return;
    }
    const interval = setInterval(() => setMouthOpen((prev) => !prev), 120);
    return () => clearInterval(interval);
  }, [isTalking]);
  return <Image source={mouthOpen ? hintiOpenMouth : hintiClosedMouth} style={style} resizeMode="contain" />;
});
const headerBgImage = require('../../assets/images/background_01.png'); 

const GREET_APPEAR_DURATION = 900;
const GREET_EXIT_DURATION = 850;
const GREET_EXIT_TO_ENTER_DELAY = 500;

interface GreetingAnimSectionProps {
  greetingSentences: string[];
  language: string;
  styles: any;
}

const GreetingAnimSection = React.memo(({ greetingSentences, language, styles }: GreetingAnimSectionProps) => {
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);
  const [typingStarted, setTypingStarted] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const greetingFullText = greetingSentences[sentenceIndex] ?? greetingSentences[0];
  const SLIDE_OFFSET = SCREEN_WIDTH * 0.85;

  const appearAnim = useRef(new Animated.Value(0)).current;
  const floatAnim = useRef(new Animated.Value(0)).current;
  const exitAnim = useRef(new Animated.Value(0)).current;

  const runEnterAnimation = useCallback(() => {
    exitAnim.setValue(0);
    appearAnim.setValue(0);
    Animated.timing(appearAnim, {
      toValue: 1,
      duration: GREET_APPEAR_DURATION,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) setTypingStarted(true);
    });
  }, [appearAnim, exitAnim]);

  const runExitAndEnter = useCallback(() => {
    setTypingStarted(false);
    appearAnim.setValue(1);
    exitAnim.setValue(0);
    Animated.timing(exitAnim, {
      toValue: 1,
      duration: GREET_EXIT_DURATION,
      easing: Easing.in(Easing.cubic),
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (!finished) return;
      setTypingIndex(0);
      setSentenceIndex(0);
      setTimeout(() => runEnterAnimation(), GREET_EXIT_TO_ENTER_DELAY);
    });
  }, [appearAnim, exitAnim, runEnterAnimation]);

  useEffect(() => {
    setSentenceIndex(0);
    setTypingIndex(0);
    setTypingStarted(false);
    setIsInitialized(false);
    appearAnim.setValue(1);
    exitAnim.setValue(0);
    floatAnim.setValue(0);
    setIsInitialized(true);
    setTypingStarted(true);
  }, [language, appearAnim, exitAnim, floatAnim]);

  useEffect(() => {
    if (!typingStarted) return;
    if (typingIndex >= greetingFullText.length) {
      const holdTimer = setTimeout(() => {
        const isLastSentence = sentenceIndex >= greetingSentences.length - 1;
        if (isLastSentence) {
          runExitAndEnter();
        } else {
          setTypingIndex(0);
          setSentenceIndex((i) => i + 1);
        }
      }, 2000);
      return () => clearTimeout(holdTimer);
    }
    const timer = setTimeout(() => setTypingIndex((i) => i + 1), 70);
    return () => clearTimeout(timer);
  }, [typingStarted, typingIndex, greetingFullText, greetingSentences.length, sentenceIndex, runExitAndEnter]);

  useEffect(() => {
    let anim: Animated.CompositeAnimation | null = null;
    const delay = setTimeout(() => {
      anim = Animated.loop(
        Animated.sequence([
          Animated.timing(floatAnim, { toValue: 1, duration: 850, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
          Animated.timing(floatAnim, { toValue: 0, duration: 850, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
        ])
      );
      anim.start();
    }, GREET_APPEAR_DURATION);
    return () => { clearTimeout(delay); anim?.stop(); };
  }, [floatAnim]);

  const enterTranslateX = appearAnim.interpolate({ inputRange: [0, 1], outputRange: [-SLIDE_OFFSET, 0] });
  const exitTranslateX = exitAnim.interpolate({ inputRange: [0, 1], outputRange: [0, SLIDE_OFFSET] });
  const translateX = Animated.add(enterTranslateX, exitTranslateX);
  const appearScale = appearAnim.interpolate({ inputRange: [0, 1], outputRange: [0.85, 1] });
  const breathScale = floatAnim.interpolate({ inputRange: [0, 1], outputRange: [1, 1.04] });
  const scale = Animated.multiply(appearScale, breathScale);
  const isTalking = typingStarted && typingIndex < greetingFullText.length;

  return (
    <>
      <View style={styles.greetingAboveHinty}>
        <Text style={styles.greetingMain} numberOfLines={1}>
          {greetingFullText.slice(0, typingIndex)}
          {typingIndex < greetingFullText.length && (
            <Text style={styles.typingCursor}>|</Text>
          )}
        </Text>
      </View>
      <View style={styles.headerImageWrap}>
        <Image source={headerBgImage} style={styles.headerImageBg} resizeMode="cover" />
        {isInitialized && (
          <Animated.View style={[styles.headerImageAnimated, { transform: [{ translateX }, { scale }] }]}>
            <HintiMouth isTalking={isTalking} style={styles.headerImage} />
          </Animated.View>
        )}
      </View>
    </>
  );
});
const robotFaceImage = require('../../assets/images/robot_face.png');
const productImages = [
  require('../../assets/images/product/yucod_01.png'),
  require('../../assets/images/product/yucod_02.png'),
  require('../../assets/images/product/yucod_03.png'),
];
const symbolHintBrown = require('../../assets/images/symbol_hint_brown.png');

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_GAP = 12;
const PRODUCT_CARD_GAP = 16;
const HORIZONTAL_PADDING = 20;
const STEP_CARD_GAP = 10; 

const ATTENDANCE_DAILY_REWARD = 0.15; 

const STEP_GOAL = 10000;
const STEP_MILESTONE_INTERVAL = 1000;
const MAX_STEP_MILESTONES_DISPLAY = 25;
const STEP_NOTIFICATION_STORAGE_KEY = 'metahint_step_notification_enabled';

type Props = NativeStackScreenProps<RootStackParamList, 'MetaHome'>;

const WEEKDAY_KEYS = ['weekday_mon', 'weekday_tue', 'weekday_wed', 'weekday_thu', 'weekday_fri', 'weekday_sat', 'weekday_sun'] as const;

const MetaHomeScreen: React.FC<Props> = ({ navigation }) => {
  const { navigate } = useAppNavigation();
  const { t, i18n } = useTranslation();
  const mountLogged = useRef(false);

  useEffect(() => {
    if (!mountLogged.current && __DEV__) {
      mountLogged.current = true;
      console.log('[Perf] MetaHomeScreen: 마운트(첫 렌더 커밋 후)', { _ts: Date.now(), _time: new Date().toISOString() });
    }
  }, []);

  usePushToken();

  const { isUpdating, progress } = useVersionCheck({
    onOtaProgress: (percent) => {
      if (__DEV__) console.log(`[OTA] 메인화면 업데이트 다운로드: ${percent}%`);
    },
  });

  const coinProducts = useMemo(() => [
    { id: '1', title: t('home.products.p1.title'), subtitle: t('home.products.p1.subtitle'), price: '-', rating: '4.8', reviews: 324, imageIndex: 0 },
    { id: '2', title: t('home.products.p2.title'), subtitle: t('home.products.p2.subtitle'), price: '-', rating: '4.8', reviews: 324, imageIndex: 1 },
    { id: '3', title: t('home.products.p3.title'), subtitle: t('home.products.p3.subtitle'), price: '-', rating: '4.0', reviews: 120, imageIndex: 2 },
  ], [t]);

  const insets = useSafeAreaInsets();
  const { width: windowWidth } = useWindowDimensions();
  const { refreshWallet } = useWallet();
  const [unreadNotificationCount, setUnreadNotificationCount] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => refreshWallet(), 200);
    return () => clearTimeout(t);
  }, [refreshWallet]);

  const refreshNotificationBadge = useCallback(async () => {
    try {
      const { notifications } = await getNotifications();
      const unread = notifications.filter((n) => n.unread).length;
      setUnreadNotificationCount(unread);
    } catch {
      setUnreadNotificationCount(0);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      refreshNotificationBadge();
    }, [refreshNotificationBadge])
  );

  const [healthScore, setHealthScore] = useState<number | null>(null);
  const [skinScore, setSkinScore] = useState<number | null>(null);
  const [healthDate, setHealthDate] = useState<string | null>(null);
  const [skinDate, setSkinDate] = useState<string | null>(null);
  const [isAttendanceLoading, setIsAttendanceLoading] = useState(false);
  const [isAttendanceRefreshing, setIsAttendanceRefreshing] = useState(false);

  const attendanceCheckedTodayRef = useRef(false);

  const [metricsRowHeight, setMetricsRowHeight] = useState(0);

  const loadLatestScores = useCallback(async () => {
    try {
      const [healthRecord, skinRecord] = await Promise.all([
        getLatestHealthRecord(),
        getLatestSkinRecord(),
      ]);
      InteractionManager.runAfterInteractions(() => {
        if (healthRecord) {
          setHealthScore(healthRecord.health_index);
          setHealthDate(healthRecord.record_date);
        } else {
          setHealthScore(null);
          setHealthDate(null);
        }
        if (skinRecord) {
          setSkinScore(skinRecord.overall_score);
          setSkinDate(skinRecord.record_date);
        } else {
          setSkinScore(null);
          setSkinDate(null);
        }
      });
    } catch (error) {
      console.error('[MetaHomeScreen] 최신 점수 로드 실패:', error);
      if (handleAuthError(navigation, error)) return;
    }
  }, [navigation]);

  useFocusEffect(
    useCallback(() => {
      if (__DEV__) {
        console.log('[Perf] MetaHomeScreen: useFocusEffect 콜백 시작 (loadLatestScores 직전)', { _ts: Date.now(), _time: new Date().toISOString() });
      }
      loadLatestScores();
    }, [loadLatestScores])
  );

  useFocusEffect(
    useCallback(() => {
      if (Platform.OS !== 'android') return () => { };
      const onBack = () => {
        BackHandler.exitApp();
        return true;
      };
      const sub = BackHandler.addEventListener('hardwareBackPress', onBack);
      return () => sub.remove();
    }, [])
  );

  const [attendanceDays, setAttendanceDays] = useState([false, false, false, false, false, false, false]); 
  const [isAttendanceCheckedToday, setIsAttendanceCheckedToday] = useState(false);
  const [attendanceDays, setAttendanceDays] = useState([false, false, false, false, false, false, false]);
  const [isAttendanceCheckedToday, setIsAttendanceCheckedToday] = useState(false);
  const [isAttendanceRefreshing, setIsAttendanceRefreshing] = useState(false);
  const [consecutiveDays, setConsecutiveDays] = useState(0);
  const [weekAttended, setWeekAttended] = useState(0);
  const [weekTotal, setWeekTotal] = useState(7);
  const [calendarDay, setCalendarDay] = useState(() => getTodayDateStringForClientTimeZone());
  const [monthlyStepStatus, setMonthlyStepStatus] = useState<{
    days_achieved: number;
    days_total: number;
    bonus_amount: string;
    is_completed: boolean;
  } | null>(null);

  const [calendarDay, setCalendarDay] = useState(() => getTodayDateStringForLocale(i18n.language));

  useEffect(() => {
    attendanceCheckedTodayRef.current = false;
  }, [calendarDay]);

  useEffect(() => {
    const sync = () => {
      const next = getTodayDateStringForLocale(i18n.language);
      setCalendarDay((prev) => (prev !== next ? next : prev));
    };
    const intervalId = setInterval(sync, 60_000);
    const sub = AppState.addEventListener('change', (state) => {
      if (state === 'active') {
        sync();

  const applyAttendanceWeekDetail = useCallback(
    (statusDetail: AttendanceStatusDetailResponse['data']) => {
      const weekDays = mapRecentStatusToWeekGrid(
        statusDetail.recent_status,
        statusDetail.week_start
      );
      const todayStr = getTodayDateStringForClientTimeZone();
      const checkedToday = statusDetail.recent_status.some(
        (item) => item.date.slice(0, 10) === todayStr && item.attended
      );

      setAttendanceDays(weekDays);
      setIsAttendanceCheckedToday(checkedToday);
      setConsecutiveDays(statusDetail.current_streak);
      setWeekAttended(statusDetail.week_attended);
      setWeekTotal(statusDetail.week_total);

      if (__DEV__) {
        console.log('[MetaHomeScreen][Attendance] 주간 UI 반영', {
          timezone: statusDetail.timezone,
          week_start: statusDetail.week_start,
          week_end: statusDetail.week_end,
          calendarDay: todayStr,
          checkedToday,
          week_attended: statusDetail.week_attended,
        });
      }
    },
    []
  );

  const reloadAttendanceSection = useCallback(async () => {
    const statusDetail = await getAttendanceStatusDetail(navigation);
    applyAttendanceWeekDetail(statusDetail);
  }, [applyAttendanceWeekDetail, navigation]);

  useEffect(() => {
    const syncCalendarDay = () => {
      const next = getTodayDateStringForClientTimeZone();
      setCalendarDay((prev) => (prev !== next ? next : prev));
    };
    const intervalId = setInterval(syncCalendarDay, 60_000);
    const sub = AppState.addEventListener('change', (state) => {
      if (state === 'active') {
        syncCalendarDay();
        reloadAttendanceSection().catch((error) => {
          if (__DEV__) {
            console.warn('[MetaHomeScreen][Attendance] 포그라운드 재조회 실패', error);
          }
        });
      }
    });
    return () => {
      clearInterval(intervalId);
      sub.remove();
    };
  }, [i18n.language]);

  useFocusEffect(
    useCallback(() => {
      const next = getTodayDateStringForLocale(i18n.language);
      setCalendarDay((prev) => {
        if (prev !== next) {
          console.log('[MetaHomeScreen][Attendance] calendarDay 변경 → 출석 상태 조회 useEffect 재실행 예정', {
            prev,
            next,
          });
        }
        return prev !== next ? next : prev;
      });
      console.log('[MetaHomeScreen][Attendance] MetaHome 포커스', {
        calendarDay: next,
        note: '같은 날짜로만 포커스 복귀 시 출석 API는 재호출되지 않음 (마운트·calendarDay 변경 시만)',
      });
    }, [i18n.language])
  );

  const todayWeekdayIndex = getWeekdayIndexFromCalendarDate(calendarDay);

  const mapRecentStatusToThisWeek = useCallback(
    (
      recentStatus: Array<{ date: string; attended: boolean }>,
      apiWeekStart?: string,
      apiWeekEnd?: string
    ) => {
      const weekDays = [false, false, false, false, false, false, false];
      const { weekStart: startStr, weekEnd: endStr, usedApiWeek } = resolveCalendarWeekRange(
        calendarDay,
        apiWeekStart,
        apiWeekEnd
      );
      const startParsed = parseCalendarDate(startStr);
      const endParsed = parseCalendarDate(endStr);
      if (!startParsed || !endParsed) {
        const todayEntry = recentStatus.find((item) => item.date.slice(0, 10) === calendarDay);
        return {
          weekDays,
          weekStart: startStr,
          weekEnd: endStr,
          usedApiWeek,
          checkedToday: !!todayEntry?.attended,
          weekAttendedFromGrid: 0,
        };
      }

      recentStatus.forEach((item) => {
        const dateKey = item.date.slice(0, 10);
        const parsed = parseCalendarDate(dateKey);
        if (!parsed) return;
        if (parsed < startParsed || parsed > endParsed) return;
        const dayIndex = Math.round(
          (parsed.getTime() - startParsed.getTime()) / (24 * 60 * 60 * 1000)
        );
        if (dayIndex >= 0 && dayIndex <= 6) {
          weekDays[dayIndex] = !!item.attended;
        }
      });

      const todayEntry = recentStatus.find((item) => item.date.slice(0, 10) === calendarDay);
      const checkedToday = !!todayEntry?.attended;

      return {
        weekDays,
        weekStart: startStr,
        weekEnd: endStr,
        usedApiWeek,
        checkedToday,
        weekAttendedFromGrid: weekDays.filter(Boolean).length,
      };
    },
    [calendarDay]
  );

  const reloadAttendanceSection = useCallback(async () => {
    const fetchStartedAt = Date.now();
    const preserveCheckedToday =
      attendanceCheckedTodayRef.current || isAttendanceCheckedToday;
    console.log('[MetaHomeScreen][Attendance] 출석 영역 다시 로딩', {
      calendarDay,
      preserveCheckedToday,
    });

    try {
      const statusDetail = await getAttendanceStatusDetail(navigation);
      const mapped = mapRecentStatusToThisWeek(
        statusDetail.recent_status,
        statusDetail.week_start,
        statusDetail.week_end
      );

      if (!mapped.usedApiWeek && statusDetail.week_start && statusDetail.week_end) {
        console.warn('[MetaHomeScreen][Attendance] API 주간 범위가 오늘과 불일치 → 이번 주 기준으로 7칸 표시', {
          calendarDay,
          apiWeekStart: statusDetail.week_start,
          apiWeekEnd: statusDetail.week_end,
          clientWeekStart: mapped.weekStart,
          clientWeekEnd: mapped.weekEnd,
          recentDates: statusDetail.recent_status.map((item) => item.date),
        });
      }

      let grid = [...mapped.weekDays];
      let checkedToday = mapped.checkedToday;
      if (!checkedToday && preserveCheckedToday) {
        grid[todayWeekdayIndex] = true;
        checkedToday = true;
        console.log('[MetaHomeScreen][Attendance] 주간 API에 오늘 미반영 → 앱 출석 완료 상태 유지', {
          calendarDay,
        });
      }
      if (checkedToday) {
        attendanceCheckedTodayRef.current = true;
      }

      const weekAttendedCount = grid.filter(Boolean).length;
      const todayInRecent = statusDetail.recent_status.some(
        (item) => item.date.slice(0, 10) === calendarDay
      );

      setAttendanceDays(grid);
      setIsAttendanceCheckedToday(checkedToday);
      setConsecutiveDays(statusDetail.current_streak);
      setWeekAttended(
        mapped.usedApiWeek && todayInRecent ? statusDetail.week_attended : weekAttendedCount
      );
      setWeekTotal(statusDetail.week_total);

      console.log('[MetaHomeScreen][Attendance] 출석 영역 로딩 완료', {
        durationMs: Date.now() - fetchStartedAt,
        calendarDay,
        weekStart: mapped.weekStart,
        weekEnd: mapped.weekEnd,
        checkedToday,
        weekAttended: weekAttendedCount,
        recent_status_count: statusDetail.recent_status?.length ?? 0,
        preservedToday: preserveCheckedToday && !mapped.checkedToday,
      });
    } catch (error) {
      console.error('[MetaHomeScreen][Attendance] 출석 영역 로딩 실패', error);
      if (handleAuthError(navigation, error)) return;

      if (preserveCheckedToday) {
        setAttendanceDays((prev) => {
          const next = [...prev];
          next[todayWeekdayIndex] = true;
          return next;
        });
        setIsAttendanceCheckedToday(true);
        attendanceCheckedTodayRef.current = true;
      }
    }
  }, [
    calendarDay,
    isAttendanceCheckedToday,
    mapRecentStatusToThisWeek,
    navigation,
    todayWeekdayIndex,
  ]);

  useEffect(() => {
    console.log('[MetaHomeScreen][Attendance] 메인 진입·날짜 변경 → 출석 영역 로딩 예약 (250ms 후)', {
      calendarDay,
    });
    const t = setTimeout(() => {
      reloadAttendanceSection();
    }, 250);
    return () => clearTimeout(t);
  }, [calendarDay, reloadAttendanceSection]);
  }, [reloadAttendanceSection]);

  useEffect(() => {
    const t = setTimeout(() => {
      reloadAttendanceSection().catch((error) => {
        console.error('[MetaHomeScreen] 출석 상태 로드 실패:', error);
        if (handleAuthError(navigation, error)) return;
      });
    }, 250);
    return () => clearTimeout(t);
  }, [calendarDay, navigation, reloadAttendanceSection]);

  useFocusEffect(
    useCallback(() => {
      setCalendarDay((prev) => {
        const next = getTodayDateStringForClientTimeZone();
        return prev !== next ? next : prev;
      });
      reloadAttendanceSection().catch(() => {});
    }, [reloadAttendanceSection])
  );

  const handleRefreshAttendance = useCallback(async () => {
    if (isAttendanceRefreshing || isAttendanceLoading) return;
    setIsAttendanceRefreshing(true);
    try {
      const next = getTodayDateStringForLocale(i18n.language);
      setCalendarDay((prev) => (prev !== next ? next : prev));
      await reloadAttendanceSection();
    } finally {
      setIsAttendanceRefreshing(false);
    }
  }, [i18n.language, isAttendanceLoading, isAttendanceRefreshing, reloadAttendanceSection]);
      setCalendarDay(getTodayDateStringForClientTimeZone());
      await reloadAttendanceSection();
    } catch (error) {
      console.error('[MetaHomeScreen] 출석 새로고침 실패:', error);
      if (handleAuthError(navigation, error)) return;
    } finally {
      setIsAttendanceRefreshing(false);
    }
  }, [isAttendanceLoading, isAttendanceRefreshing, navigation, reloadAttendanceSection]);

  const handleOfferwall = async () => {
    const raw = getEnv().POINTCLICK_PLACEMENT_UID;
    const placementUid = raw?.trim();
    if (!placementUid) {
      Alert.alert(t('common.error'), t('profile.offerwall_not_configured'));
      return;
    }
    let pickerUid = 'guest';
    try {
      const profile = await getMe();
      pickerUid = profile?.id != null ? String(profile.id) : 'guest';
    } catch (e) {
      if (handleAuthError(navigation, e)) return;
    }
    showOfferwall(placementUid, pickerUid, 'MetaHint');
  };

  const doAttendanceCheckAfterReward = async () => {
    const stepsBefore = currentStepsRef.current;
    console.log('[MetaHomeScreen][Attendance] 출석 체크 API 호출 (버튼+광고 후)', {
      method: 'POST',
      path: '/oth-path',
    });
    logToServer('attendance_api_before', { steps: stepsBefore, claimed_step_indices: claimedStepIndices });
    try {
      const result = await checkAttendance(navigation);
      attendanceCheckedTodayRef.current = true;
      setIsAttendanceCheckedToday(true);
      setAttendanceDays((prev) => {
        const next = [...prev];
        next[todayWeekdayIndex] = true;
        return next;
      });
      logToServer('attendance_api_after', {
        steps_before: stepsBefore,
        steps_after: currentStepsRef.current,
        steps_delta: currentStepsRef.current - stepsBefore,
        streak_days: result.streak_days,
        is_bonus: result.is_bonus,
        reward_amount: result.reward_amount,
      });

      try {
        await reloadAttendanceSection();
      } catch {
        attendanceCheckedTodayRef.current = true;
        const checkDate = (result.check_date ?? getTodayDateStringForClientTimeZone()).slice(0, 10);
        const weekStart = getMondayOfCalendarWeek(checkDate);
        setAttendanceDays(
          mapRecentStatusToWeekGrid([{ date: checkDate, attended: true }], weekStart)
        );
        setIsAttendanceCheckedToday(true);
        setConsecutiveDays(result.streak_days);
      }

      const rewardMessage = result.is_bonus
        ? t('home.attendance_bonus_received', { amount: result.reward_amount, days: result.streak_days })
        : t('home.attendance_reward_received', { amount: result.reward_amount });
      Alert.alert(t('common.success'), rewardMessage);
    } catch (error) {
      const axiosErr = (error as any)?.isAxiosError ? error as any : null;
      console.error('[MetaHomeScreen] 출석 체크 실패:', {
        message: error instanceof Error ? error.message : String(error),
        status: axiosErr?.response?.status,
        data: axiosErr?.response?.data,
        url: axiosErr?.config?.url,
      });
      if (handleAuthError(navigation, error)) return;
      if (error instanceof AlreadyCheckedInError) {
        attendanceCheckedTodayRef.current = true;
        setAttendanceDays((prev) => {
          const next = [...prev];
          next[todayWeekdayIndex] = true;
          return next;
        });
        setIsAttendanceCheckedToday(true);
        try {
          await reloadAttendanceSection();
        } catch {
          setIsAttendanceCheckedToday(true);
        }
        Alert.alert(t('common.notification'), t('home.already_checked_today'));
        return;
      }
      const errorMessage = error instanceof Error ? error.message : t('home.attendance_check_failed');
      Alert.alert(t('common.error'), errorMessage);
    } finally {
      setIsAttendanceLoading(false);
    }
  };

  const handleAttendanceCheck = () => {
    if (isAttendanceCheckedToday || isAttendanceLoading) return;
    logToServer('attendance_press', {
      steps: currentStepsRef.current,
      step_goal: stepGoal,
      is_checked_today: isAttendanceCheckedToday,
      consecutive_days: consecutiveDays,
    });
    setIsAttendanceLoading(true);
    showRewardedAd(
      () => doAttendanceCheckAfterReward(),
      () => setIsAttendanceLoading(false),
      () => {
        setIsAttendanceLoading(false);
        Alert.alert(t('common.error'), t('home.attendance_check_failed'));
      }
    );
  };
  const { currentSteps, stepGoal, isPedometerAvailable, stepNotificationEnabled, setStepNotificationEnabled } = useStepTracking();
  const [isStepNotificationToggling, setIsStepNotificationToggling] = useState(false);
  const showStepNotificationControl = Platform.OS === 'android' && isStepNotificationSupported();

  useFocusEffect(
    useCallback(() => {
      if (!showStepNotificationControl) return;
      let cancelled = false;
      (async () => {
        const stored = await AsyncStorage.getItem(STEP_NOTIFICATION_STORAGE_KEY);
        const enabled = stored === 'true';
        if (cancelled || enabled === stepNotificationEnabled) return;
        await setStepNotificationEnabled(enabled);
      })();
      return () => {
        cancelled = true;
      };
    }, [showStepNotificationControl, stepNotificationEnabled, setStepNotificationEnabled]),
  );

  const handleStepNotificationToggle = useCallback(async (value: boolean) => {
    if (isStepNotificationToggling) return;
    if (!isStepNotificationSupported()) {
      Alert.alert(t('common.notification'), t('home.step_notification_unsupported'));
      return;
    }
    setIsStepNotificationToggling(true);
    try {
      await setStepNotificationEnabled(value);
      if (value) {
        const stored = await AsyncStorage.getItem(STEP_NOTIFICATION_STORAGE_KEY);
        if (stored !== 'true') {
          Alert.alert(
            t('common.error'),
            t('home.step_notification_start_failed'),
            [
              { text: t('common.cancel'), style: 'cancel' },
              { text: t('common.setting'), onPress: () => navigate('MyInfoSettings') },
            ],
          );
        }
      }
    } finally {
      setIsStepNotificationToggling(false);
    }
  }, [isStepNotificationToggling, setStepNotificationEnabled, t, navigate]);

  const currentStepsRef = useRef(0);
  useEffect(() => { currentStepsRef.current = currentSteps; }, [currentSteps]);
  const [claimedStepIndices, setClaimedStepIndices] = useState<number[]>([]);
  const [isStepRewardLoading, setIsStepRewardLoading] = useState(false);
  const [stepRewardPer1k, setStepRewardPer1k] = useState<number | null>(null);
  useEffect(() => {
    const today = getTodayDateStringForLocale(i18n.language);
    getStepsSyncState(today).then(stateIdx => {
      if (Array.isArray(stateIdx)) setClaimedStepIndices(stateIdx);
    }).catch(() => {});
  }, [calendarDay, i18n.language]);
  useEffect(() => { getRewardConfig().then(cfg => setStepRewardPer1k(cfg.step_reward_per1k)).catch(() => {}); }, []);
  useEffect(() => {
    getMonthlyStepStatus().then((status) => setMonthlyStepStatus(status)).catch(() => {});
  }, [calendarDay]);
  const stepMilestonesFull = useMemo(() => Array.from({ length: STEP_GOAL / STEP_MILESTONE_INTERVAL }, (_, i) => (i + 1) * STEP_MILESTONE_INTERVAL), []);
  const stepMilestonesToRender = useMemo(() => stepMilestonesFull.slice(0, MAX_STEP_MILESTONES_DISPLAY), [stepMilestonesFull]);
  const STEP_CARD_WIDTH = 120;

  const healthLevel = healthScore != null ? getHealthScoreLevel(healthScore) : null;
  const skinLevel = skinScore != null ? getSkinScoreLevel(skinScore) : null;
  const healthLabel = healthLevel ? t(`home.health_labels.${healthLevel}`) : '';
  const skinLabel = skinLevel ? t(`home.health_labels.${skinLevel}`) : '';
  const healthColors = healthLevel ? SCORE_LEVEL_COLORS[healthLevel] : null;
  const skinColors = skinLevel ? SCORE_LEVEL_COLORS[skinLevel] : null;
  const cardWidth = (windowWidth - HORIZONTAL_PADDING * 2 - CARD_GAP) / 2;
  const weekDayBoxSize = Math.floor((windowWidth - HORIZONTAL_PADDING * 2 - SIZES.large * 2 - 6 * 2) / 7);
  const productListWidth = windowWidth - HORIZONTAL_PADDING * 2;
  const productCardWidth = (productListWidth - PRODUCT_CARD_GAP) / 1.5;

  const handleSkinAnalysis = () => navigate('SkinAnalysis');
  const handleHealthAnalysis = () => navigate('HealthAnalysis');
  const handleHealthRecords = () => navigate('HealthAnalysis', { initialTab: 'records' });
  const handleSkinRecords = () => navigate('SkinAnalysis', { initialTab: 'records' });
  const handleAiHinty = () => navigate('Chat');

  const handleStepRewardPress = (buttonIndex: number) => {
    const milestone = stepMilestonesFull[buttonIndex];
    if (milestone == null || isStepRewardLoading || currentSteps < milestone || claimedStepIndices.includes(buttonIndex)) {
      return;
    }
    setIsStepRewardLoading(true);
    showRewardedAd(
      () => handleStepRewardClaim(buttonIndex),
      () => { },
      () => {
        setIsStepRewardLoading(false);
        Alert.alert(t('common.error'), t('home.step_reward_failed'));
      }
    );
  };

  const handleStepRewardClaim = async (buttonIndex: number) => {
    const milestone = stepMilestonesFull[buttonIndex];
    logToServer('step_reward_press', {
      button_index: buttonIndex,
      milestone,
      steps: currentStepsRef.current,
      step_goal: stepGoal,
      claimed_step_indices: claimedStepIndices,
    });
    if (milestone == null || isStepRewardLoading || currentSteps < milestone || claimedStepIndices.includes(buttonIndex)) {
      return;
    }

    setClaimedStepIndices((prev) =>
      prev.includes(buttonIndex) ? prev : [...prev, buttonIndex]
    );

    setIsStepRewardLoading(true);
    try {
      const today = getTodayDateStringForLocale(i18n.language);
      if (__DEV__) {
        console.log('[MetaHomeScreen] 걸음수 보상 받기 호출:', {
          today,
          buttonIndex,
          milestone: stepMilestonesFull[buttonIndex],
          currentSteps,
          stepGoal,
          claimedStepIndices,
        });
      }
      const stepsBeforeSync = currentStepsRef.current;
      const result = await syncSteps(today, currentSteps, stepGoal, navigation, buttonIndex);
      logToServer('step_reward_after_sync', {
        button_index: buttonIndex,
        milestone,
        steps_before: stepsBeforeSync,
        steps_after: currentStepsRef.current,
        steps_delta: currentStepsRef.current - stepsBeforeSync,
        new_rewards_count: result.new_rewards_count,
        total_reward_paid: result.total_reward_paid,
      });

      if (Array.isArray(result.state_idx) && result.state_idx.length > 0) {
        setClaimedStepIndices(result.state_idx);
      } else {
        setClaimedStepIndices((prev) =>
          prev.includes(buttonIndex) ? prev : [...prev, buttonIndex]
        );
      }

      const rewardMessage = result.new_rewards_count > 0
        ? `${t('common.success')}\n${t('home.step_reward_received', { count: result.new_rewards_count, amount: result.total_reward_paid })}`
        : t('home.step_sync_success');

      Alert.alert(t('common.success'), rewardMessage);
    } catch (error) {

      try {
        const today = getTodayDateStringForLocale(i18n.language);
        const latestState = await getStepsSyncState(today);
        if (Array.isArray(latestState)) {
          setClaimedStepIndices(latestState);
        } else {
          setClaimedStepIndices((prev) => prev.filter((idx) => idx !== buttonIndex));
        }
      } catch {
        setClaimedStepIndices((prev) => prev.filter((idx) => idx !== buttonIndex));
      }
      const axiosErr = (error as any)?.isAxiosError ? error as any : null;
      console.error('[MetaHomeScreen] 걸음수 보상 받기 실패:', {
        message: error instanceof Error ? error.message : String(error),
        status: axiosErr?.response?.status,
        data: axiosErr?.response?.data,
        url: axiosErr?.config?.url,
      });

      if (handleAuthError(navigation, error)) {
        return;
      }

      const errorMessage = error instanceof Error ? error.message : t('home.step_reward_failed');
      Alert.alert(t('common.error'), errorMessage);
    } finally {
      setIsStepRewardLoading(false);
    }
  };

  const greetingSentences = useMemo(
    () => [t('home.greeting_1'), t('home.greeting_2'), t('home.greeting_3'), t('home.greeting_4'), t('home.greeting_5')],
    [t]
  );

  return (
    <MainLayout activeKey="home">
      <SafeView style={styles.screen} showBottomBackground={false}>
        <SafeScrollView
          style={styles.scrollView}
          showBottomBackground={false}
          disableBottomPadding={true}
          showStatusBarBackground={true}
          statusBarBackgroundColor="#FFFFFF"
          contentContainerStyle={StyleSheet.flatten([styles.scrollContent, { paddingTop: 0 }])}
        >
          <View style={styles.headerContainer}>
            {}
            <LinearGradient
              colors={['#615FFF', '#AD46FF', '#F6339A']}
              locations={[0, 0.5, 1]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={[styles.headerGradient, { paddingTop: insets.top + SIZES.medium }]}
            >
              <View style={styles.headerTop}>
                <View style={styles.headerLeft}>
                  <Image source={metahintLogo} style={styles.headerLogo} resizeMode="contain" />
                </View>
                <View style={styles.headerRight}>
                  <TouchableOpacity onPress={() => navigate('MyInfoNotify')} style={styles.headerIconBtn} hitSlop={8}>
                    <View style={[styles.headerIconPill, styles.notifPill]}>
                      <Bell size={22} color="#FFFFFF" />
                      {unreadNotificationCount > 0 && <View style={styles.notifBadge} />}
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <GreetingAnimSection
                greetingSentences={greetingSentences}
                language={i18n.language}
                styles={styles}
              />
            </LinearGradient>

            {}
            <View
              style={[
                styles.metricsRow,
                metricsRowHeight > 0 && { transform: [{ translateY: -metricsRowHeight }] },
              ]}
              onLayout={(e) => setMetricsRowHeight(e.nativeEvent.layout.height)}
            >
              <TouchableOpacity style={[styles.metricCard, { width: cardWidth }]} onPress={handleHealthRecords} activeOpacity={0.9}>
                <View style={styles.metricCardHeader}>
                  <Heart size={24} color="#EF4444" />
                  <Text style={styles.metricTitle}>{t('home.health_index')}</Text>
                </View>

                <Text style={styles.metricDate}>
                  {healthScore != null && healthDate
                    ? healthDate.replace(/-/g, '.')
                    : t('home.before_measurement')}
                </Text>
                <View style={styles.metricScoreWrap}>
                  <View style={styles.metricScoreGroup}>
                    <Text style={styles.metricScore}>{healthScore != null ? healthScore : '--'}</Text>
                    {healthScore != null && <Text style={styles.metricScoreUnit}>/ 10</Text>}
                  </View>
                  {healthScore != null && healthColors && (
                    <View style={[styles.metricTag, { backgroundColor: healthColors.bgColor }]}>
                      <Text style={[styles.metricTagText, { color: healthColors.color }]}>{healthLabel}</Text>
                    </View>
                  )}
                </View>
                <View style={styles.metricProgressBar}>
                  {healthScore != null && healthColors && <View style={[styles.metricProgressFill, { width: `${(healthScore / 10) * 100}%`, backgroundColor: healthColors.color }]} />}
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.metricCard, { width: cardWidth }]} onPress={handleSkinRecords} activeOpacity={0.9}>
                <View style={styles.metricCardHeader}>
                  <Droplet size={24} color="#38BDF8" />
                  <Text style={styles.metricTitle}>{t('home.skin_score')}</Text>
                </View>
                <Text style={styles.metricDate}>
                  {skinScore != null && skinDate
                    ? skinDate.replace(/-/g, '.')
                    : t('home.before_measurement')}
                </Text>
                <View style={styles.metricScoreWrap}>
                  <View style={styles.metricScoreGroup}>
                    <Text style={styles.metricScore}>{skinScore != null ? skinScore : '--'}</Text>
                    {skinScore != null && <Text style={styles.metricScoreUnit}>/ 100</Text>}
                  </View>
                  {skinScore != null && skinColors && (
                    <View style={[styles.metricTag, { backgroundColor: skinColors.bgColor }]}>
                      <Text style={[styles.metricTagText, { color: skinColors.color }]}>{skinLabel}</Text>
                    </View>
                  )}
                </View>
                <View style={styles.metricProgressBar}>
                  {skinScore != null && skinColors && <View style={[styles.metricProgressFill, { width: `${skinScore}%`, backgroundColor: skinColors.color }]} />}
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{t('home.my_health_management')}</Text>
            <View style={styles.managementRow}>
              <TouchableOpacity style={[styles.managementCard, { width: cardWidth }]} onPress={handleHealthAnalysis} activeOpacity={0.8}>
                <View style={[styles.mgmtCardDeco, { backgroundColor: 'rgba(239, 68, 68, 0.15)' }]} />
                <View style={[styles.mgmtCardDeco2, { backgroundColor: 'rgba(239, 68, 68, 0.15)' }]} />
                <View style={[styles.mgmtIconWrap, { backgroundColor: '#FEE2E2' }]}>
                  <Heart size={28} color="#EF4444" />
                </View>
                <View>
                  <Text style={styles.mgmtTitle}>{t('home.health_analysis')}</Text>
                  <Text style={styles.mgmtSub}>{t('home.comprehensive_health_check')}</Text>
                </View>
                <Text style={[styles.mgmtLink, { color: '#EF4444' }]}>{t('home.start_btn')}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.managementCard, { width: cardWidth }]} onPress={handleSkinAnalysis} activeOpacity={0.8}>
                <View style={[styles.mgmtCardDeco, { backgroundColor: 'rgba(59, 130, 246, 0.15)' }]} />
                <View style={[styles.mgmtCardDeco2, { backgroundColor: 'rgba(59, 130, 246, 0.15)' }]} />
                <View style={[styles.mgmtIconWrap, { backgroundColor: '#DBEAFE' }]}>
                  <Droplet size={28} color="#3B82F6" />
                </View>
                <Text style={styles.mgmtTitle}>{t('home.skin_analysis')}</Text>
                <Text style={styles.mgmtSub}>{t('home.ai_skin_diagnosis')}</Text>
                <Text style={styles.mgmtLink}>{t('home.start_btn')}</Text>
              </TouchableOpacity>
            </View>
          </View>

          {}
          <View style={styles.aiHintyCard}>
            <LinearGradient
              colors={['#615FFF', '#AD46FF']}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              style={styles.aiHintyGradient}
            >
              <View style={styles.aiHintyTitleRow}>
                <Image source={robotFaceImage} style={styles.aiHintyRobot} resizeMode="contain" />
                <Text style={styles.aiHintyTitle}>{t('home.ai_hinty_health_checkup')}</Text>
              </View>
              <Text style={styles.aiHintyDesc}>{t('home.ai_hinty_health_desc')}</Text>
              {

}
              <Button
                variant="filled"
                title={t('home.ai_hinty_start')}
                onPress={handleAiHinty}
                style={styles.aiHintyBtn}
                textStyle={styles.aiHintyBtnText}
              />
            </LinearGradient>
          </View>

          {}
          <View style={styles.section}>
            <GradientButton
              title={t('profile.offerwall')}
              leftIcon={<Coins size={16} color="#FFFFFF" />}
              style={styles.attendanceBtn}
              onPress={handleOfferwall}
            />
          </View>

          {}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{t('home.attendance_check')}</Text>
            <View style={styles.attendanceCardWrapper}>
              <View style={styles.attendanceCard}>
                <View style={styles.attendanceHeader}>
                  <View style={styles.attendanceHeaderText}>
                    <Text style={styles.attendanceMain}>{t('home.daily_attendance_coins')}</Text>

                    {

}
                    <Text style={styles.challengeReward}>
                      {t('home.attendance_reward_prefix')}
                      <Text style={styles.attendanceRewardHighlight}>+{ATTENDANCE_DAILY_REWARD} MTHT</Text>
                      {t('home.attendance_reward_suffix')}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={[styles.calendarIcon, isAttendanceRefreshing && styles.calendarIconDisabled]}
                    onPress={handleRefreshAttendance}
                    disabled={isAttendanceRefreshing || isAttendanceLoading}
                    accessibilityRole="button"
                    accessibilityLabel={t('home.attendance_refresh', '출석 상태 새로고침')}
                    hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                  >
                    {isAttendanceRefreshing ? (
                      <ActivityIndicator size="small" color="#615FFF" />
                    ) : (
                      <RefreshCw size={22} color="#615FFF" />
                    )}
                  </TouchableOpacity>
                  <View style={styles.calendarIcon}>
                    <TouchableOpacity
                      onPress={handleRefreshAttendance}
                      disabled={isAttendanceRefreshing || isAttendanceLoading}
                      accessibilityRole="button"
                      accessibilityLabel={t('home.attendance_refresh', '출석 상태 새로고침')}
                      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                    >
                      {isAttendanceRefreshing ? (
                        <ActivityIndicator size="small" color="#615FFF" />
                      ) : (
                        <RefreshCw size={22} color="#615FFF" />
                      )}
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.weekStatus}>
                  <Text style={styles.weekLabel}>{t('home.week_attendance_status')}</Text>

                  <Text style={styles.weekDays}>{t('home.days_format', { current: weekAttended, total: weekTotal })}</Text>
                </View>
                <View style={styles.weekGrid}>
                  {WEEKDAY_KEYS.map((key, i) => (
                    <View key={key} style={styles.weekDayCol}>
                      <View style={[styles.weekDayBox, { width: weekDayBoxSize, height: weekDayBoxSize }, attendanceDays[i] ? styles.weekDayDone : styles.weekDayPending]}>
                        {attendanceDays[i] ? (
                          <Check size={22} color="#FFFFFF" />
                        ) : (
                          <Image source={symbolHintBrown} style={styles.weekDayHintIcon} resizeMode="contain" />
                        )}
                      </View>
                      <Text style={styles.weekDayText}>{t(`common.${key}`)}</Text>
                    </View>
                  ))}
                </View>
                <GradientButton
                  title={
                    isAttendanceLoading
                      ? t('home.attendance_checking', '체크 중...')
                      : isAttendanceCheckedToday
                        ? t('home.attendance_check_complete')
                        : t('home.attendance_check')
                  }
                  leftIcon={<Coins size={16} color="#FFFFFF" />}
                  style={[styles.attendanceBtn, (isAttendanceCheckedToday || isAttendanceLoading) && styles.attendanceBtnDisabled]}
                  onPress={handleAttendanceCheck}
                  disabled={isAttendanceCheckedToday || isAttendanceLoading}
                />
                <View style={styles.attendanceBonusRow}>
                  <Coins size={14} color="#615FFF" />
                  <Text style={styles.attendanceBonus}>
                    {t('home.attendance_bonus_prefix')}
                    <Text style={styles.attendanceBonusHighlight}>{ATTENDANCE_DAILY_REWARD} MTHT × 7</Text>
                    {t('home.attendance_bonus_suffix')}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{t('home.health_challenge')}</Text>
            <View style={styles.challengeCardWrapper}>
              <LinearGradient
                colors={['#F5F3FF', '#EDE9FE', '#FDF4FF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.challengeCard}
              >
                <View style={styles.challengeHeader}>
                  <View style={styles.challengeHeaderText}>
                    <Text style={styles.challengeTitle}>{t('home.today_step_goal')}</Text>
                    <Text style={styles.challengeReward}>
                      {t('home.goal_reward_prefix')}
                      <Text style={styles.challengeRewardHighlight}>{t('home.goal_reward_suffix')}</Text>
                    </Text>
                  </View>
                  {showStepNotificationControl && (
                    <View style={styles.stepNotificationControl}>
                      <Text style={styles.stepNotificationFeatureLabel} numberOfLines={2}>
                        {t('home.step_notification_label')}
                      </Text>
                      <View style={styles.stepNotificationSwitchRow}>
                        <Text
                          style={[
                            styles.stepNotificationStatusText,
                            stepNotificationEnabled && styles.stepNotificationStatusOn,
                          ]}
                        >
                          {stepNotificationEnabled
                            ? t('home.step_notification_status_on')
                            : t('home.step_notification_status_off')}
                        </Text>
                        {isStepNotificationToggling ? (
                          <ActivityIndicator size="small" color="#7C3AED" />
                        ) : (
                          <Switch
                            value={stepNotificationEnabled}
                            onValueChange={handleStepNotificationToggle}
                            trackColor={{ false: '#E5E7EB', true: '#C4B5FD' }}
                            thumbColor={stepNotificationEnabled ? '#7C3AED' : '#F3F4F6'}
                            accessibilityLabel={t('home.step_notification_label')}
                          />
                        )}
                      </View>
                    </View>
                  )}
                </View>
                <View style={styles.stepsRow}>
                  <Text style={styles.stepsLabel}>{t('home.today_steps')}</Text>
                  <Text style={styles.stepsValue}>
                    <Text style={styles.stepsValueCurrent}>{currentSteps.toLocaleString()}</Text>
                    <Text style={styles.stepsValueSlash}>/</Text>
                    <Text style={styles.stepsValueGoal}>{STEP_GOAL.toLocaleString()}</Text>
                    <Text style={styles.stepsValueUnit}> {t('home.steps_unit')}</Text>
                  </Text>
                </View>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.stepMilestonesList}
                >
                  {stepMilestonesToRender.map((milestone, index) => {
                    const isReached = currentSteps >= milestone;
                    const isClaimed = claimedStepIndices.includes(index);
                    const isActive = isReached && !isClaimed && !isStepRewardLoading;
                    const isInactive = !isReached;
                    return (
                      <View key={milestone} style={[styles.stepMilestoneCard, { width: STEP_CARD_WIDTH }]}>
                        <Text style={styles.stepMilestoneLabelText}>
                          {t('home.steps_milestone', { count: milestone })}
                        </Text>
                        {stepRewardPer1k != null && (
                          <Text style={styles.stepMilestoneLabel}>
                            +{stepRewardPer1k}M
                          </Text>
                        )}
                        <TouchableOpacity
                          style={[
                            styles.stepMilestoneBtn,
                            isActive && styles.stepMilestoneBtnActive,
                            isClaimed && styles.stepMilestoneBtnClaimed,
                            isInactive && styles.stepMilestoneBtnInactive,
                          ]}
                          onPress={() => handleStepRewardPress(index)}
                          disabled={!isActive || isStepRewardLoading}
                          activeOpacity={0.8}
                        >
                          {isActive ? (
                            <LinearGradient
                              colors={['#7C3AED', '#A78BFA']}
                              start={{ x: 0, y: 0 }}
                              end={{ x: 1, y: 0 }}
                              style={styles.stepMilestoneBtnGradient}
                            >
                              <Coins size={14} color="#FFFFFF" />
                              <Text style={styles.stepMilestoneBtnTextActive}>
                                {t('home.step_receive')}
                              </Text>
                            </LinearGradient>
                          ) : (
                            <View style={styles.stepMilestoneBtnInner}>
                              <Coins size={14} color={isClaimed ? '#A78BFA' : '#9CA3AF'} />
                              <Text
                                style={[
                                  styles.stepMilestoneBtnText,
                                  isClaimed && styles.stepMilestoneBtnTextClaimed,
                                  isInactive && styles.stepMilestoneBtnTextInactive,
                                ]}
                              >
                                {isClaimed ? t('home.step_claimed') : t('home.step_receive')}
                              </Text>
                            </View>
                          )}
                        </TouchableOpacity>
                      </View>
                    );
                  })}
                </ScrollView>
                <View style={styles.stepTip}>
                  <Footprints size={16} color="#A78BFA" />
                  <Text style={styles.stepTipText}>{t('home.step_tip')}</Text>
                </View>
              </LinearGradient>
            </View>
          </View>

          {}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{t('home.monthly_step_bonus_title')}</Text>
            <View style={[styles.challengeCardWrapper, styles.monthlyBonusCardWrapper]}>
              <LinearGradient
                colors={['#FFFFFF', '#FFFFFF', '#FFFFFF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.challengeCard}
              >
                <View style={styles.challengeHeader}>
                  <View style={styles.challengeHeaderText}>
                    <Text style={styles.challengeTitle}>{t('home.monthly_step_bonus_desc')}</Text>
                    <Text style={styles.challengeReward}>
                      {t('home.goal_reward_prefix')}
                      <Text style={[styles.challengeRewardHighlight, { color: '#7C3AED' }]}>+{monthlyStepStatus?.bonus_amount ?? '1.0'} MTHT</Text>
                    </Text>
                  </View>
                  <View style={[styles.stepChallengeIcon, { backgroundColor: '#F5F3FF' }]}>
                    <CalendarCheck size={22} color="#7C3AED" />
                  </View>
                </View>
                <View style={styles.stepsRow}>
                  <Text style={styles.stepsLabel}>{t('home.monthly_days_achieved')}</Text>
                  <Text style={styles.stepsValue}>
                    <Text style={[styles.stepsValueCurrent, { color: '#7C3AED' }]}>{monthlyStepStatus?.days_achieved ?? 0}</Text>
                    <Text style={styles.stepsValueSlash}>/</Text>
                    <Text style={styles.stepsValueGoal}>{monthlyStepStatus?.days_total ?? 31}</Text>
                    <Text style={styles.stepsValueUnit}> {t('home.days_unit')}</Text>
                  </Text>
                </View>
                {monthlyStepStatus?.is_completed ? (
                  <View style={[styles.stepTip, { backgroundColor: '#F5F3FF', borderRadius: 8, padding: 8 }]}>
                    <Check size={16} color="#7C3AED" />
                    <Text style={[styles.stepTipText, { color: '#7C3AED' }]}>{t('home.monthly_bonus_received')}</Text>
                  </View>
                ) : (
                  <View style={styles.stepTip}>
                    <Footprints size={16} color="#A78BFA" />
                    <Text style={styles.stepTipText}>{t('home.monthly_bonus_warning')}</Text>
                  </View>
                )}
              </LinearGradient>
            </View>
          </View>

          {}
          <View style={styles.section}>
            <View style={styles.coinHeader}>
              <Text style={styles.sectionTitle}>{t('home.coin_products')}</Text>
              <TouchableOpacity onPress={() => Alert.alert(t('common.notification'), t('home.view_all'))}>
                <Text style={styles.viewAll}>{t('home.view_all')}</Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.productList}
              decelerationRate="fast"
              snapToInterval={productCardWidth + PRODUCT_CARD_GAP}
              snapToAlignment="start"
            >
              {coinProducts.map((p) => (
                <View key={p.id} style={[styles.productCard, { width: productCardWidth, marginRight: PRODUCT_CARD_GAP }]}>
                  <View style={styles.productImageBox}>
                    <Image source={productImages[p.imageIndex]} style={styles.productImage} resizeMode="contain" />
                  </View>
                  <View style={styles.productInfo}>
                    <Text style={styles.productTitle} numberOfLines={2}>{p.title}</Text>
                    <Text style={styles.productSub}>{p.subtitle}</Text>
                    <View style={styles.productPrice}>
                      <Coins size={14} color="#615FFF" />
                      <Text style={styles.productPriceText}>{p.price} MTHT</Text>
                    </View>
                    <View style={styles.productRating}>
                      <Star size={12} color="#FBBF24" />
                      <Text style={styles.productRatingText}>{p.rating} ({p.reviews})</Text>
                    </View>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>

        </SafeScrollView>
      </SafeView>
      <UpdateOverlay visible={isUpdating} progress={progress} />
      <MedicalDisclaimerModal />
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  headerContainer: {
    height: 500,
    marginBottom: SIZES.xlarge,
    overflow: 'visible',
  },
  headerGradient: {
    paddingHorizontal: HORIZONTAL_PADDING,
    height: '100%',
    overflow: 'visible',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SIZES.small,
  },
  metricCardHeader: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  metricScoreWrap: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 2, marginTop: 8 },
  metricScoreGroup: { flexDirection: 'row', alignItems: 'center', gap: 2 },
  metricScoreUnit: { fontSize: FONT_SIZE.small, fontFamily: FONTS.regular, color: '#6A7282' },
  metricTag: { alignSelf: 'flex-start', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12, marginTop: 8 },
  greetingAboveHinty: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    marginTop: 5,
  },
  greetingMain: { fontSize: 16, fontFamily: FONTS.medium, color: '#FFFFFF', textAlign: 'center', letterSpacing: -0.5 },
  headerLeft: { flexDirection: 'row', alignItems: 'flex-start', gap: 0 },
  headerLogo: { width: 120, height: 20, objectFit: 'contain', opacity: 0.8 },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 0 },
  headerIconBtn: { padding: 4 },
  headerIconPill: {
    borderRadius: 12,
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
  notifPill: { width: 40, height: 40, position: 'relative' },
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
  headerImageWrap: { width: '100%', alignItems: 'center', position: 'relative', overflow: 'visible' },
  headerImageBg: { position: 'absolute', top: 15, alignSelf: 'center', width: '90%', height: 200, objectFit: 'contain', },
  headerImageAnimated: { width: '100%', alignItems: 'center' },
  headerImage: { width: '100%', height: 200 },
  backgroundImageWrap: { width: '100%', alignItems: 'center', borderWidth: 1, borderColor: 'red', },
  backgroundImage: { width: '100%', height: 200 },
  typingCursor: { opacity: 0.8 },
  metricsRow: {
    flexDirection: 'row',
    gap: CARD_GAP,
    paddingHorizontal: HORIZONTAL_PADDING,
    marginTop: -24,
    marginBottom: SIZES.large,

  },
  metricCard: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 16,
    padding: SIZES.large,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  metricTitle: { fontSize: FONT_SIZE.medium, fontFamily: FONTS.medium, color: COLORS.text, },
  metricDate: { fontSize: FONT_SIZE.small, fontFamily: FONTS.regular, color: '#9CA3AF', marginTop: 8 },
  metricScore: { fontSize: 24, fontFamily: FONTS.bold, color: COLORS.text, },
  metricTagText: { fontSize: 12, fontFamily: FONTS.medium },
  metricProgressBar: { height: 6, backgroundColor: '#E5E7EB', borderRadius: 3, marginTop: 12, overflow: 'hidden' },
  metricProgressFill: { height: '100%', borderRadius: 3 },
  section: { paddingHorizontal: HORIZONTAL_PADDING, marginBottom: SIZES.xlarge },
  sectionTitle: { fontSize: FONT_SIZE.large, fontFamily: FONTS.bold, color: COLORS.text, marginBottom: SIZES.medium },
  managementRow: { flexDirection: 'row', gap: CARD_GAP },
  managementCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: SIZES.large,
    shadowColor: '#cccccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.borderLight,
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
  mgmtTitle: { fontSize: FONT_SIZE.large, fontFamily: FONTS.bold, color: COLORS.text, marginTop: 12 },
  mgmtSub: { fontSize: 12, fontFamily: FONTS.regular, color: '#6B7280', marginTop: 4 },
  mgmtLink: { fontSize: 14, fontFamily: FONTS.semibold, color: '#3B82F6', marginTop: 8 },
  aiHintyCard: { marginHorizontal: HORIZONTAL_PADDING, marginBottom: SIZES.xlarge, borderRadius: 14, overflow: 'hidden', shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.1, shadowRadius: 15, elevation: 6 },
  aiHintyGradient: { padding: SIZES.large },
  aiHintyTop: { fontSize: 12, fontFamily: FONTS.medium, color: 'rgba(255,255,255,0.9)', marginBottom: 8 },
  aiHintyTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 },
  aiHintyRobot: { width: 32, height: 32 },
  aiHintyTitle: { fontSize: 18, fontFamily: FONTS.bold, color: '#FFFFFF', flex: 1 },
  aiHintyDesc: { fontSize: 13, fontFamily: FONTS.regular, color: 'rgba(255,255,255,0.9)', lineHeight: 20, marginBottom: 16 },
  familySection: { flexDirection: 'row', gap: 12, marginBottom: 16, backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: 12, padding: 12 },
  familySectionInner: { flex: 1 },
  familyTitle: { fontSize: 14, fontFamily: FONTS.semibold, color: '#FFFFFF' },
  familyDesc: { fontSize: 12, fontFamily: FONTS.regular, color: 'rgba(255,255,255,0.85)', marginTop: 4 },
  aiHintyBtn: { backgroundColor: '#FFFFFF', borderWidth: 0 },
  aiHintyBtnText: { color: '#4F39F6' },
  attendanceCardWrapper: { overflow: 'hidden', borderRadius: 14, borderWidth: 1.108, borderColor: "#efefef", shadowColor: '#cccccc', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.1, shadowRadius: 15, elevation: 6, backgroundColor: '#ffffff' },
  attendanceCard: { padding: SIZES.large, overflow: 'hidden', borderRadius: 14 },
  attendanceHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 },
  attendanceHeaderText: { flex: 1 },
  attendanceMain: { fontSize: 17, fontFamily: FONTS.bold, color: COLORS.text, marginBottom: 4 },
  attendanceSub: { fontSize: 14, fontFamily: FONTS.regular, color: COLORS.text },
  attendanceSubHighlight: { fontFamily: FONTS.bold, color: '#615FFF' },
  calendarIcon: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#E0E7FF', alignItems: 'center', justifyContent: 'center' },
  calendarIconDisabled: { opacity: 0.5 },
  weekStatus: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  weekLabel: { fontSize: 13, fontFamily: FONTS.regular, color: '#6B7280' },
  weekDays: { fontSize: 13, fontFamily: FONTS.semibold, color: '#615FFF' },
  attendanceRewardHighlight: { fontFamily: FONTS.bold, color: '#615FFF' },
  weekGrid: { flexDirection: 'row', justifyContent: 'space-between', gap: 2, marginBottom: 16 },
  weekDayCol: { flex: 1, alignItems: 'center', minWidth: 0 },
  weekDayBox: { borderRadius: 12, alignItems: 'center', justifyContent: 'center', overflow: 'hidden' },
  weekDayDone: { backgroundColor: '#615FFF' },
  weekDayPending: { backgroundColor: '#FFD740' },
  weekDayHintIcon: { width: 24, height: 24 },
  weekDayText: { fontSize: 12, fontFamily: FONTS.medium, color: '#9CA3AF', marginTop: 8 },
  attendanceBtn: { marginBottom: 12 },
  attendanceBtnDisabled: { opacity: 0.6 },
  attendanceBonusRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6, letterSpacing: -0.5 },
  attendanceBonus: { fontSize: FONT_SIZE.medium, color: '#6B7280', letterSpacing: -0.5 },
  attendanceBonusHighlight: { fontFamily: FONTS.bold, color: '#615FFF' },
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
  monthlyBonusCardWrapper: {
    borderColor: '#E5E7EB',
    shadowColor: '#9CA3AF',
    shadowOpacity: 0.12,
    shadowRadius: 14,
    elevation: 5,
    backgroundColor: '#FFFFFF',
  },
  challengeCard: { padding: SIZES.large, overflow: 'hidden', borderRadius: 12 },
  challengeHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 },
  stepChallengeIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepNotificationControl: {
    alignItems: 'flex-end',
    maxWidth: 128,
    marginLeft: 8,
  },
  stepNotificationFeatureLabel: {
    fontSize: 10,
    fontFamily: FONTS.regular,
    color: '#9CA3AF',
    textAlign: 'right',
    marginBottom: 4,
    lineHeight: 13,
  },
  stepNotificationSwitchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  stepNotificationStatusText: {
    fontSize: 11,
    fontFamily: FONTS.medium,
    color: '#9CA3AF',
  },
  stepNotificationStatusOn: {
    color: '#6D28D9',
  },
  challengeHeaderText: { flex: 1 },
  challengeTitle: { fontSize: 18, fontFamily: FONTS.bold, color: '#4C1D95', marginBottom: 4 },
  challengeReward: { fontSize: 13, fontFamily: FONTS.regular, color: '#6B7280' },
  challengeRewardHighlight: { fontFamily: FONTS.bold, color: '#7C3AED' },
  stepsRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  stepsLabel: { fontSize: 14, fontFamily: FONTS.medium, color: '#6B7280' },
  stepsValue: { fontSize: 14, fontFamily: FONTS.bold },
  stepsValueCurrent: { color: '#4C1D95' },
  stepsValueSlash: { color: '#9CA3AF' },
  stepsValueGoal: { color: '#9CA3AF', fontFamily: FONTS.regular },
  stepsValueUnit: { color: '#9CA3AF', fontFamily: FONTS.regular },
  stepMilestonesList: {
    flexDirection: 'row',
    gap: STEP_CARD_GAP,
    paddingRight: HORIZONTAL_PADDING,
  },
  stepMilestoneCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 7,
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
  stepMilestoneLabel: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: '#4C1D95',
    marginBottom: 5,
  },
  stepMilestoneLabelText: {
    fontSize: FONT_SIZE.small,
    letterSpacing: -0.5,
    fontFamily: FONTS.regular,
    textAlign: 'center',
    color: '#6B7280',
  },
  stepMilestoneBtn: {
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden',
  },
  stepMilestoneBtnActive: {
    overflow: 'hidden',
  },
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
  stepMilestoneBtnInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  stepMilestoneBtnGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  stepMilestoneBtnText: {
    fontSize: 12,
    fontFamily: FONTS.semibold,
    color: '#9CA3AF',
  },
  stepMilestoneBtnTextClaimed: {
    color: '#A78BFA',
  },
  stepMilestoneBtnTextInactive: {
    color: '#9CA3AF',
  },
  stepMilestoneBtnTextActive: {
    fontSize: 12,
    fontFamily: FONTS.bold,
    color: '#FFFFFF',
  },
  stepTip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#EDE9FE',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: SIZES.small,
    padding: SIZES.small,
  },
  stepTipText: { fontSize: 12, fontFamily: FONTS.regular, color: '#6B7280', flex: 1 },
  coinHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: SIZES.medium },
  viewAll: { fontSize: 14, fontFamily: FONTS.semibold, color: '#3B82F6' },
  productList: { paddingRight: HORIZONTAL_PADDING },
  productCard: { borderRadius: 16, overflow: 'hidden', borderWidth: 1, borderColor: '#E5E7EB', backgroundColor: '#FFFFFF' },
  productImageBox: { borderTopLeftRadius: 16, borderTopRightRadius: 16, paddingVertical: 16, paddingHorizontal: 12, alignItems: 'center', justifyContent: 'center', minHeight: 120 },
  productImage: { width: '100%', height: 100, alignSelf: 'center' },
  productInfo: { padding: SIZES.medium, paddingTop: 12 },
  productTitle: { fontSize: 14, fontFamily: FONTS.bold, color: '#000000', marginBottom: 4, height: 40, lineHeight: 20 },
  productSub: { fontSize: 11, fontFamily: FONTS.regular, color: '#6A7282', marginBottom: 8 },
  productPrice: { flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: 4 },
  productPriceText: { fontSize: 13, fontFamily: FONTS.bold, color: '#000000', letterSpacing: -0.5 },
  productRating: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  productRatingText: { fontSize: 12, fontFamily: FONTS.regular, color: '#9CA3AF' },
  scrollView: { flex: 1, backgroundColor: '#F9FAFB' },
  scrollContent: { flexGrow: 1, paddingBottom: SIZES.xlarge, overflow: 'visible' },
});

export default MetaHomeScreen;
