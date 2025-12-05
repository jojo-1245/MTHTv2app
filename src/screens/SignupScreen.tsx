import v_a3453e, { v_c4deb2, v_df9f57, v_5ab095 } from 'bapkr';
import {
  v_39a996,
  v_e767d1,
  v_326be8,
  v_472849,
  v_19b633,
  v_4623af,
  v_3094a2,
  v_7e4944,
  v_5e8657,
} from 'rcmrninabrnb';
import v_e84827 from 'bkjbgtcoyuizqwgwtnaxmfkyvlqwevapsqmanbsnv';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_1bfbd0, v_843035, v_9b1a04, v_624bd2 } from '../constants';
import {
  v_8e2768,
  v_fa3feb,
  v_729608,
  v_e2ca42,
  v_cb41de,
  v_89c10a,
  v_570c34,
  v_d56c0a,
  v_e775af,
} from '../components';
import type { v_8ad91b } from '../navigation';
import { v_700ef9 } from '../context';
import { v_dec439 } from 'zvyjokvuouwvifyzks';
import { v_4a0202, v_09d767, v_91bb22 } from '../services';

type Props = v_432191<v_8ad91b, 'Signup'>;

const v_21bdd5 = [
  { value: 'male', label: '남' },
  { value: 'female', label: '여' },
] as const;

const v_0c96f7 = ['10', '20', '30', '40', '50+'] as const;
type GenderOption = (typeof v_21bdd5)[number];
type AgeOption = (typeof v_0c96f7)[number];

const v_901315 =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~`!@#$%^&*()_\-+={}\[\]|\\:;"'<>,.?/]).{8,}$/;
const v_064327 = '영문, 숫자, 특수문자를 모두 포함한 8자 이상이어야 합니다.';

const SignupScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d }) => {
  const {
    selectedCountryDialCode: v_459d5e,
    selectedRegion: v_2f03bc,
    setSelectMode: v_67ab1c,
    signupFormData: v_8d7bc8,
    updateSignupFormData: v_a776b5,
  } = v_700ef9();
  const [v_a6fcf8, v_539b92] = v_5ab095(true);
  const [v_d74a81, v_fcce73] = v_5ab095(v_8d7bc8.phone ?? '');
  const [v_c3eac4, v_bdc43c] =
    v_5ab095<typeof v_21bdd5[number]['value']>('male');
  const [v_f83808, v_64a312] = v_5ab095<AgeOption>('20');
  const [v_e0c7e8, v_fedf34] = v_5ab095('');
  const [v_a32a50, v_4944f5] = v_5ab095('');
  const [v_328bb4, v_b7613d] = v_5ab095('');
  const [v_adc076, v_52b279] = v_5ab095('');
  const [v_0b3ebe, v_241a35] = v_5ab095('');
  const [v_88dca2, v_e33ec0] = v_5ab095(false);

  v_c4deb2(() => {
    if (v_8d7bc8.phone !== undefined && v_8d7bc8.phone !== v_d74a81) {
      v_fcce73(v_8d7bc8.phone);
    }
  }, [v_8d7bc8.phone]);

  const v_590486 =
    v_459d5e?.iso2?.toLowerCase() === 'kr';
  const v_56743f = v_2f03bc?.name ?? (v_590486 ? '' : 'Global');
  const v_67cb9c =
    v_459d5e?.name ??
    v_459d5e?.iso2?.toUpperCase() ??
    '';

  const [v_153a89, v_879b56] = v_5ab095<{
    visible: boolean;
    title: string;
    message: string;
    onConfirm?: () => void;
  }>({
    visible: false,
    title: '',
    message: '',
  });

  const v_cbf7db = () => {
    v_67ab1c('country');
    v_c65f5d.navigate('CountrySelect', { mode: 'country' });
  };

  const v_b36a76 = () => {
    if (!v_590486) {
      return;
    }
    v_67ab1c('region');
    v_c65f5d.navigate('CountrySelect', { mode: 'region' });
  };

  const v_641550 = (v_3b402b) => {
    v_fcce73(v_3b402b);
    v_a776b5({ phone: v_3b402b });
  };

  const v_889fad = (v_9f1622, v_a8cd21, v_e2be2d) => {
    v_879b56({
      visible: true,
      title: v_9f1622,
      message: v_a8cd21,
      onConfirm: v_e2be2d,
    });
  };

  const v_34f542 = () => {
    const v_9b064f = v_153a89.onConfirm;
    v_879b56({
      visible: false,
      title: '',
      message: '',
      onConfirm: undefined,
    });
    v_9b064f?.();
  };

  const v_9c3d15 = (v_3b402b) => v_3b402b.replace(/\D/g, '');

  const v_1d0f03 = (v_3b402b) => {
    const v_9a3638 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return v_9a3638.test(v_3b402b);
  };

  const v_7ebe28 = () => v_91bb22.getGenderCode(v_c3eac4);

  const v_a02735 = v_df9f57(() => {
    return (v_3b402b) => v_91bb22.getAgeCode(v_3b402b);
  }, []);

  const v_1bf308 = v_459d5e?.flagEmoji ?? '🌐';
  const v_4d1e97 = v_459d5e?.dialCode ?? '+82';

  const v_47ed2f = async () => {

    v_c65f5d.navigate('EmailVerification', { email: v_e0c7e8 });
  }

  return (
    <>
      <View style={v_d81136.screen}>
        <Header title="Sign up" showBackButton onBackPress={() => v_c65f5d.goBack()} />
        <SafeScrollView
          contentContainerStyle={v_d81136.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          autoAdjustKeyboardPadding={true}
        >
          <View style={v_d81136.form}>
            <TextField
              label="이메일"
              placeholder="oth-user@example.invalid"
              keyboardType="email-address"
              autoCapitalize="none"
              value={v_e0c7e8}
              onChangeText={v_fedf34}
              editable={!v_88dca2}
            />
            <View style={v_d81136.row}>
              <TextField
                label="성"
                placeholder="성을 입력하세요"
                value={v_328bb4}
                onChangeText={v_b7613d}
                containerStyle={[v_d81136.rowItem, v_d81136.rowItemSpacing]}
                editable={!v_88dca2}
              />
              <TextField
                label="이름"
                placeholder="이름을 입력하세요"
                value={v_a32a50}
                onChangeText={v_4944f5}
                containerStyle={v_d81136.rowItem}
                editable={!v_88dca2}
              />
            </View>
            <TextField
              label="Phone"
              placeholder="010-1010-1000"
              keyboardType="phone-pad"
              value={v_d74a81}
              onChangeText={v_641550}
              editable={!v_88dca2}
              leftIcon={
                <TouchableOpacity
                  style={v_d81136.phonePrefix}
                  onPress={v_cbf7db}
                  disabled={v_88dca2}
                >
                  <Text style={v_d81136.flagEmoji}>{v_1bf308}</Text>
                  <Text style={v_d81136.countryCode}>{v_4d1e97}</Text>
                  <Feather name="chevron-down" size={16} color={v_1bfbd0.secondaryText} />
                </TouchableOpacity>
              }
            />
            <SelectField
              label="지역"
              placeholder="지역을 선택하세요"
              value={v_56743f}
              onPress={v_b36a76}
              disabled={!v_590486 || v_88dca2}
            />
            {!v_590486 ? (
              <Text style={v_d81136.regionHelper}>Global 지역이 자동으로 적용됩니다.</Text>
            ) : null}
            <View>
              <Text style={v_d81136.sectionLabel}>성별</Text>
              <View style={v_d81136.inlineOptions}>
                {v_21bdd5.map((v_0bd920) => (
                  <OptionButton
                    key={v_0bd920.value}
                    label={v_0bd920.label}
                    selected={v_c3eac4 === v_0bd920.value}
                    onPress={() => v_bdc43c(v_0bd920.value)}
                  />
                ))}
              </View>
            </View>
            <View>
              <Text style={v_d81136.sectionLabel}>연령대</Text>
              <View style={v_d81136.inlineOptions}>
                {v_0c96f7.map((v_0bd920) => (
                  <OptionButton
                    key={v_0bd920}
                    label={v_0bd920}
                    selected={v_f83808 === v_0bd920}
                    onPress={() => v_64a312(v_0bd920)}
                  />
                ))}
              </View>
            </View>
            <PasswordField
              label="비밀번호"
              placeholder="영문/숫자/특수문자 포함 8자 이상"
              value={v_adc076}
              onChangeText={v_52b279}
              editable={!v_88dca2}
            />
            <PasswordField
              label="비밀번호 확인"
              placeholder="비밀번호를 다시 입력하세요"
              value={v_0b3ebe}
              onChangeText={v_241a35}
              editable={!v_88dca2}
            />
            <Text style={v_d81136.passwordHint}>{v_064327}</Text>

            <View style={v_d81136.checkboxWrapper}>
              <FormCheckbox
                label="I accept the terms and privacy policy"
                value={v_a6fcf8}
                onChange={(v_3b402b) => !v_88dca2 && v_539b92(v_3b402b)}
              />
            </View>

            <View style={v_d81136.buttonWrapper}>
              <PrimaryButton
                title={v_88dca2 ? '가입 중...' : '가입하기'}
                onPress={v_47ed2f}
                disabled={v_88dca2}
              />
              {v_88dca2 && (
                <ActivityIndicator
                  size="small"
                  color={v_1bfbd0.buttonPrimary}
                  style={v_d81136.loadingIndicator}
                />
              )}
            </View>

            <View style={v_d81136.footerRow}>
              <Text style={v_d81136.footerText}>Already have an account? </Text>
              <TouchableOpacity onPress={() => v_c65f5d.navigate('Login')}>
                <Text style={v_d81136.footerLink}>Log in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeScrollView>
      </View>

      <AlertModal
        visible={v_153a89.visible}
        title={v_153a89.title}
        message={v_153a89.message}
        onConfirm={v_34f542}
      />
    </>
  );
};

type SignupScreenStyles = {
  flex: v_7e4944;
  screen: v_7e4944;
  content: v_7e4944;
  form: v_7e4944;
  row: v_7e4944;
  rowItem: v_7e4944;
  rowItemSpacing: v_7e4944;
  sectionLabel: v_5e8657;
  inlineOptions: v_7e4944;
  phonePrefix: v_7e4944;
  flagEmoji: v_5e8657;
  countryCode: v_5e8657;
  checkboxWrapper: v_7e4944;
  passwordHint: v_5e8657;
  buttonWrapper: v_7e4944;
  loadingIndicator: v_7e4944;
  footerRow: v_7e4944;
  footerText: v_5e8657;
  footerLink: v_5e8657;
  regionHelper: v_5e8657;
};

const v_d81136 = v_472849.create<SignupScreenStyles>({
  flex: {
    flex: 1,
  },
  screen: {
    flex: 1,
    backgroundColor: v_1bfbd0.background,
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: v_9b1a04.large,
    paddingVertical: 32,
  },
  form: {
    width: '100%',
    maxWidth: 780,
    gap: v_9b1a04.medium,
  },
  row: {
    flexDirection: 'row',
  },
  rowItem: {
    flex: 1,
  },
  rowItemSpacing: {
    marginRight: v_9b1a04.small,
  },
  sectionLabel: {
    fontSize: 14,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
    marginBottom: 8,
  },
  inlineOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  phonePrefix: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: v_9b1a04.small / 2,
    paddingRight: v_9b1a04.small,
    borderRightWidth: 1,
    borderRightColor: v_1bfbd0.border,
  },
  flagEmoji: {
    fontSize: 18,
  },
  countryCode: {
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
  },
  checkboxWrapper: {
    marginTop: v_9b1a04.small,
  },
  passwordHint: {
    fontSize: 12,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    marginTop: -v_9b1a04.small / 2,
    marginBottom: v_9b1a04.small,
  },
  buttonWrapper: {
    marginTop: v_9b1a04.medium,
  },
  loadingIndicator: {
    marginTop: v_9b1a04.small / 2,
    alignSelf: 'center',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: v_9b1a04.small,
    paddingBottom: v_9b1a04.medium,
  },
  footerText: {
    fontSize: 13,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
  },
  footerLink: {
    fontSize: 13,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
  },
  regionHelper: {
    fontSize: 12,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    marginTop: -v_9b1a04.small / 2,
  },
});

export default v_f40fc5;

