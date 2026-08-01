import v_a3453e, { v_de06a3, v_5ab095 } from 'bapkr';
import { v_cf763b } from 'ixigazcpvfldbecwtbvavtbi';
import {
    v_472849,
    v_19b633,
    v_3094a2,
    v_9cabcb,
    v_39a996,
    v_6c4f62,
} from 'rcmrninabrnb';
import { v_772971 } from 'jmpfvteuuztnp';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_1bfbd0, v_843035, v_9b1a04, v_ef658a } from '../../constants';
import { v_729608, v_556baf, v_1c1837 } from '../../components';
import type { v_8ad91b } from '../../navigation';
import { v_a0daa8 } from '../../navigation';
import { v_d6cd66, type v_964fce } from '../../services';
import { v_998b9d } from '../../utils/authErrorHandler';

type Props = v_432191<v_8ad91b, 'ReferralSales'>;

function v_cadb57(v_1833e7): string {
    if (!v_1833e7) return '';
    const v_2f361a = v_1833e7.trim();
    if (v_2f361a.length <= 1) return v_2f361a;
    if (v_2f361a.length === 2) return v_2f361a[0] + '*';
    return v_2f361a[0] + '*'.repeat(v_2f361a.length - 2) + v_2f361a[v_2f361a.length - 1];
}

function v_e065e5(v_fd5f43): string {
    if (!v_fd5f43) return '';
    const v_479f05 = String(v_fd5f43).trim();
    const v_35f85c = v_479f05.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (v_35f85c) return `${v_35f85c[1]}. ${v_35f85c[2]}. ${v_35f85c[3]}`;
    const v_d5dda0 = new Date(v_479f05);
    if (Number.isNaN(v_d5dda0.getTime())) return '';
    return `${v_d5dda0.getFullYear()}. ${(v_d5dda0.getMonth() + 1).toString().padStart(2, '0')}. ${v_d5dda0.getDate().toString().padStart(2, '0')}`;
}

function v_dc25a4(v_f4e98d): string {
    return `${Math.floor(v_f4e98d || 0).toLocaleString('ko-KR')}원`;
}

function v_c4180e(v_8d41d7, v_d308b5): string {
    if (v_d308b5 === 'pending') return v_8d41d7('referral_sales.status_pending');
    if (v_d308b5 === 'settled') return v_8d41d7('referral_sales.status_settled');
    return v_d308b5;
}

const ReferralSalesScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d }) => {
    const { t: v_8d41d7 } = v_772971();
    const { goBack: v_c7ac57 } = v_a0daa8();

    const [v_4622b9, v_fa923c] = v_5ab095<v_964fce[]>([]);
    const [v_90d770, v_b20b27] = v_5ab095(0);
    const [v_c83285, v_8eee5e] = v_5ab095(0);
    const [v_683210, v_34a50a] = v_5ab095(true);
    const [v_612e9f, v_575aad] = v_5ab095(false);

    const v_f6f5de = v_de06a3(async () => {
        try {
            const v_8f00b9 = await v_d6cd66({ page: 1, limit: 50 });
            v_fa923c(v_8f00b9.sales || []);
            v_b20b27(v_8f00b9.pending_commission_krw || 0);
            v_8eee5e(v_8f00b9.total || 0);
        } catch (v_9e86fd) {
            v_998b9d(v_c65f5d, v_9e86fd);
        } finally {
            v_34a50a(false);
            v_575aad(false);
        }
    }, [v_c65f5d]);

    v_cf763b(
        v_de06a3(() => {
            v_34a50a(true);
            v_f6f5de();
        }, [v_f6f5de])
    );

    const v_d5345f = v_de06a3(() => {
        v_575aad(true);
        v_f6f5de();
    }, [v_f6f5de]);

    const v_fcf6ec = ({ item: v_8c0b26 }: { item: v_964fce }) => (
        <View style={v_d81136.itemRow}>
            <View style={v_d81136.itemBody}>
                <Text style={v_d81136.itemName}>
                    {v_cadb57(v_8c0b26.buyer_name || v_8d41d7('referral_sales.buyer_unknown'))}
                </Text>
                <Text style={v_d81136.itemMeta}>
                    {v_8d41d7('referral_sales.receipt', { amount: v_dc25a4(v_8c0b26.od_receipt_price) })}
                    {' · '}
                    {v_8c0b26.role === 'upline'
                        ? v_8d41d7('referral_sales.role_upline')
                        : v_8d41d7('referral_sales.role_referrer')}
                    {' · '}
                    {(v_8c0b26.rate_bp / 100).toFixed(0)}%
                </Text>
                <Text style={v_d81136.itemDate}>
                    {v_e065e5(v_8c0b26.delivered_at)}
                    {v_8c0b26.settle_on ? ` → ${v_8d41d7('referral_sales.settle_on', { date: v_e065e5(v_8c0b26.settle_on) })}` : ''}
                </Text>
            </View>
            <View style={v_d81136.itemRight}>
                <Text style={v_d81136.itemCommission}>{v_dc25a4(v_8c0b26.commission_krw)}</Text>
                <Text style={v_d81136.itemStatus}>{v_c4180e(v_8d41d7, v_8c0b26.status)}</Text>
            </View>
        </View>
    );

    return (
        <MainLayout activeKey="myinfo">
            <SafeView style={v_d81136.container} showBottomBackground={false}>
                <Header
                    title={v_8d41d7('referral_sales.title')}
                    showBackButton
                    onBackPress={v_c7ac57}
                />

                <View style={v_d81136.summaryBar}>
                    <Text style={v_d81136.summaryText}>
                        {v_8d41d7('referral_sales.total_count', { count: v_c83285 })}
                    </Text>
                    <Text style={v_d81136.summaryPending}>
                        {v_8d41d7('referral_sales.pending_commission', {
                            amount: v_dc25a4(v_90d770),
                        })}
                    </Text>
                </View>

                {v_683210 ? (
                    <View style={v_d81136.centerBox}>
                        <ActivityIndicator size="large" color={v_1bfbd0.primary} />
                    </View>
                ) : (
                    <FlatList
                        data={v_4622b9}
                        keyExtractor={(v_23805a) => `${v_23805a.order_id}-${v_23805a.role}`}
                        renderItem={v_fcf6ec}
                        contentContainerStyle={
                            v_4622b9.length === 0 ? v_d81136.emptyContainer : v_d81136.listContent
                        }
                        refreshControl={
                            <RefreshControl refreshing={v_612e9f} onRefresh={v_d5345f} />
                        }
                        ListEmptyComponent={
                            <View style={v_d81136.centerBox}>
                                <Text style={v_d81136.emptyText}>{v_8d41d7('referral_sales.empty')}</Text>
                            </View>
                        }
                        ItemSeparatorComponent={() => <View style={v_d81136.separator} />}
                    />
                )}
            </SafeView>
        </MainLayout>
    );
};

const v_d81136 = v_472849.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    summaryBar: {
        paddingHorizontal: v_9b1a04.large,
        paddingVertical: v_9b1a04.medium,
        backgroundColor: '#F9FAFB',
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
        gap: 4,
    },
    summaryText: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.semibold,
        color: v_1bfbd0.text,
    },
    summaryPending: {
        fontSize: v_ef658a.small,
        fontFamily: v_843035.medium,
        color: '#6B7280',
    },
    listContent: {
        paddingVertical: v_9b1a04.small,
    },
    emptyContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    centerBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: v_9b1a04.xlarge,
    },
    emptyText: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.medium,
        color: '#9CA3AF',
        textAlign: 'center',
    },
    itemRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingVertical: v_9b1a04.medium,
        paddingHorizontal: v_9b1a04.large,
    },
    itemBody: {
        flex: 1,
        paddingRight: v_9b1a04.small,
    },
    itemName: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.semibold,
        color: v_1bfbd0.text,
    },
    itemMeta: {
        fontSize: v_ef658a.small,
        fontFamily: v_843035.regular,
        color: '#6B7280',
        marginTop: 2,
    },
    itemDate: {
        fontSize: v_ef658a.small,
        fontFamily: v_843035.regular,
        color: '#9CA3AF',
        marginTop: 2,
    },
    itemRight: {
        alignItems: 'flex-end',
    },
    itemCommission: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.semibold,
        color: v_1bfbd0.primary,
    },
    itemStatus: {
        fontSize: v_ef658a.small,
        fontFamily: v_843035.regular,
        color: '#9CA3AF',
        marginTop: 2,
    },
    separator: {
        height: 1,
        backgroundColor: '#F3F4F6',
        marginLeft: v_9b1a04.large,
    },
});

export default v_6b59bb;
