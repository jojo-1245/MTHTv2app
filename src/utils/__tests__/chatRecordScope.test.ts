import { v_edced5, v_011245, v_fd771c } from '../chatRecordScope';

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

describe('loadRecordsForScope', () => {
  const v_1ff424 = (v_c9d09f = [], v_6d2603 = []) => ({
    getHealthRecords: jest.fn(async () => v_c9d09f),
    getSkinRecords: jest.fn(async () => v_6d2603),
  });

  it('본인 계정은 sub_account_id 없이 두 API를 호출한다', async () => {

    const v_84b93d = v_1ff424([{ id: 1 }], [{ id: 2 }]);
    const v_43c42e = await v_edced5({ kind: 'mine' }, v_84b93d);

    expect(v_84b93d.getHealthRecords).toHaveBeenCalledWith(undefined);
    expect(v_84b93d.getSkinRecords).toHaveBeenCalledWith(undefined);
    expect(v_43c42e).toEqual({ healthRecords: [{ id: 1 }], skinRecords: [{ id: 2 }] });
  });

  it('부계정은 접두사를 벗긴 id를 인자로 넘긴다', async () => {
    const v_84b93d = v_1ff424();
    await v_edced5({ kind: 'sub', subAccountId: '7' }, v_84b93d);

    expect(v_84b93d.getHealthRecords).toHaveBeenCalledWith('7');
    expect(v_84b93d.getSkinRecords).toHaveBeenCalledWith('7');
  });

  it('약사 방문자는 조회하지 않는다 — 약사 본인 기록이 상담 컨텍스트로 새지 않도록', async () => {
    const v_84b93d = v_1ff424([{ id: 1 }], [{ id: 2 }]);
    const v_43c42e = await v_edced5({ kind: 'pharmacyVisitor', visitorId: 5 }, v_84b93d);

    expect(v_84b93d.getHealthRecords).not.toHaveBeenCalled();
    expect(v_84b93d.getSkinRecords).not.toHaveBeenCalled();
    expect(v_43c42e).toEqual({ healthRecords: [], skinRecords: [] });
  });

  it('판별 불가한 계정도 조회하지 않는다', async () => {
    const v_84b93d = v_1ff424([{ id: 1 }]);
    const v_43c42e = await v_edced5({ kind: 'unknown' }, v_84b93d);

    expect(v_84b93d.getHealthRecords).not.toHaveBeenCalled();
    expect(v_43c42e.healthRecords).toEqual([]);
  });

  it('한쪽 조회가 실패해도 다른 쪽 결과는 살린다', async () => {
    const v_84b93d = {
      getHealthRecords: jest.fn(async () => { throw new Error('401'); }),
      getSkinRecords: jest.fn(async () => [{ id: 2 }]),
    };
    const v_43c42e = await v_edced5({ kind: 'mine' }, v_84b93d);

    expect(v_43c42e).toEqual({ healthRecords: [], skinRecords: [{ id: 2 }] });
  });
});
