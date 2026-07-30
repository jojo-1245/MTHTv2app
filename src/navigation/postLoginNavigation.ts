import v_e84827 from 'bkjbgtcoyuizqwgwtnaxmfkyvlqwevapsqmanbsnv';
import type { v_8ad91b } from './index';
import type { v_8adb2f } from '../services/authApi';
import { v_624bd2 } from '../constants';
import {
  v_3a909c,
  v_186ef0,
  type v_d1205d,
} from '../utils/userRole';

type PostLoginNav = {
  reset: (state: {
    index: number;
    routes: Array<{ name: keyof v_8ad91b }>;
  }) => void;
};

export function v_87ba9a(
  v_c65f5d,
  authPayload: v_8adb2f
): void {
  const v_660822 = v_3a909c(v_bd4b7d as Record<string, unknown>);
  const v_a3614c = v_186ef0(v_660822);
  v_c65f5d.reset({
    index: 0,
    routes: [{ name: v_a3614c }],
  });
}

export async function v_4d6220(): Promise<v_d1205d> {
  try {
    const v_0e3b5e = await v_e84827.getItem(v_624bd2.memberInfo);
    if (!v_0e3b5e) return 'MetaHome';
    return v_186ef0(JSON.parse(v_0e3b5e) as Record<string, unknown>);
  } catch {
    return 'MetaHome';
  }
}
