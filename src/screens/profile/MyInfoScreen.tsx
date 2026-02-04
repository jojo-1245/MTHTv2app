import v_a3453e from 'bapkr';
import { v_472849, v_19b633, v_3094a2, v_cf9c33, v_4623af } from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../../constants';
import { v_729608, v_ae275d, v_570c34, v_1c1837 } from '../../components';
import type { v_8ad91b } from '../../navigation';
import { v_a0daa8 } from '../../navigation';
import { v_25515d } from 'zvyjokvuouwvifyzks';

import { v_772971 } from 'jmpfvteuuztnp';

type Props = v_432191<v_8ad91b, 'MyInfo'>;

const MyInfoScreen: v_a3453e.FC<Props> = () => {
  const { t: v_8d41d7 } = v_772971();
  const { navigate: v_9b57fc } = v_a0daa8();

  const v_0dea6d = [
    {
      id: 'edit',
      title: v_8d41d7('profile.edit_my_info'),
      description: v_8d41d7('profile.edit_my_info_desc'),
      iconName: 'account-edit' as const,
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
      id: 'clauses',
      title: v_8d41d7('profile.clause'),
      description: v_8d41d7('profile.clause_desc'),
      iconName: 'file-document' as const,
      route: 'MyInfoClauses' as const,
    },
    {
      id: 'faq',
      title: v_8d41d7('profile.faq'),
      description: v_8d41d7('profile.faq_desc'),
      iconName: 'help-circle' as const,
      route: 'MyInfoFaq' as const,
    },
    {
      id: 'settings',
      title: v_8d41d7('profile.settings'),
      description: v_8d41d7('profile.settings_desc'),
      iconName: 'cog' as const,
      route: 'MyInfoSettings' as const,
    },
  ];

  return (
    <MainLayout activeKey="myinfo">
      <View style={v_d81136.container}>
        <Header
          title={v_8d41d7('profile.title')}
          showBackButton
          onBackPress={() => v_9b57fc('MetaHome')}
          rightAccessory={
            <TouchableOpacity
              style={v_d81136.shareButton}
              onPress={() => v_9b57fc('ReferralShare')}
              activeOpacity={0.7}
            >
              <View style={v_d81136.shareButtonContent}>
                <Ionicons name="share-social-outline" size={24} color={v_1bfbd0.text} />
                <Text style={v_d81136.shareButtonText}>{v_8d41d7('profile.referral')}</Text>
              </View>
            </TouchableOpacity>
          }
        />
        <SafeScrollView
          style={v_d81136.scrollView}
          contentContainerStyle={v_d81136.content}
        >
          <View style={v_d81136.profileSection}>
            <View style={v_d81136.profileInfoSection}>
              <Text style={v_d81136.name}>User Name</Text>
              <Text style={v_d81136.email}>user@example.com</Text>
            </View>
            <View style={v_d81136.iconSection}>
              {}
              <TouchableOpacity style={[v_d81136.iconWrapper]} onPress={() => { v_9b57fc('Login'); }}>
                <Ionicons name="log-out-outline" size={24} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={v_d81136.menuSection}>
            {v_0dea6d.map((v_8c0b26) => (
              <DashboardListItem
                key={v_8c0b26.id}
                title={v_8c0b26.title}
                description={v_8c0b26.description}
                iconName={v_8c0b26.iconName}
                onPress={v_8c0b26.route ? () => v_9b57fc(v_8c0b26.route as any) : undefined}
              />
            ))}
          </View>
        </SafeScrollView>
      </View>
    </MainLayout>
  );
};

const v_d81136 = v_472849.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: v_9b1a04.large,
    paddingVertical: v_9b1a04.large,
  },
  name: {
    fontSize: 20,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
  },
  email: {
    fontSize: 14,
    color: v_1bfbd0.secondaryText,
  },
  menuSection: {
    gap: v_9b1a04.medium,
    paddingBottom: v_9b1a04.large,
  },

  profileSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginBottom: v_9b1a04.xlarge,
    paddingVertical: v_9b1a04.large,
    paddingHorizontal: v_9b1a04.large,
  },
  profileInfoSection: {
    alignItems: 'flex-start',
  },

  iconSection: {
    flexDirection: 'row',
    gap: v_9b1a04.medium,
    alignItems: 'center',
    color: v_1bfbd0.buttonPrimary,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F4F6FB",
    borderWidth: 1,
    borderColor: "#E6F0FF",
    alignItems: 'center',
    justifyContent: 'center',
  },
  shareButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  shareButtonContent: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  shareButtonText: {
    fontSize: 12,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.text,
  },
});

export default v_03a231;

