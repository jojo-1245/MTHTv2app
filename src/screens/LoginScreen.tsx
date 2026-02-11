import v_a3453e, { v_c4deb2, v_5ab095 } from 'bapkr';
import {
  v_39a996,
  v_0e1f26,
  v_e767d1,
  v_326be8,
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
  v_570c34,
  v_e775af,
} from '../components';
import { v_25515d } from 'zvyjokvuouwvifyzks';
import type { v_8ad91b } from '../navigation';
import { v_772971 } from 'jmpfvteuuztnp';
import { v_67ec53, v_d41982 } from '../services';

type Props = v_432191<v_8ad91b, 'Login'>;

const LoginScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d }) => {
  const { t: v_8d41d7 } = v_772971();
  const [v_e0c7e8, v_fedf34] = v_5ab095('');
  const [v_adc076, v_52b279] = v_5ab095('');
  const [v_2129ec, v_874dfe] = v_5ab095(true);
  const [v_cd31a8, v_deef62] = v_5ab095(false);
  const [v_ac3ab7, v_028502] = v_5ab095(false);
  const [v_153a89, v_879b56] = v_5ab095({
    visible: false,
    title: '',
    message: '',
  });

  v_c4deb2(() => {
    const v_219084 = async () => {
      try {
        const v_39de0e = await v_e84827.getItem(v_624bd2.savedEmail);
        if (v_39de0e) {
          v_fedf34(v_39de0e);
        }
      } catch (v_5e9bfe) {
        console.warn('이메일 정보를 불러오지 못했습니다:', v_5e9bfe);
      }
    };

    v_219084();
  }, []);

  v_c4deb2(() => {
    const v_b55c88 = v_0e1f26.addListener(
      v_326be8.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      () => v_028502(true),
    );
    const v_88ec6a = v_0e1f26.addListener(
      v_326be8.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => v_028502(false),
    );

    return () => {
      v_b55c88.remove();
      v_88ec6a.remove();
    };
  }, []);

  const v_1d0f03 = (v_3b402b) => {
    const v_9a3638 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return v_9a3638.test(v_3b402b);
  };

  const v_6ca26b = () => {
    v_c65f5d.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  const v_889fad = (v_9f1622, v_a8cd21) => {
    v_879b56({
      visible: true,
      title: v_9f1622,
      message: v_a8cd21,
    });
  };

  const v_34f542 = () => {
    v_879b56({
      visible: false,
      title: '',
      message: '',
    });
  };

  const v_ec4736 = async () => {

    v_c65f5d.navigate('MetaHome');
  };

  const v_2c36a1 = () => {

    console.log('카카오 로그인');
    v_c65f5d.navigate('MetaHome');
  };

  const v_40f9f9 = () => {

    console.log('네이버 로그인');
    v_c65f5d.navigate('MetaHome');
  };

  const v_6dd38d = () => {

    console.log('구글 로그인');
    v_c65f5d.navigate('MetaHome');
  };

  return (
    <>
      <View style={v_d81136.screen}>
        <Header
          showBackButton
          title={v_8d41d7('common.login')}
          onBackPress={v_6ca26b}
          containerStyle={v_d81136.flatHeader}
        />
        <SafeScrollView
          contentContainerStyle={v_d81136.content}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          autoAdjustKeyboardPadding={true}
        >
          <View style={v_d81136.inner}>
            <View style={v_d81136.form}>
              <TextField
                label={v_8d41d7('login.email_label')}
                placeholder={v_8d41d7('login.email_placeholder')}
                keyboardType="email-address"
                autoCapitalize="none"
                value={v_e0c7e8}
                onChangeText={v_fedf34}
                editable={!v_cd31a8}
              />
              <PasswordField
                label={v_8d41d7('login.password_label')}
                placeholder={v_8d41d7('login.password_placeholder')}
                value={v_adc076}
                onChangeText={v_52b279}
                editable={!v_cd31a8}
              />
              <FormCheckbox
                label={v_8d41d7('login.keep_logged_in')}
                value={v_2129ec}
                onChange={v_874dfe}
              />
              <TouchableOpacity
                style={v_d81136.linkButton}
                onPress={() => v_c65f5d.navigate('ForgotPassword')}
              >
                <Text style={v_d81136.linkText}>{v_8d41d7('login.forgot_password')}</Text>
              </TouchableOpacity>
              <View style={v_d81136.buttonWrapper}>
                <GradientButton
                  title={v_cd31a8 ? v_8d41d7('login.logging_in') : v_8d41d7('common.login')}
                  onPress={v_ec4736}
                  disabled={v_cd31a8}
                />
                {v_cd31a8 && (
                  <ActivityIndicator
                    size="small"
                    color={v_1bfbd0.buttonPrimary}
                    style={v_d81136.loadingIndicator}
                  />
                )}
              </View>

              <View style={v_d81136.socialLoginSection}>
                <View style={v_d81136.socialDivider}>
                  <View style={v_d81136.dividerLine} />
                  <Text style={v_d81136.dividerText}>또는</Text>
                  <View style={v_d81136.dividerLine} />
                </View>

                <View style={v_d81136.socialButtons}>
                  <TouchableOpacity
                    style={[v_d81136.socialButton, v_d81136.kakaoButton]}
                    onPress={v_2c36a1}
                    disabled={v_cd31a8}
                    activeOpacity={0.85}
                  >
                    <View style={v_d81136.socialIconWrapper}>
                      <Ionicons name="chatbubble" size={20} color="#000000" />
                    </View>
                    <Text style={v_d81136.kakaoButtonText}>{v_8d41d7('login.kakao_login')}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[v_d81136.socialButton, v_d81136.naverButton]}
                    onPress={v_40f9f9}
                    disabled={v_cd31a8}
                    activeOpacity={0.85}
                  >
                    <View style={v_d81136.socialIconWrapper}>
                      <View style={v_d81136.naverIconContainer}>
                        <Text style={v_d81136.naverIconText}>N</Text>
                      </View>
                    </View>
                    <Text style={v_d81136.naverButtonText}>{v_8d41d7('login.naver_login')}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[v_d81136.socialButton, v_d81136.googleButton]}
                    onPress={v_6dd38d}
                    disabled={v_cd31a8}
                    activeOpacity={0.85}
                  >
                    <View style={v_d81136.socialIconWrapper}>
                      <Ionicons name="logo-google" size={20} color="#4285F4" />
                    </View>
                    <Text style={v_d81136.googleButtonText}>{v_8d41d7('login.google_login')}</Text>
                  </TouchableOpacity>
                </View>
              </View>
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
  flatHeader: {
    backgroundColor: 'transparent',
    shadowOpacity: 0,
    elevation: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingVertical: v_9b1a04.medium,
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: v_9b1a04.large,
    paddingVertical: 48,
  },
  inner: {
    width: '100%',
    maxWidth: 780,
    alignItems: 'center',
  },
  form: {
    width: '100%',
    gap: v_9b1a04.medium,
  },
  buttonWrapper: {
  },
  loadingIndicator: {
    marginTop: v_9b1a04.small / 2,
    alignSelf: 'center',
  },
  linkButton: {
    alignSelf: 'flex-end',
  },
  linkText: {
    fontSize: 13,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
  },
  socialLoginSection: {
    width: '100%',
    gap: v_9b1a04.medium,
    paddingTop: v_9b1a04.medium,
  },
  socialDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: v_9b1a04.small,
    marginTop: v_9b1a04.small,
    marginBottom: v_9b1a04.medium,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: v_1bfbd0.border,
  },
  dividerText: {
    fontSize: 13,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.secondaryText,
  },
  socialButtons: {
    width: '100%',
    gap: v_9b1a04.small,
  },
  socialButton: {
    width: '100%',
    minHeight: 56,
    paddingHorizontal: v_9b1a04.large,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  socialIconWrapper: {
    marginRight: v_9b1a04.small,
    alignItems: 'center',
    justifyContent: 'center',
  },
  naverIconContainer: {
    width: 20,
    height: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  naverIconText: {
    fontSize: 14,
    fontFamily: v_843035.bold,
    color: '#03C75A',
    fontWeight: 'bold',
  },
  kakaoButton: {
    backgroundColor: '#FEE500',
    borderColor: '#FEE500',
  },
  kakaoButtonText: {
    fontSize: 14,
    fontFamily: v_843035.medium,
    color: '#000000',
  },
  naverButton: {
    backgroundColor: '#03C75A',
    borderColor: '#03C75A',
  },
  naverButtonText: {
    fontSize: 14,
    fontFamily: v_843035.medium,
    color: '#FFFFFF',
  },
  googleButton: {
    backgroundColor: v_1bfbd0.background,
    borderColor: v_1bfbd0.border,
  },
  googleButtonText: {
    fontSize: 14,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
  },
});

export default v_f4f851;

