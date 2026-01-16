import v_a3453e from 'bapkr';
import { v_ac28fd } from 'ixigazcpvfldbecwtbvavtbi';
import { v_709be7 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import v_7af305 from '../screens/IntroScreen';
import v_c316d8 from '../screens/HomeScreen';
import v_7aeeb0 from '../screens/MetaHomeScreen';
import v_f4f851 from '../screens/LoginScreen';
import v_f40fc5 from '../screens/SignupScreen';
import {
  v_937ab8,
  v_c39920,
  v_d02ed0,
  v_91bfb7,
  v_d7587d,
  v_055bf6,
  v_124daa,
  v_2436b6,
} from '../screens/signup';
import v_a82b55 from '../screens/EmailVerificationScreen';
import v_040c8f from '../screens/ForgotPasswordScreen';
import v_0d311d from '../screens/PasswordVerificationScreen';
import v_db1cc4 from '../screens/ResetPasswordScreen';
import v_873cfb from '../screens/PasswordChangedScreen';
import v_c1e2b5 from '../screens/CountrySelectScreen';
import { v_952e24 } from '../screens/wallet/WalletScreen';
import { v_4ef695 } from '../screens/wallet/WalletHistoryScreen';
import { v_5b640b } from '../screens/wallet/WalletSendScreen';
import { v_2ba37d } from '../screens/wallet/WalletQrScanScreen';
import { v_31216c } from '../screens/wallet/WalletTransactionProgressScreen';
import { v_1cd2a2 } from '../screens/wallet/WalletTransactionResultScreen';
import { v_a023f9 } from '../screens/wallet/WalletReceiveScreen';
import { v_4ab181 } from '../screens/FontTestScreen';
import v_03a231 from '../screens/profile/MyInfoScreen';
import v_cdb169 from '../screens/profile/MyInfoEditScreen';
import v_dec378 from '../screens/profile/MyInfoEmailAuthScreen';
import v_4a40b2 from '../screens/profile/MyInfoSettingsScreen';
import v_386af2 from '../screens/profile/MyInfoNotifyScreen';
import v_41dfd5 from '../screens/profile/MyInfoClausesScreen';
import v_5fdcb2 from '../screens/profile/ClauseDetailScreen';
import v_9e06f6 from '../screens/profile/MyInfoCloseMembershipScreen';
import v_083aa7 from '../screens/profile/MyInfoFaqScreen';
import { v_852e99 } from '../screens/skin';
import { v_daf220, v_1b8038 } from '../screens/health';
import { v_02d653 } from '../screens/chat';

export type RootStackParamList = {
  Intro: undefined;
  Home: undefined;
  MetaHome: undefined;
  Login: undefined;
  Signup: undefined;
  SignupTerms: undefined;
  SignupEmail: undefined;
  SignupPassword: undefined;
  SignupName: undefined;
  SignupBirthday:
  | {
    name?: string;
  }
  | undefined;
  SignupGender: undefined;
  SignupReferral: undefined;
  SignupSuccess: undefined;
  ForgotPassword: undefined;
  PasswordVerification: undefined;
  ResetPassword: undefined;
  PasswordChanged: undefined;
  EmailVerification:
  | {
    email?: string;
    redirectTo?: keyof RootStackParamList;
  }
  | undefined;
  CountrySelect:
  | {
    mode?: 'country' | 'region';
  }
  | undefined;
  Wallet: undefined;
  PolygonHistory:
  | {
    title?: string;
    iconSource?: any;
    tokenName?: string;
  }
  | undefined;
  MetahintHistory:
  | {
    title?: string;
    iconSource?: any;
    tokenName?: string;
  }
  | undefined;
  WalletSend: undefined;
  WalletReceive:
  | {
    title?: string;
    iconSource?: any;
    tokenName?: string;
  }
  | undefined;
  WalletQrScan: undefined;
  WalletEstimate: undefined;
  WalletTransactionProgress: undefined;
  WalletTransactionResult: undefined;
  TransactionDetails: undefined;
  FontTest: undefined;
  MyInfo: undefined;
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
  SkinAnalysis: { previewResult?: boolean } | undefined;
  HealthAnalysis: undefined;
  HealthConnection: undefined;
  Chat: {
    initialSearchText?: string;
    initialHealthInfo?: { id: string; name: string } | null;
  } | undefined;
};

const v_cb3606 = v_709be7<RootStackParamList>();

export const AppNavigator: v_a3453e.FC = () => {
  return (
    <NavigationContainer>
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
        <Stack.Screen name="SignupTerms" component={v_937ab8} />
        <Stack.Screen name="SignupEmail" component={v_c39920} />
        <Stack.Screen name="SignupPassword" component={v_d02ed0} />
        <Stack.Screen name="SignupName" component={v_91bfb7} />
        <Stack.Screen name="SignupBirthday" component={v_d7587d} />
        <Stack.Screen name="SignupGender" component={v_055bf6} />
        <Stack.Screen name="SignupReferral" component={v_124daa} />
        <Stack.Screen name="SignupSuccess" component={v_2436b6} />
        <Stack.Screen name="ForgotPassword" component={v_040c8f} />
        <Stack.Screen name="PasswordVerification" component={v_0d311d} />
        <Stack.Screen name="ResetPassword" component={v_db1cc4} />
        <Stack.Screen name="PasswordChanged" component={v_873cfb} />
        <Stack.Screen name="EmailVerification" component={v_a82b55} />
        <Stack.Screen name="CountrySelect" component={v_c1e2b5} />
        <Stack.Screen name="Wallet" component={v_952e24} />
        <Stack.Screen name="PolygonHistory" component={v_4ef695} />
        <Stack.Screen name="MetahintHistory" component={v_4ef695} />
        <Stack.Screen name="WalletSend" component={v_5b640b} />
        <Stack.Screen name="WalletReceive" component={v_a023f9} />
        <Stack.Screen name="WalletQrScan" component={v_2ba37d} />
        <Stack.Screen name="WalletEstimate" component={v_31216c} />
        <Stack.Screen name="WalletTransactionProgress" component={v_31216c} />
        <Stack.Screen name="WalletTransactionResult" component={v_1cd2a2} />
        <Stack.Screen name="TransactionDetails" component={v_1cd2a2} />
        <Stack.Screen name="FontTest" component={v_4ab181} />
        <Stack.Screen name="MyInfo" component={v_03a231} />
        <Stack.Screen name="MyInfoEdit" component={v_cdb169} />
        <Stack.Screen name="MyInfoEmailAuth" component={v_dec378} />
        <Stack.Screen name="MyInfoSettings" component={v_4a40b2} />
        <Stack.Screen name="MyInfoNotify" component={v_386af2} />
        <Stack.Screen name="MyInfoClauses" component={v_41dfd5} />
        <Stack.Screen name="ClauseDetail" component={v_5fdcb2} />
        <Stack.Screen name="MyInfoCloseMembership" component={v_9e06f6} />
        <Stack.Screen name="MyInfoFaq" component={v_083aa7} />
        <Stack.Screen name="SkinAnalysis" component={v_852e99} />
        <Stack.Screen name="HealthAnalysis" component={v_daf220} />
        <Stack.Screen name="HealthConnection" component={v_1b8038} />
        <Stack.Screen name="Chat" component={v_02d653} />
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
  polygonHistory: 'PolygonHistory',
  metahintHistory: 'MetahintHistory',
  walletSend: 'WalletSend',
  walletReceive: 'WalletReceive',
  walletQrScan: 'WalletQrScan',
  walletEstimate: 'WalletEstimate',
  walletTransactionProgress: 'WalletTransactionProgress',
  walletTransactionResult: 'WalletTransactionResult',
  transactionDetails: 'TransactionDetails',
  fontTest: 'FontTest',
  myInfo: 'MyInfo',
  myInfoEdit: 'MyInfoEdit',
  myInfoEmailAuth: 'MyInfoEmailAuth',
  myInfoSettings: 'MyInfoSettings',
  myInfoNotify: 'MyInfoNotify',
  myInfoClauses: 'MyInfoClauses',
  clauseDetail: 'ClauseDetail',
  myInfoCloseMembership: 'MyInfoCloseMembership',
  myInfoFaq: 'MyInfoFaq',
} as const;

import { v_ada615 } from 'ixigazcpvfldbecwtbvavtbi';
import type { v_390fcc } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';

export const v_a0daa8 = () => {
  const v_c65f5d = v_ada615<v_390fcc<RootStackParamList>>();

  return {
    navigate: v_c65f5d.navigate,
    goBack: v_c65f5d.goBack,
    reset: v_c65f5d.reset,
    push: v_c65f5d.push,
    pop: v_c65f5d.pop,
    replace: v_c65f5d.replace,
  };
};

