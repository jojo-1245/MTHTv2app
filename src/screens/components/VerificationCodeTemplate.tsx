import v_a3453e, { v_4a8ba2, v_5ab095 } from 'bapkr';
import {
  v_122070,
  v_472849,
  v_19b633,
  v_4623af,
  v_3094a2,
} from 'rcmrninabrnb';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../../constants';
import { v_729608, v_5427ed, v_cb41de } from '../../components';
import { v_b00d6f } from '../../hooks';

interface VerificationCodeTemplateProps {
  title: string;
  subtitle: v_4a8ba2;
  highlightLabel?: string;
  onBack: () => void;
  onVerify: () => void;
  resendLabel?: string;
}

const v_5db486 = 30 * 60 * 1000; 

export const VerificationCodeTemplate: v_a3453e.FC<VerificationCodeTemplateProps> = ({
  title: v_9f1622,
  subtitle: v_dda473,
  highlightLabel: v_e14620 = 'Email',
  onBack: v_64ccfb,
  onVerify: v_72a8c5,
  resendLabel: v_94d343 = 'Resend code in',
}) => {
  const [v_c99bd2, v_537cbb] = v_5ab095('');
  const { formatted: v_864a3e, reset: v_487a25 } = v_b00d6f(v_5db486);

  return (
    <View style={v_d81136.screen}>
      <Header
        title={v_9f1622}
        subtitle={v_dda473}
        showBackButton
        onBackPress={v_64ccfb}
      />
      <ScrollView
        contentContainerStyle={v_d81136.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={v_d81136.body}>
          <OtpInput value={v_c99bd2} onChange={v_537cbb} showError={v_c99bd2.length === 0} />

          <View style={v_d81136.resendRow}>
            <Text style={v_d81136.resendText}>
              {v_94d343}
              <Text style={v_d81136.highlightText}> {v_864a3e}</Text>
            </Text>
            <TouchableOpacity onPress={v_487a25}>
              <Text style={v_d81136.resendButton}>Resend</Text>
            </TouchableOpacity>
          </View>

          <PrimaryButton title="Verify" onPress={v_72a8c5} />
        </View>
      </ScrollView>
    </View>
  );
};

const v_d81136 = v_472849.create({
  screen: {
    flex: 1,
    backgroundColor: v_1bfbd0.background,
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: v_9b1a04.large,
    paddingVertical: 32,
  },
  body: {
    width: '100%',
    maxWidth: 780,
  },
  resendRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: v_9b1a04.large,
  },
  resendText: {
    fontSize: 14,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
  },
  highlightText: {
    color: v_1bfbd0.error,
    fontFamily: v_843035.semibold,
  },
  resendButton: {
    fontSize: 14,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
  },
});

