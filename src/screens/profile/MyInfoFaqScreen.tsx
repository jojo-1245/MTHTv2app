import v_a3453e, { v_5ab095 } from 'bapkr';
import { v_472849, v_19b633, v_4623af, v_3094a2 } from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_772971 } from 'jmpfvteuuztnp';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../../constants';
import { v_729608, v_570c34, v_1c1837 } from '../../components';
import type { v_8ad91b } from '../../navigation';
import { v_a0daa8 } from '../../navigation';
import { v_dec439 } from 'zvyjokvuouwvifyzks';

type Props = v_432191<v_8ad91b, 'MyInfoFaq'>;

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const v_334731 = (v_8d41d7): FAQItem[] => [
  {
    id: '1',
    question: v_8d41d7('my_info_faq.faq_1_question'),
    answer: v_8d41d7('my_info_faq.faq_1_answer'),
  },
  {
    id: '2',
    question: v_8d41d7('my_info_faq.faq_2_question'),
    answer: v_8d41d7('my_info_faq.faq_2_answer'),
  },
  {
    id: '3',
    question: v_8d41d7('my_info_faq.faq_3_question'),
    answer: v_8d41d7('my_info_faq.faq_3_answer'),
  },
];

const MyInfoFaqScreen: v_a3453e.FC<Props> = () => {
  const { t: v_8d41d7 } = v_772971();
  const { goBack: v_c7ac57 } = v_a0daa8();
  const [v_81bc46, v_d19ea8] = v_5ab095<string | null>(null);

  const v_35252d = (v_389afb) => {
    v_d19ea8(v_81bc46 === v_389afb ? null : v_389afb);
  };

  const v_de5157 = v_334731(v_8d41d7);

  return (
    <MainLayout activeKey="myinfo">
      <View style={v_d81136.container}>
        <Header title={v_8d41d7('my_info_faq.title')} showBackButton onBackPress={v_c7ac57} />
        <SafeScrollView style={v_d81136.scrollView} contentContainerStyle={v_d81136.content} showBottomBackground={false} disableBottomPadding={true}>
          <View style={v_d81136.faqSection}>
            {v_de5157.map((v_8c0b26) => (
              <View key={v_8c0b26.id} style={v_d81136.faqItem}>
                <TouchableOpacity
                  style={v_d81136.questionRow}
                  onPress={() => v_35252d(v_8c0b26.id)}
                  activeOpacity={0.7}
                >
                  <Text style={v_d81136.question}>{v_8c0b26.question}</Text>
                  <Feather
                    name={v_81bc46 === v_8c0b26.id ? 'chevron-up' : 'chevron-down'}
                    size={20}
                    color={v_1bfbd0.secondaryText}
                  />
                </TouchableOpacity>
                {v_81bc46 === v_8c0b26.id && (
                  <View style={v_d81136.answerContainer}>
                    <Text style={v_d81136.answer}>{v_8c0b26.answer}</Text>
                  </View>
                )}
              </View>
            ))}
          </View>
        </SafeScrollView>
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
    padding: v_9b1a04.large,
  },
  faqSection: {
    gap: v_9b1a04.medium,
  },
  faqItem: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
    backgroundColor: v_1bfbd0.background,
    overflow: 'hidden',
  },
  questionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: v_9b1a04.large,
  },
  question: {
    fontSize: 16,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
    flex: 1,
    marginRight: v_9b1a04.small,
  },
  answerContainer: {
    paddingHorizontal: v_9b1a04.large,
    paddingBottom: v_9b1a04.large,
    borderTopWidth: 1,
    borderTopColor: v_1bfbd0.border,
    paddingTop: v_9b1a04.medium,
    backgroundColor: '#fafafa',
  },
  answer: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
});

export default v_083aa7;

