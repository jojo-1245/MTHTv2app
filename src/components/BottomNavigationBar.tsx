import v_a3453e, { v_a7b0d7 } from 'bapkr';
import {
  v_cf9c33,
  v_326be8,
  v_961e77,
  v_472849,
  v_19b633,
  v_4623af,
  v_3094a2,
  v_7e4944,
} from 'rcmrninabrnb';
import { v_dec439 } from 'zvyjokvuouwvifyzks';
import { v_5ade23 } from 'xbfwaaanosqvazmrqoah';
import { v_e0068c } from 'vvfgtwbmdpbnvhtfbtbgudicfmpscw';
import { v_c18c22 } from 'svuoaeceudfxfjvvpmmmchnwljywbphjgb';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';
import { v_af2c88, v_d91974 } from '../utils/tabletLayout';

const v_90fa17 = require('../../assets/images/robot_face.png');
const v_96cb41 = require('../../assets/images/symbol.png');

export interface BottomNavigationItem {
  key: string;
  label: string;
  icon: v_a7b0d7<typeof v_dec439>['name'];
  route?: string;
}

export interface BottomNavigationBarProps {
  items: BottomNavigationItem[];
  activeKey?: string;
  onTabPress?: (item: BottomNavigationItem) => void;
  containerStyle?: v_961e77<v_7e4944>;

  homepageMode?: boolean;

  variant?: 'default' | 'tablet';
}

const BottomNavigationBar: v_a3453e.FC<BottomNavigationBarProps> = ({
  items: v_4622b9,
  activeKey: v_1f1e84,
  onTabPress: v_0c5f70,
  containerStyle: v_4affe9,
  homepageMode: v_695971 = false,
  variant: v_46e192 = 'default',
}) => {
  const v_033e14 = v_e0068c();
  const { isLandscape: v_5768e8, isTablet: v_76eb7f, bottomNavMaxWidth: v_88dc6e } = v_d91974();
  const v_a9fd9a = v_46e192 === 'tablet';
  const v_6fb2d1 = v_a9fd9a ? v_af2c88(22, v_5768e8 ? 24 : 26) : 22;
  const v_b3bcea = v_a9fd9a ? v_af2c88(12, v_5768e8 ? 13 : 14) : 12;
  const v_e54c50 = v_a9fd9a
    ? v_5768e8
      ? 8
      : v_af2c88(v_9b1a04.small, 12)
    : v_9b1a04.small;

  const v_f9771e = v_c18c22(0);

  const v_acf836 =
    v_326be8.OS === 'ios'
      ? v_033e14.bottom
      : Math.max(v_f9771e, v_033e14.bottom);

  const v_86fc47 = 0;
  const v_f41ebf = 0;
  const v_cebf7c = v_acf836 + v_86fc47 + v_f41ebf;

  return (
    <View style={[v_d81136.wrapper, v_4affe9]}>
      <View
        style={[
          v_d81136.inner,
          {
            maxWidth: v_76eb7f ? v_88dc6e : 780,
            paddingHorizontal: v_76eb7f && v_5768e8 ? 24 : v_9b1a04.medium,
          },
        ]}
      >
        {v_4622b9.map(v_8c0b26 => {
          const v_26dce6 = v_8c0b26.key === v_1f1e84;
          const v_13a0ae = v_8c0b26.key === 'aihinty';
          const v_fe8fcb = v_8c0b26.key === 'wallet';
          const v_4c45ec = '#615FFF';

          return (
            <TouchableOpacity
              key={v_8c0b26.key}
              testID={`bottom-nav-${v_8c0b26.key}`}
              activeOpacity={0.85}
              style={[v_d81136.tab, { paddingVertical: v_e54c50 }, v_13a0ae && v_d81136.tabAihinty]}
              onPress={() => v_0c5f70?.(v_8c0b26)}
              accessibilityRole="button"
              accessibilityState={{ selected: v_26dce6 }}
            >
              {v_13a0ae ? (
                <View style={v_d81136.aihintyPillWrapper}>
                  <LinearGradient
                    colors={['#615FFF', '#AD46FF']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={v_472849.absoluteFill}
                  />
                  <View style={v_d81136.aihintyPillInner}>
                    <Image source={v_90fa17} style={v_d81136.aihintyRobotIcon} resizeMode="contain" />
                  </View>
                </View>
              ) : v_fe8fcb && v_695971 ? (
                <Image
                  source={v_96cb41}
                  style={{ width: 22, height: 22, opacity: v_26dce6 ? 1 : 0.5 }}
                  resizeMode="contain"
                />
              ) : (
                <Feather
                  name={v_8c0b26.icon}
                  size={v_6fb2d1}
                  color={v_26dce6 ? v_4c45ec : v_1bfbd0.secondaryText}
                />
              )}
              <Text
                style={[
                  v_d81136.label,
                  { fontSize: v_b3bcea },
                  v_26dce6 && v_d81136.labelActive,
                  v_13a0ae && v_26dce6 && v_d81136.labelAihintyActive,
                ]}
              >
                {v_8c0b26.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const v_d81136 = v_472849.create({
  wrapper: {
    width: '100%',
    alignSelf: 'stretch',
    backgroundColor: v_1bfbd0.white,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    zIndex: 20,
    overflow: 'visible',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 4,
  },
  inner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: v_9b1a04.medium,
    overflow: 'visible',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: v_9b1a04.small,
  },
  tabAihinty: {
    alignItems: 'center',
    overflow: 'visible',
  },
  aihintyPillWrapper: {
    width: 48,
    height: 44,
    borderRadius: 16,
    overflow: 'hidden',
    marginTop: -14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
    position: 'relative',
    zIndex: 10,
  },
  aihintyPillInner: {
    ...v_472849.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  aihintyRobotIcon: {
    width: 32,
    height: 32,
  },
  label: {
    fontSize: 12,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.secondaryText,
    marginTop: 4,
  },
  labelActive: {
    color: '#615FFF',
  },
  labelAihintyActive: {
    color: '#615FFF',
  },
});

export default v_f4e704;

