import v_a3453e, { v_5ab095, v_c4deb2 } from 'bapkr';
import { v_472849, v_3094a2, v_19b633, v_03e392 } from 'rcmrninabrnb';
import { v_772971 } from 'jmpfvteuuztnp';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_1bfbd0, v_843035, v_9b1a04, v_34d45f } from '../../constants';
import { v_729608, v_cb41de, v_570c34, v_e775af, v_1c1837 } from '../../components';
import type { v_8ad91b } from '../../navigation';
import { v_a0daa8 } from '../../navigation';
import { v_c1a440 } from '../../services/signupApi';
import { v_7ef860 } from '../../services/authApi';

type Props = v_432191<v_8ad91b, 'MyInfoEmailAuth'>;

const v_b5bfb4 = (v_3b402b): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v_3b402b);

const MyInfoEmailAuthScreen: v_a3453e.FC<Props> = () => {
  const { t: v_8d41d7 } = v_772971();
  const { goBack: v_c7ac57, navigate: v_9b57fc } = v_a0daa8();
  const [v_da7931, v_7cfcb8] = v_5ab095<string | null>(null);
  const [v_e0c7e8, v_fedf34] = v_5ab095('');
  const [v_a71df8, v_b876f0] = v_5ab095(false);
  const [v_41ff46, v_2d6b5b] = v_5ab095(false);
  const [v_07589d, v_9fbff7] = v_5ab095(false);

  v_c4deb2(() => {
    let v_2008a4 = false;
    v_7ef860()
      .then((v_727031) => {
        if (!v_2008a4 && v_727031?.email) {
          const v_f4fb5e = v_727031.email.trim().toLowerCase();
          v_7cfcb8(v_f4fb5e);
          v_fedf34(v_f4fb5e);
          v_2d6b5b(true);
        }
      })
      .catch(() => {
        if (!v_2008a4) v_7cfcb8(null);
      });
    return () => {
      v_2008a4 = true;
    };
  }, []);

  const v_a64837 = (v_3b402b) => {
    v_fedf34(v_3b402b);
    if (v_3b402b.length > 0) {
      const v_2f361a = v_3b402b.trim().toLowerCase();
      const v_7db545 = v_b5bfb4(v_2f361a);
      const v_a63110 = !!v_da7931 && v_2f361a === v_da7931;
      v_b876f0(v_7db545 && v_a63110);
      v_2d6b5b(true);
    } else {
      v_2d6b5b(false);
    }
  };

  v_c4deb2(() => {
    if (!v_41ff46 || v_e0c7e8.length === 0) return;
    const v_2f361a = v_e0c7e8.trim().toLowerCase();
    const v_7db545 = v_b5bfb4(v_2f361a);
    const v_a63110 = !!v_da7931 && v_2f361a === v_da7931;
    v_b876f0(v_7db545 && v_a63110);
  }, [v_da7931, v_e0c7e8, v_41ff46]);

  const v_2de427 = async () => {
    if (!v_a71df8) return;
    const v_8f37ac = v_e0c7e8.trim().toLowerCase();
    v_9fbff7(true);
    try {
      await v_c1a440({ email: v_8f37ac, purpose: 'profile_change' });
      v_9b57fc('EmailVerification', { email: v_8f37ac, purpose: 'profile_change', redirectTo: 'MyInfoEdit' });
    } catch (v_49263d) {
      const v_a8cd21 = v_49263d instanceof Error ? v_49263d.message : v_8d41d7('my_info_email_auth.send_code_error');
      v_03e392.alert(v_8d41d7('common.error'), v_a8cd21);
    } finally {
      v_9fbff7(false);
    }
  };

  return (
    <MainLayout activeKey="myinfo">
      <View style={v_d81136.container}>
        <Header title={v_8d41d7('my_info_email_auth.title')} showBackButton onBackPress={v_c7ac57} />
        <SafeScrollView style={v_d81136.scrollView} contentContainerStyle={v_d81136.content} showBottomBackground={false} disableBottomPadding={true}>
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
                  {(() => {
                    const v_2f361a = v_e0c7e8.trim().toLowerCase();
                    const v_7db545 = v_b5bfb4(v_2f361a);
                    if (!v_7db545) return v_8d41d7('my_info_email_auth.email_invalid');
                    const v_a63110 = !!v_da7931 && v_2f361a === v_da7931;
                    return v_a63110
                      ? v_8d41d7('my_info_email_auth.email_match')
                      : v_8d41d7('my_info_email_auth.email_not_match');
                  })()}
                </Text>
              )}
            </View>
            <PrimaryButton
              title={v_07589d ? v_8d41d7('my_info_email_auth.sending') : v_8d41d7('my_info_email_auth.send_code_button')}
              onPress={v_2de427}
              disabled={!v_a71df8 || v_07589d}
            />
          </View>
        </SafeScrollView>
      </View>
    </MainLayout>
  );
};

const v_d81136 = v_472849.create({
  container: {
    flex: 1,
    backgroundColor: v_1bfbd0.background,
  },
  scrollView: {
    flex: 1,
    backgroundColor: v_1bfbd0.background,
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
});

export default v_dec378;
