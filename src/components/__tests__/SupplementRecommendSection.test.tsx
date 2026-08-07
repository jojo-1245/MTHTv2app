import v_a3453e from 'bapkr';
import { v_624657, v_81e49f, v_77aa68 } from 'dtbzepbezvovgqcnbkbssjenbxhgn';
import v_6f3f7e from '../SupplementRecommendSection';
import * as v_05a921 from '../../services/supplementApi';

const v_784288 = jest.fn();
jest.mock('../../hooks/useLinkOpener', () => ({
  useLinkOpener: () => ({
    openShopCheckout: v_784288,
    openShopProduct: jest.fn(),
    loading: false,
    openShop: jest.fn(),
    openExternalUrl: jest.fn(),
  }),
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

  it('AI는 기본 포함·결제하기 시 openShopCheckout', async () => {
    (v_05a921.recommend as jest.Mock).mockResolvedValue({
      items: [
        {
          gunkiId: 20,
          productName: '카테킨&바나바',
          imageUrl: '/static/gunkis/20.jpg',
          reason: '도움을 줄 수 있음',
          shopItemId: '2026062420',
          label: 'ai',
          price: 30000,
        },
      ],
      safeMode: true,
    });
    const { getByText: v_2b0f8a } = v_624657(<SupplementRecommendSection source="checkup" recordId={5} />);
    await v_81e49f(() => v_2b0f8a('카테킨&바나바'));
    expect(v_2b0f8a('supplements.label_ai')).toBeTruthy();
    v_77aa68.press(v_2b0f8a(/supplements.checkout_cta/));
    expect(v_784288).toHaveBeenCalledWith(['2026062420'], { confirm: true, via: 'ai' });
  });

  it('선택 추가 탭 시 합계에 포함 후 체크아웃', async () => {
    (v_05a921.recommend as jest.Mock).mockResolvedValue({
      items: [
        {
          gunkiId: 20,
          productName: 'AI상품',
          imageUrl: null,
          reason: 'x',
          shopItemId: 'AI1',
          label: 'ai',
          price: 10000,
        },
        {
          gunkiId: 0,
          productName: '오메가3',
          imageUrl: null,
          reason: '기본',
          shopItemId: '2026062418',
          label: 'extra',
          price: 27000,
        },
      ],
      safeMode: true,
    });
    const { getByText: v_2b0f8a } = v_624657(<SupplementRecommendSection source="checkup" recordId={6} />);
    await v_81e49f(() => v_2b0f8a('오메가3'));
    v_77aa68.press(v_2b0f8a('오메가3'));
    v_77aa68.press(v_2b0f8a(/supplements.checkout_cta/));
    expect(v_784288).toHaveBeenCalledWith(['AI1', '2026062418'], {
      confirm: true,
      via: 'ai',
    });
  });

  it('AI 추천은 체크 고정 — 탭해도 해제되지 않는다', async () => {
    (v_05a921.recommend as jest.Mock).mockResolvedValue({
      items: [
        { gunkiId: 20, productName: 'AI상품', imageUrl: null, reason: 'x', shopItemId: 'AI1', label: 'ai', price: 10000 },
        { gunkiId: 0, productName: '오메가3', imageUrl: null, reason: '기본', shopItemId: '2026062418', label: 'extra', price: 27000 },
      ],
      safeMode: true,
    });
    const { getByText: v_2b0f8a, getAllByText: v_221148 } = v_624657(<SupplementRecommendSection source="checkup" recordId={7} />);
    await v_81e49f(() => v_2b0f8a('AI상품'));

    expect(v_221148('✓')).toHaveLength(1);

    v_77aa68.press(v_2b0f8a('AI상품'));
    expect(v_221148('✓')).toHaveLength(1);
    v_77aa68.press(v_2b0f8a(/supplements.checkout_cta/));
    expect(v_784288).toHaveBeenCalledWith(['AI1'], { confirm: true, via: 'ai' });
  });

  it('shopItemId 없는 AI 추천도 체크 표시는 유지된다', async () => {
    (v_05a921.recommend as jest.Mock).mockResolvedValue({
      items: [
        { gunkiId: 22, productName: '매핑없는AI', imageUrl: null, reason: 'x', shopItemId: null, label: 'ai' },
      ],
      safeMode: true,
    });
    const { getByText: v_2b0f8a, getAllByText: v_221148 } = v_624657(<SupplementRecommendSection source="health" recordId={8} />);
    await v_81e49f(() => v_2b0f8a('매핑없는AI'));
    expect(v_221148('✓')).toHaveLength(1);
  });

  it('요청 실패 시 null(조용히 숨김)', async () => {
    (v_05a921.recommend as jest.Mock).mockRejectedValue(new Error('x'));
    const { toJSON: v_21dbe2 } = v_624657(<SupplementRecommendSection source="health" recordId={2} />);
    await v_81e49f(() => expect(v_21dbe2()).toBeNull());
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
          label: 'ai',
        },
      ],
      safeMode: false,
    });
    const { toJSON: v_21dbe2, queryByText: v_480380 } = v_624657(<SupplementRecommendSection source="skin" recordId={4} />);
    await v_81e49f(() => expect(v_21dbe2()).toBeNull());
    expect(v_480380('숨겨질 상품')).toBeNull();
  });
});
