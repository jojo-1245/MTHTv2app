

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

export const v_ef658a = {
  small: 12,
  medium: 14,
  large: 16,
  xlarge: 18,
  title: 24,
  input: 20,
  validation: 11,
} as const;

export const v_9b1a04 = {
  small: 8,
  xmedium: 12,
  medium: 16,
  large: 20,
  xlarge: 24,
  dateInputVertical: 12,
};

export const v_34d45f = {
  stepTextBottom: 32,
  titleBottom: 16,
  subtitleBottom: 48,
  inputContainerBottom: 32,
  validationTop: 8,
  buttonContainerBottom: 32,
  contentTop: 32,
} as const;

export const v_16b893 = {
  1: '#DC2626',  
  2: '#EF4444',  
  3: '#F97316',  
  4: '#FB923C',  
  5: '#FBBF24',  
  6: '#FCD34D',  
  7: '#84CC16',  
  8: '#22C55E',  
  9: '#3B82F6',  
  10: '#2563EB', 
} as const;

export const v_afa590 = (v_740dd8): keyof typeof v_16b893 => {
  if (v_740dd8 >= 95) return 10;
  if (v_740dd8 >= 90) return 9;
  if (v_740dd8 >= 85) return 8;
  if (v_740dd8 >= 80) return 7;
  if (v_740dd8 >= 75) return 6;
  if (v_740dd8 >= 70) return 5;
  if (v_740dd8 >= 65) return 4;
  if (v_740dd8 >= 60) return 3;
  if (v_740dd8 >= 50) return 2;
  return 1;
};

export const v_53f592 = (v_740dd8): string => {
  const v_fbe91e = v_afa590(v_740dd8);
  return v_16b893[v_fbe91e];
};

export const v_a61db3 = {
  container: {
    flex: 1,
    width: '100%' as const,
    maxWidth: 780,
  },
  bottomSection: {
    marginTop: 'auto' as const,
    paddingTop: v_9b1a04.medium,
    marginBottom: v_9b1a04.large,
  },

  screen: {
    flex: 1,
    backgroundColor: v_1bfbd0.background,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: v_9b1a04.large,
    paddingTop: 32,
  },

  stepText: {
    fontSize: v_ef658a.xlarge,
    fontFamily: v_843035.medium,
    color: 'rgba(94, 98, 172, 0.18)',
    textAlign: 'right' as const,
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
    lineHeight: 32,
    letterSpacing: -0.24,
    textTransform: 'uppercase' as const,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.semibold,
    color: '#9B9B9B',
    lineHeight: 24,
    letterSpacing: -0.16,
    marginBottom: 48,
  },
  inputText: {
    fontSize: 20,
    fontFamily: v_843035.medium,
    lineHeight: 36,
    letterSpacing: -0.2,
  },
  validationText: {
    fontSize: 11,
    fontFamily: v_843035.medium,
    lineHeight: 16,
    letterSpacing: -0.11,
    marginTop: 8,
  },

  spacing: {
    stepTextBottom: 32,
    titleBottom: 16,
    subtitleBottom: 48,
    inputContainerBottom: 32,
    validationTop: 8,
    buttonContainerBottom: 32,
    contentTop: 32,
  },

  inputWrapper: {
    borderWidth: 0,
    borderColor: 'transparent',
  },
  dateInputWrapper: {
    paddingVertical: v_9b1a04.dateInputVertical,
    minHeight: 56,
    justifyContent: 'center' as const,
    borderWidth: 0,
    borderColor: 'transparent',
  },
  buttonContainer: {
    marginTop: 'auto' as const,
    paddingBottom: v_34d45f.buttonContainerBottom,
  },
  scrollContent: {
    paddingHorizontal: v_9b1a04.xlarge,
    paddingVertical: v_9b1a04.xlarge,
  },
  contentContainer: {
    paddingHorizontal: v_9b1a04.xlarge,
    paddingVertical: v_9b1a04.xlarge,
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

