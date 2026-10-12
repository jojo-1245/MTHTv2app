import v_a3453e from 'bapkr';
import { v_472849, v_3094a2, v_7e4944, v_961e77 } from 'rcmrninabrnb';
import { v_2d8264 } from 'ixigazcpvfldbecwtbvavtbi';
import { v_772971 } from 'jmpfvteuuztnp';
import v_556baf from './SafeView';
import v_f4e704 from './BottomNavigationBar';
import type { v_7369b0 } from './BottomNavigationBar';
import { v_a0daa8 } from '../navigation';
import { v_1f53bf } from '../hooks/useSystemConfig';
import { v_5a0119 } from '../hooks/useUserRole';
import { v_4b2942 } from '../context/PharmacistGuestContext';
import { v_5ab0fb } from '../services/linking';
import { v_889fad } from './AlertHost';

const v_eecdb6 = {
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
  DataConsentSettings: 'myinfo',
  ReferralShare: 'myinfo',
  MyReferrals: 'myinfo',
  ReferralSales: 'myinfo',
  RecommendedSupplements: 'myinfo',
};

const v_b76a69 = {
  PharmacistHome: 'home',
  HealthAnalysis: 'health',
  HealthAnalysisResult: 'health',
  HealthComparison: 'health',
  HealthConnection: 'health',
  Chat: 'aihinty',
  SkinAnalysis: 'skin',
  SkinComparison: 'skin',
  MyInfo: 'myinfo',
  MyInfoView: 'myinfo',
  MyInfoEdit: 'myinfo',
  MyInfoEmailAuth: 'myinfo',
  MyInfoSettings: 'myinfo',
  MyInfoNotify: 'myinfo',
  MyInfoClauses: 'myinfo',
  ClauseDetail: 'myinfo',
  MyInfoCloseMembership: 'myinfo',
  MyInfoFaq: 'myinfo',
  DataConsentSettings: 'myinfo',
  RecommendedSupplements: 'myinfo',
};

const v_e7e9e9 = new Set(['health', 'skin']);

export interface MainLayoutProps {
  children: v_a3453e.ReactNode;
  activeKey?: string;
  hideBottomNav?: boolean;
  style?: v_961e77<v_7e4944>;
}

const MainLayout: v_a3453e.FC<MainLayoutProps> = ({
  children: v_21f619,
  activeKey: v_1f1e84,
  hideBottomNav: v_438b9d = false,
  style: v_7fa4e4,
}) => {
  const { t: v_8d41d7 } = v_772971();
  const v_c7daf6 = v_2d8264();
  const { navigate: v_9b57fc } = v_a0daa8();
  const { walletTabHidden: v_61bcc3, walletTabUrl: v_a2243f } = v_1f53bf();
  const v_5f6b8d = v_5a0119();
  const { isGuestVerified: v_28d94d } = v_4b2942();
  const v_160272 = v_5f6b8d === 'pharmacist';

  const v_0e92ea = v_160272 ? v_b76a69 : v_eecdb6;
  const v_76ceae =
    (v_160272 ? v_0e92ea[v_c7daf6.name] : undefined) ??
    v_1f1e84 ??
    v_0e92ea[v_c7daf6.name] ??
    'home';

  const v_695971 = !!v_61bcc3 && !v_160272;
  const v_f86766 = v_695971 ? 'MetaHint' : v_8d41d7('home.bottom_nav_wallet');

  const generalNavItems: v_7369b0[] = [
    { key: 'home', label: v_8d41d7('home.bottom_nav_home'), icon: 'home', route: 'MetaHome' },
    { key: 'analysis', label: v_8d41d7('home.bottom_nav_analysis'), icon: 'activity', route: 'Analysis' },
    { key: 'aihinty', label: v_8d41d7('home.bottom_nav_ai_hinty'), icon: 'cpu', route: 'Chat' },
    { key: 'wallet', label: v_f86766, icon: 'credit-card', route: 'Wallet' },
    { key: 'myinfo', label: v_8d41d7('home.bottom_nav_myinfo'), icon: 'user', route: 'MyInfo' },
  ];

  const pharmacistNavItems: v_7369b0[] = [
    { key: 'home', label: v_8d41d7('home.bottom_nav_home'), icon: 'home', route: 'PharmacistHome' },
    { key: 'health', label: v_8d41d7('pharmacist.bottom_nav_health'), icon: 'activity', route: 'HealthAnalysis' },
    { key: 'aihinty', label: v_8d41d7('home.bottom_nav_ai_hinty'), icon: 'cpu', route: 'Chat' },
    { key: 'skin', label: v_8d41d7('pharmacist.bottom_nav_skin'), icon: 'droplet', route: 'SkinAnalysis' },
    { key: 'myinfo', label: v_8d41d7('home.bottom_nav_myinfo'), icon: 'user', route: 'MyInfo' },
  ];

  const v_fce460 = v_160272 ? v_d65ad7 : v_8e9b46;

  const v_c58a56 = (item: v_7369b0) => {
    if (v_160272 && v_e7e9e9.has(v_8c0b26.key) && !v_28d94d) {
      v_889fad(
        v_8d41d7('pharmacist.guest_auth.required_title'),
        v_8d41d7('pharmacist.guest_auth.required_message'),
        [
          { text: v_8d41d7('common.cancel'), style: 'cancel' },
          {
            text: v_8d41d7('pharmacist.guest_auth.go_verify'),
            onPress: () => v_9b57fc('PharmacistHome' as never),
          },
        ]
      );
      return;
    }

    if (!v_160272 && v_8c0b26.key === 'wallet' && v_695971) {
      if (v_a2243f) {
        v_5ab0fb(v_a2243f);
      } else {
        v_5ab0fb('https://service-mh.example.invalid');
      }
      return;
    }

    if (v_8c0b26.route && v_8c0b26.route !== v_c7daf6.name) {
      v_9b57fc(v_8c0b26.route as never);
    }
  };

  return (
    <SafeView
      style={v_472849.flatten([
        v_d81136.container,
        v_160272 ? v_d81136.pharmacistContainer : null,
        v_7fa4e4,
      ])}
    >
      <View style={v_d81136.content}>{v_21f619}</View>
      {!v_438b9d && (
        <BottomNavigationBar
          items={v_fce460}
          activeKey={v_76ceae}
          onTabPress={v_c58a56}
          homepageMode={v_695971}
          variant={v_160272 ? 'tablet' : 'default'}
        />
      )}
    </SafeView>
  );
};

const v_d81136 = v_472849.create({
  container: {
    flex: 1,
    width: '100%',
    alignSelf: 'stretch',
  },
  pharmacistContainer: {
    backgroundColor: '#FAFAFA',
  },
  content: {
    flex: 1,
    width: '100%',
    alignSelf: 'stretch',
  },
});

export default v_1c1837;
