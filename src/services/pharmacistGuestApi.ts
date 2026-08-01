

import {
  v_119173,
  v_bfe5e4,
  type v_9ef470,
} from './pharmacyApi';

export type PharmacistGuestVerifyResult = {
  name: string;
  phone: string;
  visitorId: number;
  isNew: boolean;
  records: v_9ef470[];

  sessionId: string;
};

export async function v_cb0098(v_24baff): Promise<{ expiresIn: number; dev?: boolean; devCode?: string; name?: string; phone?: string }> {
  const v_43c42e = await v_119173(v_24baff);
  if (__DEV__) {
    console.log('[pharmacistGuestApi] DEV OTP: 111111 (pharmacy dev mode)');
  }
  return {
    expiresIn: v_43c42e.expiresIn,
    dev: v_43c42e.dev,
    devCode: __DEV__ ? '111111' : undefined,
    name: v_43c42e.name,
    phone: v_43c42e.phone,
  };
}

export async function v_e76669(v_24baff): Promise<PharmacistGuestVerifyResult> {
  const v_d74a81 = v_24baff.phone.replace(/\D/g, '');
  const v_1833e7 = v_24baff.name.trim();
  const v_43c42e = await v_bfe5e4({
    name: v_1833e7,
    phone: v_d74a81,
    code: v_24baff.code,
  });
  return {
    name: v_1833e7,
    phone: v_d74a81,
    visitorId: v_43c42e.visitorId,
    isNew: v_43c42e.isNew,
    records: v_43c42e.records,
    sessionId: String(v_43c42e.visitorId),
  };
}

export async function v_3dafc1(v_24baff): Promise<{ expiresIn: number; devCode?: string }> {
  const v_43c42e = await v_cb0098(v_24baff);
  return { expiresIn: v_43c42e.expiresIn, devCode: v_43c42e.devCode };
}
