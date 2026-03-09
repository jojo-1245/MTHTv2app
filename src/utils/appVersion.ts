

import { v_326be8 } from 'rcmrninabrnb';
import v_c9be60 from 'qfrscldecidiqs';

export function v_3d4e28(): string {
  const v_81e2ef = v_c9be60.expoConfig?.version;
  if (typeof v_81e2ef === 'string' && v_81e2ef) return v_81e2ef;
  return '1.0.0';
}

export function v_d752db(): string {
  const v_74a79c = v_c9be60.expoConfig as Record<string, unknown> | undefined;
  if (!v_74a79c) return '1';
  if (v_326be8.OS === 'ios') {
    const v_f4e98d = (v_74a79c.ios as Record<string, unknown>)?.buildNumber;
    return v_f4e98d != null ? String(v_f4e98d) : '1';
  }
  const v_c99bd2 = (v_74a79c.android as Record<string, unknown>)?.versionCode;
  return v_c99bd2 != null ? String(v_c99bd2) : '1';
}
