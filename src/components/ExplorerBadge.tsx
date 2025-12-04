import v_a3453e from 'bapkr';
import { v_cf9c33, v_07a341, v_472849, v_19b633, v_3094a2 } from 'rcmrninabrnb';
import { v_843035, v_9b1a04 } from '../constants';

export interface ExplorerBadgeProps {
  label: string;
  caption?: string;
  iconSource?: v_07a341;
  compact?: boolean;
}

export const ExplorerBadge: v_a3453e.FC<ExplorerBadgeProps> = ({
  label: v_2869c1,
  caption: v_6044a8,
  iconSource: v_c1dd95,
  compact: v_c22a7a = false,
}) => {
  return (
    <View style={[v_d81136.container, v_c22a7a && v_d81136.compact]}>
      {v_c1dd95 ? (
        <Image source={v_c1dd95} style={[v_d81136.icon, v_c22a7a && v_d81136.iconCompact]} resizeMode="contain" />
      ) : null}
      <View style={v_d81136.textContainer}>
        <Text style={[v_d81136.label, v_c22a7a && v_d81136.labelCompact]}>{v_2869c1}</Text>
        {v_6044a8 ? (
          <Text style={[v_d81136.caption, v_c22a7a && v_d81136.captionCompact]}>{v_6044a8}</Text>
        ) : null}
      </View>
    </View>
  );
};

const v_d81136 = v_472849.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 8,
  },
  compact: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    gap: 6,
  },
  icon: {
    width: 24,
    height: 24,
  },
  iconCompact: {
    width: 20,
    height: 20,
  },
  textContainer: {
    gap: 2,
  },
  label: {
    fontSize: 14,
    fontFamily: v_843035.semibold,
    color: '#1a2e35',
  },
  labelCompact: {
    fontSize: 12,
  },
  caption: {
    fontSize: 11,
    fontFamily: v_843035.regular,
    color: '#747474',
  },
  captionCompact: {
    fontSize: 10,
  },
});

export default v_660356;


