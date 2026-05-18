

const v_e1310c = {
  ko: 'Asia/Seoul',
  id: 'Asia/Jakarta',
  en: '', 
};

export function v_1d94cd(v_05bb19): string {
  const v_c99bd2 = (v_05bb19 || 'en').toLowerCase().split('-')[0];
  const v_f15433 = v_e1310c[v_c99bd2];
  if (v_f15433) return v_f15433;

  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
  } catch {
    return 'UTC';
  }
}

export function v_f7fc49(v_ce0555): string {
  try {
    const v_5c2f9f = new Date();
    const v_fba864 = v_5c2f9f.toLocaleDateString('en-CA', { timeZone: v_ce0555 }); 
    return v_fba864;
  } catch {
    const v_d5dda0 = new Date();
    const v_64877a = v_d5dda0.getUTCFullYear();
    const v_35f85c = String(v_d5dda0.getUTCMonth() + 1).padStart(2, '0');
    const v_087ffc = String(v_d5dda0.getUTCDate()).padStart(2, '0');
    return `${v_64877a}-${v_35f85c}-${v_087ffc}`;
  }
}

export function v_312d93(v_05bb19): string {
  const v_ce0555 = v_1d94cd(v_05bb19);
  return v_f7fc49(v_ce0555);
}

export function v_42edc9(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Seoul';
  } catch {
    return 'Asia/Seoul';
  }
}

export function v_7446c0(): string {
  return v_f7fc49(v_42edc9());
}

export function v_f54afa(v_f8e6b9): Date | null {
  const v_35f85c = /^(\d{4})-(\d{2})-(\d{2})$/.exec(v_f8e6b9.trim());
  if (!v_35f85c) return null;
  const v_64877a = Number(v_35f85c[1]);
  const v_c307e0 = Number(v_35f85c[2]);
  const v_d5dda0 = Number(v_35f85c[3]);
  if (v_c307e0 < 1 || v_c307e0 > 12 || v_d5dda0 < 1 || v_d5dda0 > 31) return null;
  return new Date(v_64877a, v_c307e0 - 1, v_d5dda0, 12, 0, 0, 0);
}

export function v_1e048d(v_f8e6b9): number {
  const v_d5dda0 = v_f54afa(v_f8e6b9);
  if (!v_d5dda0) return (new Date().getDay() + 6) % 7;
  return (v_d5dda0.getDay() + 6) % 7;
}

export function v_27d54c(v_f8e6b9): string {
  const v_d5dda0 = v_f54afa(v_f8e6b9);
  if (!v_d5dda0) return v_f8e6b9;
  const v_a35724 = (v_d5dda0.getDay() + 6) % 7;
  const v_6fe830 = new Date(v_d5dda0);
  v_6fe830.setDate(v_d5dda0.getDate() - v_a35724);
  const v_64877a = v_6fe830.getFullYear();
  const v_35f85c = String(v_6fe830.getMonth() + 1).padStart(2, '0');
  const v_087ffc = String(v_6fe830.getDate()).padStart(2, '0');
  return `${v_64877a}-${v_35f85c}-${v_087ffc}`;
}

export function v_3cb9d7(
  v_212a26,
  v_20d7b1
): boolean[] {
  const v_96a68c = [false, false, false, false, false, false, false];
  const v_1377ec = v_f54afa(v_20d7b1);
  if (!v_1377ec) return v_96a68c;

  v_212a26.forEach((v_8c0b26) => {
    const v_76f3cc = v_8c0b26.date.slice(0, 10);
    const v_8decf8 = v_f54afa(v_76f3cc);
    if (!v_8decf8) return;
    const v_e9c14e = Math.round(
      (v_8decf8.getTime() - v_1377ec.getTime()) / (24 * 60 * 60 * 1000)
    );
    if (v_e9c14e >= 0 && v_e9c14e <= 6) {
      v_96a68c[v_e9c14e] = !!v_8c0b26.attended;
    }
  });

  return v_96a68c;
}
