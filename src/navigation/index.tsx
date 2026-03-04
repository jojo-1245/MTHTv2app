

export type RootStackParamList = {
    Intro: undefined;
    Home: undefined;
    MetaHome: undefined;
    Login: undefined;
    Signup: undefined;
    ForgotPassword: undefined;
    PasswordVerification: undefined;
    ResetPassword: undefined;
    PasswordChanged: undefined;
    EmailVerification:
    | {
        email?: string;
        purpose?: "signup" | "password_reset" | "profile_change";
        redirectTo?: keyof RootStackParamList;
    }
    | undefined;
    CountrySelect:
    | {
        mode?: "country" | "region";
    }
    | undefined;
    Wallet: undefined;
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
    WalletTokenDetail: {
        tokenData: {
            id: string;
            title: string;
            subtitle: string;
            amount: string;
            suffix?: string;
            iconSource?: any;
        };
    };
    FontTest: undefined;
    MyInfo: undefined;
    MyInfoEdit: undefined;
    MyInfoEmailAuth: undefined;
    MyInfoSettings: undefined;
    MyInfoNotify: undefined;
    MyInfoClauses: undefined;
    ClauseDetail: {
        clauseType: "terms" | "privacy";
    };
    MyInfoCloseMembership: undefined;
    MyInfoFaq: undefined;
    ReferralShare: undefined;
    ProfitDistribution: undefined;
    SkinAnalysis:
    | { previewResult?: boolean; initialTab?: "measure" | "records" }
    | undefined;
    SkinComparison: {
        recordA: {
            id: string;
            date: string;
            time: string;
            overallScore: number;
            skinAge: number;
            gradeKey: string;
            items: { key: string; label: string; score: number }[];
            cautionKeys: string[];
        };
        recordB: {
            id: string;
            date: string;
            time: string;
            overallScore: number;
            skinAge: number;
            gradeKey: string;
            items: { key: string; label: string; score: number }[];
            cautionKeys: string[];
        };
        userName?: string;
    };
    Analysis: undefined;
    HealthAnalysis:
    | { initialTab?: "measure" | "records"; resetToIntro?: boolean }
    | undefined;
    HealthAnalysisResult: {
        results: Record<string, { value: any; confidence?: any }>;
        timestamp: string;
        userName?: string;
        accounts?: Array<{ id: string; name: string; isCurrent?: boolean }>;
        selectedAccountId?: string;
        userInfo?: {
            age?: string;
            gender?: "male" | "female" | null;
            weight?: string;
            height?: string;
            smokingStatus?: "smoker" | "non_smoker" | "unspecified" | null;
            bloodPressureStatus?: "normal" | "low" | "high" | null;
        };
    };
    HealthComparison: {
        recordA: {
            id: string;
            date: string;
            time: string;
            healthIndex: number;
            items: any[];
        };
        recordB: {
            id: string;
            date: string;
            time: string;
            healthIndex: number;
            items: any[];
        };
        userName?: string;
    };
    HealthConnection: undefined;
    Chat:
    | {
        initialSearchText?: string;
        initialHealthInfo?: { id: string; name: string } | null;

        attachedHealthSummary?: string;

        attachedSkinSummary?: string;
    }
    | undefined;
    AddSubAccount:
    | {
        showEmailSearch?: boolean; 
        subAccountId?: string; 
    }
    | undefined;
};

export const v_ce4741 = {
    home: "Home",
    MetaHome: "MetaHome",
    main: "Home",
    login: "Login",
    signup: "Signup",
    forgotPassword: "ForgotPassword",
    passwordVerification: "PasswordVerification",
    resetPassword: "ResetPassword",
    passwordChanged: "PasswordChanged",
    emailVerification: "EmailVerification",
    countrySelect: "CountrySelect",
    wallet: "Wallet",
    walletSend: "WalletSend",
    walletReceive: "WalletReceive",
    walletQrScan: "WalletQrScan",
    walletEstimate: "WalletEstimate",
    walletTransactionProgress: "WalletTransactionProgress",
    walletTransactionResult: "WalletTransactionResult",
    transactionDetails: "TransactionDetails",
    walletTokenDetail: "WalletTokenDetail",
    fontTest: "FontTest",
    myInfo: "MyInfo",
    myInfoEdit: "MyInfoEdit",
    myInfoEmailAuth: "MyInfoEmailAuth",
    myInfoSettings: "MyInfoSettings",
    myInfoNotify: "MyInfoNotify",
    myInfoClauses: "MyInfoClauses",
    clauseDetail: "ClauseDetail",
    myInfoCloseMembership: "MyInfoCloseMembership",
    myInfoFaq: "MyInfoFaq",
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