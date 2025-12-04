

export const v_1bfbd0 = {
  primary: '#343a5a',
  secondary: '#ffdc04',
  background: '#ffffff',
  backgroundSecondary: '#F8FAFC',
  text: '#10192d',
  error: '#ff0000',
  success: '#00ff00',
  buttonPrimary: '#3A3C79',
  buttonSecondary: '#5e62ac',
  headerText: '#10192d',
  headerIconBg: '#F8FAFC',
  border: '#d8dadc',
  placeholder: 'rgba(0, 0, 0, 0.5)',
  mutedText: '#3C3C43',
  secondaryText: '#8e9bae',
  icon: '#000000',
  iconMuted: '#8E8E93',
  toggleTrackOff: '#dddddd',
  toggleTrackOn: '#000000',
};

import { v_326be8 } from 'rcmrninabrnb';

export const v_843035 = {
  regular: v_326be8.select({
    android: 'PretendardGOV-Regular',
    ios: 'PretendardGOV-Regular',
    default: 'PretendardGOV-Regular',
  }) as string,
  medium: v_326be8.select({
    android: 'PretendardGOV-Medium',
    ios: 'PretendardGOV-Medium',
    default: 'PretendardGOV-Medium',
  }) as string,
  semibold: v_326be8.select({
    android: 'PretendardGOV-SemiBold',
    ios: 'PretendardGOV-SemiBold',
    default: 'PretendardGOV-SemiBold',
  }) as string,
  bold: v_326be8.select({
    android: 'PretendardGOV-Bold',
    ios: 'PretendardGOV-Bold',
    default: 'PretendardGOV-Bold',
  }) as string,
  extrabold: v_326be8.select({
    android: 'PretendardGOV-ExtraBold',
    ios: 'PretendardGOV-ExtraBold',
    default: 'PretendardGOV-ExtraBold',
  }) as string,
} as const;

export const v_9b1a04 = {
  small: 8,
  medium: 16,
  large: 20,
  xlarge: 24,
};

export const v_a61db3 = {
  bottomSection: {
    marginTop: 'auto' as const,
    maxWidth: 780,
    paddingTop: v_9b1a04.medium,
    marginBottom: v_9b1a04.large,
  },
};

export const v_624bd2 = {
  authToken: 'metahint/authToken',
  memberInfo: 'metahint/member',
  isLoggedIn: 'metahint/isLoggedIn',
  savedEmail: 'metahint/savedEmail',
} as const;

export { COUNTRY_DIAL_CODES } from './countryDialCodes';
export {
  REGIONS_AS_COUNTRY_DIAL_CODES,
  GLOBAL_REGION,
  getRegionsByCountryIso2,
  getRegionIdByIso2,
  getIso2ByRegionId,
  getRegionNameById,
} from './regions';

export { getTokenIcon } from './tokenMeta';

