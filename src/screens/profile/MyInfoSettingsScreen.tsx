import v_a3453e, { v_5ab095, v_de06a3 } from 'bapkr';
import {
  v_472849,
  v_19b633,
  v_3094a2,
  v_aa7413,
  v_4623af,
  v_09d0e5,
  v_79139e,
  v_326be8,
  v_03e392,
  v_39a996,
} from 'rcmrninabrnb';
import { v_cf763b } from 'ixigazcpvfldbecwtbvavtbi';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_772971 } from 'jmpfvteuuztnp';
import v_e84827 from 'bkjbgtcoyuizqwgwtnaxmfkyvlqwevapsqmanbsnv';
import { v_dec439 } from 'zvyjokvuouwvifyzks';
import v_719e34 from 'pcgoftamvavhkhqudmtnjked';
import { v_3aacaa } from '../../services/versionService';
import { v_1bfbd0, v_843035, v_9b1a04, v_ef658a } from '../../constants';
import { v_729608, v_570c34, v_1c1837, v_9cafa7 } from '../../components';
import type { v_8ad91b } from '../../navigation';
import { v_a0daa8 } from '../../navigation';
import { v_96a538 } from '../../hooks/useVersionCheck';
import {
  v_0c7e2f,
  v_381355,
  v_015a21,
  v_8348d9,
} from '../../services/stepTrackingService';
import {
  v_3e84df,
  v_5070da,
  type v_9613bb,
} from '../../services/permissionService';

const v_8bf63f = 'metahint_step_notification_enabled';
const v_c19e2d = 10000;

type Props = v_432191<v_8ad91b, 'MyInfoSettings'>;

const PERMISSION_ITEMS: { type: v_9613bb; iconName: keyof typeof v_dec439.glyphMap }[] = [
  { type: 'notification', iconName: 'bell' },
  { type: 'activity', iconName: 'activity' },
  { type: 'camera', iconName: 'camera' },
  { type: 'media', iconName: 'image' },
];

const MyInfoSettingsScreen: v_a3453e.FC<Props> = () => {
  const { navigate: v_9b57fc, goBack: v_c7ac57 } = v_a0daa8();
  const { t: v_8d41d7, i18n: v_9c213b } = v_772971();
  const { isUpdating: v_24a76a, progress: v_a63fde } = v_96a538();
  const [v_106b0c, v_47daa9] = v_5ab095(false);
  const [v_264467, v_e882e2] = v_5ab095(false);
  const [v_94f165, v_f1704d] = v_5ab095(false);
  const [v_ae6990, v_cd31e1] = v_5ab095<Record<v_9613bb, boolean>>({
    activity: false,
    notification: false,
    camera: false,
    media: false,
  });
  const [v_211e13, v_fd59c5] = v_5ab095<string | null>(null);

  const v_d4d423 = [
    { code: 'ko', label: v_8d41d7('common.korean') },
    { code: 'en', label: v_8d41d7('common.english') },
    { code: 'id', label: v_8d41d7('common.indonesian') },
  ];

  const v_697143 = v_d4d423.find((v_1614db) => v_1614db.code === v_9c213b.language)?.label || v_8d41d7('common.korean');

  const v_ae07ea = (v_c99bd2) => {
    v_9c213b.changeLanguage(v_c99bd2);
    v_47daa9(false);
  };

  const v_432eab = v_de06a3(async () => {
    const next: Record<v_9613bb, boolean> = {
      activity: false,
      notification: false,
      camera: false,
      media: false,
    };
    for (const { type: v_3b27d9 } of v_f4b664) {
      v_a448ad[v_3b27d9] = await v_3e84df(v_3b27d9);
    }
    v_cd31e1(v_a448ad);
  }, []);

  const v_d5fcbb = v_de06a3(async () => {
    const v_81e2ef = await v_e84827.getItem(v_8bf63f);
    v_e882e2(v_81e2ef === 'true');
  }, []);

  v_cf763b(
    v_de06a3(() => {
      v_d5fcbb();
      v_432eab();

      v_3aacaa().then((v_ab4c96) => {
        if (v_ab4c96) v_fd59c5(v_ab4c96.version);
      });
    }, [v_d5fcbb, v_432eab])
  );

  const v_16fedc = async (v_3b402b) => {
    if (!v_0c7e2f()) {
      v_03e392.alert(v_8d41d7('common.notification'), v_8d41d7('home.step_notification_unsupported'));
      return;
    }
    v_f1704d(true);
    try {
      if (v_3b402b) {
        const v_43c42e = await v_381355(v_c19e2d, v_8d41d7('home.step_unit'));
        if (v_43c42e.success) {
          v_e882e2(true);
          await v_e84827.setItem(v_8bf63f, 'true');
          v_8348d9(0, v_c19e2d, v_8d41d7('home.step_unit'));
        } else {
          v_03e392.alert(v_8d41d7('common.error'), v_43c42e.error ?? v_8d41d7('home.step_notification_start_failed'));
        }
      } else {
        await v_015a21();
        v_e882e2(false);
        await v_e84827.setItem(v_8bf63f, 'false');
      }
    } catch (v_9e86fd) {
      v_03e392.alert(v_8d41d7('common.error'), v_8d41d7('home.step_notification_start_failed'));
    } finally {
      v_f1704d(false);
    }
  };

  const v_f60653 = async (type: v_9613bb) => {
    await v_5070da(v_3b27d9);
    await v_432eab();
  };

  const v_f27822 = (type: v_9613bb) => {
    switch (v_3b27d9) {
      case 'notification':
        return v_8d41d7('profile.permission_notification');
      case 'activity':
        return v_8d41d7('profile.permission_activity');
      case 'camera':
        return v_8d41d7('profile.permission_camera');
      case 'media':
        return v_8d41d7('profile.permission_media');
      default:
        return '';
    }
  };

  return (
    <MainLayout activeKey="myinfo">
      <View style={v_d81136.container}>
        <Header title={v_8d41d7('common.setting')} showBackButton onBackPress={v_c7ac57} />
        <SafeScrollView style={v_d81136.scrollView} contentContainerStyle={v_d81136.content} showBottomBackground={false} disableBottomPadding={true}>
          {}
          {v_326be8.OS === 'android' && v_0c7e2f() && (
            <View style={v_d81136.section}>
              <Text style={v_d81136.sectionTitle}>{v_8d41d7('profile.notify')}</Text>
              <View style={v_d81136.menuCard}>
                <View style={v_d81136.menuItem}>
                  <View style={v_d81136.menuIconWrap}>
                    <Feather name="bell" size={24} color={v_1bfbd0.text} />
                  </View>
                  <View style={v_d81136.menuItemTextWrap}>
                    <Text style={v_d81136.menuItemText}>{v_8d41d7('home.step_notification_label')}</Text>
                    <Text style={v_d81136.menuItemDesc}>{v_8d41d7('profile.permission_notification_desc')}</Text>
                  </View>
                  <Switch
                    value={v_264467}
                    onValueChange={v_16fedc}
                    disabled={v_94f165}
                    trackColor={{ false: '#E5E7EB', true: '#C4B5FD' }}
                    thumbColor={v_264467 ? '#7C3AED' : '#F3F4F6'}
                  />
                </View>
              </View>
            </View>
          )}

          {}
          <View style={v_d81136.section}>
            <Text style={v_d81136.sectionTitle}>{v_8d41d7('profile.permissions_section')}</Text>
            <View style={v_d81136.menuCard}>
              {v_f4b664.map(({ type: v_3b27d9, iconName: v_c288e9 }, v_a56041) => (
                <TouchableOpacity
                  key={v_3b27d9}
                  style={[v_d81136.menuItem, v_a56041 < v_f4b664.length - 1 && v_d81136.menuItemBorder]}
                  onPress={() => v_f60653(v_3b27d9)}
                  activeOpacity={0.88}
                >
                  <View style={v_d81136.menuIconWrap}>
                    <Feather name={v_c288e9} size={24} color={v_1bfbd0.text} />
                  </View>
                  <Text style={v_d81136.menuItemText}>{v_f27822(v_3b27d9)}</Text>
                  <View
                    style={[
                      v_d81136.permissionBadge,
                      v_ae6990[v_3b27d9] ? v_d81136.badgeGranted : v_d81136.badgeDenied,
                    ]}
                  >
                    <Text
                      style={[
                        v_d81136.permissionBadgeText,
                        v_ae6990[v_3b27d9] ? v_d81136.badgeTextGranted : v_d81136.badgeTextDenied,
                      ]}
                    >
                      {v_ae6990[v_3b27d9] ? v_8d41d7('profile.permission_granted') : v_8d41d7('profile.permission_denied')}
                    </Text>
                  </View>
                  <Feather name="chevron-right" size={20} color="#9CA3AF" />
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {}
          <View style={v_d81136.section}>
            <Text style={v_d81136.sectionTitle}>{v_8d41d7('profile.settings')}</Text>
            <View style={v_d81136.menuCard}>
              <TouchableOpacity
                style={[v_d81136.menuItem, v_d81136.menuItemBorder]}
                onPress={() => v_47daa9(true)}
                activeOpacity={0.88}
              >
                <View style={v_d81136.menuIconWrap}>
                  <Feather name="globe" size={24} color={v_1bfbd0.text} />
                </View>
                <Text style={v_d81136.menuItemText}>{v_8d41d7('common.language')}</Text>
                <Text style={v_d81136.menuItemMeta}>{v_697143}</Text>
                <Feather name="chevron-right" size={20} color="#9CA3AF" />
              </TouchableOpacity>
              <TouchableOpacity
                style={v_d81136.menuItem}
                onPress={() => v_9b57fc('MyInfoCloseMembership')}
                activeOpacity={0.88}
              >
                <View style={v_d81136.menuIconWrap}>
                  <Feather name="user-x" size={24} color={v_1bfbd0.text} />
                </View>
                <Text style={v_d81136.menuItemText}>{v_8d41d7('common.close_membership')}</Text>
                <Feather name="chevron-right" size={20} color="#9CA3AF" />
              </TouchableOpacity>
            </View>
          </View>

          {}
          <View style={v_d81136.versionContainer}>
            <Text style={v_d81136.versionText}>
              {v_326be8.OS === 'ios' ? 'iOS' : 'Android'} Store Version: {v_719e34.getVersion()} ({v_719e34.getBuildNumber()})
            </Text>
            {v_211e13 && (
              <Text style={v_d81136.versionText}>
                OTA Version: {v_211e13}
              </Text>
            )}
          </View>
        </SafeScrollView>
        <UpdateOverlay visible={v_24a76a} progress={v_a63fde} />

        <Modal
          visible={v_106b0c}
          transparent
          animationType="fade"
          onRequestClose={() => v_47daa9(false)}
        >
          <Pressable
            style={v_d81136.modalOverlay}
            onPress={() => v_47daa9(false)}
          >
            <View style={v_d81136.modalContent}>
              <Text style={v_d81136.modalTitle}>{v_8d41d7('common.select_language')}</Text>
              <View style={v_d81136.languageList}>
                {v_d4d423.map((v_5254bf) => (
                  <TouchableOpacity
                    key={v_5254bf.code}
                    style={[
                      v_d81136.languageItem,
                      v_9c213b.language === v_5254bf.code && v_d81136.activeLanguageItem,
                    ]}
                    onPress={() => v_ae07ea(v_5254bf.code)}
                  >
                    <Text
                      style={[
                        v_d81136.languageText,
                        v_9c213b.language === v_5254bf.code && v_d81136.activeLanguageText,
                      ]}
                    >
                      {v_5254bf.label}
                    </Text>
                    {v_9c213b.language === v_5254bf.code && (
                      <View style={v_d81136.activeDot} />
                    )}
                  </TouchableOpacity>
                ))}
              </View>
              <TouchableOpacity
                style={v_d81136.cancelButton}
                onPress={() => v_47daa9(false)}
              >
                <Text style={v_d81136.cancelButtonText}>{v_8d41d7('common.cancel')}</Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        </Modal>
      </View>
    </MainLayout>
  );
};

const v_d81136 = v_472849.create({
  container: {
    flex: 1,
    backgroundColor: v_1bfbd0.background,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: v_9b1a04.large,
    paddingVertical: v_9b1a04.medium,
    paddingBottom: v_9b1a04.xlarge,
    backgroundColor: '#F9FAFB',
  },
  section: {
    marginBottom: v_9b1a04.xlarge,
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.secondaryText,
    marginBottom: v_9b1a04.small,
    marginLeft: 4,
  },
  menuCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: v_9b1a04.medium,
  },
  menuItemBorder: {
    borderBottomWidth: v_472849.hairlineWidth,
    borderBottomColor: '#E5E7EB',
  },
  menuIconWrap: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  menuItemTextWrap: {
    flex: 1,
  },
  menuItemText: {
    flex: 1,
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
  },
  menuItemDesc: {
    fontSize: 12,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    marginTop: 2,
  },
  menuItemMeta: {
    fontSize: 14,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.secondaryText,
    marginRight: 4,
  },
  permissionBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
  },
  badgeGranted: {
    backgroundColor: '#DCFCE7',
  },
  badgeDenied: {
    backgroundColor: '#FEE2E2',
  },
  permissionBadgeText: {
    fontSize: 12,
    fontFamily: v_843035.semibold,
  },
  badgeTextGranted: {
    color: '#15803D',
  },
  badgeTextDenied: {
    color: '#DC2626',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    padding: v_9b1a04.large,
  },
  modalContent: {
    backgroundColor: v_1bfbd0.white,
    borderRadius: 24,
    padding: v_9b1a04.xlarge,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
    marginBottom: v_9b1a04.large,
    textAlign: 'center',
  },
  languageList: {
    marginBottom: v_9b1a04.large,
  },
  languageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: v_9b1a04.medium,
    paddingHorizontal: v_9b1a04.large,
    borderRadius: 16,
    marginBottom: v_9b1a04.small,
    backgroundColor: '#F8FAFC',
  },
  activeLanguageItem: {
    backgroundColor: '#EEF2FF',
  },
  languageText: {
    fontSize: 16,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.secondaryText,
  },
  activeLanguageText: {
    color: v_1bfbd0.primary,
    fontFamily: v_843035.bold,
  },
  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: v_1bfbd0.primary,
  },
  cancelButton: {
    paddingVertical: v_9b1a04.medium,
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: 16,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.secondaryText,
  },
  versionContainer: {
    marginTop: v_9b1a04.medium,
    paddingVertical: v_9b1a04.large,
    alignItems: 'center',
    opacity: 0.5,
  },
  versionText: {
    fontSize: 12,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    lineHeight: 18,
  },
});

export default v_4a40b2;
