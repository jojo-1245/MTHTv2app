import v_a3453e, { v_5ab095 } from 'bapkr';
import {
    v_700696,
    v_aa7413,
    v_122070,
    v_472849,
    v_19b633,
    v_4623af,
    v_3094a2,
} from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../../constants';
import type { v_8ad91b } from '../../navigation';
import { v_cb41de } from '../../components';
import { v_dec439 } from 'zvyjokvuouwvifyzks';

type Props = v_432191<v_8ad91b, 'SignupTerms'>;

interface TermItem {
    id: string;
    label: string;
    required: boolean;
    checked: boolean;
}

const { height: v_28d8d8 } = v_700696.get('window');

const SignupTermsScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d }) => {
    const [v_7f68e5, v_64ed4a] = v_5ab095(true);
    const [v_a142f4, v_51237d] = v_5ab095<TermItem[]>([
        { id: 'age', label: '만 14세 이상입니다.', required: true, checked: false },
        { id: 'service', label: '서비스 이용약관 동의', required: true, checked: false },
        { id: 'privacy', label: '개인정보 처리방침 동의', required: true, checked: false },
        { id: 'sensitive', label: '민감정보 수집 및 이용동의', required: true, checked: false },
        { id: 'marketing', label: '(선택) 마케팅 수신 동의', required: false, checked: false },
    ]);

    const v_d91398 = v_a142f4.every((v_ebaa25) => v_ebaa25.checked);
    const v_be3c19 = v_a142f4.filter((v_8d41d7) => v_8d41d7.required).every((v_ebaa25) => v_ebaa25.checked);

    const v_2400f1 = () => {
        const v_ef3163 = !v_d91398;
        v_51237d(v_a142f4.map((v_ebaa25) => ({ ...v_ebaa25, checked: v_ef3163 })));
    };

    const v_e1b2be = (v_389afb) => {
        v_51237d(
            v_a142f4.map((v_ebaa25) => (v_ebaa25.id === v_389afb ? { ...v_ebaa25, checked: !v_ebaa25.checked } : v_ebaa25)),
        );
    };

    const v_420661 = () => {
        if (!v_be3c19) {
            return;
        }

        v_64ed4a(false);

        setTimeout(() => {
            v_c65f5d.navigate('SignupEmail');
        }, 300);
    };

    const v_7f2e65 = () => {
        v_64ed4a(false);
        setTimeout(() => {
            v_c65f5d.goBack();
        }, 300);
    };

    return (
        <Modal
            visible={v_7f68e5}
            transparent
            animationType="slide"
            onRequestClose={v_7f2e65}
        >
            <View style={v_d81136.overlay}>
                <View style={v_d81136.modal}>
                    <View style={v_d81136.header}>
                        <Text style={v_d81136.title}>약관에 동의해주세요</Text>
                        <Text style={v_d81136.subtitle}>
                            개인정보와 서비스 이용권리{'\n'}잘 지켜드릴게요.
                        </Text>
                    </View>

                    <View style={v_d81136.contentWrapper}>
                        <ScrollView
                            style={v_d81136.scrollView}
                            contentContainerStyle={v_d81136.scrollContent}
                            showsVerticalScrollIndicator={false}
                            nestedScrollEnabled={true}
                        >
                            {}
                            <View style={v_d81136.allAgreeSection}>
                                <TouchableOpacity
                                    style={v_d81136.allAgreeRow}
                                    onPress={v_2400f1}
                                    activeOpacity={0.7}
                                    accessibilityRole="checkbox"
                                    accessibilityLabel="모든 약관에 동의"
                                    accessibilityState={{ checked: v_d91398 }}
                                >
                                    <View style={[v_d81136.checkboxLarge, v_d91398 && v_d81136.checkboxChecked]}>
                                        {v_d91398 && <Feather name="check" size={18} color={v_1bfbd0.background} />}
                                    </View>
                                    <Text style={v_d81136.allAgreeText}>모두동의</Text>
                                </TouchableOpacity>
                                <Text style={v_d81136.allAgreeSubtext}>
                                    서비스 이용을 위해 아래 약관에 모두 동의합니다.
                                </Text>
                            </View>

                            <View style={v_d81136.divider} />

                            {}
                            {v_a142f4.map((v_ebaa25) => (
                                <TouchableOpacity
                                    key={v_ebaa25.id}
                                    style={v_d81136.termRow}
                                    onPress={() => v_e1b2be(v_ebaa25.id)}
                                    activeOpacity={0.7}
                                    accessibilityRole="checkbox"
                                    accessibilityLabel={`${v_ebaa25.required ? '(필수)' : '(선택)'} ${v_ebaa25.label}`}
                                    accessibilityState={{ checked: v_ebaa25.checked }}
                                >
                                    <View style={[v_d81136.checkboxSmall, v_ebaa25.checked && v_d81136.checkboxChecked]}>
                                        {v_ebaa25.checked && <Feather name="check" size={14} color={v_1bfbd0.background} />}
                                    </View>
                                    <Text style={v_d81136.termText}>
                                        {v_ebaa25.required && '(필수) '}
                                        {v_ebaa25.label}
                                    </Text>
                                    <TouchableOpacity
                                        onPress={(v_9e86fd) => {
                                            v_9e86fd.stopPropagation();

                                            v_c65f5d.navigate('ClauseDetail', {
                                                clauseType: v_ebaa25.id === 'service' ? 'terms' : 'privacy',
                                            });
                                        }}
                                        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                                    >
                                        <Text style={v_d81136.viewText}>보기</Text>
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>

                    <View style={v_d81136.footer}>
                        <PrimaryButton
                            title="다음"
                            onPress={v_420661}
                            disabled={!v_be3c19}
                            style={!v_be3c19 && v_d81136.buttonDisabled}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const v_d81136 = v_472849.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'flex-end',
    },
    modal: {
        backgroundColor: v_1bfbd0.background,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 21,
        paddingTop: 32,
        paddingBottom: 40,
        height: v_28d8d8 * 0.85,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    header: {
        marginBottom: 24,
        paddingHorizontal: 0,
        flexShrink: 0,
    },
    title: {
        fontSize: 24,
        fontFamily: v_843035.bold,
        color: v_1bfbd0.text,
        marginBottom: 8,
        lineHeight: 32,
        letterSpacing: -0.24,
        textTransform: 'uppercase',
    },
    subtitle: {
        fontSize: 16,
        fontFamily: v_843035.semibold,
        color: '#9B9B9B',
        lineHeight: 24,
        letterSpacing: -0.16,
    },
    contentWrapper: {
        flex: 1,
        minHeight: 200,
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: 16,
        flexGrow: 1,
    },
    allAgreeSection: {
        marginBottom: 16,
    },
    allAgreeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    checkboxLarge: {
        width: 30,
        height: 30,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: v_1bfbd0.border,
        backgroundColor: v_1bfbd0.background,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    checkboxSmall: {
        width: 24,
        height: 24,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: v_1bfbd0.border,
        backgroundColor: v_1bfbd0.background,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    checkboxChecked: {
        backgroundColor: v_1bfbd0.buttonPrimary,
        borderColor: v_1bfbd0.buttonPrimary,
    },
    allAgreeText: {
        fontSize: 18,
        fontFamily: v_843035.semibold,
        color: v_1bfbd0.text,
        lineHeight: 24,
        letterSpacing: -0.18,
    },
    allAgreeSubtext: {
        fontSize: 13,
        fontFamily: v_843035.regular,
        color: '#9B9B9B',
        lineHeight: 20,
        letterSpacing: -0.13,
        marginLeft: 42,
    },
    divider: {
        height: 1,
        backgroundColor: '#E3E9ED',
        marginVertical: 16,
    },
    termRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 18,
        paddingRight: 8,
    },
    termText: {
        flex: 1,
        fontSize: 13,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.text,
        lineHeight: 20,
        letterSpacing: -0.13,
        marginRight: 8,
    },
    viewText: {
        fontSize: 13,
        fontFamily: v_843035.medium,
        color: '#9B9B9B',
        lineHeight: 20,
        letterSpacing: -0.13,
    },
    footer: {
        marginTop: 24,
        paddingTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#F5F5F5',
        flexShrink: 0,
    },
    buttonDisabled: {
        opacity: 0.3,
    },
});

export default v_937ab8;

