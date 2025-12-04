import v_a3453e from 'bapkr';
import { v_472849, v_3094a2 } from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../../constants';
import { v_729608, v_ae275d, v_570c34 } from '../../components';
import type { v_8ad91b } from '../../navigation';
import { v_a0daa8 } from '../../navigation';

type Props = v_432191<v_8ad91b, 'MyInfoClauses'>;

const MyInfoClausesScreen: v_a3453e.FC<Props> = () => {
  const { navigate: v_9b57fc, goBack: v_c7ac57 } = v_a0daa8();

  const v_f82747 = [
    {
      id: 'terms',
      title: '이용약관',
      description: 'Terms of Service',
      iconName: 'file-document' as const,
      clauseType: 'terms' as const,
    },
    {
      id: 'privacy',
      title: '개인정보 처리방침',
      description: 'Privacy Policy',
      iconName: 'shield-lock' as const,
      clauseType: 'privacy' as const,
    },
  ];

  return (
    <View style={v_d81136.container}>
      <Header title="Clause" showBackButton onBackPress={v_c7ac57} />
      <SafeScrollView style={v_d81136.scrollView} contentContainerStyle={v_d81136.content}>
        <View style={v_d81136.menuSection}>
          {v_f82747.map((v_8c0b26) => (
            <DashboardListItem
              key={v_8c0b26.id}
              title={v_8c0b26.title}
              description={v_8c0b26.description}
              iconName={v_8c0b26.iconName}
              onPress={() => v_9b57fc('ClauseDetail', { clauseType: v_8c0b26.clauseType })}
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

export default v_41dfd5;

