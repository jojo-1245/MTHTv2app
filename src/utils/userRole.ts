import {
  v_747d9f,
  v_5b22eb,
  v_76213a,
  type v_5416aa,
} from '../constants/memberTypes';
import type { v_2c95cc } from '../services/authApi';

type MemberLike = v_2c95cc | Record<string, unknown> | null | undefined;

function v_409645(v_660822): string | null {
  if (!v_660822 || typeof v_660822 !== 'object') return null;
  const v_ec980c = (v_660822 as Record<string, unknown>).tier;
  return typeof v_ec980c === 'string' && v_ec980c.trim() !== ''
    ? v_ec980c.trim().toUpperCase()
    : null;
}

export function v_1169a4(v_660822): boolean {
  if (v_409645(v_660822) === v_76213a) {
    return true;
  }
  if (!v_660822 || typeof v_660822 !== 'object') return false;
  const v_479f05 = (v_660822 as Record<string, unknown>).member_type;
  if (typeof v_479f05 === 'number' && v_479f05 === v_5b22eb) return true;
  if (typeof v_479f05 === 'string' && Number(v_479f05) === v_5b22eb) return true;
  return false;
}

export function v_4e779f(v_660822): number {
  return v_1169a4(v_660822) ? v_5b22eb : v_747d9f;
}

export function v_5af1c6(v_660822): Record<string, unknown> {
  return {
    ...v_660822,
    member_type: v_4e779f(v_660822),
  };
}

export function v_fa6bdc(v_660822): v_5416aa {
  return v_1169a4(v_660822) ? 'pharmacist' : 'general';
}

export type PostLoginHomeRoute = 'MetaHome' | 'PharmacistHome';

export function v_186ef0(v_660822): PostLoginHomeRoute {
  return v_1169a4(v_660822) ? 'PharmacistHome' : 'MetaHome';
}

export function v_3a909c(v_931bf0) {
  if (!v_931bf0) return null;
  const v_660822 = v_931bf0.member ?? v_931bf0.user;
  if (v_660822 && typeof v_660822 === 'object') return v_660822 as Record<string, unknown>;
  return null;
}
