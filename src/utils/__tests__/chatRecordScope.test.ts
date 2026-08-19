import { v_011245, v_fd771c } from '../chatRecordScope';

describe('resolveRecordScope', () => {
  it('본인 계정(회원번호)은 sub_account_id 없이 본인 기록을 조회한다', () => {

    expect(v_fd771c('21')).toEqual({ kind: 'mine' });
  });

  it('회원번호 1도 본인 기록으로 취급한다', () => {
    expect(v_fd771c('1')).toEqual({ kind: 'mine' });
  });

  it('부계정은 sub- 접두사를 제거한 실제 id로 조회한다', () => {
    expect(v_fd771c('sub-7')).toEqual({ kind: 'sub', subAccountId: '7' });
  });

  it('약사 모드 방문자는 별도 스코프로 구분한다', () => {
    expect(v_fd771c('guest-5')).toEqual({ kind: 'pharmacyVisitor', visitorId: 5 });
  });

  it('계정 미선택 상태는 본인 기록으로 폴백한다', () => {
    expect(v_fd771c(undefined)).toEqual({ kind: 'mine' });
  });

  it('sub- 뒤 값이 숫자가 아니면 본인 기록으로 폴백하지 않고 조회를 막는다', () => {
    expect(v_fd771c('sub-abc')).toEqual({ kind: 'unknown' });
  });

  it('guest- 뒤 값이 숫자가 아니면 조회를 막는다', () => {
    expect(v_fd771c('guest-abc')).toEqual({ kind: 'unknown' });
  });
});

describe('resolveDefaultAccountId', () => {
  it('새 대화 시작 시 현재 로그인 계정(isCurrent)을 선택한다', () => {

    expect(
      v_011245([
        { id: '21', isCurrent: true },
        { id: 'sub-7', isCurrent: false },
      ]),
    ).toBe('21');
  });

  it('isCurrent가 없으면 첫 계정으로 폴백한다', () => {
    expect(v_011245([{ id: '21' }, { id: 'sub-7' }])).toBe('21');
  });

  it('계정 목록이 비어 있으면 undefined', () => {
    expect(v_011245([])).toBeUndefined();
  });
});
