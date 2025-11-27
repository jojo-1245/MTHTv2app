import v_a3453e, { v_a7b0d7 } from 'bapkr';
import {
  v_961e77,
  v_472849,
  v_19b633,
  v_4623af,
  v_3094a2,
  v_7e4944,
} from 'rcmrninabrnb';
import { v_dec439 } from 'zvyjokvuouwvifyzks';
import { v_e0068c } from 'vvfgtwbmdpbnvhtfbtbgudicfmpscw';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';

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
  const v_830e65 = Math.max(v_033e14.bottom, v_9b1a04.medium);

  return (
    <View style={[v_d81136.wrapper, { paddingBottom: v_830e65 }, v_4affe9]}>
      <View style={v_d81136.inner}>
        {v_4622b9.map(v_8c0b26 => {
          const v_26dce6 = v_8c0b26.key === v_1f1e84;

          return (
            <TouchableOpacity
              key={v_8c0b26.key}
              activeOpacity={0.85}
              style={v_d81136.tab}
              onPress={() => v_0c5f70?.(v_8c0b26)}
              accessibilityRole="button"
              accessibilityState={{ selected: v_26dce6 }}
            >
              <Feather
                name={v_8c0b26.icon}
                size={22}
                color={v_26dce6 ? v_1bfbd0.primary : v_1bfbd0.secondaryText}
              />
              <Text style={[v_d81136.label, v_26dce6 && v_d81136.labelActive]}>
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
    paddingHorizontal: v_9b1a04.large,
    paddingTop: v_9b1a04.medium,
    backgroundColor: 'transparent',
  },
  inner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: 780,
    alignSelf: 'center',
    backgroundColor: v_1bfbd0.background,
    borderRadius: 28,
    paddingVertical: v_9b1a04.small,
    paddingHorizontal: v_9b1a04.medium,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 10,
    marginBottom: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: v_9b1a04.small,
  },
  label: {
    fontSize: 12,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.secondaryText,
    marginTop: 4,
  },
  labelActive: {
    color: v_1bfbd0.primary,
  },
});

export default v_f4e704;


