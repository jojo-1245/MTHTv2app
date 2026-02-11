import v_a3453e from 'bapkr';
import { v_961e77, v_472849, v_19b633, v_79c4f2, v_b60ea2, v_3094a2, v_7e4944 } from 'rcmrninabrnb';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';

export interface FormFieldProps extends v_b60ea2 {
  label?: string;
  containerStyle?: v_961e77<v_7e4944>;
  rightAccessory?: v_a3453e.ReactNode;
}

export const FormField: v_a3453e.FC<FormFieldProps> = ({
  label: v_2869c1,
  containerStyle: v_4affe9,
  rightAccessory: v_de8f73,
  style: v_7fa4e4,
  ...v_4cefcf
}) => {
  return (
    <View style={[v_d81136.container, v_4affe9]}>
      {v_2869c1 ? <Text style={v_d81136.label}>{v_2869c1}</Text> : null}
      <View style={v_d81136.inputWrapper}>
        <TextInput
          style={[v_d81136.input, v_7fa4e4]}
          placeholderTextColor={v_1bfbd0.placeholder}
          {...v_4cefcf}
        />
        {v_de8f73 ? <View style={v_d81136.rightAccessory}>{v_de8f73}</View> : null}
      </View>
    </View>
  );
};

const v_d81136 = v_472849.create({
  container: {
    marginBottom: v_9b1a04.medium,
  },
  label: {
    fontSize: 14,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.mutedText,
    marginBottom: v_9b1a04.small,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
    borderRadius: 12,
    backgroundColor: v_1bfbd0.white,
    paddingHorizontal: v_9b1a04.medium,
    minHeight: 48,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.text,
    paddingVertical: v_9b1a04.small,
  },
  rightAccessory: {
    marginLeft: v_9b1a04.small,
  },
});

export default v_368e80;


