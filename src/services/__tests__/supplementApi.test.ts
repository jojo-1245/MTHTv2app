import { v_ec0289 } from '../supplementApi';
import v_9a8286 from '../apiClient';

jest.mock('../apiClient', () => ({ __esModule: true, default: { post: jest.fn() } }));

describe('supplementApi.recommend', () => {
  beforeEach(() => jest.clearAllMocks());

  it('POST /oth-path 하고 data를 언랩한다', async () => {
    (v_9a8286.post as jest.Mock).mockResolvedValue({
      data: {
        success: true,
        data: {
          items: [
            {
              gunkiId: 20,
              productName: '카테킨&바나바',
              imageUrl: '/static/gunkis/20.jpg',
              reason: '…',
              shopItemId: '2026062420',
            },
          ],
          safeMode: true,
        },
      },
    });
    const v_8d4337 = await v_ec0289({ source: 'checkup', recordId: 5, platform: 'ios' });
    expect(v_9a8286.post).toHaveBeenCalledWith('/oth-path', {
      source: 'checkup',
      recordId: 5,
      platform: 'ios',
    });
    expect(v_8d4337.items[0].shopItemId).toBe('2026062420');
    expect(v_8d4337.safeMode).toBe(true);
  });

  it('data 래퍼 없이 바로 올 때도 언랩', async () => {
    (v_9a8286.post as jest.Mock).mockResolvedValue({ data: { items: [], safeMode: false } });
    const v_8d4337 = await v_ec0289({ source: 'skin', recordId: 1, platform: 'android' });
    expect(v_8d4337.items).toEqual([]);
  });
});
