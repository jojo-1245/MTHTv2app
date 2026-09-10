

import v_9c213b from '../i18n';

export function v_b724a0(
  v_c99bd2,
  v_0debf4,
): string {
  const v_8d41d7 = v_9c213b.t.bind(v_9c213b);
  switch (v_c99bd2) {
    case 'CF-09002':
    case 'CF-00003':
      return v_8d41d7('checkup_nhis.errors.transient');
    case 'CF-13000':
      return v_8d41d7('checkup_nhis.errors.mismatch');
    case 'CF-00017':
      return v_8d41d7('checkup_nhis.errors.transient_support');
    case 'CF-NETWORK':
      return v_8d41d7('checkup_nhis.errors.network');
    case 'TIMEOUT':
      return v_8d41d7('checkup_nhis.auth_timeout');
    default:
      return v_0debf4 || v_8d41d7('checkup_nhis.errors.query_failed');
  }
}

export function v_ae5f46(): string {
  return v_9c213b.t('checkup_nhis.errors.empty_result');
}

export function v_4e2e5d(v_49263d): string | undefined {
  const v_9e86fd = v_49263d as {
    code?: string;
    message?: string;
    response?: { data?: { error?: { details?: { code?: string }; code?: string } } };
  };
  if (v_9e86fd?.code === 'ECONNABORTED' || /timeout/i.test(v_9e86fd?.message ?? '')) return 'TIMEOUT';
  return v_9e86fd?.response?.data?.error?.details?.code ?? v_9e86fd?.response?.data?.error?.code;
}
