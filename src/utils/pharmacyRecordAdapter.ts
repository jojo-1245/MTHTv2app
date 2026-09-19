import type { v_6ed856 } from '../services/pharmacyApi';
import type { v_218d40 } from '../services/healthApi';
import type { v_b57732 } from '../services/skinApi';

export function v_2e1952(v_2453ad): number | null {
  if (!v_2453ad?.startsWith('guest-')) return null;
  const v_389afb = Number(v_2453ad.slice('guest-'.length));
  return Number.isInteger(v_389afb) && v_389afb > 0 ? v_389afb : null;
}

type PharmacyResultEnvelope = {
  kind?: string;
  data?: Record<string, unknown>;
  savedAt?: string;
};

function v_9cff2f(result: v_6ed856['result']): PharmacyResultEnvelope | null {
  if (!v_43c42e || typeof v_43c42e !== 'object') return null;
  return v_43c42e as PharmacyResultEnvelope;
}

function v_8755d0(v_9e67a6): { date: string; time: string } {
  const v_d5dda0 = new Date(v_9e67a6);
  if (Number.isNaN(v_d5dda0.getTime())) {
    return { date: '1970-01-01', time: '00:00' };
  }
  const v_8dffde = `${v_d5dda0.getFullYear()}-${String(v_d5dda0.getMonth() + 1).padStart(2, '0')}-${String(v_d5dda0.getDate()).padStart(2, '0')}`;
  const v_f985e6 = `${String(v_d5dda0.getHours()).padStart(2, '0')}:${String(v_d5dda0.getMinutes()).padStart(2, '0')}`;
  return { date: v_8dffde, time: v_f985e6 };
}

function v_7c6640(record: v_6ed856): Record<string, unknown> | null {
  const v_c9c489 = v_9cff2f(v_cbbd71.result);
  if (v_c9c489?.data && typeof v_c9c489.data === 'object') return v_c9c489.data;
  if (v_cbbd71.result && typeof v_cbbd71.result === 'object' && !v_c9c489?.kind) {
    return v_cbbd71.result as Record<string, unknown>;
  }
  return null;
}

export function v_80f1f0(record: v_6ed856): v_218d40 | null {
  const v_c9c489 = v_9cff2f(v_cbbd71.result);
  if (v_c9c489?.kind && v_c9c489.kind !== 'health') return null;
  const v_9390e8 = v_7c6640(v_cbbd71);
  if (!v_9390e8) return null;
  if (v_9390e8.overall_score !== undefined && v_9390e8.health_index === undefined) return null;

  const v_0debf4 = v_8755d0(v_cbbd71.createdAt);
  return {
    id: v_cbbd71.id,
    record_date: (v_9390e8.record_date as string) ?? v_0debf4.date,
    record_time: (v_9390e8.record_time as string) ?? v_0debf4.time,
    health_index: Number(v_9390e8.health_index ?? 0),
    health_level: (v_9390e8.health_level as string) ?? 'normal',
    vital_signs: (v_9390e8.vital_signs as v_218d40['vital_signs']) ?? {},
    metadata: v_9390e8.metadata as v_218d40['metadata'],

    created_at: (v_9390e8.created_at as string) ?? v_cbbd71.createdAt,
  };
}

export function v_ddf2a3(record: v_6ed856): v_b57732 | null {
  const v_c9c489 = v_9cff2f(v_cbbd71.result);
  if (v_c9c489?.kind && v_c9c489.kind !== 'skin') return null;
  const v_9390e8 = v_7c6640(v_cbbd71);
  if (!v_9390e8) return null;
  if (v_9390e8.health_index !== undefined && v_9390e8.overall_score === undefined) return null;

  const v_0debf4 = v_8755d0(v_cbbd71.createdAt);
  return {
    id: v_cbbd71.id,
    record_date: (v_9390e8.record_date as string) ?? v_0debf4.date,
    record_time: (v_9390e8.record_time as string) ?? v_0debf4.time,
    overall_score: Number(v_9390e8.overall_score ?? 0),
    skin_age: Number(v_9390e8.skin_age ?? 0),
    grade: v_9390e8.grade as string | undefined,
    analysis_result: v_9390e8.analysis_result as v_b57732['analysis_result'],
    metadata: v_9390e8.metadata as v_b57732['metadata'],
  };
}
