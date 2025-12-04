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
import { v_1bfbd0, v_843035, v_9b1a04, v_624bd2 } from '../../constants';
import {
  v_8e2768,
  v_729608,
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

const MyInfoEditScreen: v_a3453e.FC<Props> = () => {
  const { goBack: v_c7ac57, navigate: v_9b57fc } = v_a0daa8();
  const {
    selectedCountryDialCode: v_459d5e,
    selectedRegion: v_2f03bc,
    updateSignupFormData: v_a776b5,
  } = v_700ef9();

  const v_590486 =
    v_459d5e?.iso2?.toLowerCase() === 'kr';

  const [v_e0c7e8, v_fedf34] = v_5ab095('');
  const [v_a32a50, v_4944f5] = v_5ab095('');
  const [v_328bb4, v_b7613d] = v_5ab095('');
  const [v_d74a81, v_fcce73] = v_5ab095('');
  const [v_c3eac4, v_bdc43c] = v_5ab095<'male' | 'female'>('male');
  const [v_f83808, v_64a312] = v_5ab095<AgeOption>('20');
  const [v_adc076, v_52b279] = v_5ab095('');
  const [v_0b3ebe, v_241a35] = v_5ab095('');
  const [v_88dca2, v_e33ec0] = v_5ab095(false);
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

  const v_56743f = v_2f03bc
    ? `${v_2f03bc.name} (${v_2f03bc.dialCode})`
    : '';

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

  const v_1d0f03 = (v_3b402b) => {
    const v_9a3638 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return v_9a3638.test(v_3b402b);
  };

  const v_1bf308 = v_459d5e?.flagEmoji ?? '🌐';
  const v_4d1e97 = v_459d5e?.dialCode ?? '+82';

  const v_02f61c = async () => {
    const v_8f37ac = v_e0c7e8.trim().toLowerCase();
    const v_c6b2bb = v_a32a50.trim();
    const v_57c787 = v_328bb4.trim();
    const v_088b9e = v_9c3d15(v_d74a81);

    if (!v_8f37ac) {
      v_889fad('입력 오류', '이메일을 입력해주세요.');
      return;
    }

    if (!v_1d0f03(v_8f37ac)) {
      v_889fad('입력 오류', '올바른 이메일 주소를 입력해주세요.');
      return;
    }

    if (!v_c6b2bb || !v_57c787) {
      v_889fad('입력 오류', '성을 포함한 이름을 모두 입력해주세요.');
      return;
    }

    if (!v_088b9e) {
      v_889fad('입력 오류', '전화번호를 입력해주세요.');
      return;
    }

    if (v_590486 && !v_2f03bc) {
      v_889fad('입력 오류', '지역을 선택해주세요.');
      return;
    }

    if (v_adc076 && !v_901315.test(v_adc076)) {
      v_889fad('입력 오류', v_064327);
      return;
    }

    if (v_adc076 && v_adc076 !== v_0b3ebe) {
      v_889fad('입력 오류', '비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return;
    }

    v_e33ec0(true);
    try {

      await new Promise((v_6f7712) => setTimeout(v_6f7712, 1000));
      v_889fad('수정 완료', '내 정보가 성공적으로 수정되었습니다.', () => {
        v_c7ac57();
      });
    } catch (v_5e9bfe) {
      const v_a8cd21 =
        v_5e9bfe instanceof Error
          ? v_5e9bfe.message
          : '정보 수정 중 알 수 없는 오류가 발생했습니다.';
      v_889fad('수정 실패', v_a8cd21);
    } finally {
      v_e33ec0(false);
    }
  };

  return (
    <>

      <View style={v_d81136.screen}>
        <Header title="Edit My Info" showBackButton onBackPress={v_c7ac57} />
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
              label="비밀번호 (변경 시에만 입력)"
              placeholder="영문/숫자/특수문자 포함 8자 이상"
              value={v_adc076}
              onChangeText={v_52b279}
              editable={!v_88dca2}
            />
            {v_adc076 ? (
              <>
                <PasswordField
                  label="비밀번호 확인"
                  placeholder="비밀번호를 다시 입력하세요"
                  value={v_0b3ebe}
                  onChangeText={v_241a35}
                  editable={!v_88dca2}
                />
                <Text style={v_d81136.passwordHint}>{v_064327}</Text>
              </>
            ) : null}

            <View style={v_d81136.buttonWrapper}>
              <PrimaryButton
                title={v_88dca2 ? '수정 중...' : '수정하기'}
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
    </>
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
  passwordHint: {
    fontSize: 12,
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
  regionHelper: {
    fontSize: 12,
    color: v_1bfbd0.secondaryText,
    marginTop: -v_9b1a04.small / 2,
  },
});

export default v_cdb169;

