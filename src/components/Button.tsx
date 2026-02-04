import v_a3453e from 'bapkr';
import {
  v_961e77,
  v_472849,
  v_19b633,
  v_5e8657,
  v_4623af,
  v_629153,
  v_3094a2,
  v_7e4944,
} from 'rcmrninabrnb';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';

export type ButtonVariant = 'filled' | 'outline';

export interface ButtonProps extends v_629153 {
  title: string;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  leftIcon?: v_a3453e.ReactNode;
  rightIcon?: v_a3453e.ReactNode;
  rounded?: number;
  textStyle?: v_961e77<v_5e8657>;
}

const Button: v_a3453e.FC<ButtonProps> = ({
  title: v_9f1622,
  variant: v_46e192 = 'filled',
  fullWidth: v_145388 = true,
  leftIcon: v_86ef18,
  rightIcon: v_ca3ded,
  rounded: v_f52086 = 10,
  style: v_7fa4e4,
  textStyle: v_197d6e,
  disabled: v_4a6533,
  ...v_83bbcd
}) => {
  const v_1a6f6d = v_4a6533 === true;
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={[
        v_d81136.base,
        v_46e192 === 'filled' ? v_d81136.filled : v_d81136.outline,
        v_145388 && v_d81136.fullWidth,
        { borderRadius: v_f52086 },
        v_7fa4e4,
        v_1a6f6d && v_d81136.disabled,
      ]}
      disabled={v_4a6533}
      {...v_83bbcd}
    >
      {v_86ef18 ? <View style={v_d81136.leftIcon}>{v_86ef18}</View> : null}
      <Text
        style={[
          v_d81136.text,
          v_46e192 === 'filled' ? v_d81136.textFilled : v_d81136.textOutline,
          v_197d6e,
          v_1a6f6d && v_d81136.textDisabled,
        ]}
        numberOfLines={1}
      >
        {v_9f1622}
      </Text>
      {v_ca3ded ? <View style={v_d81136.rightIcon}>{v_ca3ded}</View> : null}
    </TouchableOpacity>
  );
};

const v_d81136 = v_472849.create({
  base: {
    minHeight: 56,
    paddingVertical: v_9b1a04.medium,
    paddingHorizontal: v_9b1a04.large,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullWidth: {
    alignSelf: 'stretch',
  },
  filled: {
    backgroundColor: v_1bfbd0.buttonPrimary,
    borderColor: v_1bfbd0.buttonPrimary,
  },
  outline: {
    backgroundColor: v_1bfbd0.background,
    borderColor: v_1bfbd0.border,
  },
  disabled: {
    backgroundColor: '#9CA3AF',
    borderColor: '#9CA3AF',
  },
  text: {
    flexShrink: 1,
    fontSize: 16,
    fontFamily: v_843035.semibold,
  },
  textFilled: {
    color: v_1bfbd0.background,
  },
  textOutline: {
    color: v_1bfbd0.text,
  },
  textDisabled: {
    color: '#FFFFFF',
  },
  leftIcon: {
    marginRight: v_9b1a04.small,
  },
  rightIcon: {
    marginLeft: v_9b1a04.small,
  },
});

export default v_1a40c4;

