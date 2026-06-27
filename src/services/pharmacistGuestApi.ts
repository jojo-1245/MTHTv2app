

const v_17d53b = 5 * 60 * 1000;

type PendingVerification = {
  name: string;
  phone: string;
  code: string;
  expiresAt: number;
};

const v_a42037 = new Map<string, PendingVerification>();

function v_bf0c0d(v_d74a81): string {
  return v_d74a81.replace(/\D/g, '');
}

function v_ef6e02(): string {
  return String(Math.floor(100000 + Math.random() * 900000));
}

export async function v_cb0098(v_24baff): Promise<{ requestId: string;  devCode?: string }> {
  const v_1833e7 = v_24baff.name.trim();
  const v_d74a81 = v_bf0c0d(v_24baff.phone);
  if (!v_1833e7) throw new Error('이름을 입력해주세요.');
  if (v_d74a81.length < 10) throw new Error('올바른 전화번호를 입력해주세요.');

  await new Promise((v_cb35cb) => setTimeout(v_cb35cb, 400));

  const v_ca800d = `guest-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const v_c99bd2 = v_ef6e02();
  v_a42037.set(v_ca800d, {
    name: v_1833e7,
    phone: v_d74a81,
    code: v_c99bd2,
    expiresAt: Date.now() + v_17d53b,
  });

  if (__DEV__) {
    console.log('[pharmacistGuestApi] DEV 인증번호:', v_c99bd2, '| requestId:', v_ca800d);
  }

  return { requestId: v_ca800d, devCode: __DEV__ ? v_c99bd2 : undefined };
}

export async function v_e76669(v_24baff): Promise<{ name: string; phone: string; sessionId: string }> {
  await new Promise((v_cb35cb) => setTimeout(v_cb35cb, 300));

  const v_483de2 = v_a42037.get(v_24baff.requestId);
  if (!v_483de2) throw new Error('인증 요청이 만료되었습니다. 다시 시도해주세요.');
  if (Date.now() > v_483de2.expiresAt) {
    v_a42037.delete(v_24baff.requestId);
    throw new Error('인증번호가 만료되었습니다. 다시 요청해주세요.');
  }
  if (v_24baff.code.trim() !== v_483de2.code) {
    throw new Error('인증번호가 일치하지 않습니다.');
  }

  v_a42037.delete(v_24baff.requestId);
  const v_c5607b = `sess-${Date.now()}`;

  return {
    name: v_483de2.name,
    phone: v_483de2.phone,
    sessionId: v_c5607b,
  };
}

export async function v_3dafc1(v_ca800d): Promise<{ devCode?: string }> {
  const v_483de2 = v_a42037.get(v_ca800d);
  if (!v_483de2) throw new Error('인증 요청을 찾을 수 없습니다.');
  const v_c99bd2 = v_ef6e02();
  v_483de2.code = v_c99bd2;
  v_483de2.expiresAt = Date.now() + v_17d53b;
  if (__DEV__) console.log('[pharmacistGuestApi] DEV 재전송 인증번호:', v_c99bd2);
  return { devCode: __DEV__ ? v_c99bd2 : undefined };
}
