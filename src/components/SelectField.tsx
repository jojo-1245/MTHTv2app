import v_a3453e, { v_5ab095 } from 'bapkr';
import {
  v_aa7413,
  v_122070,
  v_961e77,
  v_472849,
  v_19b633,
  v_4623af,
  v_3094a2,
  v_7e4944,
} from 'rcmrninabrnb';
import { v_dec439 } from 'zvyjokvuouwvifyzks';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectFieldProps {
  label?: string;
  value?: string;
  placeholder?: string;
  onPress?: () => void;
  containerStyle?: v_961e77<v_7e4944>;
  disabled?: boolean;
  options?: SelectOption[];
  onValueChange?: (value: string) => void;
  maxDropdownHeight?: number;
}

const v_038b88 = 48;

const SelectField: v_a3453e.FC<SelectFieldProps> = ({
  label: v_2869c1,
  value: v_3b402b,
  placeholder: v_c6baea,
  onPress: v_719eed,
  containerStyle: v_4affe9,
  disabled: v_4a6533,
  options: v_b36f96,
  onValueChange: v_cc2531,
  maxDropdownHeight: v_83ce6e,
}) => {
  const v_b2926d = v_3b402b ?? v_c6baea ?? '';
  const v_87a4e3 = !v_3b402b;
  const [v_c403c7, v_f099fd] = v_5ab095(false);
  const v_9de936 = Array.isArray(v_b36f96) && v_b36f96.length > 0;
  const v_79040b = v_83ce6e ?? 360;

  const v_5ba0f2 = () => {
    if (v_4a6533) {
      return;
    }

    if (v_9de936 && v_cc2531) {
      v_f099fd(true);
      return;
    }

    v_719eed?.();
  };

  const v_6121dc = (v_cd4ae3) => {
    v_cc2531?.(v_cd4ae3);
    v_f099fd(false);
  };

  return (
    <View style={[v_d81136.container, v_4affe9]}>
      {v_2869c1 ? <Text style={v_d81136.label}>{v_2869c1}</Text> : null}
      <TouchableOpacity
        style={v_d81136.field}
        onPress={v_5ba0f2}
        activeOpacity={0.85}
        disabled={v_4a6533}
      >
        <Text style={[v_d81136.valueText, v_87a4e3 && v_d81136.placeholderText]}>
          {v_b2926d}
        </Text>
        <Feather
          name="chevron-down"
          size={18}
          color={v_1bfbd0.secondaryText}
          style={v_c403c7 ? v_d81136.iconOpen : undefined}
        />
      </TouchableOpacity>

      {v_c403c7 && v_9de936 ? (
        <Modal transparent visible={v_c403c7} onRequestClose={() => v_f099fd(false)}>
          <View style={v_d81136.modalRoot}>
            <TouchableOpacity style={v_d81136.backdrop} onPress={() => v_f099fd(false)} />
            <View style={v_d81136.bottomSheet}>
              <View style={v_d81136.sheetHandle} />
              <Text style={v_d81136.sheetTitle}>{v_2869c1 ?? 'Select'}</Text>
              <ScrollView
                style={[v_d81136.sheetContent, { maxHeight: v_79040b }]}
                contentContainerStyle={v_d81136.sheetContentInner}
                showsVerticalScrollIndicator
              >
                {v_b36f96!.map(v_0bd920 => (
                  <TouchableOpacity
                    key={v_0bd920.value}
                    style={v_d81136.optionRow}
                    activeOpacity={0.85}
                    onPress={() => v_6121dc(v_0bd920.value)}
                  >
                    <Text
                      style={[
                        v_d81136.optionText,
                        v_3b402b === v_0bd920.value && v_d81136.optionTextSelected,
                      ]}
                    >
                      {v_0bd920.label}
                    </Text>
                    {v_3b402b === v_0bd920.value ? (
                      <Feather name="check" size={16} color={v_1bfbd0.primary} />
                    ) : null}
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
        </Modal>
      ) : null}
    </View>
  );
};

const v_d81136 = v_472849.create({
  container: {
    alignSelf: 'stretch',
  },
  label: {
    fontSize: 14,
    color: v_1bfbd0.mutedText,
    marginBottom: v_9b1a04.small / 2,
    fontFamily: v_843035.medium,
  },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
    backgroundColor: v_1bfbd0.white,
    paddingHorizontal: v_9b1a04.medium,
    minHeight: 64,
    borderRadius: 10,
  },
  valueText: {
    fontSize: 16,
    color: v_1bfbd0.text,
    fontFamily: v_843035.regular,
    lineHeight: 24,
  },
  placeholderText: {
    color: v_1bfbd0.placeholder,
  },
  modalRoot: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  backdrop: {
    ...v_472849.absoluteFillObject,
  },
  bottomSheet: {
    backgroundColor: v_1bfbd0.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: v_9b1a04.large,
    paddingTop: v_9b1a04.medium,
    paddingBottom: v_9b1a04.xlarge,
  },
  sheetHandle: {
    width: 48,
    height: 4,
    borderRadius: 4,
    backgroundColor: v_1bfbd0.border,
    alignSelf: 'center',
    marginBottom: v_9b1a04.medium,
  },
  sheetTitle: {
    fontSize: 16,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
    textAlign: 'center',
    marginBottom: v_9b1a04.medium,
  },
  sheetContent: {
    marginBottom: v_9b1a04.medium,
  },
  sheetContentInner: {
    gap: 4,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: v_9b1a04.medium,
    paddingVertical: v_9b1a04.small + 2,
    borderBottomWidth: v_472849.hairlineWidth,
    borderBottomColor: v_1bfbd0.border,
  },
  optionText: {
    fontSize: 15,
    color: v_1bfbd0.text,
    fontFamily: v_843035.medium,
  },
  optionTextSelected: {
    color: v_1bfbd0.primary,
  },
  iconOpen: {
    transform: [{ rotate: '180deg' }],
  },
});

export default v_d56c0a;


