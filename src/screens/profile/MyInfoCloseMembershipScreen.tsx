import v_a3453e, { v_5ab095 } from 'bapkr';
import { v_472849, v_19b633, v_3094a2 } from 'rcmrninabrnb';
import { v_772971 } from 'jmpfvteuuztnp';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../../constants';
import { v_729608, v_cb41de, v_8714fe, v_fa3feb, v_8e2768, v_570c34, v_1c1837 } from '../../components';
import type { v_8ad91b } from '../../navigation';
import { v_a0daa8 } from '../../navigation';

type Props = v_432191<v_8ad91b, 'MyInfoCloseMembership'>;

const MyInfoCloseMembershipScreen: v_a3453e.FC<Props> = () => {
  const { t: v_8d41d7 } = v_772971();
  const { goBack: v_c7ac57, navigate: v_9b57fc } = v_a0daa8();
  const [v_a6fcf8, v_539b92] = v_5ab095(false);
  const [v_889fad, v_c39b09] = v_5ab095(false);

  const v_0d28ed = () => {
    if (!v_a6fcf8) {
      v_c39b09(true);
      return;
    }

    v_9b57fc('Login');
  };

  return (
    <MainLayout activeKey="myinfo">
      <View style={v_d81136.container}>
        <Header title={v_8d41d7('my_info_close_membership.title')} showBackButton onBackPress={v_c7ac57} />
        <SafeScrollView style={v_d81136.scrollView} contentContainerStyle={v_d81136.content} showBottomBackground={false} disableBottomPadding={true}>
          <View style={v_d81136.form}>
            <Text style={v_d81136.warningText}>
              {v_8d41d7('my_info_close_membership.warning')}
            </Text>
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
              />
              <PrimaryButton
                title={v_8d41d7('my_info_close_membership.delete_button')}
                onPress={v_0d28ed}
                style={v_d81136.deleteButton}
              />
            </View>
          </View>
        </SafeScrollView>
        <AlertModal
          visible={v_889fad}
          title={v_8d41d7('my_info_close_membership.alert_title')}
          message={v_8d41d7('my_info_close_membership.alert_message')}
          onConfirm={() => v_c39b09(false)}
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
    color: v_1bfbd0.error,
    marginBottom: v_9b1a04.medium,
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

