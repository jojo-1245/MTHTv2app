import v_a3453e, { v_5ab095, v_e662ae } from 'bapkr';
import {
  v_472849,
  v_19b633,
  v_3094a2,
  v_79c4f2,
  v_4623af,
  v_122070,
  v_03e392,
  v_f2c756,
  v_e767d1,
  v_326be8,
} from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_dec439, v_25515d } from 'zvyjokvuouwvifyzks';
import { v_e0068c } from 'vvfgtwbmdpbnvhtfbtbgudicfmpscw';
import { v_b5df25 } from 'ernurodqvmtspux';
import { v_556baf, v_5deec6 } from '../../components';
import type { v_80b5f0 } from '../../components/SidebarMenu';
import type { v_8ad91b } from '../../navigation';
import { v_a0daa8 } from '../../navigation';
import { v_1bfbd0, v_843035, v_9b1a04, v_ef658a } from '../../constants';

type Props = v_432191<v_8ad91b, 'Chat'>;

interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  text: string;
  linkCard?: {
    title: string;
    url: string;
  };
}

const v_8387df = [
  {
    id: '1',
    type: 'user',
    text: '키가 크는약이 있나?',
  },
  {
    id: '2',
    type: 'ai',
    text: '키크는약은 없지만 관련 영양제 추천해드릴게요',
    linkCard: {
      title: '결과만 나오면됩니다.',
      url: 'https://example.com/supplements',
    },
  },
];

const ChatScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d }) => {
  const { navigate: v_9b57fc } = v_a0daa8();
  const v_033e14 = v_e0068c();
  const v_e99f51 = v_e662ae<v_122070>(null);
  const [v_fa56e0, v_41d55d] = v_5ab095<ChatMessage[]>(v_8387df);
  const [v_a469c7, v_f32824] = v_5ab095('');
  const [v_3ba9c6, v_655a4e] = v_5ab095(false);
  const [v_2f29a7, v_5fe1ef] = v_5ab095(false);

  const v_18219f = (item: v_80b5f0) => {
    switch (v_8c0b26.id) {
      case 'wallet':
        v_9b57fc('Wallet');
        break;
      case 'shop':
        v_03e392.alert('안내', 'Shop 화면은 준비 중입니다.');
        break;
      case 'chat':

        break;
      case 'skin':
        v_9b57fc('SkinAnalysis');
        break;
      case 'health':
        v_9b57fc('HealthAnalysis');
        break;
      case 'connect':
        v_03e392.alert('안내', '건강정보 연결하기 화면은 준비 중입니다.');
        break;
      default:
        break;
    }
  };

  const v_465869 = () => {
    if (!v_a469c7.trim()) return;

    const v_54d6ff = {
      id: Date.now().toString(),
      type: 'user',
      text: v_a469c7.trim(),
    };

    v_41d55d(v_ba2215 => [...v_ba2215, v_54d6ff]);
    v_f32824('');

    setTimeout(() => {
      const v_37c94a = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        text: '답변을 준비하고 있습니다...',
      };
      v_41d55d(v_ba2215 => [...v_ba2215, v_37c94a]);
      v_e99f51.current?.scrollToEnd({ animated: true });
    }, 1000);

    v_e99f51.current?.scrollToEnd({ animated: true });
  };

  const v_4c3e84 = (v_f71b56) => {
    v_f2c756.openURL(v_f71b56).catch(() => {
      v_03e392.alert('오류', '링크를 열 수 없습니다.');
    });
  };

  const v_08bcd6 = (v_f71b56) => {
    v_03e392.alert('복사됨', '링크가 클립보드에 복사되었습니다.');
  };

  const v_82c167 = (v_a8cd21) => {
    if (v_a8cd21.type === 'user') {
      return (
        <View key={v_a8cd21.id} style={v_d81136.userMessageContainer}>
          <View style={v_d81136.userMessage}>
            <Text style={v_d81136.userMessageText}>{v_a8cd21.text}</Text>
          </View>
        </View>
      );
    }

    return (
      <View key={v_a8cd21.id} style={v_d81136.aiMessageContainer}>
        <Text style={v_d81136.aiMessageText}>{v_a8cd21.text}</Text>

        {v_a8cd21.linkCard && (
          <TouchableOpacity
            style={v_d81136.linkCard}
            onPress={() => v_4c3e84(v_a8cd21.linkCard!.url)}
            activeOpacity={0.8}
          >
            <Text style={v_d81136.linkCardTitle}>{v_a8cd21.linkCard.title}</Text>
            <View style={v_d81136.linkCardFooter}>
              <TouchableOpacity
                style={v_d81136.copyButton}
                onPress={() => v_08bcd6(v_a8cd21.linkCard!.url)}
              >
                <Ionicons name="copy-outline" size={18} color="#9CA3AF" />
              </TouchableOpacity>
            </View>
            <Text style={v_d81136.linkCardUrl} numberOfLines={1}>
              {v_a8cd21.linkCard.url}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <>
      <StatusBar style={v_2f29a7 ? "dark" : "dark"} />
      <SafeView style={v_d81136.screen}>
        {}
        <View style={[v_d81136.header, { paddingTop: v_033e14.top + v_9b1a04.small }]}>
          <TouchableOpacity
            onPress={() => v_5fe1ef(true)}
            style={v_d81136.menuButton}
            activeOpacity={0.7}
          >
            <Feather name="menu" size={24} color="#374151" />
          </TouchableOpacity>
          <View style={v_d81136.logoContainer}>
            <Text style={v_d81136.logoText}>
              <Text style={v_d81136.logoMeta}>META </Text>
              <Text style={v_d81136.logoHi}>Hi</Text>
              <Text style={v_d81136.logoN}>N</Text>
              <Text style={v_d81136.logoT}>T</Text>
            </Text>
          </View>
          <View style={v_d81136.headerRight} />
        </View>

        <KeyboardAvoidingView
          style={v_d81136.keyboardAvoid}
          behavior={v_326be8.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={v_326be8.OS === 'ios' ? v_033e14.top + 60 : 0}
        >
          {}
          <ScrollView
            ref={v_e99f51}
            style={v_d81136.chatArea}
            contentContainerStyle={v_d81136.chatContent}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            {v_fa56e0.map(v_82c167)}
          </ScrollView>

          {}
          <View style={[v_d81136.inputContainer]}>
            <View style={[v_d81136.inputBar, v_3ba9c6 && v_d81136.inputBarFocused]}>
              <TextInput
                style={v_d81136.textInput}
                placeholder="건강정보를 검색하세요"
                placeholderTextColor="#999"
                value={v_a469c7}
                onChangeText={v_f32824}
                onSubmitEditing={v_465869}
                onFocus={() => v_655a4e(true)}
                onBlur={() => v_655a4e(false)}
                returnKeyType="send"
                multiline={false}
              />
              {v_a469c7.trim() ? (
                <TouchableOpacity
                  onPress={v_465869}
                  style={v_d81136.sendButton}
                >
                  <Ionicons name="arrow-up" size={20} color="#FFFFFF" />
                </TouchableOpacity>
              ) : null}
            </View>

            {}
            <View style={v_d81136.inputExtras}>
              <TouchableOpacity
                style={v_d81136.extraButton}
                onPress={() => v_03e392.alert('추가', '파일 첨부 기능은 준비 중입니다.')}
              >
                <Ionicons name="add" size={24} color="#6B7280" />
              </TouchableOpacity>

              <View style={v_d81136.extraRight}>
                <TouchableOpacity style={v_d81136.healthTag}>
                  <Text style={v_d81136.healthTagText}>건강관리</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={v_d81136.extraButton}
                  onPress={() => v_03e392.alert('음성', '음성 입력 기능은 준비 중입니다.')}
                >
                  <Ionicons name="mic-outline" size={24} color="#6B7280" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeView>

      <SidebarMenu
        visible={v_2f29a7}
        onClose={() => v_5fe1ef(false)}
        onMenuItemPress={v_18219f}
        userProfile={{ name: 'TED' }}
      />
    </>
  );
};

const v_d81136 = v_472849.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: v_9b1a04.large,
    paddingVertical: v_9b1a04.medium,
    backgroundColor: '#FFFFFF',
  },
  menuButton: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 22,
    fontFamily: v_843035.bold,
  },
  logoMeta: {
    color: '#4A5099',
  },
  logoHi: {
    color: '#4A5099',
  },
  logoN: {
    color: '#F59E0B',
  },
  logoT: {
    color: '#EF4444',
  },
  headerRight: {
    width: 44,
  },

  keyboardAvoid: {
    flex: 1,
  },

  chatArea: {
    flex: 1,
  },
  chatContent: {
    paddingHorizontal: v_9b1a04.large,
    paddingVertical: v_9b1a04.medium,
    flexGrow: 1,
  },

  userMessageContainer: {
    alignItems: 'flex-end',
    marginBottom: v_9b1a04.medium,
  },
  userMessage: {
    backgroundColor: '#E5E7EB',
    borderRadius: 20,
    borderTopRightRadius: 4,
    paddingHorizontal: v_9b1a04.medium,
    paddingVertical: v_9b1a04.small + 4,
    maxWidth: '80%',
  },
  userMessageText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.regular,
    color: '#374151',
    lineHeight: 22,
  },

  aiMessageContainer: {
    alignItems: 'flex-start',
    marginBottom: v_9b1a04.large,
  },
  aiMessageText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.regular,
    color: '#374151',
    lineHeight: 22,
    marginBottom: v_9b1a04.medium,
  },

  linkCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: v_9b1a04.large,
    marginTop: v_9b1a04.small,
  },
  linkCardTitle: {
    fontSize: v_ef658a.xlarge,
    fontFamily: v_843035.bold,
    color: '#111827',
    marginBottom: v_9b1a04.xlarge * 2,
  },
  linkCardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: v_9b1a04.small,
  },
  copyButton: {
    padding: 4,
  },
  linkCardUrl: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: '#9CA3AF',
  },

  inputContainer: {
    paddingHorizontal: v_9b1a04.large,
    paddingTop: v_9b1a04.small,
    backgroundColor: '#F9FAFB',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingHorizontal: v_9b1a04.large,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  inputBarFocused: {
    borderColor: '#4A5099',
  },
  textInput: {
    flex: 1,
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.text,
    paddingVertical: 12,
  },
  sendButton: {
    backgroundColor: '#4A5099',
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputExtras: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: v_9b1a04.small,
  },
  extraButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  extraRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: v_9b1a04.small,
  },
  healthTag: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
  },
  healthTagText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: '#374151',
  },
});

export default v_02d653;
