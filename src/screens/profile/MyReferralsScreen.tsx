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
import { v_477d46, type v_551fa7 } from '../../services';
import { v_998b9d } from '../../utils/authErrorHandler';

type Props = v_432191<v_8ad91b, 'MyReferrals'>;

function v_cadb57(v_1833e7): string {
    if (!v_1833e7) return '';
    const v_2f361a = v_1833e7.trim();
    if (v_2f361a.length <= 1) return v_2f361a;
    if (v_2f361a.length === 2) return v_2f361a[0] + '*';
    return v_2f361a[0] + '*'.repeat(v_2f361a.length - 2) + v_2f361a[v_2f361a.length - 1];
}

function v_8cf86b(v_e0c7e8): string {
    if (!v_e0c7e8 || !v_e0c7e8.includes('@')) return v_e0c7e8 || '';
    const [v_c67510, v_52b478] = v_e0c7e8.split('@');
    let v_48323a;
    if (v_c67510.length <= 1) {
        v_48323a = v_c67510;
    } else if (v_c67510.length === 2) {
        v_48323a = v_c67510[0] + '*';
    } else if (v_c67510.length <= 4) {
        v_48323a = v_c67510[0] + '*'.repeat(v_c67510.length - 2) + v_c67510[v_c67510.length - 1];
    } else {
        v_48323a = v_c67510.slice(0, 2) + '*'.repeat(v_c67510.length - 4) + v_c67510.slice(-2);
    }
    return `${v_48323a}@${v_52b478}`;
}

function v_e065e5(v_fd5f43): string {
    if (!v_fd5f43) return '';
    const v_d5dda0 = new Date(String(v_fd5f43));
    if (Number.isNaN(v_d5dda0.getTime())) return '';
    return `${v_d5dda0.getFullYear()}. ${(v_d5dda0.getMonth() + 1).toString().padStart(2, '0')}. ${v_d5dda0.getDate().toString().padStart(2, '0')}`;
}

const MyReferralsScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d }) => {
    const { t: v_8d41d7 } = v_772971();
    const { goBack: v_c7ac57 } = v_a0daa8();

    const [v_4622b9, v_fa923c] = v_5ab095<v_551fa7[]>([]);
    const [v_683210, v_34a50a] = v_5ab095(true);
    const [v_612e9f, v_575aad] = v_5ab095(false);

    const v_f6f5de = v_de06a3(async () => {
        try {
            const v_8f00b9 = await v_477d46();
            v_fa923c(v_8f00b9.referrals || []);
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

    const v_fcf6ec = ({ item: v_8c0b26 }: { item: v_551fa7 }) => (
        <View style={v_d81136.itemRow}>
            <View style={v_d81136.itemBody}>
                <Text style={v_d81136.itemName}>{v_cadb57(v_8c0b26.name || '-')}</Text>
                <Text style={v_d81136.itemEmail}>{v_8cf86b(v_8c0b26.email || '')}</Text>
            </View>
            <Text style={v_d81136.itemDate}>{v_e065e5(v_8c0b26.created_at)}</Text>
        </View>
    );

    return (
        <MainLayout activeKey="myinfo">
            <SafeView style={v_d81136.container} showBottomBackground={false}>
                <Header
                    title={v_8d41d7('my_referrals.title')}
                    showBackButton
                    onBackPress={v_c7ac57}
                />

                <View style={v_d81136.summaryBar}>
                    <Text style={v_d81136.summaryText}>
                        {v_8d41d7('my_referrals.total_count', { count: v_4622b9.length })}
                    </Text>
                </View>

                {v_683210 ? (
                    <View style={v_d81136.centerBox}>
                        <ActivityIndicator size="large" color={v_1bfbd0.primary} />
                    </View>
                ) : (
                    <FlatList
                        data={v_4622b9}
                        keyExtractor={(v_23805a) => String(v_23805a.id)}
                        renderItem={v_fcf6ec}
                        contentContainerStyle={v_4622b9.length === 0 ? v_d81136.emptyContainer : v_d81136.listContent}
                        refreshControl={
                            <RefreshControl refreshing={v_612e9f} onRefresh={v_d5345f} />
                        }
                        ListEmptyComponent={
                            <View style={v_d81136.centerBox}>
                                <Text style={v_d81136.emptyText}>{v_8d41d7('my_referrals.empty')}</Text>
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
    },
    summaryText: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.semibold,
        color: v_1bfbd0.text,
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
    },
    itemRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: v_9b1a04.medium,
        paddingHorizontal: v_9b1a04.large,
    },
    itemBody: {
        flex: 1,
    },
    itemName: {
        fontSize: v_ef658a.medium,
        fontFamily: v_843035.semibold,
        color: v_1bfbd0.text,
    },
    itemEmail: {
        fontSize: v_ef658a.small,
        fontFamily: v_843035.regular,
        color: '#6B7280',
        marginTop: 2,
    },
    itemDate: {
        fontSize: v_ef658a.small,
        fontFamily: v_843035.regular,
        color: '#9CA3AF',
        marginLeft: v_9b1a04.small,
    },
    separator: {
        height: 1,
        backgroundColor: '#F3F4F6',
        marginLeft: v_9b1a04.large,
    },
});

export default v_b2608d;
