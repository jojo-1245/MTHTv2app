import v_a3453e, { v_5ab095 } from 'bapkr';
import { v_472849, v_3094a2, v_19b633 } from 'rcmrninabrnb';
import { v_772971 } from 'jmpfvteuuztnp';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_1bfbd0, v_843035, v_9b1a04, v_34d45f } from '../../constants';
import { v_729608, v_cb41de, v_570c34, v_e775af } from '../../components';
import type { v_8ad91b } from '../../navigation';
import { v_a0daa8 } from '../../navigation';

type Props = v_432191<v_8ad91b, 'MyInfoEmailAuth'>;

const MyInfoEmailAuthScreen: v_a3453e.FC<Props> = () => {
  const { t: v_8d41d7 } = v_772971();
  const { goBack: v_c7ac57, navigate: v_9b57fc } = v_a0daa8();
  const [v_e0c7e8, v_fedf34] = v_5ab095('');
  const [v_a71df8, v_b876f0] = v_5ab095(false);
  const [v_41ff46, v_2d6b5b] = v_5ab095(false);

  const v_1d0f03 = (v_3b402b): boolean => {
    const v_9a3638 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return v_9a3638.test(v_3b402b);
  };

  const v_a64837 = (v_3b402b) => {
    v_fedf34(v_3b402b);
    if (v_3b402b.length > 0) {
      const v_d065ee = v_1d0f03(v_3b402b);
      v_b876f0(v_d065ee);
      v_2d6b5b(true);
    } else {
      v_2d6b5b(false);
    }
  };

  const v_2de427 = () => {
    if (!v_a71df8) {
      return;
    }
    v_9b57fc('EmailVerification', { email: v_e0c7e8.trim(), redirectTo: 'MyInfoEdit' });
  };

  return (
    <View style={v_d81136.container}>
      <Header title={v_8d41d7('my_info_email_auth.title')} showBackButton onBackPress={v_c7ac57} />
      <SafeScrollView style={v_d81136.scrollView} contentContainerStyle={v_d81136.content}>
        <View style={v_d81136.form}>
          <View style={v_d81136.inputContainer}>
            <TextField
              label={v_8d41d7('my_info_email_auth.email_label')}
              placeholder={v_8d41d7('my_info_email_auth.email_placeholder')}
              keyboardType="email-address"
              autoCapitalize="none"
              value={v_e0c7e8}
              onChangeText={v_a64837}
            />
            {v_41ff46 && (
              <Text
                style={[
                  v_d81136.validationText,
                  v_a71df8 ? v_d81136.validationSuccess : v_d81136.validationError,
                ]}
              >
                {v_a71df8 ? v_8d41d7('my_info_email_auth.email_valid') : v_8d41d7('my_info_email_auth.email_invalid')}
              </Text>
            )}
          </View>
          <PrimaryButton
            title={v_8d41d7('my_info_email_auth.send_code_button')}
            onPress={v_2de427}
            disabled={!v_a71df8}
            style={!v_a71df8 && v_d81136.buttonDisabled}
          />
        </View>
      </SafeScrollView>
    </View>
  );
};

const v_d81136 = v_472849.create({
  container: {
    flex: 1,
    backgroundColor: v_1bfbd0.background,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: v_9b1a04.large,
    alignItems: 'center',
  },
  form: {
    width: '100%',
    maxWidth: 780,
    gap: v_9b1a04.medium,
  },
  inputContainer: {
    marginBottom: v_9b1a04.small,
  },
  validationText: {
    marginTop: v_34d45f.validationTop,
    fontSize: 12,
    fontFamily: v_843035.medium,
  },
  validationSuccess: {
    color: '#007AFF',
  },
  validationError: {
    color: v_1bfbd0.error,
  },
  buttonDisabled: {
    opacity: 0.3,
  },
});

export default v_dec378;
