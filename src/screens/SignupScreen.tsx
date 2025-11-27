import v_a3453e, { v_5ab095 } from 'bapkr';
import {
  v_e767d1,
  v_326be8,
  v_122070,
  v_472849,
  v_19b633,
  v_4623af,
  v_3094a2,
} from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';
import {
  v_fa3feb,
  v_729608,
  v_e2ca42,
  v_cb41de,
  v_89c10a,
  v_e775af,
} from '../components';
import type { v_8ad91b } from '../navigation';
import { v_202d44 } from '../constants';
import type { v_da1883 } from '../types';
import { v_dec439 } from 'zvyjokvuouwvifyzks';

type Props = v_432191<v_8ad91b, 'Signup'>;

const v_21bdd5 = [
  { value: 'male', label: '남' },
  { value: 'female', label: '여' },
] as const;

const v_d7c38a = v_202d44.find((v_3f4e2e) => v_3f4e2e.iso2 === 'kr') ?? v_202d44[0];

const SignupScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d }) => {
  const [v_a6fcf8, v_539b92] = v_5ab095(true);
  const [v_d74a81, v_fcce73] = v_5ab095('');
  const [v_c3eac4, v_bdc43c] = v_5ab095<typeof v_21bdd5[number]['value']>('male');
  const [v_0899ab, v_3400e8] = v_5ab095<v_da1883>(v_d7c38a);
  const [v_e0c7e8, v_fedf34] = v_5ab095('');
  const [v_1833e7, v_318f24] = v_5ab095('');

  const v_cbf7db = () => {
    v_c65f5d.navigate('CountrySelect', {
      selectedIso2: v_0899ab.iso2,
      onSelectCountry: (v_b9bbbd) => v_3400e8(v_b9bbbd),
    });
  };

  return (
    <KeyboardAvoidingView
      style={v_d81136.flex}
      behavior={v_326be8.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={v_326be8.OS === 'ios' ? 0 : 24}
    >
      <View style={v_d81136.screen}>
        <Header title="Sign up" showBackButton onBackPress={() => v_c65f5d.goBack()} />
        <ScrollView
          contentContainerStyle={v_d81136.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={v_d81136.form}>
            <TextField
              label="이메일"
              placeholder="oth-user@example.invalid"
              keyboardType="email-address"
              autoCapitalize="none"
              value={v_e0c7e8}
              onChangeText={v_fedf34}
            />
            <TextField label="이름" placeholder="이름을 입력하세요" value={v_1833e7} onChangeText={v_318f24} />
            <TextField
              label="Phone"
              placeholder="010-1010-1000"
              keyboardType="phone-pad"
              value={v_d74a81}
              onChangeText={v_fcce73}
              leftIcon={
                <TouchableOpacity style={v_d81136.phonePrefix} onPress={v_cbf7db}>
                  <Text style={v_d81136.flagEmoji}>{v_0899ab.flagEmoji}</Text>
                  <Text style={v_d81136.countryCode}>{v_0899ab.dialCode}</Text>
                  <Feather name="chevron-down" size={16} color={v_1bfbd0.secondaryText} />
                </TouchableOpacity>
              }
            />
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
            <PasswordField label="비밀번호" placeholder="must be 8 characters" />
            <PasswordField label="비밀번호 확인" placeholder="repeat password" />

            <View style={v_d81136.checkboxWrapper}>
              <FormCheckbox
                label="I accept the terms and privacy policy"
                value={v_a6fcf8}
                onChange={v_539b92}
              />
            </View>

            <PrimaryButton title="가입하기" onPress={() => v_c65f5d.navigate('EmailVerification')} />

            <View style={v_d81136.footerRow}>
              <Text style={v_d81136.footerText}>Already have an account? </Text>
              <TouchableOpacity onPress={() => v_c65f5d.navigate('Login')}>
                <Text style={v_d81136.footerLink}>Log in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

const v_d81136 = v_472849.create({
  flex: {
    flex: 1,
  },
  screen: {
    flex: 1,
    backgroundColor: v_1bfbd0.background,
     paddingBottom: 40,
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
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: v_9b1a04.small,
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
});

export default v_f40fc5;

