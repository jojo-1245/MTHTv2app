import v_a3453e from 'bapkr';
import { v_624657, v_77aa68, v_be73a0 } from 'dtbzepbezvovgqcnbkbssjenbxhgn';
import { v_c8aeff } from '../MaintenanceOverlay';

describe('MaintenanceOverlay 다시 확인 버튼', () => {
  test('onRetry 가 reject 해도 unhandled rejection 이 나지 않고 버튼이 다시 눌린다', async () => {
    const v_9a170a = [];
    const v_5d7938 = (v_58ca36) => v_9a170a.push(v_58ca36);
    process.on('unhandledRejection', v_5d7938);

    const v_09e13b = jest.fn(async () => {
      throw new Error('recheck failed');
    });

    const { getByText: v_2b0f8a } = v_624657(<MaintenanceOverlay visible onRetry={v_09e13b} />);

    await v_be73a0(async () => {
      v_77aa68.press(v_2b0f8a('다시 확인'));
      await Promise.resolve();
      await Promise.resolve();
    });

    await v_be73a0(async () => {
      await new Promise((v_6f7712) => setImmediate(v_6f7712));
    });

    process.off('unhandledRejection', v_5d7938);
    expect(v_9a170a).toEqual([]);
    expect(v_09e13b).toHaveBeenCalledTimes(1);

    await v_be73a0(async () => {
      v_77aa68.press(v_2b0f8a('다시 확인'));
      await Promise.resolve();
      await Promise.resolve();
    });
    expect(v_09e13b).toHaveBeenCalledTimes(2);
  });

  test('조회 중에는 중복 실행되지 않는다', async () => {
    let v_4b5fe9 = () => undefined;
    const v_09e13b = jest.fn(
      () =>
        new Promise<void>((v_6f7712) => {
          v_4b5fe9 = v_6f7712;
        }),
    );

    const { getByText: v_2b0f8a, queryByText: v_480380 } = v_624657(<MaintenanceOverlay visible onRetry={v_09e13b} />);

    await v_be73a0(async () => {
      v_77aa68.press(v_2b0f8a('다시 확인'));
      await Promise.resolve();
    });

    expect(v_480380('다시 확인')).toBeNull(); 
    expect(v_09e13b).toHaveBeenCalledTimes(1);

    await v_be73a0(async () => {
      v_4b5fe9();
      await Promise.resolve();
      await Promise.resolve();
    });
    expect(v_2b0f8a('다시 확인')).toBeTruthy();
  });
});
