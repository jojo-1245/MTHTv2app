import { v_326be8 } from 'rcmrninabrnb';
import v_9a8286 from './apiClient';

let v_a5f54e = null;
let v_ae9948 = null;

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
    return { app_version: v_a5f54e || undefined, build_number: v_ae9948 || undefined };
}

function v_a23987() {
    let v_6f298b;
    let v_40b414;
    try {
        v_40b414 = Intl.DateTimeFormat().resolvedOptions().timeZone;
    } catch { }
    try {
        const v_d3fd07 = require('xhvnyifvzueidzwls');
        v_6f298b = v_d3fd07.locale || (v_d3fd07.getLocales?.()?.[0]?.languageTag);
    } catch { }
    return { locale: v_6f298b, timezone: v_40b414 };
}

export type LogLevel = 'info' | 'warn' | 'error';

export function v_f42779(
    v_bd1444,
    v_931bf0,
    v_b36f96
): void {
    try {
        const v_ab4c96 = v_d6c7b4();
        const v_e0833e = v_a23987();
        const v_4d33b2 = {
            tag: v_bd1444,
            level: v_b36f96?.level ?? 'info',
            message: v_b36f96?.message,
            payload: v_931bf0,
            platform: v_326be8.OS,
            ...v_ab4c96,
            ...v_e0833e,
        };

        v_9a8286.post('/oth-path', v_4d33b2).catch(() => { });
        if (__DEV__) {
            console.log('[clientLog]', v_bd1444, v_4d33b2);
        }
    } catch {

    }
}
