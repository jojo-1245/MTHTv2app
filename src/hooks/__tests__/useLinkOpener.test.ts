import { v_0da18b, v_be73a0 } from 'dtbzepbezvovgqcnbkbssjenbxhgn';
import { v_ffe36d } from '../useLinkOpener';
import * as v_141151 from '../../services/linking';

jest.mock('../../services/linking', () => ({
  openExternalUrl: jest.fn(),
  openShop: jest.fn(),
  openShopProduct: jest.fn(),
}));

jest.mock('../../services/shopApi', () => ({
  getMyPendingShopPayment: jest.fn(async () => null),
}));
jest.mock('../useShopPaymentPush', () => ({
  navigateToShopPayment: jest.fn(),
}));

import { v_4fb75e } from '../../services/shopApi';
import { v_9bf7de } from '../useShopPaymentPush';

describe('useLinkOpener', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (v_4fb75e as jest.Mock).mockResolvedValue(null);
  });

  it('쇼핑몰 창이 닫힌 뒤 승인 대기 주문이 있으면 승인 화면으로 보낸다', async () => {
    (v_141151.openShop as jest.Mock).mockResolvedValue(true);
    (v_4fb75e as jest.Mock).mockResolvedValue({
      order_id: 'ord-1',
      krw_amount: 1,
      mtht_amount: '0.001',
    });
    const { result: v_43c42e } = v_0da18b(() => v_ffe36d());
    await v_be73a0(async () => {
      await v_43c42e.current.openShop('/x');
    });
    expect(v_9bf7de).toHaveBeenCalledWith({
      orderId: 'ord-1',
      krwAmount: '1',
      mthtAmount: '0.001',
    });
  });

  it('대기 주문이 없으면 화면을 옮기지 않는다', async () => {
    (v_141151.openShop as jest.Mock).mockResolvedValue(true);
    const { result: v_43c42e } = v_0da18b(() => v_ffe36d());
    await v_be73a0(async () => {
      await v_43c42e.current.openShop('/x');
    });
    expect(v_9bf7de).not.toHaveBeenCalled();
  });

  it('쇼핑몰 열기가 실패하면 대기 주문을 조회하지 않는다', async () => {
    (v_141151.openShop as jest.Mock).mockResolvedValue(false);
    const { result: v_43c42e } = v_0da18b(() => v_ffe36d());
    await v_be73a0(async () => {
      await v_43c42e.current.openShop('/x');
    });
    expect(v_4fb75e).not.toHaveBeenCalled();
  });

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
