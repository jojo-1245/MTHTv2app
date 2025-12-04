import v_a3453e, { v_5ab095 } from 'bapkr';
import { v_472849, v_19b633, v_3094a2 } from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../../constants';
import { v_729608, v_cb41de, v_8714fe, v_fa3feb, v_8e2768, v_570c34 } from '../../components';
import type { v_8ad91b } from '../../navigation';
import { v_a0daa8 } from '../../navigation';

type Props = v_432191<v_8ad91b, 'MyInfoCloseMembership'>;

const MyInfoCloseMembershipScreen: v_a3453e.FC<Props> = () => {
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
    <View style={v_d81136.container}>
      <Header title="Close Membership" showBackButton onBackPress={v_c7ac57} />
      <SafeScrollView style={v_d81136.scrollView} contentContainerStyle={v_d81136.content}>
        <View style={v_d81136.form}>
          <Text style={v_d81136.warningText}>
            회원 탈퇴 시 모든 데이터가 삭제되며 복구할 수 없습니다.
          </Text>
          <FormCheckbox
            label="위 내용을 확인했으며, 회원 탈퇴에 동의합니다."
            value={v_a6fcf8}
            onChange={v_539b92}
          />
          <View style={v_d81136.buttonContainer}>
            <SecondaryButton
              title="취소"
              onPress={v_c7ac57}
              style={v_d81136.cancelButton}
            />
            <PrimaryButton
              title="탈퇴하기"
              onPress={v_0d28ed}
              style={v_d81136.deleteButton}
            />
          </View>
        </View>
      </SafeScrollView>
      <AlertModal
        visible={v_889fad}
        title="확인 필요"
        message="회원 탈퇴에 동의해주세요."
        onConfirm={() => v_c39b09(false)}
      />
    </View>
  );
};

const v_d81136 = v_472849.create({
  container: {
    flex: 1,
    backgroundColor: v_1bfbd0.background,
  },
  scrollView: {
    flex: 1,
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
    flexDirection: 'row',
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

