import v_a3453e, { v_5ab095, v_c4deb2, v_de06a3 } from 'bapkr';
import {
  v_3094a2,
  v_19b633,
  v_472849,
  v_4623af,
  v_39a996,
  v_6c4f62,
  v_03e392,
} from 'rcmrninabrnb';
import { v_772971 } from 'jmpfvteuuztnp';
import type { v_75de9d } from 'zqqvxke';
import { v_e0068c } from 'vvfgtwbmdpbnvhtfbtbgudicfmpscw';
import { v_b5df25 } from 'ernurodqvmtspux';
import { v_dec439, v_25515d } from 'zvyjokvuouwvifyzks';
import { v_0ae9ff, v_5a7212, v_7ebf51, v_56d16a, v_84fd28 } from 'wjvlskvsbzsrojdbjsl';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_5ade23 } from 'xbfwaaanosqvazmrqoah';
import { v_1bfbd0, v_843035, v_9b1a04, v_ef658a } from '../../constants';
import { v_570c34, v_1c1837, v_729608 } from '../../components';
import type { v_8ad91b } from '../../navigation';
import { v_a0daa8 } from '../../navigation';

type Props = v_432191<v_8ad91b, 'MyInfoNotify'>;

export interface NotificationItem {
  board: number;
  type: 9304 | 9305 | 9306 | 9307 | 9308;
  title: string;
  description: string;
  datetime: string;
  unread?: boolean;
  requesterEmail?: string;
  requesterName?: string;
}

const v_1108ee = (v_a86996, t: v_75de9d): string => {
  try {
    const v_8dffde = new Date(v_a86996);
    const v_5c2f9f = new Date();
    const v_d52712 = v_5c2f9f.getTime() - v_8dffde.getTime();
    const v_56a749 = Math.floor(v_d52712 / 60000);
    const v_fa32a5 = Math.floor(v_d52712 / 3600000);
    const v_0906bd = Math.floor(v_d52712 / 86400000);

    if (v_56a749 < 1) return v_8d41d7('my_info_notify.time_just_now');
    if (v_56a749 < 60) return v_8d41d7('my_info_notify.time_minutes_ago', { count: v_56a749 });
    if (v_fa32a5 < 24) return v_8d41d7('my_info_notify.time_hours_ago', { count: v_fa32a5 });
    if (v_0906bd < 7) return v_8d41d7('my_info_notify.time_days_ago', { count: v_0906bd });
    return v_8dffde.toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' });
  } catch {
    return v_a86996;
  }
};

const v_9c28a5 = (t: v_75de9d): NotificationItem[] => [
  {
    board: 1,
    type: 9304,
    title: v_8d41d7('my_info_notify.notify_health_request_title'),
    description: v_8d41d7('my_info_notify.notify_health_request_desc', { name: v_8d41d7('my_info_notify.sample_requester_name') }),
    datetime: new Date(Date.now() - 60000).toISOString(),
    unread: true,
    requesterEmail: 'oth-staff@example.invalid',
    requesterName: v_8d41d7('my_info_notify.sample_requester_name'),
  },
  {
    board: 2,
    type: 9305,
    title: v_8d41d7('my_info_notify.notify_daily_goal_title'),
    description: v_8d41d7('my_info_notify.notify_daily_goal_desc'),
    datetime: new Date(Date.now() - 3600000).toISOString(),
    unread: true,
  },
  {
    board: 3,
    type: 9306,
    title: v_8d41d7('my_info_notify.notify_skin_complete_title'),
    description: v_8d41d7('my_info_notify.notify_skin_complete_desc'),
    datetime: new Date(Date.now() - 10800000).toISOString(),
    unread: false,
  },
  {
    board: 4,
    type: 9307,
    title: v_8d41d7('my_info_notify.notify_health_complete_title'),
    description: v_8d41d7('my_info_notify.notify_health_complete_desc'),
    datetime: new Date(Date.now() - 14400000).toISOString(),
    unread: false,
  },
  {
    board: 5,
    type: 9308,
    title: v_8d41d7('my_info_notify.notify_new_product_title'),
    description: v_8d41d7('my_info_notify.notify_new_product_desc'),
    datetime: new Date(Date.now() - 86400000).toISOString(),
    unread: false,
  },
];

const MyInfoNotifyScreen: v_a3453e.FC<Props> = () => {
  const { t: v_8d41d7 } = v_772971();
  const { goBack: v_c7ac57 } = v_a0daa8();
  const v_033e14 = v_e0068c();
  const [v_b9c00c, v_0965ee] = v_5ab095<NotificationItem[]>([]);
  const [v_683210, v_34a50a] = v_5ab095(true);
  const [v_612e9f, v_575aad] = v_5ab095(false);

  const v_496106 = v_de06a3(async () => {
    v_34a50a(true);
    v_0965ee(v_9c28a5(v_8d41d7));
    v_34a50a(false);
    v_575aad(false);
  }, [v_8d41d7]);

  v_c4deb2(() => {
    v_496106();
  }, [v_496106]);

  const v_d5345f = v_de06a3(() => {
    v_575aad(true);
    v_496106();
  }, [v_496106]);

  const v_8a6db3 = v_b9c00c.filter((v_f4e98d) => v_f4e98d.unread).length;

  const v_8b09cb = (v_10046b, v_47ef8d) => {
    v_03e392.alert(
      v_47ef8d ? v_8d41d7('my_info_notify.health_request_allow_title') : v_8d41d7('my_info_notify.health_request_reject_title'),
      v_47ef8d ? v_8d41d7('my_info_notify.health_request_allow_message') : v_8d41d7('my_info_notify.health_request_reject_message'),
      [
        { text: v_8d41d7('common.cancel'), style: 'cancel' },
        {
          text: v_47ef8d ? v_8d41d7('my_info_notify.health_request_allow') : v_8d41d7('my_info_notify.health_request_reject'),
          onPress: () => {
            if (v_47ef8d) v_03e392.alert(v_8d41d7('common.success'), v_8d41d7('my_info_notify.health_request_allowed'));
            else v_03e392.alert(v_8d41d7('common.success'), v_8d41d7('my_info_notify.health_request_rejected'));
            v_0965ee((v_ba2215) => v_ba2215.filter((v_f4e98d) => v_f4e98d.board !== v_10046b));
          },
        },
      ]
    );
  };

  const v_406068 = (v_3b27d9) => {
    switch (v_3b27d9) {
      case 9304:
        return { bg: '#E0E7FF', iconColor: '#615FFF' };
      case 9305:
        return { bg: '#FEF3C7', iconColor: '#D97706' };
      case 9306:
        return { bg: '#E0F2FE', iconColor: '#0284C7' };
      case 9307:
        return { bg: '#FCE7F3', iconColor: '#DB2777' };
      case 9308:
        return { bg: '#FEE2E2', iconColor: '#DC2626' };
      default:
        return { bg: '#F3F4F6', iconColor: '#9CA3AF' };
    }
  };

  const v_c273da = (v_3b27d9) => {
    const v_05b441 = 24;
    const { iconColor: v_ef160b } = v_406068(v_3b27d9);
    switch (v_3b27d9) {
      case 9304:
        return <Bell size={v_05b441} color={v_ef160b} strokeWidth={2} />;
      case 9305:
        return <Trophy size={v_05b441} color={v_ef160b} strokeWidth={2} />;
      case 9306:
        return <Droplet size={v_05b441} color={v_ef160b} strokeWidth={2} />;
      case 9307:
        return <Heart size={v_05b441} color={v_ef160b} strokeWidth={2} />;
      case 9308:
        return <Gift size={v_05b441} color={v_ef160b} strokeWidth={2} />;
      default:
        return <Bell size={v_05b441} color={v_ef160b} strokeWidth={2} />;
    }
  };

  const v_858a9b = (v_8c0b26) => {
    const { bg: v_6fe397 } = v_406068(v_8c0b26.type);
    return (
      <View key={v_8c0b26.board} style={[v_d81136.card, v_8c0b26.unread ? v_d81136.cardUnread : v_d81136.cardRead]}>
        {v_8c0b26.unread && <View style={v_d81136.unreadDot} />}
        <View style={[v_d81136.cardIconWrap, { backgroundColor: v_6fe397 }]}>{v_c273da(v_8c0b26.type)}</View>
        <View style={v_d81136.cardContent}>
          <Text style={v_d81136.cardTitle}>{v_8c0b26.title}</Text>
          <Text style={v_d81136.cardDesc}>{v_8c0b26.description}</Text>
          <Text style={v_d81136.cardTime}>{v_1108ee(v_8c0b26.datetime, v_8d41d7)}</Text>
          {v_8c0b26.type === 9304 && (
            <View style={v_d81136.actionRow}>
              <TouchableOpacity
                style={v_d81136.btnAllow}
                onPress={() => v_8b09cb(v_8c0b26.board, true)}
                activeOpacity={0.85}
              >
                <Ionicons name="checkmark" size={18} color="#FFFFFF" />
                <Text style={v_d81136.btnAllowText}>{v_8d41d7('my_info_notify.health_request_allow')}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={v_d81136.btnReject}
                onPress={() => v_8b09cb(v_8c0b26.board, false)}
                activeOpacity={0.85}
              >
                <Ionicons name="close" size={18} color="#6B7280" />
                <Text style={v_d81136.btnRejectText}>{v_8d41d7('my_info_notify.health_request_reject')}</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <MainLayout activeKey="myinfo">
      <View style={v_d81136.container}>
        <StatusBar style="dark" />
        <Header
          variant="analysis"
          title={v_8d41d7('my_info_notify.title')}
          subtitle={v_8d41d7('my_info_notify.unread_count', { count: v_8a6db3 })}
          leftAccessory={
            <View style={v_d81136.headerLeft}>
              <TouchableOpacity
                onPress={v_c7ac57}
                style={v_d81136.headerBackBtn}
                activeOpacity={0.85}
                accessibilityRole="button"
                accessibilityLabel={v_8d41d7('common.back')}
              >
                <Feather name="arrow-left" size={20} color={v_1bfbd0.primary} />
              </TouchableOpacity>
              <LinearGradient
                colors={['#2B7FFF', '#AD46FF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={v_d81136.headerIconWrap}
              >
                <Bell size={24} color="#FFFFFF" strokeWidth={2} />
              </LinearGradient>
            </View>
          }
          containerStyle={{ paddingTop: v_033e14.top + v_9b1a04.medium }}
        />

        {v_683210 ? (
          <View style={v_d81136.loadingContainer}>
            <ActivityIndicator size="large" color={v_1bfbd0.buttonPrimary} />
          </View>
        ) : (
          <SafeScrollView
            style={v_d81136.list}
            contentContainerStyle={v_d81136.listContent}
            showsVerticalScrollIndicator={false}
            refreshControl={<RefreshControl refreshing={v_612e9f} onRefresh={v_d5345f} />}
            showBottomBackground={false}
          >
            {v_b9c00c.length === 0 ? (
              <View style={v_d81136.emptyContainer}>
                <Text style={v_d81136.emptyText}>{v_8d41d7('my_info_notify.empty')}</Text>
              </View>
            ) : (
              v_b9c00c.map(v_858a9b)
            )}
          </SafeScrollView>
        )}
      </View>
    </MainLayout>
  );
};

const v_d81136 = v_472849.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerBackBtn: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: v_1bfbd0.headerIconBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 14,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: v_9b1a04.medium,
    paddingVertical: v_9b1a04.medium,
    paddingBottom: v_9b1a04.xlarge,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: v_ef658a.medium,
    color: v_1bfbd0.secondaryText,
  },
  card: {
    flexDirection: 'row',
    borderRadius: 14,
    padding: v_9b1a04.medium,
    marginBottom: v_9b1a04.small,
    position: 'relative',
  },
  cardUnread: {
    backgroundColor: '#EEF2FF',
    borderWidth: 1.108,
    borderColor: '#C6D2FF',
  },
  cardRead: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  unreadDot: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#615FFF',
  },
  cardIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.semibold,
    color: '#111827',
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 4,
  },
  cardTime: {
    fontSize: 12,
    fontFamily: v_843035.regular,
    color: '#9CA3AF',
  },
  actionRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 12,
  },
  btnAllow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    backgroundColor: '#615FFF',
    borderRadius: 10,
    paddingVertical: 12,
  },
  btnAllowText: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.semibold,
    color: '#FFFFFF',
  },
  btnReject: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  btnRejectText: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.semibold,
    color: '#6B7280',
  },
});

export default v_386af2;
