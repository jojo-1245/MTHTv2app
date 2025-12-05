import v_a3453e from 'bapkr';
import { v_472849, v_19b633, v_4623af, v_3094a2, v_7e4944 } from 'rcmrninabrnb';
import { v_25515d } from 'zvyjokvuouwvifyzks';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';

interface CustomNumberPadProps {
  onPress: (value: string) => void;
  onDelete: () => void;
  style?: v_7e4944;
}

const CustomNumberPad: v_a3453e.FC<CustomNumberPadProps> = ({ onPress: v_719eed, onDelete: v_9bb421, style: v_7fa4e4 }) => {
  const v_18b8bf = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['', '0', 'del'],
  ];

  return (
    <View style={[v_d81136.container, v_7fa4e4]}>
      {v_18b8bf.map((v_3ac7e7, v_554071) => (
        <View key={v_554071} style={v_d81136.row}>
          {v_3ac7e7.map((v_8c0b26, v_a667ee) => {
            if (v_8c0b26 === '') {
              return <View key={v_a667ee} style={v_d81136.keyWrapper} />;
            }
            if (v_8c0b26 === 'del') {
              return (
                <TouchableOpacity
                  key={v_a667ee}
                  style={v_d81136.keyWrapper}
                  onPress={v_9bb421}
                  activeOpacity={0.7}
                >
                  <Ionicons name="backspace-outline" size={28} color={v_1bfbd0.text} />
                </TouchableOpacity>
              );
            }
            return (
              <TouchableOpacity
                key={v_a667ee}
                style={v_d81136.keyWrapper}
                onPress={() => v_719eed(v_8c0b26)}
                activeOpacity={0.7}
              >
                <Text style={v_d81136.keyText}>{v_8c0b26}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ))}
    </View>
  );
};

const v_d81136 = v_472849.create({
  container: {
    width: '100%',
    paddingHorizontal: v_9b1a04.large,
    paddingBottom: v_9b1a04.large,
    backgroundColor: "#ffffff",
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  keyWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyText: {
    fontSize: 28,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
    width: '100%',
    textAlign: 'center',
    paddingTop: v_9b1a04.large,
    paddingBottom: v_9b1a04.large,
  },
});

export default v_15cd36;

