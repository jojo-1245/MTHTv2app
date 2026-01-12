import v_a3453e, { v_5ab095 } from 'bapkr';
import {
    v_472849,
    v_19b633,
    v_3094a2,
} from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_1bfbd0, v_a61db3, v_843035, v_9b1a04, v_34d45f } from '../constants';
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
    buttonContainer: v_a61db3.buttonContainer,
    buttonDisabled: {
        opacity: 0.3,
    },
});

export default v_91bfb7;

