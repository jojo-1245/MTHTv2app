import v_a3453e, { v_df9f57, v_5ab095 } from 'bapkr';
import {
  v_9cabcb,
  v_472849,
  v_19b633,
  v_4623af,
  v_3094a2,
} from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_dec439 } from 'zvyjokvuouwvifyzks';
import { v_729608, v_f68dda } from '../components';
import { v_1bfbd0, v_843035, v_9b1a04, v_202d44 } from '../constants';
import type { v_8ad91b } from '../navigation';
import type { v_da1883 } from '../types';

type Props = v_432191<v_8ad91b, 'CountrySelect'>;

const CountrySelectScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d, route: v_c7daf6 }) => {
  const [v_7c5791, v_c57190] = v_5ab095('');
  const v_b3aeb0 = v_c7daf6.params?.selectedIso2;

  const v_4773d4 = v_df9f57(() => {
    if (!v_7c5791.trim()) {
      return v_202d44;
    }
    const v_1cfe9a = v_7c5791.toLowerCase();
    return v_202d44.filter(
      (v_b9bbbd) =>
        v_b9bbbd.name.toLowerCase().includes(v_1cfe9a) ||
        v_b9bbbd.dialCode.includes(v_1cfe9a) ||
        v_b9bbbd.iso2.toLowerCase().includes(v_1cfe9a),
    );
  }, [v_7c5791]);

  const v_6121dc = (country: v_da1883) => {
    v_c7daf6.params?.onSelectCountry?.(v_b9bbbd);
    v_c65f5d.goBack();
  };

  const v_fcf6ec = ({ item: v_8c0b26 }: { item: v_da1883 }) => {
    const v_599a41 = v_b3aeb0?.toLowerCase() === v_8c0b26.iso2.toLowerCase();
    return (
      <TouchableOpacity style={v_d81136.row} onPress={() => v_6121dc(v_8c0b26)}>
        <View style={v_d81136.rowLeft}>
          <Text style={v_d81136.flag}>{v_8c0b26.flagEmoji}</Text>
          <View>
            <Text style={v_d81136.countryName}>{v_8c0b26.name}</Text>
            <Text style={v_d81136.countryCode}>{v_8c0b26.dialCode}</Text>
          </View>
        </View>
        {v_599a41 ? <Feather name="check" size={18} color={v_1bfbd0.text} /> : null}
      </TouchableOpacity>
    );
  };

  return (
    <View style={v_d81136.screen}>
      <Header
        title="국가 선택"
        showBackButton
        onBackPress={() => v_c65f5d.goBack()}
      />
      <View style={v_d81136.content}>
        <SearchField
          placeholder="국가 이름 또는 국가번호 검색"
          value={v_7c5791}
          onChangeText={v_c57190}
        />
        <FlatList
          data={v_4773d4}
          renderItem={v_fcf6ec}
          keyExtractor={(v_8c0b26) => v_8c0b26.iso2}
          contentContainerStyle={v_d81136.listContent}
          keyboardShouldPersistTaps="handled"
        />
      </View>
    </View>
  );
};

const v_d81136 = v_472849.create({
  screen: {
    flex: 1,
    backgroundColor: v_1bfbd0.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: v_9b1a04.large,
    paddingVertical: v_9b1a04.medium,
  },
  listContent: {
    marginTop: v_9b1a04.medium,
    paddingBottom: v_9b1a04.large,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: v_9b1a04.medium,
    borderBottomWidth: v_472849.hairlineWidth,
    borderBottomColor: v_1bfbd0.border,
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: v_9b1a04.medium,
  },
  flag: {
    fontSize: 24,
  },
  countryName: {
    fontSize: 16,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
  },
  countryCode: {
    fontSize: 13,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
  },
});

export default v_c1e2b5;

