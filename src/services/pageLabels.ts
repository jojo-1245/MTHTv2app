

function v_d51a4b(v_6ddae0): string {
  const v_479f05 = String(v_6ddae0 || '').trim();
  if (!v_479f05) return '';
  if (/^[a-z0-9]+(-[a-z0-9]+)*$/.test(v_479f05)) return v_479f05;
  return v_479f05
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

export const v_d23a03 = {
  home: '홈',
  'meta-home': '메타 홈',
  'pharmacist-home': '약국 홈',
  login: '로그인',
  signup: '회원가입',
  'forgot-password': '비밀번호 찾기',
  'password-verification': '비밀번호 인증',
  'reset-password': '비밀번호 재설정',
  'password-changed': '비밀번호 변경 완료',
  'email-verification': '이메일 인증',
  'country-select': '국가 선택',
  wallet: '지갑',
  'wallet-send': '지갑 · 보내기',
  'wallet-swap': '지갑 · 스왑',
  'wallet-receive': '지갑 · 받기',
  'wallet-qr-scan': '지갑 · QR 스캔',
  'wallet-estimate': '지갑 · 견적',
  'wallet-transaction-progress': '지갑 · 전송 진행',
  'wallet-transaction-result': '지갑 · 전송 결과',
  'transaction-details': '거래 상세',
  'wallet-token-detail': '지갑 · 토큰 상세',
  'font-test': '폰트 테스트',
  'my-info': '내 정보',
  'my-info-view': '내 정보 · 보기',
  'my-info-edit': '내 정보 · 수정',
  'my-info-email-auth': '내 정보 · 이메일 인증',
  'my-info-settings': '내 정보 · 설정',
  'my-info-notify': '내 정보 · 알림',
  'my-info-clauses': '내 정보 · 약관',
  'clause-detail': '약관 상세',
  'my-info-close-membership': '회원 탈퇴',
  'my-info-faq': 'FAQ',
  'referral-share': '추천 공유',
  'my-referrals': '내 추천',
  'referral-sales': '추천 매출',
  'profit-distribution': '수익 분배',
  'skin-analysis': '피부 분석',
  'skin-comparison': '피부 비교',
  analysis: '분석',
  'health-analysis': '건강 분석',
  'health-analysis-result': '건강 분석 결과',
  'health-comparison': '건강 비교',
  'health-connection': '건강 연동',
  'checkup-nhis': '건강검진(공단)',
  chat: '채팅',
  'add-sub-account': '부계정 추가',
  'data-consent-settings': '데이터 동의 설정',
  'shop-product-list': '쇼핑몰',
  'recommended-supplements': '추천 영양제',
  'shop-payment-confirm': '결제 확인',
};

export function v_5a496c(v_6ddae0): string {
  const v_e0cb29 = v_d51a4b(v_6ddae0);
  if (!v_e0cb29) return '';
  return v_d23a03[v_e0cb29] || v_e0cb29;
}
