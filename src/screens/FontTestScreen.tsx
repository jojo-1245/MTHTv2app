import v_a3453e from 'bapkr';
import { v_3094a2, v_19b633, v_472849, v_122070, v_326be8 } from 'rcmrninabrnb';
import { v_729608 } from '../components';
import { v_843035 } from '../constants';
import { v_a0daa8 } from '../navigation';

export const v_4ab181 = () => {
  const { goBack: v_c7ac57 } = v_a0daa8();

  return (
    <View style={v_d81136.container}>
      <Header title="폰트 테스트" showBackButton onBackPress={v_c7ac57} />
      <ScrollView style={v_d81136.scrollView} contentContainerStyle={v_d81136.content}>
        <Text style={v_d81136.title}>폰트 굵기 테스트</Text>
        <Text style={v_d81136.platformInfo}>Platform: {v_326be8.OS}</Text>

      <View style={v_d81136.section}>
        <Text style={v_d81136.label}>Regular (PretendardGOV-Regular)</Text>
        <Text style={[v_d81136.text, { fontFamily: v_843035.regular }]}>
          The quick brown fox jumps over the lazy dog
        </Text>
      </View>

      <View style={v_d81136.section}>
        <Text style={v_d81136.label}>Medium (PretendardGOV-Medium)</Text>
        <Text style={[v_d81136.text, { fontFamily: v_843035.medium }]}>
          The quick brown fox jumps over the lazy dog
        </Text>
      </View>

      <View style={v_d81136.section}>
        <Text style={v_d81136.label}>SemiBold (PretendardGOV-SemiBold)</Text>
        <Text style={[v_d81136.text, { fontFamily: v_843035.semibold }]}>
          The quick brown fox jumps over the lazy dog
        </Text>
      </View>

      <View style={v_d81136.section}>
        <Text style={v_d81136.label}>Bold (PretendardGOV-Bold)</Text>
        <Text style={[v_d81136.text, { fontFamily: v_843035.bold }]}>
          The quick brown fox jumps over the lazy dog
        </Text>
      </View>

      <View style={v_d81136.section}>
        <Text style={v_d81136.label}>ExtraBold (PretendardGOV-ExtraBold)</Text>
        <Text style={[v_d81136.text, { fontFamily: v_843035.extrabold }]}>
          The quick brown fox jumps over the lazy dog
        </Text>
      </View>

      <View style={v_d81136.section}>
        <Text style={v_d81136.label}>사용된 폰트 이름:</Text>
        <Text style={v_d81136.info}>Regular: {v_843035.regular}</Text>
        <Text style={v_d81136.info}>Medium: {v_843035.medium}</Text>
        <Text style={v_d81136.info}>SemiBold: {v_843035.semibold}</Text>
        <Text style={v_d81136.info}>Bold: {v_843035.bold}</Text>
        <Text style={v_d81136.info}>ExtraBold: {v_843035.extrabold}</Text>
      </View>
      </ScrollView>
    </View>
  );
};

const v_d81136 = v_472849.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  platformInfo: {
    fontSize: 14,
    fontFamily: v_843035.regular,
    color: '#666',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: v_843035.bold,
    marginBottom: 20,
  },
  section: {
    marginBottom: 30,
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  label: {
    fontSize: 12,
    fontFamily: v_843035.regular,
    color: '#666',
    marginBottom: 8,
  },
  text: {
    fontSize: 18,
    color: '#000',
  },
  info: {
    fontSize: 12,
    fontFamily: v_843035.regular,
    color: '#999',
    marginTop: 4,
  },
});

