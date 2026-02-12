import type {
  v_da1883,
  v_c4dd46,
  v_7d842d,
} from '../types';
import { v_202d44 } from '../constants/countryDialCodes';
import { v_789afd } from '../constants/regions';
import {
  v_e30d2f,
  v_071875,
} from './countryStateCityUtils';

const v_eebb85 = (v_cc0c7d): string => {
  if (!v_cc0c7d) return '🌐';
  const v_b9bbbd = v_202d44.find(
    (v_3f4e2e) => v_3f4e2e.iso2.toLowerCase() === v_cc0c7d.toLowerCase()
  );
  return v_b9bbbd?.flagEmoji ?? '🌐';
};

export const v_27df20 = (
  apiCountry: NonNullable<v_c4dd46['data']>[0]
): v_da1883 => {
  const v_146092 = v_d38c53.callnumber ? `+${v_d38c53.callnumber}` : '+0';
  let v_cc0c7d = '';
  if (v_d38c53.code) {
    v_cc0c7d = String(v_d38c53.code).toLowerCase();
  } else if (v_d38c53.lcode) {
    const v_866dae = String(v_d38c53.lcode).split('/');
    const v_c424ac = v_866dae[v_866dae.length - 1];
    v_cc0c7d = v_c424ac.replace('.png', '').toLowerCase();
  }
  if (!v_cc0c7d && v_d38c53.country) {
    const v_ea6dff = v_202d44.find(
      (v_3f4e2e) =>
        v_3f4e2e.name.toLowerCase() === String(v_d38c53.country).toLowerCase() ||
        String(v_d38c53.country).toLowerCase().includes(v_3f4e2e.name.toLowerCase())
    );
    if (v_ea6dff) v_cc0c7d = v_ea6dff.iso2;
  }
  if (!v_cc0c7d && v_d38c53.callnumber) {
    const v_ea6dff = v_202d44.find((v_3f4e2e) => v_3f4e2e.dialCode === v_146092);
    if (v_ea6dff) v_cc0c7d = v_ea6dff.iso2;
  }
  if (!v_cc0c7d) {
    v_cc0c7d = (v_d38c53.description ?? '').toLowerCase().replace(/\s+/g, '') || '';
  }
  const v_a4d981 = v_d38c53.callnumber ?? 0;
  return {
    iso2: v_cc0c7d.slice(0, 2) === v_cc0c7d ? v_cc0c7d : v_cc0c7d,
    name: (v_d38c53.country ?? v_d38c53.description) ?? '',
    dialCode: v_146092,
    flagEmoji: v_eebb85(v_cc0c7d),
    countryCode: v_a4d981,
  };
};

export const v_18a84a = (
  apiRegion: NonNullable<v_7d842d['data']>[0],
  v_a4d981
): v_da1883 => {
  const v_222917 = v_3bed0a.subcode ?? v_3bed0a.code ?? 0;
  return {
    iso2: v_3bed0a.description ?? '',
    name: v_3bed0a.description ?? '',
    dialCode: String(v_222917),
    flagEmoji: '📍',
    countryCode: v_a4d981,
  };
};

export const v_fb6ba6 = (
  countries: v_da1883[]
): v_da1883[] => {
  const v_e8b858 = v_6c7bef.findIndex((v_3f4e2e) => v_3f4e2e.iso2.toLowerCase() === 'kr');
  if (v_e8b858 === 0) return v_6c7bef;
  const v_621722 = v_6c7bef.find((v_3f4e2e) => v_3f4e2e.iso2.toLowerCase() === 'kr');
  const v_986d86 = v_6c7bef.filter((v_3f4e2e) => v_3f4e2e.iso2.toLowerCase() !== 'kr');
  return v_621722 ? [v_621722, ...v_986d86] : v_6c7bef;
};

export const v_151d5f = async (
  getCountries: () => Promise<v_c4dd46>,
  fallback: v_da1883[] = v_202d44
): Promise<v_da1883[]> => {
  try {
    const v_24a9a4 = v_e30d2f();
    if (v_24a9a4.length > 0) {
      return v_24a9a4;
    }
  } catch (v_5e9bfe) {
    if (__DEV__) {
      console.warn('[countryUtils] 패키지 국가 목록 로드 실패, API fallback 시도:', v_5e9bfe);
    }
  }
  try {
    const v_3393e3 = await v_60f557();
    if (v_3393e3.status === 'success' && v_3393e3.data && v_3393e3.data.length > 0) {
      const v_9b07bc = v_3393e3.data.map(v_27df20);
      return v_fb6ba6(v_9b07bc);
    }
    return v_0debf4;
  } catch (v_5e9bfe) {
    if (__DEV__) {
      console.error('[countryUtils] 국가 목록 API 로드 실패, fallback 사용:', v_5e9bfe);
    }
    return v_0debf4;
  }
};

export interface LoadRegionsResult {
  regions: v_da1883[];
  hasRegions: boolean;
}

const v_c9a58c = {
  82: 'kr',
  81: 'jp',
  86: 'cn',
  1: 'us',
  62: 'id',
};

export const v_f91692 = {
  kr: 82,
  jp: 81,
  cn: 86,
  us: 1,
  id: 62,
};

export const v_5c7129 = async (
  getRegionsByCountry: (v_a4d981) => Promise<v_7d842d>,
  v_a4d981,
  v_52c475,
  fallback: v_da1883[] = [v_789afd]
): Promise<LoadRegionsResult> => {
  const v_b35ebd = v_52c475 ?? v_c9a58c[v_a4d981];
  const v_65d6ba = v_b35ebd?.toLowerCase();
  const v_133414 =
    v_65d6ba && v_f91692[v_65d6ba] != null
      ? v_f91692[v_65d6ba]
      : v_a4d981;

  if (v_b35ebd) {
    try {
      const v_866d77 = v_071875(v_b35ebd, v_133414);
      if (v_866d77.length > 0) {
        return { regions: v_866d77, hasRegions: true };
      }
      return { regions: [v_789afd], hasRegions: false };
    } catch (v_5e9bfe) {
      if (__DEV__) {
        console.warn('[countryUtils] 패키지 지역 목록 로드 실패, API fallback 시도:', v_5e9bfe);
      }
    }
  }

  try {
    const v_3393e3 = await v_11e39e(v_133414);
    if (v_3393e3.status === 'success' && v_3393e3.data && v_3393e3.data.length > 0) {
      const v_9b07bc = v_3393e3.data.map((v_cb35cb) =>
        v_18a84a(v_cb35cb, v_133414)
      );
      return {
        regions: v_9b07bc,
        hasRegions: v_3393e3.has_regions === true || v_9b07bc.length > 0,
      };
    }
    return { regions: v_0debf4, hasRegions: v_0debf4.length > 0 && v_0debf4[0].iso2 !== 'global' };
  } catch (v_5e9bfe) {
    if (__DEV__) {
      console.warn('[countryUtils] 지역 목록 API 로드 실패, fallback 사용:', v_5e9bfe);
    }
    const v_05f37b =
      v_0debf4.length > 0 &&
      v_0debf4[0].iso2 !== 'global' &&
      v_0debf4[0].iso2 !== 'select';
    return {
      regions: v_05f37b ? v_0debf4 : [v_789afd],
      hasRegions: v_05f37b,
    };
  }
};
