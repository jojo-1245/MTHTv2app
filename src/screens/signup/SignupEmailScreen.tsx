import v_a3453e, { v_5ab095 } from 'bapkr';
import {
    v_472849,
    v_19b633,
    v_4623af,
    v_3094a2,
} from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_1bfbd0, v_a61db3, v_843035, v_9b1a04, v_34d45f } from '../../constants';
import type { v_8ad91b } from '../../navigation';
import { v_729608, v_cb41de, v_570c34, v_e775af } from '../../components';

type Props = v_432191<v_8ad91b, 'SignupEmail'>;

const SignupEmailScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d }) => {
    const [v_e0c7e8, v_fedf34] = v_5ab095('');
    const [v_a71df8, v_b876f0] = v_5ab095(false);
    const [v_41ff46, v_2d6b5b] = v_5ab095(false);

    const v_1d0f03 = (v_3b402b) => {
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

    const v_420661 = () => {
        if (!v_a71df8) {
            return;
        }
        v_c65f5d.navigate('EmailVerification', { email: v_e0c7e8 });
    };

    const v_6ca26b = () => {

        v_c65f5d.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        });
    };

    return (
        <View style={v_d81136.screen}>
            <Header
                title=""
                showBackButton
                onBackPress={v_6ca26b}
                containerStyle={v_d81136.header}
            />
            <SafeScrollView
                contentContainerStyle={v_d81136.content}
                autoAdjustKeyboardPadding={true}
                showsVerticalScrollIndicator={false}
            >
                <View style={v_d81136.container}>
                    {}
                    <Text style={v_d81136.stepText}>1/6</Text>

                    {}
                    <Text style={v_d81136.title}>
                        이메일을{'\n'}입력해 주세요.
                    </Text>

                    {}
                    <Text style={v_d81136.subtitle}>
                        로그인 ID는 이메일입니다.
                    </Text>

                    {}
                    <View style={v_d81136.inputContainer}>
                        <TextField
                            placeholder="이메일을 입력해주세요"
                            value={v_e0c7e8}
                            onChangeText={v_a64837}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            style={v_d81136.input}
                            inputWrapperStyle={v_d81136.inputWrapper}
                        />
                        {v_41ff46 && (
                            <Text
                                style={[
                                    v_d81136.validationText,
                                    v_a71df8 ? v_d81136.validationSuccess : v_d81136.validationError,
                                ]}
                            >
                                {v_a71df8 ? '사용가능한 이메일 입니다.' : '올바른 이메일 형식이 아닙니다.'}
                            </Text>
                        )}
                    </View>

                    {}
                    <View style={v_d81136.buttonContainer}>
                        <PrimaryButton
                            title="인증"
                            onPress={v_420661}
                            disabled={!v_a71df8}
                            style={!v_a71df8 && v_d81136.buttonDisabled}
                        />
                    </View>
                </View>
            </SafeScrollView>
        </View>
    );
};

const v_d81136 = v_472849.create({
    screen: v_a61db3.screen,
    header: {
        backgroundColor: 'transparent',
    },
    content: {
        ...v_a61db3.content,
        minHeight: '100%',
    },
    container: {
        ...v_a61db3.container,
        flex: 1,
        justifyContent: 'space-between',
    },
    stepText: v_a61db3.stepText,
    title: v_a61db3.title,
    subtitle: v_a61db3.subtitle,
    inputContainer: {
        marginBottom: v_34d45f.inputContainerBottom,
    },
    inputWrapper: {
        ...v_a61db3.inputWrapper,
        paddingHorizontal: 0,
    },
    input: v_a61db3.inputText,
    validationText: v_a61db3.validationText,
    validationSuccess: {
        color: '#007AFF',
    },
    validationError: {
        color: v_1bfbd0.error,
    },
    buttonContainer: v_a61db3.buttonContainer,
    buttonDisabled: {
        opacity: 0.3,
    },
});

export default v_c39920;

