import v_a3453e from 'bapkr';
import { v_79c4f2 } from 'rcmrninabrnb';
import { v_dec439 } from 'zvyjokvuouwvifyzks';
import v_e775af, { v_b25f7f } from './TextField';
import { v_1bfbd0 } from '../constants';

export interface SearchFieldProps
  extends Omit<v_b25f7f, 'label' | 'leftIcon'> {
  iconColor?: string;
}

const v_f68dda = v_a3453e.forwardRef<v_79c4f2, SearchFieldProps>(
  ({ placeholder: v_c6baea = 'Search', iconColor: v_ef160b = v_1bfbd0.placeholder, ...v_83bbcd }, v_6d4ed3) => {
    return (
      <TextField
        ref={v_6d4ed3}
        placeholder={v_c6baea}
        leftIcon={<Feather name="search" size={18} color={v_ef160b} />}
        {...v_83bbcd}
      />
    );
  },
);

export default v_f68dda;

