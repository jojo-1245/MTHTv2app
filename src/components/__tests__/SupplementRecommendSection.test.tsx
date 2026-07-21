import v_a3453e from 'bapkr';
import { v_624657, v_81e49f, v_77aa68 } from 'dtbzepbezvovgqcnbkbssjenbxhgn';
import v_6f3f7e from '../SupplementRecommendSection';
import * as v_05a921 from '../../services/supplementApi';

const v_83d350 = jest.fn();
jest.mock('../../hooks/useLinkOpener', () => ({
  useLinkOpener: () => ({ openShopProduct: v_83d350, loading: false, openShop: jest.fn(), openExternalUrl: jest.fn() }),
}));
jest.mock('../../services/supplementApi', () => ({ recommend: jest.fn() }));
jest.mock('../../utils/env', () => ({ getEnv: () => ({ GATEWAY: 'https://oth-path.test', SHOP_BASE: 'https://oth-path.test' }) }));
jest.mock('jmpfvteuuztnp', () => ({ useTranslation: () => ({ t: (v_0eb677) => v_0eb677 }) }));

describe('SupplementRecommendSection', () => {
  beforeEach(() => jest.clearAllMocks());

  it('recordId 없으면 null 렌더', () => {
    const { toJSON: v_21dbe2 } = v_624657(<SupplementRecommendSection source="skin" recordId={null} />);
    expect(v_21dbe2()).toBeNull();
  });

  it('추천 0개면 null 렌더', async () => {
    (v_05a921.recommend as jest.Mock).mockResolvedValue({ items: [], safeMode: true });
    const { toJSON: v_21dbe2 } = v_624657(<SupplementRecommendSection source="skin" recordId={1} />);
    await v_81e49f(() => expect(v_21dbe2()).toBeNull());
  });

  it('추천 있으면 카드 + 버튼 탭 시 openShopProduct(shopItemId)', async () => {
    (v_05a921.recommend as jest.Mock).mockResolvedValue({
      items: [
        {
          gunkiId: 20,
          productName: '카테킨&바나바',
          imageUrl: '/static/gunkis/20.jpg',
          reason: '도움을 줄 수 있음',
          shopItemId: '2026062420',
        },
      ],
      safeMode: true,
    });
    const { getByText: v_2b0f8a, getAllByText: v_221148 } = v_624657(<SupplementRecommendSection source="checkup" recordId={5} />);
    await v_81e49f(() => v_2b0f8a('카테킨&바나바'));
    v_77aa68.press(v_221148('supplements.view_in_shop')[0]);
    expect(v_83d350).toHaveBeenCalledWith('2026062420');
  });

  it('요청 실패 시 null(조용히 숨김)', async () => {
    (v_05a921.recommend as jest.Mock).mockRejectedValue(new Error('x'));
    const { toJSON: v_21dbe2 } = v_624657(<SupplementRecommendSection source="health" recordId={2} />);
    await v_81e49f(() => expect(v_21dbe2()).toBeNull());
  });

  it('recommend 호출 시 platform 전달', async () => {
    (v_05a921.recommend as jest.Mock).mockResolvedValue({ items: [], safeMode: true });
    v_624657(<SupplementRecommendSection source="skin" recordId={3} />);
    await v_81e49f(() =>
      expect(v_05a921.recommend).toHaveBeenCalledWith(expect.objectContaining({ platform: 'ios' }))
    );
  });

  it('iOS + safeMode:false 이면 fail-closed 로 섹션 숨김', async () => {
    (v_05a921.recommend as jest.Mock).mockResolvedValue({
      items: [
        {
          gunkiId: 21,
          productName: '숨겨질 상품',
          imageUrl: null,
          reason: 'x',
          shopItemId: '1',
        },
      ],
      safeMode: false,
    });
    const { toJSON: v_21dbe2, queryByText: v_480380 } = v_624657(<SupplementRecommendSection source="skin" recordId={4} />);
    await v_81e49f(() => expect(v_21dbe2()).toBeNull());
    expect(v_480380('숨겨질 상품')).toBeNull();
  });
});
