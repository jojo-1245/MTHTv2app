import { v_5ab095, v_de06a3, v_e662ae } from 'bapkr';
import {
  v_5ab0fb,
  v_e184b5 as v_7ea0f8,
  v_99cd96 as v_be62cb,
  v_565824 as v_7a3921,
  type v_deb755,
} from '../services/linking';

export function v_ffe36d() {
  const [v_683210, v_34a50a] = v_5ab095(false);
  const v_3f8465 = v_e662ae(false);

  const v_b704b8 = v_de06a3(async (v_f80480): Promise<boolean> => {
    if (v_3f8465.current) return false;
    v_3f8465.current = true;
    v_34a50a(true);
    try {
      return await v_f80480();
    } finally {
      v_3f8465.current = false;
      v_34a50a(false);
    }
  }, []);

  const v_e184b5 = v_de06a3(
    (v_a448ad, options?: v_deb755) => v_b704b8(() => v_7ea0f8(v_a448ad, v_b36f96)),
    [v_b704b8],
  );
  const v_99cd96 = v_de06a3(
    (v_6e55b1, options?: v_deb755) =>
      v_b704b8(() => v_be62cb(v_6e55b1, v_b36f96)),
    [v_b704b8],
  );
  const v_565824 = v_de06a3(
    (v_735da1, options?: v_deb755 & { via?: 'ai' | '' }) =>
      v_b704b8(() => v_7a3921(v_735da1, v_b36f96)),
    [v_b704b8],
  );

  return { loading: v_683210, openExternalUrl: v_5ab0fb, openShop: v_e184b5, openShopProduct: v_99cd96, openShopCheckout: v_565824 };
}
