import v_9c213b from '../../i18n';
import { v_b724a0, v_ae5f46, v_4e2e5d } from '../checkupErrorMessage';

describe('checkupErrorMessage', () => {

  beforeAll(async () => {
    if (!v_9c213b.isInitialized) {
      await new Promise<void>((v_6f7712) => v_9c213b.on('initialized', () => v_6f7712()));
    }
    await v_9c213b.changeLanguage('ko');
  });

  it('CF-09002는 연동 오류 안내', () => {
    expect(v_b724a0('CF-09002')).toContain('연동 오류');
  });
  it('TIMEOUT은 대기 초과 안내', () => {
    expect(v_b724a0('TIMEOUT')).toContain('초과');
  });
  it('CF-13000은 입력정보 불일치 안내', () => {
    expect(v_b724a0('CF-13000')).toContain('일치');
  });
  it('빈 결과 안내', () => {
    expect(v_ae5f46()).toContain('기록이 없습니다');
  });
  it('axios timeout 코드 추출', () => {
    expect(v_4e2e5d({ code: 'ECONNABORTED', message: 'timeout of 180000ms exceeded' })).toBe(
      'TIMEOUT',
    );
  });
  it('details.code 추출', () => {
    expect(
      v_4e2e5d({
        response: { data: { error: { details: { code: 'CF-09002' } } } },
      }),
    ).toBe('CF-09002');
  });
});
