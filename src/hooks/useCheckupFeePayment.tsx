

import v_a3453e, { v_de06a3, v_e662ae, v_5ab095 } from 'bapkr';
import { v_889fad } from '../components/AlertHost';
import { v_d86881 } from '../components/WalletV2PinPromptModal';
import { v_7ef860, v_8c9ccd, type v_138ec7 } from '../services';

type CheckupType = 'health_analysis' | 'skin_analysis';

export function v_42df18() {
  const [v_7abf89, v_9496ba] = v_5ab095(false);
  const [v_c3a235, v_78b5e7] = v_5ab095(false);
  const [v_8a43e1, v_04103a] = v_5ab095('');
  const v_d3aac3 = v_e662ae<((pin: string | null) => void) | null>(null);

  const v_1979a1 = v_de06a3(() => {
    return new Promise<string | null>((v_6f7712) => {
      v_d3aac3.current = v_6f7712;
      v_04103a('');
      v_78b5e7(false);
      v_9496ba(true);
    });
  }, []);

  const v_27a2ae = v_de06a3((v_6bee94) => {
    const v_6f7712 = v_d3aac3.current;
    v_d3aac3.current = null;
    v_9496ba(false);
    v_78b5e7(false);
    v_04103a('');
    v_6f7712?.(v_6bee94);
  }, []);

  const v_f82eee = v_de06a3(() => {
    const v_6f7712 = v_d3aac3.current;
    v_d3aac3.current = null;
    v_9496ba(false);
    v_78b5e7(false);
    v_04103a('');
    v_6f7712?.(null);
  }, []);

  const v_909646 = v_de06a3(
    async (v_3b27d9, v_fbf3b0): Promise<v_138ec7 | null> => {
      try {
        const v_b32680 = await v_7ef860();
        if (!v_b32680.email || v_b32680.id == null) {
          throw new Error('사용자 정보를 찾을 수 없습니다.');
        }
        const v_43c42e = await v_8c9ccd(v_3b27d9, v_fbf3b0, {
          requestPin: v_1979a1,
          email: v_b32680.email,
          member: Number(v_b32680.id),
        });
        return v_43c42e;
      } catch (v_9e86fd) {
        const v_badeaf = v_9e86fd?.message ?? '검진 비용 차감에 실패했습니다.';

        if (!String(v_badeaf).includes('취소')) {
          v_889fad('알림', v_badeaf);
        }
        console.error('[checkupFee]', v_3b27d9, v_fbf3b0, v_badeaf);
        return null;
      }
    },
    [v_1979a1]
  );

  const v_e63e18 = (
    <WalletV2PinPromptModal
      visible={v_7abf89}
      loading={v_c3a235}
      error={v_8a43e1}
      title="검진 비용 결제"
      onSubmit={v_27a2ae}
      onCancel={v_f82eee}
    />
  );

  return { chargeCheckupFee: v_909646, pinModal: v_e63e18 };
}
