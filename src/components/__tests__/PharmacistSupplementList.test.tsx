import v_a3453e from 'bapkr';
import { v_624657, v_81e49f } from 'dtbzepbezvovgqcnbkbssjenbxhgn';
import v_a5a634, { v_0b3fa9 } from '../PharmacistSupplementList';
import * as v_f7571c from '../../services/pharmacyApi';

jest.mock('../../services/pharmacyApi', () => ({ getPharmacyVisitReco: jest.fn() }));
jest.mock('../../utils/env', () => ({ getEnv: () => ({ GATEWAY: 'https://oth-path.test' }) }));
jest.mock('jmpfvteuuztnp', () => ({ useTranslation: () => ({ t: (v_0eb677) => v_0eb677 }) }));

describe('PharmacistSupplementList', () => {
  beforeEach(() => jest.clearAllMocks());

  it('visitRecordId 없으면 로딩만 보여 준다', () => {
    const { getByText: v_2b0f8a, queryByText: v_480380 } = v_624657(
      <PharmacistSupplementList source="health" visitRecordId={null} />,
    );
    expect(v_2b0f8a('supplements.list_loading')).toBeTruthy();
    expect(v_480380('카테킨')).toBeNull();
    expect(v_f7571c.getPharmacyVisitReco).not.toHaveBeenCalled();
  });

  it('회차 스냅샷 결과를 목록으로 그린다', async () => {
    (v_f7571c.getPharmacyVisitReco as jest.Mock).mockResolvedValue({
      visitRecordId: 437,
      safeMode: true,
      items: [
        {
          gunkiId: 20,
          productName: '카테킨',
          imageUrl: null,
          reason: '혈압',
          shopItemId: 'SW1',
          label: 'ai',
          currentPrice: 12000,
        },
      ],
    });
    const { getByText: v_2b0f8a } = v_624657(
      <PharmacistSupplementList source="health" visitRecordId={437} />,
    );
    await v_81e49f(() => expect(v_2b0f8a('카테킨')).toBeTruthy());
    expect(v_f7571c.getPharmacyVisitReco).toHaveBeenCalledWith(437);
  });
});

describe('skinOutputToAnalysis', () => {
  it('ui_score 가 있는 항목만 남긴다', () => {
    expect(v_0b3fa9({
      result: {
        results: {
          output: [
            { type: 'moisture', ui_score: 40 },
            { type: 'all', ui_score: 80 },
            { type: 'skin_age', score: 30 },
          ],
        },
      },
    })).toEqual({ moisture: { ui_score: 40 } });
  });
});
