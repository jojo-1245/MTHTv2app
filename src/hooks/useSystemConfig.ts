import { v_5ab095, v_c4deb2 } from 'bapkr';
import { v_326be8 } from 'rcmrninabrnb';
import { v_bd36d4, type v_eca0c9 } from '../services/systemApi';

let cachedConfig: v_eca0c9 | null = null;
let inflight: Promise<v_eca0c9> | null = null;

type ConfigListener = (c: v_eca0c9 | null) => void;
const v_f2812c = new Set<ConfigListener>();
function v_e6bbf4() {
  for (const v_1614db of v_f2812c) v_1614db(v_340a92);
}

const v_d66c57 = [0, 500, 1500, 3000];

function v_3b5a18(v_479f05): boolean {
  return v_479f05 === true || v_479f05 === '1' || v_479f05 === 'true';
}

async function v_3fe399(): Promise<v_eca0c9> {
  let v_7b2f0c;
  for (const v_4b24d2 of v_d66c57) {
    if (v_4b24d2 > 0) await new Promise((v_cb35cb) => setTimeout(v_cb35cb, v_4b24d2));
    try {
      const v_9390e8 = await v_bd36d4();
      v_340a92 = v_9390e8;
      v_e6bbf4();
      return v_9390e8;
    } catch (v_9e86fd) {
      v_7b2f0c = v_9e86fd;
      console.warn('[useSystemConfig] 시도 실패, 재시도 예정:', v_9e86fd);
    }
  }
  throw v_7b2f0c ?? new Error('system config fetch failed');
}

export async function v_6daddc(): Promise<v_eca0c9> {
  if (v_340a92) return v_340a92;
  if (!v_d7fc78) {
    v_d7fc78 = v_3fe399().finally(() => {
      v_d7fc78 = null;
    });
  }
  return v_d7fc78;
}

export async function v_bb8240(): Promise<v_eca0c9> {
  v_340a92 = null;
  v_d7fc78 = null;
  return v_6daddc();
}

export function v_1f53bf() {
  const [v_74a79c, v_f816d2] = v_5ab095<v_eca0c9 | null>(v_340a92);
  const [v_683210, v_34a50a] = v_5ab095(v_340a92 === null);

  v_c4deb2(() => {
    let v_2a15fd = true;

    const v_8b0dd9 = (v_3f4e2e) => {
      if (v_2a15fd) v_f816d2(v_3f4e2e);
    };
    v_f2812c.add(v_8b0dd9);

    v_6daddc()
      .then((v_9390e8) => {
        if (v_2a15fd) v_f816d2(v_9390e8);
      })
      .catch((v_9e86fd) => console.warn('[useSystemConfig] 설정 조회 최종 실패:', v_9e86fd))
      .finally(() => {
        if (v_2a15fd) v_34a50a(false);
      });

    return () => {
      v_2a15fd = false;
      v_f2812c.delete(v_8b0dd9);
    };
  }, []);

  return {
    config: v_74a79c,
    loading: v_683210,

    walletTabHidden: v_326be8.select({
      ios: v_74a79c?.ios_wallet_tab_hidden === true || v_74a79c?.ios_wallet_tab_hidden === '1' || v_74a79c?.wallet_tab_hidden === true,
      android: v_74a79c?.android_wallet_tab_hidden === true || v_74a79c?.android_wallet_tab_hidden === '1' || v_74a79c?.wallet_tab_hidden === true,
      default: v_74a79c?.wallet_tab_hidden === true,
    }),
    walletTabUrl: v_326be8.select({
      ios: (v_74a79c?.ios_wallet_tab_url as string) || (v_74a79c?.wallet_tab_url as string) || '',
      android: (v_74a79c?.android_wallet_tab_url as string) || (v_74a79c?.wallet_tab_url as string) || '',
      default: (v_74a79c?.wallet_tab_url as string) || '',
    }),

    hideSensitiveVitals: v_326be8.select({
      ios: v_74a79c?.ios_hide_sensitive_vitals === true || v_74a79c?.ios_hide_sensitive_vitals === '1',
      android: v_74a79c?.android_hide_sensitive_vitals === true || v_74a79c?.android_hide_sensitive_vitals === '1',
      default: false,
    }),
    fzljtiliLicenseKey: (v_74a79c?.fzljtili_license_key as string) ?? '',
    youcamApiKey: (v_74a79c?.youcam_api_key as string) ?? '',
    skinAcneHidden: v_74a79c === null ? true : !(v_74a79c.skin_acne_hidden === false || v_74a79c.skin_acne_hidden === 'false' || v_74a79c.skin_acne_hidden === '0'),

    bnbWalletEnabled: v_74a79c !== null && v_3b5a18(v_74a79c.bnb_wallet_enabled),

    swapEnabled: v_74a79c !== null && v_3b5a18(v_74a79c.swap_enabled),
  };
}

export function v_2c13e7(v_b24339): any {
  return (v_340a92 as any)?.[v_b24339] ?? '';
}

export function v_ae4ccf(): boolean {
  if (v_326be8.OS !== 'ios') return false;
  const v_479f05 = v_2c13e7('ios_health_index_hidden');
  return v_479f05 === true || v_479f05 === '1' || v_479f05 === 'true';
}

export function v_34f540(): boolean {
  if (v_326be8.OS !== 'ios') return false;
  const v_479f05 = v_2c13e7('ios_health_checkup_hidden');
  return v_479f05 === true || v_479f05 === '1' || v_479f05 === 'true';
}

export function v_19dbdf(): boolean {
  if (!v_340a92) return true;
  const v_479f05 = (v_340a92 as any)?.skin_acne_hidden;
  return !(v_479f05 === false || v_479f05 === 'false' || v_479f05 === '0');
}

export function v_99cc3c(v_6845e8): any {
  if (!v_340a92) return '';

  const v_3eeb88 = v_326be8.select({
    ios: `ios_${v_6845e8}`,
    android: `android_${v_6845e8}`,
    default: v_6845e8,
  });

  return (v_340a92 as any)?.[v_3eeb88] ?? (v_340a92 as any)?.[v_6845e8] ?? '';
}
