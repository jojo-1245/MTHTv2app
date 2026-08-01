import v_a3453e, { v_5ab095, v_de06a3, v_df9f57 } from 'bapkr';
import {
  v_39a996,
  v_03e392,
  v_9cabcb,
  v_cf9c33,
  v_e767d1,
  v_aa7413,
  v_326be8,
  v_09d0e5,
  v_472849,
  v_19b633,
  v_79c4f2,
  v_b60ea2,
  v_4623af,
  v_3094a2,
} from 'rcmrninabrnb';
import v_dc0e55 from 'bfgjhdhiuhcmlahuvrfzrfn';
import { v_cf763b } from 'ixigazcpvfldbecwtbvavtbi';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_dec439 } from 'zvyjokvuouwvifyzks';
import { v_772971 } from 'jmpfvteuuztnp';
import { v_e0068c } from 'vvfgtwbmdpbnvhtfbtbgudicfmpscw';
import {
  v_8e2768,
  v_47f7b9,
  v_729608,
  v_1c1837,
  v_5427ed,
  v_570c34,
} from '../../components';
import { v_1bfbd0, v_843035 } from '../../constants';
import type { v_8ad91b } from '../../navigation';
import { v_a0daa8 } from '../../navigation';
import { v_4b2942 } from '../../context/PharmacistGuestContext';
import {
  v_cb0098,
  v_e76669,
  v_3dafc1,
} from '../../services/pharmacistGuestApi';
import {
  v_66896f,
  v_582387,
  type v_443c12,
} from '../../services/pharmacyApi';
import {
  v_af2c88,
  v_d91974,
} from '../../utils/tabletLayout';
import { v_e4a763 } from '../../utils/env';

type Props = v_432191<v_8ad91b, 'PharmacistHome'>;

const v_f881c9 = require('../../../assets/images/symbol.png');
const v_7f6e88 = require('../../../assets/images/logo.png');
const v_541ff4 = v_af2c88(58, 72);
const v_1ae176 = v_af2c88(76, 92);
const v_9557ef = v_af2c88(220, 260);

type AuthStep = 'form' | 'otp' | 'verified';

const v_b087a6 = 5;
const v_3cf12d = 200;
const v_0d8f46 = 0.88;
const v_1ad284 = 440;

const v_28d629 = 6;

const v_cad514 = v_af2c88(14, 16);

function v_bb47b9(v_3b402b): string {

  if (v_3b402b.includes('*')) return v_3b402b.trim();
  const v_e6d4a6 = v_3b402b.replace(/\D/g, '').slice(0, 11);
  if (v_e6d4a6.length <= 3) return v_e6d4a6;
  if (v_e6d4a6.length <= 7) return `${v_e6d4a6.slice(0, 3)} ${v_e6d4a6.slice(3)}`;
  return `${v_e6d4a6.slice(0, 3)} ${v_e6d4a6.slice(3, 7)} ${v_e6d4a6.slice(7)}`;
}

type GuestAuthFieldProps = v_b60ea2 & {
  label: string;
  focused: boolean;
  onFieldFocus: () => void;
  onFieldBlur: () => void;
  inputSize?: number;
};

const GuestAuthField: v_a3453e.FC<GuestAuthFieldProps> = ({
  label: v_2869c1,
  focused: v_50c827,
  onFieldFocus: v_e3836d,
  onFieldBlur: v_7253ab,
  inputSize: v_3f74dd = 20,
  style: v_7fa4e4,
  ...v_83bbcd
}) => (
  <View style={[v_d81136.authFieldBox, v_50c827 && v_d81136.authFieldBoxFocused]}>
    <Text style={v_d81136.authFieldLabel}>{v_2869c1}</Text>
    <TextInput
      style={[v_d81136.authFieldInput, { fontSize: v_3f74dd }, v_7fa4e4]}
      placeholderTextColor="#C4C4C4"
      onFocus={v_e3836d}
      onBlur={v_7253ab}
      {...v_83bbcd}
    />
  </View>
);

const PharmacistHomeScreen: v_a3453e.FC<Props> = ({ route: v_c7daf6, navigation: v_c65f5d }) => {
  const { t: v_8d41d7 } = v_772971();
  const { navigate: v_9b57fc } = v_a0daa8();
  const v_033e14 = v_e0068c();
  const { verifiedGuest: v_3de945, setVerifiedGuest: v_e51c8e, clearVerifiedGuest: v_9cf8a5 } = v_4b2942();
  const v_6c4b91 = v_d91974();

  const [v_729796, v_fd7d1f] = v_5ab095<AuthStep>(v_3de945 ? 'verified' : 'form');
  const [v_1833e7, v_318f24] = v_5ab095(v_3de945?.name ?? '');
  const [v_d74a81, v_fcce73] = v_5ab095(v_3de945?.phone ?? '');
  const [v_aa596d, v_f07cc4] = v_5ab095('');
  const [v_cb36b1, v_6a8302] = v_5ab095(180);
  const [v_07589d, v_9fbff7] = v_5ab095(false);
  const [v_d1dd8f, v_ff0c7a] = v_5ab095(false);
  const [v_5c50c0, v_199f88] = v_5ab095<{ title: string; message: string } | null>(null);
  const [v_b4aca1, v_c679ff] = v_5ab095<'name' | 'phone' | null>(null);
  const [v_ecc251, v_96a3c6] = v_5ab095(false);
  const [v_8fdb5e, v_0c5d4b] = v_5ab095<v_443c12[]>([]);
  const [v_970e84, v_13aff2] = v_5ab095(false);
  const [v_3d3f39, v_183269] = v_5ab095<string | null>(null);
  const [v_b2f874, v_63873e] = v_5ab095(false);
  const [v_06aecf, v_f2985a] = v_5ab095('');
  const [v_7f5598, v_543a19] = v_5ab095(false);

  const v_8f155e = v_df9f57(
    () => `${v_e4a763().GATEWAY}/pages/appdownload`,
    []
  );

  const v_aa102c = v_d74a81.replace(/\D/g, '');
  const v_210199 = !v_07589d && v_1833e7.trim().length > 0 && v_aa102c.length >= 10;
  const v_15a612 = !v_d1dd8f && v_aa596d.length >= v_28d629;
  const v_10f75e = !v_07589d && v_cb36b1 <= 240;

  const v_e599a1 = v_6c4b91.isTablet && v_6c4b91.isLandscape;
  const v_f617b4 = v_6c4b91.width - v_6c4b91.horizontalPadding * 2;
  const v_a2aab0 = Math.min(v_6c4b91.width * v_0d8f46, v_1ad284);

  const v_280abb = v_df9f57(
    () => v_8fdb5e.slice(0, v_b087a6),
    [v_8fdb5e]
  );

  const v_7b7807 = v_df9f57(() => {
    const v_ab6401 = v_06aecf.trim().toLowerCase();
    const v_e6d4a6 = v_06aecf.replace(/\D/g, '');
    if (!v_ab6401 && !v_e6d4a6) return v_8fdb5e;
    return v_8fdb5e.filter((v_81e2ef) => {
      const v_8cb36b = v_81e2ef.name.toLowerCase().includes(v_ab6401);
      const v_3c21b3 = v_e6d4a6.length > 0 && v_81e2ef.phone.replace(/\D/g, '').includes(v_e6d4a6);
      return v_8cb36b || v_3c21b3;
    });
  }, [v_8fdb5e, v_06aecf]);

  const v_3be70d = v_de06a3(() => {
    v_f2985a('');
    v_63873e(true);
  }, []);

  const v_cea649 = v_de06a3(() => {
    v_63873e(false);
    v_f2985a('');
  }, []);

  v_a3453e.useEffect(() => {
    if (v_729796 !== 'otp' || v_cb36b1 <= 0) return;
    const v_389afb = setInterval(() => v_6a8302((v_ba2215) => v_ba2215 - 1), 1000);
    return () => clearInterval(v_389afb);
  }, [v_729796, v_cb36b1]);

  const v_f85cd6 = (v_ec1a55) => {
    const v_35f85c = Math.floor(v_ec1a55 / 60);
    const v_fd5f43 = v_ec1a55 % 60;
    return `${String(v_35f85c).padStart(2, '0')}:${String(v_fd5f43).padStart(2, '0')}`;
  };

  const v_f74c59 = (v_a8cd21) => {
    v_199f88({ title: v_8d41d7('common.error'), message: v_a8cd21 });
  };

  const v_a933e0 = v_de06a3(async () => {
    v_13aff2(true);
    v_183269(null);
    try {
      const v_ef8ab1 = await v_66896f();
      v_0c5d4b(v_ef8ab1);
    } catch (v_9e86fd) {
      v_183269(v_9e86fd instanceof Error ? v_9e86fd.message : v_8d41d7('pharmacist.visitor_list.load_failed'));
    } finally {
      v_13aff2(false);
    }
  }, [v_8d41d7]);

  v_cf763b(
    v_de06a3(() => {
      v_a933e0();
    }, [v_a933e0])
  );

  const v_3fec5d = v_de06a3(async (v_24baff) => {
    v_9fbff7(true);
    try {
      const v_43c42e = await v_cb0098(v_24baff);

      v_318f24((v_43c42e.name ?? v_24baff.name ?? '').trim());
      v_fcce73((v_43c42e.phone ?? v_24baff.phone ?? '').replace(/\D/g, ''));
      v_f07cc4('');
      v_6a8302(v_43c42e.expiresIn ?? 180);
      v_fd7d1f('otp');
      if (__DEV__ && v_43c42e.devCode) {
        v_199f88({
          title: v_8d41d7('pharmacist.guest_auth.dev_code_title'),
          message: v_8d41d7('pharmacist.guest_auth.dev_code_message', { code: v_43c42e.devCode }),
        });
      }
    } catch (v_9e86fd) {
      v_f74c59(v_9e86fd instanceof Error ? v_9e86fd.message : v_8d41d7('pharmacist.guest_auth.send_failed'));
    } finally {
      v_9fbff7(false);
    }
  }, [v_8d41d7]);

  v_a3453e.useEffect(() => {
    const v_24baff = v_c7daf6.params;
    if (!v_24baff?.prefillName || !v_24baff?.prefillPhone || !v_24baff.autoSendOtp) return;
    v_9cf8a5();
    v_fd7d1f('form');
    v_3fec5d({ name: v_24baff.prefillName, phone: v_24baff.prefillPhone });
    v_c65f5d.setParams({
      prefillName: undefined,
      prefillPhone: undefined,
      autoSendOtp: undefined,
    });
  }, [
    v_c7daf6.params?.prefillName,
    v_c7daf6.params?.prefillPhone,
    v_c7daf6.params?.autoSendOtp,
    v_9cf8a5,
    v_3fec5d,
    v_c65f5d,
  ]);

  const v_2de427 = async () => {
    await v_3fec5d({ name: v_1833e7, phone: v_d74a81 });
  };

  const v_a41235 = async (visitor: v_443c12, v_7b5712) => {
    v_cea649();
    v_9cf8a5();
    await v_3fec5d({ visitorId: v_e769c6.id });
    v_7b5712?.();
  };

  const v_35e0b9 = (visitor: v_443c12) => {
    v_03e392.alert(
      v_8d41d7('pharmacist.visitor_list.delete_visitor_title'),
      v_8d41d7('pharmacist.visitor_list.delete_visitor_message', { name: v_e769c6.name }),
      [
        { text: v_8d41d7('common.cancel'), style: 'cancel' },
        {
          text: v_8d41d7('health_records.delete', '삭제'),
          style: 'destructive',
          onPress: async () => {
            try {
              await v_582387(v_e769c6.id);
              if (v_3de945?.visitorId === v_e769c6.id) {
                v_9cf8a5();
                v_fd7d1f('form');
              }
              await v_a933e0();
            } catch (v_9e86fd) {
              v_f74c59(v_9e86fd instanceof Error ? v_9e86fd.message : v_8d41d7('pharmacist.visitor_list.delete_failed'));
            }
          },
        },
      ]
    );
  };

  const v_4f034c = async (v_2b9e3b) => {
    const v_c99bd2 = (v_2b9e3b ?? v_aa596d).trim();
    if (v_c99bd2.length < v_28d629) return;

    v_ff0c7a(true);
    try {
      const v_43c42e = await v_e76669({ name: v_1833e7, phone: v_d74a81, code: v_c99bd2 });
      v_e51c8e({
        name: v_43c42e.name,
        phone: v_43c42e.phone,
        visitorId: v_43c42e.visitorId,
        isNew: v_43c42e.isNew,
        records: v_43c42e.records,
        sessionId: v_43c42e.sessionId,
        verifiedAt: new Date().toISOString(),
      });
      v_318f24(v_43c42e.name);
      v_fcce73(v_43c42e.phone);
      v_fd7d1f('verified');
      v_a933e0();
    } catch (v_9e86fd) {
      v_f74c59(v_9e86fd instanceof Error ? v_9e86fd.message : v_8d41d7('pharmacist.guest_auth.verify_failed'));
    } finally {
      v_ff0c7a(false);
    }
  };

  const v_cf9840 = async () => {
    v_9fbff7(true);
    try {
      const v_43c42e = await v_3dafc1({ name: v_1833e7, phone: v_d74a81 });
      v_6a8302(v_43c42e.expiresIn ?? 180);
      v_f07cc4('');
      if (__DEV__ && v_43c42e.devCode) {
        v_199f88({
          title: v_8d41d7('pharmacist.guest_auth.dev_code_title'),
          message: v_8d41d7('pharmacist.guest_auth.dev_code_message', { code: v_43c42e.devCode }),
        });
      }
    } catch (v_9e86fd) {
      v_f74c59(v_9e86fd instanceof Error ? v_9e86fd.message : v_8d41d7('pharmacist.guest_auth.send_failed'));
    } finally {
      v_9fbff7(false);
    }
  };

  const v_f099d7 = () => {
    v_9cf8a5();
    v_fd7d1f('form');
    v_318f24('');
    v_fcce73('');
    v_f07cc4('');
    v_6a8302(180);
  };

  const v_985ec8 = () => {
    v_9b57fc('HealthAnalysis', { initialTab: 'measure' });
  };

  const v_9026f2 = () => {
    v_9b57fc('SkinAnalysis', { initialTab: 'measure' });
  };

  const v_ee7d58 = (
    <TouchableOpacity
      style={v_d81136.headerVisitorsBtn}
      onPress={v_3be70d}
      activeOpacity={0.85}
      accessibilityRole="button"
      accessibilityLabel={v_8d41d7('pharmacist.visitor_list.title')}
    >
      <Feather name="users" size={v_af2c88(22, 24)} color="#615FFF" />
    </TouchableOpacity>
  );

  const v_e54e28 = v_df9f57(() => {
    if (v_729796 === 'otp') return 'pharmacist.guest_auth.otp_heading';
    if (v_729796 === 'verified') return 'pharmacist.guest_auth.verified_heading';
    return 'pharmacist.guest_auth.form_heading';
  }, [v_729796]);

  const v_60bed6 = () => (
    <View style={v_d81136.contentTopBar}>
      <View style={v_d81136.contentTopLeft}>
        <View style={v_d81136.contentLogoRow}>
          <Image source={v_f881c9} style={v_d81136.contentSymbol} resizeMode="contain" />
          <Image source={v_7f6e88} style={v_d81136.contentLogoText} resizeMode="contain" />
        </View>
        <Text
          style={[v_d81136.contentTopTitle, { fontSize: v_6c4b91.isTablet ? 26 : 22 }]}
          {...(v_326be8.OS === 'ios' ? { lineBreakStrategyIOS: 'hangul-word' as const } : {})}
        >
          {v_8d41d7(v_e54e28)}
        </Text>
      </View>
      <TouchableOpacity
        style={v_d81136.contentQrBtn}
        onPress={() => v_543a19(true)}
        activeOpacity={0.85}
        accessibilityRole="button"
        accessibilityLabel={v_8d41d7('pharmacist.app_download_qr_label')}
      >
        <View style={v_d81136.contentQrPreview}>
          <QRCode value={v_8f155e} size={v_541ff4} />
        </View>
      </TouchableOpacity>
    </View>
  );

  const v_1224a5 = (
    visitor: v_443c12,
    v_b36f96 = {}
  ) => {
    const v_26dce6 = v_3de945?.visitorId === v_e769c6.id;
    const { showDelete: v_205a67 = false, compact: v_c22a7a = false } = v_b36f96;

    const v_7ceab6 = (
      <>
        <View style={v_d81136.visitorAvatar}>
          <Feather name="user" size={v_af2c88(18, 20)} color={v_26dce6 ? '#615FFF' : '#6B7280'} />
        </View>
        <View style={v_d81136.visitorInfo}>
          <Text style={v_d81136.visitorName}>{v_e769c6.name}</Text>
          <Text style={v_d81136.visitorMeta}>
            {v_bb47b9(v_e769c6.phone)}
            {v_e769c6.recordCount > 0
              ? ` · ${v_8d41d7('pharmacist.visitor_list.record_count', { count: v_e769c6.recordCount })}`
              : ` · ${v_8d41d7('pharmacist.visitor_list.no_records_yet')}`}
          </Text>
        </View>
      </>
    );

    if (v_205a67) {
      return (
        <View
          key={v_e769c6.id}
          style={[
            v_d81136.visitorRow,
            v_d81136.visitorRowPanel,
            v_c22a7a && v_d81136.visitorRowCompact,
            v_26dce6 && v_d81136.visitorRowActive,
          ]}
        >
          <TouchableOpacity
            style={v_d81136.visitorRowMain}
            onPress={() => v_a41235(v_e769c6)}
            disabled={v_07589d}
            activeOpacity={0.85}
          >
            {v_7ceab6}
          </TouchableOpacity>
          <TouchableOpacity
            style={v_d81136.visitorDeleteBtnInline}
            onPress={() => v_35e0b9(v_e769c6)}
            hitSlop={8}
            accessibilityLabel={v_8d41d7('pharmacist.visitor_list.delete_visitor_title')}
          >
            <Feather name="trash-2" size={18} color="#EF4444" />
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View key={v_e769c6.id} style={v_d81136.visitorRowWrap}>
        <TouchableOpacity
          style={[
            v_d81136.visitorRow,
            v_c22a7a && v_d81136.visitorRowCompact,
            v_26dce6 && v_d81136.visitorRowActive,
          ]}
          onPress={() => v_a41235(v_e769c6)}
          disabled={v_07589d}
          activeOpacity={0.85}
        >
          {v_7ceab6}
          <Feather name="chevron-right" size={18} color="#9CA3AF" />
        </TouchableOpacity>
      </View>
    );
  };

  const v_4ae1bb = () => (
    <View style={v_d81136.recentVisitorsBlock}>
      <View style={v_d81136.visitorSectionHeader}>
        <View style={v_d81136.visitorSectionHeaderText}>
          <Text style={v_d81136.visitorSectionTitle}>{v_8d41d7('pharmacist.visitor_list.recent_title')}</Text>
          <Text style={v_d81136.visitorSectionHint}>
            {v_8d41d7('pharmacist.visitor_list.recent_hint', { count: v_b087a6 })}
          </Text>
        </View>
        {v_8fdb5e.length > v_b087a6 ? (
          <TouchableOpacity onPress={v_3be70d} style={v_d81136.viewAllBtn}>
            <Text style={v_d81136.viewAllText}>{v_8d41d7('pharmacist.visitor_list.view_all')}</Text>
            <Feather name="chevron-right" size={16} color="#615FFF" />
          </TouchableOpacity>
        ) : null}
      </View>
      {v_970e84 ? (
        <ActivityIndicator color={v_1bfbd0.primary} style={v_d81136.visitorLoader} />
      ) : v_3d3f39 ? (
        <Text style={v_d81136.visitorError}>{v_3d3f39}</Text>
      ) : v_280abb.length === 0 ? (
        <Text style={v_d81136.visitorEmpty}>{v_8d41d7('pharmacist.visitor_list.empty')}</Text>
      ) : (
        <View style={v_d81136.visitorList}>
          {v_280abb.map((v_e769c6) => v_1224a5(v_e769c6, { compact: true }))}
        </View>
      )}
    </View>
  );

  const v_8a83e5 = () => (
    <Modal
      visible={v_7f5598}
      transparent
      animationType="fade"
      onRequestClose={() => v_543a19(false)}
    >
      <View style={v_d81136.qrModalRoot}>
        <Pressable style={v_d81136.qrModalBackdrop} onPress={() => v_543a19(false)} />
        <View style={v_d81136.qrModalCard}>
          <TouchableOpacity
            style={v_d81136.qrModalCloseBtn}
            onPress={() => v_543a19(false)}
            hitSlop={8}
            accessibilityRole="button"
            accessibilityLabel={v_8d41d7('common.close')}
          >
            <Feather name="x" size={22} color="#111111" />
          </TouchableOpacity>
          <Text style={v_d81136.qrModalTitle}>{v_8d41d7('pharmacist.app_download_qr_title')}</Text>
          <Text style={v_d81136.qrModalHint}>{v_8d41d7('pharmacist.app_download_qr_hint')}</Text>
          <View style={v_d81136.qrModalCodeWrap}>
            <QRCode value={v_8f155e} size={v_9557ef} />
            <View style={v_d81136.qrModalLogoBadge}>
              <Image source={v_f881c9} style={v_d81136.qrModalLogo} resizeMode="contain" />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );

  const v_f4cdfe = () => (
    <Modal
      visible={v_b2f874}
      transparent
      animationType="fade"
      onRequestClose={v_cea649}
    >
      <View style={v_d81136.panelRoot}>
        <Pressable style={v_d81136.panelBackdrop} onPress={v_cea649} />
        <View
          style={[
            v_d81136.panelSheet,
            {
              width: v_a2aab0,
              paddingTop: v_033e14.top + v_af2c88(12, 16),
              paddingBottom: v_033e14.bottom + v_af2c88(12, 16),
            },
          ]}
        >
          <View style={v_d81136.panelHeader}>
            <Text style={v_d81136.panelTitle}>{v_8d41d7('pharmacist.visitor_list.title')}</Text>
            <TouchableOpacity onPress={v_cea649} style={v_d81136.panelCloseBtn} hitSlop={8}>
              <Feather name="x" size={22} color="#111111" />
            </TouchableOpacity>
          </View>

          <View style={v_d81136.panelSearchBox}>
            <Feather name="search" size={18} color="#9CA3AF" />
            <TextInput
              style={v_d81136.panelSearchInput}
              value={v_06aecf}
              onChangeText={v_f2985a}
              placeholder={v_8d41d7('pharmacist.visitor_list.search_placeholder')}
              placeholderTextColor="#C4C4C4"
              autoCapitalize="none"
              autoCorrect={false}
            />
            {v_06aecf.length > 0 ? (
              <TouchableOpacity onPress={() => v_f2985a('')} hitSlop={8}>
                <Feather name="x-circle" size={18} color="#9CA3AF" />
              </TouchableOpacity>
            ) : null}
          </View>

          <Text style={v_d81136.panelCountText}>
            {v_8d41d7('pharmacist.visitor_list.total_count', { count: v_8fdb5e.length })}
            {v_8fdb5e.length >= v_3cf12d
              ? ` · ${v_8d41d7('pharmacist.visitor_list.limit_hint', { limit: v_3cf12d })}`
              : ''}
          </Text>
          <Text style={v_d81136.panelDeleteHint}>{v_8d41d7('pharmacist.visitor_list.delete_visitor_hint')}</Text>

          {v_970e84 ? (
            <ActivityIndicator color={v_1bfbd0.primary} style={v_d81136.visitorLoader} />
          ) : v_3d3f39 ? (
            <Text style={v_d81136.visitorError}>{v_3d3f39}</Text>
          ) : (
            <FlatList
              data={v_7b7807}
              keyExtractor={(v_8c0b26) => String(v_8c0b26.id)}
              contentContainerStyle={v_d81136.panelListContent}
              ItemSeparatorComponent={() => <View style={v_d81136.visitorListSeparator} />}
              showsVerticalScrollIndicator
              keyboardShouldPersistTaps="handled"
              ListEmptyComponent={
                <Text style={v_d81136.visitorEmpty}>{v_8d41d7('pharmacist.visitor_list.search_empty')}</Text>
              }
              renderItem={({ item: v_8c0b26 }) => v_1224a5(v_8c0b26, { showDelete: true, compact: true })}
            />
          )}
        </View>
      </View>
    </Modal>
  );

  const v_003e08 = () => (
    <View style={v_d81136.formStep}>
      <View style={v_d81136.authFieldStack}>
        <GuestAuthField
          label={v_8d41d7('common.name')}
          value={v_1833e7}
          onChangeText={v_318f24}
          placeholder={v_8d41d7('pharmacist.guest_auth.name_placeholder')}
          autoCapitalize="words"
          returnKeyType="next"
          focused={v_b4aca1 === 'name'}
          onFieldFocus={() => v_c679ff('name')}
          onFieldBlur={() => v_c679ff((v_ba2215) => (v_ba2215 === 'name' ? null : v_ba2215))}
          inputSize={v_6c4b91.typo.input}
        />

        <GuestAuthField
          label={v_8d41d7('common.phone')}
          value={v_bb47b9(v_d74a81)}
          onChangeText={(v_9b6134) => v_fcce73(v_9b6134.replace(/\D/g, '').slice(0, 11))}
          placeholder={v_8d41d7('pharmacist.guest_auth.phone_placeholder')}
          keyboardType="phone-pad"
          returnKeyType="done"
          focused={v_b4aca1 === 'phone'}
          onFieldFocus={() => v_c679ff('phone')}
          onFieldBlur={() => v_c679ff((v_ba2215) => (v_ba2215 === 'phone' ? null : v_ba2215))}
          inputSize={v_6c4b91.typo.input}
        />
      </View>

      <TouchableOpacity
        style={[v_d81136.capsuleBtn, !v_210199 && v_d81136.capsuleBtnDisabled]}
        onPress={v_2de427}
        disabled={!v_210199}
        activeOpacity={0.85}
      >
        {v_07589d ? (
          <ActivityIndicator color={v_210199 ? v_1bfbd0.white : '#9CA3AF'} />
        ) : (
          <Text style={[v_d81136.capsuleBtnText, !v_210199 && v_d81136.capsuleBtnTextDisabled]}>
            {v_8d41d7('pharmacist.guest_auth.send_code')}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );

  const v_1f1fc7 = () => (
    <View style={v_d81136.formStep}>
      <TouchableOpacity style={v_d81136.backRow} onPress={() => v_fd7d1f('form')}>
        <Feather name="arrow-left" size={v_af2c88(20, 22)} color="#111111" />
        <Text style={v_d81136.backText}>{v_8d41d7('common.back')}</Text>
      </TouchableOpacity>

      <Text
        style={v_d81136.formSubtext}
        {...(v_326be8.OS === 'ios' ? { lineBreakStrategyIOS: 'hangul-word' as const } : {})}
      >
        {v_8d41d7('pharmacist.guest_auth.otp_subtitle', { phone: v_bb47b9(v_d74a81) })}
      </Text>

      <View style={[v_d81136.authFieldBox, v_ecc251 && v_d81136.authFieldBoxFocused]}>
        <Text style={v_d81136.authFieldLabel}>{v_8d41d7('pharmacist.guest_auth.otp_field_label')}</Text>
        <OtpInput
          length={v_28d629}
          value={v_aa596d}
          wrapperStyle={v_d81136.otpInputWrapper}
          rowStyle={v_d81136.otpRow}
          boxStyle={v_d81136.otpBox}
          activeBoxStyle={v_d81136.otpBoxActive}
          onFocus={() => v_96a3c6(true)}
          onBlur={() => v_96a3c6(false)}
          onChange={(v_3b402b) => {
            v_f07cc4(v_3b402b);
            if (v_3b402b.length === v_28d629) {
              v_4f034c(v_3b402b);
            }
          }}
        />
      </View>

      <Text style={[v_d81136.timerText, v_cb36b1 <= 0 && v_d81136.timerExpired]}>
        {v_cb36b1 > 0
          ? v_8d41d7('pharmacist.guest_auth.timer_remaining', { time: v_f85cd6(v_cb36b1) })
          : v_8d41d7('pharmacist.guest_auth.timer_expired')}
      </Text>

      <TouchableOpacity
        style={[v_d81136.capsuleBtn, !v_15a612 && v_d81136.capsuleBtnDisabled]}
        onPress={() => v_4f034c()}
        disabled={!v_15a612}
        activeOpacity={0.85}
      >
        {v_d1dd8f ? (
          <ActivityIndicator color={v_15a612 ? v_1bfbd0.white : '#9CA3AF'} />
        ) : (
          <Text style={[v_d81136.capsuleBtnText, !v_15a612 && v_d81136.capsuleBtnTextDisabled]}>
            {v_8d41d7('pharmacist.guest_auth.verify')}
          </Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={v_cf9840}
        disabled={!v_10f75e}
        style={v_d81136.resendBtn}
        activeOpacity={0.7}
      >
        <Text style={[v_d81136.resendText, !v_10f75e && v_d81136.resendDisabled]}>
          {v_8d41d7('pharmacist.guest_auth.resend')}
        </Text>
      </TouchableOpacity>
    </View>
  );

  const v_9c4dd3 = () => (
    <View style={v_d81136.formStep}>
      <View style={v_d81136.authFieldBox}>
        <Text style={v_d81136.authFieldLabel}>{v_8d41d7('pharmacist.guest_auth.verified_customer_label')}</Text>
        <View style={v_d81136.verifiedCustomerRow}>
          <View style={v_d81136.verifiedIconCircle}>
            <Feather name="check" size={v_af2c88(18, 20)} color="#16A34A" />
          </View>
          <View style={v_d81136.verifiedCustomerInfo}>
            <Text style={v_d81136.guestName}>{v_3de945?.name ?? v_1833e7}</Text>
            <Text style={v_d81136.guestPhone}>{v_bb47b9(v_3de945?.phone ?? v_d74a81)}</Text>
          </View>
        </View>
      </View>

      <Text
        style={v_d81136.analysisHint}
        {...(v_326be8.OS === 'ios' ? { lineBreakStrategyIOS: 'hangul-word' as const } : {})}
      >
        {v_8d41d7('pharmacist.guest_auth.analysis_hint')}
      </Text>

      <View style={[v_d81136.actionRow, v_6c4b91.isTablet && v_6c4b91.isLandscape && v_d81136.actionRowLandscape]}>
        <TouchableOpacity style={v_d81136.actionCard} onPress={v_985ec8} activeOpacity={0.85}>
          <View style={[v_d81136.actionIconCircle, v_d81136.actionIconHealth]}>
            <Feather name="activity" size={v_af2c88(24, 28)} color="#615FFF" />
          </View>
          <Text style={v_d81136.actionLabel}>{v_8d41d7('pharmacist.bottom_nav_health')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={v_d81136.actionCard} onPress={v_9026f2} activeOpacity={0.85}>
          <View style={[v_d81136.actionIconCircle, v_d81136.actionIconSkin]}>
            <Feather name="droplet" size={v_af2c88(24, 28)} color="#AD46FF" />
          </View>
          <Text style={v_d81136.actionLabel}>{v_8d41d7('pharmacist.bottom_nav_skin')}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={v_f099d7} style={v_d81136.newGuestBtn} activeOpacity={0.7}>
        <Text style={v_d81136.newGuestText}>{v_8d41d7('pharmacist.guest_auth.new_guest')}</Text>
      </TouchableOpacity>
    </View>
  );

  const v_c9e46b = () => {
    if (v_729796 === 'otp') {
      return v_1f1fc7();
    }

    const v_49b18e = v_729796 === 'form' ? v_003e08() : v_9c4dd3();
    const v_e488af = v_4ae1bb();

    if (v_e599a1) {
      return (
        <View style={v_d81136.twoColumnRow}>
          <View style={v_d81136.twoColumnCol}>{v_49b18e}</View>
          <View style={v_d81136.twoColumnCol}>{v_e488af}</View>
        </View>
      );
    }

    return (
      <View style={v_d81136.singleColumnStack}>
        {v_49b18e}
        {v_e488af}
      </View>
    );
  };

  return (
    <MainLayout activeKey="home">
      <KeyboardAvoidingView
        style={v_d81136.flex}
        behavior={v_326be8.OS === 'ios' ? 'padding' : undefined}
      >
        <Header
          variant="analysis"
          iconLeft={<Feather name="home" size={24} color="#FFFFFF" />}
          title={v_8d41d7('pharmacist.home_title')}
          subtitle={v_8d41d7('pharmacist.home_subtitle')}
          rightAccessory={v_ee7d58}
          centerContentMaxWidth={undefined}
          containerStyle={{ paddingTop: v_033e14.top + (v_6c4b91.isLandscape ? 12 : v_af2c88(12, 20)) }}
        />
        <SafeScrollView
          style={v_d81136.flex}
          backgroundColor="#FAFAFA"
          contentContainerStyle={[
            v_d81136.scrollContent,
            {
              paddingTop: v_6c4b91.isLandscape ? 12 : v_af2c88(16, 32),
              paddingBottom: v_6c4b91.isLandscape ? 16 : v_af2c88(24, 40),
            },
          ]}
          showBottomBackground={false}
        >
          <CenteredContentShell
            backgroundColor="#FAFAFA"
            applyHorizontalPadding={v_6c4b91.isTablet}
            contentColumnWidth={v_6c4b91.isTablet ? undefined : v_6c4b91.width}
            contentStyle={{ width: '100%', ...(v_6c4b91.isTablet ? { maxWidth: v_f617b4 } : null) }}
          >
            {v_60bed6()}
            {v_c9e46b()}
          </CenteredContentShell>
        </SafeScrollView>
      </KeyboardAvoidingView>

      {v_f4cdfe()}
      {v_8a83e5()}

      <AlertModal
        visible={!!v_5c50c0}
        title={v_5c50c0?.title ?? ''}
        message={v_5c50c0?.message ?? ''}
        onConfirm={() => v_199f88(null)}
      />
    </MainLayout>
  );
};

const v_d81136 = v_472849.create({
  flex: { flex: 1, width: '100%', alignSelf: 'stretch' },
  scrollContent: {
    flexGrow: 1,
    width: '100%',
    alignSelf: 'stretch',
  },
  formStep: {
    width: '100%',
    paddingHorizontal: v_af2c88(20, 28),
    paddingTop: v_af2c88(8, 12),
    paddingBottom: v_af2c88(16, 20),
    gap: v_af2c88(16, 20),
  },
  contentTopBar: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: v_af2c88(20, 28),
    paddingTop: v_af2c88(4, 8),
    paddingBottom: v_af2c88(16, 20),
    gap: v_af2c88(16, 20),
  },
  contentTopLeft: {
    flex: 1,
    minWidth: 0,
    gap: v_af2c88(10, 12),
    paddingRight: v_af2c88(8, 12),
  },
  contentLogoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: v_af2c88(8, 10),
  },
  contentSymbol: {
    width: v_af2c88(36, 42),
    height: v_af2c88(36, 42),
  },
  contentLogoText: {
    width: v_af2c88(100, 116),
    height: v_af2c88(26, 30),
  },
  contentTopTitle: {
    fontFamily: v_843035.bold,
    color: '#111111',
    lineHeight: v_af2c88(30, 34),
    letterSpacing: -0.4,
  },
  contentQrBtn: {
    width: v_1ae176,
    height: v_1ae176,
    borderRadius: v_af2c88(16, 18),
    backgroundColor: v_1bfbd0.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    overflow: 'hidden',
    flexShrink: 0,
    ...v_326be8.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 10,
      },
      android: { elevation: 3 },
    }),
  },
  contentQrPreview: {
    padding: v_af2c88(4, 5),
    backgroundColor: v_1bfbd0.white,
  },
  headerVisitorsBtn: {
    width: v_af2c88(40, 44),
    height: v_af2c88(40, 44),
    borderRadius: v_cad514,
    backgroundColor: '#EEF2FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrModalRoot: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: v_af2c88(24, 32),
  },
  qrModalBackdrop: {
    ...v_472849.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  qrModalCard: {
    width: '100%',
    maxWidth: v_af2c88(340, 400),
    backgroundColor: v_1bfbd0.white,
    borderRadius: v_af2c88(20, 24),
    paddingHorizontal: v_af2c88(24, 28),
    paddingTop: v_af2c88(20, 24),
    paddingBottom: v_af2c88(28, 32),
    alignItems: 'center',
    ...v_326be8.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.15,
        shadowRadius: 24,
      },
      android: { elevation: 12 },
    }),
  },
  qrModalCloseBtn: {
    position: 'absolute',
    top: v_af2c88(12, 14),
    right: v_af2c88(12, 14),
    padding: 4,
    zIndex: 1,
  },
  qrModalTitle: {
    fontFamily: v_843035.bold,
    fontSize: v_af2c88(18, 20),
    color: '#111111',
    textAlign: 'center',
    marginBottom: v_af2c88(8, 10),
  },
  qrModalHint: {
    fontFamily: v_843035.regular,
    fontSize: v_af2c88(14, 15),
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: v_af2c88(20, 22),
    marginBottom: v_af2c88(20, 24),
  },
  qrModalCodeWrap: {
    padding: v_af2c88(14, 16),
    borderRadius: v_af2c88(16, 18),
    backgroundColor: v_1bfbd0.white,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    position: 'relative',
  },
  qrModalLogoBadge: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: v_af2c88(40, 48),
    height: v_af2c88(40, 48),
    marginLeft: v_af2c88(-20, -24),
    marginTop: v_af2c88(-20, -24),
    borderRadius: v_af2c88(10, 12),
    backgroundColor: v_1bfbd0.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#F3F4F6',
  },
  qrModalLogo: {
    width: v_af2c88(24, 28),
    height: v_af2c88(24, 28),
  },
  twoColumnRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: v_af2c88(20, 28),
  },
  twoColumnCol: {
    flex: 1,
    minWidth: 0,
  },
  singleColumnStack: {
    width: '100%',
    gap: v_af2c88(12, 16),
  },
  recentVisitorsBlock: {
    width: '100%',
    paddingHorizontal: v_af2c88(20, 28),
    paddingTop: v_af2c88(4, 8),
    paddingBottom: v_af2c88(16, 20),
    gap: v_af2c88(8, 10),
  },
  panelRoot: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  panelBackdrop: {
    ...v_472849.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  panelSheet: {
    height: '100%',
    backgroundColor: '#FAFAFA',
    borderTopLeftRadius: v_af2c88(18, 22),
    borderBottomLeftRadius: v_af2c88(18, 22),
    paddingHorizontal: v_af2c88(16, 20),
    ...v_326be8.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: -4, height: 0 },
        shadowOpacity: 0.12,
        shadowRadius: 16,
      },
      android: { elevation: 12 },
    }),
  },
  panelHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: v_af2c88(12, 16),
  },
  panelTitle: {
    fontFamily: v_843035.bold,
    fontSize: v_af2c88(18, 20),
    color: '#111111',
  },
  panelCloseBtn: {
    padding: 4,
  },
  panelSearchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: v_1bfbd0.white,
    borderRadius: v_af2c88(12, 14),
    paddingHorizontal: v_af2c88(12, 14),
    paddingVertical: v_af2c88(10, 12),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: v_af2c88(10, 12),
  },
  panelSearchInput: {
    flex: 1,
    fontFamily: v_843035.medium,
    fontSize: v_af2c88(15, 16),
    color: '#111111',
    padding: 0,
    margin: 0,
  },
  panelCountText: {
    fontFamily: v_843035.regular,
    fontSize: v_af2c88(13, 14),
    color: '#6B7280',
    marginBottom: 4,
  },
  panelDeleteHint: {
    fontFamily: v_843035.regular,
    fontSize: v_af2c88(12, 13),
    color: '#9CA3AF',
    marginBottom: v_af2c88(8, 10),
    lineHeight: v_af2c88(18, 20),
  },
  panelListContent: {
    paddingBottom: v_af2c88(12, 16),
  },
  viewAllBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    paddingVertical: 4,
  },
  viewAllText: {
    fontFamily: v_843035.semibold,
    fontSize: v_af2c88(13, 14),
    color: '#615FFF',
  },
  visitorSectionHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 8,
  },
  visitorSectionHeaderText: {
    flex: 1,
    gap: 4,
  },
  formHeading: {
    fontFamily: v_843035.bold,
    color: '#111111',
    lineHeight: v_af2c88(36, 42),
    letterSpacing: -0.5,
  },
  formSubtext: {
    fontFamily: v_843035.medium,
    fontSize: v_af2c88(15, 16),
    color: '#6B7280',
    lineHeight: v_af2c88(22, 24),
    marginTop: v_af2c88(-12, -16),
  },
  authFieldStack: {
    gap: v_af2c88(12, 14),
  },
  authFieldBox: {
    backgroundColor: v_1bfbd0.white,
    borderRadius: v_cad514,
    paddingHorizontal: v_af2c88(16, 18),
    paddingVertical: v_af2c88(14, 16),
    borderWidth: 2,
    borderColor: 'transparent',
    ...v_326be8.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.06,
        shadowRadius: 12,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  authFieldBoxFocused: {
    borderColor: '#111111',
    ...v_326be8.select({
      ios: {
        shadowOpacity: 0.03,
        shadowRadius: 6,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  authFieldLabel: {
    fontFamily: v_843035.medium,
    fontSize: v_af2c88(13, 14),
    color: '#9CA3AF',
    marginBottom: v_af2c88(6, 8),
  },
  authFieldInput: {
    fontFamily: v_843035.bold,
    color: '#111111',
    padding: 0,
    margin: 0,
    minHeight: v_af2c88(28, 32),
  },
  capsuleBtn: {
    width: '100%',
    minHeight: v_af2c88(52, 56),
    borderRadius: v_cad514,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: v_af2c88(8, 12),
  },
  capsuleBtnDisabled: {
    backgroundColor: '#E5E7EB',
  },
  capsuleBtnText: {
    fontFamily: v_843035.semibold,
    fontSize: v_af2c88(16, 17),
    color: v_1bfbd0.white,
  },
  capsuleBtnTextDisabled: {
    color: '#9CA3AF',
  },
  otpInputWrapper: {
    marginBottom: 0,
  },
  otpRow: {
    justifyContent: 'space-between',
    gap: v_af2c88(6, 8),
  },
  otpBox: {
    flex: 1,
    minWidth: 0,
    width: undefined,
    height: v_af2c88(48, 52),
    borderRadius: v_cad514,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginHorizontal: 0,
    backgroundColor: '#FAFAFA',
  },
  otpBoxActive: {
    borderColor: '#111111',
    borderWidth: 2,
    backgroundColor: v_1bfbd0.white,
  },
  backRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: v_af2c88(-8, -4),
    gap: 6,
  },
  backText: {
    fontFamily: v_843035.medium,
    fontSize: v_af2c88(15, 16),
    color: '#111111',
  },
  timerText: {
    textAlign: 'center',
    fontFamily: v_843035.medium,
    fontSize: v_af2c88(14, 15),
    color: '#6B7280',
    marginTop: v_af2c88(-8, -12),
  },
  timerExpired: {
    color: '#EF4444',
  },
  resendBtn: {
    alignItems: 'center',
    paddingVertical: v_af2c88(4, 8),
  },
  resendText: {
    fontFamily: v_843035.semibold,
    fontSize: v_af2c88(15, 16),
    color: '#111111',
    textDecorationLine: 'underline',
  },
  resendDisabled: {
    color: '#9CA3AF',
    textDecorationLine: 'none',
  },
  verifiedCustomerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: v_af2c88(12, 14),
  },
  verifiedCustomerInfo: {
    flex: 1,
    gap: 2,
  },
  verifiedIconCircle: {
    width: v_af2c88(40, 44),
    height: v_af2c88(40, 44),
    borderRadius: v_af2c88(20, 22),
    backgroundColor: '#DCFCE7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  guestName: {
    fontFamily: v_843035.bold,
    fontSize: v_af2c88(20, 22),
    color: '#111111',
  },
  guestPhone: {
    fontFamily: v_843035.medium,
    fontSize: v_af2c88(15, 16),
    color: '#6B7280',
  },
  analysisHint: {
    fontFamily: v_843035.medium,
    fontSize: v_af2c88(15, 16),
    color: '#6B7280',
    textAlign: 'left',
    lineHeight: v_af2c88(24, 28),
    marginTop: v_af2c88(-8, -12),
  },
  actionRow: {
    flexDirection: 'row',
    gap: v_af2c88(12, 14),
  },
  actionRowLandscape: {
    maxWidth: 560,
    alignSelf: 'center',
    width: '100%',
  },
  actionCard: {
    flex: 1,
    backgroundColor: v_1bfbd0.white,
    borderRadius: v_af2c88(18, 22),
    paddingVertical: v_af2c88(20, 24),
    alignItems: 'center',
    gap: v_af2c88(10, 12),
    borderWidth: 2,
    borderColor: 'transparent',
    minHeight: v_af2c88(120, 132),
    justifyContent: 'center',
    ...v_326be8.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.06,
        shadowRadius: 12,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  actionIconCircle: {
    width: v_af2c88(48, 56),
    height: v_af2c88(48, 56),
    borderRadius: v_af2c88(24, 28),
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionIconHealth: {
    backgroundColor: '#EEF2FF',
  },
  actionIconSkin: {
    backgroundColor: '#F3E8FF',
  },
  actionLabel: {
    fontFamily: v_843035.semibold,
    fontSize: v_af2c88(15, 16),
    color: '#111111',
    textAlign: 'center',
  },
  newGuestBtn: {
    alignItems: 'center',
    paddingVertical: v_af2c88(8, 12),
  },
  newGuestText: {
    fontFamily: v_843035.medium,
    fontSize: v_af2c88(15, 16),
    color: '#6B7280',
    textDecorationLine: 'underline',
  },
  visitorSection: {
    width: '100%',
    gap: v_af2c88(10, 12),
  },
  visitorSectionTitle: {
    fontFamily: v_843035.bold,
    fontSize: v_af2c88(16, 18),
    color: '#111111',
  },
  visitorSectionHint: {
    fontFamily: v_843035.regular,
    fontSize: v_af2c88(13, 14),
    color: '#6B7280',
    lineHeight: v_af2c88(20, 22),
  },
  visitorLoader: {
    marginVertical: v_af2c88(12, 16),
  },
  visitorEmpty: {
    fontFamily: v_843035.regular,
    fontSize: v_af2c88(14, 15),
    color: '#9CA3AF',
    paddingVertical: v_af2c88(8, 12),
  },
  visitorError: {
    fontFamily: v_843035.regular,
    fontSize: v_af2c88(14, 15),
    color: '#EF4444',
    paddingVertical: v_af2c88(8, 12),
  },
  visitorList: {
    gap: v_af2c88(6, 8),
  },
  visitorListSeparator: {
    height: v_af2c88(4, 6),
  },
  visitorRowWrap: {
    width: '100%',
  },
  visitorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: v_af2c88(10, 12),
    backgroundColor: v_1bfbd0.white,
    borderRadius: v_af2c88(12, 14),
    paddingHorizontal: v_af2c88(12, 16),
    paddingVertical: v_af2c88(10, 12),
    borderWidth: 2,
    borderColor: 'transparent',
    ...v_326be8.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
      },
      android: { elevation: 2 },
    }),
  },
  visitorRowPanel: {
    paddingRight: v_af2c88(8, 10),
  },
  visitorRowMain: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: v_af2c88(10, 12),
    minWidth: 0,
  },
  visitorDeleteBtnInline: {
    width: v_af2c88(40, 44),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  visitorRowCompact: {
    paddingVertical: v_af2c88(8, 10),
    gap: v_af2c88(8, 10),
    borderRadius: v_af2c88(10, 12),
    ...v_326be8.select({
      ios: {
        shadowOpacity: 0.03,
        shadowRadius: 4,
      },
      android: { elevation: 1 },
    }),
  },
  visitorRowActive: {
    borderColor: '#615FFF',
    backgroundColor: '#F5F3FF',
  },
  visitorAvatar: {
    width: v_af2c88(36, 40),
    height: v_af2c88(36, 40),
    borderRadius: v_af2c88(18, 20),
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  visitorInfo: {
    flex: 1,
    gap: 2,
  },
  visitorName: {
    fontFamily: v_843035.semibold,
    fontSize: v_af2c88(16, 17),
    color: '#111111',
  },
  visitorMeta: {
    fontFamily: v_843035.regular,
    fontSize: v_af2c88(13, 14),
    color: '#6B7280',
  },
});

export default v_7eacfe;
