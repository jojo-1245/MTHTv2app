

export const v_1bfbd0 = {
  primary: '#343a5a',
  secondary: '#ffdc04',
  bluePrimary: '#3B72F2',
  background: '#ffffff',
  backgroundSecondary: '#F8FAFC',
  lightBlue: '#F5F9FF',
  lightGray: '#fafafa',
  blurBlue: '#E6F0FF',
  text: '#10192d',
  error: '#ff0000',
  success: '#00ff00',
  buttonPrimary: '#3A3C79',
  buttonSecondary: '#5e62ac',
  buttonTertiary: '#fafafa',
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

export const v_963c2c= {
  background: '#ffffff',
  bottomBackground: '#fafafa',
}

import { v_326be8 } from 'rcmrninabrnb';

export const v_843035 = {
  regular: 'Pretendard-Regular',
  medium: 'Pretendard-Medium',
  semibold: 'Pretendard-SemiBold',
  bold: 'Pretendard-Bold',
  extrabold: 'Pretendard-ExtraBold',
} as const;

export const v_228d55 = {
  bold: { fontFamily: v_843035.bold, letterSpacing: -0.5 },
  extrabold: { fontFamily: v_843035.extrabold, letterSpacing: -0.5 },
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

