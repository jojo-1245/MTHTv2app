import {
  v_67efdf,
  v_07867c,
  v_1a6afd,
  v_841cb9,
  v_446752,
  v_a81381,
  v_6b057a,
  v_eaae7e,
} from '../pageTrack';

const v_483091 = jest.fn();
jest.mock('../apiClient', () => ({
  __esModule: true,
  default: { post: (...v_4317d1: unknown[]) => v_483091(...v_4317d1) },
}));

jest.mock('../clientLog', () => ({
  logToServer: jest.fn(),
}));

const { logToServer: v_f42779 } = require('../clientLog') as { logToServer: jest.Mock };

describe('pageTrack MH-786 error logging', () => {
  beforeEach(() => {
    v_483091.mockReset();
    v_f42779.mockReset();
    v_483091.mockResolvedValue({ data: { success: true } });
  });

  it('routeNameToPageId kebab', () => {
    expect(v_67efdf('WalletSend')).toBe('wallet-send');
  });

  it('serializeError keeps message', () => {
    expect(v_07867c(new Error('boom')).message).toBe('boom');
  });

  it('page_open posts page-event with page_name', async () => {
    v_841cb9('MetaHome');
    expect(v_eaae7e()).toBe('meta-home');
    expect(v_483091).toHaveBeenCalledWith(
      '/oth-path',
      expect.objectContaining({
        page_id: 'meta-home',
        page_name: '메타 홈',
        action: 'page_open',
      }),
    );
  });

  it('(A) page-event 실패 시 page_track_error + client_logs', async () => {
    v_483091
      .mockRejectedValueOnce(new Error('network'))
      .mockResolvedValueOnce({ data: { success: true } });

    v_1a6afd('wallet', { action: 'page_open' });
    await Promise.resolve();
    await Promise.resolve();

    expect(v_483091).toHaveBeenCalledTimes(2);
    expect(v_483091.mock.calls[1][1]).toEqual(
      expect.objectContaining({
        page_id: 'wallet',
        action: v_a81381,
        payload: expect.objectContaining({
          failed_action: 'page_open',
          error: expect.objectContaining({ message: 'network' }),
        }),
      }),
    );
    expect(v_f42779).toHaveBeenCalledWith(
      'page_track_error',
      expect.objectContaining({ page_id: 'wallet' }),
      expect.objectContaining({ level: 'error' }),
    );
  });

  it('(A) page_track_error 재실패해도 재귀하지 않음', async () => {
    v_483091.mockRejectedValue(new Error('down'));
    v_1a6afd('home', { action: 'page_open' });
    await Promise.resolve();
    await Promise.resolve();
    await Promise.resolve();

    expect(v_483091.mock.calls.length).toBeLessThanOrEqual(2);
    const v_dd943a = v_483091.mock.calls.map((v_3f4e2e) => (v_3f4e2e[1] as { action: string }).action);
    expect(v_dd943a.filter((v_779914) => v_779914 === v_a81381).length).toBe(1);
  });

  it('(B) trackRuntimeError uses last page_id', async () => {
    v_841cb9('MyInfo');
    v_483091.mockClear();
    v_483091.mockResolvedValue({ data: { success: true } });

    v_446752(new Error('render'), { source: 'test' });
    expect(v_483091).toHaveBeenCalledWith(
      '/oth-path',
      expect.objectContaining({
        page_id: 'my-info',
        action: v_6b057a,
        payload: expect.objectContaining({
          source: 'test',
          error: expect.objectContaining({ message: 'render' }),
        }),
      }),
    );
    expect(v_f42779).toHaveBeenCalledWith(
      'page_runtime_error',
      expect.objectContaining({ page_id: 'my-info' }),
      expect.objectContaining({ level: 'error' }),
    );
  });
});
