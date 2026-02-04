import v_a3453e, { v_5ab095, v_df9f57 } from 'bapkr';
import {
  v_472849,
  v_19b633,
  v_3094a2,
  v_4623af,
  v_aa7413,
  v_09d0e5,
  v_122070,
} from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_25515d } from 'zvyjokvuouwvifyzks';
import v_f595b9, { v_bf60de } from 'vpztcxjmsfanunln';
import { v_5ade23 as v_6f705c } from 'xbfwaaanosqvazmrqoah';
import { v_729608, v_570c34, v_556baf } from '../../components';
import type { v_8ad91b } from '../../navigation';
import { v_1bfbd0, v_843035, v_ef658a, v_9b1a04 } from '../../constants';
import { v_772971 } from 'jmpfvteuuztnp';
import type { v_5d13be, v_b703a5 } from './components/HealthRecordsView';
import { v_bcb8af } from './components/HealthRecordsView';

const v_bd24d7 = v_bcb8af.flatMap((v_fd5f43) => v_fd5f43.itemKeys);

type Props = v_432191<v_8ad91b, 'HealthComparison'>;

const v_54e295 = (v_a56041): 'high' | 'normal' | 'low' => {
  if (v_a56041 >= 7) return 'high';
  if (v_a56041 >= 4) return 'normal';
  return 'low';
};

const v_c1c940 = (v_8dffde) => v_8dffde.replace(/-/g, '.');

const v_4d2aec = 100;
const v_41f026 = 8;

function v_b5ebc4({ score: v_740dd8, date: v_8dffde, time: v_f985e6 }: { score: number; date: string; time: string }) {
  const { t: v_8d41d7 } = v_772971();
  const v_0c21c9 = v_4d2aec / 2 - v_41f026 / 2;
  const v_0288f8 = v_4d2aec / 2;
  const v_65e020 = 2 * Math.PI * v_0c21c9;
  const v_d308b5 = v_54e295(v_740dd8);

  const v_812146 = (v_fd5f43): number => {
    if (v_fd5f43 <= 3) return (v_fd5f43 / 3) * 0.33;
    if (v_fd5f43 <= 6) return 0.33 + ((v_fd5f43 - 4) / 3) * 0.33;
    return 0.66 + ((v_fd5f43 - 7) / 3) * 0.34;
  };
  const v_09e739 = v_812146(v_740dd8);
  const v_4b6102 = -Math.PI / 2 + v_09e739 * 2 * Math.PI;
  const v_e75d3b = v_0288f8 + v_0c21c9 * Math.cos(v_4b6102);
  const v_576627 = v_0288f8 + v_0c21c9 * Math.sin(v_4b6102);
  const v_5bc297 = v_740dd8 <= 3 ? '#DC2626' : v_740dd8 <= 6 ? '#FBBF24' : '#22C55E';

  return (
    <View style={v_d9d65f.card}>
      <Text style={v_d9d65f.date}>{v_8dffde}</Text>
      <Text style={v_d9d65f.time}>{v_f985e6}</Text>
      <View style={v_d9d65f.gaugeWrap}>
        <Svg width={v_4d2aec} height={v_4d2aec}>
          {[
            { color: '#DC2626', start: 0, len: 0.33 },
            { color: '#FBBF24', start: 0.33, len: 0.33 },
            { color: '#22C55E', start: 0.66, len: 0.34 },
          ].map(({ color: v_3c2a3a, start: v_965edf, len: v_fe889f }) => (
            <Circle
              key={v_3c2a3a}
              cx={v_0288f8}
              cy={v_0288f8}
              r={v_0c21c9}
              stroke={v_3c2a3a}
              strokeWidth={v_41f026}
              strokeLinecap="round"
              fill="none"
              strokeDasharray={`${v_65e020 * v_fe889f} ${v_65e020 * (1 - v_fe889f)}`}
              strokeDashoffset={-v_65e020 * v_965edf}
              transform={`rotate(-90 ${v_0288f8} ${v_0288f8})`}
            />
          ))}
          <Circle cx={v_e75d3b} cy={v_576627} r={4} fill={v_5bc297} stroke="#FFFFFF" strokeWidth={2} />
        </Svg>
        <View style={v_d9d65f.gaugeText}>
          <Text style={v_d9d65f.scoreText}>{v_740dd8}/10</Text>
          <Text style={v_d9d65f.scoreLabel}>{v_8d41d7(`health_records.list_status_${v_d308b5}`)}</Text>
        </View>
      </View>
    </View>
  );
}

const v_d9d65f = v_472849.create({
  card: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    borderRadius: 16,
    padding: v_9b1a04.large,
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
    alignItems: 'center',
  },
  date: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
  },
  time: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.secondaryText,
    marginTop: 4,
  },
  gaugeWrap: {
    marginTop: v_9b1a04.medium,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreText: {
    fontSize: v_ef658a.title,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
  },
  scoreLabel: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.secondaryText,
    marginTop: 2,
  },
});

export default function v_71e66c({ route: v_c7daf6, navigation: v_c65f5d }: Props) {
  const { t: v_8d41d7 } = v_772971();
  const { recordA: v_1a2523, recordB: v_fe1802 } = v_c7daf6.params;
  const [v_e7ae15, v_20745f] = v_5ab095(false);
  const [v_474c16, v_41fe7e] = v_5ab095(false);
  const [v_782929, v_3cc752] = v_5ab095<Set<string>>(
    () => new Set(v_bd24d7)
  );

  const v_0ab8c5 = (v_b24339) => {
    v_3cc752((v_ba2215) => {
      const v_a448ad = new Set(v_ba2215);
      if (v_a448ad.has(v_b24339)) v_a448ad.delete(v_b24339);
      else v_a448ad.add(v_b24339);
      return v_a448ad;
    });
  };

  const v_45e488 = () => v_3cc752(new Set(v_bd24d7));
  const v_cebe2b = () => v_3cc752(new Set());

  const v_15f2ac = v_df9f57(
    () =>
      v_bcb8af.map((v_b4fa6c) => ({
        ...v_b4fa6c,
        itemKeys: v_b4fa6c.itemKeys.filter((v_0eb677) => v_782929.has(v_0eb677)),
      })).filter((v_fd5f43) => v_fd5f43.itemKeys.length > 0),
    [v_782929]
  );

  const v_3f609a = v_df9f57(() => {
    const v_35f85c = {};
    v_1a2523.items.forEach((v_8c0b26) => { v_35f85c[v_8c0b26.key] = v_8c0b26.labelKey; });
    v_fe1802.items.forEach((v_8c0b26) => { v_35f85c[v_8c0b26.key] = v_8c0b26.labelKey; });
    return v_35f85c;
  }, [v_1a2523, v_fe1802]);

  const v_0da646 = (record: v_5d13be, v_b24339): v_b703a5 | undefined =>
    v_cbbd71.items.find((v_ebec57) => v_ebec57.key === v_b24339);

  const v_22e3c0 = (v_8dffde, v_f985e6) => {
    const v_38e403 = parseInt(v_f985e6.split(':')[0], 10) >= 12;
    const v_a7745c = parseInt(v_f985e6.split(':')[0], 10) % 12 || 12;
    const v_43e24b = v_f985e6.split(':')[1];
    return `${v_38e403 ? '오후' : '오전'} ${v_a7745c}:${v_43e24b}`;
  };

  return (
    <SafeView style={v_d81136.screen} showBottomBackground={false}>
      <Header
        variant="healthAnalysis"
        title={v_8d41d7('health_records.compare_analysis_title')}
        showBackButton
        onBackPress={() => v_c65f5d.goBack()}
        rightAccessory={
          <TouchableOpacity
            style={v_d81136.headerItemSelectBtn}
            onPress={() => v_41fe7e(true)}
            activeOpacity={0.7}
          >
            <Ionicons name="checkbox" size={24} color={v_1bfbd0.buttonPrimary} />
          </TouchableOpacity>
        }
      />
      <SafeScrollView
        contentContainerStyle={v_d81136.container}
        showsVerticalScrollIndicator={false}
      >
        {}
        <Text style={v_d81136.sectionTitle}>{v_8d41d7('health_records.health_index')}</Text>
        <View style={v_d81136.healthIndexRow}>
          <HealthIndexGauge
            score={v_1a2523.healthIndex}
            date={v_c1c940(v_1a2523.date)}
            time={v_22e3c0(v_1a2523.date, v_1a2523.time)}
          />
          <HealthIndexGauge
            score={v_fe1802.healthIndex}
            date={v_c1c940(v_fe1802.date)}
            time={v_22e3c0(v_fe1802.date, v_fe1802.time)}
          />
        </View>

        {}
        <View style={v_d81136.measureSectionsWrapper}>
          <View style={v_d81136.measureDateHeaderRow}>
            <View style={v_d81136.measureDateHeaderLabel} />
            <View style={v_d81136.measureColHeaderDateWrap}>
              <Text style={v_d81136.measureColHeader} numberOfLines={1}>
                {v_c1c940(v_1a2523.date)}
              </Text>
            </View>
            <View style={v_d81136.measureColHeaderDateWrap}>
              <Text style={v_d81136.measureColHeader} numberOfLines={1}>
                {v_c1c940(v_fe1802.date)}
              </Text>
            </View>
          </View>
          {v_15f2ac.map((v_b4fa6c) => {
            const v_b50afc = v_1a2523.items.filter((v_ebec57) => v_b4fa6c.itemKeys.includes(v_ebec57.key));
            const v_1c5035 = v_fe1802.items.filter((v_ebec57) => v_b4fa6c.itemKeys.includes(v_ebec57.key));
            const v_e66bb4 = [...new Set([...v_b50afc.map((v_ebec57) => v_ebec57.key), ...v_1c5035.map((v_ebec57) => v_ebec57.key)])];
            if (v_e66bb4.length === 0) return null;

            return (
              <View key={v_b4fa6c.sectionKey} style={v_d81136.measureSection}>
                <View style={v_d81136.measureSectionTitleRow}>
                  <Ionicons name="pulse" size={18} color={v_1bfbd0.text} style={v_d81136.measureSectionTitleIcon} />
                  <Text style={v_d81136.measureSectionTitle}>{v_8d41d7(`health_records.${v_b4fa6c.sectionKey}`)}</Text>
                </View>
                {v_e66bb4.map((v_b24339) => {
                  const v_468f95 = v_0da646(v_1a2523, v_b24339);
                  const v_676a19 = v_0da646(v_fe1802, v_b24339);
                  if (!v_468f95 && !v_676a19) return null;
                  const v_9eee7f = v_468f95 || v_676a19!;
                  const v_80cae9 = v_9eee7f.unit;

                  return (
                    <View key={v_b24339} style={v_d81136.measureRow}>
                      <View style={v_d81136.measureLabelCol}>
                        <Text style={v_d81136.measureLabel}>{v_8d41d7(`health_analysis.vitals.${v_9eee7f.labelKey}`)}</Text>
                        {v_80cae9 && <Text style={v_d81136.measureUnitBelow}>({v_80cae9})</Text>}
                      </View>
                      <View style={v_d81136.measureValues}>
                        <View style={v_d81136.measureValueCol}>
                          <Text style={v_d81136.measureValue}>{v_468f95 ? String(v_468f95.value) : '-'}</Text>
                          <View style={[v_d81136.measureBadge, v_468f95?.status === 'risk' ? v_d81136.measureBadgeRisk : v_d81136.measureBadgeNormal]}>
                            <Text style={v_d81136.measureBadgeText}>
                              {v_468f95 ? (v_468f95.status === 'risk' ? v_8d41d7('health_records.status_risk') : v_8d41d7('health_records.status_normal')) : '-'}
                            </Text>
                          </View>
                        </View>
                        <View style={v_d81136.measureValueCol}>
                          <Text style={v_d81136.measureValue}>{v_676a19 ? String(v_676a19.value) : '-'}</Text>
                          <View style={[v_d81136.measureBadge, v_676a19?.status === 'risk' ? v_d81136.measureBadgeRisk : v_d81136.measureBadgeNormal]}>
                            <Text style={v_d81136.measureBadgeText}>
                              {v_676a19 ? (v_676a19.status === 'risk' ? v_8d41d7('health_records.status_risk') : v_8d41d7('health_records.status_normal')) : '-'}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  );
                })}
              </View>
            );
          })}
        </View>

        {}
        <View style={v_d81136.aiSection}>
          {!v_e7ae15 ? (
            <TouchableOpacity
              style={v_d81136.aiStartCard}
              onPress={() => v_20745f(true)}
              activeOpacity={0.9}
            >
              <ExpoLinearGradient
                colors={['#7C6BFF', '#5B4BD4', '#4A3BC4']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={v_d81136.aiStartCardGradient}
              >
                <View style={v_d81136.aiStartCardHeader}>
                  <View style={v_d81136.aiStartCardIconWrap}>
                    <Ionicons name="sparkles" size={24} color="#fff" />
                  </View>
                  <Text style={v_d81136.aiStartCardTitle}>{v_8d41d7('health_records.ai_comparison_card_title')}</Text>
                </View>
                <Text style={v_d81136.aiStartCardDesc}>{v_8d41d7('health_records.ai_comparison_card_desc_line1')}</Text>
                <Text style={v_d81136.aiStartCardDesc}>{v_8d41d7('health_records.ai_comparison_card_desc_line2')}</Text>
                <View style={v_d81136.aiStartBtnWrap}>
                  <Text style={v_d81136.aiStartBtnText}>{v_8d41d7('health_records.ai_start_btn')}</Text>
                </View>
              </ExpoLinearGradient>
            </TouchableOpacity>
          ) : (
            <View style={v_d81136.aiResultsContainer}>
              <View style={v_d81136.aiResultsHeader}>
                <View style={v_d81136.aiResultsHeaderIcon}>
                  <Ionicons name="analytics-outline" size={18} color="#fff" />
                </View>
                <Text style={v_d81136.aiResultsHeaderTitle}>{v_8d41d7('health_records.ai_comparison_title')}</Text>
              </View>

              {}
              <View style={v_d81136.aiResultCard}>
                <View style={v_d81136.aiResultCardHeader}>
                  <Ionicons name="bar-chart" size={18} color="#333" />
                  <Text style={v_d81136.aiResultCardTitle}>{v_8d41d7('health_records.ai_trend_title')}</Text>
                </View>
                <Text style={v_d81136.aiResultCardContent}>
                  {v_fe1802.healthIndex > v_1a2523.healthIndex
                    ? v_8d41d7('health_records.ai_trend_content', { diff: v_fe1802.healthIndex - v_1a2523.healthIndex })
                    : v_8d41d7('health_records.ai_trend_content_stable')}
                </Text>
              </View>

              {}
              <View style={v_d81136.aiResultCard}>
                <View style={v_d81136.aiResultCardHeader}>
                  <View style={v_d81136.aiResultCardIconSquare}>
                    <Ionicons name="trending-up" size={14} color="#fff" />
                  </View>
                  <Text style={v_d81136.aiResultCardTitle}>{v_8d41d7('health_records.ai_improvements')}</Text>
                </View>
                <View style={v_d81136.aiImprovedList}>
                  <Ionicons name="checkmark-circle" size={18} color="#4CAF50" />
                  <Text style={v_d81136.aiImprovedItem}>{v_8d41d7('health_records.ai_improved_item1')}</Text>
                </View>
                <View style={v_d81136.aiImprovedList}>
                  <Ionicons name="checkmark-circle" size={18} color="#4CAF50" />
                  <Text style={v_d81136.aiImprovedItem}>{v_8d41d7('health_records.ai_improved_item2')}</Text>
                </View>
                <View style={v_d81136.aiImprovedList}>
                  <Ionicons name="checkmark-circle" size={18} color="#4CAF50" />
                  <Text style={v_d81136.aiImprovedItem}>{v_8d41d7('health_records.ai_improved_item3')}</Text>
                </View>
              </View>

              {}
              <View style={v_d81136.aiResultCard}>
                <View style={v_d81136.aiResultCardHeader}>
                  <Ionicons name="warning" size={18} color="#333" />
                  <Text style={v_d81136.aiResultCardTitle}>{v_8d41d7('health_records.ai_attention_items')}</Text>
                </View>
                <View style={v_d81136.aiAttentionRow}>
                  <Ionicons name="warning" size={18} color="#FF9800" />
                  <Text style={v_d81136.aiAttentionText}>{v_8d41d7('health_records.ai_attention_none')}</Text>
                </View>
              </View>

              {}
              <View style={v_d81136.aiResultCard}>
                <View style={v_d81136.aiResultCardHeader}>
                  <Ionicons name="bulb" size={18} color="#F5A623" />
                  <Text style={v_d81136.aiResultCardTitle}>{v_8d41d7('health_records.ai_improvement_plan')}</Text>
                </View>
                <View style={v_d81136.aiPlanList}>
                  <View style={v_d81136.aiPlanBullet} />
                  <Text style={v_d81136.aiPlanItem}>{v_8d41d7('health_records.ai_improvement_plan_item1')}</Text>
                </View>
                <View style={v_d81136.aiPlanList}>
                  <View style={v_d81136.aiPlanBullet} />
                  <Text style={v_d81136.aiPlanItem}>{v_8d41d7('health_records.ai_improvement_plan_item2')}</Text>
                </View>
                <View style={v_d81136.aiPlanList}>
                  <View style={v_d81136.aiPlanBullet} />
                  <Text style={v_d81136.aiPlanItem}>{v_8d41d7('health_records.ai_improvement_plan_item3')}</Text>
                </View>
                <View style={v_d81136.aiPlanList}>
                  <View style={v_d81136.aiPlanBullet} />
                  <Text style={v_d81136.aiPlanItem}>{v_8d41d7('health_records.ai_improvement_plan_item4')}</Text>
                </View>
              </View>

              {}
              <View style={v_d81136.aiResultCard}>
                <View style={v_d81136.aiResultCardHeader}>
                  <Ionicons name="warning" size={18} color="#333" />
                  <Text style={v_d81136.aiResultCardTitle}>{v_8d41d7('health_records.ai_disclaimer_title')}</Text>
                </View>
                <Text style={v_d81136.aiResultCardContent}>{v_8d41d7('health_records.ai_disclaimer')}</Text>
              </View>
            </View>
          )}
        </View>
      </SafeScrollView>

      <Modal
        visible={v_474c16}
        transparent
        animationType="fade"
        onRequestClose={() => v_41fe7e(false)}
      >
        <Pressable
          style={v_d81136.modalOverlay}
          onPress={() => v_41fe7e(false)}
        >
          <Pressable style={v_d81136.modalContent} onPress={(v_9e86fd) => v_9e86fd.stopPropagation()}>
            <View style={v_d81136.modalHeader}>
              <Text style={v_d81136.modalTitle}>{v_8d41d7('health_records.item_select_modal_title')}</Text>
              <TouchableOpacity onPress={() => v_41fe7e(false)}>
                <Ionicons name="close" size={24} color={v_1bfbd0.secondaryText} />
              </TouchableOpacity>
            </View>
            <View style={v_d81136.modalActions}>
              <TouchableOpacity onPress={v_45e488} style={v_d81136.modalActionBtn}>
                <Text style={v_d81136.modalActionText}>{v_8d41d7('health_records.select_all')}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={v_cebe2b} style={v_d81136.modalActionBtn}>
                <Text style={v_d81136.modalActionText}>{v_8d41d7('health_records.deselect_all')}</Text>
              </TouchableOpacity>
            </View>
            <ScrollView style={v_d81136.modalList} showsVerticalScrollIndicator={false}>
              {v_bcb8af.map((v_b4fa6c) => (
                <View key={v_b4fa6c.sectionKey} style={v_d81136.modalSection}>
                  <Text style={v_d81136.modalSectionTitle}>{v_8d41d7(`health_records.${v_b4fa6c.sectionKey}`)}</Text>
                  {v_b4fa6c.itemKeys.map((v_b24339) => {
                    const v_34e186 = v_3f609a[v_b24339] ?? v_b24339;
                    const v_05e77d = v_782929.has(v_b24339);
                    return (
                      <TouchableOpacity
                        key={v_b24339}
                        style={v_d81136.modalItemRow}
                        onPress={() => v_0ab8c5(v_b24339)}
                        activeOpacity={0.7}
                      >
                        <Ionicons
                          name={v_05e77d ? 'checkbox' : 'square-outline'}
                          size={22}
                          color={v_05e77d ? v_1bfbd0.buttonPrimary : v_1bfbd0.border}
                        />
                        <Text style={v_d81136.modalItemLabel}>{v_8d41d7(`health_analysis.vitals.${v_34e186}`)}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              ))}
            </ScrollView>
            <TouchableOpacity
              style={v_d81136.modalConfirmBtn}
              onPress={() => v_41fe7e(false)}
            >
              <Text style={v_d81136.modalConfirmText}>{v_8d41d7('common.confirm')}</Text>
            </TouchableOpacity>
          </Pressable>
        </Pressable>
      </Modal>
    </SafeView>
  );
}

const v_d81136 = v_472849.create({
  screen: {
    flex: 1,
  },
  headerItemSelectBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    marginRight: v_9b1a04.small,
  },
  container: {
    paddingBottom: v_9b1a04.xlarge * 2,
  },
  sectionTitle: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
    marginHorizontal: v_9b1a04.large,
    marginTop: v_9b1a04.medium,
    marginBottom: v_9b1a04.small,
  },
  healthIndexRow: {
    flexDirection: 'row',
    gap: v_9b1a04.medium,
    marginHorizontal: v_9b1a04.large,
    marginBottom: v_9b1a04.large,
  },
  measureSectionsWrapper: {
    marginHorizontal: v_9b1a04.large,
    marginBottom: v_9b1a04.large,
  },
  measureDateHeaderRow: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginBottom: v_9b1a04.medium,
  },
  measureDateHeaderLabel: {
    width: 110,
    marginRight: 4,
  },
  measureSection: {
    marginBottom: v_9b1a04.large,
  },
  measureSectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: v_9b1a04.small,
  },
  measureSectionTitleIcon: {
    marginRight: 8,
  },
  measureSectionTitle: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
  },
  measureColHeaderDateWrap: {
    flex: 1,
    minWidth: 0,
    backgroundColor: '#efefef',
    paddingVertical: v_9b1a04.small,
    paddingHorizontal: v_9b1a04.medium,
    borderRadius: 8,
    marginLeft: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  measureColHeader: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
    letterSpacing: -0.5,
  },
  measureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: v_9b1a04.small,
    borderBottomWidth: 1,
    borderBottomColor: v_1bfbd0.border,
  },
  measureLabelCol: {
    width: 110,
  },
  measureLabel: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
  },
  measureUnitBelow: {
    fontSize: 11,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    marginTop: 2,
  },
  measureValues: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  measureValueCol: {
    alignItems: 'center',
    flex: 1,
  },
  measureValue: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
  },
  measureBadge: {
    marginTop: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  measureBadgeNormal: { backgroundColor: '#E8F5E9' },
  measureBadgeRisk: { backgroundColor: '#FFEBEE' },
  measureBadgeText: {
    fontSize: 10,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
  },
  aiSection: {
    marginHorizontal: v_9b1a04.large,
    marginTop: v_9b1a04.large,
    marginBottom: v_9b1a04.large,
  },
  aiStartCard: {
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
  },
  aiStartCardGradient: {
    padding: v_9b1a04.xlarge,
    paddingVertical: v_9b1a04.xlarge + 8,
  },
  aiStartCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: v_9b1a04.medium,
  },
  aiStartCardIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aiStartCardTitle: {
    fontSize: v_ef658a.xlarge,
    fontFamily: v_843035.bold,
    color: '#fff',
  },
  aiStartCardDesc: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.regular,
    color: '#fff',
    lineHeight: 22,
    marginBottom: 4,
    opacity: 0.95,
  },
  aiStartBtnWrap: {
    marginTop: v_9b1a04.large,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(124,107,255,0.5)',
  },
  aiStartBtnText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.bold,
    color: '#5B4BD4',
  },
  aiResultsContainer: {
    backgroundColor: '#EDE9F5',
    borderRadius: 16,
    padding: v_9b1a04.large,
    paddingBottom: v_9b1a04.xlarge,
  },
  aiResultsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: v_9b1a04.large,
  },
  aiResultsHeaderIcon: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#7C3AED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aiResultsHeaderTitle: {
    fontSize: v_ef658a.xlarge,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
  },
  aiResultCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: v_9b1a04.large,
    marginBottom: v_9b1a04.medium,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  aiResultCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: v_9b1a04.small,
  },
  aiResultCardIconSquare: {
    width: 24,
    height: 24,
    borderRadius: 4,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aiResultCardTitle: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
  },
  aiResultCardContent: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.text,
    lineHeight: 20,
  },
  aiImprovedList: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },
  aiImprovedItem: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.text,
    flex: 1,
  },
  aiAttentionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  aiAttentionText: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.text,
    flex: 1,
  },
  aiPlanList: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginBottom: 8,
  },
  aiPlanBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#3B72F2',
    marginTop: 6,
  },
  aiPlanItem: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.text,
    lineHeight: 20,
    flex: 1,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: v_9b1a04.large,
  },
  modalContent: {
    backgroundColor: v_1bfbd0.background,
    borderRadius: 16,
    width: '100%',
    maxHeight: '80%',
    padding: v_9b1a04.large,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: v_9b1a04.medium,
  },
  modalTitle: {
    fontSize: v_ef658a.xlarge,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
  },
  modalActions: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: v_9b1a04.medium,
  },
  modalActionBtn: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: v_1bfbd0.backgroundSecondary,
  },
  modalActionText: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.buttonPrimary,
  },
  modalList: {
    maxHeight: 320,
    marginBottom: v_9b1a04.medium,
  },
  modalSection: {
    marginBottom: v_9b1a04.medium,
  },
  modalSectionTitle: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
    marginBottom: v_9b1a04.small,
  },
  modalItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
  modalItemLabel: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.text,
    flex: 1,
  },
  modalConfirmBtn: {
    backgroundColor: v_1bfbd0.buttonPrimary,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  modalConfirmText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.bold,
    color: '#fff',
  },
});
