import v_a3453e from 'bapkr';
import { v_472849 } from 'rcmrninabrnb';
import v_1a40c4, { v_726b71 } from './Button';
import { v_1bfbd0 } from '../constants';

export type PrimaryButtonProps = Omit<v_726b71, 'variant'>;

const PrimaryButton: v_a3453e.FC<PrimaryButtonProps> = ({
  style: v_7fa4e4,
  textStyle: v_197d6e,
  ...v_83bbcd
}) => {
  return (
    <Button
      variant="filled"
      style={[v_d81136.button, v_7fa4e4]}
      textStyle={[v_d81136.text, v_197d6e]}
      {...v_83bbcd}
    />
  );
};

const v_d81136 = v_472849.create({
  button: {
    backgroundColor: v_1bfbd0.buttonPrimary,
    borderColor: v_1bfbd0.buttonPrimary,
  },
  text: {
    color: v_1bfbd0.background,
  },
});

export default v_cb41de;

