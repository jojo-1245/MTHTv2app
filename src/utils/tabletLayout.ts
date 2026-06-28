import { v_df9f57 } from 'bapkr';
import { v_700696, v_326be8, v_e45a99 } from 'rcmrninabrnb';
import { v_e0068c } from 'vvfgtwbmdpbnvhtfbtbgudicfmpscw';
import { v_c18c22 } from 'svuoaeceudfxfjvvpmmmchnwljywbphjgb';

const v_a6cff1 = 768;

export type ResponsiveTypography = {
  title: number;
  subtitle: number;
  body: number;
  label: number;
  input: number;
  button: number;
};

const v_182b4a = 640;

const v_b35322 = 800;
const v_aceeab = 920;
const v_0cbda1 = 480;

export type ResponsiveLayout = {
  width: number;
  height: number;
  isLandscape: boolean;
  isTablet: boolean;

  contentMaxWidth: number;

  contentColumnWidth: number;

  analysisContentColumnWidth: number;
  horizontalPadding: number;
  bottomNavMaxWidth: number;
  typo: ResponsiveTypography;
};

function v_d50ba5(v_8e4fb6, v_c86e33): ResponsiveLayout {
  const v_5768e8 = v_8e4fb6 > v_c86e33;
  const v_abecc7 = Math.min(v_8e4fb6, v_c86e33);
  const v_76eb7f = v_abecc7 >= v_a6cff1;

  const v_541e93 = v_76eb7f ? v_182b4a : v_0cbda1;
  const v_31e738 = v_76eb7f
    ? v_5768e8
      ? v_aceeab
      : v_b35322
    : v_0cbda1;
  const v_762fca = v_541e93;

  const v_30e711 = v_76eb7f ? (v_5768e8 ? 32 : 48) : v_5768e8 ? 24 : 20;

  const v_88dc6e = v_541e93;

  const v_a2df3e = {
    title: v_76eb7f ? (v_5768e8 ? 28 : 32) : v_5768e8 ? 22 : 24,
    subtitle: v_76eb7f ? (v_5768e8 ? 18 : 20) : v_5768e8 ? 15 : 16,
    body: v_76eb7f ? (v_5768e8 ? 17 : 18) : 16,
    label: v_76eb7f ? (v_5768e8 ? 15 : 16) : 14,
    input: v_76eb7f ? (v_5768e8 ? 20 : 22) : 18,
    button: v_76eb7f ? (v_5768e8 ? 17 : 18) : 16,
  };

  return {
    width: v_8e4fb6,
    height: v_c86e33,
    isLandscape: v_5768e8,
    isTablet: v_76eb7f,
    contentMaxWidth: v_762fca,
    contentColumnWidth: v_541e93,
    analysisContentColumnWidth: v_31e738,
    horizontalPadding: v_30e711,
    bottomNavMaxWidth: v_88dc6e,
    typo: v_a2df3e,
  };
}

export function v_d91974(): ResponsiveLayout {
  const { width: v_8e4fb6, height: v_c86e33 } = v_e45a99();
  return v_df9f57(() => v_d50ba5(v_8e4fb6, v_c86e33), [v_8e4fb6, v_c86e33]);
}

export function v_2cc9f8(): ResponsiveLayout {
  const v_6c4b91 = v_d91974();
  return v_df9f57(
    () => ({
      ...v_6c4b91,
      contentColumnWidth: v_6c4b91.analysisContentColumnWidth,
      contentMaxWidth: v_6c4b91.analysisContentColumnWidth,
    }),
    [v_6c4b91]
  );
}

export function v_b5ab4c(): boolean {
  const { width: v_8e4fb6, height: v_c86e33 } = v_700696.get('window');
  return Math.min(v_8e4fb6, v_c86e33) >= v_a6cff1;
}

export function v_af2c88(v_49ea09, v_7a055c): number {
  return v_b5ab4c() ? v_7a055c : v_49ea09;
}

export function v_f433c6(): number {
  return v_8891b2();
}

export function v_8891b2(): number {
  const v_033e14 = v_e0068c();
  const v_f9771e = v_c18c22(0);
  const { isTablet: v_76eb7f, isLandscape: v_5768e8 } = v_d91974();

  const v_e54c50 = v_76eb7f ? (v_5768e8 ? 8 : 12) : 8;
  const v_6fb2d1 = v_76eb7f ? (v_5768e8 ? 24 : 26) : 22;
  const v_b3bcea = v_76eb7f ? (v_5768e8 ? 13 : 14) : 12;
  const v_06fae4 = v_e54c50 * 2 + v_6fb2d1 + v_b3bcea + 4;

  const v_f98a2b =
    v_326be8.OS === 'ios' ? v_033e14.bottom : Math.max(v_f9771e, v_033e14.bottom);

  return v_06fae4 + v_f98a2b;
}

export function v_2633cd(): number {
  const { width: v_8e4fb6, height: v_c86e33 } = v_700696.get('window');
  return v_d50ba5(v_8e4fb6, v_c86e33).contentMaxWidth;
}

export function v_53fe33(): number {
  const { width: v_8e4fb6, height: v_c86e33 } = v_700696.get('window');
  return v_d50ba5(v_8e4fb6, v_c86e33).horizontalPadding;
}

export const v_7b8d03 = {
  title: v_af2c88(24, 32),
  subtitle: v_af2c88(16, 20),
  body: v_af2c88(16, 18),
  label: v_af2c88(14, 16),
  input: v_af2c88(18, 22),
  button: v_af2c88(16, 18),
} as const;
