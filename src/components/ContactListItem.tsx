import v_a3453e from 'bapkr';
import {
  v_cf9c33,
  v_07a341,
  v_961e77,
  v_472849,
  v_19b633,
  v_4623af,
  v_3094a2,
  v_7e4944,
} from 'rcmrninabrnb';
import { v_dec439 } from 'zvyjokvuouwvifyzks';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';

export interface ContactListItemProps {
  name: string;
  relation: string;
  avatarSource?: v_07a341;
  placeholderColor?: string;
  onPressVideo?: () => void;
  containerStyle?: v_961e77<v_7e4944>;
}

const ContactListItem: v_a3453e.FC<ContactListItemProps> = ({
  name: v_1833e7,
  relation: v_dd8af0,
  avatarSource: v_1f6429,
  placeholderColor: v_eb3819 = '#E1E8EF',
  onPressVideo: v_7b7dff,
  containerStyle: v_4affe9,
}) => {
  return (
    <View style={[v_d81136.container, v_4affe9]}>
      {v_1f6429 ? (
        <Image source={v_1f6429} style={v_d81136.avatar} resizeMode="cover" />
      ) : (
        <View style={[v_d81136.avatar, v_d81136.avatarPlaceholder, { backgroundColor: v_eb3819 }]} />
      )}

      <View style={v_d81136.textWrapper}>
        <Text style={v_d81136.name}>{v_1833e7}</Text>
        <Text style={v_d81136.relation}>{v_dd8af0}</Text>
      </View>

      <TouchableOpacity
        onPress={v_7b7dff}
        style={v_d81136.iconButton}
        activeOpacity={0.85}
        accessibilityRole="button"
      >
        <Feather name="video" size={22} color={v_1bfbd0.text} />
      </TouchableOpacity>
    </View>
  );
};

const v_d81136 = v_472849.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: v_9b1a04.medium,
    paddingHorizontal: v_9b1a04.medium,
    borderRadius: 16,
    backgroundColor: v_1bfbd0.white,
    borderWidth: v_472849.hairlineWidth,
    borderColor: '#EEF1F6',
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  avatarPlaceholder: {
    borderWidth: v_472849.hairlineWidth,
    borderColor: '#E4E4E7',
  },
  textWrapper: {
    flex: 1,
    marginLeft: v_9b1a04.medium,
    gap: 4,
  },
  name: {
    fontSize: 16,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
  },
  relation: {
    fontSize: 13,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    borderWidth: v_472849.hairlineWidth,
    borderColor: '#E2E6EF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default v_c92f00;


