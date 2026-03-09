import v_a3453e, { v_5ab095, v_c4deb2, v_de06a3, v_e662ae, v_df9f57 } from 'bapkr';
import {
  v_03e392,
  v_a2349e,
  v_1ed974,
  v_cdbae1,
  v_2d4718,
  v_326be8,
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
import { v_cf763b } from 'ixigazcpvfldbecwtbvavtbi';
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
import { v_570c34, v_1c1837, v_dd725b, v_1a40c4, v_9cafa7 } from '../components';
import { v_772971 } from 'jmpfvteuuztnp';
import { v_96a538 } from '../hooks/useVersionCheck';
import type { v_8ad91b } from '../navigation';
import { v_a0daa8 } from '../navigation';
import { v_1bfbd0, v_843035, v_9b1a04, v_ef658a, v_f54309, v_b47b09, v_57793c } from '../constants';
import { v_556baf } from '../components';
import { v_75c3c7, v_271901 } from '../context';
import { v_4ebe12, v_52c734, v_880836, v_b008ca, v_cbf5f1, v_e8dda3, v_6c47a7, v_2ca7ff, v_d0556f } from '../services';
import { v_8e174f } from '../services/admob';
import { v_998b9d } from '../utils/authErrorHandler';
import { v_312d93 } from '../utils/dateUtils';

const v_87993b = require('../../assets/images/logo_white.png');
const v_103040 = require('../../assets/images/hinti_01.png');   
const v_450056 = require('../../assets/images/hinti_mouth.png'); 

const v_35106c = v_a3453e.memo(({ isTalking: v_738ed0, style: v_7fa4e4 }: { isTalking: boolean; style: any }) => {
  const [v_80f47a, v_59c1e9] = v_5ab095(false);
  v_c4deb2(() => {
    if (!v_738ed0) {
      v_59c1e9(false);
      return;
    }
    const v_ad1d65 = setInterval(() => v_59c1e9((v_ba2215) => !v_ba2215), 120);
    return () => clearInterval(v_ad1d65);
  }, [v_738ed0]);
  return <Image source={v_80f47a ? v_450056 : v_103040} style={v_7fa4e4} resizeMode="contain" />;
});
const v_ca495a = require('../../assets/images/background_01.png'); 

const v_bd3823 = 900;
const v_dcd688 = 850;
const v_eac81e = 500;

interface GreetingAnimSectionProps {
  greetingSentences: string[];
  language: string;
  styles: any;
}

const v_f429e0 = v_a3453e.memo(({ greetingSentences: v_6562a2, language: v_05bb19, styles: v_d81136 }: GreetingAnimSectionProps) => {
  const [v_8b86b7, v_2dd25e] = v_5ab095(0);
  const [v_4f4bca, v_ffe20b] = v_5ab095(0);
  const [v_fb1b38, v_5bb39b] = v_5ab095(false);
  const [v_2167f0, v_da6fbe] = v_5ab095(false);
  const v_d37c41 = v_6562a2[v_8b86b7] ?? v_6562a2[0];
  const v_11ce69 = v_0d9f50 * 0.85;

  const v_38f64a = v_e662ae(new v_a2349e.Value(0)).current;
  const v_d6e359 = v_e662ae(new v_a2349e.Value(0)).current;
  const v_46a664 = v_e662ae(new v_a2349e.Value(0)).current;

  const v_66c9e2 = v_de06a3(() => {
    v_46a664.setValue(0);
    v_38f64a.setValue(0);
    v_a2349e.timing(v_38f64a, {
      toValue: 1,
      duration: v_bd3823,
      easing: v_cdbae1.out(v_cdbae1.cubic),
      useNativeDriver: true,
    }).start(({ finished: v_cc0753 }) => {
      if (v_cc0753) v_5bb39b(true);
    });
  }, [v_38f64a, v_46a664]);

  const v_365347 = v_de06a3(() => {
    v_5bb39b(false);
    v_38f64a.setValue(1);
    v_46a664.setValue(0);
    v_a2349e.timing(v_46a664, {
      toValue: 1,
      duration: v_dcd688,
      easing: v_cdbae1.in(v_cdbae1.cubic),
      useNativeDriver: true,
    }).start(({ finished: v_cc0753 }) => {
      if (!v_cc0753) return;
      v_ffe20b(0);
      v_2dd25e(0);
      setTimeout(() => v_66c9e2(), v_eac81e);
    });
  }, [v_38f64a, v_46a664, v_66c9e2]);

  v_c4deb2(() => {
    v_2dd25e(0);
    v_ffe20b(0);
    v_5bb39b(false);
    v_da6fbe(false);
    v_38f64a.setValue(1);
    v_46a664.setValue(0);
    v_d6e359.setValue(0);
    v_da6fbe(true);
    v_5bb39b(true);
  }, [v_05bb19, v_38f64a, v_46a664, v_d6e359]);

  v_c4deb2(() => {
    if (!v_fb1b38) return;
    if (v_4f4bca >= v_d37c41.length) {
      const v_58a659 = setTimeout(() => {
        const v_3dfb75 = v_8b86b7 >= v_6562a2.length - 1;
        if (v_3dfb75) {
          v_365347();
        } else {
          v_ffe20b(0);
          v_2dd25e((v_ebec57) => v_ebec57 + 1);
        }
      }, 2000);
      return () => clearTimeout(v_58a659);
    }
    const v_cb36b1 = setTimeout(() => v_ffe20b((v_ebec57) => v_ebec57 + 1), 70);
    return () => clearTimeout(v_cb36b1);
  }, [v_fb1b38, v_4f4bca, v_d37c41, v_6562a2.length, v_8b86b7, v_365347]);

  v_c4deb2(() => {
    let anim: v_a2349e.CompositeAnimation | null = null;
    const v_4b24d2 = setTimeout(() => {
      v_f582ff = v_a2349e.loop(
        v_a2349e.sequence([
          v_a2349e.timing(v_d6e359, { toValue: 1, duration: 850, easing: v_cdbae1.inOut(v_cdbae1.ease), useNativeDriver: true }),
          v_a2349e.timing(v_d6e359, { toValue: 0, duration: 850, easing: v_cdbae1.inOut(v_cdbae1.ease), useNativeDriver: true }),
        ])
      );
      v_f582ff.start();
    }, v_bd3823);
    return () => { clearTimeout(v_4b24d2); v_f582ff?.stop(); };
  }, [v_d6e359]);

  const v_e82ba5 = v_38f64a.interpolate({ inputRange: [0, 1], outputRange: [-v_11ce69, 0] });
  const v_4c81e0 = v_46a664.interpolate({ inputRange: [0, 1], outputRange: [0, v_11ce69] });
  const v_ed31f2 = v_a2349e.add(v_e82ba5, v_4c81e0);
  const v_4c3e9a = v_38f64a.interpolate({ inputRange: [0, 1], outputRange: [0.85, 1] });
  const v_35a29b = v_d6e359.interpolate({ inputRange: [0, 1], outputRange: [1, 1.04] });
  const v_a37637 = v_a2349e.multiply(v_4c3e9a, v_35a29b);
  const v_738ed0 = v_fb1b38 && v_4f4bca < v_d37c41.length;

  return (
    <>
      <View style={v_d81136.greetingAboveHinty}>
        <Text style={v_d81136.greetingMain} numberOfLines={1}>
          {v_d37c41.slice(0, v_4f4bca)}
          {v_4f4bca < v_d37c41.length && (
            <Text style={v_d81136.typingCursor}>|</Text>
          )}
        </Text>
      </View>
      <View style={v_d81136.headerImageWrap}>
        <Image source={v_ca495a} style={v_d81136.headerImageBg} resizeMode="cover" />
        {v_2167f0 && (
          <Animated.View style={[v_d81136.headerImageAnimated, { transform: [{ translateX: v_ed31f2 }, { scale: v_a37637 }] }]}>
            <HintiMouth isTalking={v_738ed0} style={v_d81136.headerImage} />
          </Animated.View>
        )}
      </View>
    </>
  );
});
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
const v_006281 = 10; 

const v_c19e2d = 10000; 

const v_55087c = 0.015; 
const v_a1871a = 0.01; 

const v_2258bf = 10; 
const v_7c2566 = 10; 
const v_5f1613 = v_7c2566 * (v_c19e2d / v_2258bf); 
const v_234582 = 25; 

type Props = v_432191<v_8ad91b, 'MetaHome'>;

const v_857bbc = ['weekday_mon', 'weekday_tue', 'weekday_wed', 'weekday_thu', 'weekday_fri', 'weekday_sat', 'weekday_sun'] as const;

const MetaHomeScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d }) => {
  const { navigate: v_9b57fc } = v_a0daa8();
  const { t: v_8d41d7, i18n: v_9c213b } = v_772971();
  const v_e2d13b = v_e662ae(false);

  v_c4deb2(() => {
    if (!v_e2d13b.current && __DEV__) {
      v_e2d13b.current = true;
      console.log('[Perf] MetaHomeScreen: 마운트(첫 렌더 커밋 후)', { _ts: Date.now(), _time: new Date().toISOString() });
    }
  }, []);

  const { isUpdating: v_24a76a, progress: v_a63fde } = v_96a538({
    onOtaProgress: (v_ba2265) => {
      if (__DEV__) console.log(`[OTA] 메인화면 업데이트 다운로드: ${v_ba2265}%`);
    },
  });

  const v_3a2785 = v_df9f57(() => [
    { id: '1', title: v_8d41d7('home.products.p1.title'), subtitle: v_8d41d7('home.products.p1.subtitle'), price: '100', rating: '4.8', reviews: 324, imageIndex: 0 },
    { id: '2', title: v_8d41d7('home.products.p2.title'), subtitle: v_8d41d7('home.products.p2.subtitle'), price: '100', rating: '4.8', reviews: 324, imageIndex: 1 },
    { id: '3', title: v_8d41d7('home.products.p3.title'), subtitle: v_8d41d7('home.products.p3.subtitle'), price: '1', rating: '4.0', reviews: 120, imageIndex: 2 },
  ], [v_8d41d7]);

  const v_033e14 = v_e0068c();
  const { width: v_06db8f } = v_e45a99();
  const { balance: v_c88e9b, refreshWallet: v_e37b10 } = v_271901();
  const [v_b932f9, v_2cc80d] = v_5ab095(0);

  v_c4deb2(() => {
    const v_8d41d7 = setTimeout(() => v_e37b10(), 200);
    return () => clearTimeout(v_8d41d7);
  }, [v_e37b10]);

  const v_e4961f = v_de06a3(async () => {
    try {
      const { notifications: v_b9c00c } = await v_880836();
      const v_a78249 = v_b9c00c.filter((v_f4e98d) => v_f4e98d.unread).length;
      v_2cc80d(v_a78249);
    } catch {
      v_2cc80d(0);
    }
  }, []);

  v_cf763b(
    v_de06a3(() => {
      v_e4961f();
    }, [v_e4961f])
  );

  const v_1fddaf = v_df9f57(() => {
    if (!v_c88e9b) return '0.0';
    const v_9f8406 = v_c88e9b.tokens?.find(
      (v_8d41d7) => v_8d41d7.symbol === 'MTHT' || v_8d41d7.symbol === 'METAHINT'
    );
    if (v_9f8406 && v_9f8406.onchain_balance) {
      const v_0ad8c5 = parseFloat(v_9f8406.onchain_balance);
      if (isNaN(v_0ad8c5)) return '0.0';
      const v_ccc3be = Math.floor(v_0ad8c5 * 10) / 10;
      const v_bb258c = v_ccc3be.toFixed(1);
      const v_468545 = v_bb258c.split('.');
      v_468545[0] = v_468545[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return v_468545.join('.');
    }
    return '0.0';
  }, [v_c88e9b]);
  const [v_39cb7a, v_ecd01c] = v_5ab095<number | null>(null);
  const [v_9ab1d9, v_6bf58d] = v_5ab095<number | null>(null);
  const [v_05a030, v_435f99] = v_5ab095<string | null>(null);
  const [v_32c7b6, v_07829a] = v_5ab095<string | null>(null);
  const [v_1f7868, v_e3bbea] = v_5ab095(false);

  const [v_780057, v_f23f5b] = v_5ab095(0);

  const v_56263a = v_de06a3(async () => {
    try {
      const [v_3722b7, v_51e81e] = await Promise.all([
        v_4ebe12(),
        v_52c734(),
      ]);
      v_2d4718.runAfterInteractions(() => {
        if (v_3722b7) {
          v_ecd01c(v_3722b7.health_index);
          v_435f99(v_3722b7.record_date);
        } else {
          v_ecd01c(null);
          v_435f99(null);
        }
        if (v_51e81e) {
          v_6bf58d(v_51e81e.overall_score);
          v_07829a(v_51e81e.record_date);
        } else {
          v_6bf58d(null);
          v_07829a(null);
        }
      });
    } catch (v_5e9bfe) {
      console.error('[MetaHomeScreen] 최신 점수 로드 실패:', v_5e9bfe);
      if (v_998b9d(v_c65f5d, v_5e9bfe)) return;
    }
  }, [v_c65f5d]);

  v_cf763b(
    v_de06a3(() => {
      if (__DEV__) {
        console.log('[Perf] MetaHomeScreen: useFocusEffect 콜백 시작 (loadLatestScores 직전)', { _ts: Date.now(), _time: new Date().toISOString() });
      }
      v_56263a();
    }, [v_56263a])
  );

  v_cf763b(
    v_de06a3(() => {
      if (v_326be8.OS !== 'android') return () => {};
      const v_64ccfb = () => {
        v_1ed974.exitApp();
        return true;
      };
      const v_1ae212 = v_1ed974.addEventListener('hardwareBackPress', v_64ccfb);
      return () => v_1ae212.remove();
    }, [])
  );

  const [v_79dc58, v_5b2bbb] = v_5ab095([false, false, false, false, false, false, false]); 
  const [v_05cf57, v_0d7691] = v_5ab095(0);
  const [v_f2fb87, v_c34f93] = v_5ab095(0);
  const [v_b43899, v_468450] = v_5ab095(7);

  const v_8aab53 = (new Date().getDay() + 6) % 7;
  const v_74891a = v_79dc58[v_8aab53];

  const v_ab4ad9 = (v_a86996): number => {
    const v_8dffde = new Date(v_a86996);

    return (v_8dffde.getDay() + 6) % 7;
  };

  v_c4deb2(() => {
    const v_8d41d7 = setTimeout(() => {
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

        if (v_998b9d(v_c65f5d, v_5e9bfe)) {
          return;
        }

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

          if (v_998b9d(v_c65f5d, v_741f30)) {
            return;
          }
        }
      }
    };

      v_58b642();
    }, 250);
    return () => clearTimeout(v_8d41d7);
  }, [v_c65f5d, v_8aab53]);

  const v_2f26f6 = async () => {
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

  const v_d0c5d7 = () => {
    if (v_74891a || v_1f7868) return;
    v_e3bbea(true);
    v_8e174f(
      () => v_2f26f6(),
      () => v_e3bbea(false),
      () => {
        v_e3bbea(false);
        v_03e392.alert(v_8d41d7('common.error'), v_8d41d7('home.attendance_check_failed'));
      }
    );
  };

  const { currentSteps: v_dc679a, stepGoal: v_011173, isPedometerAvailable: v_9c8eed, stepNotificationEnabled: v_264467, setStepNotificationEnabled: v_e882e2 } = v_75c3c7();

  const [v_b1361b, v_04f4d8] = v_5ab095<number[]>([]);
  const [v_cd6f97, v_5ce610] = v_5ab095(false);

  v_c4deb2(() => {
    const v_8d41d7 = setTimeout(() => {
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
    }, 350);
    return () => clearTimeout(v_8d41d7);
  }, [v_9c213b.language]);

  const v_616ba8 = v_df9f57(
    () => Array.from({ length: v_c19e2d / v_2258bf }, (v_37eab7, v_ebec57) => (v_ebec57 + 1) * v_2258bf),
    []
  );

  const v_81d478 = v_df9f57(
    () => v_616ba8.slice(0, v_234582),
    [v_616ba8]
  );
  const v_113ab0 = 120;
  const v_006281 = 10;

  const v_30ddf9 = v_39cb7a != null ? v_b47b09(v_39cb7a) : null;
  const v_129031 = v_9ab1d9 != null ? v_57793c(v_9ab1d9) : null;
  const v_047e65 = v_30ddf9 ? v_8d41d7(`home.health_labels.${v_30ddf9}`) : '';
  const v_086582 = v_129031 ? v_8d41d7(`home.health_labels.${v_129031}`) : '';
  const v_b08678 = v_30ddf9 ? v_f54309[v_30ddf9] : null;
  const v_5d590c = v_129031 ? v_f54309[v_129031] : null;
  const v_597fae = (v_06db8f - v_ff4e8b * 2 - v_66f2f8) / 2;
  const v_312c9c = Math.floor((v_06db8f - v_ff4e8b * 2 - v_9b1a04.large * 2 - 6 * 2) / 7);
  const v_765ddb = v_06db8f - v_ff4e8b * 2;
  const v_3af450 = (v_765ddb - v_11fb5c) / 1.5;

  const v_74d6ea = () => v_9b57fc('SkinAnalysis');
  const v_ae6f36 = () => v_9b57fc('HealthAnalysis');
  const v_d85372 = () => v_9b57fc('HealthAnalysis', { initialTab: 'records' });
  const v_8daf84 = () => v_9b57fc('SkinAnalysis', { initialTab: 'records' });
  const v_0764b8 = () => v_9b57fc('Chat');

  const v_2627c5 = (v_af3e48) => {
    const v_c5110a = v_616ba8[v_af3e48];
    if (v_c5110a == null || v_cd6f97 || v_dc679a < v_c5110a || v_b1361b.includes(v_af3e48)) {
      return;
    }
    v_5ce610(true);
    v_8e174f(
      () => v_c907cb(v_af3e48),
      () => v_5ce610(false),
      () => {
        v_5ce610(false);
        v_03e392.alert(v_8d41d7('common.error'), v_8d41d7('home.step_reward_failed'));
      }
    );
  };

  const v_c907cb = async (v_af3e48) => {
    const v_c5110a = v_616ba8[v_af3e48];
    if (v_c5110a == null || v_cd6f97 || v_dc679a < v_c5110a || v_b1361b.includes(v_af3e48)) {
      return;
    }

    v_5ce610(true);
    try {
      const v_227df7 = v_312d93(v_9c213b.language);
      if (__DEV__) {
        console.log('[MetaHomeScreen] 걸음수 보상 받기 호출:', {
          today: v_227df7,
          buttonIndex: v_af3e48,
          milestone: v_616ba8[v_af3e48],
          currentSteps: v_dc679a,
          stepGoal: v_011173,
          claimedStepIndices: v_b1361b,
        });
      }

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

      if (v_998b9d(v_c65f5d, v_5e9bfe)) {
        return;
      }

      const v_1744b9 = v_5e9bfe instanceof Error ? v_5e9bfe.message : v_8d41d7('home.step_reward_failed');
      v_03e392.alert(v_8d41d7('common.error'), v_1744b9);
    } finally {
      v_5ce610(false);
    }
  };

  const v_6562a2 = v_df9f57(
    () => [v_8d41d7('home.greeting_1'), v_8d41d7('home.greeting_2'), v_8d41d7('home.greeting_3'), v_8d41d7('home.greeting_4'), v_8d41d7('home.greeting_5')],
    [v_8d41d7]
  );

  return (
    <MainLayout activeKey="home">
      <SafeView style={v_d81136.screen} showBottomBackground={false}>
        <SafeScrollView
          style={v_d81136.scrollView}
          showBottomBackground={false}
          disableBottomPadding={true}
          showStatusBarBackground={true}
          statusBarBackgroundColor="#FFFFFF"
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
                <View style={v_d81136.headerLeft}>
                  <Image source={v_87993b} style={v_d81136.headerLogo} resizeMode="contain" />
                </View>
                <View style={v_d81136.headerRight}>
                  <TouchableOpacity onPress={() => v_9b57fc('MyInfoNotify')} style={v_d81136.headerIconBtn} hitSlop={8}>
                    <View style={[v_d81136.headerIconPill, v_d81136.notifPill]}>
                      <Bell size={22} color="#FFFFFF" />
                      {v_b932f9 > 0 && <View style={v_d81136.notifBadge} />}
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => v_9b57fc('Wallet')} style={v_d81136.headerIconBtn} hitSlop={8}>
                    <View style={[v_d81136.headerIconPill, v_d81136.pointsPill]}>
                      <Coins size={20} color="#FFFFFF" />
                      <Text style={v_d81136.pointsText}>{v_1fddaf}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <GreetingAnimSection
                greetingSentences={v_6562a2}
                language={v_9c213b.language}
                styles={v_d81136}
              />
            </LinearGradient>

            {}
            <View
              style={[
                v_d81136.metricsRow,
                v_780057 > 0 && { transform: [{ translateY: -v_780057 }] },
              ]}
              onLayout={(v_9e86fd) => v_f23f5b(v_9e86fd.nativeEvent.layout.height)}
            >
              <TouchableOpacity style={[v_d81136.metricCard, { width: v_597fae }]} onPress={v_d85372} activeOpacity={0.9}>
                <View style={v_d81136.metricCardHeader}>
                  <Heart size={24} color="#EF4444" />
                  <Text style={v_d81136.metricTitle}>{v_8d41d7('home.health_index')}</Text>
                </View>

                <Text style={v_d81136.metricDate}>
                  {v_39cb7a != null && v_05a030
                    ? v_05a030.replace(/-/g, '.')
                    : v_8d41d7('home.before_measurement')}
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
                  {v_39cb7a != null && v_b08678 && <View style={[v_d81136.metricProgressFill, { width: `${(v_39cb7a / 10) * 100}%`, backgroundColor: v_b08678.color }]} />}
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[v_d81136.metricCard, { width: v_597fae }]} onPress={v_8daf84} activeOpacity={0.9}>
                <View style={v_d81136.metricCardHeader}>
                  <Droplet size={24} color="#38BDF8" />
                  <Text style={v_d81136.metricTitle}>{v_8d41d7('home.skin_score')}</Text>
                </View>
                <Text style={v_d81136.metricDate}>
                  {v_9ab1d9 != null && v_32c7b6
                    ? v_32c7b6.replace(/-/g, '.')
                    : v_8d41d7('home.before_measurement')}
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
                  {v_9ab1d9 != null && v_5d590c && <View style={[v_d81136.metricProgressFill, { width: `${v_9ab1d9}%`, backgroundColor: v_5d590c.color }]} />}
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {}
          <View style={v_d81136.section}>
            <Text style={v_d81136.sectionTitle}>{v_8d41d7('home.my_health_management')}</Text>
            <View style={v_d81136.managementRow}>
              <TouchableOpacity style={[v_d81136.managementCard, { width: v_597fae }]} onPress={v_ae6f36} activeOpacity={0.8}>
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
              <TouchableOpacity style={[v_d81136.managementCard, { width: v_597fae }]} onPress={v_74d6ea} activeOpacity={0.8}>
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

          {}
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
                onPress={v_0764b8}
                style={v_d81136.aiHintyBtn}
                textStyle={v_d81136.aiHintyBtnText}
              />
            </LinearGradient>
          </View>

          {}
          <View style={v_d81136.section}>
            <Text style={v_d81136.sectionTitle}>{v_8d41d7('home.attendance_check')}</Text>
            <View style={v_d81136.attendanceCardWrapper}>
              <View style={v_d81136.attendanceCard}>
                <View style={v_d81136.attendanceHeader}>
                  <View style={v_d81136.attendanceHeaderText}>
                    <Text style={v_d81136.attendanceMain}>{v_8d41d7('home.daily_attendance_coins')}</Text>

                    {

}
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

          {}
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
                        <Text style={v_d81136.stepMilestoneLabel}>
                          +{v_7c2566}M
                        </Text>
                        <TouchableOpacity
                          style={[
                            v_d81136.stepMilestoneBtn,
                            v_26dce6 && v_d81136.stepMilestoneBtnActive,
                            v_ddef54 && v_d81136.stepMilestoneBtnClaimed,
                            v_e0ed2f && v_d81136.stepMilestoneBtnInactive,
                          ]}
                          onPress={() => v_2627c5(v_a56041)}
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
                              <Text style={v_d81136.stepMilestoneBtnTextActive}>
                                {v_8d41d7('home.step_receive')}
                              </Text>
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
              contentContainerStyle={v_d81136.productList}
              decelerationRate="fast"
              snapToInterval={v_3af450 + v_11fb5c}
              snapToAlignment="start"
            >
              {v_3a2785.map((v_e2a85c) => (
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
          </View>

        </SafeScrollView>
      </SafeView>
      <UpdateOverlay visible={v_24a76a} progress={v_a63fde} />
    </MainLayout>
  );
};

const v_d81136 = v_472849.create({
  screen: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  headerContainer: {
    height: 500,
    marginBottom: v_9b1a04.xlarge,
    overflow: 'visible',
  },
  headerGradient: {
    paddingHorizontal: v_ff4e8b,
    height: '100%',
    overflow: 'visible',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: v_9b1a04.small,
  },
  metricCardHeader: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  metricScoreWrap: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 2, marginTop: 8 },
  metricScoreGroup: { flexDirection: 'row', alignItems: 'center', gap: 2 },
  metricScoreUnit: { fontSize: v_ef658a.small, fontFamily: v_843035.regular, color: '#6A7282' },
  metricTag: { alignSelf: 'flex-start', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12, marginTop: 8 },
  greetingAboveHinty: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    marginTop: 5,
  },
  greetingMain: { fontSize: 16, fontFamily: v_843035.medium, color: '#FFFFFF', textAlign: 'center', letterSpacing: -0.5 },
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
  pointsPill: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingHorizontal: 12, paddingVertical: 4, minHeight: 40 },
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
  headerImageWrap: { width: '100%', alignItems: 'center', position: 'relative', overflow: 'visible' },
  headerImageBg: { position: 'absolute', top: 15, alignSelf: 'center', width: '90%', height: 200, objectFit: 'contain', },
  headerImageAnimated: { width: '100%', alignItems: 'center' },
  headerImage: { width: '100%', height: 200 },
  backgroundImageWrap: { width: '100%', alignItems: 'center', borderWidth: 1, borderColor: 'red', },
  backgroundImage: { width: '100%', height: 200 },
  typingCursor: { opacity: 0.8 },
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
  aiHintyBtn: { backgroundColor: '#FFFFFF', borderWidth: 0 },
  aiHintyBtnText: { color: '#4F39F6' },
  attendanceCardWrapper: { overflow: 'hidden', borderRadius: 14, borderWidth: 1.108, borderColor: "#efefef", shadowColor: '#cccccc', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.1, shadowRadius: 15, elevation: 6, backgroundColor: '#ffffff' },
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
  attendanceRewardHighlight: { fontFamily: v_843035.bold, color: '#615FFF' },
  weekGrid: { flexDirection: 'row', justifyContent: 'space-between', gap: 2, marginBottom: 16 },
  weekDayCol: { flex: 1, alignItems: 'center', minWidth: 0 },
  weekDayBox: { borderRadius: 12, alignItems: 'center', justifyContent: 'center', overflow: 'hidden' },
  weekDayDone: { backgroundColor: '#615FFF' },
  weekDayPending: { backgroundColor: '#FFD740' },
  weekDayHintIcon: { width: 24, height: 24 },
  weekDayText: { fontSize: 12, fontFamily: v_843035.medium, color: '#9CA3AF', marginTop: 8 },
  attendanceBtn: { marginBottom: 12 },
  attendanceBtnDisabled: { opacity: 0.6 },
  attendanceBonusRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6, letterSpacing: -0.5 },
  attendanceBonus: { fontSize: v_ef658a.medium, color: '#6B7280', letterSpacing: -0.5 },
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
  challengeReward: { fontSize: 13, fontFamily: v_843035.regular, color: '#6B7280' },
  challengeRewardHighlight: { fontFamily: v_843035.bold, color: '#7C3AED' },
  stepsRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  stepsLabel: { fontSize: 14, fontFamily: v_843035.medium, color: '#6B7280' },
  stepsValue: { fontSize: 14, fontFamily: v_843035.bold },
  stepsValueCurrent: { color: '#4C1D95' },
  stepsValueSlash: { color: '#9CA3AF' },
  stepsValueGoal: { color: '#9CA3AF', fontFamily: v_843035.regular },
  stepsValueUnit: { color: '#9CA3AF', fontFamily: v_843035.regular },
  stepMilestonesList: {
    flexDirection: 'row',
    gap: v_006281,
    paddingRight: v_ff4e8b,
  },
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
  stepMilestoneLabel: {
    fontSize: 14,
    fontFamily: v_843035.bold,
    color: '#4C1D95',
    marginBottom: 8,
  },
  stepMilestoneLabelText: {
    fontSize: v_ef658a.small,
    letterSpacing: -0.5,
    fontFamily: v_843035.regular,
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
    fontFamily: v_843035.semibold,
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
    fontFamily: v_843035.bold,
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
    borderRadius: v_9b1a04.small,
    padding: v_9b1a04.small,
  },
  stepTipText: { fontSize: 12, fontFamily: v_843035.regular, color: '#6B7280', flex: 1 },
  coinHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: v_9b1a04.medium },
  viewAll: { fontSize: 14, fontFamily: v_843035.semibold, color: '#3B82F6' },
  productList: { paddingRight: v_ff4e8b },
  productCard: { borderRadius: 16, overflow: 'hidden', borderWidth: 1, borderColor: '#E5E7EB', backgroundColor: '#FFFFFF' },
  productImageBox: { borderTopLeftRadius: 16, borderTopRightRadius: 16, paddingVertical: 16, paddingHorizontal: 12, alignItems: 'center', justifyContent: 'center', minHeight: 120 },
  productImage: { width: '100%', height: 100, alignSelf: 'center' },
  productInfo: { padding: v_9b1a04.medium, paddingTop: 12 },
  productTitle: { fontSize: 14, fontFamily: v_843035.bold, color: '#000000', marginBottom: 4, height: 40, lineHeight: 20 },
  productSub: { fontSize: 11, fontFamily: v_843035.regular, color: '#6A7282', marginBottom: 8 },
  productPrice: { flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: 4 },
  productPriceText: { fontSize: 13, fontFamily: v_843035.bold, color: '#000000', letterSpacing: -0.5 },
  productRating: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  productRatingText: { fontSize: 12, fontFamily: v_843035.regular, color: '#9CA3AF' },
  scrollView: { flex: 1, backgroundColor: '#F9FAFB' },
  scrollContent: { flexGrow: 1, paddingBottom: v_9b1a04.xlarge, overflow: 'visible' },
});

export default v_7aeeb0;
