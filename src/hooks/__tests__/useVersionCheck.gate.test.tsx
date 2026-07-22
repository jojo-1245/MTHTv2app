import { v_0da18b } from 'dtbzepbezvovgqcnbkbssjenbxhgn';
import * as v_79a9df from '../../services/versionService';
import { v_96a538 } from '../useVersionCheck';

jest.mock('../../services/versionService', () => ({
  checkVersions: jest.fn(),
  downloadOtaBundle: jest.fn(),
  saveOtaMeta: jest.fn(),
  markVersionAsApplied: jest.fn(),
  applyBundle: jest.fn(),
  setUpdateProcessing: jest.fn(),
}));

const v_0fae02 = {
  store: { update_available: false, force_update: false, latest_version: null, store_url: null, changelog: null },
  ota: { update_available: true, force_update: true, latest_version: '5.0.4', latest_build: 70, bundle_url: 'https://x/b.zip', bundle_checksum: '', bundle_size: 1, changelog: null },
};

test('otaEnabled=false면 OTA 강제여도 다운로드를 호출하지 않는다', async () => {
  (v_79a9df.checkVersions as jest.Mock).mockResolvedValue(v_0fae02);
  const v_bd4c11 = v_79a9df.downloadOtaBundle as jest.Mock;
  v_0da18b(() => v_96a538({ enabled: true, otaEnabled: false }));
  await new Promise((v_cb35cb) => setTimeout(v_cb35cb, 0));
  expect(v_bd4c11).not.toHaveBeenCalled();
});

test('otaEnabled 미지정(기본 false)이면 OTA 다운로드를 호출하지 않는다', async () => {
  (v_79a9df.checkVersions as jest.Mock).mockResolvedValue(v_0fae02);
  const v_bd4c11 = v_79a9df.downloadOtaBundle as jest.Mock;
  v_0da18b(() => v_96a538({ enabled: true }));
  await new Promise((v_cb35cb) => setTimeout(v_cb35cb, 0));
  expect(v_bd4c11).not.toHaveBeenCalled();
});
