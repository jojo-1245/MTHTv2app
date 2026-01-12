import v_a3453e, { v_5ab095 } from 'bapkr';
import {
    v_472849,
    v_19b633,
    v_3094a2,
} from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';
import type { v_8ad91b } from '../navigation';
import { v_729608, v_cb41de, v_570c34, v_e775af } from '../components';

type Props = v_432191<v_8ad91b, 'SignupName'>;

const SignupNameScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d }) => {
    const [v_1833e7, v_318f24] = v_5ab095('');

    const v_0ced7e = (v_3b402b) => {
        v_318f24(v_3b402b);
    };

    const v_420661 = () => {
        if (!v_1833e7.trim()) {
            return;
        }

        v_c65f5d.navigate('SignupBirthday', { name: v_1833e7.trim() });
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
                    <Text style={v_d81136.stepText}>3/6</Text>

                    {}
                    <Text style={v_d81136.title}>
                        환영합니다!{'\n'}
                        이름을 입력해 주세요
                    </Text>

                    {}
                    <Text style={v_d81136.subtitle}>

                    </Text>

                    {}
                    <View style={v_d81136.inputContainer}>
                        <TextField
                            placeholder="이름을 입력해주세요"
                            value={v_1833e7}
                            onChangeText={v_0ced7e}
                            style={v_d81136.input}
                            autoCapitalize="words"
                            inputWrapperStyle={v_d81136.inputWrapper}
                        />
                    </View>

                    {}
                    <View style={v_d81136.buttonContainer}>
                        <PrimaryButton
                            title="다음"
                            onPress={v_420661}
                            disabled={!v_1833e7.trim()}
                            style={!v_1833e7.trim() && v_d81136.buttonDisabled}
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
        minHeight: '100%',
    },
    container: {
        width: '100%',
        maxWidth: 780,
        alignSelf: 'center',
        flex: 1,
        justifyContent: 'space-between',
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
    inputContainer: {
        marginBottom: 32,
    },
    inputWrapper: {
        borderWidth: 0,
        borderColor: 'transparent',
        paddingHorizontal: 0,
    },
    input: {
        fontSize: 20,
        fontFamily: v_843035.medium,
        color: v_1bfbd0.text,
        lineHeight: 36,
        letterSpacing: -0.2,
    },
    buttonContainer: {
        marginTop: 'auto',
        paddingBottom: 32,
    },
    buttonDisabled: {
        opacity: 0.3,
    },
});

export default v_91bfb7;

