

import v_a3453e, { v_de06a3, v_e662ae, v_5ab095 } from 'bapkr';
import {
  v_39a996,
  v_aa7413,
  v_472849,
  v_19b633,
  v_3094a2,
} from 'rcmrninabrnb';
import { v_889fad } from '../components/AlertHost';
import { v_d86881 } from '../components/WalletV2PinPromptModal';
import { v_7ef860, v_8c9ccd, type v_138ec7 } from '../services';
import { v_f28ca8 } from '../services/wallet/sendTokenAuto';
import {
  v_079e97,
  v_c0a190,
  type v_34f673,
} from '../services/wallet/walletV2CheckupPay';
import { v_f28b6f } from '../services/appsFlyer';

type CheckupType = 'health_analysis' | 'skin_analysis';

export function v_42df18() {
  const [v_7abf89, v_9496ba] = v_5ab095(false);
  const [v_c3a235, v_78b5e7] = v_5ab095(false);
  const [v_8a43e1, v_04103a] = v_5ab095('');

  const [v_f5ab84, v_aa8c1c] = v_5ab095(false);
  const [v_e53fb0, v_00ab04] = v_5ab095('결제 준비 중...');
  const v_d3aac3 = v_e662ae<((pin: string | null) => void) | null>(null);
  const v_d81d83 = v_e662ae<v_34f673 | null>(null);
  const v_bcc2c4 = v_e662ae(false);

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

    v_00ab04('검수 준비 중...\n잠시만 기다려 주세요.');
    v_aa8c1c(true);
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

  const v_592553 = v_de06a3(
    async (v_3b27d9): Promise<boolean> => {
      if (v_bcc2c4.current) {
        return false;
      }
      v_bcc2c4.current = true;
      v_d81d83.current = null;
      try {
        const v_83d291 = await v_f28ca8();
        if (!v_83d291) {
          v_d81d83.current = { needed: false, reason: 'not_at', feeAmount: '0' };
          v_f28b6f(0);
          return true;
        }
        const v_b32680 = await v_7ef860();
        if (!v_b32680.email || v_b32680.id == null) {
          v_889fad('알림', '사용자 정보를 찾을 수 없습니다.');
          return false;
        }
        const v_6bee94 = await v_1979a1();
        if (!v_6bee94) {
          v_aa8c1c(false);
          v_889fad('알림', '검진 비용 결제를 위해 PIN이 필요합니다.');
          return false;
        }

        v_00ab04('검수 준비 중...\n잠시만 기다려 주세요.');
        v_aa8c1c(true);
        const v_f91eae = await v_079e97({
          type: v_3b27d9,
          pin: v_6bee94,
          email: v_b32680.email,
          member: Number(v_b32680.id),
        });
        if (!v_f91eae.ok) {
          v_aa8c1c(false);
          v_889fad('알림', v_f91eae.error);
          return false;
        }
        v_d81d83.current = v_f91eae.prepared;
        v_f28b6f(
          v_f91eae.prepared.needed ? v_f91eae.prepared.feeAmount : v_f91eae.prepared.feeAmount || 0,
        );
        v_aa8c1c(false);
        return true;
      } catch (v_9e86fd) {
        v_aa8c1c(false);
        v_f28b6f(0);
        v_889fad('알림', v_9e86fd?.message ?? '결제 준비에 실패했습니다.');
        return false;
      } finally {
        v_bcc2c4.current = false;
      }
    },
    [v_1979a1]
  );

  const v_97b779 = v_de06a3(
    async (v_3b27d9, v_fbf3b0): Promise<v_138ec7 | null> => {
      const v_09d858 = v_d81d83.current;
      v_d81d83.current = null;

      try {
        if (v_09d858?.needed) {
          v_00ab04('검진 비용 결제 중...\n잠시만 기다려 주세요.');
          v_aa8c1c(true);
          const v_35db80 = await v_c0a190(v_09d858, v_fbf3b0);
          v_aa8c1c(false);
          if (!v_35db80.ok) {
            v_889fad('알림', v_35db80.error);
            console.error('[checkupFee] settle', v_3b27d9, v_fbf3b0, v_35db80.error);
            return null;
          }
          if (v_35db80.data.tx_hash) {
            console.log('[checkupFee] settled', v_35db80.data.tx_hash);
          }
          return v_35db80.data;
        }

        const v_b32680 = await v_7ef860();
        if (!v_b32680.email || v_b32680.id == null) {
          throw new Error('사용자 정보를 찾을 수 없습니다.');
        }
        if (await v_f28ca8()) {
          const v_43c42e = await v_8c9ccd(v_3b27d9, v_fbf3b0, {
            requestPin: v_1979a1,
            email: v_b32680.email,
            member: Number(v_b32680.id),
          });
          return v_43c42e;
        }
        v_00ab04('검진 비용 결제 중...');
        v_aa8c1c(true);
        try {
          return await v_8c9ccd(v_3b27d9, v_fbf3b0);
        } finally {
          v_aa8c1c(false);
        }
      } catch (v_9e86fd) {
        v_aa8c1c(false);
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

  const v_909646 = v_97b779;

  const v_5adf9a = v_de06a3(() => {
    v_d81d83.current = null;
  }, []);

  const v_e63e18 = (
    <>
      <WalletV2PinPromptModal
        visible={v_7abf89}
        loading={v_c3a235}
        error={v_8a43e1}
        title="검진 비용 결제"
        onSubmit={v_27a2ae}
        onCancel={v_f82eee}
      />
      <Modal visible={v_f5ab84} transparent animationType="fade" onRequestClose={() => {}}>
        <View style={v_d81136.busyOverlay}>
          <View style={v_d81136.busyCard}>
            <ActivityIndicator size="large" color="#4F39F6" />
            <Text style={v_d81136.busyTitle}>처리 중</Text>
            <Text style={v_d81136.busyMsg}>{v_e53fb0}</Text>
          </View>
        </View>
      </Modal>
    </>
  );

  return {
    prepareBeforeCheckup: v_592553,
    settleAfterCheckup: v_97b779,
    chargeCheckupFee: v_909646,
    clearPrepared: v_5adf9a,
    pinModal: v_e63e18,
    prepareBusy: v_f5ab84,
  };
}

const v_d81136 = v_472849.create({
  busyOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  busyCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 28,
    paddingHorizontal: 24,
    alignItems: 'center',
    minWidth: 260,
    maxWidth: 320,
  },
  busyTitle: {
    marginTop: 16,
    fontSize: 17,
    fontWeight: '700',
    color: '#111',
  },
  busyMsg: {
    marginTop: 8,
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
});
