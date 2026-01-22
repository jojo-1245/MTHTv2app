import v_a3453e, { v_5ab095 } from 'bapkr';
import { v_472849, v_19b633, v_3094a2, v_aa7413, v_4623af, v_09d0e5 } from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_772971 } from 'jmpfvteuuztnp';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../../constants';
import { v_729608, v_ae275d, v_570c34 } from '../../components';
import type { v_8ad91b } from '../../navigation';
import { v_a0daa8 } from '../../navigation';

type Props = v_432191<v_8ad91b, 'MyInfoSettings'>;

const MyInfoSettingsScreen: v_a3453e.FC<Props> = () => {
  const { navigate: v_9b57fc, goBack: v_c7ac57 } = v_a0daa8();
  const { t: v_8d41d7, i18n: v_9c213b } = v_772971();
  const [v_106b0c, v_47daa9] = v_5ab095(false);

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

  const settingsItems: Array<{
    id: string;
    title: string;
    description: string;
    iconName: 'translate' | 'account-remove';
    route?: keyof v_8ad91b;
    onPress?: () => void;
    meta?: string;
  }> = [
      {
        id: 'language',
        title: v_8d41d7('common.language'),
        description: v_8d41d7('profile.language_description'),
        iconName: 'translate',
        meta: v_697143,
        onPress: () => {
          v_47daa9(true);
        },
      },
      {
        id: 'close',
        title: v_8d41d7('common.close_membership'),
        description: v_8d41d7('profile.close_membership_description'),
        iconName: 'account-remove',
        route: 'MyInfoCloseMembership',
      },
    ];

  return (
    <View style={v_d81136.container}>
      <Header title={v_8d41d7('common.setting')} showBackButton onBackPress={v_c7ac57} />
      <SafeScrollView style={v_d81136.scrollView} contentContainerStyle={v_d81136.content}>
        <View style={v_d81136.menuSection}>
          {v_7f0fd3.map((v_8c0b26) => (
            <DashboardListItem
              key={v_8c0b26.id}
              title={v_8c0b26.title}
              description={v_8c0b26.description}
              iconName={v_8c0b26.iconName}
              onPress={v_8c0b26.route ? () => v_9b57fc(v_8c0b26.route as any) : v_8c0b26.onPress}
              style={v_d81136.menuItem}
              meta={v_8c0b26.meta}
            />
          ))}
        </View>
      </SafeScrollView>

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
    padding: v_9b1a04.large,
  },
  menuSection: {
    gap: v_9b1a04.medium,
  },
  menuItem: {
    marginBottom: 0,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    padding: v_9b1a04.large,
  },
  modalContent: {
    backgroundColor: v_1bfbd0.background,
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
});

export default v_4a40b2;

