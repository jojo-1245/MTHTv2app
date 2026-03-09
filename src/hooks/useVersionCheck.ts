import { v_c4deb2, v_e662ae, v_de06a3, v_5ab095 } from 'bapkr';
import { v_03e392, v_6b5698 } from 'rcmrninabrnb';
import * as v_79a9df from '../services/versionService';
import { v_772971 } from 'jmpfvteuuztnp';

interface Options {

  onOptionalUpdate?: (type: 'store' | 'ota', info: VersionCheckResult) => void;

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
  const [v_5ca890, v_67212c] = v_5ab095<{
    visible: boolean;
    title: string;
    content: string;
    isForce: boolean;
    storeUrl: string;
  } | null>(null);

  const v_690a8a = v_de06a3(async (
    ota: v_79a9df.VersionCheckResult['ota'],
    v_e98228
  ) => {
    if (!v_cf418f.bundle_url || !v_cf418f.latest_version) return;

    if (v_24a76a) return;

    v_9dec4b(true);
    v_6306c3(0);

    try {

      await v_79a9df.downloadOtaBundle(v_cf418f.bundle_url, (v_ba2265) => {
        v_6306c3(v_ba2265);
        if (v_b36f96.onOtaProgress) v_b36f96.onOtaProgress(v_ba2265);
      });

      await v_79a9df.saveOtaMeta(v_cf418f.latest_version, v_cf418f.bundle_checksum ?? '');
      await v_79a9df.markVersionAsApplied(v_cf418f.latest_version);

      v_79a9df.applyBundle();
    } catch (v_9e86fd) {
      console.error('[useVersionCheck] OTA 업데이트 실패:', v_9e86fd);
      v_9dec4b(false);
      v_79a9df.setUpdateProcessing(false); 

      if (!v_e98228) {
        v_03e392.alert(v_8d41d7('common.error'), v_9e86fd.message || 'OTA update failed');
      }
    }
  }, [v_24a76a, v_b36f96, v_8d41d7]);

  const v_405bdd = v_de06a3(async () => {
    if (v_24a76a) return;

    const v_43c42e = await v_79a9df.checkVersions();
    if (!v_43c42e) return;

    const { store: v_a73fa2, ota: v_cf418f } = v_43c42e;

    console.log(`[OTA] 업데이트 체크 결과: OTA(${v_cf418f.update_available}), Store(${v_a73fa2.update_available})`);

    if (v_cf418f.update_available && v_cf418f.force_update && v_cf418f.bundle_url) {
      console.log('[OTA] OTA 강제 업데이트 시작');
      await v_690a8a(v_cf418f, true);
      return;
    }

    if (v_a73fa2.update_available && v_a73fa2.force_update && v_a73fa2.store_url) {
      console.log('[OTA] 스토어 강제 업데이트 모달 설정');
      v_67212c({
        visible: true,
        title: v_8d41d7('common.notification') || 'Notification',
        content: v_a73fa2.changelog || '새 버전으로 업데이트하세요',
        isForce: true,
        storeUrl: v_a73fa2.store_url,
      });
      return;
    }

    if (v_cf418f.update_available && v_cf418f.bundle_url) {
      console.log('[OTA] OTA 선택 업데이트 안내');
      v_690a8a(v_cf418f, false);
      return;
    }

    if (v_a73fa2.update_available && v_a73fa2.store_url) {
      console.log('[OTA] 스토어 선택 업데이트 모달 설정');
      v_67212c({
        visible: true,
        title: v_8d41d7('common.notification') || 'Update Available',
        content: v_a73fa2.changelog || '새 버전으로 업데이트하세요',
        isForce: false,
        storeUrl: v_a73fa2.store_url,
      });
      return;
    }
    console.log('[OTA] 업데이트 체크 종료 (최신 상태)');
  }, [v_690a8a, v_24a76a, v_b36f96, v_8d41d7]);

  v_c4deb2(() => {
    if (!v_d20c84) return;

    let v_3894d5 = null;

    if (!v_da90dc.current) {
      v_da90dc.current = true;
      v_3894d5 = setTimeout(() => {
        v_405bdd();
      }, 0);
    }

    const v_1ae212 = v_6b5698.addEventListener('change', (v_612414) => {
      if (v_94a194.current.match(/inactive|background/) && v_612414 === 'active') {
        v_405bdd();
      }
      v_94a194.current = v_612414;
    });
    return () => {
      if (v_3894d5 != null) clearTimeout(v_3894d5);
      v_1ae212.remove();
    };
  }, [v_405bdd, v_d20c84]);

  return { 
    runCheck: v_405bdd, 
    isUpdating: v_24a76a, 
    progress: v_a63fde, 
    storeUpdateInfo: v_5ca890, 
    dismissStoreUpdate: () => v_67212c(null) 
  };
}
