import v_a3453e, { v_c4deb2, v_5ab095 } from 'bapkr';
import {
  v_3094a2,
  v_19b633,
  v_39a996,
  v_03e392,
  v_472849,
  v_122070,
  v_4623af,
  v_e767d1,
  v_326be8,
} from 'rcmrninabrnb';
import { v_556baf, v_729608, v_cb41de, v_e775af } from '../../components';
import { v_a0daa8 } from '../../navigation';
import { v_15baf2, v_b67103, v_ff5546 } from '../../services';
import type { v_84adce, v_e86309 } from '../../services/codefApi';
import { v_1bfbd0, v_843035, v_9b1a04, v_ef658a } from '../../constants';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import type { v_8ad91b } from '../../navigation';

type Phase = 'form' | 'authPending' | 'result' | 'records';

const v_280029 = [
  { label: '카카오톡', value: '1' },
  { label: '페이코', value: '2' },
  { label: '삼성패스', value: '3' },
  { label: 'KB모바일', value: '4' },
  { label: '통신사 PASS', value: '5' },
  { label: '네이버', value: '6' },
  { label: '신한인증서', value: '7' },
  { label: '토스', value: '8' },
  { label: '하나인증서', value: '9' },
];

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

  const [v_ff38f8, v_7b5f10] = v_5ab095<v_e86309 | null>(null);
  const [v_4622b9, v_fa923c] = v_5ab095<any[]>([]);
  const [v_678155, v_9ed182] = v_5ab095<v_84adce[]>([]);

  v_c4deb2(() => {
    if (v_ab4803 !== 'records') return;
    let v_759436 = true;
    v_34a50a(true);
    v_ff5546()
      .then(v_18b8bf => { if (v_759436) v_9ed182(v_18b8bf); })
      .catch(v_9e86fd => v_03e392.alert('오류', v_9e86fd?.message ?? '기록을 불러오지 못했습니다.'))
      .finally(() => { if (v_759436) v_34a50a(false); });
    return () => { v_759436 = false; };
  }, [v_ab4803]);

  const v_cfb0b1 = async () => {
    if (!v_f08a5e || !/^\d{6}$/.test(v_598ded) || !/^01\d{8,9}$/.test(v_f1c488) || !v_e38ca2) {
      v_03e392.alert('입력 확인', '이름·생년월일(6자리)·휴대폰·인증사를 모두 확인해주세요.');
      return;
    }
    v_34a50a(true);
    try {
      const v_cb35cb = await v_15baf2({ userName: v_f08a5e, birthDate: v_598ded, phoneNo: v_f1c488, provider: v_e38ca2 });
      if (v_cb35cb.status === 'pending' && v_cb35cb.twoWay) {
        v_7b5f10(v_cb35cb.twoWay);
        v_ae4844('authPending');
      } else {
        v_fa923c(v_cb35cb.data ? [v_cb35cb.data] : []);
        v_ae4844('result');
      }
    } catch (v_9e86fd) {
      v_03e392.alert('오류', v_9e86fd?.response?.data?.message ?? v_9e86fd?.message ?? '요청 실패');
    } finally {
      v_34a50a(false);
    }
  };

  const v_b25ffb = async () => {
    if (!v_ff38f8) return;
    v_34a50a(true);
    try {
      const v_cb35cb = await v_b67103(v_ff38f8);
      v_fa923c(v_cb35cb.items ?? []);
      v_ae4844('result');
    } catch (v_9e86fd) {
      v_03e392.alert('인증 미완료', '폰에서 인증을 완료한 뒤 다시 시도해주세요.');
    } finally {
      v_34a50a(false);
    }
  };

  return (
    <SafeView style={v_d81136.screen} showBottomBackground={false}>
      <Header
        title="건강검진"
        showBackButton
        onBackPress={v_c7ac57}
      />
      <KeyboardAvoidingView
        style={v_d81136.flex}
        behavior={v_326be8.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={v_d81136.body}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {v_ab4803 === 'form' && (
            <View>
              <TextField
                label="이름"
                value={v_f08a5e}
                onChangeText={v_bcbad6}
              />
              <TextField
                label="생년월일 (YYMMDD)"
                value={v_598ded}
                onChangeText={v_20e43d}
                keyboardType="number-pad"
                maxLength={6}
              />
              <TextField
                label="휴대폰번호"
                value={v_f1c488}
                onChangeText={v_fcfadf}
                keyboardType="phone-pad"
                maxLength={11}
              />

              <Text style={v_d81136.label}>간편인증 선택</Text>
              <View style={v_d81136.providers}>
                {v_280029.map(v_e2a85c => (
                  <TouchableOpacity
                    key={v_e2a85c.value}
                    onPress={() => v_00a384(v_e2a85c.value)}
                    style={[
                      v_d81136.providerChip,
                      v_e38ca2 === v_e2a85c.value && v_d81136.providerChipOn,
                    ]}
                    activeOpacity={0.7}
                  >
                    <Text style={[
                      v_d81136.providerChipText,
                      v_e38ca2 === v_e2a85c.value && v_d81136.providerChipTextOn,
                    ]}>
                      {v_e2a85c.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              <PrimaryButton
                title={v_683210 ? '조회 중...' : '건강검진 조회'}
                onPress={v_cfb0b1}
                disabled={v_683210}
              />
            </View>
          )}

          {v_ab4803 === 'authPending' && (
            <View style={v_d81136.center}>
              <ActivityIndicator size="large" color={v_1bfbd0.buttonPrimary} />
              <Text style={v_d81136.guide}>
                {'선택한 인증 앱에서 인증을 완료해주세요.\n완료 후 아래 버튼을 눌러주세요.'}
              </Text>
              <PrimaryButton
                title={v_683210 ? '확인 중...' : '인증 완료했어요'}
                onPress={v_b25ffb}
                disabled={v_683210}
              />
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
        </ScrollView>
      </KeyboardAvoidingView>
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
    paddingBottom: v_9b1a04.xlarge,
  },
  label: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
    marginTop: v_9b1a04.medium,
    marginBottom: v_9b1a04.small,
  },
  providers: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: v_9b1a04.small,
    marginBottom: v_9b1a04.large,
  },
  providerChip: {
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 20,
    backgroundColor: '#F1F5F9',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  providerChipOn: {
    backgroundColor: v_1bfbd0.buttonPrimary,
    borderColor: v_1bfbd0.buttonPrimary,
  },
  providerChipText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: '#334155',
  },
  providerChipTextOn: {
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
