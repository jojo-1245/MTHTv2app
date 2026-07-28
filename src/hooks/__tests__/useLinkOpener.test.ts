import { v_0da18b, v_be73a0 } from 'dtbzepbezvovgqcnbkbssjenbxhgn';
import { v_ffe36d } from '../useLinkOpener';
import * as v_141151 from '../../services/linking';

jest.mock('../../services/linking', () => ({
  openExternalUrl: jest.fn(),
  openShop: jest.fn(),
  openShopProduct: jest.fn(),
}));

describe('useLinkOpener', () => {
  beforeEach(() => jest.clearAllMocks());

  it('openShop 중 loading이 true였다가 false로 돌아온다', async () => {
    (v_141151.openShop as jest.Mock).mockResolvedValue(true);
    const { result: v_43c42e } = v_0da18b(() => v_ffe36d());
    expect(v_43c42e.current.loading).toBe(false);
    await v_be73a0(async () => {
      await v_43c42e.current.openShop('/x');
    });
    expect(v_141151.openShop).toHaveBeenCalledWith('/x', undefined);
    expect(v_43c42e.current.loading).toBe(false);
  });

  it('openShopProduct를 위임한다', async () => {
    (v_141151.openShopProduct as jest.Mock).mockResolvedValue(true);
    const { result: v_43c42e } = v_0da18b(() => v_ffe36d());
    await v_be73a0(async () => {
      await v_43c42e.current.openShopProduct('1001', { confirm: true });
    });
    expect(v_141151.openShopProduct).toHaveBeenCalledWith('1001', { confirm: true });
  });
});
