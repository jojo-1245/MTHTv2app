import { v_9f896c } from '../shopProductKind';

describe('isWellnessProduct', () => {
  it('ca_id 20 은 건기식', () => {
    expect(v_9f896c({ it_id: 'x', ca_id: '20' })).toBe(true);
    expect(v_9f896c({ it_id: 'x', ca_id: '201' })).toBe(true);
  });

  it('화장품 ca_id 10 은 제외', () => {
    expect(v_9f896c({ it_id: '2026060610', ca_id: '10' })).toBe(false);
  });

  it('it_id 규칙: 20260624xx 건기식, 20260606xx 화장품', () => {
    expect(v_9f896c({ it_id: '2026062422' })).toBe(true);
    expect(v_9f896c({ it_id: '2026060611' })).toBe(false);
    expect(v_9f896c({ it_id: '1774406956' })).toBe(false);
  });
});
