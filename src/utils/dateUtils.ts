

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
