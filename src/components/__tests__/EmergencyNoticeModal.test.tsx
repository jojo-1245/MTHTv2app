import v_a3453e from 'bapkr';
import { v_624657, v_77aa68 } from 'dtbzepbezvovgqcnbkbssjenbxhgn';
import { v_fba277 } from '../EmergencyNoticeModal';

describe('EmergencyNoticeModal 닫기 불가', () => {
  test('일반 공지는 확인 버튼으로 닫는다', () => {
    const v_1b97a8 = jest.fn();
    const { getByText: v_2b0f8a } = v_624657(
      <EmergencyNoticeModal notice={{ title: '공지', content: '내용' }} onDismiss={v_1b97a8} />,
    );

    v_77aa68.press(v_2b0f8a('확인'));
    expect(v_1b97a8).toHaveBeenCalledTimes(1);
  });

  test('blocking 공지는 확인 버튼이 없다', () => {
    const { queryByText: v_480380, getByText: v_2b0f8a } = v_624657(
      <EmergencyNoticeModal
        notice={{ title: '긴급', content: '내용', blocking: true }}
        onDismiss={jest.fn()}
      />,
    );

    expect(v_2b0f8a('긴급')).toBeTruthy();
    expect(v_480380('확인')).toBeNull();
  });

  test('blocking 공지도 URL 이 있으면 자세히 보기는 남는다', () => {
    const { getByText: v_2b0f8a } = v_624657(
      <EmergencyNoticeModal
        notice={{ title: '긴급', content: '내용', url: 'https://service-mh.example.invalid', blocking: true }}
        onDismiss={jest.fn()}
      />,
    );

    expect(v_2b0f8a('자세히 보기')).toBeTruthy();
  });

  test('서버가 공지를 내리면(notice=null) 모달이 사라진다', () => {
    const { rerender: v_2726cb, queryByText: v_480380 } = v_624657(
      <EmergencyNoticeModal
        notice={{ title: '긴급', content: '내용', blocking: true }}
        onDismiss={jest.fn()}
      />,
    );

    v_2726cb(<EmergencyNoticeModal notice={null} onDismiss={jest.fn()} />);
    expect(v_480380('긴급')).toBeNull();
  });
});
