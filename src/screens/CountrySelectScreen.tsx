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
import { v_1bfbd0, v_843035, v_9b1a04, v_202d44, v_369014 } from '../constants';
import type { v_8ad91b } from '../navigation';
import type { v_da1883 } from '../types';
import { v_700ef9 } from '../context';
import { v_772971 } from 'jmpfvteuuztnp';

type Props = v_432191<v_8ad91b, 'CountrySelect'>;

const CountrySelectScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d, route: v_c7daf6 }) => {
  const { t: v_8d41d7 } = v_772971();
  const {
    selectedCountryDialCode: v_459d5e,
    setSelectedCountryDialCode: v_f693e7,
    selectedRegion: v_2f03bc,
    setSelectedRegion: v_2f2d51,
    selectMode: v_479a37,
    setSelectMode: v_67ab1c,
  } = v_700ef9();
  const [v_7c5791, v_c57190] = v_5ab095('');
  const v_34e5bb = v_c7daf6.params?.mode ?? v_479a37;
  const v_093bd4 = v_df9f57(() => {
    if (v_34e5bb === 'region') {
      return v_369014(v_459d5e.iso2);
    }
    return v_202d44;
  }, [v_34e5bb, v_459d5e.iso2]);
  const v_c6e76b = v_34e5bb === 'region' ? v_2f03bc : v_459d5e;
  const v_184db2 = v_34e5bb === 'region' ? v_8d41d7('country_select.title_region') : v_8d41d7('country_select.title_country');
  const v_61b749 =
    v_34e5bb === 'region' ? v_8d41d7('country_select.search_placeholder_region') : v_8d41d7('country_select.search_placeholder_country');

  const v_4773d4 = v_df9f57(() => {
    if (!v_7c5791.trim()) {
      return v_093bd4;
    }
    const v_1cfe9a = v_7c5791.toLowerCase();
    const v_f3105d = v_1cfe9a.replace(/[^0-9]/g, '');
    return v_093bd4.filter(
      (v_8c0b26) =>
        v_8c0b26.name.toLowerCase().includes(v_1cfe9a) ||
        v_8c0b26.iso2.toLowerCase().includes(v_1cfe9a) ||
        (!!v_f3105d && v_8c0b26.dialCode.replace('+', '').startsWith(v_f3105d)),
    );
  }, [v_093bd4, v_7c5791]);

  const v_6121dc = (country: v_da1883) => {
    if (v_34e5bb === 'region') {
      v_2f2d51(v_b9bbbd);
    } else {
      v_f693e7(v_b9bbbd);
    }
    v_67ab1c(v_34e5bb);
    v_c65f5d.goBack();
  };

  const v_fcf6ec = ({ item: v_8c0b26 }: { item: v_da1883 }) => {
    const v_599a41 = v_c6e76b?.iso2?.toLowerCase() === v_8c0b26.iso2.toLowerCase();
    return (
      <TouchableOpacity style={v_d81136.row} onPress={() => v_6121dc(v_8c0b26)}>
        <View style={v_d81136.rowLeft}>
          <Text style={v_d81136.flag}>{v_8c0b26.flagEmoji}</Text>
          <View>
            <Text style={v_d81136.countryName}>{v_8c0b26.name}</Text>
            {}
          </View>
        </View>
        {v_599a41 ? <Feather name="check" size={18} color={v_1bfbd0.text} /> : null}
      </TouchableOpacity>
    );
  };

  return (
    <View style={v_d81136.screen}>
      <Header
        title={v_184db2}
        showBackButton
        onBackPress={() => v_c65f5d.goBack()}
      />
      <View style={v_d81136.content}>
        <SearchField
          placeholder={v_61b749}
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
    backgroundColor: v_1bfbd0.white,
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

