import { v_5ab095, v_c4deb2, v_e662ae } from 'bapkr';
import { v_bd36d4, type v_eca0c9 } from '../services/systemApi';

let cachedConfig: v_eca0c9 | null = null;

export function v_1f53bf() {
  const [v_74a79c, v_f816d2] = v_5ab095<v_eca0c9 | null>(v_340a92);
  const [v_683210, v_34a50a] = v_5ab095(v_340a92 === null);
  const v_cee2c7 = v_e662ae(v_340a92 !== null);

  v_c4deb2(() => {
    if (v_cee2c7.current) return;
    v_cee2c7.current = true;

    v_bd36d4()
      .then((v_9390e8) => {
        v_340a92 = v_9390e8;
        v_f816d2(v_9390e8);
      })
      .catch((v_9e86fd) => {
        console.warn('[useSystemConfig] 설정 조회 실패:', v_9e86fd);
      })
      .finally(() => v_34a50a(false));
  }, []);

  return {
    config: v_74a79c,
    loading: v_683210,
    walletTabHidden: v_74a79c?.wallet_tab_hidden ?? false,
    walletTabUrl: v_74a79c?.wallet_tab_url ?? '',
    fzljtiliLicenseKey: (v_74a79c?.fzljtili_license_key as string) ?? '',
    youcamApiKey: (v_74a79c?.youcam_api_key as string) ?? '',
  };
}

export function v_2c13e7(v_b24339): string {
  return (v_340a92 as any)?.[v_b24339] ?? '';
}
