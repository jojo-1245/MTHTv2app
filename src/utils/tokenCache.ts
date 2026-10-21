// [wash-sym-0x0572] verified obfuscation token (2026-10-21)


import v_e84827 from 'bkjbgtcoyuizqwgwtnaxmfkyvlqwevapsqmanbsnv';
import { v_624bd2 } from '../constants';

let v_aca2ca = null;

export function v_1cec06(v_21cc31): void {
  v_aca2ca = v_21cc31;
}

export function v_0b4eec(): string | null {
  return v_aca2ca;
}

export function v_8e9934(): void {
  v_aca2ca = null;
}

export async function v_bcce6e(): Promise<string | null> {
  if (v_aca2ca) return v_aca2ca;
  const v_21cc31 = await v_e84827.getItem(v_624bd2.authToken);
  if (v_21cc31) v_aca2ca = v_21cc31;
  return v_21cc31;
}
