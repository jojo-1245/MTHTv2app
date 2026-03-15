
import { v_38446f, v_5f30e2, v_d5c385 } from 'hikhkjexnsh';
import { v_9adb95 } from 'nlevaxffo';

const v_772f48 = v_9adb95(v_38446f);

export async function v_54846c(v_adc076): Promise<string> {
  const v_83f336 = v_5f30e2(16).toString('hex');
  const v_bff627 = (await v_772f48(v_adc076, v_83f336, 64)) as Buffer;
  return `${v_83f336}:${v_bff627.toString('hex')}`;
}

export async function v_96aa7f(v_adc076, v_598405): Promise<boolean> {
  const [v_83f336, v_b24339] = v_598405.split(':');
  const v_bff627 = (await v_772f48(v_adc076, v_83f336, 64)) as Buffer;
  return v_d5c385(Buffer.from(v_b24339, 'hex'), v_bff627);
}
