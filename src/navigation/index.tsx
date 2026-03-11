import v_a3453e from 'bapkr';
import { v_ac28fd } from 'ixigazcpvfldbecwtbvavtbi';
import { v_709be7 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_60875a } from './rootNavigationRef';
import v_7af305 from '../screens/IntroScreen';
import v_c316d8 from '../screens/HomeScreen';
import v_7aeeb0 from '../screens/MetaHomeScreen';
import v_f4f851 from '../screens/LoginScreen';
import v_f40fc5 from '../screens/SignupScreen';
import v_a82b55 from '../screens/EmailVerificationScreen';
import v_040c8f from '../screens/ForgotPasswordScreen';
import v_0d311d from '../screens/PasswordVerificationScreen';
import v_db1cc4 from '../screens/ResetPasswordScreen';
import v_873cfb from '../screens/PasswordChangedScreen';
import v_c1e2b5 from '../screens/CountrySelectScreen';
import { v_952e24 } from '../screens/wallet/WalletScreen';
import { v_5b640b } from '../screens/wallet/WalletSendScreen';
import { v_2ba37d } from '../screens/wallet/WalletQrScanScreen';
import { v_31216c } from '../screens/wallet/WalletTransactionProgressScreen';
import { v_1cd2a2 } from '../screens/wallet/WalletTransactionResultScreen';
import { v_e1bcc7 } from '../screens/wallet/WalletTokenDetailScreen';
import { v_a023f9 } from '../screens/wallet/WalletReceiveScreen';
import { v_4ab181 } from '../screens/FontTestScreen';
import v_03a231 from '../screens/profile/MyInfoScreen';
import v_22c7ba from '../screens/profile/MyInfoViewScreen';
import v_cdb169 from '../screens/profile/MyInfoEditScreen';
import v_dec378 from '../screens/profile/MyInfoEmailAuthScreen';
import v_4a40b2 from '../screens/profile/MyInfoSettingsScreen';
import v_386af2 from '../screens/profile/MyInfoNotifyScreen';
import v_41dfd5 from '../screens/profile/MyInfoClausesScreen';
import v_5fdcb2 from '../screens/profile/ClauseDetailScreen';
import v_9e06f6 from '../screens/profile/MyInfoCloseMembershipScreen';
import v_083aa7 from '../screens/profile/MyInfoFaqScreen';
import v_52f825 from '../screens/profile/ReferralShareScreen';
import v_f97d8b from '../screens/profile/ProfitDistributionScreen';
import { v_852e99, v_8b28f5 } from '../screens/skin';
import { v_daf220, v_cb47c8, v_71e66c, v_1b8038 } from '../screens/health';
import v_7f9fad from '../screens/AnalysisScreen';
import { v_02d653 } from '../screens/chat';
import v_67f088 from '../screens/AddSubAccountScreen';

export type RootStackParamList = {
  Intro: undefined;
  Home: undefined;
  MetaHome: undefined;
  Login: undefined;
  Signup: { referralCode?: string } | { email?: string; fromSocial?: 'google' | 'apple' | 'kakao' | 'naver' } | undefined;
  ForgotPassword: undefined;
  PasswordVerification: undefined;
  ResetPassword: undefined;
  PasswordChanged: undefined;
  EmailVerification:
  | {
    email?: string;
    purpose?: 'signup' | 'password_reset' | 'profile_change';
    redirectTo?: keyof RootStackParamList;
  }
  | undefined;
  CountrySelect:
  | {
    mode?: 'country' | 'region';
  }
  | undefined;
  Wallet: undefined;
  WalletSend:
  | {
      tokenData: {
        id: string;
        title: string;
        subtitle?: string;
        amount?: string;
        suffix?: string;
        iconSource?: any;
        badgeLabel?: string;
        fallbackLabel?: string;
        fallbackColors?: string[];
      };
    }
  | undefined;
  WalletReceive:
  | {
    title?: string;
    iconSource?: any;
    tokenName?: string;
  }
  | undefined;
  WalletQrScan: undefined;
  WalletEstimate: undefined;
  WalletTransactionProgress:
  | {
      tokenData?: {
        id: string;
        title: string;
        subtitle?: string;
        amount?: string;
        suffix?: string;
        iconSource?: any;
        badgeLabel?: string;
        fallbackLabel?: string;
        fallbackColors?: string[];
      };
    }
  | undefined;
  WalletTransactionResult: undefined;
  TransactionDetails: undefined;
  WalletTokenDetail: {
    tokenData: {
      id: string;
      title: string;
      subtitle?: string;
      amount?: string;
      suffix?: string;
      iconSource?: any;
      badgeLabel?: string;
      fallbackLabel?: string;
      fallbackColors?: string[];
    };
  };
  FontTest: undefined;
  MyInfo: undefined;
  MyInfoView: undefined;
  MyInfoEdit: undefined;
  MyInfoEmailAuth: undefined;
  MyInfoSettings: undefined;
  MyInfoNotify: undefined;
  MyInfoClauses: undefined;
  ClauseDetail: {
    clauseType: 'terms' | 'privacy';
  };
  MyInfoCloseMembership: undefined;
  MyInfoFaq: undefined;
  ReferralShare: undefined;
  ProfitDistribution: undefined;
  SkinAnalysis: { previewResult?: boolean; initialTab?: 'measure' | 'records' } | undefined;
  SkinComparison: {
    recordA: { id: string; date: string; time: string; overallScore: number; skinAge: number; gradeKey: string; items: { key: string; label: string; score: number }[]; cautionKeys: string[] };
    recordB: { id: string; date: string; time: string; overallScore: number; skinAge: number; gradeKey: string; items: { key: string; label: string; score: number }[]; cautionKeys: string[] };
    userName?: string;
  };
  Analysis: undefined;
  HealthAnalysis: { initialTab?: 'measure' | 'records'; resetToIntro?: boolean } | undefined;
  HealthAnalysisResult: {
    results: Record<string, { value: any; confidence?: any }>;
    timestamp: string;
    userName?: string;
    accounts?: Array<{ id: string; name: string; isCurrent?: boolean }>;
    selectedAccountId?: string;
    userInfo?: {
      age?: string;
      gender?: 'male' | 'female' | null;
      weight?: string;
      height?: string;
      smokingStatus?: 'smoker' | 'non_smoker' | 'unspecified' | null;
      bloodPressureStatus?: 'normal' | 'low' | 'high' | null;
    };

    savedBeforeNavigate?: boolean;
  };
  HealthComparison: {
    recordA: { id: string; date: string; time: string; healthIndex: number; items: any[] };
    recordB: { id: string; date: string; time: string; healthIndex: number; items: any[] };
    userName?: string;
  };
  HealthConnection: undefined;
  Chat: {
    initialSearchText?: string;
    initialHealthInfo?: { id: string; name: string } | null;
    attachedHealthSummary?: string;
    attachedSkinSummary?: string;
  } | undefined;
  AddSubAccount: {
    showEmailSearch?: boolean;
    subAccountId?: string;
  } | undefined;
};

const v_cb3606 = v_709be7<RootStackParamList>();

export const AppNavigator: v_a3453e.FC = () => {
  return (
    <NavigationContainer ref={v_60875a}>
      <Stack.Navigator
        initialRouteName="Intro"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Intro" component={v_7af305} />
        <Stack.Screen name="Home" component={v_c316d8} />
        <Stack.Screen name="MetaHome" component={v_7aeeb0} />
        <Stack.Screen name="Login" component={v_f4f851} />
        <Stack.Screen name="Signup" component={v_f40fc5} />
        <Stack.Screen name="ForgotPassword" component={v_040c8f} />
        <Stack.Screen name="PasswordVerification" component={v_0d311d} />
        <Stack.Screen name="ResetPassword" component={v_db1cc4} />
        <Stack.Screen name="PasswordChanged" component={v_873cfb} />
        <Stack.Screen name="EmailVerification" component={v_a82b55} />
        <Stack.Screen name="CountrySelect" component={v_c1e2b5} />
        <Stack.Screen name="Wallet" component={v_952e24} />
        <Stack.Screen name="WalletSend" component={v_5b640b} />
        <Stack.Screen name="WalletReceive" component={v_a023f9} />
        <Stack.Screen name="WalletQrScan" component={v_2ba37d} />
        <Stack.Screen name="WalletEstimate" component={v_31216c} />
        <Stack.Screen name="WalletTransactionProgress" component={v_31216c} />
        <Stack.Screen name="WalletTransactionResult" component={v_1cd2a2} />
        <Stack.Screen name="TransactionDetails" component={v_1cd2a2} />
        <Stack.Screen name="WalletTokenDetail" component={v_e1bcc7} />
        <Stack.Screen name="FontTest" component={v_4ab181} />
        <Stack.Screen name="MyInfo" component={v_03a231} />
        <Stack.Screen name="MyInfoView" component={v_22c7ba} />
        <Stack.Screen name="MyInfoEdit" component={v_cdb169} />
        <Stack.Screen name="MyInfoEmailAuth" component={v_dec378} />
        <Stack.Screen name="MyInfoSettings" component={v_4a40b2} />
        <Stack.Screen name="MyInfoNotify" component={v_386af2} />
        <Stack.Screen name="MyInfoClauses" component={v_41dfd5} />
        <Stack.Screen name="ClauseDetail" component={v_5fdcb2} />
        <Stack.Screen name="MyInfoCloseMembership" component={v_9e06f6} />
        <Stack.Screen name="MyInfoFaq" component={v_083aa7} />
        <Stack.Screen name="ReferralShare" component={v_52f825} />
        <Stack.Screen name="ProfitDistribution" component={v_f97d8b} />
        <Stack.Screen name="SkinAnalysis" component={v_852e99} />
        <Stack.Screen name="SkinComparison" component={v_8b28f5} />
        <Stack.Screen name="Analysis" component={v_7f9fad} />
        <Stack.Screen name="HealthAnalysis" component={v_daf220} />
        <Stack.Screen name="HealthAnalysisResult" component={v_cb47c8} />
        <Stack.Screen name="HealthComparison" component={v_71e66c} />
        <Stack.Screen name="HealthConnection" component={v_1b8038} />
        <Stack.Screen name="Chat" component={v_02d653} />
        <Stack.Screen name="AddSubAccount" component={v_67f088} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const v_ce4741 = {
  home: 'Home',
  MetaHome: 'MetaHome',
  main: 'Home',
  login: 'Login',
  signup: 'Signup',
  forgotPassword: 'ForgotPassword',
  passwordVerification: 'PasswordVerification',
  resetPassword: 'ResetPassword',
  passwordChanged: 'PasswordChanged',
  emailVerification: 'EmailVerification',
  countrySelect: 'CountrySelect',
  wallet: 'Wallet',
  walletSend: 'WalletSend',
  walletReceive: 'WalletReceive',
  walletQrScan: 'WalletQrScan',
  walletEstimate: 'WalletEstimate',
  walletTransactionProgress: 'WalletTransactionProgress',
  walletTransactionResult: 'WalletTransactionResult',
  transactionDetails: 'TransactionDetails',
  walletTokenDetail: 'WalletTokenDetail',
  fontTest: 'FontTest',
  myInfo: 'MyInfo',
  myInfoView: 'MyInfoView',
  myInfoEdit: 'MyInfoEdit',
  myInfoEmailAuth: 'MyInfoEmailAuth',
  myInfoSettings: 'MyInfoSettings',
  myInfoNotify: 'MyInfoNotify',
  myInfoClauses: 'MyInfoClauses',
  clauseDetail: 'ClauseDetail',
  myInfoCloseMembership: 'MyInfoCloseMembership',
  myInfoFaq: 'MyInfoFaq',
} as const;

import { v_ada615 } from "ixigazcpvfldbecwtbvavtbi";
import type { v_390fcc } from "xpfgrcdafpntkgxfmgxpxnedjkvmtc";

export const v_a0daa8 = () => {
  const v_c65f5d =
    v_ada615<v_390fcc<RootStackParamList>>();

  return {
    navigate: v_c65f5d.navigate,
    goBack: v_c65f5d.goBack,
    reset: v_c65f5d.reset,
    push: v_c65f5d.push,
    pop: v_c65f5d.pop,
    replace: v_c65f5d.replace,
  };
};