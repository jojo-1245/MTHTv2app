

import v_a3453e, { v_de06a3, v_c4deb2, v_5ab095 } from 'bapkr';
import { v_19b633, v_472849 } from 'rcmrninabrnb';
import { v_c2fdd1 } from './wallet/Dialog';
import { v_1bfbd0, v_843035 } from '../constants';
import v_9c213b from '../i18n';

export type AlertButton = {
  text: string;
  onPress?: () => void;
  style?: 'default' | 'cancel' | 'destructive';
};

interface AlertRequest {
  id: number;
  title?: string;
  message?: string;
  buttons: AlertButton[];
}

let v_054741 = 1;
let v_cf8cab = null;
const v_200036 = [];

function v_ffbb27(v_309144) {
  if (v_cf8cab) v_cf8cab(v_309144);
  else v_200036.push(v_309144); 
}

export interface AlertOptions {
  cancelable?: boolean;
  onDismiss?: () => void;
}

export function v_889fad(v_9f1622, v_a8cd21, v_3d694a, v_bff8d4) {
  const v_5798ff = v_3d694a && v_3d694a.length ? v_3d694a : [{ text: v_9c213b.t('common.confirm') || '확인' }];
  v_ffbb27({ id: v_054741++, title: v_9f1622, message: v_a8cd21, buttons: v_5798ff });
}

export function v_d8432d(v_328259): Promise<boolean> {
  return new Promise((v_6f7712) => {
    v_ffbb27({
      id: v_054741++,
      title: v_328259.title,
      message: v_328259.message,
      buttons: [
        { text: v_328259.cancelText ?? (v_9c213b.t('common.cancel') || '취소'), style: 'cancel', onPress: () => v_6f7712(false) },
        {
          text: v_328259.confirmText ?? (v_9c213b.t('common.confirm') || '확인'),
          style: v_328259.destructive ? 'destructive' : 'default',
          onPress: () => v_6f7712(true),
        },
      ],
    });
  });
}

export function v_4f2fc7() {
  const [v_e45ed0, v_a36450] = v_5ab095<AlertRequest[]>([]);

  v_c4deb2(() => {
    v_cf8cab = (v_309144) => v_a36450((v_ab6401) => [...v_ab6401, v_309144]);
    if (v_200036.length) {
      v_a36450((v_ab6401) => [...v_ab6401, ...v_200036]);
      v_200036.length = 0;
    }
    return () => {
      v_cf8cab = null;
    };
  }, []);

  const v_275ccd = v_e45ed0[0];
  const v_f13980 = v_de06a3((v_8955f9) => {
    v_a36450((v_ab6401) => v_ab6401.slice(1));
    try {
      v_8955f9?.onPress?.();
    } catch (v_9e86fd) {
      console.warn('[AlertHost] button onPress error', v_9e86fd);
    }
  }, []);

  if (!v_275ccd) return null;
  const v_50ddf4 = v_275ccd.buttons.find((v_148ff6) => v_148ff6.style === 'cancel');

  return (
    <Dialog
      visible
      title={v_275ccd.title}
      onClose={() => v_f13980(v_50ddf4)}
      actions={v_275ccd.buttons.map((v_148ff6) => ({
        label: v_148ff6.text,
        variant: v_148ff6.style === 'cancel' ? 'secondary' : 'primary',
        onPress: () => v_f13980(v_148ff6),
      }))}
    >
      {v_275ccd.message ? <Text style={v_d81136.message}>{v_275ccd.message}</Text> : null}
    </Dialog>
  );
}

const v_d81136 = v_472849.create({
  message: { fontSize: 14, fontFamily: v_843035.regular, color: v_1bfbd0.secondaryText, textAlign: 'center', lineHeight: 20 },
});

export default v_4f2fc7;
