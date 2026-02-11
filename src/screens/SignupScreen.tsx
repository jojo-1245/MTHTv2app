import v_a3453e, { v_c4deb2, v_df9f57, v_5ab095 } from 'bapkr';
import {
  v_39a996,
  v_472849,
  v_19b633,
  v_4623af,
  v_3094a2,
} from 'rcmrninabrnb';
import v_e84827 from 'bkjbgtcoyuizqwgwtnaxmfkyvlqwevapsqmanbsnv';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_1bfbd0, v_843035, v_9b1a04, v_624bd2 } from '../constants';
import {
  v_8e2768,
  v_fa3feb,
  v_dd725b,
  v_729608,
  v_e2ca42,
  v_89c10a,
  v_570c34,
  v_d56c0a,
  v_e775af,
} from '../components';
import type { v_8ad91b } from '../navigation';
import { v_700ef9 } from '../context';
import { v_dec439 } from 'zvyjokvuouwvifyzks';
import { v_772971 } from 'jmpfvteuuztnp';
import { v_35200c, v_91bb22, type v_d4ca6e } from '../services/signupApi';
import { v_9553a4 } from '../constants/regions';

type Props = v_432191<v_8ad91b, 'Signup'>;

const v_64964e = /^(?=.*[a-zA-Z])(?=.*\d).{8,128}$/;

const SignupScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d }) => {
  const { t: v_8d41d7, i18n: v_9c213b } = v_772971();
  const {
    selectedCountryDialCode: v_459d5e,
    selectedRegion: v_2f03bc,
    setSelectMode: v_67ab1c,
    signupFormData: v_8d7bc8,
    updateSignupFormData: v_a776b5,
  } = v_700ef9();

  const v_21bdd5 = v_df9f57(() => [
    { value: 'none' as const, label: v_8d41d7('signup.select') },
    { value: 'male' as const, label: v_8d41d7('common.male') },
    { value: 'female' as const, label: v_8d41d7('common.female') },
  ], [v_8d41d7]);

  const v_0c96f7 = ['select', '10', '20', '30', '40', '50+'] as const;
  type AgeOption = (typeof v_0c96f7)[number];

  const v_064327 = v_8d41d7('signup.password_rule');

  const [v_a6fcf8, v_539b92] = v_5ab095(true);
  const [v_d74a81, v_fcce73] = v_5ab095(v_8d7bc8.phone ?? '');
  const [v_c3eac4, v_bdc43c] =
    v_5ab095<'none' | 'male' | 'female'>('none');
  const [v_f83808, v_64a312] = v_5ab095<AgeOption>('select');
  const [v_e0c7e8, v_fedf34] = v_5ab095('');
  const [v_1833e7, v_318f24] = v_5ab095('');
  const [v_adc076, v_52b279] = v_5ab095('');
  const [v_0b3ebe, v_241a35] = v_5ab095('');
  const [v_9bf12c, v_fb6bbb] = v_5ab095('');
  const [v_88dca2, v_e33ec0] = v_5ab095(false);

  const [v_8b47e4, v_c9a6aa] = v_5ab095(false);
  const [v_fd8548, v_1cf99d] = v_5ab095(false);
  const [v_564829, v_d9575d] = v_5ab095(false);
  const [v_5996d6, v_735c4d] = v_5ab095(false);

  const v_0e461e = (v_3b402b): boolean => {
    const v_9a3638 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return v_9a3638.test(v_3b402b);
  };

  const v_559736 = (): string | null => {
    if (!v_8b47e4 || v_e0c7e8.length === 0) return null;
    if (!v_0e461e(v_e0c7e8)) {
      return v_8d41d7('signup.error_email_format');
    }
    return null;
  };

  const v_8f5468 = (): string | null => {
    if (!v_5996d6 || v_9bf12c.length === 0) return null;
    if (!v_0e461e(v_9bf12c)) {
      return v_8d41d7('signup.error_email_format');
    }
    return null;
  };

  const v_1743a3 = (): string | null => {
    if (!v_fd8548 || v_adc076.length === 0) return null;
    if (v_64964e.test(v_adc076)) return null;
    const v_9de4ac = [];
    if (v_adc076.length < 8) v_9de4ac.push('8자 이상');
    else if (v_adc076.length > 128) v_9de4ac.push('128자 이하');
    if (!/[a-zA-Z]/.test(v_adc076)) v_9de4ac.push('영문');
    if (!/\d/.test(v_adc076)) v_9de4ac.push('숫자');
    return v_9de4ac.length
      ? v_8d41d7('signup.error_password_requirement', { errors: v_9de4ac.join(', ') })
      : null;
  };

  const v_374ccc = (): string | null => {
    if (!v_564829 || v_0b3ebe.length === 0) return null;
    if (v_adc076 === v_0b3ebe) return null;
    return v_8d41d7('signup.error_password_mismatch');
  };

  const v_4e8e4d = v_559736();
  const v_e8fd53 = v_1743a3();
  const v_9523d2 = v_374ccc();
  const v_2c06d8 = v_8f5468();

  const v_a64837 = (v_3b402b) => {
    v_fedf34(v_3b402b);
    if (!v_8b47e4) v_c9a6aa(true);
  };

  const v_57c91b = (v_3b402b) => {
    v_52b279(v_3b402b);
    if (!v_fd8548) v_1cf99d(true);
  };

  const v_dd9cbd = (v_3b402b) => {
    v_241a35(v_3b402b);
    if (!v_564829) v_d9575d(true);
  };

  const v_36c8eb = (v_3b402b) => {
    v_fb6bbb(v_3b402b);
    if (!v_5996d6) v_735c4d(true);
  };

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

  const v_7ebe28 = (): number =>
    v_c3eac4 === 'none' ? 0 : v_91bb22.getGenderCode(v_c3eac4);

  const v_a02735 = v_df9f57(() => {
    return (v_3b402b): number =>
      v_3b402b === 'select' ? 0 : v_91bb22.getAgeCode(v_3b402b);
  }, []);

  const v_1bf308 = v_459d5e?.flagEmoji ?? '🌐';
  const v_4d1e97 = v_459d5e?.dialCode ?? '+82';

  const v_47ed2f = async () => {
    const v_8f37ac = v_e0c7e8.trim().toLowerCase();
    const v_affc3e = v_1833e7.trim();
    const v_088b9e = v_9c3d15(v_d74a81);
    const v_6c3a47 = v_4d1e97.replace(/\+/g, '') || '82';
    const v_a4d981 = v_459d5e?.iso2?.toUpperCase() ?? '';
    const v_94bdf5 =
      v_590486 && v_2f03bc
        ? v_9553a4(v_2f03bc.iso2)
        : undefined;

    if (!v_8f37ac) {
      v_889fad(v_8d41d7('signup.error_input'), v_8d41d7('signup.error_empty_email'));
      return;
    }
    if (v_8f37ac.length < 5 || v_8f37ac.length > 255) {
      v_889fad(v_8d41d7('signup.error_input'), v_8d41d7('signup.error_email_format'));
      return;
    }
    if (!v_1d0f03(v_8f37ac)) {
      v_889fad(v_8d41d7('signup.error_input'), v_8d41d7('signup.error_invalid_email'));
      return;
    }
    if (!v_affc3e || v_affc3e.length > 200) {
      v_889fad(v_8d41d7('signup.error_input'), v_8d41d7('signup.error_empty_name'));
      return;
    }
    if (!v_64964e.test(v_adc076)) {
      v_889fad(v_8d41d7('signup.error_input'), v_064327);
      return;
    }
    if (v_adc076 !== v_0b3ebe) {
      v_889fad(v_8d41d7('signup.error_input'), v_8d41d7('signup.error_password_mismatch'));
      return;
    }
    if (!v_a6fcf8) {
      v_889fad(v_8d41d7('signup.error_terms_required'), v_8d41d7('signup.error_terms_message'));
      return;
    }

    const payload: v_d4ca6e = {
      email: v_8f37ac,
      password: v_adc076,
      name: v_affc3e,
      ...(v_088b9e && {
        mobile: `${v_4d1e97}${v_088b9e}`,
        mobile_code: v_6c3a47,
      }),
      gender: v_7ebe28(),
      age_range: v_a02735(v_f83808),
      ...(v_a4d981 && { country: v_a4d981, country_code: v_a4d981 }),
      ...(v_94bdf5 !== undefined && v_94bdf5 > 0 && { region_id: v_94bdf5 }),
      os_type: v_91bb22.getOSCode(),
      language: v_9c213b.language?.startsWith('ko') ? 'ko' : v_9c213b.language?.startsWith('id') ? 'id' : 'en',
      ...(v_9bf12c.trim() && { referral_code: v_9bf12c.trim() }),
    };

    v_e33ec0(true);
    try {
      await v_35200c(v_931bf0);
      await v_e84827.setItem(v_624bd2.savedEmail, v_8f37ac);
      v_889fad(v_8d41d7('signup.success_title'), v_8d41d7('signup.success_message'), () => {
        v_c65f5d.navigate('EmailVerification', { email: v_8f37ac });
      });
    } catch (v_5e9bfe) {
      const v_a8cd21 =
        v_5e9bfe instanceof Error ? v_5e9bfe.message : v_8d41d7('signup.error_unknown');
      v_889fad(v_8d41d7('signup.error_title'), v_a8cd21);
    } finally {
      v_e33ec0(false);
    }
  };

  return (
    <>
      <View style={v_d81136.screen}>
        <Header title={v_8d41d7('signup.title')} showBackButton onBackPress={() => v_c65f5d.goBack()} />
        <SafeScrollView
          contentContainerStyle={v_d81136.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          autoAdjustKeyboardPadding={true}
        >
          <View style={v_d81136.form}>
            {}
            <TextField
              label={v_8d41d7('signup.name_label')}
              placeholder={v_8d41d7('signup.name_placeholder')}
              value={v_1833e7}
              onChangeText={v_318f24}
              editable={!v_88dca2}
            />

            {}
            <View>
              <TextField
                label={v_8d41d7('signup.email_label')}
                placeholder={v_8d41d7('signup.email_placeholder')}
                keyboardType="email-address"
                autoCapitalize="none"
                value={v_e0c7e8}
                onChangeText={v_a64837}
                editable={!v_88dca2}
              />
              {v_4e8e4d && (
                <Text style={v_d81136.errorText}>{v_4e8e4d}</Text>
              )}
            </View>

            {}
            <View>
              <PasswordField
                label={v_8d41d7('signup.password_label')}
                placeholder={v_8d41d7('signup.password_placeholder')}
                value={v_adc076}
                onChangeText={v_57c91b}
                editable={!v_88dca2}
              />
              {v_e8fd53 ? (
                <Text style={v_d81136.errorText}>{v_e8fd53}</Text>
              ) : (
                <Text style={v_d81136.hintText}>{v_064327}</Text>
              )}
            </View>

            {}
            <View>
              <PasswordField
                label={v_8d41d7('signup.password_confirm_label')}
                placeholder={v_8d41d7('signup.password_confirm_placeholder')}
                value={v_0b3ebe}
                onChangeText={v_dd9cbd}
                editable={!v_88dca2}
              />
              {v_9523d2 && (
                <Text style={v_d81136.errorText}>{v_9523d2}</Text>
              )}
            </View>

            {}
            <TextField
              label={v_8d41d7('signup.phone_label')}
              placeholder={v_8d41d7('signup.phone_placeholder')}
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

            {}
            <SelectField
              label={v_8d41d7('signup.region_label')}
              placeholder={v_8d41d7('signup.region_placeholder')}
              value={v_56743f}
              onPress={v_b36a76}
              disabled={!v_590486 || v_88dca2}
            />

            {}
            <View>
              <Text style={v_d81136.sectionLabel}>{v_8d41d7('signup.gender_label')}</Text>
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

            {}
            <View>
              <Text style={v_d81136.sectionLabel}>{v_8d41d7('signup.age_label')}</Text>
              <View style={v_d81136.inlineOptions}>
                {v_0c96f7.map((v_0bd920) => (
                  <OptionButton
                    key={v_0bd920}
                    label={v_0bd920 === 'select' ? v_8d41d7('signup.select') : v_0bd920}
                    selected={v_f83808 === v_0bd920}
                    onPress={() => v_64a312(v_0bd920)}
                  />
                ))}
              </View>
            </View>

            {}
            <View>
              <TextField
                label={v_8d41d7('signup.referral_label')}
                placeholder={v_8d41d7('signup.referral_placeholder')}
                keyboardType="email-address"
                autoCapitalize="none"
                value={v_9bf12c}
                onChangeText={v_36c8eb}
                editable={!v_88dca2}
              />
              {v_2c06d8 && (
                <Text style={v_d81136.errorText}>{v_2c06d8}</Text>
              )}
            </View>

            {}
            <View style={v_d81136.checkboxWrapper}>
              <FormCheckbox
                label={v_8d41d7('signup.terms_agree')}
                value={v_a6fcf8}
                onChange={(v_3b402b) => !v_88dca2 && v_539b92(v_3b402b)}
              />
            </View>

            {}
            <View style={v_d81136.buttonWrapper}>
              <GradientButton
                title={v_88dca2 ? v_8d41d7('signup.submitting') : v_8d41d7('signup.submit')}
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

const v_d81136 = v_472849.create({
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
  buttonWrapper: {
    marginTop: v_9b1a04.medium,
    marginBottom: v_9b1a04.large,
  },
  loadingIndicator: {
    marginTop: v_9b1a04.small / 2,
    alignSelf: 'center',
  },
  errorText: {
    fontSize: 12,
    fontFamily: v_843035.regular,
    color: '#EF4444',
    marginTop: 4,
  },
  hintText: {
    fontSize: 12,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    marginTop: 4,
  },
});

export default v_f40fc5;

