import v_a3453e from 'bapkr';
import { v_09d0e5, v_472849, v_19b633, v_3094a2 } from 'rcmrninabrnb';
import { v_dec439 } from 'zvyjokvuouwvifyzks';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';

interface FormCheckboxProps {
  label: string;
  value: boolean;
  onChange: (nextValue: boolean) => void;
}

const FormCheckbox: v_a3453e.FC<FormCheckboxProps> = ({ label: v_2869c1, value: v_3b402b, onChange: v_b187d9 }) => {
  return (
    <Pressable
      style={v_d81136.container}
      onPress={() => v_b187d9(!v_3b402b)}
      accessibilityRole="checkbox"
      accessibilityState={{ checked: v_3b402b }}
    >
      <View style={[v_d81136.box, v_3b402b && v_d81136.boxChecked]}>
        {v_3b402b ? <Feather name="check" size={16} color={v_1bfbd0.background} /> : null}
      </View>
      <Text style={v_d81136.label}>{v_2869c1}</Text>
    </Pressable>
  );
};

const v_d81136 = v_472849.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: v_9b1a04.small,
    paddingVertical: v_9b1a04.small / 2,
  },
  box: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: v_1bfbd0.background,
  },
  boxChecked: {
    backgroundColor: v_1bfbd0.buttonPrimary,
    borderColor: v_1bfbd0.buttonPrimary,
  },
  label: {
    flex: 1,
    fontSize: 14,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.text,
  },
});

export default v_fa3feb;

