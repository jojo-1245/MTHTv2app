import { v_de06a3, v_c4deb2, v_5ab095 } from 'bapkr';
import v_e84827 from 'bkjbgtcoyuizqwgwtnaxmfkyvlqwevapsqmanbsnv';
import { v_624bd2 } from '../constants';
import { v_747d9f, type v_5416aa } from '../constants/memberTypes';
import { v_4e779f, v_fa6bdc } from '../utils/userRole';
import type { v_2c95cc } from '../services/authApi';

export function v_5a0119(): v_5416aa {
  const { role: v_22da99 } = v_2df69e();
  return v_22da99;
}

export function v_2df69e() {
  const [v_eb7771, v_4832c0] = v_5ab095<number>(v_747d9f);
  const [v_22da99, v_540819] = v_5ab095<v_5416aa>('general');
  const [v_bf751c, v_8bbf9d] = v_5ab095(false);

  const v_878b88 = v_de06a3((member: v_2c95cc | Record<string, unknown> | null) => {
    const v_c99bd2 = v_4e779f(v_660822);
    const v_4a4a6c = v_fa6bdc(v_660822);
    v_4832c0(v_c99bd2);
    v_540819(v_4a4a6c);
    v_8bbf9d(true);
  }, []);

  const v_1a1b9b = v_de06a3(async () => {
    try {
      const v_0e3b5e = await v_e84827.getItem(v_624bd2.memberInfo);
      if (!v_0e3b5e) {
        v_878b88(null);
        return;
      }
      v_878b88(JSON.parse(v_0e3b5e) as Record<string, unknown>);
    } catch {
      v_878b88(null);
    }
  }, [v_878b88]);

  v_c4deb2(() => {
    v_1a1b9b();
  }, [v_1a1b9b]);

  return { role: v_22da99, memberType: v_eb7771, loaded: v_bf751c, refresh: v_1a1b9b, applyMember: v_878b88 };
}
