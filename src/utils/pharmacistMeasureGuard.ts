import type { v_75de9d } from 'zqqvxke';
import type { v_d22b23 } from '../context/PharmacistGuestContext';
import { v_2e1952 } from './pharmacyRecordAdapter';
import { v_889fad } from '../components/AlertHost';

export function v_706488(params: {
  selectedAccountId: string;
  verifiedGuest: v_d22b23 | null;
  t: v_75de9d;
  onGoVerify: () => void;
}): boolean {
  const v_610eb5 = v_2e1952(v_24baff.selectedAccountId);
  if (!v_610eb5) {
    v_889fad(
      v_24baff.t('pharmacist.guest_auth.required_title'),
      v_24baff.t('pharmacist.visitor_list.empty'),
      [{ text: v_24baff.t('common.confirm') }]
    );
    return false;
  }
  if (!v_24baff.verifiedGuest || v_24baff.verifiedGuest.visitorId !== v_610eb5) {
    v_889fad(
      v_24baff.t('pharmacist.guest_auth.required_title'),
      v_24baff.t('pharmacist.guest_auth.measure_reauth_message'),
      [
        { text: v_24baff.t('common.cancel'), style: 'cancel' },
        { text: v_24baff.t('pharmacist.guest_auth.go_verify'), onPress: v_24baff.onGoVerify },
      ]
    );
    return false;
  }
  return true;
}
