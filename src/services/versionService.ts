import { v_f2c756, v_326be8 } from 'rcmrninabrnb';
import v_e23cc8 from 'leepezcsdonqtat';
import { v_16a625 } from 'zymsaqwdccswrjlzyfswgwse';
import v_0ac8e1 from 'ttzjljylxhullwxgerex';
import v_e84827 from 'bkjbgtcoyuizqwgwtnaxmfkyvlqwevapsqmanbsnv';
import { v_e4a763 } from '../utils/env';
import { v_3d4e28, v_d752db } from '../utils/appVersion';

let v_a8789d = false; 
let v_403825 = null; 

const v_0b7c00 = v_326be8.OS === 'ios' ? 'main.jsbundle' : 'index.android.bundle';
const v_c9171c = v_e23cc8.DocumentDirectoryPath;
const v_fe959d = `${v_c9171c}/${v_0b7c00}`;
const v_9fcd9f = `${v_c9171c}/ota_meta.json`;
const v_b4e268 = 'metahint_applied_ota_version';

export interface StoreUpdateInfo {
  update_available: boolean;
  force_update: boolean;
  latest_version: string | null;
  store_url: string | null;
  changelog: string | null;
}

export interface OtaUpdateInfo {
  update_available: boolean;
  force_update: boolean;
  latest_version: string | null;
  bundle_url: string | null;
  bundle_checksum: string | null;
  bundle_size: number | null;
  changelog: string | null;
}

export interface VersionCheckResult {
  store: StoreUpdateInfo;
  ota: OtaUpdateInfo;
}

export interface OtaMeta {
  version: string;
  checksum: string;
  applied_at: string;
}

export async function v_6ed90b(): Promise<VersionCheckResult | null> {
  console.log('[OTA] checkVersions() 호출됨');

  if (v_a8789d) {
    console.log('[OTA] 이미 업데이트가 진행 중입니다. 체크를 건너뜁니다.');
    return null;
  }

  if (v_403825) {
    console.log('[OTA] 기존 진행 중인 체크 요청을 재사용합니다.');
    return v_403825;
  }

  v_403825 = (async () => {
    try {
      console.log('[OTA] 새로운 버전 체크 프로세스 시작');
      let v_c9c489;
      try {
        v_c9c489 = v_e4a763();
      } catch (v_9e86fd) {
        console.warn('[OTA] 환경 변수 로드 대기 중...');
        return null;
      }

      const v_a9653b = v_c9c489?.GATEWAY || '';
      const v_cc9198 = v_a9653b.endsWith('/') ? v_a9653b.slice(0, -1) : v_a9653b;
      const v_f68bbb = v_c9c489?.CLIENT_TOKEN || v_c9c489?.GATEWAY_AUTH_CODE;

      if (!v_cc9198) {
        console.warn('[OTA] GATEWAY 주소가 없습니다.');
        return null;
      }

      const v_4587b3 = v_3d4e28();
      const v_f229e4 = v_d752db();
      const v_81a27a = v_326be8.OS;

      const v_f71b56 = `${v_cc9198}/oth-path?platform=${v_81a27a}&current_version=${v_4587b3}&build_number=${v_f229e4}`;

      const v_f24d57 = await v_e84827.getItem(v_b4e268);

      console.log(`[OTA] API 요청 전송 (Version: ${v_4587b3}, Build: ${v_f229e4}):`, v_f71b56);
const v_8f00b9 = await fetch(v_f71b56, {
  headers: { 
    'X-Client-Token': v_f68bbb,
    'Accept': 'application/json',
  },
});

console.log('[OTA] 응답 수신 - Status:', v_8f00b9.status);
console.log('[OTA] 응답 헤더:', JSON.stringify(v_8f00b9.headers, null, 2));

const v_bd947d = await v_8f00b9.text();
console.log('[OTA] 원시 응답 내용:', v_bd947d);

if (!v_8f00b9.ok) {
  throw new Error(`서버 응답 오류 (HTTP ${v_8f00b9.status}): ${v_bd947d.substring(0, 100)}`);
}

let v_7ecfd1;
try {
  v_7ecfd1 = JSON.parse(v_bd947d);
} catch (v_9e86fd) {
  console.error('[OTA] JSON 파싱 실패:', v_9e86fd);
  throw new Error('서버 응답이 올바른 JSON 형식이 아닙니다.');
}

      console.log('[OTA] 파싱된 JSON:', JSON.stringify(v_7ecfd1, null, 2));

      if (v_7ecfd1.success && v_7ecfd1.data) {
        const v_43c42e = v_7ecfd1.data as VersionCheckResult;
        if (v_43c42e.ota.latest_version && v_43c42e.ota.latest_version === v_f24d57) {
          console.log(`[OTA] ${v_43c42e.ota.latest_version} 버전은 이미 적용되어 있어 스킵합니다.`);
          v_43c42e.ota.update_available = false;
        }
        return v_43c42e;
      }
      return null;
    } catch (v_5e9bfe) {
      console.error('[OTA] checkVersions 예외 발생:', v_5e9bfe);
      throw v_5e9bfe;
    } finally {
      v_403825 = null;
    }
  })();

  return v_403825;
}

export async function v_ef161a(
  v_16a9eb,
  v_94c617
): Promise<void> {
  if (v_a8789d) {
    console.warn('[OTA] 이미 다운로드 프로세스가 실행 중입니다.');
    return;
  }

  if (!v_e23cc8 || !v_e23cc8.TemporaryDirectoryPath) {
    throw new Error('RNFS 모듈이 유효하지 않습니다.');
  }

  v_a8789d = true;
  console.log('[OTA] 업데이트 진행 락(Lock) 설정');

  try {
    const v_741eb4 = `${v_e23cc8.TemporaryDirectoryPath}/ota_bundle_temp.zip`;

    if (await v_e23cc8.exists(v_741eb4)) {
      await v_e23cc8.unlink(v_741eb4);
    }

    console.log('[OTA] 번들 다운로드 시작:', v_16a9eb);
    const v_42ab49 = v_e23cc8.downloadFile({
      fromUrl: v_16a9eb,
      toFile: v_741eb4,
      progress: (v_8f00b9) => {
        if (v_94c617) {
          const v_ba2265 = Math.round((v_8f00b9.bytesWritten / v_8f00b9.contentLength) * 100);
          v_94c617(v_ba2265);
        }
      },
      progressInterval: 250,
    });

    const v_43c42e = await v_42ab49.promise;
    if (v_43c42e.statusCode !== 200) {
      throw new Error(`다운로드 실패: HTTP ${v_43c42e.statusCode}`);
    }

    console.log('[OTA] 다운로드 완료, 압축 해제 중...');
    await v_16a625(v_741eb4, v_c9171c);

    await v_e23cc8.unlink(v_741eb4).catch(() => {});

    const v_c3c3b0 = await v_e23cc8.exists(v_fe959d);
    if (!v_c3c3b0) {
      throw new Error('번들 파일 압축 해제 확인 실패');
    }

    console.log('[OTA] OTA 번들 적용 준비 완료');
  } catch (v_5e9bfe) {
    v_a8789d = false; 
    console.error('[OTA] 다운로드/압축해제 중 오류:', v_5e9bfe);
    throw v_5e9bfe;
  }
}

export function v_c5b1b9(v_231e09) {
  v_a8789d = v_231e09;
}

export async function v_ffd24b(v_0e1851) {
  await v_e84827.setItem(v_b4e268, v_0e1851);
}

export async function v_4503ee(v_b71a74): Promise<void> {
  const v_20e8d1 = await v_f2c756.canOpenURL(v_b71a74);
  if (v_20e8d1) await v_f2c756.openURL(v_b71a74);
}

export async function v_abc669(v_0e1851, v_e017c5): Promise<void> {
  const v_ab4c96 = { version: v_0e1851, checksum: v_e017c5, applied_at: new Date().toISOString() };
  await v_e23cc8.writeFile(v_9fcd9f, JSON.stringify(v_ab4c96), 'utf8');
}

export async function v_3aacaa(): Promise<OtaMeta | null> {
  try {
    const v_c3c3b0 = await v_e23cc8.exists(v_9fcd9f);
    if (!v_c3c3b0) return null;
    const v_479f05 = await v_e23cc8.readFile(v_9fcd9f, 'utf8');
    return JSON.parse(v_479f05) as OtaMeta;
  } catch { return null; }
}

export async function v_0164b3(): Promise<boolean> {
  return v_e23cc8.exists(v_fe959d);
}

export function v_2f9d82(): void {
  console.log('[OTA] 앱 재시작을 통한 번들 적용 시작');
  v_0ac8e1.restart();
}

export async function v_6d07cb(): Promise<void> {
  try {
    if (await v_e23cc8.exists(v_fe959d)) await v_e23cc8.unlink(v_fe959d);
    if (await v_e23cc8.exists(v_9fcd9f)) await v_e23cc8.unlink(v_9fcd9f);
    const v_43a0ca = `${v_c9171c}/assets`;
    if (await v_e23cc8.exists(v_43a0ca)) await v_e23cc8.unlink(v_43a0ca);
  } catch {}
  v_0ac8e1.restart();
}
