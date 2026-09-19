import v_a3453e, { v_de06a3, v_c4deb2, v_df9f57, v_e662ae, v_5ab095 } from 'bapkr';
import {
  v_3094a2,
  v_19b633,
  v_39a996,
  v_6b5698,
  v_472849,
  v_4623af,
  v_cf9c33,
  type v_07a341,
} from 'rcmrninabrnb';
import { v_556baf, v_570c34, v_729608, v_cb41de, v_e775af } from '../../components';
import { v_889fad } from '../../components/AlertHost';
import v_16c240 from '../../components/SupplementRecommendCta';
import v_2d0741 from './components/CheckupRecordSheet';
import { v_a0daa8 } from '../../navigation';
import { v_15baf2, v_b67103, v_ff5546 } from '../../services';
import type { v_84adce, v_e86309 } from '../../services/codefApi';
import {
  v_b724a0,
  v_ae5f46,
  v_4e2e5d,
} from '../../utils/checkupErrorMessage';
import { v_772971 } from 'jmpfvteuuztnp';
import { v_1bfbd0, v_843035, v_9b1a04, v_ef658a } from '../../constants';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import type { v_8ad91b } from '../../navigation';

type Phase = 'form' | 'authPending' | 'result' | 'records';

type ProviderItem = {
  label: string;
  value: string;
  icon?: string;
  color: string;
  textColor: string;
  image?: v_07a341;
};

const v_adae4e = [
  { label: 'SKT', value: '0' },
  { label: 'KT', value: '1' },
  { label: 'LGU+', value: '2' },
] as const;

type Props = v_432191<v_8ad91b, 'CheckupNhis'>;

const CheckupNhisScreen: v_a3453e.FC<Props> = ({ route: v_c7daf6 }) => {
  const v_c0d106 = v_c7daf6.params?.initialTab ?? 'new';
  const { goBack: v_c7ac57 } = v_a0daa8();
  const { t: v_8d41d7 } = v_772971();

  const v_280029 = v_df9f57(
    () => [
      {
        label: v_8d41d7('checkup_nhis.providers.kakao'),
        value: '1',
        color: '#FEE500',
        textColor: '#191919',
        image: require('../../../assets/images/auth/kakao.png'),
      },
      { label: v_8d41d7('checkup_nhis.providers.samsung'), value: '3', icon: 'S', color: '#1428A0', textColor: '#FFFFFF' },
      { label: v_8d41d7('checkup_nhis.providers.pass'), value: '5', icon: 'P', color: '#E8344E', textColor: '#FFFFFF' },
      { label: v_8d41d7('checkup_nhis.providers.naver'), value: '6', icon: 'N', color: '#03C75A', textColor: '#FFFFFF' },
      { label: v_8d41d7('checkup_nhis.providers.toss'), value: '8', icon: 'T', color: '#0064FF', textColor: '#FFFFFF' },
    ],
    [v_8d41d7],
  );

  const [v_ab4803, v_ae4844] = v_5ab095<Phase>(v_c0d106 === 'records' ? 'records' : 'form');
  const [v_683210, v_34a50a] = v_5ab095(false);

  const [v_f08a5e, v_bcbad6] = v_5ab095('');
  const [v_598ded, v_20e43d] = v_5ab095('');
  const [v_f1c488, v_fcfadf] = v_5ab095('');
  const [v_e38ca2, v_00a384] = v_5ab095('');
  const [v_b627c5, v_25d955] = v_5ab095('');

  const [v_ff38f8, v_7b5f10] = v_5ab095<v_e86309 | null>(null);
  const [v_4622b9, v_fa923c] = v_5ab095<v_84adce[]>([]);
  const [v_678155, v_9ed182] = v_5ab095<v_84adce[]>([]);
  const [v_8cc501, v_44dbcc] = v_5ab095<v_84adce | null>(null);
  const [v_8126f5, v_c94bdc] = v_5ab095(false);

  const [v_7c9da3, v_db9949] = v_5ab095<number | null>(null);

  const v_fd1bb4 = v_e38ca2 === '5';
  const v_2d6e99 = v_280029.find(v_e2a85c => v_e2a85c.value === v_e38ca2);

  const v_28c823 = (v_43c42e): number | null => {
    const v_4f7358 = (v_d0c056): number | null => {
      if (!Array.isArray(v_d0c056)) return null;
      const v_715950 = v_d0c056.find((v_62c214) => typeof v_62c214?.id === 'number');
      return v_715950 ? (v_715950 as { id: number }).id : null;
    };
    const v_479f05 =
      v_4f7358(v_43c42e?.items) ??
      v_4f7358(v_43c42e?.data?.items) ??
      (typeof v_43c42e?.data?.id === 'number' ? v_43c42e.data.id : null) ??
      (typeof v_43c42e?.id === 'number' ? v_43c42e.id : null);
    return typeof v_479f05 === 'number' ? v_479f05 : null;
  };

  v_c4deb2(() => {
    if (v_ab4803 !== 'records') return;
    let v_759436 = true;
    v_34a50a(true);
    v_ff5546()
      .then(v_18b8bf => { if (v_759436) v_9ed182(v_18b8bf); })
      .catch(v_9e86fd => v_889fad(v_8d41d7('checkup_nhis.error_title'), v_9e86fd?.message ?? v_8d41d7('checkup_nhis.load_records_failed')))
      .finally(() => { if (v_759436) v_34a50a(false); });
    return () => { v_759436 = false; };
  }, [v_ab4803, v_8d41d7]);

  const v_cfb0b1 = async () => {
    if (!v_e38ca2) {
      v_889fad(v_8d41d7('checkup_nhis.input_check_title'), v_8d41d7('checkup_nhis.select_provider'));
      return;
    }
    if (v_fd1bb4 && !v_b627c5) {
      v_889fad(v_8d41d7('checkup_nhis.input_check_title'), v_8d41d7('checkup_nhis.select_telecom'));
      return;
    }
    if (!v_f08a5e || !/^\d{8}$/.test(v_598ded) || !/^01\d{8,9}$/.test(v_f1c488)) {
      v_889fad(v_8d41d7('checkup_nhis.input_check_title'), v_8d41d7('checkup_nhis.validate_fields'));
      return;
    }
    v_34a50a(true);
    try {
      const v_cb35cb = await v_15baf2({
        userName: v_f08a5e,
        birthDate: v_598ded,
        phoneNo: v_f1c488,
        provider: v_e38ca2,
        telecom: v_fd1bb4 ? v_b627c5 : undefined,
      });
      if (v_cb35cb.status === 'pending' && v_cb35cb.twoWay) {
        v_7b5f10(v_cb35cb.twoWay);
        v_ae4844('authPending');
      } else {
        v_fa923c(v_cb35cb.data ? [v_33e989(v_cb35cb.data, 0)] : []);
        v_db9949(v_28c823(v_cb35cb));
        v_ae4844('result');
      }
    } catch (v_9e86fd) {
      const v_c99bd2 = v_4e2e5d(v_9e86fd);
      const v_badeaf = v_b724a0(v_c99bd2);
      v_889fad(
        v_8d41d7('checkup_nhis.error_title'),
        __DEV__ ? `${v_badeaf}\n(CODE=${v_c99bd2 || 'unknown'})` : v_badeaf,
      );
    } finally {
      v_34a50a(false);
    }
  };

  const v_0aa733 = v_e662ae(false);

  const v_b25ffb = v_de06a3(async () => {
    if (!v_ff38f8 || v_0aa733.current) return;
    v_0aa733.current = true;
    v_34a50a(true);
    try {
      const v_7bc42a = 10;
      const v_f839bb = 5000;
      let r: Awaited<ReturnType<typeof v_b67103>> | null = null;
      for (let v_ebec57 = 0; v_ebec57 < v_7bc42a; v_ebec57++) {
        v_cb35cb = await v_b67103(v_ff38f8, {
          userName: v_f08a5e,
          birthDate: v_598ded,
          phoneNo: v_f1c488,
          provider: v_e38ca2,
          telecom: v_fd1bb4 ? v_b627c5 : undefined,
        });
        if (v_cb35cb.status === 'done') break;
        if (__DEV__) console.log(`[codefApi] approve pending, retry ${v_ebec57 + 1}/${v_7bc42a}`);
        await new Promise(v_8f00b9 => setTimeout(v_8f00b9, v_f839bb));
      }
      if (!v_cb35cb || v_cb35cb.status !== 'done') {
        v_889fad(v_8d41d7('checkup_nhis.auth_check_title'), v_8d41d7('checkup_nhis.auth_timeout'));
        return;
      }
      const v_5f5c66 = v_cb35cb.items ?? [];
      console.log('[CheckupNhis] approve 응답 raw', {
        status: v_cb35cb.status,
        saved: (v_cb35cb as any).saved,
        itemsCount: v_5f5c66.length,
        items: v_5f5c66.map((v_23805a, v_e86ad8) => ({
          idx: v_e86ad8,
          keys: Object.keys(v_23805a || {}),
          checkupDate: v_23805a?.checkupDate ?? v_23805a?.checkup_date ?? v_23805a?.resCheckupDate,
          height: v_23805a?.height ?? v_23805a?.resHeight,
          weight: v_23805a?.weight ?? v_23805a?.resWeight,
          bmi: v_23805a?.bmi ?? v_23805a?.resBMI,
          systolicBp: v_23805a?.systolicBp ?? v_23805a?.systolic_bp,
          diastolicBp: v_23805a?.diastolicBp ?? v_23805a?.diastolic_bp,
          fastingGlucose: v_23805a?.fastingGlucose ?? v_23805a?.fasting_glucose,
          totalCholesterol: v_23805a?.totalCholesterol ?? v_23805a?.total_cholesterol,
          judgment: v_23805a?.judgment ?? v_23805a?.resJudgment,
          sample: JSON.stringify(v_23805a)?.slice(0, 800),
        })),
      });

      const v_450f7d = v_5f5c66.length === 0 || v_5f5c66.every(
        (v_23805a) =>
          v_9bbdf7(v_23805a, 'height', 'resHeight', 'weight', 'resWeight', 'bmi', 'resBMI') == null,
      );
      let displayRows: v_84adce[] = v_5f5c66.map((v_23805a, v_ebec57) => v_33e989(v_23805a, v_ebec57));
      if (v_450f7d) {
        try {
          const v_18b8bf = await v_ff5546();
          console.log('[CheckupNhis] vitals 비어 DB fallback', {
            rowsCount: v_18b8bf.length,
            sample: v_18b8bf.slice(0, 3).map((v_3ac7e7) => ({
              id: v_3ac7e7.id,
              checkup_date: v_3ac7e7.checkup_date,
              height: v_3ac7e7.height,
              weight: v_3ac7e7.weight,
              bmi: v_3ac7e7.bmi,
              systolic_bp: v_3ac7e7.systolic_bp,
              fasting_glucose: v_3ac7e7.fasting_glucose,
            })),
          });
          if (v_18b8bf.length) v_e1b93f = v_18b8bf;
        } catch (v_9e86fd) {
          console.log('[CheckupNhis] DB fallback 실패', v_9e86fd);
        }
      }

      v_fa923c(v_e1b93f);
      v_db9949(v_28c823(v_cb35cb) ?? (v_e1b93f[0]?.id ?? null));
      v_ae4844('result');
      if (!v_e1b93f.length) {
        v_889fad(v_8d41d7('checkup_nhis.notice_title'), v_ae5f46());
      }
    } catch (v_9e86fd) {
      const v_c99bd2 = v_4e2e5d(v_9e86fd);
      v_889fad(
        v_c99bd2 === 'TIMEOUT' ? v_8d41d7('checkup_nhis.auth_timeout') : v_8d41d7('checkup_nhis.auth_check_title'),
        (() => {
          const v_badeaf = v_b724a0(
            v_c99bd2,
            v_8d41d7('checkup_nhis.auth_guide'),
          );
          return __DEV__ ? `${v_badeaf}\n(CODE=${v_c99bd2 || 'unknown'})` : v_badeaf;
        })(),
      );
    } finally {
      v_34a50a(false);
      v_0aa733.current = false;
    }
  }, [v_ff38f8, v_f08a5e, v_598ded, v_f1c488, v_e38ca2, v_b627c5, v_fd1bb4, v_8d41d7]);

  v_c4deb2(() => {
    const v_1ae212 = v_6b5698.addEventListener('change', (v_a448ad) => {
      if (v_a448ad === 'active' && v_ab4803 === 'authPending' && v_ff38f8 && !v_0aa733.current) {
        v_b25ffb();
      }
    });
    return () => v_1ae212.remove();
  }, [v_ab4803, v_ff38f8, v_b25ffb]);

  return (
    <SafeView style={v_d81136.screen} showBottomBackground={false}>
      <Header
        title={v_8d41d7('checkup_nhis.title')}
        showBackButton
        onBackPress={v_c7ac57}
      />
      <SafeScrollView
        style={v_d81136.flex}
        contentContainerStyle={v_d81136.body}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        showBottomBackground={false}
        autoAdjustKeyboardPadding
        additionalBottomPadding={v_9b1a04.xlarge}
      >
          {v_ab4803 === 'form' && (
            <View style={v_d81136.form}>
              <Text style={v_d81136.label}>{v_8d41d7('checkup_nhis.select_auth')}</Text>
              <View style={v_d81136.providers}>
                {v_280029.map(v_e2a85c => {
                  const v_abacaa = v_e38ca2 === v_e2a85c.value;
                  return (
                    <TouchableOpacity
                      key={v_e2a85c.value}
                      onPress={() => {
                        v_00a384(v_e2a85c.value);
                        if (v_e2a85c.value !== '5') v_25d955('');
                      }}
                      style={[v_d81136.providerCard, v_abacaa && v_d81136.providerCardOn]}
                      activeOpacity={0.7}
                    >
                      <View style={[
                        v_d81136.providerIcon,
                        !v_e2a85c.image && { backgroundColor: v_e2a85c.color },
                        !!v_e2a85c.image && v_d81136.providerIconImageWrap,
                      ]}>
                        {v_e2a85c.image ? (
                          <Image source={v_e2a85c.image} style={v_d81136.providerIconImage} />
                        ) : (
                          <Text style={[v_d81136.providerIconText, { color: v_e2a85c.textColor }]}>
                            {v_e2a85c.icon}
                          </Text>
                        )}
                      </View>
                      <Text style={[v_d81136.providerLabel, v_abacaa && v_d81136.providerLabelOn]}>
                        {v_e2a85c.label}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>

              {!!v_e38ca2 && (
                <View style={v_d81136.authForm}>
                  <Text style={v_d81136.authFormTitle}>
                    {v_8d41d7('checkup_nhis.auth_info_title', {
                      provider: v_2d6e99?.label ?? v_8d41d7('checkup_nhis.auth_fallback'),
                    })}
                  </Text>

                  {v_fd1bb4 && (
                    <>
                      <Text style={v_d81136.subLabel}>{v_8d41d7('checkup_nhis.telecom')}</Text>
                      <View style={v_d81136.telecoms}>
                        {v_adae4e.map(v_8d41d7 => (
                          <TouchableOpacity
                            key={v_8d41d7.value}
                            onPress={() => v_25d955(v_8d41d7.value)}
                            style={[
                              v_d81136.telecomChip,
                              v_b627c5 === v_8d41d7.value && v_d81136.telecomChipOn,
                            ]}
                            activeOpacity={0.7}
                          >
                            <Text style={[
                              v_d81136.telecomChipText,
                              v_b627c5 === v_8d41d7.value && v_d81136.telecomChipTextOn,
                            ]}>
                              {v_8d41d7.label}
                            </Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    </>
                  )}

                  <TextField
                    label={v_8d41d7('checkup_nhis.name')}
                    value={v_f08a5e}
                    onChangeText={v_bcbad6}
                  />
                  <TextField
                    label={v_8d41d7('checkup_nhis.birth_date')}
                    value={v_598ded}
                    onChangeText={v_20e43d}
                    keyboardType="number-pad"
                    maxLength={8}
                  />
                  <TextField
                    label={v_8d41d7('checkup_nhis.phone')}
                    value={v_f1c488}
                    onChangeText={v_fcfadf}
                    keyboardType="phone-pad"
                    maxLength={11}
                  />

                  <PrimaryButton
                    title={v_683210 ? v_8d41d7('checkup_nhis.querying') : v_8d41d7('checkup_nhis.query_button')}
                    onPress={v_cfb0b1}
                    disabled={v_683210}
                  />
                </View>
              )}
            </View>
          )}

          {v_ab4803 === 'authPending' && (
            <View style={v_d81136.center}>
              <ActivityIndicator size="large" color={v_1bfbd0.buttonPrimary} />
              <Text style={v_d81136.guide}>
                {v_8d41d7('checkup_nhis.auth_guide')}
              </Text>
              <PrimaryButton
                title={v_683210 ? v_8d41d7('checkup_nhis.confirming') : v_8d41d7('checkup_nhis.auth_done')}
                onPress={v_b25ffb}
                disabled={v_683210}
              />
              <TouchableOpacity
                style={{ marginTop: 16, padding: 12 }}
                onPress={() => {
                  v_7b5f10(null);
                  v_ae4844('form');
                }}
                disabled={v_683210}
              >
                <Text style={{ color: v_1bfbd0.secondaryText, textAlign: 'center' }}>
                  {v_8d41d7('checkup_nhis.cancel_reenter')}
                </Text>
              </TouchableOpacity>
            </View>
          )}

          {v_ab4803 === 'result' && (
            <View>
              {v_4622b9.length === 0 && (
                <Text style={v_d81136.guide}>{v_8d41d7('checkup_nhis.no_query_results')}</Text>
              )}
              {v_4622b9.map((v_cb35cb, v_ebec57) => (
                <RecordCard
                  key={v_cb35cb.id ?? v_ebec57}
                  row={v_cb35cb}
                  onPress={() => {
                    v_44dbcc(v_cb35cb);
                    v_c94bdc(true);
                  }}
                />
              ))}
              <SupplementRecommendCta source="checkup" recordId={v_7c9da3} />
              <PrimaryButton title={v_8d41d7('checkup_nhis.done')} onPress={v_c7ac57} />
            </View>
          )}

          {v_ab4803 === 'records' && (
            <View>
              {v_683210 && (
                <View style={v_d81136.center}>
                  <ActivityIndicator size="large" color={v_1bfbd0.buttonPrimary} />
                </View>
              )}
              {!v_683210 && v_678155.length === 0 && (
                <Text style={v_d81136.guide}>{v_8d41d7('checkup_nhis.no_saved_records')}</Text>
              )}
              {!v_683210 && v_678155.map((v_cb35cb, v_ebec57) => (
                <RecordCard
                  key={v_cb35cb.id ?? v_ebec57}
                  row={v_cb35cb}
                  onPress={() => {
                    v_44dbcc(v_cb35cb);
                    v_c94bdc(true);
                  }}
                />
              ))}
              <View style={v_d81136.recordsButton}>
                <PrimaryButton
                  title={v_8d41d7('checkup_nhis.new_query')}
                  onPress={() => v_ae4844('form')}
                />
              </View>
            </View>
          )}
      </SafeScrollView>
      <CheckupRecordSheet
        visible={v_8126f5}
        row={v_8cc501}
        onClose={() => {
          v_c94bdc(false);
          v_44dbcc(null);
        }}
        formatDate={(v_479f05, v_0eaaff) => v_608e6b(v_479f05, v_0eaaff, v_8d41d7)}
      />
    </SafeView>
  );
};

function v_608e6b(v_479f05, v_0eaaff, v_8d41d7): string {
  if (v_479f05 == null || v_479f05 === '') return v_8d41d7('checkup_nhis.date_fallback');
  const v_fd5f43 = String(v_479f05).trim();
  const v_35f85c = v_fd5f43.match(/^(\d{4})[-\/.]?(\d{2})[-\/.]?(\d{2})/);
  if (v_35f85c) {
    return v_8d41d7('checkup_nhis.date_ymd', {
      year: v_35f85c[1],
      month: Number(v_35f85c[2]),
      day: Number(v_35f85c[3]),
    });
  }
  const v_861f6d = v_fd5f43.match(/^(\d{2})(\d{2})$/);
  const v_64877a = v_0eaaff != null ? String(v_0eaaff).replace(/\D/g, '').slice(0, 4) : '';
  if (v_861f6d && v_64877a.length === 4) {
    return v_8d41d7('checkup_nhis.date_ymd', {
      year: v_64877a,
      month: Number(v_861f6d[1]),
      day: Number(v_861f6d[2]),
    });
  }
  return v_fd5f43;
}

function v_9bbdf7(v_23805a, ...v_fa53ec: string[]): unknown {
  if (!v_23805a || typeof v_23805a !== 'object') return undefined;
  for (const v_0eb677 of v_fa53ec) {
    const v_81e2ef = v_23805a[v_0eb677];
    if (v_81e2ef !== undefined && v_81e2ef !== null && v_81e2ef !== '') return v_81e2ef;
  }
  return undefined;
}

function v_1068f0(v_468545, v_24cf2a = ' · '): string | null {
  const v_ef8ab1 = v_468545.filter((v_e2a85c): v_e2a85c is string => !!v_e2a85c && v_e2a85c !== '-');
  return v_ef8ab1.length ? v_ef8ab1.join(v_24cf2a) : null;
}

function v_1e3ec7(v_81e2ef): number | undefined {
  if (v_81e2ef == null || v_81e2ef === '') return undefined;
  const v_f4e98d = Number(v_81e2ef);
  return Number.isFinite(v_f4e98d) ? v_f4e98d : undefined;
}

function v_031dce(v_81e2ef): string | undefined {
  if (v_81e2ef == null || v_81e2ef === '') return undefined;
  return String(v_81e2ef);
}

function v_33e989(v_23805a, v_a56041): v_84adce {
  const v_2c44c0 = v_23805a?.id;
  return {
    id: typeof v_2c44c0 === 'number' ? v_2c44c0 : v_a56041,
    checkup_year: v_031dce(v_9bbdf7(v_23805a, 'checkupYear', 'checkup_year', 'resCheckupYear')),
    checkup_date: v_031dce(v_9bbdf7(v_23805a, 'checkupDate', 'checkup_date', 'resCheckupDate')),
    organization: v_031dce(v_9bbdf7(v_23805a, 'organization', 'resOrganizationName', 'resOrganization')),
    height: v_1e3ec7(v_9bbdf7(v_23805a, 'height', 'resHeight')),
    weight: v_1e3ec7(v_9bbdf7(v_23805a, 'weight', 'resWeight')),
    bmi: v_1e3ec7(v_9bbdf7(v_23805a, 'bmi', 'resBMI')),
    waist: v_1e3ec7(v_9bbdf7(v_23805a, 'waist', 'resWaist')),
    systolic_bp: v_1e3ec7(v_9bbdf7(v_23805a, 'systolicBp', 'systolic_bp')),
    diastolic_bp: v_1e3ec7(v_9bbdf7(v_23805a, 'diastolicBp', 'diastolic_bp')),
    fasting_glucose: v_1e3ec7(v_9bbdf7(v_23805a, 'fastingGlucose', 'fasting_glucose', 'resFastingBloodSuger', 'resFastingBloodSugar')),
    total_cholesterol: v_1e3ec7(v_9bbdf7(v_23805a, 'totalCholesterol', 'total_cholesterol', 'resTotalCholesterol')),
    hdl: v_1e3ec7(v_9bbdf7(v_23805a, 'hdl', 'hdlCholesterol', 'resHDLCholesterol')),
    ldl: v_1e3ec7(v_9bbdf7(v_23805a, 'ldl', 'ldlCholesterol', 'resLDLCholesterol')),
    triglyceride: v_1e3ec7(v_9bbdf7(v_23805a, 'triglyceride', 'resTriglyceride')),
    hemoglobin: v_1e3ec7(v_9bbdf7(v_23805a, 'hemoglobin', 'resHemoglobin')),
    ast: v_1e3ec7(v_9bbdf7(v_23805a, 'ast', 'resAST')),
    alt: v_1e3ec7(v_9bbdf7(v_23805a, 'alt', 'resALT')),
    gtp: v_1e3ec7(v_9bbdf7(v_23805a, 'gtp', 'yGtp', 'resyGTP', 'resGTP')),
    creatinine: v_1e3ec7(v_9bbdf7(v_23805a, 'creatinine', 'resCreatinine')),
    gfr: v_1e3ec7(v_9bbdf7(v_23805a, 'gfr', 'resGFR')),
    urine_protein: v_031dce(v_9bbdf7(v_23805a, 'urineProtein', 'urine_protein', 'resUrinaryProtein')),
    judgment: v_031dce(v_9bbdf7(v_23805a, 'judgment', 'resJudgment')),
  };
}

const RecordCard: v_a3453e.FC<{ row: v_84adce; onPress: () => void }> = ({ row: v_3ac7e7, onPress: v_719eed }) => {
  const { t: v_8d41d7 } = v_772971();
  const v_ce04c7 = v_1068f0([
    v_3ac7e7.height != null ? `${v_8d41d7('checkup_nhis.sheet.items.height')} ${v_3ac7e7.height}${v_8d41d7('checkup_nhis.sheet.units.cm')}` : null,
    v_3ac7e7.weight != null ? `${v_8d41d7('checkup_nhis.sheet.items.weight')} ${v_3ac7e7.weight}${v_8d41d7('checkup_nhis.sheet.units.kg')}` : null,
    v_3ac7e7.bmi != null ? `${v_8d41d7('checkup_nhis.sheet.items.bmi')} ${v_3ac7e7.bmi}` : null,
  ], ' / ');
  const v_6e9efd =
    v_3ac7e7.systolic_bp != null || v_3ac7e7.diastolic_bp != null
      ? `${v_8d41d7('checkup_nhis.sheet.sections.blood_pressure')} ${v_3ac7e7.systolic_bp ?? '-'}/${v_3ac7e7.diastolic_bp ?? '-'}`
      : null;
  const v_909ad1 = v_1068f0([
    v_6e9efd,
    v_3ac7e7.fasting_glucose != null ? `${v_8d41d7('checkup_nhis.sheet.items.fasting_glucose')} ${v_3ac7e7.fasting_glucose}` : null,
  ]);
  const v_4cbb19 = v_1068f0([
    v_3ac7e7.total_cholesterol != null ? `${v_8d41d7('checkup_nhis.sheet.items.total_cholesterol')} ${v_3ac7e7.total_cholesterol}` : null,
    v_3ac7e7.hdl != null ? `HDL ${v_3ac7e7.hdl}` : null,
    v_3ac7e7.ldl != null ? `LDL ${v_3ac7e7.ldl}` : null,
  ]);
  const v_79cdfc = v_1068f0([
    v_3ac7e7.ast != null ? `AST ${v_3ac7e7.ast}` : null,
    v_3ac7e7.alt != null ? `ALT ${v_3ac7e7.alt}` : null,
    v_3ac7e7.gtp != null ? `γGTP ${v_3ac7e7.gtp}` : null,
  ]);
  const v_b935a3 = !!(v_ce04c7 || v_909ad1 || v_4cbb19 || v_79cdfc || v_3ac7e7.judgment);

  return (
    <TouchableOpacity style={v_3839df.card} onPress={v_719eed} activeOpacity={0.75}>
      <Text style={v_3839df.cardTitle}>
        {v_608e6b(v_3ac7e7.checkup_date, v_3ac7e7.checkup_year, v_8d41d7)}
        {v_3ac7e7.organization ? ` · ${String(v_3ac7e7.organization).replace(/\+/g, ' ')}` : ''}
      </Text>
      {v_b935a3 ? (
        <>
          {v_ce04c7 ? <Text style={v_3839df.row}>{v_ce04c7}</Text> : null}
          {v_909ad1 ? <Text style={v_3839df.row}>{v_909ad1}</Text> : null}
          {v_4cbb19 ? <Text style={v_3839df.row}>{v_4cbb19}</Text> : null}
          {v_79cdfc ? <Text style={v_3839df.row}>{v_79cdfc}</Text> : null}
          {v_3ac7e7.judgment ? (
            <Text style={v_3839df.row}>{v_8d41d7('checkup_nhis.sheet.judgment')} {v_3ac7e7.judgment}</Text>
          ) : null}
        </>
      ) : (
        <Text style={v_3839df.row}>
          {v_8d41d7('checkup_nhis.sheet.empty')}
        </Text>
      )}
      <Text style={v_3839df.tapHint}>{v_8d41d7('checkup_nhis.sheet.tap_hint')}</Text>
    </TouchableOpacity>
  );
};

const v_d81136 = v_472849.create({
  screen: {
    flex: 1,
    backgroundColor: v_1bfbd0.white,
  },
  flex: {
    flex: 1,
  },
  body: {
    padding: v_9b1a04.large,
  },
  form: {
    gap: v_9b1a04.medium,
  },
  label: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
    marginBottom: v_9b1a04.small,
  },
  subLabel: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.medium,
    color: '#64748B',
    marginBottom: v_9b1a04.small,
  },
  providers: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: v_9b1a04.small,
    marginBottom: v_9b1a04.large,
  },
  providerCard: {
    width: '30%',
    minWidth: 96,
    alignItems: 'center',
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 14,
    backgroundColor: '#F8FAFC',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
  },
  providerCardOn: {
    borderColor: v_1bfbd0.buttonPrimary,
    backgroundColor: '#EFF6FF',
  },
  providerIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  providerIconImageWrap: {
    backgroundColor: 'transparent',
  },
  providerIconImage: {
    width: 44,
    height: 44,
    borderRadius: 12,
  },
  providerIconText: {
    fontSize: 18,
    fontFamily: v_843035.bold,
  },
  providerLabel: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.medium,
    color: '#334155',
    textAlign: 'center',
  },
  providerLabelOn: {
    color: v_1bfbd0.buttonPrimary,
    fontFamily: v_843035.semibold,
  },
  authForm: {
    gap: v_9b1a04.medium,
    paddingTop: v_9b1a04.small,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },
  authFormTitle: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
    marginTop: v_9b1a04.small,
  },
  telecoms: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: v_9b1a04.small,
    marginBottom: v_9b1a04.small,
  },
  telecomChip: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#F1F5F9',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  telecomChipOn: {
    backgroundColor: v_1bfbd0.buttonPrimary,
    borderColor: v_1bfbd0.buttonPrimary,
  },
  telecomChipText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: '#334155',
  },
  telecomChipTextOn: {
    color: v_1bfbd0.white,
  },
  center: {
    alignItems: 'center',
    gap: v_9b1a04.large,
    paddingVertical: v_9b1a04.xlarge,
  },
  guide: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.regular,
    color: '#475569',
    textAlign: 'center',
    lineHeight: 22,
    marginVertical: v_9b1a04.medium,
  },
  recordsButton: {
    marginTop: v_9b1a04.large,
  },
});

const v_3839df = v_472849.create({
  card: {
    backgroundColor: v_1bfbd0.white,
    borderRadius: 16,
    padding: v_9b1a04.large,
    marginBottom: v_9b1a04.xmedium,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  cardTitle: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
    marginBottom: v_9b1a04.small,
  },
  row: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: '#475569',
    marginTop: 4,
    lineHeight: 20,
  },
  tapHint: {
    marginTop: v_9b1a04.small,
    fontSize: v_ef658a.small,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.bluePrimary,
  },
});

export default v_bc6a89;
