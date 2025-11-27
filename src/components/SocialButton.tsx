import v_a3453e from 'bapkr';
import {
  v_472849,
  v_19b633,
  v_4623af,
  v_629153,
  v_3094a2,
} from 'rcmrninabrnb';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';

export type SocialButtonVariant = 'default' | 'pill';

export interface SocialButtonProps extends v_629153 {
  title: string;
  icon: v_a3453e.ReactNode;
  variant?: SocialButtonVariant;
}

const SocialButton: v_a3453e.FC<SocialButtonProps> = ({
  title: v_9f1622,
  icon: v_9ddfab,
  variant: v_46e192 = 'default',
  style: v_7fa4e4,
  ...v_83bbcd
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={[
        v_d81136.base,
        v_46e192 === 'pill' ? v_d81136.pill : v_d81136.default,
        v_7fa4e4,
      ]}
      {...v_83bbcd}
    >
      <View style={v_d81136.iconWrapper}>{v_9ddfab}</View>
      <Text style={v_d81136.text}>{v_9f1622}</Text>
    </TouchableOpacity>
  );
};

const v_d81136 = v_472849.create({
  base: {
    minHeight: 56,
    paddingHorizontal: v_9b1a04.large,
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
    backgroundColor: v_1bfbd0.background,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  default: {
    borderRadius: 10,
  },
  pill: {
    borderRadius: 28,
  },
  iconWrapper: {
    marginRight: v_9b1a04.small,
  },
  text: {
    fontSize: 14,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
  },
});

export default v_f622a6;

