import v_a3453e, { v_de06a3, v_5ab095 } from 'bapkr';
import {
  v_39a996,
  v_472849,
  v_19b633,
  v_3094a2,
} from 'rcmrninabrnb';
import { v_772971 } from 'jmpfvteuuztnp';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_cf763b } from 'ixigazcpvfldbecwtbvavtbi';
import { v_1bfbd0, v_843035, v_ef658a, v_9b1a04 } from '../../constants';
import { v_202d44 } from '../../constants/countryDialCodes';
import { v_6946fd, v_1f5cda } from '../../constants/regions';
import { v_729608, v_1c1837, v_cb41de, v_570c34 } from '../../components';
import type { v_8ad91b } from '../../navigation';
import { v_a0daa8 } from '../../navigation';
import { v_7ef860, type v_2c95cc } from '../../services';
import { v_11e39e } from '../../services/countryApi';
import { v_5c7129 } from '../../utils/countryUtils';
import { v_998b9d } from '../../utils/authErrorHandler';

type Props = v_432191<v_8ad91b, 'MyInfoView'>;

const v_74b6e6 = {
  2210: '10',
  2220: '20',
  2230: '30',
  2240: '40',
  2250: '50+',
};
const v_3eef44 = 2110;
const v_2b4155 = 2111;

function v_863c21<T>(
  v_e2a85c,
  ...v_fa53ec: string[]
): T | undefined {
  for (const v_b24339 of v_fa53ec) {
    const v_81e2ef = v_e2a85c[v_b24339];
    if (v_81e2ef !== undefined && v_81e2ef !== null && v_81e2ef !== '') return v_81e2ef as T;
  }
  const v_660822 = v_e2a85c.member ?? v_e2a85c.user;
  if (v_660822 && typeof v_660822 === 'object') {
    const v_35f85c = v_660822 as Record<string, unknown>;
    for (const v_b24339 of v_fa53ec) {
      const v_81e2ef = v_35f85c[v_b24339];
      if (v_81e2ef !== undefined && v_81e2ef !== null && v_81e2ef !== '') return v_81e2ef as T;
    }
  }
  return undefined;
}

function v_f20643(v_e2a85c) {
  const v_479f05 =
    v_863c21<string | number>(v_e2a85c, 'country', 'countrycode', 'country_code') ?? '';
  const v_6fc191 = typeof v_479f05 === 'string' ? v_479f05.toLowerCase() : String(v_479f05);
  if (!v_6fc191) return null;
  const v_830e79 = v_202d44.find((v_3f4e2e) => v_3f4e2e.iso2.toLowerCase() === v_6fc191);
  if (v_830e79) return v_830e79;
  if (/^\d+$/.test(v_6fc191)) {
    return v_202d44.find((v_3f4e2e) => v_3f4e2e.countryCode === parseInt(v_6fc191, 10)) ?? null;
  }
  return null;
}

const MyInfoViewScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d }) => {
  const { t: v_8d41d7 } = v_772971();
  const { goBack: v_c7ac57, navigate: v_9b57fc } = v_a0daa8();
  const [v_727031, v_4ffb1e] = v_5ab095<v_2c95cc | null>(null);
  const [v_683210, v_34a50a] = v_5ab095(true);
  const [v_5e9bfe, v_3a7d09] = v_5ab095<string | null>(null);
  const [v_4648f6, v_a51154] = v_5ab095<string | null>(null);

  v_cf763b(
    v_de06a3(() => {
      let v_2008a4 = false;
      v_4ffb1e(null);
      v_34a50a(true);
      v_3a7d09(null);
      v_a51154(null);
      v_7ef860()
        .then((v_9390e8) => {
          if (v_2008a4) return;
          v_4ffb1e(v_9390e8);
          const v_e2a85c = v_9390e8 as Record<string, unknown>;
          const v_94bdf5 =
            Number(
              v_863c21<unknown>(v_e2a85c, 'region_id', 'regionId', 'region')
            ) || 0;
          if (v_94bdf5 > 0 && v_94bdf5 !== v_1f5cda) {
            const v_5f11cd = v_6946fd(v_94bdf5);
            if (v_5f11cd && v_5f11cd !== 'Global') {
              v_a51154(v_5f11cd);
              return;
            }
            const v_b9bbbd = v_f20643(v_e2a85c);
            if (v_b9bbbd) {
              v_5c7129(
                (v_c99bd2) => v_11e39e(v_c99bd2),
                v_b9bbbd.countryCode,
                v_b9bbbd.iso2
              )
                .then((v_8f00b9) => {
                  if (v_2008a4) return;
                  if (v_8f00b9.hasRegions && v_8f00b9.regions.length > 0) {
                    const v_ea6dff = v_8f00b9.regions.find(
                      (v_cb35cb) => parseInt(v_cb35cb.dialCode, 10) === v_94bdf5
                    );
                    if (v_ea6dff?.name) v_a51154(v_ea6dff.name);
                  }
                })
                .catch(() => {});
            }
          }
        })
        .catch((v_9e86fd) => {
          if (v_2008a4) return;
          if (v_998b9d(v_c65f5d, v_9e86fd)) return;
          v_3a7d09(v_9e86fd instanceof Error ? v_9e86fd.message : v_8d41d7('profile.load_error'));
        })
        .finally(() => {
          if (!v_2008a4) v_34a50a(false);
        });
      return () => {
        v_2008a4 = true;
      };
    }, [v_c65f5d, v_8d41d7])
  );

  if (v_683210 && !v_727031) {
    return (
      <MainLayout activeKey="myinfo">
        <View style={[v_d81136.screen, v_d81136.centered]}>
          <Header title={v_8d41d7('profile.view_my_info')} showBackButton onBackPress={v_c7ac57} />
          <ActivityIndicator size="large" color={v_1bfbd0.primary} />
          <Text style={v_d81136.loadingText}>{v_8d41d7('profile.loading')}</Text>
        </View>
      </MainLayout>
    );
  }

  if (v_5e9bfe && !v_727031) {
    return (
      <MainLayout activeKey="myinfo">
        <View style={[v_d81136.screen, v_d81136.centered]}>
          <Header title={v_8d41d7('profile.view_my_info')} showBackButton onBackPress={v_c7ac57} />
          <Text style={v_d81136.errorText}>{v_5e9bfe}</Text>
        </View>
      </MainLayout>
    );
  }

  const v_e2a85c = (v_727031 ?? {}) as Record<string, unknown>;
  const v_e0c7e8 = (v_e2a85c.email as string) ?? '';
  const v_1833e7 =
    [v_e2a85c.firstname, v_e2a85c.lastname].filter(Boolean).join(' ').trim() ||
    (v_e2a85c.name as string) ||
    (v_e2a85c.firstName as string) ||
    (v_e2a85c.lastName as string) ||
    '';
  const v_49ea09 = (v_e2a85c.mobile ?? v_e2a85c.phone) as string | undefined;
  const v_b9bbbd = v_f20643(v_e2a85c);
  const v_0ae077 = v_b9bbbd
    ? `${v_b9bbbd.flagEmoji} ${v_b9bbbd.dialCode} ${(v_49ea09 ?? '').replace(/\D/g, '')}`
    : (v_49ea09 ?? '');
  const v_94bdf5 =
    Number(v_863c21<unknown>(v_e2a85c, 'region_id', 'regionId', 'region')) || 0;
  const v_331595 =
    v_4648f6 ||
    (v_94bdf5 > 0 && v_94bdf5 !== v_1f5cda ? v_6946fd(v_94bdf5) : null) ||
    '—';
  const v_d199d8 = v_863c21<number>(v_e2a85c, 'gender') as number | undefined;
  const v_03fb63 =
    v_d199d8 === v_3eef44
      ? v_8d41d7('common.male')
      : v_d199d8 === v_2b4155
        ? v_8d41d7('common.female')
        : '—';
  const v_2d2cbc = v_863c21<number>(v_e2a85c, 'age_range', 'ageRange') as number | undefined;
  const v_8bf732 = v_2d2cbc != null && v_74b6e6[v_2d2cbc] ? v_74b6e6[v_2d2cbc] : '—';

  const v_18b8bf = [
    { label: v_8d41d7('my_info_edit.email_label'), value: v_e0c7e8 || '—' },
    { label: v_8d41d7('my_info_edit.name_label'), value: v_1833e7 || '—' },
    { label: v_8d41d7('my_info_edit.phone_label'), value: v_0ae077 || '—' },
    { label: v_8d41d7('my_info_edit.region_label'), value: v_331595 },
    { label: v_8d41d7('my_info_edit.gender_label'), value: v_03fb63 },
    { label: v_8d41d7('my_info_edit.age_label'), value: v_8bf732 },
  ];

  return (
    <MainLayout activeKey="myinfo">
      <View style={v_d81136.screen}>
        <Header title={v_8d41d7('profile.view_my_info')} showBackButton onBackPress={v_c7ac57} />
        <SafeScrollView
          contentContainerStyle={v_d81136.content}
          showBottomBackground={false}
          disableBottomPadding={true}
        >
          <View style={v_d81136.card}>
            {v_18b8bf.map((v_3ac7e7, v_a56041) => (
              <View
                key={v_3ac7e7.label}
                style={[
                  v_d81136.row,
                  v_a56041 < v_18b8bf.length - 1 && v_d81136.rowBorder,
                ]}
              >
                <Text style={v_d81136.label}>{v_3ac7e7.label}</Text>
                <Text style={v_d81136.value}>{v_3ac7e7.value}</Text>
              </View>
            ))}
          </View>
          <PrimaryButton
            title={v_8d41d7('my_info_edit.update_button')}
            onPress={() => v_9b57fc('MyInfoEdit')}
            style={v_d81136.editButton}
          />
        </SafeScrollView>
      </View>
    </MainLayout>
  );
};

const v_d81136 = v_472849.create({
  screen: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: v_9b1a04.medium,
    fontSize: v_ef658a.small,
    color: v_1bfbd0.secondaryText,
  },
  errorText: {
    fontSize: v_ef658a.medium,
    color: v_1bfbd0.secondaryText,
    textAlign: 'center',
  },
  content: {
    paddingHorizontal: v_9b1a04.large,
    paddingVertical: v_9b1a04.medium,
    paddingBottom: v_9b1a04.xlarge,
  },
  editButton: {
    marginTop: v_9b1a04.medium,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: v_1bfbd0.borderLight,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: v_9b1a04.medium,
  },
  rowBorder: {
    borderBottomWidth: v_472849.hairlineWidth,
    borderBottomColor: '#E5E7EB',
  },
  label: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    marginRight: v_9b1a04.small,
  },
  value: {
    flex: 1,
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
    textAlign: 'right',
  },
});

export default v_22c7ba;
