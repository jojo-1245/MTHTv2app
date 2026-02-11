import v_a3453e, { v_df9f57, v_5ab095, v_c4deb2 } from 'bapkr';
import {
  v_39a996,
  v_9cabcb,
  v_472849,
  v_19b633,
  v_4623af,
  v_3094a2,
} from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_dec439 } from 'zvyjokvuouwvifyzks';
import { v_729608, v_f68dda } from '../components';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';
import { v_369014 } from '../constants/regions';
import { v_202d44 } from '../constants/countryDialCodes';
import type { v_8ad91b } from '../navigation';
import type { v_da1883 } from '../types';
import { v_700ef9 } from '../context';
import { v_772971 } from 'jmpfvteuuztnp';
import { v_151d5f, v_5c7129, type v_107459, v_f91692 } from '../utils/countryUtils';
import { v_071875 } from '../utils/countryStateCityUtils';
import { v_60f557, v_11e39e } from '../services/countryApi';
import { v_9ad700 } from '../utils/regionSubcodeMapping';

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
  const [v_6c7bef, v_7a68da] = v_5ab095<v_da1883[]>(v_202d44);
  const [v_e94fdf, v_59ad99] = v_5ab095<v_da1883[]>([]);
  const [v_cd31a8, v_deef62] = v_5ab095(false);

  const v_34e5bb = v_c7daf6.params?.mode ?? v_479a37;

  const selectOption: v_da1883 = v_df9f57(
    () => ({
      iso2: 'select',
      name: v_8d41d7('country_select.select_option') || '선택',
      dialCode: '0',
      flagEmoji: '📍',
      countryCode: 0,
    }),
    [v_8d41d7]
  );

  v_c4deb2(() => {
    if (v_34e5bb === 'country') {
      let v_2008a4 = false;
      v_deef62(true);
      v_151d5f(() => v_60f557(), v_202d44)
        .then((v_ef8ab1) => {
          if (!v_2008a4) v_7a68da(v_ef8ab1);
        })
        .catch(() => {
          if (!v_2008a4) v_7a68da(v_202d44);
        })
        .finally(() => {
          if (!v_2008a4) v_deef62(false);
        });
      return () => {
        v_2008a4 = true;
      };
    }
  }, [v_34e5bb]);

  v_c4deb2(() => {
    if (v_34e5bb !== 'region' || !v_459d5e?.iso2) {
      if (v_34e5bb === 'region') v_59ad99([v_a35839]);
      return;
    }
    const v_cc0c7d = v_459d5e.iso2;
    const v_550aed = v_cc0c7d.toLowerCase();
    const v_25f748 =
      v_459d5e.countryCode ??
      parseInt(v_459d5e.dialCode.replace(/\D/g, ''), 10);
    const v_a4d981 =
      v_f91692[v_550aed] ?? (v_25f748 || 0);
    if (!v_a4d981) {
      v_59ad99(v_369014(v_cc0c7d));
      return;
    }
    let v_2008a4 = false;
    v_deef62(true);
    v_5c7129(
      (v_c99bd2) => v_11e39e(v_c99bd2),
      v_a4d981,
      v_cc0c7d,
      v_369014(v_cc0c7d)
    )
      .then((result: v_107459) => {
        if (v_2008a4) return;
        if (v_43c42e.regions.length > 0 && v_43c42e.regions[0].iso2 !== 'global') {
          v_59ad99(v_43c42e.regions);
          return;
        }
        const v_8ed6fb = v_071875(v_cc0c7d, v_a4d981);
        if (v_8ed6fb.length > 0 && v_8ed6fb[0].iso2 !== 'global') {
          v_59ad99(v_8ed6fb);
        } else {
          v_59ad99([]);
        }
      })
      .catch(() => {
        if (!v_2008a4) {
          const v_8ed6fb = v_071875(v_cc0c7d, v_a4d981);
          if (v_8ed6fb.length > 0 && v_8ed6fb[0].iso2 !== 'global') {
            v_59ad99(v_8ed6fb);
          } else {
            v_59ad99([]);
          }
        }
      })
      .finally(() => {
        if (!v_2008a4) v_deef62(false);
      });
    return () => {
      v_2008a4 = true;
    };
  }, [v_34e5bb, v_459d5e?.countryCode, v_459d5e?.iso2, v_459d5e?.dialCode]);

  const v_093bd4 = v_df9f57(() => {
    if (v_34e5bb === 'region') {
      return [v_a35839, ...v_e94fdf];
    }
    return v_6c7bef;
  }, [v_34e5bb, v_a35839, v_e94fdf, v_6c7bef]);

  const v_c6e76b = v_34e5bb === 'region' ? v_2f03bc : v_459d5e;
  const v_184db2 =
    v_34e5bb === 'region' ? v_8d41d7('country_select.title_region') : v_8d41d7('country_select.title_country');
  const v_61b749 =
    v_34e5bb === 'region'
      ? v_8d41d7('country_select.search_placeholder_region')
      : v_8d41d7('country_select.search_placeholder_country');

  const v_8fb3b0 =
    v_34e5bb === 'region' && v_459d5e?.countryCode != null
      ? String(v_459d5e.countryCode)
      : '';

  const v_ba4a54 = (item: v_da1883) => {
    if (v_34e5bb !== 'region' || v_8c0b26.iso2 === 'select' || v_8c0b26.iso2 === 'global' || v_8c0b26.dialCode === '0') {
      return v_8c0b26.iso2 === 'global' ? (v_8d41d7('country_select.select_option') || '선택') : v_8c0b26.name;
    }
    const v_c99bd2 = v_8c0b26.countryCode ?? (v_8fb3b0 ? parseInt(v_8fb3b0, 10) : 0);
    const v_cde5e2 = v_9ad700.includes(v_c99bd2);
    const v_b5249e = v_cde5e2
      ? `regions.${v_c99bd2}_${v_8c0b26.dialCode}`
      : `regions.${v_c99bd2}_${(v_8c0b26.name ?? '').replace(/\s+/g, '_').toLowerCase()}`;
    const v_6dce25 = v_8d41d7(v_b5249e);
    return v_6dce25 !== v_b5249e ? v_6dce25 : v_8c0b26.name;
  };

  const v_4773d4 = v_df9f57(() => {
    if (!v_7c5791.trim()) return v_093bd4;
    const v_1cfe9a = v_7c5791.toLowerCase();
    const v_f3105d = v_1cfe9a.replace(/[^0-9]/g, '');
    return v_093bd4.filter((v_8c0b26) => {
      const v_4d2349 = v_8c0b26.iso2?.length === 2 ? `countries.${v_8c0b26.iso2.toUpperCase()}` : '';
      const v_a2493c = v_4d2349 && v_8d41d7(v_4d2349) !== v_4d2349 ? v_8d41d7(v_4d2349) : '';
      const v_71395f = v_34e5bb === 'region' ? v_ba4a54(v_8c0b26) : v_8c0b26.name;
      return (
        v_8c0b26.name.toLowerCase().includes(v_1cfe9a) ||
        v_8c0b26.iso2.toLowerCase().includes(v_1cfe9a) ||
        (!!v_a2493c && v_a2493c.toLowerCase().includes(v_1cfe9a)) ||
        (v_34e5bb === 'region' && v_71395f.toLowerCase().includes(v_1cfe9a)) ||
        (!!v_f3105d && v_8c0b26.dialCode.replace('+', '').startsWith(v_f3105d))
      );
    });
  }, [v_093bd4, v_7c5791, v_8d41d7, v_34e5bb, v_8fb3b0]);

  const v_6121dc = (item: v_da1883) => {
    if (v_34e5bb === 'region') {
      v_2f2d51(v_8c0b26);
    } else {
      v_f693e7(v_8c0b26);
    }
    v_67ab1c(v_34e5bb);
    v_c65f5d.goBack();
  };

  const v_096296 = (item: v_da1883) => {
    if (!v_c6e76b) return false;
    if (v_8c0b26.iso2 === 'select' && v_c6e76b.iso2 === 'select') return true;
    return (
      v_c6e76b.countryCode === v_8c0b26.countryCode &&
      v_c6e76b.dialCode === v_8c0b26.dialCode
    );
  };

  const v_fcf6ec = ({ item: v_8c0b26 }: { item: v_da1883 }) => {
    const v_4d2349 = v_8c0b26.iso2?.length === 2 ? `countries.${v_8c0b26.iso2.toUpperCase()}` : '';
    const v_8a1355 =
      v_34e5bb === 'country' && v_4d2349 && v_8d41d7(v_4d2349) !== v_4d2349
        ? v_8d41d7(v_4d2349)
        : v_34e5bb === 'region'
          ? v_ba4a54(v_8c0b26)
          : v_8c0b26.name;

    return (
      <TouchableOpacity style={v_d81136.row} onPress={() => v_6121dc(v_8c0b26)}>
        <View style={v_d81136.rowLeft}>
          <Text style={v_d81136.flag}>{v_8c0b26.flagEmoji}</Text>
          <View>
            <Text style={v_d81136.countryName}>{v_8a1355}</Text>
          </View>
        </View>
        {v_096296(v_8c0b26) ? (
          <Feather name="check" size={18} color={v_1bfbd0.text} />
        ) : null}
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
        {v_cd31a8 ? (
          <View style={v_d81136.loadingWrap}>
            <ActivityIndicator size="large" color={v_1bfbd0.primary} />
          </View>
        ) : (
          <FlatList
            data={v_4773d4}
            renderItem={v_fcf6ec}
            keyExtractor={(v_8c0b26, v_a56041) =>
              `${v_8c0b26.iso2}-${v_8c0b26.dialCode}-${v_8c0b26.countryCode}-${v_a56041}`
            }
            contentContainerStyle={v_d81136.listContent}
            keyboardShouldPersistTaps="handled"
          />
        )}
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
  loadingWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});

export default v_c1e2b5;
