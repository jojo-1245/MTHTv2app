import v_a3453e from 'bapkr';
import {
    v_cf9c33,
    v_472849,
    v_19b633,
    v_3094a2,
} from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';
import type { v_8ad91b } from '../navigation';
import { v_cb41de, v_570c34 } from '../components';

type Props = v_432191<v_8ad91b, 'SignupSuccess'>;

const v_634539 = require('../../assets/images/success_join_img.png');

const SignupSuccessScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d }) => {
    const v_182531 = () => {

        v_c65f5d.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        });
    };

    return (
        <View style={v_d81136.screen}>
            <SafeScrollView
                contentContainerStyle={v_d81136.content}
                showsVerticalScrollIndicator={false}
            >
                <View style={v_d81136.container}>
                    {}
                    <Text style={v_d81136.title}>
                        가입을 축하드립니다.
                    </Text>

                    {}
                    <View style={v_d81136.imageContainer}>
                        <Image
                            source={v_634539}
                            style={v_d81136.successImage}
                            resizeMode="contain"
                        />
                    </View>

                    {}
                    <View style={v_d81136.buttonContainer}>
                        <PrimaryButton
                            title="홈으로 가기"
                            onPress={v_182531}
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
    content: {
        flexGrow: 1,
        paddingHorizontal: v_9b1a04.large,
        paddingTop: 80,
    },
    container: {
        width: '100%',
        maxWidth: 780,
        alignSelf: 'center',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontFamily: v_843035.bold,
        color: v_1bfbd0.text,
        lineHeight: 32,
        letterSpacing: -0.24,
        textAlign: 'left',
        marginBottom: 48,
        marginTop: 42,
    },
    imageContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 48,
    },
    successImage: {
        width: '100%',
        height: '100%',
        maxHeight: 400,
    },
    buttonContainer: {
        width: '100%',
        paddingBottom: 32,
    },
});

export default v_2436b6;

