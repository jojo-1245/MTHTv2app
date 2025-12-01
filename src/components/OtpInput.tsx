import v_a3453e, { v_df9f57, v_e662ae, v_5ab095 } from 'bapkr';
import { v_09d0e5, v_472849, v_19b633, v_79c4f2, v_3094a2 } from 'rcmrninabrnb';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';

interface OtpInputProps {
  length?: number;
  value?: string;
  onChange?: (code: string) => void;
  showError?: boolean;
}

const OtpInput: v_a3453e.FC<OtpInputProps> = ({
  length: v_724489 = 6,
  value: v_3b402b = '',
  onChange: v_b187d9,
  showError: v_f74c59,
}) => {
  const [v_1036a8, v_c17726] = v_5ab095(v_3b402b);
  const v_32f473 = v_e662ae<v_79c4f2>(null);

  const v_e6d4a6 = v_df9f57(() => {
    const v_8b8b16 = v_1036a8.padEnd(v_724489, ' ');
    return v_8b8b16.split('').slice(0, v_724489);
  }, [v_1036a8, v_724489]);

  const v_4090ac = (v_9b6134) => {
    const v_a448ad = v_9b6134.replace(/[^0-9]/g, '').slice(0, v_724489);
    v_c17726(v_a448ad);
    v_b187d9?.(v_a448ad);
  };

  const v_0cc28c = Math.min(v_1036a8.length, v_724489 - 1);

  return (
    <View style={v_d81136.wrapper}>
      <Pressable
        style={v_d81136.row}
        onPress={() => {
          v_32f473.current?.focus();
        }}
        accessible
        accessibilityRole="text"
        accessibilityLabel="인증 코드 입력"
      >
        {v_e6d4a6.map((v_620da0, v_a56041) => {
          const v_26dce6 = v_a56041 === v_0cc28c && v_1036a8.length !== v_724489;
          return (
            <View
              key={`${v_a56041}`}
              style={[
                v_d81136.box,
                v_26dce6 && v_d81136.boxActive,
                v_f74c59 && v_a56041 === v_0cc28c && v_d81136.boxError,
              ]}
            >
              <Text style={v_d81136.digit}>{v_620da0.trim() ? v_620da0 : ' '}</Text>
            </View>
          );
        })}
      </Pressable>
      <TextInput
        ref={v_32f473}
        value={v_1036a8}
        onChangeText={v_4090ac}
        keyboardType="number-pad"
        inputMode="numeric"
        maxLength={v_724489}
        style={v_d81136.hiddenInput}
        autoFocus
        showSoftInputOnFocus
        caretHidden
        autoComplete="off"
        autoCorrect={false}
        importantForAutofill="no"
        keyboardAppearance="default"
        blurOnSubmit={false}
      />
    </View>
  );
};

const v_d81136 = v_472849.create({
  wrapper: {
    width: '100%',
    marginBottom: v_9b1a04.large,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    width: 48,
    height: 56,
    borderRadius: v_9b1a04.small,
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: v_1bfbd0.background,
    marginHorizontal: 4,
  },
  boxActive: {
    borderColor: v_1bfbd0.text,
  },
  boxError: {
    borderColor: v_1bfbd0.error,
  },
  digit: {
    fontSize: 20,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
  },
  hiddenInput: {
    opacity: 0.01,
    position: 'absolute',
    left: 0,
    top: 0,
    height: 40,
    width: '100%',
  },
});

export default v_5427ed;

