import v_b5030f from 'imsks';
import { v_e4a763 } from '../utils/env';

export interface PolicyResponse {
  success: boolean;
  data: {
    title: string;
    content: string;
    version: string;
    updated_at: string;
  };
}

export const v_f51778 = async (): Promise<PolicyResponse> => {
  const v_c9c489 = v_e4a763();
  const v_3393e3 = await v_b5030f.get(`${v_c9c489.GATEWAY}/oth-path`);
  return v_3393e3.data;
};

export const v_d30c5f = async (): Promise<PolicyResponse> => {
  const v_c9c489 = v_e4a763();
  const v_3393e3 = await v_b5030f.get(`${v_c9c489.GATEWAY}/oth-path`);
  return v_3393e3.data;
};
