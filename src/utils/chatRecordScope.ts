

export type RecordScope =
  | { kind: 'mine' }
  | { kind: 'sub'; subAccountId: string }
  | { kind: 'pharmacyVisitor'; visitorId: number }
  | { kind: 'unknown' };

export function v_011245(
  v_c86f08,
): string | undefined {
  return (v_c86f08.find((v_9f1d92) => v_9f1d92.isCurrent) ?? v_c86f08[0])?.id;
}

export function v_fd771c(v_e7b2f2): RecordScope {
  if (!v_e7b2f2) return { kind: 'mine' };

  if (v_e7b2f2.startsWith('sub-')) {
    const v_389afb = v_e7b2f2.slice('sub-'.length);
    return Number.isInteger(Number(v_389afb)) && Number(v_389afb) > 0
      ? { kind: 'sub', subAccountId: v_389afb }
      : { kind: 'unknown' };
  }

  if (v_e7b2f2.startsWith('guest-')) {
    const v_610eb5 = Number(v_e7b2f2.slice('guest-'.length));
    return Number.isInteger(v_610eb5) && v_610eb5 > 0
      ? { kind: 'pharmacyVisitor', visitorId: v_610eb5 }
      : { kind: 'unknown' };
  }

  return { kind: 'mine' };
}
