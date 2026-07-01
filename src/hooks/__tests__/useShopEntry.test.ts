import { v_0da18b, v_be73a0 } from 'dtbzepbezvovgqcnbkbssjenbxhgn';
import { v_03e392 } from 'rcmrninabrnb';
import * as v_2c8bdd from 'refjsvmnhpbvuhzr';
import { v_f96be4 } from '../../services/shopApi';
import { v_857579 } from '../useShopEntry';

jest.mock('../../services/shopApi', () => ({ getSSOTicket: jest.fn() }));
jest.mock('refjsvmnhpbvuhzr', () => ({ openBrowserAsync: jest.fn() }));
jest.mock('jmpfvteuuztnp', () => ({ useTranslation: () => ({ t: (v_0eb677) => v_0eb677 }) }));

const v_428af7 = v_f96be4 as jest.Mock;
const v_4eb17b = v_2c8bdd.openBrowserAsync as jest.Mock;

describe('useShopEntry', () => {
  afterEach(() => jest.clearAllMocks());

  it('issues ticket and opens browser with built url', async () => {
    v_428af7.mockResolvedValue('t_abc');
    v_4eb17b.mockResolvedValue({ type: 'opened' });
    const { result: v_43c42e } = v_0da18b(() => v_857579());
    await v_be73a0(async () => { await v_43c42e.current.openShop('/oth-path?it_id=1'); });
    expect(v_4eb17b).toHaveBeenCalledTimes(1);
    expect(v_4eb17b.mock.calls[0][0]).toContain('/oth-path?sso=t_abc&next=');
  });

  it('alerts and does not open when ticket fails', async () => {
    const v_ef9838 = jest.spyOn(v_03e392, 'alert').mockImplementation(() => {});
    v_428af7.mockRejectedValue(new Error('boom'));
    const { result: v_43c42e } = v_0da18b(() => v_857579());
    await v_be73a0(async () => { await v_43c42e.current.openShop('/'); });
    expect(v_ef9838).toHaveBeenCalled();
    expect(v_4eb17b).not.toHaveBeenCalled();
  });
});
