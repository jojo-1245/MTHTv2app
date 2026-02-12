
export * from './env';
export * from './countryStateCityUtils';
import * as v_fba5a0 from 'hfxxehldoiokdq';

export const v_1f208f = (
  v_e930c0,
  v_b25e00,
  v_34e7dd,
): string => {
  if (!v_e930c0) {
    return v_e930c0;
  }
  const v_e915e9 = v_e930c0[v_e930c0.length - 1];
  const v_c99bd2 = v_e915e9.charCodeAt(0);

  if (v_c99bd2 < 0xac00 || v_c99bd2 > 0xd7a3) {
    return `${v_e930c0}${v_34e7dd}`;
  }
  const v_0671ac = (v_c99bd2 - 0xac00) % 28 !== 0;
  return `${v_e930c0}${v_0671ac ? v_b25e00 : v_34e7dd}`;
};

export const v_723f2d = (
  v_e930c0,
  v_b25e00,
  v_34e7dd,
): string => {
  if (!v_e930c0) {
    return '';
  }
  const v_e915e9 = v_e930c0[v_e930c0.length - 1];
  const v_c99bd2 = v_e915e9.charCodeAt(0);
  if (v_c99bd2 < 0xac00 || v_c99bd2 > 0xd7a3) {
    return v_34e7dd;
  }
  const v_0671ac = (v_c99bd2 - 0xac00) % 28 !== 0;
  return v_0671ac ? v_b25e00 : v_34e7dd;
};

export const v_db97fb = async (v_9b6134) => {
  await v_fba5a0.setStringAsync(v_9b6134);
};

