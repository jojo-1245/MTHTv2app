import v_a3453e from 'bapkr';
import {
  v_03e392,
  v_472849,
  v_19b633,
  v_4623af,
  v_3094a2,
} from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_dec439 } from 'zvyjokvuouwvifyzks';
import { v_f4e704, v_c92f00, v_729608, v_570c34 } from '../components';
import type { v_8ad91b } from '../navigation';
import { v_a0daa8 } from '../navigation';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';
import type { v_7369b0 } from '../components/BottomNavigationBar';
import { v_556baf } from '../components';

type Props = v_432191<v_8ad91b, 'MetaHome'>;

const v_c1dbad = [
  {
    id: 'jackson',
    name: 'Jackson',
    relation: 'Brother',
    avatar: {
      uri: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=facearea&w=200&h=200&q=80',
    },
  },
  {
    id: 'mom',
    name: 'MOM',
    relation: 'Mother',
    avatar: undefined,
    placeholderColor: '#FFB7BE',
  },
];

const bottomNavItems: v_7369b0[] = [
  { key: 'home', label: 'MetaHint AI', icon: 'home', route: 'MetaHome' },
  { key: 'shop', label: 'Shop', icon: 'shopping-cart' },
  { key: 'wallet', label: 'Wallet', icon: 'credit-card', route: 'Wallet' },
  { key: 'profile', label: '프로필', icon: 'user', route: 'MyInfo' },
];

const MetaHomeScreen: v_a3453e.FC<Props> = () => {
  const { navigate: v_9b57fc } = v_a0daa8();

  const v_116756 = (item: v_7369b0) => {
    if (v_8c0b26.route) {

      const v_c7daf6 = v_8c0b26.route as keyof v_8ad91b;
      v_9b57fc(v_c7daf6 as any);
      return;
    }

    v_03e392.alert('안내', `${v_8c0b26.label} 화면은 준비 중입니다.`);
  };

  return (
    <SafeView
      style={v_d81136.screen}
      showBottomBackground={true} 
    >
      <Header
        title="MetaHint"
      />
      <SafeScrollView
        style={v_d81136.container}
        showBottomBackground={false}
      >
        <Text>Hello</Text>
      </SafeScrollView>
      <View >
        <BottomNavigationBar
          items={v_fce460}
          activeKey="home"
          onTabPress={v_116756}
        />
      </View>
    </SafeView>
  );
};

const v_d81136 = v_472849.create({
  screen: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    width: '100%',
    maxWidth: 780,
    paddingHorizontal: v_9b1a04.large,
    paddingVertical: v_9b1a04.large,
    flex: 1,
  },

  sectionTitle: {
    fontSize: 18,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
    marginBottom: v_9b1a04.small,
  },

  historySection: {
    width: '100%',
    gap: v_9b1a04.medium,
  },
  testSection: {
    width: '100%',
    gap: v_9b1a04.medium,
  },
  headerActions: {
    flexDirection: 'row',
    gap: v_9b1a04.small,
    paddingTop: 20,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 14,
    borderWidth: v_472849.hairlineWidth,
    borderColor: '#E3E7EF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  adWrapper: {
    paddingHorizontal: v_9b1a04.large,
    paddingBottom: v_9b1a04.medium,
    width: '100%',
    alignItems: 'center',
  },
  adBanner: {
    width: '100%',
    maxWidth: 780,
    borderRadius: 18,
    backgroundColor: '#E6E1D9',
    borderWidth: 1,
    borderColor: '#E4C65E',
    paddingVertical: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  adText: {
    fontSize: 18,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
  },
});

export default v_7aeeb0;

