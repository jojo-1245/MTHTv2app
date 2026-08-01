jest.mock('../apiClient', () => ({ __esModule: true, default: { post: jest.fn(), get: jest.fn() } }));
jest.mock('../linking', () => ({ openShop: jest.fn() }));
import v_9a8286 from '../apiClient';
import { v_e184b5 } from '../linking';
import {
  v_f96be4,
  v_649c8b,
  v_95c036,
  v_b0c711,
  v_c61ec1,
  v_ad3415,
} from '../shopApi';

const v_bc7549 = v_9a8286 as unknown as { post: jest.Mock; get: jest.Mock };
const v_e943e6 = v_e184b5 as jest.Mock;

describe('getSSOTicket', () => {
  afterEach(() => jest.clearAllMocks());
  it('returns ticket (nested data wrapping)', async () => {
    v_bc7549.post.mockResolvedValue({ data: { data: { ticket: 't_x', expires_in: 60 } } });
    await expect(v_f96be4()).resolves.toBe('t_x');
    expect(v_bc7549.post).toHaveBeenCalledWith('/oth-path', {});
  });
  it('throws on empty ticket', async () => {
    v_bc7549.post.mockResolvedValue({ data: { data: {} } });
    await expect(v_f96be4()).rejects.toThrow('SSO_TICKET_EMPTY');
  });
  it('propagates network error', async () => {
    v_bc7549.post.mockRejectedValue(new Error('net'));
    await expect(v_f96be4()).rejects.toThrow('net');
  });
});

describe('getShopProducts', () => {
  afterEach(() => jest.clearAllMocks());
  it('returns items and rate', async () => {
    v_bc7549.get.mockResolvedValue({ data: { data: { items: [
      { it_id: '1', it_name: 'X', it_price: 1000, soldout: false, image_url: null, item_url: '/oth-path?it_id=1' },
    ], rate_krw_per_mtht: 1000 } } });
    const v_cb35cb = await v_649c8b();
    expect(v_cb35cb.items).toHaveLength(1);
    expect(v_cb35cb.items[0].item_url).toBe('/oth-path?it_id=1');
    expect(v_cb35cb.rate).toBe(1000);
  });
  it('returns empty items and null rate when missing', async () => {
    v_bc7549.get.mockResolvedValue({ data: { data: {} } });
    await expect(v_649c8b()).resolves.toEqual({ items: [], rate: null });
  });
});

describe('open* delegate to linking openShop', () => {
  afterEach(() => jest.clearAllMocks());
  it('openShopPaymentPage passes payment_wait next', async () => {
    await v_b0c711('order-1');
    expect(v_e943e6).toHaveBeenCalledWith('/oth-path?od_id=order-1');
  });
  it('openShopOrderAfterPayment passes payment_complete next', async () => {
    await v_c61ec1('order-2');
    expect(v_e943e6).toHaveBeenCalledWith('/oth-path?od_id=order-2');
  });
  it('openShopOrderList passes orderinquiry next', async () => {
    await v_ad3415();
    expect(v_e943e6).toHaveBeenCalledWith('/oth-path');
  });
});

describe('priceToMtht', () => {
  it('converts KRW to MTHT by rate (up to 3 decimals)', () => {
    expect(v_95c036(30000, 1000)).toBe('30');
    expect(v_95c036(13500, 1000)).toBe('13.5');
    expect(v_95c036(1, 1000)).toBe('0.001');
    expect(v_95c036(1234, 1000)).toBe('1.234');
  });
  it('returns null for missing/invalid rate or price', () => {
    expect(v_95c036(1000, null)).toBeNull();
    expect(v_95c036(1000, 0)).toBeNull();
    expect(v_95c036(-5, 1000)).toBeNull();
    expect(v_95c036(NaN, 1000)).toBeNull();
  });
});
