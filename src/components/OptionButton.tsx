import v_a3453e from 'bapkr';
import { v_09d0e5, v_472849, v_19b633 } from 'rcmrninabrnb';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';

export interface OptionButtonProps {
  label: string;
  selected?: boolean;
  onPress?: () => void;
  flex?: number;
}

const OptionButton: v_a3453e.FC<OptionButtonProps> = ({
  label: v_2869c1,
  selected: v_587413 = false,
  onPress: v_719eed,
  flex: v_5c6564,
}) => {
  return (
    <Pressable
      style={[v_d81136.button, v_587413 && v_d81136.buttonSelected, v_5c6564 ? { flex: v_5c6564 } : null]}
      onPress={v_719eed}
    >
      <Text style={[v_d81136.label, v_587413 && v_d81136.labelSelected]}>{v_2869c1}</Text>
    </Pressable>
  );
};

const v_d81136 = v_472849.create({
  button: {
    paddingVertical: v_9b1a04.small,
    paddingHorizontal: v_9b1a04.medium,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
    backgroundColor: v_1bfbd0.background,
    marginRight: v_9b1a04.small,
    marginBottom: v_9b1a04.small,
    alignItems: 'center',
  },
  buttonSelected: {
    borderColor: v_1bfbd0.text,
    backgroundColor: '#f5f6f7',
  },
  label: {
    fontSize: 14,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
  },
  labelSelected: {
    fontFamily: v_843035.semibold,
  },
});

export default v_89c10a;

