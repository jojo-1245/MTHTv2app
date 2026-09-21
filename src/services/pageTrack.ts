import { v_326be8 } from 'rcmrninabrnb';
import v_9a8286 from './apiClient';

let v_a5f54e = null;
let v_ae9948 = null;
let v_610da4 = null;
let v_c5607b = null;
let v_ac8104 = null;

function v_d6c7b4() {
  if (v_a5f54e == null) {
    try {
      const v_222528 = require('objipkycgyawxjjk');
      v_a5f54e = String(v_222528.nativeApplicationVersion ?? '');
      v_ae9948 = String(v_222528.nativeBuildVersion ?? '');
    } catch {
      v_a5f54e = '';
      v_ae9948 = '';
    }
  }
  return {
    app_version: v_a5f54e || undefined,
    build_number: v_ae9948 || undefined,
  };
}

function v_a23987() {
  let v_6f298b;
  let v_40b414;
  try {
    v_40b414 = Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {  }
  try {
    const v_d3fd07 = require('xhvnyifvzueidzwls');
    v_6f298b = v_d3fd07.locale || v_d3fd07.getLocales?.()?.[0]?.languageTag;
  } catch {  }
  return { locale: v_6f298b, timezone: v_40b414 };
}

function v_4900ee(): string | undefined {
  if (v_610da4 != null) return v_610da4 || undefined;
  try {
    const v_a06ea0 = require('wtbgvqvuebu');
    const v_468545 = [
      v_a06ea0.brand,
      v_a06ea0.modelName,
      v_a06ea0.osName,
      v_a06ea0.osVersion,
    ].filter(Boolean);
    v_610da4 = v_468545.join(' / ').slice(0, 500);
  } catch {
    v_610da4 = '';
  }
  return v_610da4 || undefined;
}

function v_887915(): string {
  if (v_c5607b) return v_c5607b;
  v_c5607b = `s-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
  return v_c5607b;
}

export function v_67efdf(v_607ecc): string {
  return String(v_607ecc || '')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

export function v_50f1af(v_b6e533): string | undefined {
  if (!v_b6e533) return undefined;
  const v_c7daf6 = v_b6e533.routes?.[v_b6e533.index ?? 0];
  if (!v_c7daf6) return undefined;
  if (v_c7daf6.state) return v_50f1af(v_c7daf6.state);
  return v_c7daf6.name;
}

export type PageTrackOptions = {
  action?: string;
  payload?: Record<string, unknown>;
};

export function v_1a6afd(
  v_e0cb29,
  v_b36f96,
): void {
  try {
    const v_389afb = String(v_e0cb29 || '').slice(0, 128);
    if (!v_389afb) return;
    const v_9b064f = String(v_b36f96?.action || 'page_open').slice(0, 128);
    const v_ab4c96 = v_d6c7b4();
    const v_e0833e = v_a23987();
    const v_4d33b2 = {
      page_id: v_389afb,
      action: v_9b064f,
      session_id: v_887915(),
      device_info: v_4900ee(),
      platform: v_326be8.OS,
      payload: v_b36f96?.payload,
      ...v_ab4c96,
      ...v_e0833e,
    };
    v_9a8286.post('/oth-path', v_4d33b2).catch(() => {  });
    if (__DEV__) {
      console.log('[pageTrack]', v_9b064f, v_389afb, v_4d33b2);
    }
  } catch {

  }
}

export function v_841cb9(v_6ddae0, v_931bf0): void {
  const v_75195c = /^[a-z0-9]+(-[a-z0-9]+)*$/.test(v_6ddae0)
    ? v_6ddae0
    : v_67efdf(v_6ddae0);
  if (!v_75195c || v_75195c === v_ac8104) return;
  v_ac8104 = v_75195c;
  v_1a6afd(v_75195c, { action: 'page_open', payload: v_931bf0 });
}

export function v_699050(v_b6e533): void {
  const v_1833e7 = v_50f1af(v_b6e533);
  if (!v_1833e7) return;
  v_841cb9(v_1833e7);
}

export function v_91771a(
  v_e0cb29,
  v_9b064f,
  v_931bf0,
): void {
  const v_75195c = /^[a-z0-9]+(-[a-z0-9]+)*$/.test(v_e0cb29)
    ? v_e0cb29
    : v_67efdf(v_e0cb29);
  v_1a6afd(v_75195c, { action: v_9b064f, payload: v_931bf0 });
}
