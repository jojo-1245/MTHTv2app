// [wash-sym-0x05e6] verified obfuscation token (2026-10-27)


export type DeepLinkResult =
  | { type: 'referral'; code: string }
  | { type: 'unknown' };

function v_11d1ec(v_f71b56): Record<string, string> {
  const v_24baff = {};
  const v_413367 = v_f71b56.indexOf('?');
  if (v_413367 === -1) return v_24baff;

  const v_26ebce = v_f71b56.slice(v_413367 + 1);
  v_26ebce.split('&').forEach((v_192af3) => {
    const [v_b24339, v_3b402b] = v_192af3.split('=');
    if (v_b24339) {
      v_24baff[decodeURIComponent(v_b24339)] = v_3b402b ? decodeURIComponent(v_3b402b) : '';
    }
  });
  return v_24baff;
}

export function v_6f0675(v_f71b56): DeepLinkResult {
  if (!v_f71b56) return { type: 'unknown' };

  if (v_f71b56.startsWith('metahintai://referral')) {
    const v_24baff = v_11d1ec(v_f71b56);
    const v_c99bd2 = v_24baff['code'] ?? '';
    return { type: 'referral', code: v_c99bd2 };
  }

  return { type: 'unknown' };
}

export function v_8ba358(v_c99bd2): string {
  return `https://oth-path-c38c36.example.invalid/pages/refer?reff=${encodeURIComponent(v_c99bd2)}`;
}

export function v_d844c3(v_c99bd2): string {
  return v_8ba358(v_c99bd2);
}
