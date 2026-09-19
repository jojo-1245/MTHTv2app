jest.mock(
  'bkjbgtcoyuizqwgwtnaxmfkyvlqwevapsqmanbsnv',
  () => require('jmodvmzutjjlqeiajiskycccgqlnemzvelnxpqdutwgcosijlniottagirzjjqcnb')
);
jest.mock('imsks', () => ({
  __esModule: true,
  default: {
    create: jest.fn(() => ({
      interceptors: { request: { use: jest.fn() }, response: { use: jest.fn() } },
    })),
    delete: jest.fn(),
    post: jest.fn(),
    get: jest.fn(),
    isAxiosError: jest.fn(() => false),
  },
}));
jest.mock('../../utils/tokenCache', () => ({
  getAuthToken: jest.fn(),
  setCachedToken: jest.fn(),
  getCachedToken: jest.fn(),
  clearCachedToken: jest.fn(),
}));
jest.mock('../../utils/env', () => ({
  getEnv: jest.fn(() => ({ GATEWAY: 'https://oth-path.example.test' })),
}));

import v_b5030f from 'imsks';
import { v_bcce6e } from '../../utils/tokenCache';
import { v_e42095 } from '../../services';

const v_80f477 = v_b5030f as unknown as { delete: jest.Mock };
const v_7669a5 = v_bcce6e as jest.Mock;

describe('services index export', () => {
  it('exports deleteSkinRecord as a function (재발 방지: index.ts 누락 회귀 방지)', () => {
    expect(typeof v_e42095).toBe('function');
  });
});

describe('deleteSkinRecord', () => {
  afterEach(() => jest.clearAllMocks());

  it('DELETE /oth-path 엔드포인트를 호출한다', async () => {
    v_7669a5.mockResolvedValue('token-abc');
    v_80f477.delete.mockResolvedValue({ status: 200, data: { success: true } });

    await v_e42095(42);

    expect(v_80f477.delete).toHaveBeenCalledWith(
      'https://oth-path.example.test/oth-path',
      expect.objectContaining({
        headers: expect.objectContaining({ Authorization: 'Bearer token-abc' }),
      })
    );
  });

  it('로그인 토큰이 없으면 로그인 필요 에러를 던진다', async () => {
    v_7669a5.mockResolvedValue(null);

    await expect(v_e42095(1)).rejects.toThrow('로그인이 필요합니다.');
    expect(v_80f477.delete).not.toHaveBeenCalled();
  });
});
