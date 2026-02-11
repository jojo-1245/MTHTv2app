import v_a3453e from 'bapkr';
import {
  v_472849,
  v_19b633,
  v_3094a2,
  v_cf9c33,
  v_4623af,
  v_07a341,
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

type Props = v_432191<v_8ad91b, 'MyInfo'>;

const v_204782 = require('../../../assets/images/myinfo_gold.png');
const v_46b407 = require('../../../assets/images/myinfo_silver.png');

type TierType = 'silver' | 'gold';

const MyInfoScreen: v_a3453e.FC<Props> = () => {
  const { t: v_8d41d7 } = v_772971();
  const { navigate: v_9b57fc } = v_a0daa8();
  const v_033e14 = v_e0068c();

  const [v_ec980c] = v_a3453e.useState<TierType>('gold'); 
  const tierImage: v_07a341 = v_ec980c === 'gold' ? v_204782 : v_46b407;

  const v_338926 = {
    consecutiveDays: 42,
    analysesCompleted: 128,
    purchasesCompleted: 15,
  };

  const menuItems: Array<
    | {
      id: string;
      title: string;
      description: string;
      iconName: 'edit-2' | 'bell' | 'help-circle' | 'file-text' | 'settings';
      route: keyof v_8ad91b;
      isLogout?: false;
    }
    | { id: string; title: string; isLogout: true }
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
    ];

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
              <Text style={v_d81136.name}>김건강</Text>
              <Text style={v_d81136.email}>healthy@metahint.com</Text>
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

          {}
          <TouchableOpacity
            style={v_d81136.nftInfoCard}
            onPress={() => v_9b57fc('ProfitDistribution')}
            activeOpacity={0.85}
            accessibilityRole="button"
            accessibilityLabel={v_8d41d7('profile.nft_held')}
          >
            <View style={v_d81136.nftInfoContent}>
              <Ionicons name="layers-outline" size={24} color="#2B7FFF" />
              <Text style={v_d81136.nftInfoText}>
                {v_8d41d7('profile.nft_held')} <Text style={v_d81136.nftInfoCount}>50{v_8d41d7('profile.nft_unit')}</Text>
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={v_1bfbd0.secondaryText} />
          </TouchableOpacity>

          {}
          <View style={v_d81136.metricsRow}>
            <View style={[v_d81136.metricCard, v_d81136.metricCardBlue]}>
              <View style={[v_d81136.metricIconWrap, v_d81136.metricIconWrapBlue]}>
                <Ionicons name="calendar-outline" size={20} color="#3B82F6" />
              </View>
              <Text style={v_d81136.metricValue}>{v_338926.consecutiveDays}</Text>
              <Text style={v_d81136.metricLabel}>{v_8d41d7('profile.consecutive_days')}</Text>
            </View>
            <View style={[v_d81136.metricCard, v_d81136.metricCardPink]}>
              <View style={[v_d81136.metricIconWrap, v_d81136.metricIconWrapPink]}>
                <Ionicons name="checkmark-circle-outline" size={20} color="#EC4899" />
              </View>
              <Text style={v_d81136.metricValue}>{v_338926.analysesCompleted}</Text>
              <Text style={v_d81136.metricLabel}>{v_8d41d7('profile.analyses_completed')}</Text>
            </View>
            <View style={[v_d81136.metricCard, v_d81136.metricCardYellow]}>
              <View style={[v_d81136.metricIconWrap, v_d81136.metricIconWrapYellow]}>
                <Ionicons name="bag-outline" size={20} color="#F59E0B" />
              </View>
              <Text style={v_d81136.metricValue}>{v_338926.purchasesCompleted}</Text>
              <Text style={v_d81136.metricLabel}>{v_8d41d7('profile.purchases_completed')}</Text>
            </View>
          </View>

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
                    ? () => v_9b57fc('Login')
                    : () => v_9b57fc((v_8c0b26 as { route: keyof v_8ad91b }).route as any)
                }
                activeOpacity={0.88}
              >
                {v_8c0b26.isLogout ? (
                  <>
                    <View style={v_d81136.menuIconWrap}>
                      <Ionicons name="log-out-outline" size={24} />
                    </View>
                    <Text style={v_d81136.menuItemTextLogout}>{v_8c0b26.title}</Text>
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
    backgroundColor: '#F9FAFB'
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
  name: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
    marginBottom: 2,
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
