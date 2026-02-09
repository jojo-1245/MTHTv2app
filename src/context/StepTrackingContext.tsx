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
  v_8348d9,
  v_f41071,
} from '../services/stepTrackingService';
import {
  v_157cb4,
  v_5c2ccb,
  v_303ad0,
} from '../services/permissionService';
import { v_772971 } from 'jmpfvteuuztnp';

const v_8bf63f = 'metahint_step_notification_enabled';
const v_c567d7 = 'metahint_step_count';
const v_368d84 = 'metahint_step_count_date';
const v_c19e2d = 100; 

interface StepTrackingContextValue {
  currentSteps: number;
  stepGoal: number;
  isPedometerAvailable: boolean | null;
  stepNotificationEnabled: boolean;
  setStepNotificationEnabled: (enabled: boolean) => void;
}

const v_d978fd = v_af12cb<StepTrackingContextValue | undefined>(undefined);

export const StepTrackingProvider: v_a3453e.FC<{ children: v_a3453e.ReactNode }> = ({ children: v_21f619 }) => {
  const { t: v_8d41d7 } = v_772971();
  const [v_dc679a, v_4b95c4] = v_5ab095(0);
  const v_3e3188 = v_e662ae(0); 
  const [v_9c8eed, v_64b293] = v_5ab095<boolean | null>(null);
  const [v_264467, v_e882e2] = v_5ab095(false);

  const v_f74058 = v_de06a3((v_b24339, v_4ff54d) => {
    try {
      const v_6dce25 = v_8d41d7(v_b24339);

      if (v_6dce25 === v_b24339 && v_4ff54d) {
        return v_4ff54d;
      }
      return v_6dce25;
    } catch (v_5e9bfe) {
      console.warn('[StepTracking] 번역 실패:', v_b24339, v_5e9bfe);
      return v_4ff54d || v_b24339;
    }
  }, [v_8d41d7]);

  const v_c877df = v_de06a3(() => {
    const v_227df7 = new Date();
    return `${v_227df7.getFullYear()}-${String(v_227df7.getMonth() + 1).padStart(2, '0')}-${String(v_227df7.getDate()).padStart(2, '0')}`;
  }, []);

  const v_7f798a = v_de06a3(async (v_eb271c) => {
    try {
      const v_227df7 = v_c877df();
      await v_e84827.setItem(v_c567d7, v_eb271c.toString());
      await v_e84827.setItem(v_368d84, v_227df7);
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
        return 0;
      }

      const v_635b76 = await v_e84827.getItem(v_c567d7);
      return v_635b76 ? parseInt(v_635b76, 10) : 0;
    } catch (v_5e9bfe) {
      console.warn('걸음수 로드 실패:', v_5e9bfe);
      return 0;
    }
  }, [v_c877df]);

  v_c4deb2(() => {
    v_3e3188.current = v_dc679a;
  }, [v_dc679a]);

  v_c4deb2(() => {
    if (!v_264467 || !v_0c7e2f()) return;
    const v_59929c = v_f74058('home.step_unit', '걸음');
    v_8348d9(v_dc679a, v_c19e2d, v_59929c);
  }, [v_dc679a, v_264467, v_f74058]);

  v_c4deb2(() => {
    if (v_dc679a === 0) return; 

    const v_2d3311 = setTimeout(() => {
      v_7f798a(v_dc679a);
    }, 5000); 

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
    if (v_d20c84 && v_0c7e2f()) {
      const v_59929c = v_f74058('home.step_unit', '걸음');
      const v_43c42e = await v_381355(v_c19e2d, v_59929c);
      if (!v_43c42e.success) {
        v_e882e2(false);
        await v_e84827.setItem(v_8bf63f, 'false');
      }
    }
  }, [v_f74058]);

  v_c4deb2(() => {
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
  }, [v_f74058]);

  v_c4deb2(() => {
    let v_269481 = null;
    let v_41ed06 = true;

    const v_391ff4 = async () => {
      try {

        let v_635b76 = await v_e9771f();

        const v_dc359d = await v_f41071();

        const v_d94577 = await v_e84827.getItem(v_368d84);
        const v_227df7 = v_c877df();

        if (v_d94577 !== v_227df7 && v_d94577 !== null && v_d94577 !== '') {

          await v_e84827.setItem(v_c567d7, '0');
          await v_e84827.setItem(v_368d84, v_227df7);
          v_635b76 = 0;
        }

        const v_02fdad = await v_303ad0();
        if (!v_02fdad) {

          const v_b6d66b = await v_157cb4();
          if (!v_b6d66b && v_41ed06) {
            v_64b293(false);
            if (v_41ed06) {
              const v_a6a5f1 = v_3e3188.current;
              if (v_a6a5f1 > 0) {

                if (v_635b76 > v_a6a5f1) {
                  v_4b95c4(v_635b76);
                }
              } else {
                v_4b95c4(v_635b76);
              }
            }
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
                const v_a6a5f1 = v_3e3188.current;
                if (v_a6a5f1 > 0) {

                  if (v_635b76 > v_a6a5f1) {
                    v_4b95c4(v_635b76);
                  }
                } else {
                  v_4b95c4(v_635b76);
                }
              }
              return;
            }
          }

          try {

            v_269481 = v_5dafcb.watchStepCount(async (v_43c42e) => {
              if (v_41ed06) {
                const v_81d1b5 = v_43c42e.steps;

                const v_a6a5f1 = v_3e3188.current;

                const v_fd45cb = await v_e9771f();

                v_f41071().then((v_dc359d) => {
                  if (v_41ed06) {

                    let v_5eb489 = [v_fd45cb, v_81d1b5, v_a6a5f1];
                    if (v_dc359d > 0) {
                      v_5eb489.push(v_dc359d);
                    }
                    const v_9c9484 = Math.max(...v_5eb489);

                    if (v_9c9484 >= v_a6a5f1) {
                      v_4b95c4(v_9c9484);

                      if (v_9c9484 > v_fd45cb) {
                        v_7f798a(v_9c9484);
                      }
                    }
                  }
                }).catch(() => {

                  if (v_41ed06) {
                    const v_a6a5f1 = v_3e3188.current;
                    let v_5eb489 = [v_fd45cb, v_81d1b5, v_a6a5f1];
                    const v_9c9484 = Math.max(...v_5eb489);

                    if (v_9c9484 >= v_a6a5f1) {
                      v_4b95c4(v_9c9484);
                      if (v_9c9484 > v_fd45cb) {
                        v_7f798a(v_9c9484);
                      }
                    }
                  }
                });
              }
            });

            v_f41071().then((v_dc359d) => {
              if (v_41ed06) {
                const v_a6a5f1 = v_3e3188.current;

                let v_5eb489 = [v_635b76, v_a6a5f1];
                if (v_dc359d > 0) {
                  v_5eb489.push(v_dc359d);
                }
                const v_9c9484 = Math.max(...v_5eb489);

                if (v_9c9484 >= v_a6a5f1) {
                  v_4b95c4(v_9c9484);
                  if (v_9c9484 > v_635b76) {
                    v_7f798a(v_9c9484);
                  }
                }
              }
            }).catch(() => {

              if (v_41ed06) {
                const v_a6a5f1 = v_3e3188.current;
                if (v_a6a5f1 > 0) {

                  if (v_635b76 > v_a6a5f1) {
                    v_4b95c4(v_635b76);
                  }
                } else {

                  v_4b95c4(v_635b76);
                }
              }
            });
          } catch (v_5e9bfe) {
            console.warn('Pedometer watchStepCount error:', v_5e9bfe);
            if (v_41ed06) {
              const v_a6a5f1 = v_3e3188.current;
              if (v_a6a5f1 > 0) {

                if (v_635b76 > v_a6a5f1) {
                  v_4b95c4(v_635b76);
                }
              } else {
                v_4b95c4(v_635b76);
              }
            }
          }
        } else {

          if (v_41ed06) {
            const v_a6a5f1 = v_3e3188.current;
            if (v_a6a5f1 > 0) {

              if (v_635b76 > v_a6a5f1) {
                v_4b95c4(v_635b76);
              }
            } else {
              v_4b95c4(v_635b76);
            }
          }
        }
      } catch (v_5e9bfe) {
        console.warn('Pedometer initialization error:', v_5e9bfe);
        if (v_41ed06) {
          v_64b293(false);

          const v_635b76 = await v_e9771f();
          const v_a6a5f1 = v_3e3188.current;
          if (v_a6a5f1 > 0) {

            if (v_635b76 > v_a6a5f1) {
              v_4b95c4(v_635b76);
            }
          } else {
            v_4b95c4(v_635b76);
          }
        }
      }
    };

    const v_cb36b1 = setTimeout(() => {
      v_391ff4();
    }, 500);

    return () => {
      v_41ed06 = false;
      clearTimeout(v_cb36b1);
      v_269481?.remove();
    };
  }, []); 

  v_c4deb2(() => {
    v_80e790();
  }, [v_80e790]);

  const v_5640a4 = v_de06a3(async () => {
    try {
      const v_d94577 = await v_e84827.getItem(v_368d84);
      const v_227df7 = v_c877df();

      if (v_d94577 !== null && v_d94577 !== '' && v_d94577 !== v_227df7) {
        await v_e84827.setItem(v_c567d7, '0');
        await v_e84827.setItem(v_368d84, v_227df7);
        v_4b95c4(0);
        v_3e3188.current = 0;
        console.log('[StepTracking] 날짜가 바뀌어 걸음수를 초기화했습니다.');
      }
    } catch (v_5e9bfe) {
      console.warn('[StepTracking] 날짜 체크 실패:', v_5e9bfe);
    }
  }, [v_c877df]);

  v_c4deb2(() => {
    const v_207dac = setInterval(() => {
      v_5640a4();
    }, 60000); 

    return () => clearInterval(v_207dac);
  }, [v_5640a4]);

  v_c4deb2(() => {

    if (!v_6b5698) {
      console.warn('[StepTracking] AppState를 사용할 수 없습니다.');
      return;
    }

    let v_269481 = null;
    try {
      v_269481 = v_6b5698.addEventListener('change', async (v_3b10d8) => {
        if (v_3b10d8 === 'active') {

          try {
            await v_5640a4();
          } catch (v_5e9bfe) {
            console.warn('[StepTracking] 날짜 체크 실패:', v_5e9bfe);
          }

          try {
            const v_dc359d = await v_f41071();
            if (v_dc359d > 0 && v_dc359d > v_3e3188.current) {
              v_4b95c4(v_dc359d);
              await v_7f798a(v_dc359d);
            }
          } catch (v_5e9bfe) {
            console.warn('[StepTracking] 서비스에서 걸음수 가져오기 실패:', v_5e9bfe);
          }
        }
      });
    } catch (v_5e9bfe) {
      console.warn('[StepTracking] AppState 이벤트 리스너 등록 실패:', v_5e9bfe);
    }

    return () => {
      if (v_269481) {
        try {
          v_269481.remove();
        } catch (v_5e9bfe) {
          console.warn('[StepTracking] AppState 이벤트 리스너 제거 실패:', v_5e9bfe);
        }
      }
    };
  }, [v_5640a4, v_7f798a]);

  const v_3b402b = v_df9f57(
    () => ({
      currentSteps: v_dc679a,
      stepGoal: v_c19e2d,
      isPedometerAvailable: v_9c8eed,
      stepNotificationEnabled: v_264467,
      setStepNotificationEnabled: v_f37ec2,
    }),
    [
      v_dc679a,
      v_9c8eed,
      v_264467,
      v_f37ec2,
    ],
  );

  return <StepTrackingContext.Provider value={v_3b402b}>{v_21f619}</StepTrackingContext.Provider>;
};

export const v_75c3c7 = (): StepTrackingContextValue => {
  const v_e3aeb3 = v_76a8a9(v_d978fd);
  if (!v_e3aeb3) {
    throw new Error('useStepTracking must be used within a StepTrackingProvider');
  }
  return v_e3aeb3;
};

