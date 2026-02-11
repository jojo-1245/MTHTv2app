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
import { v_772971 } from 'jmpfvteuuztnp';
import v_e84827 from 'bkjbgtcoyuizqwgwtnaxmfkyvlqwevapsqmanbsnv';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_1bfbd0, v_a61db3, v_843035, v_9b1a04, v_34d45f, v_624bd2 } from '../../constants';
import {
  v_8e2768,
  v_729608,
  v_1c1837,
  v_e2ca42,
  v_cb41de,
  v_89c10a,
  v_570c34,
  v_d56c0a,
  v_e775af,
} from '../../components';
import type { v_8ad91b } from '../../navigation';
import { v_700ef9 } from '../../context';
import { v_dec439 } from 'zvyjokvuouwvifyzks';
import { v_a0daa8 } from '../../navigation';

type Props = v_432191<v_8ad91b, 'MyInfoEdit'>;

const MyInfoEditScreen: v_a3453e.FC<Props> = () => {
  const { t: v_8d41d7 } = v_772971();

  const v_21bdd5 = [
    { value: 'male', label: v_8d41d7('common.male') },
    { value: 'female', label: v_8d41d7('common.female') },
  ] as const;

  const v_0c96f7 = ['10', '20', '30', '40', '50+'] as const;
  type GenderOption = (typeof v_21bdd5)[number];
  type AgeOption = (typeof v_0c96f7)[number];

  const v_3a9aef = /[~`!@#$%^&*()_\-+={}\[\]|\\:;"'<>,.?/]/;
  const v_b6e838 = /[^A-Za-z0-9~`!@#$%^&*()_\-+={}\[\]|\\:;"'<>,.?/]/;

  const v_857dfe = (v_3b402b): boolean => {
    const v_b947d5 = v_3b402b.length >= 8;
    const v_9dd411 = /[A-Z]/.test(v_3b402b);
    const v_1cf57e = /[a-z]/.test(v_3b402b);
    const v_5af9de = /\d/.test(v_3b402b);
    const v_a5927f = v_3a9aef.test(v_3b402b);

    return v_b947d5 && v_9dd411 && v_1cf57e && v_5af9de && v_a5927f;
  };

  const v_3c3484 = (v_3b402b): boolean => {
    return v_b6e838.test(v_3b402b);
  };

  const { goBack: v_c7ac57, navigate: v_9b57fc } = v_a0daa8();
  const {
    selectedCountryDialCode: v_459d5e,
    selectedRegion: v_2f03bc,
    updateSignupFormData: v_a776b5,
  } = v_700ef9();

  const v_590486 =
    v_459d5e?.iso2?.toLowerCase() === 'kr';

  const [v_e0c7e8, v_fedf34] = v_5ab095('');
  const [v_1833e7, v_318f24] = v_5ab095('');
  const [v_d74a81, v_fcce73] = v_5ab095('');
  const [v_c3eac4, v_bdc43c] = v_5ab095<'male' | 'female'>('male');
  const [v_f83808, v_64a312] = v_5ab095<AgeOption>('20');
  const [v_adc076, v_52b279] = v_5ab095('');
  const [v_0b3ebe, v_241a35] = v_5ab095('');
  const [v_88dca2, v_e33ec0] = v_5ab095(false);

  const [v_274f50, v_697ca3] = v_5ab095(false);
  const [v_6089b6, v_c7f76c] = v_5ab095(false);
  const [v_651247, v_862dd5] = v_5ab095(false);
  const [v_736a24, v_8c1910] = v_5ab095(false);
  const [v_e44a98, v_3ef84a] = v_5ab095(false);
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

  v_c4deb2(() => {

    v_e84827.getItem(v_624bd2.savedEmail).then((v_60fc43) => {
      if (v_60fc43) {
        v_fedf34(v_60fc43);
      }
    });
  }, []);

  const v_56743f = (() => {
    if (!v_2f03bc) return '';
    if (v_2f03bc.iso2 === 'select' || v_2f03bc.iso2 === 'global' || v_2f03bc.dialCode === '0') {
      return v_8d41d7('country_select.select_option') || '선택';
    }
    return `${v_2f03bc.name} (${v_2f03bc.dialCode})`;
  })();

  const v_cbf7db = () => {
    v_9b57fc('CountrySelect', { mode: 'country' });
  };

  const v_b36a76 = () => {
    v_9b57fc('CountrySelect', { mode: 'region' });
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

  const v_c5377e = (v_3b402b): string | null => {
    if (v_3b402b.length === 0) return null;

    if (v_3c3484(v_3b402b)) {
      return v_8d41d7('my_info_edit.password_invalid_char');
    }

    const v_9de4ac = [];

    if (v_3b402b.length < 8) {
      v_9de4ac.push('8자 이상');
    }
    if (!/[a-z]/.test(v_3b402b)) {
      v_9de4ac.push('영문 소문자');
    }
    if (!/[A-Z]/.test(v_3b402b)) {
      v_9de4ac.push('영문 대문자');
    }
    if (!/\d/.test(v_3b402b)) {
      v_9de4ac.push('숫자');
    }
    if (!v_3a9aef.test(v_3b402b)) {
      v_9de4ac.push('특수문자');
    }

    if (v_9de4ac.length > 0) {
      return v_8d41d7('my_info_edit.password_requirements', { errors: v_9de4ac.join(', ') });
    }
    return null; 
  };

  const v_57c91b = (v_3b402b) => {
    v_52b279(v_3b402b);
    if (v_3b402b.length > 0) {
      v_862dd5(v_3c3484(v_3b402b));
      v_c7f76c(v_857dfe(v_3b402b));
      v_697ca3(true);
    } else {
      v_697ca3(false);
      v_8c1910(false);
      v_862dd5(false);
    }

    if (v_0b3ebe.length > 0) {
      v_3ef84a(v_3b402b === v_0b3ebe);
    }
  };

  const v_dd9cbd = (v_3b402b) => {
    v_241a35(v_3b402b);
    if (v_3b402b.length > 0) {
      v_3ef84a(v_adc076 === v_3b402b);
      v_8c1910(true);
    } else {
      v_8c1910(false);
    }
  };

  const v_1bf308 = v_459d5e?.flagEmoji ?? '🌐';
  const v_4d1e97 = v_459d5e?.dialCode ?? '+82';

  const v_02f61c = async () => {
    const v_affc3e = v_1833e7.trim();
    const v_088b9e = v_9c3d15(v_d74a81);

    if (!v_affc3e) {
      v_889fad(v_8d41d7('my_info_edit.errors.input_error'), v_8d41d7('my_info_edit.errors.name_required'));
      return;
    }

    if (!v_088b9e) {
      v_889fad(v_8d41d7('my_info_edit.errors.input_error'), v_8d41d7('my_info_edit.errors.phone_required'));
      return;
    }

    if (v_590486 && !v_2f03bc) {
      v_889fad(v_8d41d7('my_info_edit.errors.input_error'), v_8d41d7('my_info_edit.errors.region_required'));
      return;
    }

    if (v_adc076 && !v_857dfe(v_adc076)) {
      v_889fad(v_8d41d7('my_info_edit.errors.input_error'), v_8d41d7('signup.password_rule'));
      return;
    }

    if (v_adc076 && v_adc076 !== v_0b3ebe) {
      v_889fad(v_8d41d7('my_info_edit.errors.input_error'), v_8d41d7('my_info_edit.errors.password_mismatch'));
      return;
    }

    v_e33ec0(true);
    try {

      await new Promise((v_6f7712) => setTimeout(v_6f7712, 1000));
      v_889fad(v_8d41d7('common.success'), v_8d41d7('my_info_edit.errors.update_success'), () => {
        v_c7ac57();
      });
    } catch (v_5e9bfe) {
      const v_a8cd21 =
        v_5e9bfe instanceof Error
          ? v_5e9bfe.message
          : v_8d41d7('my_info_edit.errors.update_failed');
      v_889fad(v_8d41d7('common.error'), v_a8cd21);
    } finally {
      v_e33ec0(false);
    }
  };

  return (
    <MainLayout activeKey="myinfo">
      <View style={v_d81136.screen}>
        <Header title={v_8d41d7('my_info_edit.title')} showBackButton onBackPress={v_c7ac57} />
        <SafeScrollView
          contentContainerStyle={v_d81136.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          autoAdjustKeyboardPadding={true}
          showBottomBackground={false}
          disableBottomPadding={true}
        >
          <View style={v_d81136.form}>
            <TextField
              label={v_8d41d7('my_info_edit.email_label')}
              placeholder={v_8d41d7('my_info_email_auth.email_placeholder')}
              keyboardType="email-address"
              autoCapitalize="none"
              value={v_e0c7e8}
              editable={false}
              style={v_d81136.disabledInput}
              inputWrapperStyle={v_d81136.disabledInputWrapper}
            />
            <TextField
              label={v_8d41d7('my_info_edit.name_label')}
              placeholder={v_8d41d7('my_info_edit.name_placeholder')}
              value={v_1833e7}
              onChangeText={v_318f24}
              editable={!v_88dca2}
            />
            <TextField
              label={v_8d41d7('my_info_edit.phone_label')}
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
              label={v_8d41d7('my_info_edit.region_label')}
              placeholder={v_8d41d7('my_info_edit.region_placeholder')}
              value={v_56743f}
              onPress={v_b36a76}
              disabled={!v_590486 || v_88dca2}
            />
            {!v_590486 ? (
              <Text style={v_d81136.regionHelper}>{v_8d41d7('my_info_edit.region_helper')}</Text>
            ) : null}
            <View>
              <Text style={v_d81136.sectionLabel}>{v_8d41d7('my_info_edit.gender_label')}</Text>
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
              <Text style={v_d81136.sectionLabel}>{v_8d41d7('my_info_edit.age_label')}</Text>
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
            <View>
              <PasswordField
                label={v_8d41d7('my_info_edit.password_label')}
                placeholder={v_8d41d7('my_info_edit.password_placeholder')}
                value={v_adc076}
                onChangeText={v_57c91b}
                editable={!v_88dca2}
              />
              {v_274f50 && (
                <Text style={[v_d81136.validationText, v_6089b6 && !v_651247 ? v_d81136.validationSuccess : v_d81136.validationError]}>
                  {v_c5377e(v_adc076) || v_8d41d7('my_info_edit.password_available')}
                </Text>
              )}
            </View>
            {v_adc076 ? (
              <View>
                <PasswordField
                  label={v_8d41d7('my_info_edit.password_confirm_label')}
                  placeholder={v_8d41d7('my_info_edit.password_confirm_placeholder')}
                  value={v_0b3ebe}
                  onChangeText={v_dd9cbd}
                  editable={!v_88dca2}
                />
                {v_736a24 && (
                  <Text style={[v_d81136.validationText, v_e44a98 ? v_d81136.validationSuccess : v_d81136.validationError]}>
                    {v_e44a98 ? v_8d41d7('my_info_edit.password_match') : v_8d41d7('my_info_edit.password_not_match')}
                  </Text>
                )}
              </View>
            ) : null}

            <View style={v_d81136.buttonWrapper}>
              <PrimaryButton
                title={v_88dca2 ? v_8d41d7('my_info_edit.updating') : v_8d41d7('my_info_edit.update_button')}
                onPress={v_02f61c}
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
    </MainLayout>
  );
};

const v_d81136 = v_472849.create({
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
  validationText: v_a61db3.validationText,
  validationSuccess: {
    color: '#007AFF',
  },
  validationError: {
    color: v_1bfbd0.error,
  },
  buttonWrapper: {
    marginTop: v_9b1a04.medium,
    marginBottom: v_9b1a04.large,
  },
  loadingIndicator: {
    marginTop: v_9b1a04.small / 2,
    alignSelf: 'center',
  },
  regionHelper: {
    fontSize: 12,
    color: v_1bfbd0.secondaryText,
    marginTop: -v_9b1a04.small / 2,
  },
  disabledInput: {
    backgroundColor: '#F5F5F5',
    color: v_1bfbd0.secondaryText,
  },
  disabledInputWrapper: {
    backgroundColor: '#F5F5F5',
    borderColor: '#E5E5E5',
  },
});

export default v_cdb169;

