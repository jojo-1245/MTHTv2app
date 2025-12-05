import v_a3453e, { v_5ab095 } from 'bapkr';
import { v_472849, v_3094a2 } from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_1bfbd0, v_9b1a04 } from '../../constants';
import { v_729608, v_cb41de, v_570c34, v_e775af, v_8e2768 } from '../../components';
import type { v_8ad91b } from '../../navigation';
import { v_a0daa8 } from '../../navigation';

type Props = v_432191<v_8ad91b, 'MyInfoEmailAuth'>;

const MyInfoEmailAuthScreen: v_a3453e.FC<Props> = () => {
  const { goBack: v_c7ac57, navigate: v_9b57fc } = v_a0daa8();
  const [v_e0c7e8, v_fedf34] = v_5ab095('');
  const [v_153a89, v_879b56] = v_5ab095({
    visible: false,
    title: '',
    message: '',
  });

  const v_2de427 = () => {
    if (!v_e0c7e8.trim()) {
      v_879b56({
        visible: true,
        title: '입력 오류',
        message: '이메일을 입력해주세요.',
      });
      return;
    }

    v_9b57fc('EmailVerification', { email: v_e0c7e8 });
  };

  return (
    <View style={v_d81136.container}>
      <Header title="Email Authentification" showBackButton onBackPress={v_c7ac57} />
      <SafeScrollView style={v_d81136.scrollView} contentContainerStyle={v_d81136.content}>
        <View style={v_d81136.form}>
          <TextField
            label="이메일"
            placeholder="oth-user@example.invalid"
            keyboardType="email-address"
            autoCapitalize="none"
            value={v_e0c7e8}
            onChangeText={v_fedf34}
          />
          <PrimaryButton title="인증 코드 전송" onPress={v_2de427} />
        </View>
      </SafeScrollView>
      <AlertModal
        visible={v_153a89.visible}
        title={v_153a89.title}
        message={v_153a89.message}
        onConfirm={() =>
          v_879b56((v_ba2215) => ({ ...v_ba2215, visible: false }))
        }
      />
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
});

export default v_dec378;
