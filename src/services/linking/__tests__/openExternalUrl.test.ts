import { v_f2c756, v_03e392 } from 'rcmrninabrnb';
import { v_5ab0fb } from '../index';

jest.mock('rcmrninabrnb', () => ({
  Linking: { canOpenURL: jest.fn(), openURL: jest.fn() },
  Alert: { alert: jest.fn() },
}));
jest.mock('refjsvmnhpbvuhzr', () => ({ openBrowserAsync: jest.fn() }));
jest.mock('../../shopApi', () => ({ getSSOTicket: jest.fn() }));
jest.mock('../../../i18n', () => ({ t: (v_0eb677) => v_0eb677 }));

describe('openExternalUrl', () => {
  beforeEach(() => jest.clearAllMocks());

  it('열 수 있으면 openURL 호출하고 true', async () => {
    (v_f2c756.canOpenURL as jest.Mock).mockResolvedValue(true);
    (v_f2c756.openURL as jest.Mock).mockResolvedValue(undefined);
    const v_3ed4c3 = await v_5ab0fb('https://service-mh.example.invalid');
    expect(v_f2c756.openURL).toHaveBeenCalledWith('https://service-mh.example.invalid');
    expect(v_3ed4c3).toBe(true);
    expect(v_03e392.alert).not.toHaveBeenCalled();
  });

  it('열 수 없으면 Alert + false', async () => {
    (v_f2c756.canOpenURL as jest.Mock).mockResolvedValue(false);
    const v_3ed4c3 = await v_5ab0fb('bad://x');
    expect(v_3ed4c3).toBe(false);
    expect(v_03e392.alert).toHaveBeenCalledWith('common.error', 'linking.open_failed');
    expect(v_f2c756.openURL).not.toHaveBeenCalled();
  });

  it('openURL이 throw하면 Alert + false', async () => {
    (v_f2c756.canOpenURL as jest.Mock).mockResolvedValue(true);
    (v_f2c756.openURL as jest.Mock).mockRejectedValue(new Error('x'));
    const v_3ed4c3 = await v_5ab0fb('https://service-mh.example.invalid');
    expect(v_3ed4c3).toBe(false);
    expect(v_03e392.alert).toHaveBeenCalled();
  });

  it('canOpenURL 자체가 reject하면 Alert 1회 + false', async () => {
    (v_f2c756.canOpenURL as jest.Mock).mockRejectedValue(new Error('canOpenURL failed'));
    const v_3ed4c3 = await v_5ab0fb('https://service-mh.example.invalid');
    expect(v_3ed4c3).toBe(false);
    expect(v_03e392.alert).toHaveBeenCalledTimes(1);
    expect(v_f2c756.openURL).not.toHaveBeenCalled();
  });
});
