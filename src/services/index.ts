export {
  loginMember,
  socialLogin,
  persistAuthSession,
  getMe,
  getMyReferrals,
  updateProfile,
  clearAuthSession,
  isSocialLoginNeedsSignup,
} from './authApi';
export type { LoginAuthPayload, MeProfile, UpdateProfilePayload, SocialLoginResult, MyReferralItem, MyReferralsResponse } from './authApi';

export {
  getSubAccountList,
  searchMember,
  addSubAccount,
  deleteSubAccount,
  requestFamilyOtp,
  linkFamilyAccount,
} from './accountApi';
export type {
  SubAccountItem,
  SubAccountListResponse,
  MemberSearchResult,
  MemberSearchResponse,
  AddSubAccountPayload,
} from './accountApi';

export { getHealthRecords, saveHealthRecord, getHealthRecordById, getLatestHealthRecord, compareHealthRecords, analyzeHealthComparisonAi, analyzeHealthRecordAi, deleteHealthRecord } from './healthApi';
export type { HealthRecordItem, HealthRecordsResponse, SaveHealthRecordPayload, CompareHealthRecordsPayload, CompareHealthRecordsResponse } from './healthApi';

export { saveSkinRecord, getSkinRecords, getSkinRecordById, getLatestSkinRecord, compareSkinRecords, analyzeSkinComparisonAi, analyzeSkinRecordAi } from './skinApi';
export type { SaveSkinRecordPayload, SaveSkinRecordResponse, SkinRecordItem, SkinRecordsResponse, SkinRecordDetailResponse, CompareSkinRecordsPayload, CompareSkinRecordsResponse } from './skinApi';

export { checkAttendance, getAttendanceStatus, getAttendanceStatusDetail, getStepsSyncState, syncSteps, getRewardsHistory, getRewardConfig, getMonthlyStepStatus, AlreadyCheckedInError } from './rewardsApi';
export type { AttendanceRewardResponse, AttendanceCheckData, AttendanceStatusDetailResponse, AttendanceMonthStatusResponse, StepsSyncStateResponse, SyncStepsResponse, RewardHistoryItem, RewardHistoryResponse, RewardTransferStatus, GetRewardsHistoryParams, RewardsHistoryResult, RewardConfig, MonthlyStepStatus } from './rewardsApi';

export * from './walletApi';

export { checkPreflight, payCheckupFee } from './checkupApi';
export type { CheckupPreflightResponse, CheckupPayFeeResponse } from './checkupApi';
export * from './policiesApi';
export { getNotifications, markNotificationRead } from './notificationApi';
export type { NotificationItem, NotificationType, GetNotificationsResponse } from './notificationApi';
export { getSystemConfig } from './systemApi';
export type { SystemConfig } from './systemApi';

export { logToServer } from './clientLog';
export type { LogLevel } from './clientLog';