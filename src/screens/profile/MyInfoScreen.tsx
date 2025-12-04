import v_a3453e from 'bapkr';
import { v_472849, v_19b633, v_3094a2, v_cf9c33, v_4623af } from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../../constants';
import { v_729608, v_ae275d, v_570c34 } from '../../components';
import type { v_8ad91b } from '../../navigation';
import { v_a0daa8 } from '../../navigation';
import { v_f832ec } from 'zvyjokvuouwvifyzks';

type Props = v_432191<v_8ad91b, 'MyInfo'>;

const MyInfoScreen: v_a3453e.FC<Props> = () => {
  const { navigate: v_9b57fc } = v_a0daa8();

  const v_0dea6d = [
    {
      id: 'edit',
      title: 'Edit My Info',
      description: '내 정보 수정',
      iconName: 'account-edit' as const,
      route: 'MyInfoEdit' as const,
    },
    {
      id: 'email',
      title: 'Email Authentification',
      description: '이메일 인증',
      iconName: 'email-check' as const,
      route: 'MyInfoEmailAuth' as const,
    },
    {
      id: 'settings',
      title: 'Setting',
      description: '설정',
      iconName: 'cog' as const,
      route: 'MyInfoSettings' as const,
    },
    {
      id: 'notify',
      title: 'Notify',
      description: '알림 설정',
      iconName: 'bell' as const,
      route: 'MyInfoNotify' as const,
    },
    {
      id: 'clauses',
      title: 'Clause',
      description: '약관 목록',
      iconName: 'file-document' as const,
      route: 'MyInfoClauses' as const,
    },
    {
      id: 'faq',
      title: '자주 묻는 질문',
      description: 'FAQ',
      iconName: 'help-circle' as const,
      route: 'MyInfoFaq' as const,
    },
    {
      id: 'logout',
      title: 'Logout',
      description: '로그아웃',
      iconName: 'logout' as const,

      onPress: () => {
        v_9b57fc('Login');
      },
    },
  ];

  return (
    <View style={v_d81136.container}>
      <Header title="My Info" showBackButton onBackPress={() => v_9b57fc('MetaHome')} />
      <SafeScrollView
        style={v_d81136.scrollView}
        contentContainerStyle={v_d81136.content}
      >
        <View style={v_d81136.profileSection}>
          <View style={v_d81136.avatarContainer}>
            <Image
              source={require('../../../assets/images/logo.png')}
              style={v_d81136.avatar}
              resizeMode="contain"
            />
          </View>
          <Text style={v_d81136.name}>User Name</Text>
          <Text style={v_d81136.email}>user@example.com</Text>
        </View>

        <View style={v_d81136.menuSection}>
          {v_0dea6d.map((v_8c0b26) => (
            <DashboardListItem
              key={v_8c0b26.id}
              title={v_8c0b26.title}
              description={v_8c0b26.description}
              iconName={v_8c0b26.iconName}
              onPress={v_8c0b26.route ? () => v_9b57fc(v_8c0b26.route as any) : v_8c0b26.onPress}
              style={v_d81136.menuItem}
            />
          ))}
        </View>
      </SafeScrollView>
    </View>
  );
};

const v_d81136 = v_472849.create({
  container: {
    flex: 1,
    backgroundColor: v_1bfbd0.background,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: v_9b1a04.large,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: v_9b1a04.xlarge,
    paddingVertical: v_9b1a04.large,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: v_1bfbd0.backgroundSecondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: v_9b1a04.medium,
  },
  avatar: {
    width: 80,
    height: 80,
  },
  name: {
    fontSize: 20,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
    marginBottom: v_9b1a04.small,
  },
  email: {
    fontSize: 14,
    color: v_1bfbd0.secondaryText,
  },
  menuSection: {
    gap: v_9b1a04.medium,
  },
  menuItem: {
    marginBottom: 0,
  },
});

export default v_03a231;

