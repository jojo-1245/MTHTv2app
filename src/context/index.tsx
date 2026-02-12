import v_a3453e, {
  v_af12cb,
  v_de06a3,
  v_76a8a9,
  v_c4deb2,
  v_df9f57,
  v_5ab095,
} from 'bapkr';
import type { v_da1883 } from '../types';
import { v_202d44 } from '../constants/countryDialCodes';
import { v_789afd, v_369014 } from '../constants/regions';
import { v_e30d2f } from '../utils/countryStateCityUtils';

export type SelectMode = 'country' | 'region';

export interface SignupFormData {
  phone?: string;
  countryIso2?: string;
  regionIso2?: string;
}

interface AppContextValue {
  selectedCountryDialCode: v_da1883;
  setSelectedCountryDialCode: (country: v_da1883) => void;
  selectedRegion: v_da1883;
  setSelectedRegion: (region: v_da1883) => void;
  selectMode: SelectMode;
  setSelectMode: (mode: SelectMode) => void;
  signupFormData: SignupFormData;
  updateSignupFormData: (data: Partial<SignupFormData>) => void;
  resetSignupFormData: () => void;
  walletSendAddress: string;
  setWalletSendAddress: (address: string) => void;
  openAddTokenDialog: () => void;
}

const SELECT_COUNTRY: v_da1883 = {
  iso2: 'select',
  name: 'Select',
  dialCode: '0',
  flagEmoji: '🌐',
  countryCode: 0,
};

const v_24a9a4 = v_e30d2f();
const v_d7c38a = v_d8e1a7;
const v_2a5c62 = v_789afd;

const v_b657db = v_af12cb<AppContextValue | undefined>(undefined);

export const AppProvider: v_a3453e.FC<{ children: v_a3453e.ReactNode }> = ({ children: v_21f619 }) => {
  const [v_459d5e, v_e10000] = v_5ab095<v_da1883>(
    v_d7c38a,
  );
  const [v_2f03bc, v_cf3738] = v_5ab095<v_da1883>(v_2a5c62);
  const [v_479a37, v_67ab1c] = v_5ab095<SelectMode>('country');
  const [v_8d7bc8, v_eee6b0] = v_5ab095<SignupFormData>({
    countryIso2: v_d7c38a.iso2,
    regionIso2: v_2a5c62.iso2,
  });
  const [v_ee27aa, v_134f07] = v_5ab095<string>('');

  const v_dd6143 = v_de06a3(() => {

    console.log('Add token dialog');
  }, []);

  const v_f693e7 = v_de06a3((country: v_da1883) => {
    v_e10000(v_b9bbbd);
    v_cf3738(v_789afd);
    v_eee6b0((v_ba2215) => ({
      ...v_ba2215,
      countryIso2: v_b9bbbd.iso2,
      regionIso2: v_789afd.iso2,
    }));
  }, []);

  const v_2f2d51 = v_de06a3((region: v_da1883) => {
    v_cf3738(v_a6c30b);
    v_eee6b0((v_ba2215) => ({
      ...v_ba2215,
      regionIso2: v_a6c30b.iso2,
    }));
  }, []);

  const v_a776b5 = v_de06a3((v_9390e8) => {
    v_eee6b0((v_ba2215) => ({
      ...v_ba2215,
      ...v_9390e8,
    }));
  }, []);

  const v_4df356 = v_de06a3(() => {
    v_e10000(v_d8e1a7);
    v_cf3738(v_789afd);
    v_eee6b0({
      countryIso2: v_d8e1a7.iso2,
      regionIso2: v_789afd.iso2,
    });
  }, []);

  v_c4deb2(() => {
    const v_6505f6 =
      v_2f03bc.dialCode === '0' ||
      v_2f03bc.iso2 === 'select' ||
      v_2f03bc.iso2 === 'global';
    if (v_6505f6) return;
    const v_e94fdf = v_369014(v_459d5e.iso2);

    const v_341347 =
      v_e94fdf.length > 0 &&
      !(v_e94fdf.length === 1 && v_e94fdf[0].iso2 === 'global');
    if (!v_341347) return;
    const v_d2a53b = v_e94fdf.some(
      (v_cb35cb) =>
        v_cb35cb.countryCode === v_2f03bc.countryCode &&
        v_cb35cb.dialCode === v_2f03bc.dialCode
    );
    if (!v_d2a53b && v_e94fdf.length > 0) {
      v_2f2d51(v_e94fdf[0]);
    } else if (!v_d2a53b) {
      v_2f2d51(v_789afd);
    }
  }, [v_459d5e, v_2f03bc, v_2f2d51]);

  const v_3b402b = v_df9f57(
    () => ({
      selectedCountryDialCode: v_459d5e,
      setSelectedCountryDialCode: v_f693e7,
      selectedRegion: v_2f03bc,
      setSelectedRegion: v_2f2d51,
      selectMode: v_479a37,
      setSelectMode: v_67ab1c,
      signupFormData: v_8d7bc8,
      updateSignupFormData: v_a776b5,
      resetSignupFormData: v_4df356,
      walletSendAddress: v_ee27aa,
      setWalletSendAddress: v_134f07,
      openAddTokenDialog: v_dd6143,
    }),
    [
      v_459d5e,
      v_2f03bc,
      v_479a37,
      v_8d7bc8,
      v_ee27aa,
      v_f693e7,
      v_2f2d51,
      v_a776b5,
      v_4df356,
      v_dd6143,
    ],
  );

  return <AppContext.Provider value={v_3b402b}>{v_21f619}</AppContext.Provider>;
};

export const v_700ef9 = (): AppContextValue => {
  const v_e3aeb3 = v_76a8a9(v_b657db);
  if (!v_e3aeb3) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return v_e3aeb3;
};

export { StepTrackingProvider, useStepTracking } from './StepTrackingContext';

