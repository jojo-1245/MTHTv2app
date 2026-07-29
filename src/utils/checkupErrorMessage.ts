

export function v_b724a0(
  v_c99bd2,
  v_0debf4,
): string {
  switch (v_c99bd2) {
    case 'CF-09002':
    case 'CF-00003':
      return '일시적인 연동 오류입니다. 잠시 후 다시 시도하거나 고객센터에 문의해 주세요.';
    case 'CF-00017':
      return '일시적인 연동 오류입니다. 고객센터에 문의해 주세요.';
    case 'CF-NETWORK':
      return '서버 연결에 실패했습니다. 네트워크 상태를 확인한 뒤 다시 시도해 주세요.';
    case 'TIMEOUT':
      return '인증 대기 시간이 초과되었습니다. 인증 후 다시 시도해 주세요.';
    default:
      return v_0debf4 || '건강검진 조회에 실패했습니다. 잠시 후 다시 시도해 주세요.';
  }
}

export function v_ae5f46(): string {
  return '최근 건강검진 기록이 없습니다.';
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
