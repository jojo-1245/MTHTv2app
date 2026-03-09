

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
  | { email?: string; purpose?: 'signup' | 'password_reset' | 'profile_change'; redirectTo?: keyof RootStackParamList }
  | undefined;
  CountrySelect: { mode?: 'country' | 'region' } | undefined;
  Wallet: undefined;
  WalletSend: undefined;
  WalletReceive: { title?: string; iconSource?: any; tokenName?: string } | undefined;
  WalletQrScan: undefined;
  WalletEstimate: undefined;
  WalletTransactionProgress: undefined;
  WalletTransactionResult: undefined;
  TransactionDetails: undefined;
  FontTest: undefined;
  MyInfo: undefined;
  MyInfoView: undefined;
  MyInfoEdit: undefined;
  MyInfoEmailAuth: undefined;
  MyInfoSettings: undefined;
  MyInfoNotify: undefined;
  MyInfoClauses: undefined;
  ClauseDetail: { clauseType: 'terms' | 'privacy' };
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
    userInfo?: { age?: string; gender?: 'male' | 'female' | null; weight?: string; height?: string; smokingStatus?: 'smoker' | 'non_smoker' | 'unspecified' | null; bloodPressureStatus?: 'normal' | 'low' | 'high' | null };
    savedBeforeNavigate?: boolean;
  };
  HealthComparison: {
    recordA: { id: string; date: string; time: string; healthIndex: number; items: any[] };
    recordB: { id: string; date: string; time: string; healthIndex: number; items: any[] };
    userName?: string;
  };
  HealthConnection: undefined;
  Chat: { initialSearchText?: string; initialHealthInfo?: { id: string; name: string } | null; attachedHealthSummary?: string; attachedSkinSummary?: string } | undefined;
  AddSubAccount: { showEmailSearch?: boolean; subAccountId?: string } | undefined;
};
