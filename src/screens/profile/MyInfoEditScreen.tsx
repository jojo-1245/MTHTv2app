import v_a3453e, { v_df9f57, v_5ab095 } from 'bapkr';
import {
  v_39a996,
  v_9cabcb,
  v_aa7413,
  v_472849,
  v_19b633,
  v_79c4f2,
  v_4623af,
  v_3094a2,
  v_7e4944,
  v_5e8657,
} from 'rcmrninabrnb';
import { v_772971 } from 'jmpfvteuuztnp';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_cf763b } from 'ixigazcpvfldbecwtbvavtbi';
import {
  v_1bfbd0,
  v_a61db3,
  v_843035,
  v_9553a4,
  v_1f5cda,
  v_9b1a04,
  v_34d45f,
} from '../../constants';
import { v_202d44 } from '../../constants/countryDialCodes';
import {
  v_789afd,
  v_369014,
  v_52495e,
} from '../../constants/regions';
import { v_f91692 } from '../../utils/countryUtils';
import { v_9ad700 } from '../../utils/regionSubcodeMapping';
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
import { v_7ef860, v_5a0760, type v_2c95cc } from '../../services/authApi';
import { v_91bb22 } from '../../services/signupApi';
import type { v_da1883 } from '../../types';
import { v_998b9d } from '../../utils/authErrorHandler';

type Props = v_432191<v_8ad91b, 'MyInfoEdit'>;

const MyInfoEditScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d }) => {
  const { t: v_8d41d7 } = v_772971();

  const v_21bdd5 = v_df9f57(
    () => [
      { value: 'none' as const, label: v_8d41d7('signup.select') },
      { value: 'male' as const, label: v_8d41d7('common.male') },
      { value: 'female' as const, label: v_8d41d7('common.female') },
    ],
    [v_8d41d7]
  );

  const v_0c96f7 = ['select', '10', '20', '30', '40', '50+'] as const;
  type GenderOptionValue = 'none' | 'male' | 'female';
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
    setSelectedCountryDialCode: v_f693e7,
    selectedRegion: v_2f03bc,
    setSelectedRegion: v_2f2d51,
    updateSignupFormData: v_a776b5,
  } = v_700ef9();

  const v_590486 =
    v_459d5e?.iso2?.toLowerCase() === 'kr';

  const [v_e0c7e8, v_fedf34] = v_5ab095('');
  const [v_1833e7, v_318f24] = v_5ab095('');
  const [v_d74a81, v_fcce73] = v_5ab095('');
  const [v_c3eac4, v_bdc43c] = v_5ab095<GenderOptionValue>('none');
  const [v_f83808, v_64a312] = v_5ab095<AgeOption>('select');
  const [v_adc076, v_52b279] = v_5ab095('');
  const [v_0b3ebe, v_241a35] = v_5ab095('');
  const [v_88dca2, v_e33ec0] = v_5ab095(false);
  const [v_b67b40, v_a259be] = v_5ab095(false);
  const [v_bd30a1, v_e03dd9] = v_5ab095('');
  const [v_3a64df, v_c73419] = v_5ab095(false);
  const [v_7962f1, v_6a0bf8] = v_5ab095('');

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
  const [v_3ee07c, v_3b5fd6] = v_5ab095(true);

  v_cf763b(
    v_a3453e.useCallback(() => {
      let v_2008a4 = false;
      v_3b5fd6(true);
      v_7ef860()
        .then((profile: v_2c95cc) => {
          if (v_2008a4) return;
          const v_e2a85c = v_727031 as Record<string, unknown>;
          if (v_e2a85c.email && typeof v_e2a85c.email === 'string') v_fedf34(v_e2a85c.email.trim());
          const v_2d1621 =
            (v_e2a85c.name as string) ||
            [v_e2a85c.firstname, v_e2a85c.lastname].filter(Boolean).join(' ').trim() ||
            '';
          if (v_2d1621) v_318f24(v_2d1621);
          const v_49ea09 = (v_e2a85c.mobile ?? v_e2a85c.phone) as string | undefined;
          if (v_49ea09 && typeof v_49ea09 === 'string') {
            const v_e6d4a6 = v_49ea09.replace(/\D/g, '');
            v_fcce73(v_e6d4a6);
            v_a776b5({ phone: v_e6d4a6 });
          }
          const v_d199d8 = v_e2a85c.gender as number | undefined;
          if (v_d199d8 === 2110) v_bdc43c('male');
          else if (v_d199d8 === 2111) v_bdc43c('female');
          else v_bdc43c('none');
          const v_2d2cbc = v_e2a85c.age_range as number | undefined;
          const v_c3889d = {
            2290: 'select',
            2210: '10',
            2220: '20',
            2230: '30',
            2240: '40',
            2250: '50+',
          };
          if (v_2d2cbc != null && v_c3889d[v_2d2cbc]) v_64a312(v_c3889d[v_2d2cbc]);
          else v_64a312('select');
          const v_dbd26e = ((v_e2a85c.country as string) ?? '').toLowerCase();
          if (v_dbd26e) {
            const v_b9bbbd = v_202d44.find(
              (v_3f4e2e) => v_3f4e2e.iso2.toLowerCase() === v_dbd26e
            );
            if (v_b9bbbd) v_f693e7(v_b9bbbd);
          }
          const v_94bdf5 = (v_e2a85c.region_id as number) ?? 0;
          if (v_94bdf5 > 0 && v_94bdf5 !== v_1f5cda) {
            const v_a6c30b = v_52495e.find(
              (v_cb35cb) => parseInt(v_cb35cb.dialCode, 10) === v_94bdf5
            );
            if (v_a6c30b) v_2f2d51(v_a6c30b);
          } else {
            v_2f2d51(v_789afd);
          }
        })
        .catch((v_5e9bfe) => {
          if (!v_2008a4) {

            if (v_998b9d(v_c65f5d, v_5e9bfe)) {
              return;
            }
            v_fedf34('');
          }
        })
        .finally(() => {
          if (!v_2008a4) v_3b5fd6(false);
        });
      return () => {
        v_2008a4 = true;
      };
    }, [v_f693e7, v_2f2d51, v_a776b5])
  );

  const selectOptionCountry: v_da1883 = v_df9f57(
    () => ({
      iso2: 'select',
      name: v_8d41d7('country_select.select_option') || '선택',
      dialCode: '0',
      flagEmoji: '🌐',
      countryCode: 0,
    }),
    [v_8d41d7]
  );

  const v_773f4d = (item: v_da1883): string => {
    if (v_8c0b26.iso2 === 'select' || v_8c0b26.dialCode === '0') {
      return v_8d41d7('country_select.select_option') || '선택';
    }
    const v_b24339 = `countries.${(v_8c0b26.iso2 ?? '').toUpperCase()}`;
    const v_6dce25 = v_8d41d7(v_b24339);
    return v_6dce25 !== v_b24339 ? v_6dce25 : (v_8c0b26.name ?? v_8c0b26.iso2 ?? '');
  };

  const v_263881 = v_df9f57(
    () => [v_cff956, ...v_202d44],
    [v_cff956]
  );

  const v_daa71c = v_df9f57(() => {
    if (!v_bd30a1.trim()) return v_263881;
    const v_1cfe9a = v_bd30a1.trim().toLowerCase();
    return v_263881.filter((v_8c0b26) => {
      const v_8a1355 = v_773f4d(v_8c0b26);
      return (
        (v_8c0b26.name ?? '').toLowerCase().includes(v_1cfe9a) ||
        (v_8a1355 && v_8a1355.toLowerCase().includes(v_1cfe9a)) ||
        (v_8c0b26.iso2 ?? '').toLowerCase().includes(v_1cfe9a) ||
        (v_8c0b26.dialCode ?? '').includes(v_1cfe9a)
      );
    });
  }, [v_263881, v_bd30a1, v_8d41d7]);

  const selectOptionRegion: v_da1883 = v_df9f57(
    () => ({
      iso2: 'select',
      name: v_8d41d7('country_select.select_option') || '선택',
      dialCode: '0',
      flagEmoji: '📍',
      countryCode: 0,
    }),
    [v_8d41d7]
  );

  const v_159ceb =
    v_459d5e?.countryCode ??
    (v_459d5e?.iso2
      ? v_f91692[v_459d5e.iso2.toLowerCase()]
      : 0);

  const v_ba4a54 = (item: v_da1883): string => {
    if (v_8c0b26.iso2 === 'select' || v_8c0b26.iso2 === 'global' || v_8c0b26.dialCode === '0') {
      return v_8c0b26.iso2 === 'global' ? (v_8d41d7('country_select.select_option') || '선택') : v_8c0b26.name;
    }
    const v_c99bd2 = v_8c0b26.countryCode ?? v_159ceb;
    const v_cde5e2 = v_c99bd2 ? v_9ad700.includes(v_c99bd2) : false;
    const v_b5249e = v_cde5e2
      ? `regions.${v_c99bd2}_${v_8c0b26.dialCode}`
      : `regions.${v_c99bd2}_${(v_8c0b26.name ?? '').replace(/\s+/g, '_').toLowerCase()}`;
    const v_6dce25 = v_8d41d7(v_b5249e);
    return v_6dce25 !== v_b5249e ? v_6dce25 : v_8c0b26.name;
  };

  const v_963133 = v_df9f57(
    () => v_369014(v_459d5e?.iso2),
    [v_459d5e?.iso2]
  );

  const v_904f1e = v_df9f57(
    () => [v_24d92d, ...v_963133],
    [v_24d92d, v_963133]
  );

  const v_4e187d = v_df9f57(() => {
    if (!v_7962f1.trim()) return v_904f1e;
    const v_1cfe9a = v_7962f1.trim().toLowerCase();
    return v_904f1e.filter((v_8c0b26) => {
      const v_8a1355 = v_ba4a54(v_8c0b26);
      return (
        v_8c0b26.name?.toLowerCase().includes(v_1cfe9a) ||
        (v_8a1355 && v_8a1355.toLowerCase().includes(v_1cfe9a)) ||
        v_8c0b26.iso2?.toLowerCase().includes(v_1cfe9a)
      );
    });
  }, [v_904f1e, v_7962f1, v_8d41d7, v_159ceb]);

  const v_56743f = (() => {
    const v_ed2e96 = v_8d41d7('country_select.select_option') || '선택';
    if (!v_2f03bc) return v_ed2e96;
    if (v_2f03bc.iso2 === 'select' || v_2f03bc.iso2 === 'global' || v_2f03bc.dialCode === '0') {
      return v_ed2e96;
    }
    return v_ba4a54(v_2f03bc);
  })();

  const v_cbf7db = () => {
    if (v_88dca2) return;
    v_a259be(true);
  };

  const v_de5bf5 = (country: v_da1883) => {
    if (v_b9bbbd.iso2 === 'select' || v_b9bbbd.dialCode === '0') {
      v_f693e7(v_cff956);
    } else {
      v_f693e7(v_b9bbbd);
    }
    v_a259be(false);
    v_e03dd9('');
  };

  const v_b36a76 = () => {
    if (v_88dca2) return;
    v_c73419(true);
  };

  const v_477add = (region: v_da1883) => {
    if (v_a6c30b.iso2 === 'select' || v_a6c30b.dialCode === '0') {
      v_2f2d51(v_24d92d);
    } else {
      v_2f2d51(v_a6c30b);
    }
    v_c73419(false);
    v_6a0bf8('');
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
  const v_c01add =
    v_459d5e?.iso2 === 'select' || v_459d5e?.dialCode === '0';

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

    const v_94bdf5 =
      v_2f03bc && v_2f03bc.dialCode !== '0'
        ? v_9553a4(v_2f03bc.iso2) ||
        parseInt(v_2f03bc.dialCode, 10) ||
        null
        : null;

    if (v_adc076 && !v_857dfe(v_adc076)) {
      v_889fad(v_8d41d7('my_info_edit.errors.input_error'), v_8d41d7('signup.password_rule'));
      return;
    }

    if (v_adc076 && v_adc076 !== v_0b3ebe) {
      v_889fad(v_8d41d7('my_info_edit.errors.input_error'), v_8d41d7('my_info_edit.errors.password_mismatch'));
      return;
    }

    const v_a4d981 = v_c01add ? null : (v_459d5e?.iso2?.toUpperCase() ?? '');
    const v_6c3a47 = v_c01add ? null : (v_4d1e97.replace(/\+/g, '') || null);
    const v_d199d8 = v_c3eac4 === 'none' ? null : v_91bb22.getGenderCode(v_c3eac4);
    const v_78ba6e = v_f83808 === 'select' ? null : v_91bb22.getAgeCode(v_f83808);

    const v_49ea09 =
      v_c01add || !v_088b9e
        ? null
        : v_088b9e;

    v_e33ec0(true);
    try {
      await v_5a0760({
        name: v_affc3e,
        mobile: v_49ea09,
        mobile_code: v_6c3a47,
        country: v_a4d981,
        country_code: v_a4d981,
        region_id: v_94bdf5,
        gender: v_d199d8,
        age_range: v_78ba6e,
        ...(v_adc076.trim() !== '' && { password: v_adc076.trim() }),
      });
      v_889fad(v_8d41d7('common.success'), v_8d41d7('my_info_edit.errors.update_success'), () => {
        v_9b57fc('MyInfo');
      });
    } catch (v_5e9bfe) {

      if (v_998b9d(v_c65f5d, v_5e9bfe)) {
        return;
      }
      const v_a8cd21 =
        v_5e9bfe instanceof Error
          ? v_5e9bfe.message
          : v_8d41d7('my_info_edit.errors.update_failed');
      v_889fad(v_8d41d7('common.error'), v_a8cd21);
    } finally {
      v_e33ec0(false);
    }
  };

  if (v_3ee07c) {
    return (
      <MainLayout activeKey="myinfo">
        <View style={[v_d81136.screen, v_d81136.centered]}>
          <Header title={v_8d41d7('my_info_edit.title')} showBackButton onBackPress={v_c7ac57} />
          <ActivityIndicator size="large" color={v_1bfbd0.primary} />
          <Text style={v_d81136.loadingText}>{v_8d41d7('profile.loading')}</Text>
        </View>
      </MainLayout>
    );
  }

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
                  {v_459d5e?.dialCode === '0' || v_459d5e?.iso2 === 'select' ? (
                    <Text style={v_d81136.countryCode}>{v_8d41d7('country_select.select_option') || '선택'}</Text>
                  ) : (
                    <>
                      <Text style={v_d81136.flagEmoji}>{v_1bf308}</Text>
                      <Text style={v_d81136.countryCode}>{v_4d1e97}</Text>
                    </>
                  )}
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
                    label={v_0bd920 === 'select' ? v_8d41d7('signup.select') : v_0bd920}
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

      {}
      <Modal
        animationType="slide"
        transparent
        visible={v_b67b40}
        onRequestClose={() => {
          v_a259be(false);
          v_e03dd9('');
        }}
      >
        <View style={v_d81136.modalOverlay}>
          <TouchableOpacity
            style={v_d81136.modalBackdrop}
            activeOpacity={1}
            onPress={() => {
              v_a259be(false);
              v_e03dd9('');
            }}
          />
          <View style={v_d81136.modalContent}>
            <View style={v_d81136.modalHeader}>
              <Text style={v_d81136.modalTitle}>
                {v_8d41d7('country_select.title_country') || '국가 선택'}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  v_a259be(false);
                  v_e03dd9('');
                }}
              >
                <Text style={v_d81136.modalCloseButton}>✕</Text>
              </TouchableOpacity>
            </View>
            <View style={v_d81136.modalSearchBox}>
              <Feather name="search" size={18} color={v_1bfbd0.secondaryText} />
              <TextInput
                style={v_d81136.modalSearchInput}
                value={v_bd30a1}
                onChangeText={v_e03dd9}
                placeholder={v_8d41d7('country_select.search_placeholder_country') || '국가 검색'}
                placeholderTextColor={v_1bfbd0.secondaryText}
                autoCorrect={false}
              />
            </View>
            <View style={v_d81136.modalListWrapper}>
              <FlatList
                data={v_daa71c}
                keyExtractor={(v_8c0b26, v_a56041) =>
                  `country-${v_8c0b26.iso2}-${v_8c0b26.dialCode}-${v_a56041}`
                }
                renderItem={({ item: v_8c0b26 }) => (
                  <TouchableOpacity
                    style={v_d81136.modalRow}
                    onPress={() => v_de5bf5(v_8c0b26)}
                    activeOpacity={0.7}
                  >
                    <Text style={v_d81136.modalRowFlag}>{v_8c0b26.flagEmoji}</Text>
                    <Text style={v_d81136.modalRowText}>
                      {v_773f4d(v_8c0b26)}
                    </Text>
                    {(v_459d5e?.iso2 === v_8c0b26.iso2 &&
                      v_459d5e?.dialCode === v_8c0b26.dialCode) ? (
                      <Feather name="check" size={18} color={v_1bfbd0.text} />
                    ) : null}
                  </TouchableOpacity>
                )}
                contentContainerStyle={v_d81136.modalListContent}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                ListEmptyComponent={
                  <View style={v_d81136.modalEmptyState}>
                    <Text style={v_d81136.modalEmptyText}>
                      {v_8d41d7('country_select.no_results') || '검색 결과가 없습니다.'}
                    </Text>
                  </View>
                }
              />
            </View>
          </View>
        </View>
      </Modal>

      {}
      <Modal
        animationType="slide"
        transparent
        visible={v_3a64df}
        onRequestClose={() => {
          v_c73419(false);
          v_6a0bf8('');
        }}
      >
        <View style={v_d81136.modalOverlay}>
          <TouchableOpacity
            style={v_d81136.modalBackdrop}
            activeOpacity={1}
            onPress={() => {
              v_c73419(false);
              v_6a0bf8('');
            }}
          />
          <View style={v_d81136.modalContent}>
            <View style={v_d81136.modalHeader}>
              <Text style={v_d81136.modalTitle}>
                {v_8d41d7('country_select.title_region') || '지역 선택'}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  v_c73419(false);
                  v_6a0bf8('');
                }}
              >
                <Text style={v_d81136.modalCloseButton}>✕</Text>
              </TouchableOpacity>
            </View>
            <View style={v_d81136.modalSearchBox}>
              <Feather name="search" size={18} color={v_1bfbd0.secondaryText} />
              <TextInput
                style={v_d81136.modalSearchInput}
                value={v_7962f1}
                onChangeText={v_6a0bf8}
                placeholder={v_8d41d7('country_select.search_placeholder_region') || '지역 검색'}
                placeholderTextColor={v_1bfbd0.secondaryText}
                autoCorrect={false}
              />
            </View>
            <View style={v_d81136.modalListWrapper}>
              <FlatList
                data={v_4e187d}
                keyExtractor={(v_8c0b26, v_a56041) =>
                  `region-${v_8c0b26.iso2}-${v_8c0b26.dialCode}-${v_a56041}`
                }
                renderItem={({ item: v_8c0b26 }) => (
                  <TouchableOpacity
                    style={v_d81136.modalRow}
                    onPress={() => v_477add(v_8c0b26)}
                    activeOpacity={0.7}
                  >
                    <Text style={v_d81136.modalRowFlag}>{v_8c0b26.flagEmoji}</Text>
                    <Text style={v_d81136.modalRowText}>
                      {v_ba4a54(v_8c0b26)}
                    </Text>
                    {(v_2f03bc?.iso2 === v_8c0b26.iso2 &&
                      v_2f03bc?.dialCode === v_8c0b26.dialCode) ? (
                      <Feather name="check" size={18} color={v_1bfbd0.text} />
                    ) : null}
                  </TouchableOpacity>
                )}
                contentContainerStyle={v_d81136.modalListContent}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                ListEmptyComponent={
                  <View style={v_d81136.modalEmptyState}>
                    <Text style={v_d81136.modalEmptyText}>
                      {v_8d41d7('country_select.no_results') || '검색 결과가 없습니다.'}
                    </Text>
                  </View>
                }
              />
            </View>
          </View>
        </View>
      </Modal>
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
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: v_9b1a04.medium,
    fontSize: 14,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalBackdrop: {
    ...v_472849.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContent: {
    backgroundColor: v_1bfbd0.background,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    maxHeight: '80%',
    paddingBottom: v_9b1a04.large,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: v_9b1a04.large,
    paddingVertical: v_9b1a04.medium,
    borderBottomWidth: 1,
    borderBottomColor: v_1bfbd0.border,
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
  },
  modalCloseButton: {
    fontSize: 20,
    color: v_1bfbd0.secondaryText,
    padding: 4,
  },
  modalSearchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginHorizontal: v_9b1a04.large,
    marginVertical: v_9b1a04.small,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: v_1bfbd0.lightGray || '#f5f5f5',
    borderRadius: 8,
  },
  modalSearchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.text,
    padding: 0,
  },
  modalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: v_9b1a04.large,
    paddingVertical: 14,
    gap: 12,
  },
  modalRowFlag: {
    fontSize: 20,
  },
  modalRowText: {
    flex: 1,
    fontSize: 16,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.text,
  },
  modalListWrapper: {
    minHeight: 500,
  },
  modalListContent: {
    paddingBottom: v_9b1a04.large,
    minHeight: 280,
  },
  modalEmptyState: {
    padding: v_9b1a04.large * 2,
    alignItems: 'center',
  },
  modalEmptyText: {
    fontSize: 14,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
  },
});

export default v_cdb169;

