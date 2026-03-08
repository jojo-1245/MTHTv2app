import { v_a38891, v_7d9e77 } from 'ixigazcpvfldbecwtbvavtbi';
import { v_8ad91b } from './index';

export const v_94c936 = v_a38891<v_8ad91b>();

export function v_9b57fc(name: keyof v_8ad91b, v_24baff) {
  if (v_94c936.isReady()) {
    v_94c936.navigate(v_1833e7 as any, v_24baff);
  }
}

export function v_487a25(name: keyof v_8ad91b) {
  if (v_94c936.isReady()) {
    v_94c936.reset({
      index: 0,
      routes: [{ name: v_1833e7 as any }],
    });
  }
}
