import v_a3453e, { v_5ab095 } from 'bapkr';
import {
    v_472849,
    v_19b633,
    v_3094a2,
} from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';
import type { v_8ad91b } from '../navigation';
import { v_729608, v_e2ca42, v_cb41de, v_570c34 } from '../components';

type Props = v_432191<v_8ad91b, 'SignupPassword'>;

const SignupPasswordScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d }) => {
    const [v_adc076, v_52b279] = v_5ab095('');
    const [v_a71df8, v_b876f0] = v_5ab095(false);
    const [v_41ff46, v_2d6b5b] = v_5ab095(false);

    const v_857dfe = (v_3b402b) => {

        const v_b947d5 = v_3b402b.length >= 8;
        const v_9dd411 = /[A-Z]/.test(v_3b402b);
        const v_1cf57e = /[a-z]/.test(v_3b402b);
        const v_5af9de = /\d/.test(v_3b402b);
        const v_a5927f = /[~`!@#$%^&*()_\-+={}\[\]|\\:;"'<>,.?/]/.test(v_3b402b);

        return v_b947d5 && v_9dd411 && v_1cf57e && v_5af9de && v_a5927f;
    };

    const v_57c91b = (v_3b402b) => {
        v_52b279(v_3b402b);
        if (v_3b402b.length > 0) {
            const v_d065ee = v_857dfe(v_3b402b);
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

        v_c65f5d.navigate('SignupName');
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
                autoAdjustKeyboardPadding={true}
                showsVerticalScrollIndicator={false}
            >
                <View style={v_d81136.container}>
                    {}
                    <Text style={v_d81136.stepText}>2/6</Text>

                    {}
                    <Text style={v_d81136.title}>
                        로그인에{'\n'}사용하실 비밀번호를 입력하세요.
                    </Text>

                    {}
                    <Text style={v_d81136.requirements}>
                        8자 이상 / 영문 대·소문자 / 숫자 / 특수문자 포함
                    </Text>

                    {}
                    <View style={v_d81136.inputContainer}>
                        <PasswordField
                            placeholder="비밀번호를 입력해주세요"
                            value={v_adc076}
                            onChangeText={v_57c91b}
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
                                {v_a71df8 ? '사용가능한 비밀번호입니다.' : '비밀번호 요구사항을 확인해주세요.'}
                            </Text>
                        )}
                    </View>

                    {}
                    <View style={v_d81136.buttonContainer}>
                        <PrimaryButton
                            title="다음"
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
    requirements: {
        fontSize: 16,
        fontFamily: v_843035.semibold,
        color: '#9B9B9B',
        lineHeight: 24,
        letterSpacing: -0.16,
        marginBottom: 48,
    },
    inputContainer: {
        marginBottom: 32,
    },
    inputWrapper: {
        borderWidth: 0,
        borderColor: 'transparent',
    },
    input: {
        fontSize: 20,
        fontFamily: v_843035.medium,
        color: '#9B9B9B',
        lineHeight: 36,
        letterSpacing: -0.2,
    },
    validationText: {
        fontSize: 11,
        fontFamily: v_843035.medium,
        lineHeight: 16,
        letterSpacing: -0.11,
        marginTop: 8,
    },
    validationSuccess: {
        color: '#007AFF',
    },
    validationError: {
        color: v_1bfbd0.error,
    },
    buttonContainer: {
        marginTop: 'auto',
        paddingBottom: 32,
    },
    buttonDisabled: {
        opacity: 0.3,
    },
});

export default v_d02ed0;

