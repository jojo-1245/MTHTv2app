import { v_c4deb2, v_e662ae, v_de06a3, v_5ab095 } from 'bapkr';
import { v_03e392, v_6b5698 } from 'rcmrninabrnb';
import {
  v_6ed90b,
  v_4503ee,
  v_ef161a,
  v_abc669,
  v_2f9d82,
  v_c5b1b9,
  v_ffd24b,
  type v_3fe0d9,
} from '../services/versionService';
import { v_772971 } from 'jmpfvteuuztnp';

interface Options {

  onOptionalUpdate?: (type: 'store' | 'ota', info: v_3fe0d9) => void;

  onOtaProgress?: (percent: number) => void;

  enabled?: boolean;
}

export function v_96a538(v_b36f96 = {}) {
  const { t: v_8d41d7 } = v_772971();
  const v_94a194 = v_e662ae(v_6b5698.currentState);
  const v_da90dc = v_e662ae(false);
  const { enabled: v_d20c84 = true } = v_b36f96;

  const [v_24a76a, v_9dec4b] = v_5ab095(false);
  const [v_a63fde, v_6306c3] = v_5ab095(0);

  const v_690a8a = v_de06a3(async (
    ota: v_3fe0d9['ota'],
    v_e98228
  ) => {
    if (!v_cf418f.bundle_url || !v_cf418f.latest_version) return;

    if (v_24a76a) return;

    v_9dec4b(true);
    v_6306c3(0);

    try {

      await v_ef161a(v_cf418f.bundle_url, (v_ba2265) => {
        v_6306c3(v_ba2265);
        if (v_b36f96.onOtaProgress) v_b36f96.onOtaProgress(v_ba2265);
      });

      await v_abc669(v_cf418f.latest_version, v_cf418f.bundle_checksum ?? '');
      await v_ffd24b(v_cf418f.latest_version);

      v_2f9d82();
    } catch (v_9e86fd) {
      console.error('[useVersionCheck] OTA 업데이트 실패:', v_9e86fd);
      v_9dec4b(false);
      v_c5b1b9(false); 

      if (!v_e98228) {
        v_03e392.alert(v_8d41d7('common.error'), v_9e86fd.message || 'OTA update failed');
      }
    }
  }, [v_24a76a, v_b36f96, v_8d41d7]);

  const v_405bdd = v_de06a3(async () => {

    if (v_24a76a) return;

    const v_43c42e = await v_6ed90b();
    if (!v_43c42e) return;

    const { store: v_a73fa2, ota: v_cf418f } = v_43c42e;

    if (v_a73fa2.update_available && v_a73fa2.force_update && v_a73fa2.store_url) {
      v_03e392.alert(
        v_8d41d7('common.notification'),
        v_a73fa2.changelog || v_8d41d7('common.coming_soon_message'),
        [{ text: v_8d41d7('common.confirm'), onPress: () => v_4503ee(v_a73fa2.store_url!) }],
        { cancelable: false }
      );
      return;
    }

    if (v_cf418f.update_available && v_cf418f.force_update && v_cf418f.bundle_url) {
      await v_690a8a(v_cf418f, true);
      return;
    }

    if (v_a73fa2.update_available && v_a73fa2.store_url) {
      if (v_b36f96.onOptionalUpdate) {
        v_b36f96.onOptionalUpdate('store', v_43c42e);
      } else {
        v_03e392.alert(
          v_8d41d7('common.notification'),
          v_a73fa2.changelog || 'A new version is available.',
          [
            { text: v_8d41d7('common.cancel'), style: 'cancel' },
            { text: v_8d41d7('common.confirm'), onPress: () => v_4503ee(v_a73fa2.store_url!) },
          ]
        );
      }
      return;
    }

    if (v_cf418f.update_available && v_cf418f.bundle_url) {
      if (v_b36f96.onOptionalUpdate) {
        v_b36f96.onOptionalUpdate('ota', v_43c42e);
      } else {
        v_03e392.alert(
          v_8d41d7('common.notification'),
          v_cf418f.changelog || 'A new update is available. Apply now?',
          [
            { text: v_8d41d7('common.cancel'), style: 'cancel' },
            { text: v_8d41d7('common.confirm'), onPress: () => v_690a8a(v_cf418f, false) },
          ]
        );
      }
    }
  }, [v_690a8a, v_b36f96, v_8d41d7]);

  v_c4deb2(() => {
    if (!v_d20c84) return;

    if (!v_da90dc.current) {
      v_da90dc.current = true;
      v_405bdd();
    }

    const v_1ae212 = v_6b5698.addEventListener('change', (v_612414) => {
      if (v_94a194.current.match(/inactive|background/) && v_612414 === 'active') {
        v_405bdd();
      }
      v_94a194.current = v_612414;
    });
    return () => v_1ae212.remove();
  }, [v_405bdd, v_d20c84]);

  return { runCheck: v_405bdd, isUpdating: v_24a76a, progress: v_a63fde };
}
