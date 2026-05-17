

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

export function v_f54afa(v_f8e6b9): Date | null {
  const v_35f85c = /^(\d{4})-(\d{2})-(\d{2})$/.exec(v_f8e6b9.trim());
  if (!v_35f85c) return null;
  const v_64877a = Number(v_35f85c[1]);
  const v_c307e0 = Number(v_35f85c[2]);
  const v_d5dda0 = Number(v_35f85c[3]);
  if (v_c307e0 < 1 || v_c307e0 > 12 || v_d5dda0 < 1 || v_d5dda0 > 31) return null;
  return new Date(v_64877a, v_c307e0 - 1, v_d5dda0, 12, 0, 0, 0);
}

export function v_d3b4cd(v_8dffde): string {
  const v_64877a = v_8dffde.getFullYear();
  const v_35f85c = String(v_8dffde.getMonth() + 1).padStart(2, '0');
  const v_087ffc = String(v_8dffde.getDate()).padStart(2, '0');
  return `${v_64877a}-${v_35f85c}-${v_087ffc}`;
}

export function v_27d54c(v_f8e6b9): string {
  const v_d5dda0 = v_f54afa(v_f8e6b9);
  if (!v_d5dda0) return v_f8e6b9;
  const v_a35724 = (v_d5dda0.getDay() + 6) % 7;
  const v_6fe830 = new Date(v_d5dda0);
  v_6fe830.setDate(v_d5dda0.getDate() - v_a35724);
  return v_d3b4cd(v_6fe830);
}

export function v_91b7d4(v_f8e6b9, v_6a53fd): string {
  const v_d5dda0 = v_f54afa(v_f8e6b9);
  if (!v_d5dda0) return v_f8e6b9;
  v_d5dda0.setDate(v_d5dda0.getDate() + v_6a53fd);
  return v_d3b4cd(v_d5dda0);
}

export function v_0c0824(v_f8e6b9, v_20d7b1, v_e1493a): boolean {
  const v_d5dda0 = v_f54afa(v_f8e6b9);
  const v_965edf = v_f54afa(v_20d7b1);
  const v_3b508c = v_f54afa(v_e1493a);
  if (!v_d5dda0 || !v_965edf || !v_3b508c) return false;
  return v_d5dda0 >= v_965edf && v_d5dda0 <= v_3b508c;
}

export function v_89c1c6(
  v_f8e6b9,
  v_20d7b1,
  v_e1493a
): { weekStart: string; weekEnd: string } {
  const v_965edf = v_20d7b1 ?? v_27d54c(v_f8e6b9);
  const v_3b508c = v_e1493a ?? v_91b7d4(v_965edf, 6);
  return { weekStart: v_965edf, weekEnd: v_3b508c };
}

export function v_5f89d6(
  v_412aab,
  v_e2e922,
  v_77dc31
): { weekStart: string; weekEnd: string; usedApiWeek: boolean } {
  const v_a492d4 = v_89c1c6(v_412aab);
  if (
    v_e2e922 &&
    v_77dc31 &&
    v_0c0824(v_412aab, v_e2e922, v_77dc31)
  ) {
    return { weekStart: v_e2e922, weekEnd: v_77dc31, usedApiWeek: true };
  }
  return { weekStart: v_a492d4.weekStart, weekEnd: v_a492d4.weekEnd, usedApiWeek: false };
}

export function v_1e048d(v_f8e6b9): number {
  const v_d5dda0 = v_f54afa(v_f8e6b9);
  if (!v_d5dda0) return (new Date().getDay() + 6) % 7;
  return (v_d5dda0.getDay() + 6) % 7;
}
