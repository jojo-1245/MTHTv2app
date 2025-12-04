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
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';

export interface HeaderProps {
  title: string;
  eyebrowText?: string;
  subtitle?: string | v_a3453e.ReactNode;
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
  const v_e2510f = v_9c4d53 ?? Boolean(v_f442f6);
  const v_16994b = v_45f781 ?? false;

  const v_8b8176 = v_a3453e.useMemo(() => {
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
        accessibilityLabel="뒤로가기"
      >
        <Feather name="arrow-left" size={20} color={v_1bfbd0.primary} />
      </TouchableOpacity>
    );
  }, [v_bea0eb, v_f442f6, v_e2510f]);

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
        accessibilityLabel="닫기"
      >
        <Feather name="x" size={20} color={v_1bfbd0.secondaryText} />
      </TouchableOpacity>
    );
  }, [v_de8f73, v_a80b4a, v_16994b]);

  return (
    <View style={[v_d81136.container, v_4affe9]}>
      <View style={v_d81136.topRow}>
        <View style={v_d81136.leftWrapper}>{v_8b8176}</View>
        <View style={v_d81136.centerWrapper}>
          <Text
            style={[v_d81136.title, v_672cf3]}
            numberOfLines={1}
            accessibilityRole="header"
          >
            {v_9f1622}
          </Text>
        </View>
        <View style={v_d81136.rightWrapper}>{v_c7e6a0}</View>
      </View>

      {(v_6a56e9 || v_dda473) && (
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
    backgroundColor: v_1bfbd0.background,
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
  rightWrapper: {
    width: 48,
    alignItems: 'flex-end',
    justifyContent: 'center',
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

