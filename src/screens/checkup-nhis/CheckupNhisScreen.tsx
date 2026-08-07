import v_a3453e, { v_de06a3, v_c4deb2, v_e662ae, v_5ab095 } from 'bapkr';
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
import v_6f3f7e from '../../components/SupplementRecommendSection';
import { v_a0daa8 } from '../../navigation';
import { v_15baf2, v_b67103, v_ff5546 } from '../../services';
import type { v_84adce, v_e86309 } from '../../services/codefApi';
import {
  v_b724a0,
  v_ae5f46,
  v_4e2e5d,
} from '../../utils/checkupErrorMessage';
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

const v_280029 = [
  {
    label: '카카오톡',
    value: '1',
    color: '#FEE500',
    textColor: '#191919',
    image: require('../../../assets/images/auth/kakao.png'),
  },
  { label: '삼성패스', value: '3', icon: 'S', color: '#1428A0', textColor: '#FFFFFF' },
  { label: 'PASS', value: '5', icon: 'P', color: '#E8344E', textColor: '#FFFFFF' },
  { label: '네이버', value: '6', icon: 'N', color: '#03C75A', textColor: '#FFFFFF' },
  { label: '토스', value: '8', icon: 'T', color: '#0064FF', textColor: '#FFFFFF' },
];

const v_adae4e = [
  { label: 'SKT', value: '0' },
  { label: 'KT', value: '1' },
  { label: 'LGU+', value: '2' },
] as const;

type Props = v_432191<v_8ad91b, 'CheckupNhis'>;

const CheckupNhisScreen: v_a3453e.FC<Props> = ({ route: v_c7daf6 }) => {
  const v_c0d106 = v_c7daf6.params?.initialTab ?? 'new';
  const { goBack: v_c7ac57 } = v_a0daa8();

  const [v_ab4803, v_ae4844] = v_5ab095<Phase>(v_c0d106 === 'records' ? 'records' : 'form');
  const [v_683210, v_34a50a] = v_5ab095(false);

  const [v_f08a5e, v_bcbad6] = v_5ab095('');
  const [v_598ded, v_20e43d] = v_5ab095('');
  const [v_f1c488, v_fcfadf] = v_5ab095('');
  const [v_e38ca2, v_00a384] = v_5ab095('');
  const [v_b627c5, v_25d955] = v_5ab095('');

  const [v_ff38f8, v_7b5f10] = v_5ab095<v_e86309 | null>(null);
  const [v_4622b9, v_fa923c] = v_5ab095<any[]>([]);
  const [v_678155, v_9ed182] = v_5ab095<v_84adce[]>([]);

  const [v_7c9da3, v_db9949] = v_5ab095<number | null>(null);

  const v_fd1bb4 = v_e38ca2 === '5';
  const v_2d6e99 = v_280029.find(v_e2a85c => v_e2a85c.value === v_e38ca2);

  const v_28c823 = (v_43c42e): number | null => {
    const v_4e8a78 = Array.isArray(v_43c42e?.data?.saved)
      ? (v_43c42e.data.saved[0]?.id ?? v_43c42e.data.saved[0])
      : undefined;
    const v_479f05 =
      v_43c42e?.data?.id ??
      v_4e8a78 ??
      v_43c42e?.items?.[0]?.id ??
      v_43c42e?.id ??
      null;
    return typeof v_479f05 === 'number' ? v_479f05 : null;
  };

  v_c4deb2(() => {
    if (v_ab4803 !== 'records') return;
    let v_759436 = true;
    v_34a50a(true);
    v_ff5546()
      .then(v_18b8bf => { if (v_759436) v_9ed182(v_18b8bf); })
      .catch(v_9e86fd => v_889fad('오류', v_9e86fd?.message ?? '기록을 불러오지 못했습니다.'))
      .finally(() => { if (v_759436) v_34a50a(false); });
    return () => { v_759436 = false; };
  }, [v_ab4803]);

  const v_cfb0b1 = async () => {
    if (!v_e38ca2) {
      v_889fad('입력 확인', '간편인증 방식을 선택해주세요.');
      return;
    }
    if (v_fd1bb4 && !v_b627c5) {
      v_889fad('입력 확인', '통신사를 선택해주세요.');
      return;
    }
    if (!v_f08a5e || !/^\d{8}$/.test(v_598ded) || !/^01\d{8,9}$/.test(v_f1c488)) {
      v_889fad('입력 확인', '이름·생년월일(YYYYMMDD 8자리)·휴대폰을 모두 확인해주세요.');
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
        v_fa923c(v_cb35cb.data ? [v_cb35cb.data] : []);
        v_db9949(v_28c823(v_cb35cb));
        v_ae4844('result');
      }
    } catch (v_9e86fd) {
      const v_c99bd2 = v_4e2e5d(v_9e86fd);
      const v_badeaf = v_b724a0(v_c99bd2);
      v_889fad(
        '오류',
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
        v_889fad('인증 확인', '인증 대기 시간이 초과되었습니다. 다시 시도해 주세요.');
        return;
      }
      v_fa923c(v_cb35cb.items ?? []);
      v_db9949(v_28c823(v_cb35cb));
      v_ae4844('result');
      if (!v_cb35cb.items?.length) {
        v_889fad('안내', v_ae5f46());
      }
    } catch (v_9e86fd) {
      const v_c99bd2 = v_4e2e5d(v_9e86fd);
      v_889fad(
        v_c99bd2 === 'TIMEOUT' ? '시간 초과' : '인증 확인',
        (() => {
          const v_badeaf = v_b724a0(
            v_c99bd2,
            '폰에서 인증을 완료한 뒤 다시 시도해주세요.',
          );
          return __DEV__ ? `${v_badeaf}\n(CODE=${v_c99bd2 || 'unknown'})` : v_badeaf;
        })(),
      );
    } finally {
      v_34a50a(false);
      v_0aa733.current = false;
    }
  }, [v_ff38f8, v_f08a5e, v_598ded, v_f1c488, v_e38ca2, v_b627c5, v_fd1bb4]);

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
        title="건강검진"
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
              <Text style={v_d81136.label}>간편인증 선택</Text>
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
                        v_e2a85c.image && v_d81136.providerIconImageWrap,
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
                    {v_2d6e99?.label ?? '인증'} 정보 입력
                  </Text>

                  {v_fd1bb4 && (
                    <>
                      <Text style={v_d81136.subLabel}>통신사</Text>
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
                    label="이름"
                    value={v_f08a5e}
                    onChangeText={v_bcbad6}
                  />
                  <TextField
                    label="생년월일 (YYYYMMDD)"
                    value={v_598ded}
                    onChangeText={v_20e43d}
                    keyboardType="number-pad"
                    maxLength={8}
                  />
                  <TextField
                    label="휴대폰번호"
                    value={v_f1c488}
                    onChangeText={v_fcfadf}
                    keyboardType="phone-pad"
                    maxLength={11}
                  />

                  <PrimaryButton
                    title={v_683210 ? '조회 중...' : '건강검진 조회'}
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
                {'선택한 인증 앱에서 인증을 완료해주세요.\n완료 후 아래 버튼을 눌러주세요.\n(최대 약 3분까지 대기할 수 있습니다)'}
              </Text>
              <PrimaryButton
                title={v_683210 ? '확인 중...' : '인증 완료했어요'}
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
                  취소하고 다시 입력
                </Text>
              </TouchableOpacity>
            </View>
          )}

          {v_ab4803 === 'result' && (
            <View>
              {v_4622b9.length === 0 && (
                <Text style={v_d81136.guide}>조회된 검진 결과가 없습니다.</Text>
              )}
              {v_4622b9.map((v_23805a, v_ebec57) => (
                <ResultCard key={v_ebec57} it={v_23805a} />
              ))}
              <SupplementRecommendSection source="checkup" recordId={v_7c9da3} />
              <PrimaryButton title="완료" onPress={v_c7ac57} />
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
                <Text style={v_d81136.guide}>저장된 건강검진 기록이 없습니다.</Text>
              )}
              {!v_683210 && v_678155.map((v_cb35cb, v_ebec57) => (
                <RecordCard key={v_cb35cb.id ?? v_ebec57} row={v_cb35cb} />
              ))}
              <View style={v_d81136.recordsButton}>
                <PrimaryButton
                  title="새 건강검진 조회"
                  onPress={() => v_ae4844('form')}
                />
              </View>
            </View>
          )}
      </SafeScrollView>
    </SafeView>
  );
};

const ResultCard: v_a3453e.FC<{ it: any }> = ({ it: v_23805a }) => (
  <View style={v_3839df.card}>
    <Text style={v_3839df.cardTitle}>
      {v_23805a.checkupDate ?? '검진'}{v_23805a.organization ? ` · ${v_23805a.organization}` : ''}
    </Text>
    <Text style={v_3839df.row}>
      키 {v_23805a.height ?? '-'}cm / 몸무게 {v_23805a.weight ?? '-'}kg / BMI {v_23805a.bmi ?? '-'}
    </Text>
    <Text style={v_3839df.row}>
      혈압 {v_23805a.systolicBp ?? '-'}/{v_23805a.diastolicBp ?? '-'} · 공복혈당 {v_23805a.fastingGlucose ?? '-'}
    </Text>
    <Text style={v_3839df.row}>
      총콜레스테롤 {v_23805a.totalCholesterol ?? '-'} · 판정 {v_23805a.judgment ?? '-'}
    </Text>
  </View>
);

const RecordCard: v_a3453e.FC<{ row: v_84adce }> = ({ row: v_3ac7e7 }) => (
  <View style={v_3839df.card}>
    <Text style={v_3839df.cardTitle}>
      {v_3ac7e7.checkup_date ?? v_3ac7e7.checkup_year ?? '검진'}
      {v_3ac7e7.organization ? ` · ${v_3ac7e7.organization}` : ''}
    </Text>
    <Text style={v_3839df.row}>
      키 {v_3ac7e7.height ?? '-'}cm / 몸무게 {v_3ac7e7.weight ?? '-'}kg / BMI {v_3ac7e7.bmi ?? '-'}
    </Text>
    <Text style={v_3839df.row}>
      혈압 {v_3ac7e7.systolic_bp ?? '-'}/{v_3ac7e7.diastolic_bp ?? '-'} · 공복혈당 {v_3ac7e7.fasting_glucose ?? '-'}
    </Text>
    <Text style={v_3839df.row}>
      총콜레스테롤 {v_3ac7e7.total_cholesterol ?? '-'} · HDL {v_3ac7e7.hdl ?? '-'} · LDL {v_3ac7e7.ldl ?? '-'}
    </Text>
    <Text style={v_3839df.row}>
      AST {v_3ac7e7.ast ?? '-'} · ALT {v_3ac7e7.alt ?? '-'} · γGTP {v_3ac7e7.gtp ?? '-'}
    </Text>
    <Text style={v_3839df.row}>판정 {v_3ac7e7.judgment ?? '-'}</Text>
  </View>
);

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
});

export default v_bc6a89;
