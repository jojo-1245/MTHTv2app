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

const v_40ff0a = ['#615FFF', '#AD46FF'] as const;

export interface GradientButtonProps extends Omit<v_629153, 'style'> {
  title: string;
  leftIcon?: v_a3453e.ReactNode;
  rightIcon?: v_a3453e.ReactNode;
  fullWidth?: boolean;
  rounded?: number;

  colors?: readonly [string, string, ...string[]];

  gradientStart?: { x: number; y: number };
  gradientEnd?: { x: number; y: number };
  style?: v_961e77<v_7e4944>;
  textStyle?: v_961e77<v_5e8657>;
}

const GradientButton: v_a3453e.FC<GradientButtonProps> = ({
  title: v_9f1622,
  leftIcon: v_86ef18,
  rightIcon: v_ca3ded,
  fullWidth: v_145388 = true,
  rounded: v_f52086 = 12,
  colors: v_f9dce7 = v_40ff0a,
  gradientStart: v_3a2eba = { x: 0, y: 0 },
  gradientEnd: v_29812d = { x: 1, y: 0 },
  style: v_7fa4e4,
  textStyle: v_197d6e,
  activeOpacity: v_52c8f2 = 0.8,
  ...v_83bbcd
}) => {
  return (
    <TouchableOpacity
      activeOpacity={v_52c8f2}
      style={[v_d81136.touchable, v_145388 && v_d81136.fullWidth, { borderRadius: v_f52086 }, v_7fa4e4]}
      {...v_83bbcd}
    >
      <LinearGradient
        colors={[...v_f9dce7]}
        start={v_3a2eba}
        end={v_29812d}
        style={[v_d81136.gradient, { borderRadius: v_f52086 }]}
      >
        {v_86ef18 ? <View style={v_d81136.leftIcon}>{v_86ef18}</View> : null}
        <Text style={[v_d81136.text, v_197d6e]} numberOfLines={1}>
          {v_9f1622}
        </Text>
        {v_ca3ded ? <View style={v_d81136.rightIcon}>{v_ca3ded}</View> : null}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const v_d81136 = v_472849.create({
  touchable: {
    overflow: 'hidden',
  },
  fullWidth: {
    alignSelf: 'stretch',
  },
  gradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 14,
    paddingHorizontal: v_9b1a04.large,
  },
  text: {
    fontSize: 16,
    fontFamily: v_843035.bold,
    color: '#FFFFFF',
  },
  leftIcon: {},
  rightIcon: {},
});

export default v_dd725b;
