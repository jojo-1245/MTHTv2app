import v_a3453e, {
  v_af12cb,
  v_de06a3,
  v_76a8a9,
  v_c4deb2,
  v_df9f57,
  v_e662ae,
  v_5ab095,
} from 'bapkr';
import { v_6b5698, v_326be8 } from 'rcmrninabrnb';
import v_e84827 from 'bkjbgtcoyuizqwgwtnaxmfkyvlqwevapsqmanbsnv';
import {
  v_0c7e2f,
  v_381355,
  v_015a21,
  v_8348d9,
  v_f41071,
  v_8a180c,
} from '../services/stepTrackingService';
import {
  v_157cb4,
  v_5c2ccb,
  v_303ad0,
} from '../services/permissionService';
import { v_772971 } from 'jmpfvteuuztnp';
import { v_312d93 } from '../utils/dateUtils';

const v_8bf63f = 'metahint_step_notification_enabled';
const v_c567d7 = 'metahint_step_count';
const v_368d84 = 'metahint_step_count_date';
const v_c19e2d = 10000;

interface StepTrackingContextValue {
  currentSteps: number;
  stepGoal: number;
  isPedometerAvailable: boolean | null;
  stepNotificationEnabled: boolean;
  setStepNotificationEnabled: (enabled: boolean) => void;
}

const v_d978fd = v_af12cb<StepTrackingContextValue | undefined>(undefined);

export const StepTrackingProvider: v_a3453e.FC<{ children: v_a3453e.ReactNode }> = ({ children: v_21f619 }) => {
  const { t: v_8d41d7, i18n: v_9c213b } = v_772971();
  const [v_dc679a, v_4b95c4] = v_5ab095(0);
  const v_3e3188 = v_e662ae(0);
  const v_5948ce = v_e662ae(0);
  const [v_9c8eed, v_64b293] = v_5ab095<boolean | null>(null);
  const [v_264467, v_e882e2] = v_5ab095(false);

  const v_f74058 = v_de06a3((v_b24339, v_4ff54d) => {
    try {
      const v_6dce25 = v_8d41d7(v_b24339);
      if (v_6dce25 === v_b24339 && v_4ff54d) return v_4ff54d;
      return v_6dce25;
    } catch (v_5e9bfe) {
      console.warn('[StepTracking] 번역 실패:', v_b24339, v_5e9bfe);
      return v_4ff54d || v_b24339;
    }
  }, [v_8d41d7]);

  const v_c877df = v_de06a3(() => {
    return v_312d93(v_9c213b.language);
  }, [v_9c213b.language]);

  const v_7f798a = v_de06a3(async (v_eb271c) => {
    try {
      const v_227df7 = v_c877df();
      await v_e84827.setItem(v_c567d7, v_eb271c.toString());
      await v_e84827.setItem(v_368d84, v_227df7);
      v_5948ce.current = v_eb271c;
    } catch (v_5e9bfe) {
      console.warn('걸음수 저장 실패:', v_5e9bfe);
    }
  }, [v_c877df]);

  const v_e9771f = v_de06a3(async (): Promise<number> => {
    try {
      const v_d94577 = await v_e84827.getItem(v_368d84);
      const v_227df7 = v_c877df();
      if (v_d94577 === null || v_d94577 === '' || v_d94577 !== v_227df7) {
        await v_e84827.setItem(v_c567d7, '0');
        await v_e84827.setItem(v_368d84, v_227df7);
        v_5948ce.current = 0;
        return 0;
      }
      const v_635b76 = await v_e84827.getItem(v_c567d7);
      const v_eb271c = v_635b76 ? parseInt(v_635b76, 10) : 0;
      v_5948ce.current = v_eb271c;
      return v_eb271c;
    } catch (v_5e9bfe) {
      console.warn('걸음수 로드 실패:', v_5e9bfe);
      return 0;
    }
  }, [v_c877df]);

  v_c4deb2(() => { v_3e3188.current = v_dc679a; }, [v_dc679a]);

  v_c4deb2(() => {
    let v_41ed06 = true;
    const v_e71c08 = async () => {
      try {
        const v_635b76 = await v_e9771f();
        let v_fd7b23 = v_635b76;

        try {
          const v_4e3a2c = await v_8a180c();
          if (v_4e3a2c > v_fd7b23) {
            v_fd7b23 = v_4e3a2c;
          }
          try {
            const { logToServer: v_f42779 } = require('../services/clientLog');
            v_f42779('step_hydrate_recover', {
              saved_steps: v_635b76,
              recovered_steps: v_4e3a2c,
              next_steps: v_fd7b23,
              platform: v_326be8.OS,
            });
          } catch { }
        } catch {

        }

        if (!v_41ed06) return;
        v_4b95c4((v_ba2215) => Math.max(v_ba2215, v_fd7b23));
        if (v_fd7b23 > v_635b76) {
          await v_7f798a(v_fd7b23);
        }
      } catch (v_5e9bfe) {
        console.warn('[StepTracking] 즉시 하이드레이션 실패:', v_5e9bfe);
      }
    };

    v_e71c08();
    return () => {
      v_41ed06 = false;
    };
  }, [v_e9771f, v_7f798a]);

  v_c4deb2(() => {
    if (!v_264467 || !v_0c7e2f()) return;
    const v_59929c = v_f74058('home.step_unit', '걸음');
    v_8348d9(v_dc679a, v_c19e2d, v_59929c);
  }, [v_dc679a, v_264467, v_f74058]);

  v_c4deb2(() => {
    if (v_dc679a === 0) return;
    const v_2d3311 = setTimeout(() => { v_7f798a(v_dc679a); }, 5000);
    return () => clearTimeout(v_2d3311);
  }, [v_dc679a, v_7f798a]);

  const v_80e790 = v_de06a3(async () => {
    const v_81e2ef = await v_e84827.getItem(v_8bf63f);
    const v_d20c84 = v_81e2ef === 'true';
    v_e882e2(v_d20c84);
    if (v_d20c84 && v_0c7e2f()) {
      const v_59929c = v_f74058('home.step_unit', '걸음');
      const v_43c42e = await v_381355(v_c19e2d, v_59929c);
      if (!v_43c42e.success) {
        v_e882e2(false);
        await v_e84827.setItem(v_8bf63f, 'false');
      }
    }
  }, [v_f74058]);

  const v_f37ec2 = v_de06a3(async (v_d20c84) => {
    v_e882e2(v_d20c84);
    await v_e84827.setItem(v_8bf63f, v_d20c84 ? 'true' : 'false');
    if (!v_0c7e2f()) return;

    if (v_d20c84) {
      const v_59929c = v_f74058('home.step_unit', '걸음');
      const v_43c42e = await v_381355(v_c19e2d, v_59929c);
      if (!v_43c42e.success) {
        v_e882e2(false);
        await v_e84827.setItem(v_8bf63f, 'false');
      }
    } else {
      await v_015a21();
    }
  }, [v_f74058]);

  const v_c9b08f = 500;
  v_c4deb2(() => {
    const v_8d41d7 = setTimeout(() => {
      const v_5dedf9 = async () => {
        if (v_326be8.OS === 'android') {
          await v_157cb4();
          const v_2fe247 = await v_5c2ccb();
          if (v_2fe247 && v_0c7e2f()) {
            const v_f8a973 = await v_e84827.getItem(v_8bf63f);
            if (v_f8a973 === null) {
              await v_e84827.setItem(v_8bf63f, 'true');
              v_e882e2(true);
              const v_59929c = v_f74058('home.step_unit', '걸음');
              const v_43c42e = await v_381355(v_c19e2d, v_59929c);
              if (!v_43c42e.success) {
                v_e882e2(false);
                await v_e84827.setItem(v_8bf63f, 'false');
              }
            }
          }
        } else {
          await v_157cb4();
        }
      };
      v_5dedf9();
    }, v_c9b08f);
    return () => clearTimeout(v_8d41d7);
  }, [v_f74058]);

  v_c4deb2(() => {
    let v_269481 = null;
    let v_41ed06 = true;
    let v_cf4e0f = null;
    const v_4cbfc6 = 600;

    const v_cb36b1 = setTimeout(() => {
      const v_391ff4 = async () => {
        try {
          let v_635b76 = await v_e9771f();
          const v_dc359d = await v_f41071();
          const v_d94577 = await v_e84827.getItem(v_368d84);
          const v_227df7 = v_c877df();

          if (v_d94577 !== v_227df7 && v_d94577 !== null && v_d94577 !== '') {
            try {
              const { logToServer: v_f42779 } = require('../services/clientLog');
              v_f42779('step_reset_init', {
                saved_date: v_d94577,
                today: v_227df7,
                language: v_9c213b.language,
                saved_steps: v_635b76,
                service_steps: v_dc359d,
              }, { level: 'warn' });
            } catch { }
            await v_e84827.setItem(v_c567d7, '0');
            await v_e84827.setItem(v_368d84, v_227df7);
            v_635b76 = 0;
            v_5948ce.current = 0;
          }

          const v_02fdad = await v_303ad0();
          if (!v_02fdad) {
            const v_b6d66b = await v_157cb4();
            if (!v_b6d66b && v_41ed06) {
              v_64b293(false);
              v_4b95c4(Math.max(v_3e3188.current, v_635b76));
              return;
            }
          }

          const { Pedometer: v_5dafcb } = require('rdtggkuyjeos');
          const v_37a1a7 = await v_5dafcb.isAvailableAsync();
          if (!v_41ed06) return;
          v_64b293(v_37a1a7);

          if (v_37a1a7) {
            const { status: v_d308b5 } = await v_5dafcb.getPermissionsAsync();
            if (v_d308b5 !== 'granted') {
              const { status: v_ecf593 } = await v_5dafcb.requestPermissionsAsync();
              if (v_ecf593 !== 'granted') {
                if (v_41ed06) {
                  v_64b293(false);
                  v_4b95c4(Math.max(v_3e3188.current, v_635b76));
                }
                return;
              }
            }

            try {
              v_269481 = v_5dafcb.watchStepCount((v_43c42e) => {
                if (!v_41ed06) return;
                const v_81d1b5 = v_43c42e.steps;
                const v_a6a5f1 = v_3e3188.current;
                const v_fd45cb = v_5948ce.current;
                let v_9c9484;
                if (v_fd45cb === 0 && v_81d1b5 <= 1) {
                  v_9c9484 = 0;
                } else {
                  v_9c9484 = Math.max(v_fd45cb, v_81d1b5, v_a6a5f1);
                }
                if (v_9c9484 > v_a6a5f1) v_4b95c4(v_9c9484);
              });

              v_8a180c().then((v_71e9eb) => {
                if (!v_41ed06) return;
                let v_9c9484;
                if (v_635b76 === 0 && v_71e9eb <= 1) {
                  v_9c9484 = 0;
                } else {
                  const v_6f7c85 = [v_635b76, v_3e3188.current];
                  if (v_71e9eb > 0) v_6f7c85.push(v_71e9eb);
                  v_9c9484 = Math.max(...v_6f7c85);
                }
                try {
                  const { logToServer: v_f42779 } = require('../services/clientLog');
                  v_f42779('step_init_recover', {
                    saved_steps: v_635b76,
                    recovered_steps: v_71e9eb,
                    final_steps: v_9c9484,
                    displayed: v_3e3188.current,
                    platform: v_326be8.OS,
                  });
                } catch { }
                if (v_9c9484 >= v_3e3188.current) {
                  v_4b95c4(v_9c9484);
                  if (v_9c9484 > v_635b76) v_7f798a(v_9c9484);
                }
              }).catch(() => {
                if (v_41ed06) v_4b95c4(Math.max(v_3e3188.current, v_635b76));
              });
            } catch (v_5e9bfe) {
              console.warn('Pedometer watchStepCount error:', v_5e9bfe);
              if (v_41ed06) v_4b95c4(Math.max(v_3e3188.current, v_635b76));
            }
          } else {
            if (v_41ed06) v_4b95c4(Math.max(v_3e3188.current, v_635b76));
          }
        } catch (v_5e9bfe) {
          console.warn('Pedometer initialization error:', v_5e9bfe);
          if (v_41ed06) {
            v_64b293(false);
            const v_fd5f43 = await v_e9771f();
            v_4b95c4(Math.max(v_3e3188.current, v_fd5f43));
          }
        }
      };
      v_cf4e0f = setTimeout(() => { v_391ff4(); }, 500);
    }, v_4cbfc6);

    return () => {
      clearTimeout(v_cb36b1);
      if (v_cf4e0f != null) clearTimeout(v_cf4e0f);
      v_41ed06 = false;
      v_269481?.remove();
    };
  }, []);

  v_c4deb2(() => {
    const v_8d41d7 = setTimeout(() => {
      const v_b7370f = async () => {
        if (v_326be8.OS === 'android' && v_0c7e2f()) {
          try {
            await v_015a21();
            await new Promise((v_6f7712) => setTimeout(v_6f7712, 200));
          } catch (v_5e9bfe) {
            console.warn('[StepTracking] 이전 서비스 정리 실패:', v_5e9bfe);
          }
        }
      };
      v_b7370f();
    }, 400);
    return () => clearTimeout(v_8d41d7);
  }, []);

  v_c4deb2(() => {
    const v_8d41d7 = setTimeout(() => v_80e790(), 700);
    return () => clearTimeout(v_8d41d7);
  }, [v_80e790]);

  const v_5640a4 = v_de06a3(async () => {
    try {
      const v_d94577 = await v_e84827.getItem(v_368d84);
      const v_227df7 = v_c877df();
      if (v_d94577 !== null && v_d94577 !== '' && v_d94577 !== v_227df7) {
        try {
          const { logToServer: v_f42779 } = require('../services/clientLog');
          v_f42779('step_reset_new_day', {
            saved_date: v_d94577,
            today: v_227df7,
            language: v_9c213b.language,
            current_steps_before_reset: v_3e3188.current,
          }, { level: 'warn' });
        } catch { }
        await v_e84827.setItem(v_c567d7, '0');
        await v_e84827.setItem(v_368d84, v_227df7);
        v_5948ce.current = 0;
        v_4b95c4(0);
        v_3e3188.current = 0;
      }
    } catch (v_5e9bfe) {
      console.warn('[StepTracking] 날짜 체크 실패:', v_5e9bfe);
    }
  }, [v_c877df, v_9c213b.language]);

  v_c4deb2(() => {
    const v_207dac = setInterval(() => { v_5640a4(); }, 60000);
    return () => clearInterval(v_207dac);
  }, [v_5640a4]);

  v_c4deb2(() => {
    if (!v_6b5698) return;
    let v_269481 = null;
    try {
      v_269481 = v_6b5698.addEventListener('change', async (v_3b10d8) => {
        if (v_3b10d8 === 'active') {
          try { await v_5640a4(); } catch {}
          try {
            const v_e98932 = v_3e3188.current;
            const v_71e9eb = await v_8a180c();
            try {
              const { logToServer: v_f42779 } = require('../services/clientLog');
              v_f42779('step_active_recover', {
                before_steps: v_e98932,
                recovered_steps: v_71e9eb,
                platform: v_326be8.OS,
              });
            } catch { }
            if (v_71e9eb > 0 && v_71e9eb > v_3e3188.current) {
              v_4b95c4(v_71e9eb);
              await v_7f798a(v_71e9eb);
            }
          } catch {}
        }
      });
    } catch {}
    return () => { try { v_269481?.remove(); } catch {} };
  }, [v_5640a4, v_7f798a]);

  v_c4deb2(() => {
    if (v_326be8.OS !== 'android') return;
    if (!v_264467 || !v_0c7e2f()) return;

    let v_da0c31 = false;
    const v_706c5a = 1500;
    const v_cb36b1 = setInterval(async () => {
      if (!v_6b5698 || v_6b5698.currentState !== 'active') return;
      if (v_da0c31) return;
      v_da0c31 = true;
      try {
        const v_71e9eb = await v_f41071();
        if (v_71e9eb > v_3e3188.current) {
          v_4b95c4(v_71e9eb);
        }
      } catch {

      } finally {
        v_da0c31 = false;
      }
    }, v_706c5a);

    return () => clearInterval(v_cb36b1);
  }, [v_264467]);

  const v_3b402b = v_df9f57(() => ({
    currentSteps: v_dc679a,
    stepGoal: v_c19e2d,
    isPedometerAvailable: v_9c8eed,
    stepNotificationEnabled: v_264467,
    setStepNotificationEnabled: v_f37ec2,
  }), [v_dc679a, v_9c8eed, v_264467, v_f37ec2]);

  return (
    <StepTrackingContext.Provider value={v_3b402b}>
      {v_21f619}
    </StepTrackingContext.Provider>
  );
};

export const v_75c3c7 = (): StepTrackingContextValue => {
  const v_e3aeb3 = v_76a8a9(v_d978fd);
  if (!v_e3aeb3) throw new Error('useStepTracking must be used within a StepTrackingProvider');
  return v_e3aeb3;
};
