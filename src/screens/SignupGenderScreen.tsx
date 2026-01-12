import v_a3453e, { v_5ab095 } from 'bapkr';
import {
  v_472849,
  v_19b633,
  v_4623af,
  v_3094a2,
} from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_dec439 } from 'zvyjokvuouwvifyzks';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';
import type { v_8ad91b } from '../navigation';
import { v_729608, v_cb41de, v_570c34 } from '../components';

type Props = v_432191<v_8ad91b, 'SignupGender'>;

type Gender = 'male' | 'female';

const SignupGenderScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d }) => {
  const [v_2610e9, v_12be53] = v_5ab095<Gender | null>(null);

  const v_420661 = () => {
    if (!v_2610e9) {
      return;
    }

    v_c65f5d.navigate('SignupReferral');
  };

  return (
    <View style={v_d81136.screen}>
      <Header
        title=""
        showBackButton
        onBackPress={() => v_c65f5d.goBack()}
        containerStyle={v_d81136.header}
      />
      <SafeScrollView
        contentContainerStyle={v_d81136.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={v_d81136.container}>
          {}
          <Text style={v_d81136.stepText}>5/6</Text>

          {}
          <Text style={v_d81136.title}>
            성별을 알려주세요.
          </Text>

          {}
          <Text style={v_d81136.subtitle}>
            성별에 따라 분석 데이터가 다를 수 있어요
          </Text>

          {}
          <View style={v_d81136.genderContainer}>
            {}
            <TouchableOpacity
              style={[
                v_d81136.genderCard,
                v_2610e9 === 'male' && v_d81136.genderCardSelected,
                v_2610e9 === 'male' && v_d81136.genderCardMale,
              ]}
              onPress={() => v_12be53('male')}
              activeOpacity={0.7}
              accessibilityRole="button"
              accessibilityLabel="남성 선택"
              accessibilityState={{ selected: v_2610e9 === 'male' }}
            >
              <View
                style={[
                  v_d81136.iconContainer,
                  v_2610e9 === 'male' && v_d81136.iconContainerMale,
                ]}
              >
                <Feather
                  name="user"
                  size={48}
                  color={v_2610e9 === 'male' ? '#007AFF' : v_1bfbd0.text}
                />
              </View>
              <Text
                style={[
                  v_d81136.genderText,
                  v_2610e9 === 'male' && v_d81136.genderTextSelected,
                ]}
              >
                남성
              </Text>
            </TouchableOpacity>

            {}
            <TouchableOpacity
              style={[
                v_d81136.genderCard,
                v_2610e9 === 'female' && v_d81136.genderCardSelected,
                v_2610e9 === 'female' && v_d81136.genderCardFemale,
              ]}
              onPress={() => v_12be53('female')}
              activeOpacity={0.7}
              accessibilityRole="button"
              accessibilityLabel="여성 선택"
              accessibilityState={{ selected: v_2610e9 === 'female' }}
            >
              <View
                style={[
                  v_d81136.iconContainer,
                  v_2610e9 === 'female' && v_d81136.iconContainerFemale,
                ]}
              >
                <Feather
                  name="user"
                  size={48}
                  color={v_2610e9 === 'female' ? '#FF3B30' : v_1bfbd0.text}
                />
              </View>
              <Text
                style={[
                  v_d81136.genderText,
                  v_2610e9 === 'female' && v_d81136.genderTextSelected,
                ]}
              >
                여성
              </Text>
            </TouchableOpacity>
          </View>

          {}
          <View style={v_d81136.buttonContainer}>
            <PrimaryButton
              title="다음"
              onPress={v_420661}
              disabled={!v_2610e9}
              style={!v_2610e9 && v_d81136.buttonDisabled}
            />
          </View>
        </View>
      </SafeScrollView>
    </View>
  );
};

const v_d81136 = v_472849.create({
  screen: {
    flex: 1,
    backgroundColor: v_1bfbd0.background,
  },
  header: {
    backgroundColor: 'transparent',
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: v_9b1a04.large,
    paddingTop: 32,
  },
  container: {
    width: '100%',
    maxWidth: 780,
    alignSelf: 'center',
  },
  stepText: {
    fontSize: 18,
    fontFamily: v_843035.medium,
    color: 'rgba(94, 98, 172, 0.18)',
    textAlign: 'right',
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
    lineHeight: 32,
    letterSpacing: -0.24,
    textTransform: 'uppercase',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: v_843035.semibold,
    color: '#9B9B9B',
    lineHeight: 24,
    letterSpacing: -0.16,
    marginBottom: 48,
  },
  genderContainer: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 32,
  },
  genderCard: {
    flex: 1,
    borderWidth: 2,
    borderColor: v_1bfbd0.border,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: v_1bfbd0.background,
    minHeight: 180,
  },
  genderCardSelected: {
    borderWidth: 2,
  },
  genderCardMale: {
    borderColor: '#007AFF',
  },
  genderCardFemale: {
    borderColor: '#FF3B30',
  },
  iconContainer: {
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainerMale: {

  },
  iconContainerFemale: {

  },
  genderText: {
    fontSize: 18,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
    lineHeight: 24,
  },
  genderTextSelected: {

  },
  buttonContainer: {
    marginTop: 'auto',
    paddingBottom: 32,
  },
  buttonDisabled: {
    opacity: 0.3,
  },
});

export default v_055bf6;

