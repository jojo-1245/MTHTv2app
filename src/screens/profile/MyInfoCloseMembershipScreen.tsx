import v_a3453e, { v_de06a3, v_c4deb2, v_5ab095 } from 'bapkr';
import { v_472849, v_19b633, v_3094a2 } from 'rcmrninabrnb';
import { v_772971 } from 'jmpfvteuuztnp';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../../constants';
import {
  v_729608,
  v_cb41de,
  v_8714fe,
  v_fa3feb,
  v_8e2768,
  v_570c34,
  v_1c1837,
  v_e2ca42,
} from '../../components';
import type { v_8ad91b } from '../../navigation';
import { v_a0daa8 } from '../../navigation';
import { v_4b3c9f, v_7b504e, v_7ef860 } from '../../services';
import { v_2a53b4 } from '../../navigation/rootNavigationRef';

type Props = v_432191<v_8ad91b, 'MyInfoCloseMembership'>;

const MyInfoCloseMembershipScreen: v_a3453e.FC<Props> = () => {
  const { t: v_8d41d7 } = v_772971();
  const { goBack: v_c7ac57 } = v_a0daa8();
  const [v_a6fcf8, v_539b92] = v_5ab095(false);
  const [v_adc076, v_52b279] = v_5ab095('');
  const [v_a2ffce, v_86a808] = v_5ab095(true);
  const [v_683210, v_34a50a] = v_5ab095(false);
  const [v_50935b, v_961f58] = v_5ab095(false);
  const [v_4dccb8, v_77a882] = v_5ab095(false);
  const [v_1744b9, v_5c59f6] = v_5ab095<string | null>(null);
  const [v_8afa82, v_99da56] = v_5ab095(false);

  v_c4deb2(() => {
    let v_2008a4 = false;
    (async () => {
      try {
        const v_b32680 = await v_7ef860();
        if (!v_2008a4 && typeof v_b32680.has_password === 'boolean') {
          v_86a808(v_b32680.has_password);
        }
      } catch {

        if (!v_2008a4) v_86a808(true);
      }
    })();
    return () => {
      v_2008a4 = true;
    };
  }, []);

  const v_299572 = v_de06a3(async () => {
    try {
      await v_4b3c9f();
    } catch {

    }
    v_2a53b4();
  }, []);

  const v_0d28ed = async () => {
    if (!v_a6fcf8) {
      v_961f58(true);
      return;
    }
    if (v_a2ffce && !v_adc076.trim()) {
      v_77a882(true);
      return;
    }
    if (v_683210) return;

    v_34a50a(true);
    v_5c59f6(null);
    try {
      await v_7b504e(
        v_a2ffce
          ? { password: v_adc076.trim(), confirm: true }
          : { confirm: true }
      );
      v_99da56(true);
    } catch (v_9e86fd) {
      const v_badeaf =
        v_9e86fd instanceof Error && v_9e86fd.message
          ? v_9e86fd.message
          : v_8d41d7('my_info_close_membership.error_generic');
      v_5c59f6(v_badeaf);
    } finally {
      v_34a50a(false);
    }
  };

  return (
    <MainLayout activeKey="myinfo">
      <View style={v_d81136.container}>
        <Header title={v_8d41d7('my_info_close_membership.title')} showBackButton onBackPress={v_c7ac57} />
        <SafeScrollView
          style={v_d81136.scrollView}
          contentContainerStyle={v_d81136.content}
          showBottomBackground={false}
          disableBottomPadding={true}
        >
          <View style={v_d81136.form}>
            <Text style={v_d81136.warningText}>{v_8d41d7('my_info_close_membership.warning')}</Text>
            <Text style={v_d81136.hintText}>{v_8d41d7('my_info_close_membership.process_hint')}</Text>

            {v_a2ffce ? (
              <PasswordField
                label={v_8d41d7('my_info_close_membership.password_label')}
                placeholder={v_8d41d7('my_info_close_membership.password_placeholder')}
                value={v_adc076}
                onChangeText={v_52b279}
                editable={!v_683210}
                autoCapitalize="none"
              />
            ) : (
              <Text style={v_d81136.socialHint}>
                {v_8d41d7('my_info_close_membership.social_no_password_hint')}
              </Text>
            )}

            <FormCheckbox
              label={v_8d41d7('my_info_close_membership.agree_label')}
              value={v_a6fcf8}
              onChange={v_539b92}
            />
            <View style={v_d81136.buttonContainer}>
              <SecondaryButton
                title={v_8d41d7('my_info_close_membership.cancel_button')}
                onPress={v_c7ac57}
                style={v_d81136.cancelButton}
                disabled={v_683210}
              />
              <PrimaryButton
                title={
                  v_683210
                    ? v_8d41d7('my_info_close_membership.deleting')
                    : v_8d41d7('my_info_close_membership.delete_button')
                }
                onPress={v_0d28ed}
                style={v_d81136.deleteButton}
                disabled={v_683210}
              />
            </View>
          </View>
        </SafeScrollView>

        <AlertModal
          visible={v_50935b}
          title={v_8d41d7('my_info_close_membership.alert_title')}
          message={v_8d41d7('my_info_close_membership.alert_message')}
          onConfirm={() => v_961f58(false)}
        />
        <AlertModal
          visible={v_4dccb8}
          title={v_8d41d7('my_info_close_membership.alert_title')}
          message={v_8d41d7('my_info_close_membership.password_required')}
          onConfirm={() => v_77a882(false)}
        />
        <AlertModal
          visible={!!v_1744b9}
          title={v_8d41d7('my_info_close_membership.error_title')}
          message={v_1744b9 ?? ''}
          onConfirm={() => v_5c59f6(null)}
        />
        <AlertModal
          visible={v_8afa82}
          title={v_8d41d7('my_info_close_membership.success_title')}
          message={v_8d41d7('my_info_close_membership.success_message')}
          onConfirm={() => {
            v_99da56(false);
            void v_299572();
          }}
        />
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
    backgroundColor: v_1bfbd0.background,
  },
  content: {
    padding: v_9b1a04.large,
    alignItems: 'center',
  },
  form: {
    width: '100%',
    maxWidth: 780,
    gap: v_9b1a04.medium,
  },
  warningText: {
    fontSize: 14,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.error,
  },
  hintText: {
    fontSize: 13,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    marginBottom: v_9b1a04.small,
  },
  socialHint: {
    fontSize: 13,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
  },
  buttonContainer: {
    gap: v_9b1a04.medium,
    marginTop: v_9b1a04.large,
  },
  cancelButton: {
    flex: 1,
  },
  deleteButton: {
    flex: 1,
  },
});

export default v_9e06f6;
