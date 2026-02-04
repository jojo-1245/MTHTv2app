import v_a3453e, { v_5ab095 } from 'bapkr';
import {
    v_472849,
    v_19b633,
    v_3094a2,
    v_4623af,
    v_03e392,
    v_5f4661,
    v_cf9c33,
    v_7618c3,
} from 'rcmrninabrnb';
import { v_772971 } from 'jmpfvteuuztnp';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import * as v_fba5a0 from 'hfxxehldoiokdq';
import { v_1bfbd0, v_843035, v_9b1a04, v_ef658a } from '../../constants';
import { v_729608, v_570c34, v_556baf, v_1c1837, v_dd725b } from '../../components';
import type { v_8ad91b } from '../../navigation';
import { v_a0daa8 } from '../../navigation';

const v_be7143 = require('../../../assets/images/bg_gold.png');
const v_581451 = require('../../../assets/images/bg_silver.png');
const v_96cb41 = require('../../../assets/images/metahint_symbol_white.png');

type Props = v_432191<v_8ad91b, 'ReferralShare'>;

type GradeType = 'gold' | 'silver';

const v_d1ffaa = {
    gold: {
        primary: '#D4A754',
        secondary: '#F5E6B8',
        gradient: ['#E8C86B', '#D4A754', '#B8943F', '#D4A754'] as const,
        cardGradient: ['#F5E6B8', '#D4A754', '#B8943F', '#C49B4A'] as const,
        text: '#8B6914',
        badge: '#D4A754',
        badgeText: '#8B6914',
        badgeBg: '#FFF8E7',
    },
    silver: {
        primary: '#A8A8A8',
        secondary: '#E8E8E8',
        gradient: ['#D4D4D4', '#A8A8A8', '#8C8C8C', '#A8A8A8'] as const,
        cardGradient: ['#E8E8E8', '#C4C4C4', '#A8A8A8', '#B8B8B8'] as const,
        text: '#5A5A5A',
        badge: '#A8A8A8',
        badgeText: '#5A5A5A',
        badgeBg: '#F5F5F5',
    },
};

const ReferralShareScreen: v_a3453e.FC<Props> = () => {
    const { t: v_8d41d7 } = v_772971();
    const { goBack: v_c7ac57 } = v_a0daa8();

    const [v_7be0c6] = v_5ab095<GradeType>('gold'); 

    const v_92b6a6 = 'HTSTCAAFA6';
    const v_3ed1e9 = '2023. 02. 02';

    const v_f9dce7 = v_d1ffaa[v_7be0c6];
    const v_b32f09 = v_7be0c6 === 'gold' ? v_8d41d7('referral_share.grade_gold') : v_8d41d7('referral_share.grade_silver');
    const v_8faf23 = v_7be0c6 === 'gold' ? 'G' : 'S';

    const v_682edd = async () => {
        await v_fba5a0.setStringAsync(v_92b6a6);
        v_03e392.alert(v_8d41d7('referral_share.copy_success_title'), v_8d41d7('referral_share.copy_success_message'));
    };

    const v_316053 = async () => {
        try {
            await v_5f4661.share({
                message: v_8d41d7('referral_share.share_message', { code: v_92b6a6 }),
                title: v_8d41d7('referral_share.share_title'),
            });
        } catch (v_5e9bfe) {
            v_03e392.alert(v_8d41d7('common.error'), v_8d41d7('referral_share.share_error'));
        }
    };

    return (
        <MainLayout activeKey="myinfo">
            <SafeView style={v_d81136.container} showBottomBackground={false} >
                <Header
                    title={v_8d41d7('referral_share.title')}
                    showBackButton
                    onBackPress={v_c7ac57}
                />

                <SafeScrollView
                    style={v_d81136.scrollView}
                    contentContainerStyle={v_d81136.content}
                    showBottomBackground={false}
                    disableBottomPadding={true}
                    showsVerticalScrollIndicator={false}
                >
                    {}
                    <View style={v_d81136.congratsSection}>
                        <Text style={v_d81136.congratsTitle}>{v_8d41d7('referral_share.congrats_1')}</Text>
                        <Text style={v_d81136.congratsTitle}>{v_8d41d7('referral_share.congrats_2')}</Text>
                    </View>

                    {}
                    <View style={[v_d81136.gradeBadge, { backgroundColor: v_f9dce7.badgeBg }]}>
                        <View style={[v_d81136.gradeIconCircle, { backgroundColor: v_f9dce7.badge }]}>
                            <Text style={v_d81136.gradeIconText}>{v_8faf23}</Text>
                        </View>
                        <Text style={[v_d81136.gradeText, { color: v_f9dce7.badgeText }]}>{v_b32f09}</Text>
                    </View>

                    {}
                    <View style={v_d81136.cardContainer}>
                        <ImageBackground
                            source={v_7be0c6 === 'gold' ? v_be7143 : v_581451}
                            style={v_d81136.card}
                            imageStyle={v_d81136.cardImage}
                            resizeMode="cover"
                        >
                            {}
                            <View style={v_d81136.cardHeader}>
                                <View>
                                    <Text style={v_d81136.cardPinLabel}>No.{v_92b6a6}</Text>
                                    <Text style={v_d81136.cardLicenceText}>Licenced Code</Text>
                                </View>
                                <Image
                                    source={v_96cb41}
                                    style={v_d81136.cardSymbol}
                                    resizeMode="contain"
                                />
                            </View>

                            {}
                            <View style={v_d81136.cardFooter}>
                                <Text style={v_d81136.cardSinceText}>
                                    Since. {v_3ed1e9}
                                </Text>
                            </View>
                        </ImageBackground>
                    </View>

                    {}
                    <View style={v_d81136.spacer} />
                </SafeScrollView>

                {}
                <View style={v_d81136.bottomSection}>
                    {}
                    <View style={v_d81136.pinDisplayContainer}>
                        <View style={v_d81136.pinDisplay}>
                            <Text style={v_d81136.pinLabel}>{v_8d41d7('referral_share.pin_label')}</Text>
                            <Text style={v_d81136.pinValue}>{v_92b6a6}</Text>
                        </View>
                        <TouchableOpacity
                            style={v_d81136.copyButton}
                            onPress={v_682edd}
                            activeOpacity={0.7}
                        >
                            <Text style={[v_d81136.copyButtonText, { color: v_f9dce7.primary }]}>{v_8d41d7('referral_share.copy_button')}</Text>
                        </TouchableOpacity>
                    </View>

                    {}
                    <GradientButton
                        title={v_8d41d7('referral_share.kakao_share_button')}
                        onPress={v_316053}
                    />
                </View>
            </SafeView>
        </MainLayout>
    );
};

const v_d81136 = v_472849.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scrollView: {
        flexGrow: 1,
    },
    content: {
        paddingHorizontal: v_9b1a04.medium,
        paddingTop: v_9b1a04.xlarge,
        alignItems: 'center',

    },
    congratsSection: {
        alignItems: 'center',
        marginBottom: v_9b1a04.large,
    },
    congratsTitle: {
        fontSize: 24,
        fontFamily: v_843035.bold,
        color: v_1bfbd0.text,
        textAlign: 'center',
        lineHeight: 34,
    },
    gradeBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        gap: 8,
        marginBottom: v_9b1a04.xlarge,
    },
    gradeIconCircle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gradeIconText: {
        fontSize: 14,
        fontFamily: v_843035.bold,
        color: '#FFFFFF',
    },
    gradeText: {
        fontSize: v_ef658a.large,
        fontFamily: v_843035.semibold,
    },
    cardContainer: {
        width: '100%',
        maxWidth: 240,
        aspectRatio: 1.1,
        borderRadius: 16,
        overflow: 'hidden',

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 16,
        elevation: 10,
    },
    card: {
        flex: 1,
        padding: v_9b1a04.large,
        justifyContent: 'space-between',
    },
    cardImage: {
        borderRadius: 16,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    cardPinLabel: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.semibold,
        marginBottom: 4,
        color: '#FFFFFF',
    },
    cardLicenceText: {
        fontSize: v_ef658a.small,
        fontFamily: v_843035.regular,
        color: 'rgba(255, 255, 255, 0.8)',
    },
    cardSymbol: {
        width: 48,
        height: 48,
    },
    cardFooter: {
        alignItems: 'flex-end',
    },
    cardSinceText: {
        fontSize: v_ef658a.small,
        fontFamily: v_843035.medium,
        color: 'rgba(255, 255, 255, 0.8)',
    },
    spacer: {
        flex: 1,
        minHeight: 40,
    },
    bottomSection: {
        paddingHorizontal: v_9b1a04.large,
        paddingTop: v_9b1a04.medium,
        paddingBottom: v_9b1a04.xlarge,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#F3F4F6',
    },
    pinDisplayContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: v_9b1a04.small,
        paddingHorizontal: v_9b1a04.large,
        backgroundColor: '#F9FAFB',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        marginBottom: v_9b1a04.medium,
    },
    pinDisplay: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: v_9b1a04.medium,
    },
    pinLabel: {
        fontSize: v_ef658a.small,
        fontFamily: v_843035.medium,
        color: '#9CA3AF',
    },
    pinValue: {
        fontSize: v_ef658a.xlarge,
        fontFamily: v_843035.bold,
        color: v_1bfbd0.text,
        letterSpacing: 1,
    },
    copyButton: {
        paddingVertical: v_9b1a04.small,
        paddingHorizontal: v_9b1a04.xmedium,
    },
    copyButtonText: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.semibold,
    },
});

export default v_52f825;

