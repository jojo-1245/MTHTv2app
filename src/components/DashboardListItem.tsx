import v_a3453e, { v_a7b0d7 } from 'bapkr';
import {
  v_961e77,
  v_472849,
  v_19b633,
  v_4623af,
  v_3094a2,
  v_7e4944,
} from 'rcmrninabrnb';
import { v_dec439, v_f832ec } from 'zvyjokvuouwvifyzks';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';

export type DashboardListItemStatus = 'info' | 'success' | 'warning';

export interface DashboardListItemProps {
  title: string;
  description: string;
  meta?: string;
  badgeLabel?: string;
  status?: DashboardListItemStatus;
  iconName: v_a7b0d7<typeof v_f832ec>['name'];
  onPress?: () => void;
  style?: v_961e77<v_7e4944>;
}

const v_ef7853 = {
  info: {
    iconBg: '#F4F6FB',
    iconColor: v_1bfbd0.primary,
    badgeBg: '#EEF2FF',
    badgeColor: v_1bfbd0.primary,
  },
  success: {
    iconBg: '#E6F7F1',
    iconColor: '#1FB67C',
    badgeBg: '#DCFCE7',
    badgeColor: '#15803D',
  },
  warning: {
    iconBg: '#FFF3E0',
    iconColor: '#E26C2D',
    badgeBg: '#FFE9D5',
    badgeColor: '#C2410C',
  },
};

const DashboardListItem: v_a3453e.FC<DashboardListItemProps> = ({
  title: v_9f1622,
  description: v_6856a9,
  meta: v_ab4c96,
  badgeLabel: v_3fd4b5,
  status: v_d308b5 = 'info',
  iconName: v_c288e9,
  onPress: v_719eed,
  style: v_7fa4e4,
}) => {
  const v_73a570 = v_ef7853[v_d308b5];

  return (
    <TouchableOpacity
      activeOpacity={0.88}
      style={[v_d81136.container, v_7fa4e4]}
      onPress={v_719eed}
      accessibilityRole="button"
    >
      <View style={[v_d81136.iconWrapper, { backgroundColor: v_73a570.iconBg }]}>
        <MaterialCommunityIcons name={v_c288e9} size={24} color={v_73a570.iconColor} />
      </View>

      <View style={v_d81136.textWrapper}>
        <Text style={v_d81136.title} numberOfLines={2}>
          {v_9f1622}
        </Text>
        <Text style={v_d81136.description} numberOfLines={2}>
          {v_6856a9}
        </Text>
        <View style={v_d81136.metaRow}>
          {v_3fd4b5 ? (
            <View
              style={[
                v_d81136.badge,
                { backgroundColor: v_73a570.badgeBg, borderColor: v_73a570.badgeBg },
              ]}
            >
              <Text style={[v_d81136.badgeText, { color: v_73a570.badgeColor }]}>
                {v_3fd4b5}
              </Text>
            </View>
          ) : null}
          {v_ab4c96 ? (
            <Text style={v_d81136.meta} numberOfLines={1}>
              {v_ab4c96}
            </Text>
          ) : null}
        </View>
      </View>

      <Feather name="chevron-right" size={20} color={v_1bfbd0.secondaryText} style={v_d81136.chevron} />
    </TouchableOpacity>
  );
};

const v_d81136 = v_472849.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: v_9b1a04.medium,
    paddingVertical: v_9b1a04.medium,
    paddingHorizontal: v_9b1a04.large,
    borderRadius: 20,
    borderWidth: v_472849.hairlineWidth,
    borderColor: v_1bfbd0.border,
    backgroundColor: v_1bfbd0.white,
  },
  iconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWrapper: {
    flex: 1,
    gap: 4,
  },
  title: {
    fontSize: 16,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
  },
  description: {
    fontSize: 13,
    fontFamily: v_843035.regular,
    lineHeight: 18,
    color: v_1bfbd0.secondaryText,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: v_9b1a04.small,
    flexWrap: 'wrap',
  },
  badge: {
    borderRadius: 999,
    paddingHorizontal: v_9b1a04.small,
    paddingVertical: 4,
    borderWidth: v_472849.hairlineWidth,
  },
  badgeText: {
    fontSize: 12,
    fontFamily: v_843035.semibold,
    letterSpacing: 0.3,
  },
  meta: {
    fontSize: 12,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.secondaryText,
  },
  chevron: {
    alignSelf: 'center',
  },
});

export default v_ae275d;


