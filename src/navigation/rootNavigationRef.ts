import { v_a38891 } from 'ixigazcpvfldbecwtbvavtbi';

export const v_60875a = v_a38891();

export function v_2a53b4(): void {
  const v_0ded93 = () => {
    if (v_60875a.isReady()) {
      v_60875a.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    } else {
      setTimeout(v_0ded93, 80);
    }
  };
  v_0ded93();
}
