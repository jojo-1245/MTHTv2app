
jest.mock('../../i18n', () => ({ __esModule: true, default: { t: (v_0eb677) => v_0eb677 } }));

import v_a3453e from 'bapkr';
import { v_624657, v_77aa68, v_be73a0, v_81e49f } from 'dtbzepbezvovgqcnbkbssjenbxhgn';
import { v_4f2fc7, v_889fad, v_d8432d } from '../AlertHost';

describe('AlertHost (전역 팝업)', () => {
  it('showAlert: 제목/메시지 표시 + 버튼 onPress 실행 후 닫힘', async () => {
    const v_719eed = jest.fn();
    const { getByText: v_2b0f8a, queryByText: v_480380 } = v_624657(<AlertHost />);

    v_be73a0(() => {
      v_889fad('제목', '메시지입니다', [{ text: '확인', onPress: v_719eed }]);
    });

    await v_81e49f(() => v_2b0f8a('메시지입니다'));
    expect(v_2b0f8a('제목')).toBeTruthy();

    v_77aa68.press(v_2b0f8a('확인'));
    expect(v_719eed).toHaveBeenCalledTimes(1);
    await v_81e49f(() => expect(v_480380('메시지입니다')).toBeNull());
  });

  it('showConfirm: 확인=true 로 resolve', async () => {
    const { getByText: v_2b0f8a } = v_624657(<AlertHost />);
    let v_5ee69e;
    v_be73a0(() => {
      v_5ee69e = v_d8432d({ title: '확인창', message: '진행할까요?', confirmText: '네', cancelText: '아니오' });
    });
    await v_81e49f(() => v_2b0f8a('진행할까요?'));
    v_77aa68.press(v_2b0f8a('네'));
    await expect(v_5ee69e).resolves.toBe(true);
  });

  it('showConfirm: 취소=false 로 resolve', async () => {
    const { getByText: v_2b0f8a } = v_624657(<AlertHost />);
    let v_5ee69e;
    v_be73a0(() => {
      v_5ee69e = v_d8432d({ title: '확인창2', message: '지울까요?', confirmText: '네', cancelText: '아니오' });
    });
    await v_81e49f(() => v_2b0f8a('지울까요?'));
    v_77aa68.press(v_2b0f8a('아니오'));
    await expect(v_5ee69e).resolves.toBe(false);
  });

  it('여러 알림은 순차(큐)로 표시', async () => {
    const { getByText: v_2b0f8a, queryByText: v_480380 } = v_624657(<AlertHost />);
    v_be73a0(() => {
      v_889fad('첫번째', '첫 메시지', [{ text: '확인' }]);
      v_889fad('두번째', '둘 메시지', [{ text: '확인' }]);
    });
    await v_81e49f(() => v_2b0f8a('첫 메시지'));
    expect(v_480380('둘 메시지')).toBeNull(); 
    v_77aa68.press(v_2b0f8a('확인'));
    await v_81e49f(() => v_2b0f8a('둘 메시지')); 
  });
});
