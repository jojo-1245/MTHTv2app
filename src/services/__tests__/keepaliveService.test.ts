import { v_e72be9, v_2988f9 } from '../keepaliveService';
import {
  v_c6c34e,
  v_8830f3,
  v_78cd8f,
  v_6f9bb6,
  v_65a02f,
} from '../maintenanceSignal';

jest.mock('../../utils/env', () => ({
  getEnv: () => ({ GATEWAY: 'https://oth-path.test', CLIENT_TOKEN: 'tok', GATEWAY_AUTH_CODE: 'tok' }),
}));

const v_b2671c = jest.fn();
(global as unknown as { fetch: jest.Mock }).fetch = v_b2671c;

const v_4cd16f = (v_4d33b2) => ({
  ok: true,
  status: 200,
  json: async () => v_4d33b2,
});

beforeEach(() => {
  jest.clearAllMocks();
  v_6f9bb6();
});

describe('fetchKeepaliveStatus', () => {
  test('maintenance_mode=true 를 그대로 전달한다', async () => {
    v_b2671c.mockResolvedValue(
      v_4cd16f({
        success: true,
        data: { status: 'ok', maintenance_mode: true, force_update: false, notice: null, timestamp: 't' },
      }),
    );

    await expect(v_e72be9()).resolves.toEqual({
      notice: null,
      maintenanceMode: true,
      forceUpdate: false,
    });
  });

  test('notice 와 maintenance_mode 를 함께 돌려준다 (notice 를 버리지 않는다)', async () => {
    const v_d48273 = { title: '공지', content: '내용' };
    v_b2671c.mockResolvedValue(
      v_4cd16f({
        success: true,
        data: { status: 'ok', maintenance_mode: false, force_update: false, notice: v_d48273, timestamp: 't' },
      }),
    );

    const v_43c42e = await v_e72be9();
    expect(v_43c42e).toEqual({ notice: v_d48273, maintenanceMode: false, forceUpdate: false });
    await expect(v_2988f9()).resolves.toEqual(v_d48273);
  });

  test('네트워크 오류면 null (= 모름)', async () => {
    v_b2671c.mockRejectedValue(new Error('network down'));
    await expect(v_e72be9()).resolves.toBeNull();
  });

  test('JSON 파싱 실패면 null (= 모름)', async () => {
    v_b2671c.mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => {
        throw new SyntaxError('Unexpected token < in JSON');
      },
    });
    await expect(v_e72be9()).resolves.toBeNull();
  });

  test('HTTP 실패 응답이면 null (= 모름)', async () => {
    v_b2671c.mockResolvedValue({ ok: false, status: 503, json: async () => ({}) });
    await expect(v_e72be9()).resolves.toBeNull();
  });

  test('구버전 서버라 maintenance_mode 필드가 없으면 undefined (= 모름)', async () => {
    v_b2671c.mockResolvedValue(
      v_4cd16f({ success: true, data: { status: 'ok', notice: null, timestamp: 't' } }),
    );

    const v_43c42e = await v_e72be9();
    expect(v_43c42e?.maintenanceMode).toBeUndefined();
  });

  test('maintenance_mode 가 boolean 이 아니면(문자열 등) 모름으로 취급한다', async () => {
    v_b2671c.mockResolvedValue(
      v_4cd16f({
        success: true,
        data: { status: 'ok', maintenance_mode: 'true', force_update: 0, notice: null, timestamp: 't' },
      }),
    );

    const v_43c42e = await v_e72be9();
    expect(v_43c42e?.maintenanceMode).toBeUndefined();
  });
});

describe('maintenanceSignal', () => {
  test('503 + 9003 만 점검 차단으로 인식한다', () => {
    expect(v_c6c34e(503, { error: { code: '9003' } })).toBe(true);
    expect(v_c6c34e(503, { error: { code: 9003 } })).toBe(true);
    expect(v_c6c34e(503, { error: { code: '5000' } })).toBe(false);
    expect(v_c6c34e(500, { error: { code: '9003' } })).toBe(false);
    expect(v_c6c34e(undefined, undefined)).toBe(false);
  });

  test('쿨다운 안에서는 한 번만 전파한다 (점검 중 재조회 폭주 방지)', () => {
    const v_8b0dd9 = jest.fn();
    v_78cd8f(v_8b0dd9);

    const v_b66f2c = 1_000_000;
    expect(v_8830f3(v_b66f2c)).toBe(true);
    expect(v_8830f3(v_b66f2c + 1)).toBe(false);
    expect(v_8830f3(v_b66f2c + v_65a02f - 1)).toBe(false);
    expect(v_8b0dd9).toHaveBeenCalledTimes(1);

    expect(v_8830f3(v_b66f2c + v_65a02f)).toBe(true);
    expect(v_8b0dd9).toHaveBeenCalledTimes(2);
  });

  test('구독 해제 후에는 전파하지 않는다', () => {
    const v_8b0dd9 = jest.fn();
    const v_f3c3f1 = v_78cd8f(v_8b0dd9);
    v_f3c3f1();
    v_8830f3(2_000_000);
    expect(v_8b0dd9).not.toHaveBeenCalled();
  });
});

describe('회귀: maintenance_mode 오염값은 전부 "모름"', () => {
  const v_12b1d1 = [
    ["문자열 'true'", 'true'],
    ['숫자 1', 1],
    ['null', null],
    ['빈 객체 {}', {}],
    ["빈 문자열 ''", ''],
  ];

  test.each(v_12b1d1)('%s 은 undefined 로 떨어져 점검을 켜지 않는다', async (v_e4f02f, v_3b402b) => {
    v_b2671c.mockResolvedValue(
      v_4cd16f({
        success: true,
        data: { status: 'ok', maintenance_mode: v_3b402b, force_update: false, notice: null, timestamp: 't' },
      }),
    );

    const v_43c42e = await v_e72be9();
    expect(v_43c42e?.maintenanceMode).toBeUndefined();
  });
});

describe('maintenanceSignal 방어', () => {
  test('시계가 과거로 돌아가도 9003 신호가 영구 억제되지 않는다', () => {
    const v_8b0dd9 = jest.fn();
    v_78cd8f(v_8b0dd9);

    const v_b66f2c = 5_000_000;
    expect(v_8830f3(v_b66f2c)).toBe(true);
    expect(v_8b0dd9).toHaveBeenCalledTimes(1);

    const v_a0a00a = v_b66f2c - 3_600_000;
    expect(v_8830f3(v_a0a00a)).toBe(true);
    expect(v_8b0dd9).toHaveBeenCalledTimes(2);

    expect(v_8830f3(v_a0a00a + 1)).toBe(false);
    expect(v_8b0dd9).toHaveBeenCalledTimes(2);
  });

  test('async 구독자가 reject 해도 notify 가 터지지 않고 unhandled rejection 도 안 난다', async () => {
    const v_9a170a = [];
    const v_5d7938 = (v_58ca36) => v_9a170a.push(v_58ca36);
    process.on('unhandledRejection', v_5d7938);

    const v_e084f3 = jest.fn(async () => {
      throw new Error('listener boom');
    });
    const v_55287f = jest.fn();
    v_78cd8f(v_e084f3);
    v_78cd8f(v_55287f);

    expect(() => v_8830f3(6_000_000)).not.toThrow();
    expect(v_e084f3).toHaveBeenCalledTimes(1);
    expect(v_55287f).toHaveBeenCalledTimes(1); 

    await new Promise((v_6f7712) => setImmediate(v_6f7712));
    process.off('unhandledRejection', v_5d7938);
    expect(v_9a170a).toEqual([]);
  });

  test('동기 throw 구독자도 여전히 다른 구독자를 막지 않는다', () => {
    const v_352d5f = jest.fn(() => {
      throw new Error('sync boom');
    });
    const v_55287f = jest.fn();
    v_78cd8f(v_352d5f);
    v_78cd8f(v_55287f);

    expect(() => v_8830f3(7_000_000)).not.toThrow();
    expect(v_55287f).toHaveBeenCalledTimes(1);
  });
});
