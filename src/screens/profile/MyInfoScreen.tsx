import v_a3453e, { v_c4deb2, v_5ab095 } from 'bapkr';
import {
  v_472849,
  v_19b633,
  v_3094a2,
  v_cf9c33,
  v_4623af,
  v_07a341,
  v_39a996,
  v_03e392,
} from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_dec439, v_25515d } from 'zvyjokvuouwvifyzks';
import { v_e0068c } from 'vvfgtwbmdpbnvhtfbtbgudicfmpscw';
import { v_772971 } from 'jmpfvteuuztnp';
import { v_cf763b } from 'ixigazcpvfldbecwtbvavtbi';
import { v_1bfbd0, v_843035, v_9b1a04, v_ef658a } from '../../constants';
import { v_729608, v_570c34, v_1c1837 } from '../../components';
import type { v_8ad91b } from '../../navigation';
import { v_a0daa8 } from '../../navigation';
import { v_7ef860, v_4b3c9f, v_52c734, type v_2c95cc } from '../../services';
import { v_998b9d } from '../../utils/authErrorHandler';

type Props = v_432191<v_8ad91b, 'MyInfo'>;

const v_204782 = require('../../../assets/images/myinfo_gold.png');
const v_46b407 = require('../../../assets/images/myinfo_silver.png');

type TierType = 'silver' | 'gold';

const MyInfoScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d }) => {
  const { t: v_8d41d7 } = v_772971();
  const { navigate: v_9b57fc } = v_a0daa8();
  const v_033e14 = v_e0068c();

  const [v_727031, v_4ffb1e] = v_5ab095<v_2c95cc | null>(null);
  const [v_683210, v_34a50a] = v_5ab095(true);
  const [v_5e9bfe, v_3a7d09] = v_5ab095<string | null>(null);
  const [v_d11128, v_36c42a] = v_5ab095(false);
  const [v_d9166c, v_6e6445] = v_5ab095(false);

  const v_ec980c = (v_727031?.tier === 'gold' ? 'gold' : 'silver') as TierType;
  const tierImage: v_07a341 = v_ec980c === 'gold' ? v_204782 : v_46b407;
  const v_e71371 = v_727031?.business === 1 || v_727031?.business === true;

  const v_63c23a = async () => {
    v_34a50a(true);
    v_3a7d09(null);
    try {
      const v_9390e8 = await v_7ef860();
      v_4ffb1e(v_9390e8);
    } catch (v_9e86fd) {

      if (v_998b9d(v_c65f5d, v_9e86fd)) {
        return;
      }
      v_3a7d09(v_9e86fd instanceof Error ? v_9e86fd.message : v_8d41d7('profile.load_error'));
    } finally {
      v_34a50a(false);
    }
  };

  v_cf763b(
    v_a3453e.useCallback(() => {
      v_63c23a();
    }, []),
  );

  const v_338926 = {
    consecutiveDays: 42,
    analysesCompleted: 128,
    purchasesCompleted: 15,
  };

  const menuItems:   Array<
    | {
      id: string;
      title: string;
      description: string;
      iconName: 'eye' | 'edit-2' | 'bell' | 'help-circle' | 'file-text' | 'settings';
      route: keyof v_8ad91b;
      isLogout?: false;
    }
    | { id: string; title: string; isLogout: true }
    | { id: string; title: string; action: 'skin_api' }
  > = [
      {
        id: 'edit',
        title: v_8d41d7('profile.edit_my_info'),
        description: v_8d41d7('profile.edit_my_info_desc'),
        iconName: 'edit-2' as const,
        route: 'MyInfoEmailAuth' as const,
      },
      {
        id: 'notify',
        title: v_8d41d7('profile.notify'),
        description: v_8d41d7('profile.notify_desc'),
        iconName: 'bell' as const,
        route: 'MyInfoNotify' as const,
      },
      {
        id: 'faq',
        title: v_8d41d7('profile.faq'),
        description: v_8d41d7('profile.faq_desc'),
        iconName: 'help-circle' as const,
        route: 'MyInfoFaq' as const,
      },
      {
        id: 'clauses',
        title: v_8d41d7('profile.clause'),
        description: v_8d41d7('profile.clause_desc'),
        iconName: 'file-text' as const,
        route: 'MyInfoClauses' as const,
      },
      {
        id: 'settings',
        title: v_8d41d7('profile.settings'),
        description: v_8d41d7('profile.settings_desc'),
        iconName: 'settings' as const,
        route: 'MyInfoSettings' as const,
      },
      {
        id: 'logout',
        title: v_8d41d7('profile.logout'),
        isLogout: true,
      },
      {
        id: 'skin_api',
        title: v_8d41d7('profile.skin_api_btn', '피부 API 보내기'),
        action: 'skin_api',
      },
    ];

  const v_8cc2b1 = async () => {
    v_6e6445(true);
    try {
      const v_cbbd71 = await v_52c734();
      v_03e392.alert(
        v_8d41d7('profile.skin_api_btn', '피부 API'),
        v_cbbd71
          ? `피부점수: ${v_cbbd71.overall_score}, 날짜: ${v_cbbd71.record_date ?? '-'}`
          : v_8d41d7('profile.api_no_data', '데이터 없음'),
      );
    } catch (v_9e86fd) {
      const v_badeaf = v_9e86fd instanceof Error ? v_9e86fd.message : String(v_9e86fd);
      v_03e392.alert(v_8d41d7('common.error'), v_badeaf);
    } finally {
      v_6e6445(false);
    }
  };

  const v_06b8a4 = async () => {
    v_03e392.alert(v_8d41d7('profile.logout'), v_8d41d7('profile.logout_confirm'), [
      { text: v_8d41d7('common.cancel'), style: 'cancel' },
      {
        text: v_8d41d7('common.confirm'),
        style: 'destructive',
        onPress: async () => {
          v_36c42a(true);
          try {
            await v_4b3c9f();

            v_c65f5d.reset({
              index: 0,
              routes: [{ name: 'Login' }],
            });
          } catch (v_5e9bfe) {
            console.error('[MyInfoScreen] 로그아웃 실패:', v_5e9bfe);
            v_03e392.alert(
              v_8d41d7('common.error'),
              v_5e9bfe instanceof Error ? v_5e9bfe.message : v_8d41d7('profile.logout_error', '로그아웃 중 오류가 발생했습니다.'),
            );
            v_36c42a(false);
          }
        },
      },
    ]);
  };

  if (v_683210 && !v_727031) {
    return (
      <MainLayout activeKey="myinfo">
        <View style={[v_d81136.container, v_d81136.centered]}>
          <ActivityIndicator size="large" color={v_1bfbd0.primary} />
          <Text style={v_d81136.loadingText}>{v_8d41d7('profile.loading')}</Text>
        </View>
      </MainLayout>
    );
  }

  if (v_5e9bfe && !v_727031) {
    return (
      <MainLayout activeKey="myinfo">
        <View style={[v_d81136.container, v_d81136.centered]}>
          <Text style={v_d81136.errorText}>{v_5e9bfe}</Text>
          <TouchableOpacity style={v_d81136.retryBtn} onPress={v_63c23a}>
            <Text style={v_d81136.retryBtnText}>{v_8d41d7('common.try_again')}</Text>
          </TouchableOpacity>
        </View>
      </MainLayout>
    );
  }

  const v_8a1355 = (() => {
    if (!v_727031) return '';
    const v_e2a85c = v_727031 as Record<string, unknown>;
    const v_ea719c = v_727031.firstname ?? v_e2a85c.firstName ?? '';
    const v_506e86 = v_727031.lastname ?? v_e2a85c.lastName ?? '';
    const v_e75c90 = [v_ea719c, v_506e86].filter(Boolean).join(' ').trim();
    if (v_e75c90) return v_e75c90;
    const v_22c69a = v_e2a85c.name;
    if (typeof v_22c69a === 'string' && v_22c69a.trim()) return v_22c69a.trim();
    const v_439359 = v_e2a85c.member ?? v_e2a85c.user;
    if (v_439359 && typeof v_439359 === 'object') {
      const v_f4e98d = v_439359 as Record<string, unknown>;
      const v_d5ce63 = v_f4e98d.firstname ?? v_f4e98d.firstName ?? '';
      const v_da2b61 = v_f4e98d.lastname ?? v_f4e98d.lastName ?? '';
      const v_832926 = [v_d5ce63, v_da2b61].filter(Boolean).join(' ').trim();
      if (v_832926) return v_832926;
      const v_5cf6f5 = v_f4e98d.name;
      if (typeof v_5cf6f5 === 'string' && v_5cf6f5.trim()) return v_5cf6f5.trim();
    }
    return v_727031.email ?? '';
  })();
  const v_b43178 = v_727031?.email ?? '';

  return (
    <MainLayout activeKey="myinfo">
      <View style={v_d81136.container}>
        <Header
          variant="analysis"
          iconLeft={<Feather name="user" size={24} color="#FFFFFF" />}
          title={v_8d41d7('profile.title')}
          subtitle={v_8d41d7('profile.subtitle')}
          containerStyle={{ paddingTop: v_033e14.top + v_9b1a04.medium }}
        />
        <SafeScrollView
          style={v_d81136.scrollView}
          contentContainerStyle={v_d81136.content}
          showBottomBackground={false}
          disableBottomPadding={true}
        >
          {}
          <View style={v_d81136.profileCard}>
            <Image source={v_48803b} style={v_d81136.tierBadge} resizeMode="contain" />
            <View style={v_d81136.profileInfo}>
              {v_e71371 && (
                <View style={v_d81136.businessBadge}>
                  <Text style={v_d81136.businessBadgeText}>{v_8d41d7('profile.business')}</Text>
                </View>
              )}
              <View style={v_d81136.nameRow}>
                <Text style={v_d81136.name}>{v_8a1355}</Text>
              </View>
              <Text style={v_d81136.email}>{v_b43178}</Text>
            </View>
            <TouchableOpacity
              style={v_d81136.referralBtn}
              onPress={() => v_9b57fc('ReferralShare')}
              activeOpacity={0.7}
            >
              <Ionicons name="share-social-outline" size={24} color={v_1bfbd0.text} />
              <Text style={v_d81136.referralText}>{v_8d41d7('profile.referral')}</Text>
            </TouchableOpacity>
          </View>

          {

}

          {}
          <View style={v_d81136.menuCard}>
            {v_0dea6d.map((v_8c0b26, v_a56041) => (
              <TouchableOpacity
                key={v_8c0b26.id}
                style={[
                  v_d81136.menuItem,
                  v_a56041 < v_0dea6d.length - 1 && v_d81136.menuItemBorder,
                ]}
                onPress={
                  v_8c0b26.isLogout
                    ? v_06b8a4
                    : 'action' in v_8c0b26 && v_8c0b26.action
                    ? v_8cc2b1
                    : () => v_9b57fc((v_8c0b26 as { route: keyof v_8ad91b }).route as any)
                }
                activeOpacity={0.88}
              >
                {v_8c0b26.isLogout ? (
                  <>
                    <View style={v_d81136.menuIconWrap}>
                      {v_d11128 ? (
                        <ActivityIndicator size="small" color={v_1bfbd0.text} />
                      ) : (
                        <Ionicons name="log-out-outline" size={24} color={v_1bfbd0.text} />
                      )}
                    </View>
                    <Text style={[v_d81136.menuItemTextLogout, { color: v_1bfbd0.text }]}>
                      {v_d11128 ? v_8d41d7('profile.logging_out', '로그아웃 중...') : v_8c0b26.title}
                    </Text>
                  </>
                ) : 'action' in v_8c0b26 && v_8c0b26.action ? (
                  <>
                    <View style={v_d81136.menuIconWrap}>
                      {v_d9166c ? (
                        <ActivityIndicator size="small" color={v_1bfbd0.text} />
                      ) : (
                        <Ionicons name="water-outline" size={24} color={v_1bfbd0.text} />
                      )}
                    </View>
                    <Text style={v_d81136.menuItemText}>
                      {v_d9166c ? v_8d41d7('profile.api_loading', '요청 중...') : v_8c0b26.title}
                    </Text>
                  </>
                ) : (
                  <>
                    <View style={v_d81136.menuIconWrap}>
                      <Feather
                        name={v_8c0b26.iconName}
                        size={24}
                        color={v_1bfbd0.text}
                      />
                    </View>
                    <Text style={v_d81136.menuItemText}>{v_8c0b26.title}</Text>
                  </>
                )}
                <Feather name="chevron-right" size={20} color="#9CA3AF" />
              </TouchableOpacity>
            ))}
          </View>

          {}
          <View style={v_d81136.footer}>
            <Text style={v_d81136.footerText}>{v_8d41d7('profile.app_version')}</Text>
            <Text style={v_d81136.footerText}>{v_8d41d7('profile.copyright')}</Text>
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
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: v_9b1a04.medium,
    fontSize: v_ef658a.small,
    color: v_1bfbd0.secondaryText,
  },
  errorText: {
    fontSize: v_ef658a.medium,
    color: v_1bfbd0.secondaryText,
    textAlign: 'center',
  },
  retryBtn: {
    marginTop: v_9b1a04.medium,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: v_1bfbd0.primary,
    borderRadius: 8,
  },
  retryBtnText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: '#FFFFFF',
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

  nftInfoCard: {
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
  nftInfoContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: v_9b1a04.small,
  },
  nftInfoText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
  },
  nftInfoCount: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.bold,
    color: '#2B7FFF',
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: v_9b1a04.medium,
    marginBottom: v_9b1a04.small,
    borderWidth: 1,
    borderColor: v_1bfbd0.borderLight,
  },
  tierBadge: {
    width: 80,
    height: 80,
    marginRight: 12,
    marginBottom: -12,
  },
  profileInfo: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 2,
  },
  name: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
  },
  businessBadge: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  businessBadgeText: {
    fontSize: 10,
    fontFamily: v_843035.bold,
    color: '#FFFFFF',
  },
  email: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
  },
  referralBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  referralText: {
    fontSize: 12,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.text,
    marginTop: 4,
  },
  metricsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: v_9b1a04.medium,
  },
  metricCard: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 16,
    padding: v_9b1a04.small,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: v_1bfbd0.borderLight,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  metricCardBlue: {
    borderTopWidth: 3,
    borderTopColor: '#3B82F6',
  },
  metricCardPink: {
    borderTopWidth: 3,
    borderTopColor: '#EC4899',
  },
  metricCardYellow: {
    borderTopWidth: 3,
    borderTopColor: '#F59E0B',
  },
  metricIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  metricIconWrapBlue: {
    backgroundColor: '#EFF6FF',
  },
  metricIconWrapPink: {
    backgroundColor: '#FDF2F8',
  },
  metricIconWrapYellow: {
    backgroundColor: '#FFFBEB',
  },
  metricValue: {
    fontSize: 24,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
    marginBottom: 2,
    letterSpacing: -0.5,
  },
  metricLabel: {
    fontSize: 11,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.secondaryText,
    textAlign: 'center',
    lineHeight: 14,
  },
  menuCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: v_1bfbd0.borderLight,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: v_9b1a04.medium,
  },
  menuItemBorder: {
    borderBottomWidth: v_472849.hairlineWidth,
    borderBottomColor: '#E5E7EB',
  },
  menuIconWrap: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  menuItemText: {
    flex: 1,
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
  },
  menuItemTextLogout: {
    flex: 1,
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: v_9b1a04.xlarge,
    marginTop: v_9b1a04.medium,
    gap: 4,
  },
  footerText: {
    fontSize: 12,
    fontFamily: v_843035.regular,
    color: '#9CA3AF',
  },
});

export default v_03a231;
