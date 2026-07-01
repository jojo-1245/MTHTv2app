jest.mock('../apiClient', () => ({ __esModule: true, default: { post: jest.fn(), get: jest.fn() } }));
import v_9a8286 from '../apiClient';
import { v_f96be4, v_649c8b } from '../shopApi';

const v_bc7549 = v_9a8286 as unknown as { post: jest.Mock; get: jest.Mock };

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
  it('returns items', async () => {
    v_bc7549.get.mockResolvedValue({ data: { data: { items: [
      { it_id: '1', it_name: 'X', it_price: 1000, soldout: false, image_url: null, item_url: '/oth-path?it_id=1' },
    ] } } });
    const v_cb35cb = await v_649c8b();
    expect(v_cb35cb).toHaveLength(1);
    expect(v_cb35cb[0].item_url).toBe('/oth-path?it_id=1');
  });
  it('returns [] when items missing', async () => {
    v_bc7549.get.mockResolvedValue({ data: { data: {} } });
    await expect(v_649c8b()).resolves.toEqual([]);
  });
});
