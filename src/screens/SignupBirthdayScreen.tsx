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

type Props = v_432191<v_8ad91b, 'SignupBirthday'>;

const SignupBirthdayScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d, route: v_c7daf6 }) => {
    const v_1833e7 = v_c7daf6.params?.name || '';
    const [v_0eaaff, v_1bc832] = v_5ab095('');
    const [v_033a94, v_b48742] = v_5ab095('');
    const [v_087ffc, v_75e821] = v_5ab095('');

    const v_d6fe87 = v_0eaaff.length === 4 && v_033a94.length > 0 && v_087ffc.length > 0;

    const v_b270c1 = (v_3b402b) => {
        const v_e035c6 = v_3b402b.replace(/[^0-9]/g, '').slice(0, 4);
        v_1bc832(v_e035c6);
    };

    const v_b556d9 = (v_3b402b) => {
        const v_e035c6 = v_3b402b.replace(/[^0-9]/g, '');
        if (v_e035c6.length <= 2) {
            const v_a72113 = parseInt(v_e035c6, 10);
            if (v_e035c6 === '' || (v_a72113 >= 1 && v_a72113 <= 12)) {
                v_b48742(v_e035c6);
            }
        }
    };

    const v_2c819e = (v_3b402b) => {
        const v_e035c6 = v_3b402b.replace(/[^0-9]/g, '');
        if (v_e035c6.length <= 2) {
            const v_933529 = parseInt(v_e035c6, 10);
            if (v_e035c6 === '' || (v_933529 >= 1 && v_933529 <= 31)) {
                v_75e821(v_e035c6);
            }
        }
    };

    const v_420661 = () => {
        if (!v_d6fe87) {
            return;
        }

        v_c65f5d.navigate('SignupGender');
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
                    <Text style={v_d81136.stepText}>4/6</Text>

                    {}
                    <Text style={v_d81136.title}>
                        {v_1833e7 ? `${v_1833e7} 님의 생일을` : '생일을'}{'\n'}알려주세요.
                    </Text>

                    {}
                    <Text style={v_d81136.subtitle}>
                        입력하신 나이를 기준으로{'\n'}건강과 피부분석이 진행돼요
                    </Text>

                    {}
                    <View style={v_d81136.dateContainer}>
                        <View style={v_d81136.dateField}>
                            <TextField
                                placeholder="1990"
                                value={v_0eaaff}
                                onChangeText={v_b270c1}
                                keyboardType="number-pad"
                                maxLength={4}
                                style={v_d81136.dateInput}
                                inputWrapperStyle={v_d81136.dateInputWrapper}
                            />
                        </View>
                        <Text style={v_d81136.separator}>/</Text>
                        <View style={v_d81136.dateField}>
                            <TextField
                                placeholder="7"
                                value={v_033a94}
                                onChangeText={v_b556d9}
                                keyboardType="number-pad"
                                maxLength={2}
                                style={v_d81136.dateInput}
                                inputWrapperStyle={v_d81136.dateInputWrapper}
                            />
                        </View>
                        <Text style={v_d81136.separator}>/</Text>
                        <View style={v_d81136.dateField}>
                            <TextField
                                placeholder="25"
                                value={v_087ffc}
                                onChangeText={v_2c819e}
                                keyboardType="number-pad"
                                maxLength={2}
                                style={v_d81136.dateInput}
                                inputWrapperStyle={v_d81136.dateInputWrapper}
                            />
                        </View>
                    </View>

                    {}
                    <View style={v_d81136.buttonContainer}>
                        <PrimaryButton
                            title="다음"
                            onPress={v_420661}
                            disabled={!v_d6fe87}
                            style={!v_d6fe87 && v_d81136.buttonDisabled}
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
    subtitle: {
        fontSize: 16,
        fontFamily: v_843035.semibold,
        color: '#9B9B9B',
        lineHeight: 24,
        letterSpacing: -0.16,
        marginBottom: 48,
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 32,
        gap: 8,
    },
    dateField: {
        width: 100,
    },
    dateInputWrapper: {
        paddingVertical: 12,
        minHeight: 56,
        justifyContent: 'center',
        borderWidth: 0,
        borderColor: 'transparent',
    },
    dateInput: {
        fontSize: 24,
        fontFamily: v_843035.bold,
        color: v_1bfbd0.text,
        textAlign: 'center',
        paddingVertical: 0,
        lineHeight: 28,
        letterSpacing: -0.24,
    },
    separator: {
        fontSize: 24,
        fontFamily: v_843035.bold,
        color: v_1bfbd0.text,
        marginHorizontal: 8,
        lineHeight: 36,
    },
    buttonContainer: {
        marginTop: 'auto',
        paddingBottom: 32,
    },
    buttonDisabled: {
        opacity: 0.3,
    },
});

export default v_d7587d;

