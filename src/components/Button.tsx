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
import { v_5ade23 } from 'xbfwaaanosqvazmrqoah';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';

export type ButtonVariant = 'filled' | 'outline' | 'gradient';

const v_7f87ca = ['#615FFF', '#AD46FF'] as const;

export interface ButtonProps extends v_629153 {
  title: string;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  leftIcon?: v_a3453e.ReactNode;
  rightIcon?: v_a3453e.ReactNode;
  rounded?: number;
  textStyle?: v_961e77<v_5e8657>;

  gradientColors?: readonly [string, string, ...string[]];

  gradientStart?: { x: number; y: number };
  gradientEnd?: { x: number; y: number };
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
  gradientColors: v_291db0 = v_7f87ca,
  gradientStart: v_3a2eba = { x: 0, y: 0 },
  gradientEnd: v_29812d = { x: 1, y: 0 },
  ...v_83bbcd
}) => {
  const v_1a6f6d = v_4a6533 === true;
  const v_15c15b = v_46e192 === 'gradient';

  const v_b43b74 = (
    <>
      {v_86ef18 ? <View style={v_d81136.leftIcon}>{v_86ef18}</View> : null}
      <Text
        style={[
          v_d81136.text,
          v_46e192 === 'filled' || v_15c15b ? v_d81136.textFilled : v_d81136.textOutline,
          v_197d6e,
          v_1a6f6d && v_d81136.textDisabled,
        ]}
        numberOfLines={1}
      >
        {v_9f1622}
      </Text>
      {v_ca3ded ? <View style={v_d81136.rightIcon}>{v_ca3ded}</View> : null}
    </>
  );

  if (v_15c15b) {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          v_d81136.base,
          v_d81136.gradientTouchable,
          v_145388 && v_d81136.fullWidth,
          { borderRadius: v_f52086 },
          v_7fa4e4,
          v_1a6f6d && v_d81136.disabled,
        ]}
        disabled={v_4a6533}
        {...v_83bbcd}
      >
        <LinearGradient
          colors={v_1a6f6d ? ['#9CA3AF', '#9CA3AF'] : [...v_291db0]}
          start={v_3a2eba}
          end={v_29812d}
          style={[v_d81136.gradientInner, { borderRadius: v_f52086 }]}
        >
          {v_b43b74}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  const v_55a5a4 = v_46e192 === 'outline';

  if (v_55a5a4) {
    return (
      <View style={[v_d81136.outlineWrapper, v_145388 && v_d81136.fullWidth]}>
        <TouchableOpacity
          activeOpacity={0.85}
          style={[
            v_d81136.base,
            v_d81136.outlineTouchable,
            v_145388 && v_d81136.fullWidth,
            { borderRadius: v_f52086 },
            v_7fa4e4,
            v_1a6f6d && v_d81136.disabled,
          ]}
          disabled={v_4a6533}
          {...v_83bbcd}
        >
          {v_b43b74}
        </TouchableOpacity>
        <View
          style={[
            v_d81136.outlineBorderOverlay,
            { borderRadius: v_f52086, borderColor: v_1a6f6d ? '#9CA3AF' : v_1bfbd0.border },
          ]}
          pointerEvents="none"
        />
      </View>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={[
        v_d81136.base,
        v_d81136.filled,
        v_145388 && v_d81136.fullWidth,
        { borderRadius: v_f52086 },
        v_7fa4e4,
        v_1a6f6d && v_d81136.disabled,
      ]}
      disabled={v_4a6533}
      {...v_83bbcd}
    >
      {v_b43b74}
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
  gradientTouchable: {
    overflow: 'hidden',
    borderWidth: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  gradientInner: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: v_9b1a04.medium,
    paddingHorizontal: v_9b1a04.large,
  },
  fullWidth: {
    alignSelf: 'stretch',
  },
  filled: {
    backgroundColor: v_1bfbd0.buttonPrimary,
    borderColor: v_1bfbd0.buttonPrimary,
    borderWidth: 0, 
  },
  outlineWrapper: {
    minHeight: 56,
  },
  outlineTouchable: {
    backgroundColor: v_1bfbd0.background,
    borderWidth: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  outlineBorderOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderWidth: 1,
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

