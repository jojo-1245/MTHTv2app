import v_a3453e, { v_5ab095 } from 'bapkr';
import { v_472849, v_19b633, v_3094a2 } from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../../constants';
import { v_729608, v_cb41de, v_570c34, v_e775af } from '../../components';
import type { v_8ad91b } from '../../navigation';
import { v_a0daa8 } from '../../navigation';

type Props = v_432191<v_8ad91b, 'MyInfoEmailAuth'>;

const MyInfoEmailAuthScreen: v_a3453e.FC<Props> = () => {
  const { goBack: v_c7ac57 } = v_a0daa8();
  const [v_e0c7e8, v_fedf34] = v_5ab095('');
  const [v_c99bd2, v_537cbb] = v_5ab095('');
  const [v_944c73, v_ab524e] = v_5ab095(false);

  const v_2de427 = () => {
    if (!v_e0c7e8.trim()) {
      return;
    }

    v_ab524e(true);
  };

  const v_83b05b = () => {

    v_c7ac57();
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
            editable={!v_944c73}
          />
          {!v_944c73 ? (
            <PrimaryButton title="인증 코드 전송" onPress={v_2de427} />
          ) : (
            <>
              <TextField
                label="인증 코드"
                placeholder="인증 코드를 입력하세요"
                keyboardType="number-pad"
                value={v_c99bd2}
                onChangeText={v_537cbb}
              />
              <PrimaryButton title="인증하기" onPress={v_83b05b} />
            </>
          )}
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
});

export default v_dec378;

