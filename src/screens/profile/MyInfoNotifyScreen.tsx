import v_a3453e, { v_5ab095, v_c4deb2, v_de06a3, v_e662ae } from 'bapkr';
import {
  v_3094a2,
  v_19b633,
  v_472849,
  v_cf9c33,
  v_4623af,
  v_79c4f2,
  v_f2c756,
  v_e767d1,
  v_326be8,
  v_39a996,
  v_6c4f62,
  v_0e1f26,
  v_03e392,
  v_122070,
} from 'rcmrninabrnb';
import { v_e0068c } from 'vvfgtwbmdpbnvhtfbtbgudicfmpscw';
import { v_b5df25 } from 'ernurodqvmtspux';
import { v_dec439 } from 'zvyjokvuouwvifyzks';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../../constants';
import { v_729608, v_570c34 } from '../../components';
import type { v_8ad91b } from '../../navigation';
import { v_a0daa8 } from '../../navigation';
type Props = v_432191<v_8ad91b, 'MyInfoNotify'>;

export interface NotificationItem {
  board: number;
  type: 9301 | 9302 | 9303; 
  title: string;
  contents: string | null;
  datetime: string;
  image: string | null;
  guid: string | null;
  datebegin?: string;
  dateends?: string;
}

const v_e065e5 = (v_a86996): string => {
  try {
    const v_8dffde = new Date(v_a86996);
    const v_0eaaff = v_8dffde.getFullYear();
    const v_033a94 = String(v_8dffde.getMonth() + 1).padStart(2, '0');
    const v_087ffc = String(v_8dffde.getDate()).padStart(2, '0');
    return `${v_0eaaff}. ${v_033a94}. ${v_087ffc}`;
  } catch {
    return v_a86996;
  }
};

const v_9f6fdd = (v_a86996): string => {
  try {
    const v_8dffde = new Date(v_a86996);
    const v_033a94 = String(v_8dffde.getMonth() + 1).padStart(2, '0');
    const v_087ffc = String(v_8dffde.getDate()).padStart(2, '0');
    const v_12ebc1 = String(v_8dffde.getHours()).padStart(2, '0');
    const v_ef3543 = String(v_8dffde.getMinutes()).padStart(2, '0');
    return `${v_033a94}-${v_087ffc} | ${v_12ebc1}:${v_ef3543}`;
  } catch {
    return v_a86996;
  }
};

const v_23be95 = (v_b9c00c) => {
  const v_4d79ca = {};
  v_b9c00c.forEach((v_b9faeb) => {
    const v_76f3cc = v_e065e5(v_b9faeb.datetime);
    if (!v_4d79ca[v_76f3cc]) {
      v_4d79ca[v_76f3cc] = [];
    }
    v_4d79ca[v_76f3cc].push(v_b9faeb);
  });

  Object.keys(v_4d79ca).forEach((v_76f3cc) => {
    v_4d79ca[v_76f3cc].sort((v_779914, v_148ff6) => {
      return new Date(v_779914.datetime).getTime() - new Date(v_148ff6.datetime).getTime();
    });
  });
  return v_4d79ca;
};

const v_6f7f13 = [
  {
    board: 1,
    type: 9302, 
    title: 'METAHINT EVENT',
    contents: 'Play Beta version, explore and review, get 5000 MTHT',
    datetime: '2024-09-27T02:16:00',
    image: null,
    guid: 'https://xrun.run',
    datebegin: '2024-09-27',
    dateends: '2024-10-27',
  },
  {
    board: 2,
    type: 9303, 
    title: '메타힌트 이벤트에 대해 궁금합니다. 이벤트 기간이 언제까지 되나요? ',
    contents: null,
    datetime: '2024-09-28T02:20:00',
    image: null,
    guid: null,
  },
];

const MyInfoNotifyScreen: v_a3453e.FC<Props> = () => {
  const { goBack: v_c7ac57, navigate: v_9b57fc } = v_a0daa8();
  const v_033e14 = v_e0068c();
  const [v_180423, v_8f2787] = v_5ab095('');
  const [v_b9c00c, v_0965ee] = v_5ab095<NotificationItem[]>([]);
  const [v_683210, v_34a50a] = v_5ab095(true);
  const [v_612e9f, v_575aad] = v_5ab095(false);
  const [v_5e23ec, v_10837f] = v_5ab095(false);
  const v_e99f51 = v_e662ae<v_122070>(null);
  const v_d16a0d = v_e662ae(true);
  const [v_ac3ab7, v_028502] = v_5ab095(false);
  const v_eb358e = v_e662ae(v_033e14.bottom || 0);
  const v_a87c3a = v_033e14.bottom || 0;

  const v_496106 = v_de06a3(async () => {
    v_34a50a(true);

    v_0965ee(v_6f7f13);
    v_34a50a(false);
    v_575aad(false);
  }, []);

  v_c4deb2(() => {
    v_d16a0d.current = true;
    v_496106();
  }, [v_496106]);

  const v_11b765 = v_de06a3(() => {
    if (v_e99f51.current && v_b9c00c.length > 0 && v_d16a0d.current) {
      setTimeout(() => {
        v_e99f51.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  }, [v_b9c00c.length]);

  const v_397f64 = v_de06a3(() => {
    v_d16a0d.current = false;
  }, []);

  const v_465869 = async () => {
    if (!v_180423.trim()) {
      v_03e392.alert('입력 필요', '메시지를 입력해주세요.');
      return;
    }

    v_10837f(true);
    v_d16a0d.current = true;

    v_8f2787('');

    const v_54d6ff = {
      board: Date.now(),
      type: 9303,
      title: v_180423.trim(),
      contents: null,
      datetime: new Date().toISOString(),
      image: null,
      guid: null,
    };
    v_0965ee([...v_b9c00c, v_54d6ff]);

    v_10837f(false);
  };

  const v_d5345f = v_de06a3(() => {
    v_575aad(true);
    v_496106();
  }, [v_496106]);

  const v_57fac2 = async (v_10046b) => {
    v_03e392.alert('삭제 확인', '이 메시지를 삭제하시겠습니까?', [
      { text: '취소', style: 'cancel' },
      {
        text: '삭제',
        style: 'destructive',
        onPress: () => {

          v_0965ee(v_b9c00c.filter((v_f4e98d) => v_f4e98d.board !== v_10046b));
        },
      },
    ]);
  };

  const v_0a2feb = async (v_f71b56) => {
    if (!v_f71b56) return;

    if (v_f71b56.startsWith('http://') || v_f71b56.startsWith('https://')) {
      v_f2c756.openURL(v_f71b56).catch(() => {
        v_03e392.alert('오류', '링크를 열 수 없습니다.');
      });
    } else {
      console.log('[알림] 앱 내부 라우트:', v_f71b56);
    }
  };

  const v_8172ec = (v_b9faeb, v_a56041) => {
    const v_7b6eb8 = v_b9faeb.type === 9303;
    const v_fc7457 = v_b9faeb.type === 9302;
    const v_d37866 = v_b9faeb.type === 9301;

    const v_ee89db = v_b9faeb.image
      ? `data:image/jpeg;base64,${v_b9faeb.image}`
      : null;

    if (v_7b6eb8) {

      return (
        <View key={`notification-${v_b9faeb.board}-${v_a56041}`} style={v_d81136.replyWrapper}>
          <View style={v_d81136.replyRow}>
            <TouchableOpacity
              style={v_d81136.replyBubble}
              onLongPress={() => v_57fac2(v_b9faeb.board)}
              activeOpacity={0.8}
            >
              <Text style={v_d81136.replyText}>{v_b9faeb.title}</Text>
            </TouchableOpacity>
          </View>
          <Text style={v_d81136.replyTimestamp}>{v_9f6fdd(v_b9faeb.datetime)}</Text>
        </View>
      );
    }

    const v_dfa14b = v_fc7457 && !v_ee89db;

    return (
      <View key={`notification-${v_b9faeb.board}-${v_a56041}`} style={v_d81136.messageWrapper}>
        <View style={v_d81136.avatarWrapper}>
          <Image
            source={require('../../../assets/images/metahint-logo.png')}
            style={v_d81136.avatar}
          />
          <Text style={v_d81136.avatarText}>METAHINT</Text>
        </View>
        <View style={v_d81136.messageCard}>
          {v_ee89db && (
            <Image source={{ uri: v_ee89db }} style={v_d81136.heroImage} resizeMode="cover" />
          )}
          {v_dfa14b && (
            <Image
              source={require('../../../assets/images/logo.png')}
              style={v_d81136.heroImage}
              resizeMode="cover"
            />
          )}
          <Text style={v_d81136.badge}>{v_b9faeb.title}</Text>
          {v_b9faeb.contents !== null && v_b9faeb.type !== 9303 && (
            <View>
              <Text
                style={v_d81136.description}
                numberOfLines={v_d37866 ? 3 : undefined}
                ellipsizeMode="tail"
              >
                {v_b9faeb.contents}
              </Text>
              {v_fc7457 && v_b9faeb.datebegin && v_b9faeb.dateends && (
                <Text style={v_d81136.eventDate}>
                  {v_e065e5(v_b9faeb.datebegin)} ~ {v_e065e5(v_b9faeb.dateends)}
                </Text>
              )}
              {v_d37866 && (
                <TouchableOpacity
                  style={[v_d81136.ctaButton, v_d81136.ctaButtonWithMargin]}
                  onPress={async () => {
                    const v_f71b56 = `https://oth-path-51a04e.example.invalid/oth-path?id=${v_b9faeb.board}`;
                    v_f2c756.openURL(v_f71b56).catch(() => {
                      v_03e392.alert('오류', '링크를 열 수 없습니다.');
                    });
                  }}
                  activeOpacity={0.85}
                >
                  <Text style={v_d81136.ctaText}>자세히 보기</Text>
                </TouchableOpacity>
              )}
              {v_fc7457 && v_b9faeb.guid !== '' && v_b9faeb.guid !== null && (
                <TouchableOpacity
                  style={v_d81136.ctaButton}
                  onPress={() => v_0a2feb(v_b9faeb.guid)}
                  activeOpacity={0.85}
                >
                  <Text style={v_d81136.ctaText}>Take Closer Look</Text>
                </TouchableOpacity>
              )}
            </View>
          )}
        </View>
        <Text style={v_d81136.timestamp}>{v_9f6fdd(v_b9faeb.datetime)}</Text>
      </View>
    );
  };

  const v_718f6b = () => {
    const v_4d79ca = v_23be95(v_b9c00c);
    const v_00b42c = Object.keys(v_4d79ca).sort((v_779914, v_148ff6) => {
      const v_65b903 = new Date(v_779914.replace(/\. /g, '-').replace(/\./g, ''));
      const v_9803ee = new Date(v_148ff6.replace(/\. /g, '-').replace(/\./g, ''));
      return v_65b903.getTime() - v_9803ee.getTime();
    });

    return v_00b42c.map((v_8dffde) => (
      <View key={`date-${v_8dffde}`}>
        <View style={v_d81136.dateChip}>
          <Text style={v_d81136.dateChipText}>{v_8dffde}</Text>
        </View>
        {v_4d79ca[v_8dffde].map((v_b9faeb, v_a56041) => v_8172ec(v_b9faeb, v_a56041))}
      </View>
    ));
  };

  v_c4deb2(() => {
    const v_53f5d7 = v_0e1f26.addListener('keyboardDidShow', () => v_028502(true));
    const v_52528b = v_0e1f26.addListener('keyboardDidHide', () => v_028502(false));
    return () => {
      v_53f5d7.remove();
      v_52528b.remove();
    };
  }, []);

  v_c4deb2(() => {
    if (v_326be8.OS !== 'android') {
      return;
    }
    if (!v_ac3ab7 && v_a87c3a >= 0 && v_a87c3a <= 80) {
      v_eb358e.current = Math.min(v_a87c3a, 56);
    }
  }, [v_a87c3a, v_ac3ab7]);

  const v_5dedb1 =
    v_326be8.OS === 'android'
      ? v_ac3ab7
        ? 16
        : Math.max(v_eb358e.current, 24)
      : 16;

  return (
    <KeyboardAvoidingView
      style={v_d81136.flex}
      behavior={v_326be8.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={v_326be8.OS === 'ios' ? 0 : 0}
      enabled={v_326be8.OS === 'ios' ? true : v_ac3ab7}
    >
      <View style={v_d81136.container}>
        <StatusBar style="dark" />
        <Header
          title="Notify"
          onBackPress={v_c7ac57}
          showBackButton
        />

        {v_683210 ? (
          <View style={v_d81136.loadingContainer}>
            <ActivityIndicator size="large" color={v_1bfbd0.buttonPrimary} />
          </View>
        ) : (
          <SafeScrollView
            ref={v_e99f51}
            style={v_d81136.list}
            backgroundColor={'#f2f2f7'}
            contentContainerStyle={v_d81136.listContent}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            onContentSizeChange={v_11b765}
            onScrollBeginDrag={v_397f64}
            refreshControl={<RefreshControl refreshing={v_612e9f} onRefresh={v_d5345f} />}
            showBottomBackground={false}
          >
            {v_b9c00c.length === 0 && !v_683210 ? (
              <View style={v_d81136.emptyContainer}>
                <Text style={v_d81136.emptyText}>알림이 없습니다.</Text>
              </View>
            ) : (
              v_718f6b()
            )}
          </SafeScrollView>
        )}

        <View
          style={[
            v_d81136.inputBar,
            {
              paddingBottom: v_5dedb1,
            },
          ]}
        >
          <View style={v_d81136.inputWrapper}>
            <TextInput
              style={v_d81136.input}
              placeholder="메시지를 입력하세요"
              placeholderTextColor={v_1bfbd0.placeholder}
              value={v_180423}
              onChangeText={v_8f2787}
              editable={!v_5e23ec}
            />
          </View>
          <TouchableOpacity
            style={[v_d81136.sendButton, v_5e23ec && v_d81136.sendButtonDisabled]}
            onPress={v_465869}
            activeOpacity={0.8}
            disabled={v_5e23ec}
          >
            {v_5e23ec ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={v_d81136.sendButtonText}>전송</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const v_d81136 = v_472849.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#f2f2f7',
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    gap: 24,
    flexGrow: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 14,
    color: v_1bfbd0.secondaryText,
  },
  messageWrapper: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 26,
    height: 26,
    borderRadius: 13,
    left: 0,
    top: 0,
  },
  avatarText: {
    fontSize: 14,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
  },
  avatarWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 7,
  },
  messageCard: {
    backgroundColor: v_1bfbd0.background,
    borderRadius: 12,
    padding: 12,
    gap: 10,
    width: '95%',
  },
  heroImage: {
    width: '100%',
    height: 150,
    borderRadius: 12,
    marginBottom: 4,
  },
  badge: {
    fontSize: 14,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
  },
  description: {
    fontSize: 14,
    color: v_1bfbd0.secondaryText,
  },
  eventDate: {
    fontSize: 13,
    color: v_1bfbd0.secondaryText,
    marginTop: 4,
  },
  ctaButton: {
    backgroundColor: v_1bfbd0.buttonPrimary,
    borderRadius: 6,
    height: 50,
    marginTop: 12,
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctaButtonWithMargin: {
    marginTop: 14,
  },
  ctaText: {
    color: v_1bfbd0.background,
    fontSize: 14,
    fontFamily: v_843035.bold,
  },
  timestamp: {
    marginTop: 8,
    fontSize: 10,
    color: v_1bfbd0.secondaryText,
    textAlign: 'left',
  },
  dateChip: {
    alignSelf: 'center',
    backgroundColor: 'rgba(51,57,91,0.1)',
    borderRadius: 50,
    paddingHorizontal: 24,
    paddingVertical: 4,
    marginBottom: 12,
  },
  dateChipText: {
    fontSize: 10,
    color: v_1bfbd0.text,
  },
  replyWrapper: {
    alignItems: 'flex-end',
    gap: 6,
    marginBottom: 16,
    width: '95%',
    alignSelf: 'flex-end',
  },
  replyRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
  },
  replyBubble: {
    backgroundColor: v_1bfbd0.background,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignSelf: 'flex-end',
  },
  replyText: {
    fontSize: 14,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
  },
  replyTimestamp: {
    fontSize: 10,
    color: v_1bfbd0.secondaryText,
  },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 24,
    paddingVertical: 16,
    paddingBottom: 16,
    backgroundColor: v_1bfbd0.background,
  },
  inputWrapper: {
    flex: 1,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
    backgroundColor: v_1bfbd0.background,
    paddingHorizontal: 12,
    paddingVertical: 12,
    justifyContent: 'center',
  },
  input: {
    fontSize: 14,
    color: v_1bfbd0.text,
    minHeight: 24,
    maxHeight: 24,
    padding: 0,
    margin: 0,
  },
  sendButton: {
    backgroundColor: v_1bfbd0.buttonPrimary,
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 10,
    minWidth: 60,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButtonDisabled: {
    opacity: 0.6,
  },
  sendButtonText: {
    color: v_1bfbd0.background,
    fontSize: 14,
  },
});

export default v_386af2;
