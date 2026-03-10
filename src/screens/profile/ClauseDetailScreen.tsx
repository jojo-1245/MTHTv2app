import v_a3453e, { v_c4deb2, v_5ab095 } from 'bapkr';
import { v_472849, v_19b633, v_3094a2, v_39a996 } from 'rcmrninabrnb';
import { v_772971 } from 'jmpfvteuuztnp';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../../constants';
import { v_729608, v_570c34, v_1c1837 } from '../../components';
import type { v_8ad91b } from '../../navigation';
import { v_a0daa8 } from '../../navigation';
import { v_f51778 } from '../../services';

type Props = v_432191<v_8ad91b, 'ClauseDetail'>;

const ClauseDetailScreen: v_a3453e.FC<Props> = ({ route: v_c7daf6 }) => {
  const { t: v_8d41d7 } = v_772971();
  const { goBack: v_c7ac57 } = v_a0daa8();
  const { clauseType: v_4898e2 } = v_c7daf6.params;

  const [v_495465, v_598d8c] = v_5ab095<string>('');
  const [v_683210, v_34a50a] = v_5ab095<boolean>(true);

  const v_9f1622 = v_4898e2 === 'terms' ? v_8d41d7('my_info_clauses.terms_title') : v_8d41d7('my_info_clauses.privacy_title');

  v_c4deb2(() => {
    if (v_4898e2 === 'privacy') {
      v_598d8c(v_8d41d7('my_info_clauses.privacy_content'));
      v_34a50a(false);
      return;
    }
    const v_16f577 = async () => {
      try {
        v_34a50a(true);
        const v_8f00b9 = await v_f51778();
        if (v_8f00b9.success && v_8f00b9.data?.content) {
          v_598d8c(v_8f00b9.data.content);
        } else {
          v_598d8c(v_8d41d7('alert.default_title'));
        }
      } catch (v_5e9bfe) {
        console.error('Failed to fetch policy:', v_5e9bfe);
        v_598d8c(v_8d41d7('alert.default_title'));
      } finally {
        v_34a50a(false);
      }
    };
    v_16f577();
  }, [v_4898e2, v_8d41d7]);

  return (
    <MainLayout activeKey="myinfo">
      <View style={v_d81136.container}>
        <Header title={v_9f1622} showBackButton onBackPress={v_c7ac57} />
        <SafeScrollView style={v_d81136.scrollView} contentContainerStyle={v_d81136.content} showBottomBackground={false} disableBottomPadding={true}>
          {v_683210 ? (
            <ActivityIndicator size="large" color={v_1bfbd0.primary} style={{ marginTop: 20 }} />
          ) : (
            <Text style={v_d81136.text}>
              {v_495465}
            </Text>
          )}
        </SafeScrollView>
      </View>
    </MainLayout>
  );
};

const v_d81136 = v_472849.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: v_1bfbd0.background,
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

