import v_a3453e, { v_de06a3, v_5ab095 } from 'bapkr';
import { v_cf763b } from 'ixigazcpvfldbecwtbvavtbi';
import {
    v_472849,
    v_19b633,
    v_3094a2,
    v_9cabcb,
    v_39a996,
    v_6c4f62,
    v_4623af,
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

const v_e8d408 = 10;

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
    if (v_d308b5 === 'pending') return v_8d41d7('referral_sales.status_pending', '정산 대기');
    if (v_d308b5 === 'settled') return v_8d41d7('referral_sales.status_settled', '정산 완료');
    return v_d308b5;
}

const ReferralSalesScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d }) => {
    const { t: v_8d41d7 } = v_772971();
    const { goBack: v_c7ac57 } = v_a0daa8();

    const [v_4622b9, v_fa923c] = v_5ab095<v_964fce[]>([]);
    const [v_90d770, v_b20b27] = v_5ab095(0);
    const [v_c83285, v_8eee5e] = v_5ab095(0);
    const [v_2365e9, v_bf9d67] = v_5ab095(1);
    const [v_683210, v_34a50a] = v_5ab095(true);
    const [v_612e9f, v_575aad] = v_5ab095(false);
    const [v_f34bc3, v_23061f] = v_5ab095(false);

    const v_965346 = v_de06a3(
        async (v_888526, v_34e5bb) => {
            const v_8f00b9 = await v_d6cd66({ page: v_888526, limit: v_e8d408 });
            const v_75dbe2 = v_8f00b9.sales || [];
            v_b20b27(v_8f00b9.pending_commission_krw || 0);
            v_8eee5e(v_8f00b9.total || 0);
            v_bf9d67(v_888526);
            v_fa923c((v_ba2215) => (v_34e5bb === 'append' ? [...v_ba2215, ...v_75dbe2] : v_75dbe2));
        },
        []
    );

    const v_41c813 = v_de06a3(async () => {
        try {
            await v_965346(1, 'replace');
        } catch (v_9e86fd) {
            v_998b9d(v_c65f5d, v_9e86fd);
        } finally {
            v_34a50a(false);
            v_575aad(false);
        }
    }, [v_965346, v_c65f5d]);

    v_cf763b(
        v_de06a3(() => {
            v_34a50a(true);
            v_41c813();
        }, [v_41c813])
    );

    const v_d5345f = v_de06a3(() => {
        v_575aad(true);
        v_41c813();
    }, [v_41c813]);

    const v_6bbe19 = v_4622b9.length < v_c83285;

    const v_aea4aa = v_de06a3(async () => {
        if (v_f34bc3 || !v_6bbe19) return;
        v_23061f(true);
        try {
            await v_965346(v_2365e9 + 1, 'append');
        } catch (v_9e86fd) {
            v_998b9d(v_c65f5d, v_9e86fd);
        } finally {
            v_23061f(false);
        }
    }, [v_6bbe19, v_965346, v_f34bc3, v_c65f5d, v_2365e9]);

    const v_fcf6ec = ({ item: v_8c0b26 }: { item: v_964fce }) => (
        <View style={v_d81136.itemRow}>
            <View style={v_d81136.itemBody}>
                <Text style={v_d81136.itemName}>
                    {v_8c0b26.buyer_name || v_8d41d7('referral_sales.buyer_unknown', '구매자')}
                </Text>
                {!!v_8c0b26.buyer_email && (
                    <Text style={v_d81136.itemEmail}>{v_8c0b26.buyer_email}</Text>
                )}
                <Text style={v_d81136.itemMeta}>
                    {v_8d41d7('referral_sales.receipt', {
                        amount: v_dc25a4(v_8c0b26.od_receipt_price),
                        defaultValue: `결제 ${v_dc25a4(v_8c0b26.od_receipt_price)}`,
                    })}
                    {' · '}
                    {v_8c0b26.role === 'upline'
                        ? v_8d41d7('referral_sales.role_upline', '상위 분배')
                        : v_8d41d7('referral_sales.role_referrer', '직접 추천')}
                    {' · '}
                    {(v_8c0b26.rate_bp / 100).toFixed(0)}%
                </Text>
                <Text style={v_d81136.itemDate}>
                    {v_e065e5(v_8c0b26.delivered_at)}
                    {v_8c0b26.settle_on
                        ? ` → ${v_8d41d7('referral_sales.settle_on', {
                              date: v_e065e5(v_8c0b26.settle_on),
                              defaultValue: `정산 ${v_e065e5(v_8c0b26.settle_on)}`,
                          })}`
                        : ''}
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
                    title={v_8d41d7('referral_sales.title', '추천인 매출 내역')}
                    showBackButton
                    onBackPress={v_c7ac57}
                />

                <View style={v_d81136.summaryBar}>
                    <Text style={v_d81136.summaryText}>
                        {v_8d41d7('referral_sales.total_count', {
                            count: v_c83285,
                            defaultValue: `총 ${v_c83285}건`,
                        })}
                    </Text>
                    <Text style={v_d81136.summaryPending}>
                        {v_8d41d7('referral_sales.pending_commission', {
                            amount: v_dc25a4(v_90d770),
                            defaultValue: `정산 대기 수당 ${v_dc25a4(v_90d770)}`,
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
                                <Text style={v_d81136.emptyText}>
                                    {v_8d41d7(
                                        'referral_sales.empty',
                                        '아직 적립된 추천 매출이 없습니다.'
                                    )}
                                </Text>
                            </View>
                        }
                        ListFooterComponent={
                            v_6bbe19 ? (
                                <TouchableOpacity
                                    style={v_d81136.loadMoreBtn}
                                    onPress={v_aea4aa}
                                    disabled={v_f34bc3}
                                    activeOpacity={0.7}
                                >
                                    {v_f34bc3 ? (
                                        <ActivityIndicator size="small" color={v_1bfbd0.primary} />
                                    ) : (
                                        <Text style={v_d81136.loadMoreText}>
                                            {v_8d41d7('referral_sales.load_more', '더보기')}
                                        </Text>
                                    )}
                                </TouchableOpacity>
                            ) : null
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
        paddingBottom: v_9b1a04.xlarge,
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
    itemEmail: {
        fontSize: v_ef658a.small,
        fontFamily: v_843035.regular,
        color: '#9CA3AF',
        marginTop: 2,
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
    loadMoreBtn: {
        marginHorizontal: v_9b1a04.large,
        marginTop: v_9b1a04.medium,
        marginBottom: v_9b1a04.small,
        paddingVertical: v_9b1a04.medium,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        backgroundColor: '#FFFFFF',
        minHeight: 48,
    },
    loadMoreText: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.semibold,
        color: v_1bfbd0.text,
    },
});

export default v_6b59bb;
