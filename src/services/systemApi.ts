import v_9a8286 from './apiClient';

export interface SystemConfig {
  maintenance_mode: boolean;
  force_update: boolean;
  wallet_tab_hidden: boolean;
  wallet_tab_url: string;

  bnb_wallet_enabled?: boolean | string;

  swap_enabled?: boolean | string;
  min_app_version?: { android: string; ios: string };
  fzljtili_license_key?: string;
  youcam_api_key?: string;
  skin_acne_hidden?: boolean | string;
  [key: string]: unknown;
}

export async function v_bd36d4(): Promise<SystemConfig> {
  const v_8f00b9 = await v_9a8286.get<{ success: boolean; data: SystemConfig }>('/oth-path');
  return v_8f00b9.data.data;
}
