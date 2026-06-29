import { v_de06a3, v_df9f57 } from 'bapkr';
import { v_472849, v_5e8657 } from 'rcmrninabrnb';
import type { v_02af61 } from './tabletLayout';
import { v_af2c88, v_d91974 } from './tabletLayout';

export type AnalysisResultTabletTextKey =
  | 'tabText'
  | 'resultHeaderStatusText'
  | 'resultHeaderDateText'
  | 'sectionHeader'
  | 'sectionTitle'
  | 'sectionValue'
  | 'summaryValue'
  | 'metricCardLabel'
  | 'metricCardValue'
  | 'metricCardStatusText'
  | 'categoryTabText'
  | 'resultLabel'
  | 'resultValueText'
  | 'resultValueUnit'
  | 'resultStatus'
  | 'resultHeadline'
  | 'resultToggleText'
  | 'confidenceText'
  | 'swiperPaginationText'
  | 'aiCategorizedSummaryTitle'
  | 'aiCategorizedSectionTitle'
  | 'aiCategorizedItemName'
  | 'aiCategorizedItemValue'
  | 'aiCategorizedBadgeText'
  | 'aiAnalysisStartTitle'
  | 'aiAnalysisStartDesc'
  | 'aiAnalysisStartButtonText'
  | 'aiAnalysisCardTitle'
  | 'aiAnalysisSectionTitle'
  | 'aiAnalysisSectionText'
  | 'wellnessScoreText'
  | 'wellnessScoreLabel'
  | 'wellnessTitle'
  | 'overallScoreLabel'
  | 'overallScoreNumber'
  | 'overallGradeText'
  | 'skinAgeText'
  | 'resultSectionTitle'
  | 'highlightTitle'
  | 'highlightLabel'
  | 'highlightScore'
  | 'allResultsCardLabel'
  | 'allResultsCardScore'
  | 'allResultsCardScoreTotal'
  | 'allResultsCardTagText'
  | 'allResultsPaginationText';

type AnalysisResultTabletTextStyles = Record<AnalysisResultTabletTextKey, v_5e8657>;

function v_a900a9(typo: v_02af61): AnalysisResultTabletTextStyles {
  const v_bd157b = Math.round(v_a2df3e.body * 1.55);
  return v_472849.create({
    tabText: { fontSize: v_a2df3e.body },
    resultHeaderStatusText: { fontSize: v_a2df3e.subtitle },
    resultHeaderDateText: { fontSize: v_a2df3e.label },
    sectionHeader: { fontSize: v_a2df3e.subtitle },
    sectionTitle: { fontSize: v_a2df3e.body },
    sectionValue: { fontSize: v_a2df3e.title },
    summaryValue: { fontSize: v_af2c88(28, 36) },
    metricCardLabel: { fontSize: v_a2df3e.label },
    metricCardValue: { fontSize: v_a2df3e.subtitle },
    metricCardStatusText: { fontSize: v_a2df3e.label },
    categoryTabText: { fontSize: v_a2df3e.body },
    resultLabel: { fontSize: v_a2df3e.body },
    resultValueText: { fontSize: v_a2df3e.title },
    resultValueUnit: { fontSize: v_a2df3e.body },
    resultStatus: { fontSize: v_a2df3e.label },
    resultHeadline: { fontSize: v_a2df3e.body },
    resultToggleText: { fontSize: v_a2df3e.label },
    confidenceText: { fontSize: v_a2df3e.label },
    swiperPaginationText: { fontSize: v_a2df3e.body },
    aiCategorizedSummaryTitle: { fontSize: v_a2df3e.subtitle },
    aiCategorizedSectionTitle: { fontSize: v_a2df3e.body },
    aiCategorizedItemName: { fontSize: v_a2df3e.body },
    aiCategorizedItemValue: { fontSize: v_a2df3e.body },
    aiCategorizedBadgeText: { fontSize: v_a2df3e.label },
    aiAnalysisStartTitle: { fontSize: v_a2df3e.subtitle },
    aiAnalysisStartDesc: { fontSize: v_a2df3e.body },
    aiAnalysisStartButtonText: { fontSize: v_a2df3e.body },
    aiAnalysisCardTitle: { fontSize: v_a2df3e.subtitle },
    aiAnalysisSectionTitle: { fontSize: v_a2df3e.body },
    aiAnalysisSectionText: { fontSize: v_a2df3e.body, lineHeight: v_bd157b },
    wellnessScoreText: { fontSize: v_a2df3e.title },
    wellnessScoreLabel: { fontSize: v_a2df3e.subtitle },
    wellnessTitle: { fontSize: v_a2df3e.subtitle },
    overallScoreLabel: { fontSize: v_a2df3e.body },
    overallScoreNumber: { fontSize: v_a2df3e.title },
    overallGradeText: { fontSize: v_a2df3e.label },
    skinAgeText: { fontSize: v_a2df3e.label },
    resultSectionTitle: { fontSize: v_a2df3e.subtitle },
    highlightTitle: { fontSize: v_a2df3e.body },
    highlightLabel: { fontSize: v_a2df3e.body },
    highlightScore: { fontSize: v_a2df3e.body },
    allResultsCardLabel: { fontSize: v_a2df3e.body },
    allResultsCardScore: { fontSize: v_a2df3e.title },
    allResultsCardScoreTotal: { fontSize: v_a2df3e.label },
    allResultsCardTagText: { fontSize: v_a2df3e.label },
    allResultsPaginationText: { fontSize: v_a2df3e.body },
  });
}

export function v_0d0e7d() {
  const v_6c4b91 = v_d91974();
  const v_117427 = v_df9f57(
    () => (v_6c4b91.isTablet ? v_a900a9(v_6c4b91.typo) : null),
    [v_6c4b91.isTablet, v_6c4b91.typo]
  );

  const v_f76b50 = v_de06a3(
    (base: v_5e8657, v_b24339) =>
      v_117427 ? [v_694b25, v_117427[v_b24339]] : v_694b25,
    [v_117427]
  );

  return {
    isTablet: v_6c4b91.isTablet,
    typo: v_6c4b91.typo,
    merge: v_f76b50,
  };
}
