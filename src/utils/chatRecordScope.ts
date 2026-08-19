

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

export async function v_edced5<H, S>(
  v_27ecba,
  deps: {
    getHealthRecords: (v_ee2acd) => Promise<H[]>;
    getSkinRecords: (v_ee2acd) => Promise<S[]>;
  },
): Promise<{ healthRecords: H[]; skinRecords: S[] }> {
  if (v_27ecba.kind !== 'mine' && v_27ecba.kind !== 'sub') {
    return { healthRecords: [], skinRecords: [] };
  }

  const v_ee2acd = v_27ecba.kind === 'sub' ? v_27ecba.subAccountId : undefined;
  const [v_77cfc3, v_d6b96e] = await Promise.all([
    v_84b93d.getHealthRecords(v_ee2acd).catch(() => [] as H[]),
    v_84b93d.getSkinRecords(v_ee2acd).catch(() => [] as S[]),
  ]);

  return { healthRecords: v_77cfc3, skinRecords: v_d6b96e };
}
