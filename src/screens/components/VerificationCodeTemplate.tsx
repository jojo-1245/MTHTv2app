import v_a3453e, { v_4a8ba2, v_5ab095 } from 'bapkr';
import {
  v_472849,
  v_19b633,
  v_4623af,
  v_3094a2,
} from 'rcmrninabrnb';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../../constants';
import { v_15cd36, v_729608, v_5427ed, v_cb41de } from '../../components';
import { v_b00d6f } from '../../hooks';
import { v_acfdec } from 'vvfgtwbmdpbnvhtfbtbgudicfmpscw';

interface VerificationCodeTemplateProps {
  title: string;
  subtitle: v_4a8ba2;
  onBack: () => void;
  onVerify: (code: string) => void;
  resendLabel?: string;
  onResend?: () => void;
  codeLength?: number;
}

const v_5db486 = 30 * 60 * 1000; 

export const VerificationCodeTemplate: v_a3453e.FC<VerificationCodeTemplateProps> = ({
  title: v_9f1622,
  subtitle: v_dda473,
  onBack: v_64ccfb,
  onVerify: v_72a8c5,
  resendLabel: v_94d343 = 'Resend code in',
  onResend: v_6ee6a9,
  codeLength: v_5db458 = 4,
}) => {
  const [v_c99bd2, v_537cbb] = v_5ab095('');
  const [v_f74c59, v_a173ea] = v_5ab095(false);
  const { formatted: v_864a3e, reset: v_487a25 } = v_b00d6f(v_5db486);

  const v_83b05b = () => {
    if (v_c99bd2.length !== v_5db458) {
      v_a173ea(true);
      return;
    }
    v_a173ea(false);
    v_72a8c5(v_c99bd2);
  };

  const v_cf9840 = () => {
    v_537cbb('');
    v_a173ea(false);
    v_487a25();
    v_6ee6a9?.();
  };

  const v_fceada = (v_3b402b) => {
    if (v_c99bd2.length < v_5db458) {
      const v_c5fae4 = v_c99bd2 + v_3b402b;
      v_537cbb(v_c5fae4);
      if (v_f74c59 && v_c5fae4.length === v_5db458) {
        v_a173ea(false);
      }
    }
  };

  const v_57fac2 = () => {
    if (v_c99bd2.length > 0) {
      v_537cbb(v_c99bd2.slice(0, -1));
      v_a173ea(false);
    }
  };

  const v_fa5a04 = typeof v_dda473 === 'string' ? v_dda473 : undefined;
  const v_9b51a6 = typeof v_dda473 === 'string' ? undefined : v_dda473;

  return (
    <View style={v_d81136.screen}>
      <Header
        title={v_9f1622}
        subtitle={v_fa5a04}
        bottomContent={v_9b51a6}
        showBackButton
        onBackPress={v_64ccfb}
      />
      <SafeAreaView style={v_d81136.screen}>
        <View style={v_d81136.content}>
          <View style={v_d81136.body}>
            <OtpInput
              value={v_c99bd2}
              length={v_5db458}
              onChange={v_537cbb}
              showError={v_f74c59}
              editable={false}
            />

            <View style={v_d81136.resendRow}>
              <Text style={v_d81136.resendText}>
                {v_94d343}
                <Text style={v_d81136.highlightText}> {v_864a3e}</Text>
              </Text>
              <TouchableOpacity onPress={v_cf9840}>
                <Text style={v_d81136.resendButton}>Resend</Text>
              </TouchableOpacity>
            </View>

            <PrimaryButton title="Verify" onPress={v_83b05b} />
          </View>
        </View>
        <CustomNumberPad onPress={v_fceada} onDelete={v_57fac2} />
      </SafeAreaView>
    </View>
  );
};

const v_d81136 = v_472849.create({
  screen: {
    flex: 1,
    backgroundColor: v_1bfbd0.background,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: v_9b1a04.large,
    paddingTop: 32,
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

