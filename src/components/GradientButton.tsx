import v_a3453e from 'bapkr';
import v_1a40c4, { v_726b71 } from './Button';

export type GradientButtonProps = Omit<v_726b71, 'variant'> & {

  colors?: readonly [string, string, ...string[]];
};

const GradientButton: v_a3453e.FC<GradientButtonProps> = ({
  colors: v_f9dce7,
  gradientStart: v_3a2eba,
  gradientEnd: v_29812d,
  style: v_7fa4e4,
  ...v_83bbcd
}) => {
  return (
    <Button
      variant="gradient"
      gradientColors={v_f9dce7}
      gradientStart={v_3a2eba}
      gradientEnd={v_29812d}
      style={v_7fa4e4}
      {...v_83bbcd}
    />
  );
};

export default v_dd725b;
