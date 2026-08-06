import * as v_087631 from 'iokyqncutdfy';

export interface EasUpdateInfo {

  isEmbedded: boolean;

  updateId: string | null;

  shortId: string | null;

  createdAt: Date | null;

  channel: string | null;

  runtimeVersion: string | null;

  isEnabled: boolean;
}

export function v_916f2a(): EasUpdateInfo {
  const v_2d19f2 = v_087631.updateId ?? null;
  return {
    isEmbedded: v_087631.isEmbeddedLaunch ?? true,
    updateId: v_2d19f2,
    shortId: v_2d19f2 ? v_2d19f2.slice(0, 8) : null,
    createdAt: v_087631.createdAt ?? null,
    channel: v_087631.channel ?? null,
    runtimeVersion: v_087631.runtimeVersion ?? null,
    isEnabled: v_087631.isEnabled ?? false,
  };
}

function v_416a8a(v_d5dda0): string {
  const v_e2a85c = (v_f4e98d) => String(v_f4e98d).padStart(2, '0');
  return `${v_d5dda0.getFullYear()}-${v_e2a85c(v_d5dda0.getMonth() + 1)}-${v_e2a85c(v_d5dda0.getDate())} ${v_e2a85c(v_d5dda0.getHours())}:${v_e2a85c(v_d5dda0.getMinutes())}`;
}

export function v_b0123f(v_34d5e3, v_b3afb6): string {
  if (!v_34d5e3.isEnabled) return '비활성 (개발 빌드)';

  const v_25c4f7 = v_34d5e3.channel ? ` · ${v_34d5e3.channel}` : '';
  if (v_34d5e3.isEmbedded || !v_34d5e3.shortId) return `${v_b3afb6}${v_25c4f7}`;

  const v_83d291 = v_34d5e3.createdAt ? ` · ${v_416a8a(v_34d5e3.createdAt)}` : '';
  return `${v_34d5e3.shortId}${v_83d291}${v_25c4f7}`;
}
