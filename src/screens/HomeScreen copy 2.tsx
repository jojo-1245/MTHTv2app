import v_a3453e from 'bapkr';
import {
  v_03e392,
  v_122070,
  v_472849,
  v_19b633,
  v_4623af,
  v_3094a2,
} from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_dec439 } from 'zvyjokvuouwvifyzks';
import { v_f4e704, v_c92f00, v_729608 } from '../components';
import type { v_8ad91b } from '../navigation';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';
import type { v_7369b0 } from '../components/BottomNavigationBar';

type Props = v_432191<v_8ad91b, 'Home'>;

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
  { key: 'home', label: 'Home', icon: 'home', route: 'Home' },
  { key: 'clone', label: '클론생성', icon: 'plus-circle' },
  { key: 'persona', label: '페르소나', icon: 'users' },
  { key: 'profile', label: '프로필', icon: 'user' },
];

const HomeScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d }) => {
  const v_116756 = (item: v_7369b0) => {
    if (v_8c0b26.route) {
      v_c65f5d.navigate(v_8c0b26.route as keyof v_8ad91b);
      return;
    }

    v_03e392.alert('안내', `${v_8c0b26.label} 화면은 준비 중입니다.`);
  };

  const v_707cb3 = (v_1833e7) => {
    v_03e392.alert('영상 통화', `${v_1833e7} 님과 연결을 준비 중입니다.`);
  };

  const v_a48659 = (
    <View style={v_d81136.headerActions}>
      <TouchableOpacity style={v_d81136.iconButton} activeOpacity={0.85}>
        <Feather name="instagram" size={20} color={v_1bfbd0.text} />
      </TouchableOpacity>
      <TouchableOpacity style={v_d81136.iconButton} activeOpacity={0.85}>
        <Feather name="search" size={20} color={v_1bfbd0.text} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={v_d81136.screen}>
      <Header
        title="List"
        subtitle='"The one you miss is waiting for you."'
        rightAccessory={v_a48659}
      />

      <ScrollView
        contentContainerStyle={v_d81136.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={v_d81136.container}>
          {v_c1dbad.map(v_707995 => (
            <ContactListItem
              key={v_707995.id}
              name={v_707995.name}
              relation={v_707995.relation}
              avatarSource={v_707995.avatar}
              placeholderColor={v_707995.placeholderColor}
              onPressVideo={() => v_707cb3(v_707995.name)}
            />
          ))}
        </View>
      </ScrollView>

      <View style={v_d81136.adWrapper}>
        <View style={v_d81136.adBanner}>
          <Text style={v_d81136.adText}>광고영역</Text>
        </View>
      </View>

      <BottomNavigationBar
        items={v_fce460}
        activeKey="home"
        onTabPress={v_116756}
      />
    </View>
  );
};

const v_d81136 = v_472849.create({
  screen: {
    flex: 1,
    backgroundColor: v_1bfbd0.background,
    paddingBottom: 40,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: v_9b1a04.large,
  },
  container: {
    width: '100%',
    maxWidth: 780,
    paddingHorizontal: v_9b1a04.large,
    paddingVertical: v_9b1a04.large,
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

export default v_c316d8;

