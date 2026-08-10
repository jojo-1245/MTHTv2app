

export function v_9f896c(v_23805a): boolean {
  const v_a8cb97 = v_23805a.ca_id != null ? String(v_23805a.ca_id) : '';
  if (v_a8cb97) return v_a8cb97 === '20' || v_a8cb97.startsWith('20');

  const v_389afb = String(v_23805a.it_id ?? v_23805a.shopItemId ?? '');
  if (!v_389afb) return false;
  if (/^20260624\d{2}$/.test(v_389afb)) return true;

  if (/^20260606\d{2}$/.test(v_389afb)) return false;
  if (v_389afb === '1774406956') return false;
  return false;
}
