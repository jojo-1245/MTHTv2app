import v_a3453e, { v_df9f57, v_5ab095 } from 'bapkr';
import { v_79c4f2, v_4623af } from 'rcmrninabrnb';
import { v_dec439 } from 'zvyjokvuouwvifyzks';
import { v_772971 } from 'jmpfvteuuztnp';
import v_e775af, { v_b25f7f } from './TextField';
import { v_1bfbd0 } from '../constants';

export interface PasswordFieldProps
  extends Omit<v_b25f7f, 'secureTextEntry' | 'rightIcon'> {
  showVisibilityToggle?: boolean;
  onVisibilityChange?: (visible: boolean) => void;
  visibilityLabels?: {
    show: string;
    hide: string;
  };
}

const v_e2ca42 = v_a3453e.forwardRef<v_79c4f2, PasswordFieldProps>(
  (
    {
      showVisibilityToggle: v_753c5e = true,
      onVisibilityChange: v_355890,
      visibilityLabels: v_9128d5,
      ...v_83bbcd
    },
    v_6d4ed3,
  ) => {
    const { t: v_8d41d7 } = v_772971();
    const [v_cf55be, v_72f90e] = v_5ab095(false);

    const v_e0187d = v_9128d5 || {
      show: v_8d41d7('common.password_show'),
      hide: v_8d41d7('common.password_hide'),
    };

    const v_9ddfab = v_df9f57(
      () => <Feather name={v_cf55be ? 'eye' : 'eye-off'} size={20} color={v_1bfbd0.icon} />,
      [v_cf55be],
    );

    const v_bf58a4 = () => {
      const v_a448ad = !v_cf55be;
      v_72f90e(v_a448ad);
      v_355890?.(v_a448ad);
    };

    return (
      <TextField
        ref={v_6d4ed3}
        secureTextEntry={!v_cf55be}
        rightIcon={
          v_753c5e ? (
            <TouchableOpacity
              onPress={v_bf58a4}
              accessibilityRole="button"
              accessibilityLabel={v_cf55be ? v_e0187d.hide : v_e0187d.show}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              {v_9ddfab}
            </TouchableOpacity>
          ) : undefined
        }
        {...v_83bbcd}
      />
    );
  },
);

export default v_e2ca42;

