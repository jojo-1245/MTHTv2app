import v_a3453e, { v_5ab095, v_e662ae, v_c4deb2 } from 'bapkr';
import {
  v_472849,
  v_19b633,
  v_3094a2,
  v_79c4f2,
  v_4623af,
  v_122070,
  v_03e392,
  v_e767d1,
  v_326be8,
  v_cf9c33,
  v_700696,
  v_da479e,
  v_bd64bf,
  v_0e1f26,
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

const v_2e47ea = require('../../../assets/images/robot_face.png');

interface HealthInfo {
  id: string;
  name: string;
}

const v_f7d55f = (v_8d41d7): HealthInfo[] => [
  { id: '1', name: v_8d41d7('chat.family_members.grandma') },
  { id: '2', name: v_8d41d7('chat.family_members.grandpa') },
  { id: '3', name: v_8d41d7('chat.family_members.father') },
];

type Props = v_432191<v_8ad91b, 'Chat'>;

const { width: v_0d9f50 } = v_700696.get('window');
const v_37c282 = v_0d9f50 - 80; 

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  discount?: string;
}

interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  text: string;
  products?: Product[];
}

const v_44ff40 = (v_8d41d7): Product[] => [
  {
    id: '1',
    name: v_8d41d7('chat.sample_products.product_1_name'),
    description: v_8d41d7('chat.sample_products.product_1_description'),
    price: '39,900원',
    originalPrice: '49,900원',
    discount: '20%',
  },
  {
    id: '2',
    name: v_8d41d7('chat.sample_products.product_2_name'),
    description: v_8d41d7('chat.sample_products.product_2_description'),
    price: '32,000원',
    originalPrice: '40,000원',
    discount: '20%',
  },
  {
    id: '3',
    name: v_8d41d7('chat.sample_products.product_3_name'),
    description: v_8d41d7('chat.sample_products.product_3_description'),
    price: '58,000원',
    originalPrice: '65,000원',
    discount: '11%',
  },
  {
    id: '4',
    name: v_8d41d7('chat.sample_products.product_4_name'),
    description: v_8d41d7('chat.sample_products.product_4_description'),
    price: '45,000원',
    originalPrice: '55,000원',
    discount: '18%',
  },
];

import { v_772971 } from 'jmpfvteuuztnp';

const ChatScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d, route: v_c7daf6 }) => {
  const { t: v_8d41d7 } = v_772971();
  const { navigate: v_9b57fc } = v_a0daa8();
  const v_033e14 = v_e0068c();
  const v_e99f51 = v_e662ae<v_122070>(null);

  const v_8387df = [
    {
      id: '1',
      type: 'user',
      text: v_8d41d7('chat.sample_messages.user_message'),
    },
    {
      id: '2',
      type: 'ai',
      text: v_8d41d7('chat.sample_messages.ai_message'),
      products: v_44ff40(v_8d41d7),
    },
  ];

  const [v_fa56e0, v_41d55d] = v_5ab095<ChatMessage[]>(v_8387df);
  const [v_a469c7, v_f32824] = v_5ab095('');
  const [v_3ba9c6, v_655a4e] = v_5ab095(false);
  const [v_2f29a7, v_5fe1ef] = v_5ab095(false);
  const [v_6e882f, v_6e04f8] = v_5ab095<{ [key: string]: number }>({});

  const [v_e870d1, v_aa40cb] = v_5ab095(false);
  const [v_437b17, v_c88681] = v_5ab095<HealthInfo | null>(null);
  const [v_7e4acc, v_de86c2] = v_5ab095(0);

  v_c4deb2(() => {
    if (v_c7daf6.params?.initialSearchText) {
      v_f32824(v_c7daf6.params.initialSearchText);
    }
    if (v_c7daf6.params?.initialHealthInfo) {
      v_c88681(v_c7daf6.params.initialHealthInfo);
    }
  }, [v_c7daf6.params]);

  v_c4deb2(() => {
    const v_b55c88 = v_0e1f26.addListener(
      v_326be8.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      (v_9e86fd) => v_de86c2(v_9e86fd.endCoordinates.height)
    );
    const v_88ec6a = v_0e1f26.addListener(
      v_326be8.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => v_de86c2(0)
    );

    return () => {
      v_b55c88.remove();
      v_88ec6a.remove();
    };
  }, []);

  const v_18219f = (item: v_80b5f0) => {
    switch (v_8c0b26.id) {
      case 'home':
        v_9b57fc('MetaHome');
        break;
      case 'wallet':
        v_9b57fc('Wallet');
        break;
      case 'shop':
        v_03e392.alert(v_8d41d7('common.notification'), v_8d41d7('chat.shop_preparing'));
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
        v_9b57fc('HealthConnection');
        break;
      case 'grandma':
      case 'grandpa':
        v_03e392.alert(v_8d41d7('common.notification'), v_8d41d7('chat.family_preparing'));
        break;
      case 'history':
        v_03e392.alert(v_8d41d7('common.notification'), v_8d41d7('chat.history_preparing'));
        break;
      case 'myinfo':
        v_9b57fc('MyInfo');
        break;
      default:
        if (v_8c0b26.id.startsWith('suggestion-')) {
          v_03e392.alert(v_8d41d7('common.notification'), v_8c0b26.label);
        }
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
      v_e99f51.current?.scrollToEnd({ animated: true });
    }, 100);

    setTimeout(() => {
      const v_37c94a = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        text: v_8d41d7('chat.ai_preparing'),
      };
      v_41d55d(v_ba2215 => [...v_ba2215, v_37c94a]);

      setTimeout(() => {
        v_e99f51.current?.scrollToEnd({ animated: true });
      }, 100);
    }, 1000);
  };

  const v_4f73b9 = (v_01bee9) => {
    v_03e392.alert(v_8d41d7('chat.view_product'), `${v_01bee9.name}`);
  };

  const v_74f1f5 = () => {
    v_aa40cb(v_ba2215 => !v_ba2215);
  };

  const v_073b8f = (v_e60aa7) => {
    v_c88681(v_e60aa7);
    v_aa40cb(false);
  };

  const v_80b796 = () => {
    v_c88681(null);
  };

  const v_dd0316 = (
    event: v_bd64bf<v_da479e>,
    v_7f4466,
  ) => {
    const v_bfc931 = v_d48baf.nativeEvent.contentOffset.x;
    const v_a56041 = Math.round(v_bfc931 / v_37c282);
    v_6e04f8(v_ba2215 => ({ ...v_ba2215, [v_7f4466]: v_a56041 }));
  };

  const v_80b207 = (v_01bee9) => (
    <View key={v_01bee9.id} style={v_d81136.productCardWrapper}>
      <View style={v_d81136.productCard}>
        {}
        <View style={v_d81136.productImageContainer}>
          <Image
            source={require('../../../assets/images/product_01.png')}
            style={v_d81136.productImage}
            resizeMode="contain"
          />
          {v_01bee9.discount && (
            <View style={v_d81136.discountBadge}>
              <Text style={v_d81136.discountText}>{v_01bee9.discount}</Text>
            </View>
          )}
        </View>

        {}
        <View style={v_d81136.productInfo}>
          <Text style={v_d81136.productName} numberOfLines={1}>{v_01bee9.name}</Text>
          <Text style={v_d81136.productDescription} numberOfLines={2}>{v_01bee9.description}</Text>

          <View style={v_d81136.priceContainer}>
            {v_01bee9.originalPrice && (
              <Text style={v_d81136.originalPrice}>{v_01bee9.originalPrice}</Text>
            )}
            <Text style={v_d81136.currentPrice}>{v_01bee9.price}</Text>
          </View>

          <TouchableOpacity
            style={v_d81136.viewProductButton}
            onPress={() => v_4f73b9(v_01bee9)}
            activeOpacity={0.8}
          >
            <Text style={v_d81136.viewProductButtonText}>{v_8d41d7('chat.view_product')}</Text>
            <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

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

    const v_2bcb8f = v_6e882f[v_a8cd21.id] || 0;

    return (
      <View key={v_a8cd21.id} style={v_d81136.aiMessageContainer}>
        <Text style={v_d81136.aiMessageText}>{v_a8cd21.text}</Text>

        {v_a8cd21.products && v_a8cd21.products.length > 0 && (
          <View style={v_d81136.productsContainer}>
            {}
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScroll={(v_9e86fd) => v_dd0316(v_9e86fd, v_a8cd21.id)}
              scrollEventThrottle={16}
              decelerationRate="fast"
              snapToInterval={v_37c282}
              snapToAlignment="start"
              contentContainerStyle={v_d81136.productSwiperContent}
            >
              {v_a8cd21.products.map(v_80b207)}
            </ScrollView>

            {}
            <View style={v_d81136.pagination}>
              {v_a8cd21.products.map((v_37eab7, v_a56041) => (
                <View
                  key={v_a56041}
                  style={[
                    v_d81136.paginationDot,
                    v_a56041 === v_2bcb8f && v_d81136.paginationDotActive,
                  ]}
                />
              ))}
            </View>
          </View>
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
          <TouchableOpacity
            style={v_d81136.logoContainer}
            onPress={() => v_9b57fc('MetaHome')}
            activeOpacity={0.7}
          >
            <Text style={v_d81136.logoText}>
              <Text style={v_d81136.logoMeta}>META </Text>
              <Text style={v_d81136.logoHi}>Hi</Text>
              <Text style={v_d81136.logoN}>N</Text>
              <Text style={v_d81136.logoT}>T</Text>
            </Text>
          </TouchableOpacity>
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
                placeholder={v_8d41d7('chat.placeholder')}
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
              <View style={v_d81136.extraLeft}>
                <TouchableOpacity
                  style={[v_d81136.extraButton, v_e870d1 && v_d81136.extraButtonActive]}
                  onPress={v_74f1f5}
                >
                  <Ionicons name="add" size={24} color={v_e870d1 ? '#4A5099' : '#6B7280'} />
                </TouchableOpacity>

                {}
                {v_437b17 && (
                  <TouchableOpacity
                    style={v_d81136.selectedHealthTag}
                    onPress={v_80b796}
                    activeOpacity={0.7}
                  >
                    <Text style={v_d81136.selectedHealthTagText}>{v_437b17.name}</Text>
                  </TouchableOpacity>
                )}
              </View>

              <View style={v_d81136.extraRight}>
                <TouchableOpacity
                  style={v_d81136.extraButton}
                  onPress={() => v_03e392.alert(v_8d41d7('common.notification'), v_8d41d7('chat.voice_preparing'))}
                >
                  <Ionicons name="mic-outline" size={24} color="#6B7280" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>

        {}
        {v_e870d1 && (
          <TouchableOpacity
            style={v_d81136.healthPanelBackdrop}
            activeOpacity={1}
            onPress={() => v_aa40cb(false)}
          />
        )}

        {}
        {v_e870d1 && (
          <View style={[
            v_d81136.healthPanel,
            {
              bottom: v_7e4acc > 0 ? v_7e4acc + 10 : 0,
              paddingBottom: v_7e4acc > 0 ? v_9b1a04.medium : v_033e14.bottom + v_9b1a04.medium
            }
          ]}>
            <View style={v_d81136.healthPanelHeader}>
              <Text style={v_d81136.healthPanelTitle}>{v_8d41d7('chat.health_info_title')}</Text>
              <TouchableOpacity onPress={() => {
                v_aa40cb(false);
                v_9b57fc('HealthConnection');
              }}>
                <Text style={v_d81136.healthPanelLink}>{v_8d41d7('chat.health_info_connect')}</Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              style={v_d81136.healthPanelList}
              showsVerticalScrollIndicator={false}
            >
              {v_f7d55f(v_8d41d7).map((v_8c0b26) => (
                <TouchableOpacity
                  key={v_8c0b26.id}
                  style={v_d81136.healthPanelItem}
                  onPress={() => v_073b8f(v_8c0b26)}
                  activeOpacity={0.7}
                >
                  <View style={v_d81136.healthPanelAvatar}>
                    <Image source={v_2e47ea} style={v_d81136.healthPanelAvatarImage} />
                  </View>
                  <Text style={v_d81136.healthPanelItemText}>{v_8c0b26.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}
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

  productsContainer: {
    marginTop: v_9b1a04.small,
    marginHorizontal: -v_9b1a04.large,
    height: 360, 
    overflow: 'hidden',
  },
  productSwiperContent: {
    paddingHorizontal: v_9b1a04.large,
  },
  productCardWrapper: {
    width: v_37c282,
    paddingRight: v_9b1a04.medium,
  },
  productCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    height: 320, 
  },
  productImageContainer: {
    width: '100%',
    height: 140,
    backgroundColor: '#F8F9FA',
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  discountBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#EF4444',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  discountText: {
    color: '#FFFFFF',
    fontSize: v_ef658a.small,
    fontFamily: v_843035.bold,
  },
  productInfo: {
    padding: v_9b1a04.small,
    paddingHorizontal: v_9b1a04.medium,
    paddingBottom: v_9b1a04.medium,
    height: 180, 
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.bold,
    color: '#111827',
    marginBottom: 4,
  },
  productDescription: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: '#6B7280',
    lineHeight: 18,
    marginBottom: v_9b1a04.small,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: v_9b1a04.small,
    marginBottom: v_9b1a04.medium,
  },
  originalPrice: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.regular,
    color: '#9CA3AF',
    textDecorationLine: 'line-through',
  },
  currentPrice: {
    fontSize: v_ef658a.xlarge,
    fontFamily: v_843035.bold,
    color: '#EF4444',
  },
  viewProductButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    backgroundColor: '#4A5099',
    paddingVertical: 10,
    borderRadius: 8,
  },
  viewProductButtonText: {
    color: '#FFFFFF',
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.bold,
  },

  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: v_9b1a04.medium,
    gap: 8,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D1D5DB',
  },
  paginationDotActive: {
    backgroundColor: '#4A5099',
    width: 20,
  },

  healthPanelBackdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 10,
  },

  healthPanel: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 11,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: v_9b1a04.large,
    paddingTop: v_9b1a04.large,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 10,
  },
  healthPanelHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: v_9b1a04.medium,
  },
  healthPanelTitle: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: '#9CA3AF',
  },
  healthPanelLink: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: '#4A5099',
    textDecorationLine: 'underline',
  },
  healthPanelList: {
    maxHeight: 250,
  },
  healthPanelItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: v_9b1a04.small,
    marginBottom: v_9b1a04.small / 2,
  },
  healthPanelAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#EEF2FF',
    borderWidth: 2,
    borderColor: '#A5B4FC',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginRight: v_9b1a04.medium,
  },
  healthPanelAvatarImage: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  healthPanelItemText: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
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
  extraLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: v_9b1a04.small,
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
  extraButtonActive: {
    borderColor: '#4A5099',
    backgroundColor: '#EEF2FF',
  },
  extraRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: v_9b1a04.small,
  },
  selectedHealthTag: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#A5B4FC',
    backgroundColor: '#EEF2FF',
  },
  selectedHealthTagText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: '#4A5099',
  },
});

export default v_02d653;
