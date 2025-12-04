import v_a3453e from 'bapkr';
import { v_472849, v_19b633, v_3094a2 } from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../../constants';
import { v_729608, v_570c34 } from '../../components';
import type { v_8ad91b } from '../../navigation';
import { v_a0daa8 } from '../../navigation';

type Props = v_432191<v_8ad91b, 'ClauseDetail'>;

const ClauseDetailScreen: v_a3453e.FC<Props> = ({ route: v_c7daf6 }) => {
  const { goBack: v_c7ac57 } = v_a0daa8();
  const { clauseType: v_4898e2 } = v_c7daf6.params;

  const v_9f1622 = v_4898e2 === 'terms' ? '이용약관' : '개인정보 처리방침';

  return (
    <View style={v_d81136.container}>
      <Header title={v_9f1622} showBackButton onBackPress={v_c7ac57} />
      <SafeScrollView style={v_d81136.scrollView} contentContainerStyle={v_d81136.content}>
        <Text style={v_d81136.text}>
          {v_4898e2 === 'terms'
            ? '이용약관 내용이 여기에 표시됩니다.'
            : '개인정보 처리방침 내용이 여기에 표시됩니다.'}
        </Text>
      </SafeScrollView>
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
  text: {
    fontSize: 14,
    color: v_1bfbd0.text,
    lineHeight: 22,
  },
});

export default v_5fdcb2;

