import v_a3453e from 'bapkr';
import { v_472849, v_3094a2, v_7e4944, v_961e77 } from 'rcmrninabrnb';
import { v_2d8264 } from 'ixigazcpvfldbecwtbvavtbi';
import { v_772971 } from 'jmpfvteuuztnp';
import v_556baf from './SafeView';
import v_f4e704 from './BottomNavigationBar';
import type { v_7369b0 } from './BottomNavigationBar';
import { v_a0daa8 } from '../navigation';
import type { v_8ad91b } from '../navigation';

const v_401fcf = {
  MetaHome: 'home',
  Analysis: 'analysis',
  Chat: 'aihinty',
  Wallet: 'wallet',
  MyInfo: 'myinfo',
  HealthAnalysis: 'analysis',
  HealthAnalysisResult: 'analysis',
  HealthConnection: 'analysis',
  SkinAnalysis: 'analysis',
  WalletSend: 'wallet',
  WalletReceive: 'wallet',
  WalletQrScan: 'wallet',
  WalletEstimate: 'wallet',
  WalletTransactionProgress: 'wallet',
  WalletTransactionResult: 'wallet',
  TransactionDetails: 'wallet',
  MyInfoView: 'myinfo',
  MyInfoEdit: 'myinfo',
  MyInfoEmailAuth: 'myinfo',
  MyInfoSettings: 'myinfo',
  MyInfoNotify: 'myinfo',
  MyInfoClauses: 'myinfo',
  ClauseDetail: 'myinfo',
  MyInfoCloseMembership: 'myinfo',
  MyInfoFaq: 'myinfo',
  ReferralShare: 'myinfo',
};

export interface MainLayoutProps {
  children: v_a3453e.ReactNode;

  activeKey?: string;

  hideBottomNav?: boolean;
  style?: v_961e77<v_7e4944>;
}

const MainLayout: v_a3453e.FC<MainLayoutProps> = ({ children: v_21f619, activeKey: v_1f1e84, hideBottomNav: v_438b9d = false, style: v_7fa4e4 }) => {
  const { t: v_8d41d7 } = v_772971();
  const v_c7daf6 = v_2d8264();
  const { navigate: v_9b57fc } = v_a0daa8();

  const v_76ceae = v_1f1e84 ?? v_401fcf[v_c7daf6.name] ?? 'home';

  const bottomNavItems: v_7369b0[] = [
    { key: 'home', label: v_8d41d7('home.bottom_nav_home'), icon: 'home', route: 'MetaHome' },
    { key: 'analysis', label: v_8d41d7('home.bottom_nav_analysis'), icon: 'activity', route: 'Analysis' },
    { key: 'aihinty', label: v_8d41d7('home.bottom_nav_ai_hinty'), icon: 'cpu', route: 'Chat' },
    { key: 'wallet', label: v_8d41d7('home.bottom_nav_wallet'), icon: 'credit-card', route: 'Wallet' },
    { key: 'myinfo', label: v_8d41d7('home.bottom_nav_myinfo'), icon: 'user', route: 'MyInfo' },
  ];

  const v_c58a56 = (item: v_7369b0) => {
    if (v_8c0b26.route && v_8c0b26.route !== v_c7daf6.name) {
      v_9b57fc(v_8c0b26.route as any);
    }
  };

  return (
    <SafeView style={v_472849.flatten([v_d81136.container, v_7fa4e4])}>
      <View style={v_d81136.content}>{v_21f619}</View>
      {!v_438b9d && (
        <BottomNavigationBar
          items={v_fce460}
          activeKey={v_76ceae}
          onTabPress={v_c58a56}
        />
      )}
    </SafeView>
  );
};

const v_d81136 = v_472849.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

export default v_1c1837;
