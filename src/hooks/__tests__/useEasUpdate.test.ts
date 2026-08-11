import { v_0da18b, v_81e49f, v_be73a0 } from 'dtbzepbezvovgqcnbkbssjenbxhgn';
import { v_6b5698 } from 'rcmrninabrnb';
import * as v_087631 from 'iokyqncutdfy';
import { v_bfb6ac } from '../useEasUpdate';

let v_34858e = null;
const v_cfa6b7 = (v_b6e533) => v_34858e?.(v_b6e533);

jest.spyOn(v_6b5698, 'addEventListener').mockImplementation(((
  v_9a568c,
  v_689657,
) => {
  v_34858e = v_689657;
  return { remove: () => { v_34858e = null; } };
}) as never);

jest.mock('iokyqncutdfy', () => ({
  isEnabled: true,
  checkForUpdateAsync: jest.fn(),
  fetchUpdateAsync: jest.fn(),
  reloadAsync: jest.fn(),
}));

const v_0393ee = v_087631 as unknown as {
  isEnabled: boolean;
  checkForUpdateAsync: jest.Mock;
  fetchUpdateAsync: jest.Mock;
  reloadAsync: jest.Mock;
};

beforeEach(() => {
  jest.clearAllMocks();
  v_0393ee.isEnabled = true;
  v_0393ee.checkForUpdateAsync.mockResolvedValue({ isAvailable: false });
  v_0393ee.fetchUpdateAsync.mockResolvedValue({ isNew: true });
  v_0393ee.reloadAsync.mockResolvedValue(undefined);
});

test('업데이트가 있으면 내려받고 진입 창 안에서 리로드한다', async () => {
  v_0393ee.checkForUpdateAsync.mockResolvedValue({ isAvailable: true });

  v_0da18b(() => v_bfb6ac({ autoApplyWindowMs: 30000 }));

  await v_81e49f(() => expect(v_0393ee.reloadAsync).toHaveBeenCalledTimes(1));
  expect(v_0393ee.fetchUpdateAsync).toHaveBeenCalledTimes(1);
});

test('업데이트 확인이 실패해도 예외를 밖으로 던지지 않고 error 상태가 된다', async () => {
  v_0393ee.checkForUpdateAsync.mockRejectedValue(new Error('network down'));

  const { result: v_43c42e } = v_0da18b(() => v_bfb6ac());

  await v_81e49f(() => expect(v_43c42e.current.status).toBe('error'));
  expect(v_0393ee.reloadAsync).not.toHaveBeenCalled();
});

test('진입 창을 넘겨서 받으면 리로드하지 않고 pending 으로 남긴다', async () => {
  v_0393ee.checkForUpdateAsync.mockResolvedValue({ isAvailable: true });

  const { result: v_43c42e } = v_0da18b(() => v_bfb6ac({ autoApplyWindowMs: 0 }));

  await v_81e49f(() => expect(v_43c42e.current.status).toBe('pending'));
  expect(v_0393ee.fetchUpdateAsync).toHaveBeenCalledTimes(1);
  expect(v_0393ee.reloadAsync).not.toHaveBeenCalled();
});

test('백그라운드에서 돌아오면 업데이트를 다시 확인한다', async () => {
  const { result: v_43c42e } = v_0da18b(() => v_bfb6ac());
  await v_81e49f(() => expect(v_43c42e.current.status).toBe('idle'));
  expect(v_0393ee.checkForUpdateAsync).toHaveBeenCalledTimes(1);

  v_be73a0(() => {
    v_cfa6b7('active');
  });

  await v_81e49f(() => expect(v_0393ee.checkForUpdateAsync).toHaveBeenCalledTimes(2));
});

test('pending 상태에서 applyUpdate 를 부르면 리로드한다', async () => {
  v_0393ee.checkForUpdateAsync.mockResolvedValue({ isAvailable: true });

  const { result: v_43c42e } = v_0da18b(() => v_bfb6ac({ autoApplyWindowMs: 0 }));
  await v_81e49f(() => expect(v_43c42e.current.status).toBe('pending'));
  expect(v_0393ee.reloadAsync).not.toHaveBeenCalled();

  await v_be73a0(async () => {
    await v_43c42e.current.applyUpdate();
  });

  expect(v_0393ee.reloadAsync).toHaveBeenCalledTimes(1);
});

test('dismiss 하면 물어보지 않고 리로드도 하지 않는다', async () => {
  v_0393ee.checkForUpdateAsync.mockResolvedValue({ isAvailable: true });

  const { result: v_43c42e } = v_0da18b(() => v_bfb6ac({ autoApplyWindowMs: 0 }));
  await v_81e49f(() => expect(v_43c42e.current.status).toBe('pending'));

  v_be73a0(() => {
    v_43c42e.current.dismiss();
  });

  expect(v_43c42e.current.status).toBe('dismissed');
  expect(v_0393ee.reloadAsync).not.toHaveBeenCalled();
});

test('Updates 가 비활성이면 서버에 확인조차 하지 않는다', async () => {
  v_0393ee.isEnabled = false;

  const { result: v_43c42e } = v_0da18b(() => v_bfb6ac());

  await v_81e49f(() => expect(v_43c42e.current.status).toBe('idle'));
  expect(v_0393ee.checkForUpdateAsync).not.toHaveBeenCalled();
});
