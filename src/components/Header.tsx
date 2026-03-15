import v_a3453e from 'bapkr';
import {
  v_961e77,
  v_472849,
  v_19b633,
  v_5e8657,
  v_4623af,
  v_3094a2,
  v_7e4944,
} from 'rcmrninabrnb';
import { v_dec439 } from 'zvyjokvuouwvifyzks';
import { v_5ade23 } from 'xbfwaaanosqvazmrqoah';
import { v_e0068c } from 'vvfgtwbmdpbnvhtfbtbgudicfmpscw';
import { v_772971 } from 'jmpfvteuuztnp';
import { v_1bfbd0, v_843035, v_9b1a04, v_ef658a } from '../constants';

export type HeaderVariant = 'default' | 'analysis' | 'healthAnalysis';

export interface HeaderProps {
  title: string;
  eyebrowText?: string;
  subtitle?: string | v_a3453e.ReactNode;

  variant?: HeaderVariant;

  iconLeft?: v_a3453e.ReactNode;

  iconBackgroundColor?: string;
  onBackPress?: () => void;
  showBackButton?: boolean;
  onClosePress?: () => void;
  showCloseButton?: boolean;
  leftAccessory?: v_a3453e.ReactNode;
  rightAccessory?: v_a3453e.ReactNode;
  bottomContent?: v_a3453e.ReactNode;
  containerStyle?: v_961e77<v_7e4944>;
  textContainerStyle?: v_961e77<v_7e4944>;
  titleStyle?: v_961e77<v_5e8657>;
  eyebrowStyle?: v_961e77<v_5e8657>;
  subtitleStyle?: v_961e77<v_5e8657>;
}

const Header: v_a3453e.FC<HeaderProps> = ({
  title: v_9f1622,
  eyebrowText: v_6a56e9,
  subtitle: v_dda473,
  variant: v_46e192 = 'default',
  iconLeft: v_6d34b4,
  iconBackgroundColor: v_e96c18 = '#615FFF',
  onBackPress: v_f442f6,
  showBackButton: v_9c4d53,
  onClosePress: v_a80b4a,
  showCloseButton: v_45f781,
  leftAccessory: v_bea0eb,
  rightAccessory: v_de8f73,
  bottomContent: v_b13a55,
  containerStyle: v_4affe9,
  textContainerStyle: v_c8eabd,
  titleStyle: v_672cf3,
  eyebrowStyle: v_faa4b0,
  subtitleStyle: v_7e5e48,
}) => {
  const { t: v_8d41d7 } = v_772971();
  const v_033e14 = v_e0068c();
  const v_e2510f = v_9c4d53 ?? Boolean(v_f442f6);
  const v_16994b = v_45f781 ?? false;
  const v_5cc641 = v_46e192 === 'analysis';
  const v_798703 = v_46e192 === 'healthAnalysis';

  const v_8b8176 = v_a3453e.useMemo(() => {
    if (v_798703 && v_e2510f) {
      return (
        <View style={v_d81136.healthAnalysisLeft}>
          <TouchableOpacity
            onPress={v_f442f6}
            style={v_d81136.healthAnalysisBackBtn}
            activeOpacity={0.85}
            accessibilityRole="button"
            accessibilityLabel={v_8d41d7('common.back')}
          >
            <Feather name="arrow-left" size={20} color={v_1bfbd0.primary} />
          </TouchableOpacity>
          <Text style={[v_d81136.healthAnalysisTitle, v_672cf3]} numberOfLines={1}>
            {v_9f1622}
          </Text>
        </View>
      );
    }

    if (v_5cc641 && v_6d34b4) {
      return (
        <LinearGradient
          colors={['#2B7FFF', '#AD46FF']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={v_d81136.analysisIconWrap}
        >
          {v_6d34b4}
        </LinearGradient>
      );
    }

    if (v_bea0eb) {
      return v_bea0eb;
    }

    if (!v_e2510f) {
      return <View style={v_d81136.placeholder} />;
    }

    return (
      <TouchableOpacity
        onPress={v_f442f6}
        style={v_d81136.backButton}
        activeOpacity={0.85}
        accessibilityRole="button"
        accessibilityLabel={v_8d41d7('common.back')}
      >
        <Feather name="arrow-left" size={20} color={v_1bfbd0.primary} />
      </TouchableOpacity>
    );
  }, [v_46e192, v_6d34b4, v_bea0eb, v_f442f6, v_e2510f, v_8d41d7, v_9f1622, v_672cf3, v_798703]);

  const v_c7e6a0 = v_a3453e.useMemo(() => {
    if (v_de8f73) {
      return v_de8f73;
    }

    if (!v_16994b) {
      return <View style={v_d81136.placeholder} />;
    }

    return (
      <TouchableOpacity
        onPress={v_a80b4a}
        style={v_d81136.closeButton}
        activeOpacity={0.85}
        accessibilityRole="button"
        accessibilityLabel={v_8d41d7('common.close')}
      >
        <Feather name="x" size={20} color={v_1bfbd0.secondaryText} />
      </TouchableOpacity>
    );
  }, [v_de8f73, v_a80b4a, v_16994b, v_8d41d7]);

  const v_a3707d = v_033e14.top + v_9b1a04.small;
  const v_d839ea = v_5cc641 || v_798703 || (v_e2510f && !v_5cc641 && !v_798703);
  return (
    <View style={[
      v_d81136.container,
      v_5cc641 && v_d81136.analysisContainer,
      v_d839ea && !v_5cc641 && !v_798703 && v_d81136.backButtonContainer,
      (v_5cc641 || v_798703 || (v_e2510f && !v_5cc641 && !v_798703)) && { paddingTop: v_a3707d },
      v_4affe9,
    ]}>
      <View style={[v_d81136.topRow, v_5cc641 && v_d81136.analysisTopRow]}>
        <View style={[v_d81136.leftWrapper, v_5cc641 && v_d81136.analysisLeftWrapper, v_798703 && v_d81136.healthAnalysisLeftWrapper]}>{v_8b8176}</View>
        {!v_798703 && (
          <View style={[
            v_d81136.centerWrapper,
            v_5cc641 && v_d81136.analysisCenterWrapper,
            v_e2510f && !v_5cc641 && v_d81136.titleLeftAlign
          ]}>
            <Text
              style={[v_d81136.title, v_5cc641 && v_d81136.analysisTitle, v_672cf3]}
              numberOfLines={1}
              accessibilityRole="header"
            >
              {v_9f1622}
            </Text>
            {v_5cc641 && v_dda473 && typeof v_dda473 === 'string' && (
              <Text
                style={[v_d81136.analysisSubtitle, v_7e5e48]}
                numberOfLines={1}
              >
                {v_dda473}
              </Text>
            )}
          </View>
        )}
        <View style={[
          v_d81136.rightWrapper,
          v_798703 && v_d81136.healthAnalysisRightWrapper,
          v_de8f73 ? v_d81136.rightWrapperWithAccessory : null,
        ]}>{v_c7e6a0}</View>
      </View>

      {!v_5cc641 && (v_6a56e9 || v_dda473) && (
        <View style={[v_d81136.textWrapper, v_c8eabd]}>
          {v_6a56e9 ? (
            <Text
              style={[v_d81136.eyebrow, v_faa4b0]}
              numberOfLines={1}
              accessibilityRole="text"
            >
              {v_6a56e9}
            </Text>
          ) : null}

          {v_dda473 ? (
            typeof v_dda473 === 'string' ? (
              <Text
                style={[v_d81136.subtitle, v_7e5e48]}
                numberOfLines={3}
                accessibilityRole="text"
              >
                {v_dda473}
              </Text>
            ) : (
              <View style={v_d81136.subtitleNode}>{v_dda473}</View>
            )
          ) : null}
        </View>
      )}

      {v_b13a55 ? (
        <View style={v_d81136.bottomContent}>{v_b13a55}</View>
      ) : null}
    </View>
  );
};

const v_d81136 = v_472849.create({
  container: {
    backgroundColor: v_1bfbd0.white,
    paddingHorizontal: v_9b1a04.large,
    paddingTop: 50,
    paddingBottom: v_9b1a04.medium,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 8,
    zIndex: 10,
  },
  analysisContainer: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingBottom: v_9b1a04.medium,
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  backButtonContainer: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingBottom: v_9b1a04.medium,
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  analysisIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  analysisTopRow: {
    alignItems: 'center',
  },
  analysisLeftWrapper: {
    width: 'auto',
  },
  analysisCenterWrapper: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 0,
  },
  analysisTitle: {
    fontSize: v_ef658a.xlarge,
    textAlign: 'left',
    marginBottom: 2,
  },
  analysisSubtitle: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
  },
  healthAnalysisLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 8,
  },
  healthAnalysisBackBtn: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: v_1bfbd0.headerIconBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  healthAnalysisTitle: {
    fontSize: 18,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.headerText,
    flex: 1,
  },
  healthAnalysisLeftWrapper: {
    flex: 1,
    minWidth: 0,
  },
  healthAnalysisRightWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 48,
  },
  leftWrapper: {
    width: 48,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  centerWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: v_9b1a04.medium,
  },
  titleLeftAlign: {
    alignItems: 'flex-start',
    paddingHorizontal: 0,
    paddingLeft: 12,
  },
  rightWrapper: {
    width: 48,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  rightWrapperWithAccessory: {
    width: undefined,
    minWidth: 48,
    overflow: 'visible',
  },
  placeholder: {
    width: 48,
    height: 48,
  },
  backButton: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: v_1bfbd0.backgroundSecondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButton: {
    width: 48,
    height: 48,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWrapper: {
    marginTop: v_9b1a04.medium,
    gap: v_9b1a04.small,
  },
  eyebrow: {
    fontSize: 12,
    letterSpacing: 0.4,
    color: v_1bfbd0.secondaryText,
    textTransform: 'uppercase',
    fontFamily: v_843035.medium,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: v_1bfbd0.headerText,
    fontFamily: v_843035.bold,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    color: v_1bfbd0.secondaryText,
    fontFamily: v_843035.medium,
  },
  subtitleNode: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  bottomContent: {
    marginTop: v_9b1a04.large,
  },
});

export default v_729608;

