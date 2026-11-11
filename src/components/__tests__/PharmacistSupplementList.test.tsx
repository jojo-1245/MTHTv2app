import v_a3453e from 'bapkr';
import { v_624657, v_81e49f } from 'dtbzepbezvovgqcnbkbssjenbxhgn';
import v_a5a634, { v_0b3fa9 } from '../PharmacistSupplementList';
import * as v_05a921 from '../../services/supplementApi';

jest.mock('../../services/supplementApi', () => ({ recommendPreview: jest.fn() }));
jest.mock('../../utils/env', () => ({ getEnv: () => ({ GATEWAY: 'https://oth-path.test' }) }));
jest.mock('jmpfvteuuztnp', () => ({ useTranslation: () => ({ t: (v_0eb677) => v_0eb677 }) }));

describe('PharmacistSupplementList', () => {
  beforeEach(() => jest.clearAllMocks());

  it('측정값이 없으면 그리지 않는다', () => {
    const { toJSON: v_21dbe2 } = v_624657(<PharmacistSupplementList source="health" vitalSigns={null} />);
    expect(v_21dbe2()).toBeNull();
    expect(v_05a921.recommendPreview).not.toHaveBeenCalled();
  });

  it('미리보기 결과를 목록으로 그린다', async () => {
    (v_05a921.recommendPreview as jest.Mock).mockResolvedValue({
      safeMode: true,
      items: [
        {
          gunkiId: 20,
          productName: '카테킨',
          imageUrl: null,
          reason: '혈압',
          shopItemId: 'SW1',
          label: 'ai',
          price: 12000,
        },
      ],
    });
    const { getByText: v_2b0f8a, queryByText: v_480380 } = v_624657(
      <PharmacistSupplementList
        source="health"
        vitalSigns={{ high_blood_pressure_risk: { value: 1, status: '위험' } }}
        sex="female"
      />,
    );
    await v_81e49f(() => expect(v_2b0f8a('카테킨')).toBeTruthy());
    expect(v_480380('supplements.checkout_cta')).toBeNull();
    expect(v_05a921.recommendPreview).toHaveBeenCalledWith(expect.objectContaining({
      source: 'health',
      sex: 'female',
    }));
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
