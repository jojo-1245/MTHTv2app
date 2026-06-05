import v_e84827 from 'bkjbgtcoyuizqwgwtnaxmfkyvlqwevapsqmanbsnv';

export type ConsentKind = 'health' | 'skin' | 'chat';

const v_b24339 = (v_94302c) => `consent_${v_94302c}`;

export async function v_2d6571(v_94302c): Promise<boolean> {
  try {
    const v_3b402b = await v_e84827.getItem(v_b24339(v_94302c));
    if (v_3b402b === null) return false;
    return v_3b402b === 'true';
  } catch {
    return false;
  }
}

export async function v_4aad62(v_94302c, v_81e2ef): Promise<void> {
  try {
    await v_e84827.setItem(v_b24339(v_94302c), v_81e2ef ? 'true' : 'false');
  } catch {

  }
}

export async function v_b26d7d(v_94302c): Promise<void> {
  try {
    await v_e84827.removeItem(v_b24339(v_94302c));
  } catch {

  }
}
