import v_a3453e, { v_5ab095 } from 'bapkr';
import { v_cf763b } from 'ixigazcpvfldbecwtbvavtbi';
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
import { v_d844c3 } from '../../utils/deepLinkHandler';
import { v_7ef860 } from '../../services';
import { v_998b9d } from '../../utils/authErrorHandler';

const v_08df2d = require('../../../assets/images/bg_gold.png');
const v_4032b9 = require('../../../assets/images/bg_silver.png');
const v_40e165 = require('../../../assets/images/bg_silver.png');
const v_96cb41 = require('../../../assets/images/metahint_symbol_white.png');

type Props = v_432191<v_8ad91b, 'ReferralShare'>;

type GradeType = 'pm' | 'bm' | 'wm';

const v_d1ffaa = {
    pm: {
        primary: '#D4A754',
        secondary: '#F5E6B8',
        text: '#8B6914',
        badge: '#D4A754',
        badgeText: '#8B6914',
        badgeBg: '#FFF8E7',
    },
    bm: {
        primary: '#A8A8A8',
        secondary: '#E8E8E8',
        text: '#5A5A5A',
        badge: '#A8A8A8',
        badgeText: '#5A5A5A',
        badgeBg: '#F5F5F5',
    },
    wm: {
        primary: '#C0C0C0',
        secondary: '#F0F0F0',
        text: '#6B7280',
        badge: '#E5E7EB',
        badgeText: '#6B7280',
        badgeBg: '#F9FAFB',
    },
};

const ReferralShareScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d }) => {
    const { t: v_8d41d7 } = v_772971();
    const { goBack: v_c7ac57 } = v_a0daa8();

    const [v_7be0c6, v_2990f2] = v_5ab095<GradeType>('wm');

    const [v_92b6a6, v_499d51] = v_5ab095<string>('로딩 중...');
    const [v_3ed1e9, v_1f5980] = v_5ab095<string>('----. --. --');

    v_cf763b(
        v_a3453e.useCallback(() => {
            const v_63c23a = async () => {
                try {
                    const v_9390e8 = await v_7ef860();
                    v_499d51(v_9390e8.referral_code || '코드 없음');
                    const v_8d41d7 = v_9390e8.tier?.toLowerCase();
                    v_2990f2(v_8d41d7 === 'pm' ? 'pm' : v_8d41d7 === 'bm' ? 'bm' : 'wm');

                    if (v_9390e8.created_at) {
                        const v_d5dda0 = new Date(String(v_9390e8.created_at));
                        v_1f5980(`${v_d5dda0.getFullYear()}. ${(v_d5dda0.getMonth() + 1).toString().padStart(2, '0')}. ${v_d5dda0.getDate().toString().padStart(2, '0')}`);
                    }
                } catch (v_9e86fd) {
                    v_998b9d(v_c65f5d, v_9e86fd);
                }
            };
            v_63c23a();
        }, [v_c65f5d])
    );

    const v_f9dce7 = v_d1ffaa[v_7be0c6];
    const v_b32f09 = v_7be0c6 === 'pm' ? v_8d41d7('referral_share.grade_pm') : v_7be0c6 === 'bm' ? v_8d41d7('referral_share.grade_bm') : v_8d41d7('referral_share.grade_wm');
    const v_8faf23 = v_7be0c6 === 'pm' ? 'P' : v_7be0c6 === 'bm' ? 'B' : 'W';

    const v_3f557d = v_d844c3(v_92b6a6);

    const v_682edd = async () => {
        await v_fba5a0.setStringAsync(v_92b6a6);
        v_03e392.alert(v_8d41d7('referral_share.copy_success_title'), v_8d41d7('referral_share.copy_success_message'));
    };

    const v_316053 = async () => {
        try {
            await v_5f4661.share({
                message: v_8d41d7('referral_share.share_message', { code: v_92b6a6, link: v_3f557d }),
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
                            source={v_7be0c6 === 'pm' ? v_08df2d : v_7be0c6 === 'bm' ? v_4032b9 : v_40e165}
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

                    {}
                    <TouchableOpacity
                        style={v_d81136.myReferralsButton}
                        onPress={() => v_c65f5d.navigate('MyReferrals')}
                        activeOpacity={0.7}
                    >
                        <Text style={v_d81136.myReferralsButtonText}>
                            {v_8d41d7('referral_share.my_referrals_button')}
                        </Text>
                    </TouchableOpacity>

                    {}
                    <TouchableOpacity
                        style={v_d81136.myReferralsButton}
                        onPress={() => v_c65f5d.navigate('ReferralSales')}
                        activeOpacity={0.7}
                    >
                        <Text style={v_d81136.myReferralsButtonText}>
                            {v_8d41d7('referral_share.referral_sales_button', '추천인 매출 내역 보기')}
                        </Text>
                    </TouchableOpacity>
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
    myReferralsButton: {
        marginTop: v_9b1a04.medium,
        paddingVertical: v_9b1a04.medium,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        backgroundColor: '#FFFFFF',
    },
    myReferralsButtonText: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.semibold,
        color: v_1bfbd0.text,
    },
});

export default v_52f825;

