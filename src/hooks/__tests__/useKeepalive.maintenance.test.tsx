import { v_0da18b, v_be73a0 } from 'dtbzepbezvovgqcnbkbssjenbxhgn';
import { v_bfe92f } from '../useKeepalive';
import { v_e72be9 } from '../../services/keepaliveService';
import { v_8830f3, v_6f9bb6 } from '../../services/maintenanceSignal';

jest.mock('../../services/keepaliveService', () => ({
  fetchKeepaliveStatus: jest.fn(),
}));

const v_9cebb9 = v_e72be9 as jest.Mock;

const v_10b152 = 3_000;
const v_a8e3e1 = 15_000;

const v_4692eb = async (v_d799e2) => {
  await v_be73a0(async () => {
    jest.advanceTimersByTime(v_d799e2);
    await Promise.resolve();
    await Promise.resolve();
    await Promise.resolve();
  });
};

const v_d308b5 = (v_441eb2) => ({
  notice: null,
  maintenanceMode: v_441eb2,
  forceUpdate: false,
});

beforeEach(() => {
  jest.useFakeTimers();
  jest.clearAllMocks();
  v_6f9bb6();
});

afterEach(() => {
  jest.useRealTimers();
});

test('수용 1: maintenance_mode=true 를 받으면 점검 상태가 켜진다', async () => {
  v_9cebb9.mockResolvedValue(v_d308b5(true));

  const { result: v_43c42e } = v_0da18b(() => v_bfe92f(true));
  expect(v_43c42e.current.maintenanceMode).toBe(false);

  await v_4692eb(v_10b152);
  expect(v_43c42e.current.maintenanceMode).toBe(true);
});

test('수용 2: 켜진 뒤 maintenance_mode=false 가 오면 재시작 없이 꺼진다 (왕복)', async () => {
  v_9cebb9.mockResolvedValue(v_d308b5(true));

  const { result: v_43c42e } = v_0da18b(() => v_bfe92f(true));

  await v_4692eb(v_10b152);
  expect(v_43c42e.current.maintenanceMode).toBe(true);

  v_9cebb9.mockResolvedValue(v_d308b5(false));
  await v_4692eb(v_a8e3e1);

  expect(v_43c42e.current.maintenanceMode).toBe(false);
});

test('수용 3: keepalive 조회가 실패하면(null) 점검 화면을 켜지 않는다', async () => {
  v_9cebb9.mockResolvedValue(null); 

  const { result: v_43c42e } = v_0da18b(() => v_bfe92f(true));

  await v_4692eb(v_10b152);
  expect(v_43c42e.current.maintenanceMode).toBe(false);

  await v_4692eb(v_a8e3e1 * 3);
  expect(v_43c42e.current.maintenanceMode).toBe(false);
});

test('수용 3-1: 이미 켜진 상태에서 조회가 실패하면 상태를 뒤집지 않는다 (모름 = 유지)', async () => {
  v_9cebb9.mockResolvedValue(v_d308b5(true));
  const { result: v_43c42e } = v_0da18b(() => v_bfe92f(true));
  await v_4692eb(v_10b152);
  expect(v_43c42e.current.maintenanceMode).toBe(true);

  v_9cebb9.mockResolvedValue(null);
  await v_4692eb(v_a8e3e1);
  expect(v_43c42e.current.maintenanceMode).toBe(true);

  v_9cebb9.mockResolvedValue(v_d308b5(false));
  await v_4692eb(v_a8e3e1);
  expect(v_43c42e.current.maintenanceMode).toBe(false);
});

test('수용 5: 구버전 서버라 maintenance_mode 가 없으면 켜지지 않는다', async () => {
  v_9cebb9.mockResolvedValue(v_d308b5(undefined));

  const { result: v_43c42e } = v_0da18b(() => v_bfe92f(true));

  await v_4692eb(v_10b152);
  expect(v_43c42e.current.maintenanceMode).toBe(false);
});

test('수용 4: 503+9003 신호는 즉시 재조회만 시키고, 켜는 근거는 keepalive 응답이다', async () => {

  v_9cebb9.mockResolvedValue(null);
  const { result: v_43c42e } = v_0da18b(() => v_bfe92f(true));
  await v_4692eb(v_10b152);
  expect(v_9cebb9).toHaveBeenCalledTimes(1);

  await v_be73a0(async () => {
    v_8830f3(1_000_000);
    await Promise.resolve();
    await Promise.resolve();
  });
  expect(v_9cebb9).toHaveBeenCalledTimes(2); 
  expect(v_43c42e.current.maintenanceMode).toBe(false); 

  v_9cebb9.mockResolvedValue(v_d308b5(true));
  await v_be73a0(async () => {
    v_8830f3(1_100_000);
    await Promise.resolve();
    await Promise.resolve();
  });
  expect(v_43c42e.current.maintenanceMode).toBe(true);
});

test('9003 이 쏟아져도 쿨다운 안에서는 재조회가 한 번만 나간다', async () => {
  v_9cebb9.mockResolvedValue(null);
  v_0da18b(() => v_bfe92f(true));
  await v_4692eb(v_10b152);
  const v_2113ce = v_9cebb9.mock.calls.length;

  await v_be73a0(async () => {
    v_8830f3(2_000_000);
    v_8830f3(2_000_100);
    v_8830f3(2_000_200);
    await Promise.resolve();
    await Promise.resolve();
  });

  expect(v_9cebb9).toHaveBeenCalledTimes(v_2113ce + 1);
});

test('enabled=false 면 폴링하지 않고 점검 상태도 켜지지 않는다', async () => {
  v_9cebb9.mockResolvedValue(v_d308b5(true));

  const { result: v_43c42e } = v_0da18b(() => v_bfe92f(false));
  await v_4692eb(v_a8e3e1 * 2);

  expect(v_9cebb9).not.toHaveBeenCalled();
  expect(v_43c42e.current.maintenanceMode).toBe(false);
});

test('보강 1: 켜진 뒤 "조회 성공 + 필드 없음" 이 연속 3회면 꺼진다 (2회까지는 유지)', async () => {
  v_9cebb9.mockResolvedValue(v_d308b5(true));
  const { result: v_43c42e } = v_0da18b(() => v_bfe92f(true));
  await v_4692eb(v_10b152);
  expect(v_43c42e.current.maintenanceMode).toBe(true);

  v_9cebb9.mockResolvedValue(v_d308b5(undefined));

  await v_4692eb(v_a8e3e1);
  expect(v_43c42e.current.maintenanceMode).toBe(true); 
  await v_4692eb(v_a8e3e1);
  expect(v_43c42e.current.maintenanceMode).toBe(true); 
  await v_4692eb(v_a8e3e1);
  expect(v_43c42e.current.maintenanceMode).toBe(false); 
});

test('보강 1-1: 필드 없음 연속이 boolean 응답으로 끊기면 카운터가 리셋된다', async () => {
  v_9cebb9.mockResolvedValue(v_d308b5(true));
  const { result: v_43c42e } = v_0da18b(() => v_bfe92f(true));
  await v_4692eb(v_10b152);

  v_9cebb9.mockResolvedValue(v_d308b5(undefined));
  await v_4692eb(v_a8e3e1);
  await v_4692eb(v_a8e3e1); 

  v_9cebb9.mockResolvedValue(v_d308b5(true)); 
  await v_4692eb(v_a8e3e1);
  expect(v_43c42e.current.maintenanceMode).toBe(true);

  v_9cebb9.mockResolvedValue(v_d308b5(undefined));
  await v_4692eb(v_a8e3e1);
  await v_4692eb(v_a8e3e1); 
  expect(v_43c42e.current.maintenanceMode).toBe(true);
});

test('보강 1-2: 켜진 상태에서 조회 실패(null)가 20회 반복돼도 계속 유지된다 (모름 = 유지)', async () => {
  v_9cebb9.mockResolvedValue(v_d308b5(true));
  const { result: v_43c42e } = v_0da18b(() => v_bfe92f(true));
  await v_4692eb(v_10b152);
  expect(v_43c42e.current.maintenanceMode).toBe(true);

  v_9cebb9.mockResolvedValue(null);
  for (let v_ebec57 = 0; v_ebec57 < 20; v_ebec57 += 1) {
    await v_4692eb(v_a8e3e1);
    expect(v_43c42e.current.maintenanceMode).toBe(true);
  }
});

test('보강 3: 조회 중에 들어온 9003 신호는 버려지지 않고 끝난 뒤 한 번 보충 실행된다', async () => {
  let resolveFirst: (value: ReturnType<typeof v_d308b5> | null) => void = () => undefined;
  const v_63dc80 = new Promise<ReturnType<typeof v_d308b5> | null>((v_6f7712) => {
    v_5047a2 = v_6f7712;
  });
  v_9cebb9.mockReturnValueOnce(v_63dc80).mockResolvedValue(v_d308b5(true));

  const { result: v_43c42e } = v_0da18b(() => v_bfe92f(true));
  await v_4692eb(v_10b152);
  expect(v_9cebb9).toHaveBeenCalledTimes(1); 

  await v_be73a0(async () => {
    v_8830f3(3_000_000);
    await Promise.resolve();
  });
  expect(v_9cebb9).toHaveBeenCalledTimes(1); 

  await v_be73a0(async () => {
    v_5047a2(v_d308b5(false)); 
    await Promise.resolve();
    await Promise.resolve();
    await Promise.resolve();
  });

  expect(v_9cebb9).toHaveBeenCalledTimes(2); 
  expect(v_43c42e.current.maintenanceMode).toBe(true); 
});

test('보강 3-1: 조회 중에 신호가 여러 건 들어와도 보충은 1회뿐이다', async () => {
  let resolveFirst: (value: ReturnType<typeof v_d308b5> | null) => void = () => undefined;
  const v_63dc80 = new Promise<ReturnType<typeof v_d308b5> | null>((v_6f7712) => {
    v_5047a2 = v_6f7712;
  });
  v_9cebb9.mockReturnValueOnce(v_63dc80).mockResolvedValue(null);

  const { result: v_43c42e } = v_0da18b(() => v_bfe92f(true));
  await v_4692eb(v_10b152);

  await v_be73a0(async () => {

    for (let v_ebec57 = 0; v_ebec57 < 5; v_ebec57 += 1) v_8830f3(5_000_000 + v_ebec57 * 20_000);
    v_43c42e.current.recheck();
    v_43c42e.current.recheck();
    await Promise.resolve();
  });

  await v_be73a0(async () => {
    v_5047a2(null);
    await Promise.resolve();
    await Promise.resolve();
    await Promise.resolve();
  });

  expect(v_9cebb9).toHaveBeenCalledTimes(2); 
});

test('보강 3-2: 9003 이 1초에 200건 쏟아져도 재조회는 1회로 억제된다', async () => {
  v_9cebb9.mockResolvedValue(null);
  v_0da18b(() => v_bfe92f(true));
  await v_4692eb(v_10b152);
  const v_2113ce = v_9cebb9.mock.calls.length;

  await v_be73a0(async () => {
    for (let v_ebec57 = 0; v_ebec57 < 200; v_ebec57 += 1) v_8830f3(4_000_000 + v_ebec57 * 5); 
    await Promise.resolve();
    await Promise.resolve();
    await Promise.resolve();
  });

  expect(v_9cebb9).toHaveBeenCalledTimes(v_2113ce + 1);
});

describe('보강 3-2: 조회가 끝나는 틱 근처에 들어온 신호도 삼켜지지 않는다 (finally 레이스)', () => {

  for (let v_4f4226 = 0; v_4f4226 <= 6; v_4f4226 += 1) {
    test(`fetch resolve 후 ${v_4f4226} hop 지점에 도착한 신호`, async () => {
      let resolveFirst: (value: ReturnType<typeof v_d308b5> | null) => void = () => undefined;
      const v_63dc80 = new Promise<ReturnType<typeof v_d308b5> | null>((v_6f7712) => {
        v_5047a2 = v_6f7712;
      });
      v_9cebb9.mockReturnValueOnce(v_63dc80).mockResolvedValue(v_d308b5(true));

      v_0da18b(() => v_bfe92f(true));
      await v_4692eb(v_10b152);
      expect(v_9cebb9).toHaveBeenCalledTimes(1);

      await v_be73a0(async () => {
        v_5047a2(v_d308b5(false));
        for (let v_ebec57 = 0; v_ebec57 < v_4f4226; v_ebec57 += 1) await Promise.resolve();
        v_8830f3(7_000_000 + v_4f4226 * 1_000_000);
        for (let v_ebec57 = 0; v_ebec57 < 6; v_ebec57 += 1) await Promise.resolve();
      });

      expect(v_9cebb9).toHaveBeenCalledTimes(2);
    });
  }
});
