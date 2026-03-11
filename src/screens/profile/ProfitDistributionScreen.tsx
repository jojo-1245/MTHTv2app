import v_a3453e, { v_5ab095 } from 'bapkr';
import {
    v_472849,
    v_19b633,
    v_3094a2,
    v_4623af,
} from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_dec439, v_25515d } from 'zvyjokvuouwvifyzks';
import { v_5ade23 } from 'xbfwaaanosqvazmrqoah';
import { v_e0068c } from 'vvfgtwbmdpbnvhtfbtbgudicfmpscw';
import { v_772971 } from 'jmpfvteuuztnp';
import { v_1bfbd0, v_843035, v_9b1a04, v_ef658a } from '../../constants';
import { v_729608, v_570c34, v_1c1837 } from '../../components';
import type { v_8ad91b } from '../../navigation';
import { v_a0daa8 } from '../../navigation';

type Props = v_432191<v_8ad91b, 'ProfitDistribution'>;

const ProfitDistributionScreen: v_a3453e.FC<Props> = () => {
    const { t: v_8d41d7 } = v_772971();
    const { navigate: v_9b57fc } = v_a0daa8();
    const v_033e14 = v_e0068c();

    const [v_b34df8, v_a5c91f] = v_5ab095(new Date(2026, 1, 1)); 
    const v_f4ed1d = 4;
    const v_636493 = 12000;
    const v_4548d8 = 54000;
    const v_9b4e61 = v_636493 + v_4548d8;
    const v_dcd614 = new Date(2026, 2, 1); 

    const v_89f939 = (v_f63e09) => {
        return new Intl.NumberFormat('ko-KR', { maximumFractionDigits: 0 }).format(v_f63e09);
    };

    const v_e065e5 = (v_8dffde) => {
        return `${v_8dffde.getFullYear()}년 ${v_8dffde.getMonth() + 1}월 ${v_8dffde.getDate()}일`;
    };

    const v_4ffb6b = (v_8dffde) => {
        return `${v_8dffde.getFullYear()}년 ${v_8dffde.getMonth() + 1}월`;
    };

    const v_a569af = () => {
        v_a5c91f(new Date(v_b34df8.getFullYear(), v_b34df8.getMonth() - 1, 1));
    };

    const v_2de39a = () => {
        v_a5c91f(new Date(v_b34df8.getFullYear(), v_b34df8.getMonth() + 1, 1));
    };

    return (
        <MainLayout activeKey="myinfo">
            <View style={v_d81136.container}>
                <Header
                    variant="analysis"
                    title={v_8d41d7('profit_distribution.title') + ' 예시화면'}
                    leftAccessory={
                        <TouchableOpacity
                            onPress={() => v_9b57fc('MyInfo')}
                            style={v_d81136.backButton}
                            activeOpacity={0.85}
                            accessibilityRole="button"
                            accessibilityLabel={v_8d41d7('common.back')}
                        >
                            <Ionicons name="arrow-back" size={20} color={v_1bfbd0.primary} />
                        </TouchableOpacity>
                    }
                />
                <SafeScrollView
                    style={v_d81136.scrollView}
                    contentContainerStyle={v_d81136.content}
                    showBottomBackground={false}
                >
                    {}
                    <View style={v_d81136.periodCard}>
                        <TouchableOpacity
                            onPress={v_a569af}
                            style={v_d81136.periodArrow}
                            accessibilityRole="button"
                            accessibilityLabel={v_8d41d7('common.previous')}
                        >
                            <Ionicons name="chevron-back" size={24} color={v_1bfbd0.text} />
                        </TouchableOpacity>
                        <View style={v_d81136.periodContent}>
                            <Text style={v_d81136.periodMonth}>{v_4ffb6b(v_b34df8)}</Text>
                            <Text style={v_d81136.periodLabel}>{v_8d41d7('profit_distribution.period_label')}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={v_2de39a}
                            style={v_d81136.periodArrow}
                            accessibilityRole="button"
                            accessibilityLabel={v_8d41d7('common.next')}
                        >
                            <Ionicons name="chevron-forward" size={24} color={v_1bfbd0.text} />
                        </TouchableOpacity>
                    </View>

                    {}
                    <LinearGradient
                        colors={['#2B7FFF', '#AD46FF']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={v_d81136.nftCard}
                    >
                        <View style={v_d81136.nftCardContent}>
                            <Text style={v_d81136.nftCardLabel}>{v_8d41d7('profit_distribution.nft_held')}</Text>
                            <Text style={v_d81136.nftCardCount}>{v_f4ed1d}{v_8d41d7('profit_distribution.unit')}</Text>
                        </View>
                        <View style={v_d81136.nftCardIcon}>
                            <Ionicons name="layers-outline" size={24} color="#FFFFFF" />
                        </View>
                    </LinearGradient>

                    {}
                    <View style={v_d81136.sectionContainer}>
                        <Text style={v_d81136.sectionTitle}>{v_8d41d7('profit_distribution.detailed_breakdown')}</Text>

                        {}
                        <View style={[v_d81136.profitCard, v_d81136.profitCardBlue]}>
                            <View style={[v_d81136.profitIcon, v_d81136.profitIconBlue]}>
                                <Ionicons name="tv-outline" size={24} color="#FFFFFF" />
                            </View>
                            <View style={v_d81136.profitInfo}>
                                <Text style={v_d81136.profitTitle}>{v_8d41d7('profit_distribution.advertising_profit')}</Text>
                                <Text style={v_d81136.profitSubtitle}>{v_8d41d7('profit_distribution.advertising_subtitle')}</Text>
                            </View>
                            <Text style={[v_d81136.profitAmount, v_d81136.profitAmountBlue]}>
                                {v_89f939(v_636493)} {v_8d41d7('common.currency_unit')}
                            </Text>
                        </View>

                        {}
                        <View style={[v_d81136.profitCard, v_d81136.profitCardGreen]}>
                            <View style={[v_d81136.profitIcon, v_d81136.profitIconGreen]}>
                                <Ionicons name="bag-outline" size={24} color="#FFFFFF" />
                            </View>
                            <View style={v_d81136.profitInfo}>
                                <Text style={v_d81136.profitTitle}>{v_8d41d7('profit_distribution.product_profit')}</Text>
                                <Text style={v_d81136.profitSubtitle}>{v_8d41d7('profit_distribution.product_subtitle')}</Text>
                            </View>
                            <Text style={[v_d81136.profitAmount, v_d81136.profitAmountGreen]}>
                                {v_89f939(v_4548d8)} {v_8d41d7('common.currency_unit')}
                            </Text>
                        </View>

                    </View>

                    {}
                    <View style={v_d81136.totalCard}>
                        <Text style={v_d81136.totalLabel}>
                            {v_8d41d7('profit_distribution.estimated_profit_label', { count: v_f4ed1d })}
                        </Text>
                        <Text style={v_d81136.totalAmount}>
                            {v_89f939(v_9b4e61)}{v_8d41d7('common.currency_unit')}
                        </Text>
                        <View style={v_d81136.nextDistribution}>
                            <Text style={v_d81136.nextDistributionText}>
                                {v_8d41d7('profit_distribution.next_distribution')}: {v_e065e5(v_dcd614)}
                            </Text>
                        </View>
                    </View>

                    {}
                    <View style={v_d81136.guideCard}>
                        <View style={v_d81136.guideHeader}>
                            <View style={v_d81136.guideIcon}>
                                <Ionicons name="information-circle" size={20} color="#2B7FFF" />
                            </View>
                            <Text style={v_d81136.guideTitle}>{v_8d41d7('profit_distribution.guide_title')}</Text>
                        </View>
                        <View style={v_d81136.guideContent}>
                            <Text style={v_d81136.guideItem}>
                                • {v_8d41d7('profit_distribution.guide_item1')}
                            </Text>
                            <Text style={v_d81136.guideItem}>
                                • {v_8d41d7('profit_distribution.guide_item2')}
                            </Text>
                        </View>
                    </View>
                </SafeScrollView>
            </View>
        </MainLayout>
    );
};

const v_d81136 = v_472849.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
    },
    backButton: {
        width: 48,
        height: 48,
        borderRadius: 8,
        backgroundColor: v_1bfbd0.backgroundSecondary,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    scrollView: {
        flex: 1,
    },
    content: {
        paddingHorizontal: v_9b1a04.large,
        paddingVertical: v_9b1a04.medium,
        paddingBottom: v_9b1a04.xlarge,
        backgroundColor: '#F9FAFB',
    },
    periodCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: v_9b1a04.medium,
        marginBottom: v_9b1a04.medium,
        borderWidth: 1,
        borderColor: v_1bfbd0.borderLight,
    },
    periodArrow: {
        padding: v_9b1a04.small,
    },
    periodContent: {
        flex: 1,
        alignItems: 'center',
    },
    periodMonth: {
        fontSize: v_ef658a.xlarge,
        fontFamily: v_843035.bold,
        color: v_1bfbd0.text,
        marginBottom: v_9b1a04.small / 2,
    },
    periodLabel: {
        fontSize: v_ef658a.small,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.secondaryText,
    },
    nftCard: {
        borderRadius: 16,
        padding: v_9b1a04.large,
        marginBottom: v_9b1a04.medium,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    nftCardContent: {
        alignItems: 'flex-start',
        marginBottom: v_9b1a04.small,
    },
    nftCardLabel: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.medium,
        color: '#FFFFFF',
        marginRight: v_9b1a04.small,
    },
    nftCardCount: {
        fontSize: 32,
        fontFamily: v_843035.bold,
        color: '#FFFFFF',
    },
    nftCardIcon: {
        padding: v_9b1a04.small,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    sectionTitle: {
        fontSize: v_ef658a.large,
        fontFamily: v_843035.bold,
        color: v_1bfbd0.text,
        marginBottom: v_9b1a04.medium,
    },
    sectionContainer: {
        gap: v_9b1a04.small,
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: v_9b1a04.medium,
        marginBottom: v_9b1a04.medium,
        borderWidth: 1,
        borderColor: v_1bfbd0.borderLight,
    },
    profitCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: v_9b1a04.medium,
    },
    profitCardBlue: {
        backgroundColor: '#EFF6FF',
    },
    profitCardGreen: {
        backgroundColor: '#F0FDF4',
    },
    profitIcon: {
        width: 38,
        height: 38,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: v_9b1a04.small,
    },
    profitIconBlue: {
        backgroundColor: '#2B7FFF',
    },
    profitIconGreen: {
        backgroundColor: '#10B981',
    },
    profitInfo: {
        flex: 1,
    },
    profitTitle: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.semibold,
        color: v_1bfbd0.text,
        marginBottom: v_9b1a04.small / 2,
        letterSpacing: -0.8,
    },
    profitSubtitle: {
        fontSize: v_ef658a.small,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.secondaryText,
        letterSpacing: -0.5,
    },
    profitAmount: {
        fontSize: v_ef658a.large,
        fontFamily: v_843035.bold,
        letterSpacing: -0.8,
    },
    profitAmountBlue: {
        color: '#2B7FFF',
    },
    profitAmountGreen: {
        color: '#10B981',
    },
    totalCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: v_9b1a04.large,
        marginBottom: v_9b1a04.medium,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: v_1bfbd0.borderLight,
    },
    totalLabel: {
        fontSize: v_ef658a.small,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.secondaryText,
        marginBottom: v_9b1a04.small,
        letterSpacing: -0.5,
    },
    totalAmount: {
        fontSize: 28,
        fontFamily: v_843035.bold,
        color: v_1bfbd0.text,
        marginBottom: v_9b1a04.medium,
        letterSpacing: -0.8,
    },
    nextDistribution: {
        backgroundColor: '#F3F4F6',
        borderRadius: 8,
        paddingVertical: v_9b1a04.small,
        paddingHorizontal: v_9b1a04.medium,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    nextDistributionText: {
        fontSize: v_ef658a.small,
        fontFamily: v_843035.medium,
        color: v_1bfbd0.secondaryText,
    },
    guideCard: {
        backgroundColor: '#FFFBEB',
        borderRadius: 16,
        padding: v_9b1a04.medium,
        borderWidth: 1,
        borderColor: '#FEE685',
    },
    guideHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: v_9b1a04.small,
    },
    guideIcon: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: v_9b1a04.small,
    },
    guideTitle: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.bold,
        color: v_1bfbd0.text,
    },
    guideContent: {
        gap: v_9b1a04.small / 2,
    },
    guideItem: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.regular,
        color: v_1bfbd0.text,
        lineHeight: 20,
    },
});

export default v_f97d8b;

