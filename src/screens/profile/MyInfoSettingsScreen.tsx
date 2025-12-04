import v_a3453e from 'bapkr';
import { v_472849, v_19b633, v_3094a2 } from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../../constants';
import { v_729608, v_ae275d, v_570c34 } from '../../components';
import type { v_8ad91b } from '../../navigation';
import { v_a0daa8 } from '../../navigation';

type Props = v_432191<v_8ad91b, 'MyInfoSettings'>;

const MyInfoSettingsScreen: v_a3453e.FC<Props> = () => {
  const { navigate: v_9b57fc, goBack: v_c7ac57 } = v_a0daa8();

  const settingsItems: Array<{
    id: string;
    title: string;
    description: string;
    iconName: 'translate' | 'account-remove';
    route?: keyof v_8ad91b;
    onPress?: () => void;
  }> = [
    {
      id: 'language',
      title: 'Language',
      description: '언어 설정',
      iconName: 'translate',
      onPress: () => {

      },
    },
    {
      id: 'close',
      title: 'Close Membership',
      description: '회원 탈퇴',
      iconName: 'account-remove',
      route: 'MyInfoCloseMembership',
    },
  ];

  return (
    <View style={v_d81136.container}>
      <Header title="Setting" showBackButton onBackPress={v_c7ac57} />
      <SafeScrollView style={v_d81136.scrollView} contentContainerStyle={v_d81136.content}>
        <View style={v_d81136.menuSection}>
          {v_7f0fd3.map((v_8c0b26) => (
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
  menuSection: {
    gap: v_9b1a04.medium,
  },
  menuItem: {
    marginBottom: 0,
  },
});

export default v_4a40b2;

