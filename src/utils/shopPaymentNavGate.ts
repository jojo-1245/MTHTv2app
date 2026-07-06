
let v_26c7be = null;

export function v_13fdf1(v_9d3240): void {
  v_26c7be = v_9d3240;
}

export function v_450510(v_9d3240): boolean {
  if (!v_26c7be) return true;
  return v_26c7be === v_9d3240;
}

export function v_f07e72(): void {
  v_26c7be = null;
}
