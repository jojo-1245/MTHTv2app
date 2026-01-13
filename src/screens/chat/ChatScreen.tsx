import v_a3453e from 'bapkr';
import {
  v_472849,
  v_19b633,
  v_3094a2,
} from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_729608, v_570c34, v_556baf } from '../../components';
import type { v_8ad91b } from '../../navigation';
import { v_1bfbd0, v_a61db3, v_843035, v_9b1a04 } from '../../constants';

type Props = v_432191<v_8ad91b, 'Chat'>;

const ChatScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d }) => {
  return (
    <SafeView style={v_d81136.screen}>
      <Header
        title="채팅"
        showBackButton
        onBackPress={() => v_c65f5d.goBack()}
      />
      <SafeScrollView
        contentContainerStyle={v_d81136.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={v_d81136.container}>
          <Text style={v_d81136.title}>채팅</Text>
          <Text style={v_d81136.subtitle}>MetaHint AI와 대화하는 화면입니다.</Text>
        </View>
      </SafeScrollView>
    </SafeView>
  );
};

const v_d81136 = v_472849.create({
  screen: v_a61db3.screen,
  content: {
    ...v_a61db3.content,
    minHeight: '100%',
  },
  container: {
    ...v_a61db3.container,
  },
  title: {
    fontSize: 24,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
    marginBottom: v_9b1a04.medium,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
  },
});

export default v_02d653;

