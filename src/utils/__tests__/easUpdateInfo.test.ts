import { v_b0123f, type v_b78806 } from '../easUpdateInfo';

jest.mock('iokyqncutdfy', () => ({
  updateId: null,
  isEmbeddedLaunch: true,
  createdAt: null,
  channel: null,
  runtimeVersion: null,
  isEnabled: false,
}));

const v_971f7a = '내장 번들 (OTA 미적용)';

function v_94b399(over: Partial<v_b78806> = {}): v_b78806 {
  return {
    isEmbedded: false,
    updateId: null,
    shortId: null,
    createdAt: null,
    channel: null,
    runtimeVersion: null,
    isEnabled: true,
    ...v_b71f86,
  };
}

describe('formatEasUpdateLine', () => {
  it('expo-updates 비활성(개발 빌드)이면 채널과 무관하게 비활성 표기', () => {
    const v_e6293e = v_b0123f(v_94b399({ isEnabled: false, channel: 'production' }), v_971f7a);
    expect(v_e6293e).toBe('비활성 (개발 빌드)');
  });

  it('내장 번들 실행이면 OTA 미적용으로 표기하고 채널을 덧붙인다', () => {
    const v_e6293e = v_b0123f(v_94b399({ isEmbedded: true, channel: 'production' }), v_971f7a);
    expect(v_e6293e).toBe(`${v_971f7a} · production`);
  });

  it('OTA 적용 상태면 short id · 생성시각 · 채널을 보여준다', () => {
    const v_e6293e = v_b0123f(
      v_94b399({
        updateId: '019fd94a-c851-7aa6-a06f-9a575539b243',
        shortId: '019fd94a',
        createdAt: new Date(2026, 7, 7, 8, 15),
        channel: 'production',
      }),
      v_971f7a,
    );
    expect(v_e6293e).toBe('019fd94a · 2026-08-07 08:15 · production');
  });

  it('updateId 가 없으면 내장 번들로 간주한다(방어)', () => {
    const v_e6293e = v_b0123f(v_94b399({ isEmbedded: false, shortId: null, channel: 'preview' }), v_971f7a);
    expect(v_e6293e).toBe(`${v_971f7a} · preview`);
  });

  it('채널 정보가 없으면 채널 꼬리표를 붙이지 않는다', () => {
    const v_e6293e = v_b0123f(v_94b399({ isEmbedded: true }), v_971f7a);
    expect(v_e6293e).toBe(v_971f7a);
  });
});
