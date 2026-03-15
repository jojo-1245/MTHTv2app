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
import { v_f235de } from 'wjvlskvsbzsrojdbjsl';
import { v_5ade23 } from 'xbfwaaanosqvazmrqoah';
import { v_e0068c } from 'vvfgtwbmdpbnvhtfbtbgudicfmpscw';
import { v_c18c22 } from 'svuoaeceudfxfjvvpmmmchnwljywbphjgb';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';

const v_90fa17 = require('../../assets/images/robot_face.png');

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
}

const BottomNavigationBar: v_a3453e.FC<BottomNavigationBarProps> = ({
  items: v_4622b9,
  activeKey: v_1f1e84,
  onTabPress: v_0c5f70,
  containerStyle: v_4affe9,
}) => {
  const v_033e14 = v_e0068c();

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
      <View style={v_d81136.inner}>
        {v_4622b9.map(v_8c0b26 => {
          const v_26dce6 = v_8c0b26.key === v_1f1e84;
          const v_13a0ae = v_8c0b26.key === 'aihinty';
          const v_fe8fcb = v_8c0b26.key === 'wallet';
          const v_4c45ec = '#615FFF';

          return (
            <TouchableOpacity
              key={v_8c0b26.key}
              activeOpacity={0.85}
              style={[v_d81136.tab, v_13a0ae && v_d81136.tabAihinty]}
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
              ) : v_fe8fcb ? (
                <Wallet
                  size={22}
                  color={v_26dce6 ? v_4c45ec : v_1bfbd0.secondaryText}
                  strokeWidth={2}
                />
              ) : (
                <Feather
                  name={v_8c0b26.icon}
                  size={22}
                  color={v_26dce6 ? v_4c45ec : v_1bfbd0.secondaryText}
                />
              )}
              <Text
                style={[
                  v_d81136.label,
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
    backgroundColor: 'transparent',
    zIndex: 20,
    overflow: 'visible',
  },
  inner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: 780,
    alignSelf: 'center',
    backgroundColor: v_1bfbd0.white,
    paddingHorizontal: v_9b1a04.medium,
    borderTopWidth: 1,
    borderTopColor: "#F3F4F6",
    overflow: 'visible',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
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

