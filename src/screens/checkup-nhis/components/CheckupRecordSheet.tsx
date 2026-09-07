import v_a3453e, { v_df9f57 } from 'bapkr';
import {
  v_aa7413,
  v_3094a2,
  v_19b633,
  v_4623af,
  v_472849,
  v_122070,
  v_09d0e5,
} from 'rcmrninabrnb';
import { v_772971 } from 'jmpfvteuuztnp';
import { v_e0068c } from 'vvfgtwbmdpbnvhtfbtbgudicfmpscw';
import { v_25515d } from 'zvyjokvuouwvifyzks';
import type { v_84adce } from '../../../services/codefApi';
import { v_1bfbd0, v_843035, v_ef658a, v_9b1a04 } from '../../../constants';
import {
  v_2ba8df,
  v_ba4fc0,
  v_007d01,
  v_660903,
  v_4189ea,
  type v_ef6842,
} from '../checkupReferenceRanges';

type Props = {
  visible: boolean;
  row: v_84adce | null;
  onClose: () => void;
  formatDate: (raw: unknown, year?: unknown) => string;
};

const CheckupRecordSheet: v_a3453e.FC<Props> = ({ visible: v_cf55be, row: v_3ac7e7, onClose: v_0890f8, formatDate: v_e065e5 }) => {
  const { t: v_8d41d7 } = v_772971();
  const v_033e14 = v_e0068c();

  const v_946c09 = v_df9f57(() => {
    if (!v_3ac7e7) return [];
    return v_ba4fc0.map((v_b4fa6c) => {
      const v_4622b9 = v_2ba8df.filter((v_8c0b26) => v_8c0b26.section === v_b4fa6c)
        .map((v_8c0b26) => {
          const v_479f05 = v_4189ea(v_3ac7e7, v_8c0b26.key);
          const v_b2926d = v_660903(v_479f05);
          if (!v_b2926d) return null;
          const v_ed825b = v_007d01(v_8c0b26, v_479f05);
          return { item: v_8c0b26, displayValue: v_b2926d, evalResult: v_ed825b };
        })
        .filter(Boolean) as Array<{
          item: v_ef6842;
          displayValue: string;
          evalResult: ReturnType<typeof v_007d01>;
        }>;
      return { section: v_b4fa6c, items: v_4622b9 };
    }).filter((v_fd5f43) => v_fd5f43.items.length > 0);
  }, [v_3ac7e7]);

  if (!v_3ac7e7) return null;

  const v_3cffaf = v_e065e5(v_3ac7e7.checkup_date, v_3ac7e7.checkup_year);
  const v_f85720 = v_3ac7e7.organization ? String(v_3ac7e7.organization).replace(/\+/g, ' ') : '';

  return (
    <Modal
      visible={v_cf55be}
      transparent
      animationType="slide"
      onRequestClose={v_0890f8}
    >
      <Pressable style={v_d81136.backdrop} onPress={v_0890f8} />
      <View style={[v_d81136.sheet, { paddingBottom: Math.max(v_033e14.bottom, v_9b1a04.medium) }]}>
        <View style={v_d81136.handle} />
        <View style={v_d81136.headerRow}>
          <View style={v_d81136.headerTextWrap}>
            <Text style={v_d81136.title}>{v_8d41d7('checkup_nhis.sheet.title')}</Text>
            <Text style={v_d81136.subtitle}>
              {v_3cffaf}
              {v_f85720 ? ` · ${v_f85720}` : ''}
            </Text>
          </View>
          <TouchableOpacity onPress={v_0890f8} hitSlop={12} accessibilityRole="button">
            <Ionicons name="close" size={24} color={v_1bfbd0.text} />
          </TouchableOpacity>
        </View>

        <ScrollView style={v_d81136.scroll} contentContainerStyle={v_d81136.scrollContent}>
          {v_946c09.length === 0 ? (
            <Text style={v_d81136.empty}>{v_8d41d7('checkup_nhis.sheet.empty')}</Text>
          ) : (
            v_946c09.map(({ section: v_b4fa6c, items: v_4622b9 }) => (
              <View key={v_b4fa6c} style={v_d81136.sectionBlock}>
                <Text style={v_d81136.sectionTitle}>
                  {v_8d41d7(`checkup_nhis.sheet.sections.${v_b4fa6c}`)}
                </Text>
                {v_4622b9.map(({ item: v_8c0b26, displayValue: v_b2926d, evalResult: v_ed825b }) => (
                  <View key={v_8c0b26.key} style={v_d81136.metricRow}>
                    <Text style={v_d81136.metricLabel} numberOfLines={1}>
                      {v_8d41d7(`checkup_nhis.sheet.items.${v_8c0b26.labelKey}`)}
                    </Text>
                    <Text style={v_d81136.metricValue}>{v_b2926d}</Text>
                    <Text style={v_d81136.metricUnit}>
                      {v_8c0b26.unitKey === 'none'
                        ? ''
                        : v_8d41d7(`checkup_nhis.sheet.units.${v_8c0b26.unitKey}`)}
                    </Text>
                    <Text style={v_d81136.metricRef} numberOfLines={2}>
                      {v_8d41d7(`checkup_nhis.sheet.reference.${v_8c0b26.referenceKey}`)}
                    </Text>
                    {v_ed825b ? (
                      <Text
                        style={[
                          v_d81136.metricStatus,
                          v_ed825b === 'normal' ? v_d81136.statusNormal : v_d81136.statusRisk,
                        ]}
                      >
                        {v_ed825b === 'normal'
                          ? v_8d41d7('checkup_nhis.sheet.status_normal')
                          : v_8d41d7('checkup_nhis.sheet.status_risk')}
                      </Text>
                    ) : (
                      <View style={v_d81136.metricStatusPlaceholder} />
                    )}
                  </View>
                ))}
              </View>
            ))
          )}

          {v_3ac7e7.judgment ? (
            <View style={v_d81136.judgmentBlock}>
              <Text style={v_d81136.sectionTitle}>{v_8d41d7('checkup_nhis.sheet.judgment')}</Text>
              <Text style={v_d81136.judgmentText}>{v_3ac7e7.judgment}</Text>
            </View>
          ) : null}

          <Text style={v_d81136.disclaimer}>{v_8d41d7('checkup_nhis.sheet.disclaimer')}</Text>
        </ScrollView>
      </View>
    </Modal>
  );
};

const v_d81136 = v_472849.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  sheet: {
    maxHeight: '88%',
    backgroundColor: v_1bfbd0.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingTop: v_9b1a04.small,
  },
  handle: {
    alignSelf: 'center',
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#D1D5DB',
    marginBottom: v_9b1a04.small,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: v_9b1a04.large,
    paddingBottom: v_9b1a04.medium,
    gap: v_9b1a04.medium,
  },
  headerTextWrap: {
    flex: 1,
  },
  title: {
    fontFamily: v_843035.bold,
    fontSize: v_ef658a.large,
    color: v_1bfbd0.text,
  },
  subtitle: {
    marginTop: 4,
    fontFamily: v_843035.regular,
    fontSize: v_ef658a.small,
    color: v_1bfbd0.secondaryText,
  },
  scroll: {
    flexGrow: 0,
  },
  scrollContent: {
    paddingHorizontal: v_9b1a04.large,
    paddingBottom: v_9b1a04.large,
  },
  sectionBlock: {
    marginBottom: v_9b1a04.large,
  },
  sectionTitle: {
    fontFamily: v_843035.semibold,
    fontSize: v_ef658a.medium,
    color: v_1bfbd0.text,
    borderBottomWidth: v_472849.hairlineWidth,
    borderBottomColor: '#E5E7EB',
    paddingBottom: 6,
    marginBottom: 8,
  },
  metricRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    gap: 6,
  },
  metricLabel: {
    flex: 1.2,
    fontFamily: v_843035.regular,
    fontSize: v_ef658a.small,
    color: v_1bfbd0.text,
  },
  metricValue: {
    minWidth: 44,
    textAlign: 'right',
    fontFamily: v_843035.semibold,
    fontSize: v_ef658a.medium,
    color: v_1bfbd0.text,
    fontVariant: ['tabular-nums'],
  },
  metricUnit: {
    width: 52,
    fontFamily: v_843035.regular,
    fontSize: v_ef658a.small,
    color: v_1bfbd0.secondaryText,
  },
  metricRef: {
    flex: 1.3,
    fontFamily: v_843035.regular,
    fontSize: 11,
    color: v_1bfbd0.secondaryText,
  },
  metricStatus: {
    width: 36,
    textAlign: 'right',
    fontFamily: v_843035.semibold,
    fontSize: v_ef658a.small,
  },
  metricStatusPlaceholder: {
    width: 36,
  },
  statusNormal: {
    color: '#16A34A',
  },
  statusRisk: {
    color: '#DC2626',
  },
  judgmentBlock: {
    marginBottom: v_9b1a04.medium,
  },
  judgmentText: {
    fontFamily: v_843035.regular,
    fontSize: v_ef658a.small,
    color: v_1bfbd0.text,
    lineHeight: 20,
  },
  disclaimer: {
    fontFamily: v_843035.regular,
    fontSize: 11,
    color: v_1bfbd0.secondaryText,
    lineHeight: 16,
  },
  empty: {
    fontFamily: v_843035.regular,
    fontSize: v_ef658a.small,
    color: v_1bfbd0.secondaryText,
    paddingVertical: v_9b1a04.large,
  },
});

export default v_2d0741;
