import * as v_2c8bdd from 'refjsvmnhpbvuhzr';
import { v_03e392 } from 'rcmrninabrnb';
import { v_bb4efc, v_e184b5, v_99cd96, v_4793d0 } from '../index';
import { v_f96be4 } from '../../shopApi';

jest.mock('rcmrninabrnb', () => ({ Linking: { canOpenURL: jest.fn(), openURL: jest.fn() }, Alert: { alert: jest.fn() } }));
jest.mock('refjsvmnhpbvuhzr', () => ({ openBrowserAsync: jest.fn() }));
jest.mock('../../shopApi', () => ({ getSSOTicket: jest.fn() }));
jest.mock('../../../i18n', () => ({ t: (v_0eb677) => v_0eb677 }));
jest.mock('../../../utils/env', () => ({ getEnv: () => ({ SHOP_BASE: 'https://oth-path-4f6cfb.example.invalid' }) }));

describe('openInAppBrowser', () => {
  beforeEach(() => jest.clearAllMocks());
  it('BROWSER_OPTS를 기본 적용한다', async () => {
    (v_2c8bdd.openBrowserAsync as jest.Mock).mockResolvedValue({ type: 'opened' });
    const v_3ed4c3 = await v_bb4efc('https://oth-path-4f6cfb.example.invalid/x');
    expect(v_2c8bdd.openBrowserAsync).toHaveBeenCalledWith('https://oth-path-4f6cfb.example.invalid/x', v_4793d0);
    expect(v_3ed4c3).toBe(true);
  });
  it('실패 시 Alert + false', async () => {
    (v_2c8bdd.openBrowserAsync as jest.Mock).mockRejectedValue(new Error('x'));
    expect(await v_bb4efc('https://x')).toBe(false);
    expect(v_03e392.alert).toHaveBeenCalled();
  });
});

describe('openShop', () => {
  beforeEach(() => jest.clearAllMocks());
  it('SSO 티켓으로 로그인 URL을 인앱으로 연다', async () => {
    (v_f96be4 as jest.Mock).mockResolvedValue('t_abc');
    (v_2c8bdd.openBrowserAsync as jest.Mock).mockResolvedValue({ type: 'opened' });
    const v_3ed4c3 = await v_e184b5('/oth-path?it_id=1');
    const v_246950 = (v_2c8bdd.openBrowserAsync as jest.Mock).mock.calls[0][0];
    expect(v_246950).toContain('/oth-path?sso=t_abc');
    expect(v_246950).toContain(encodeURIComponent('/oth-path?it_id=1'));
    expect(v_3ed4c3).toBe(true);
  });
  it('티켓 발급 실패 시 Alert + false', async () => {
    (v_f96be4 as jest.Mock).mockRejectedValue(new Error('no ticket'));
    expect(await v_e184b5('/x')).toBe(false);
    expect(v_03e392.alert).toHaveBeenCalled();
  });

  it('티켓 발급은 성공하고 인앱 브라우저 오픈이 실패하면 Alert가 정확히 1회만 호출된다', async () => {
    (v_f96be4 as jest.Mock).mockResolvedValue('t_abc');
    (v_2c8bdd.openBrowserAsync as jest.Mock).mockRejectedValue(new Error('browser open failed'));
    const v_3ed4c3 = await v_e184b5('/x');
    expect(v_3ed4c3).toBe(false);

    expect(v_03e392.alert).toHaveBeenCalledTimes(1);
  });
});

describe('openShopProduct', () => {
  beforeEach(() => jest.clearAllMocks());
  it('itemId를 상품 next로 openShop', async () => {
    (v_f96be4 as jest.Mock).mockResolvedValue('t_abc');
    (v_2c8bdd.openBrowserAsync as jest.Mock).mockResolvedValue({ type: 'opened' });
    await v_99cd96('1001');
    const v_246950 = (v_2c8bdd.openBrowserAsync as jest.Mock).mock.calls[0][0];
    expect(v_246950).toContain(encodeURIComponent('/oth-path?it_id=1001'));
  });
  it('itemId 없으면 코너 폴백', async () => {
    (v_f96be4 as jest.Mock).mockResolvedValue('t_abc');
    (v_2c8bdd.openBrowserAsync as jest.Mock).mockResolvedValue({ type: 'opened' });
    await v_99cd96(null);
    const v_246950 = (v_2c8bdd.openBrowserAsync as jest.Mock).mock.calls[0][0];
    expect(v_246950).toContain(encodeURIComponent('/oth-path'));
  });
  it('itemId가 undefined(인자 없음)면 코너 폴백', async () => {
    (v_f96be4 as jest.Mock).mockResolvedValue('t_abc');
    (v_2c8bdd.openBrowserAsync as jest.Mock).mockResolvedValue({ type: 'opened' });
    await v_99cd96();
    const v_246950 = (v_2c8bdd.openBrowserAsync as jest.Mock).mock.calls[0][0];
    expect(v_246950).toContain(encodeURIComponent('/oth-path'));
  });
  it("itemId가 빈 문자열('')이면 코너 폴백", async () => {
    (v_f96be4 as jest.Mock).mockResolvedValue('t_abc');
    (v_2c8bdd.openBrowserAsync as jest.Mock).mockResolvedValue({ type: 'opened' });
    await v_99cd96('');
    const v_246950 = (v_2c8bdd.openBrowserAsync as jest.Mock).mock.calls[0][0];
    expect(v_246950).toContain(encodeURIComponent('/oth-path'));
  });
  it('confirm:true 이고 취소하면 브라우저를 열지 않는다', async () => {
    (v_03e392.alert as jest.Mock).mockImplementation((v_d53ff0, v_413567, v_3d694a) => {
      const v_5df3e0 = v_3d694a.find((v_148ff6) => v_148ff6.style === 'cancel');
      v_5df3e0.onPress();
    });
    const v_3ed4c3 = await v_99cd96('1001', { confirm: true });
    expect(v_3ed4c3).toBe(false);
    expect(v_f96be4).not.toHaveBeenCalled();
    expect(v_2c8bdd.openBrowserAsync).not.toHaveBeenCalled();
    expect(v_03e392.alert).toHaveBeenCalledWith(
      'linking.shop_confirm_title',
      'linking.shop_confirm_message',
      expect.any(Array),
      expect.any(Object),
    );
  });
  it('confirm:true 이고 동의하면 SSO로 상품을 연다', async () => {
    (v_03e392.alert as jest.Mock).mockImplementation((v_d53ff0, v_413567, v_3d694a) => {
      const v_d02b59 = v_3d694a.find((v_148ff6) => v_148ff6.text === 'linking.shop_confirm_continue');
      v_d02b59.onPress();
    });
    (v_f96be4 as jest.Mock).mockResolvedValue('t_abc');
    (v_2c8bdd.openBrowserAsync as jest.Mock).mockResolvedValue({ type: 'opened' });
    const v_3ed4c3 = await v_99cd96('1001', { confirm: true });
    expect(v_3ed4c3).toBe(true);
    const v_246950 = (v_2c8bdd.openBrowserAsync as jest.Mock).mock.calls[0][0];
    expect(v_246950).toContain(encodeURIComponent('/oth-path?it_id=1001'));
  });
});
