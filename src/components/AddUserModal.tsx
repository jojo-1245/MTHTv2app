import v_a3453e, { v_5ab095, v_c4deb2, v_de06a3, v_e662ae } from 'bapkr';
import {
  v_472849,
  v_19b633,
  v_4623af,
  v_3094a2,
  v_aa7413,
  v_09d0e5,
  v_39a996,
  v_122070,
  v_03e392,
  v_f2c756,
  v_326be8,
  v_e767d1,
} from 'rcmrninabrnb';
import { v_dec439 } from 'zvyjokvuouwvifyzks';
import { v_772971 } from 'jmpfvteuuztnp';
import v_5427ed from './OtpInput';
import v_cb41de from './PrimaryButton';
import v_8714fe from './SecondaryButton';
import v_e775af from './TextField';
import { v_1bfbd0, v_843035, v_9b1a04, v_ef658a } from '../constants';
import { v_7ef860 } from '../services';
import {
  v_ed063b,
  v_01afb4,
  v_9112f4,
  v_766523,
  type v_19205c,
} from '../services';
import { v_998b9d } from '../utils/authErrorHandler';
import { v_ada615 } from 'ixigazcpvfldbecwtbvavtbi';

const v_28d629 = 6;

type Step = 'email' | 'otp' | 'nickname' | 'nonMember';

export interface AddUserModalProps {
  visible: boolean;
  onClose: () => void;
  onAdd: () => void; 
}

export const AddUserModal: v_a3453e.FC<AddUserModalProps> = ({
  visible: v_cf55be,
  onClose: v_0890f8,
  onAdd: v_b0e537,
}) => {
  const { t: v_8d41d7 } = v_772971();
  const v_c65f5d = v_ada615();
  const v_e99f51 = v_e662ae<v_122070>(null);
  const v_2df89f = v_e662ae<any>(null);
  const [v_e71371, v_605772] = v_5ab095<boolean | null>(null); 
  const [v_683210, v_34a50a] = v_5ab095(false);
  const [v_729796, v_fd7d1f] = v_5ab095<Step>('email');

  const [v_78547c, v_e1931c] = v_5ab095<string | null>(null);
  const [v_1b4841, v_47501d] = v_5ab095<Set<string>>(new Set());

  const [v_e0c7e8, v_fedf34] = v_5ab095('');
  const [v_76148b, v_ff2199] = v_5ab095<v_19205c[]>([]);
  const [v_7b9eeb, v_99e77d] = v_5ab095<v_19205c | null>(null);
  const [v_af419b, v_9c3167] = v_5ab095('');
  const [v_ab0e46, v_8d29b6] = v_5ab095('');
  const [v_4568f9, v_58158a] = v_5ab095(false);
  const [v_553f27, v_e37907] = v_5ab095(false);

  const [v_a72c3f, v_f01884] = v_5ab095(false);
  const [v_a404bd, v_92e3ba] = v_5ab095('');

  v_c4deb2(() => {
    if (v_cf55be) {
      v_1f9bc9();
    } else {
      v_41b56e();
    }
  }, [v_cf55be]);

  const v_1f9bc9 = async () => {
    try {
      const v_727031 = await v_7ef860();

      const v_4064e4 = v_727031.business === 1 || v_727031.business === true;

      if (__DEV__) {
        console.log('[AddUserModal] 사용자 타입 확인:', {
          business: v_727031.business,
          businessType: typeof v_727031.business,
          businessEquals1: v_727031.business === 1,
          businessEqualsTrue: v_727031.business === true,
          businessStatus: v_4064e4,
          isBusinessStateBefore: v_e71371,
          willSetIsBusiness: v_4064e4,
        });
      }

      v_605772(v_4064e4);

      if (__DEV__) {
        console.log('[AddUserModal] isBusiness state 설정 완료:', {
          businessStatus: v_4064e4,
          willBeSet: v_4064e4,
          profileBusiness: v_727031.business,
        });
      }

      if (v_4064e4) {
        v_fd7d1f('nickname');
      } else {
        v_fd7d1f('email');
      }

      if (v_727031.email) {
        v_e1931c(v_727031.email.toLowerCase().trim());
      }

      try {
        const v_28724c = await v_766523();
        const v_bccb57 = new Set<string>();
        v_28724c.forEach((v_b4542a) => {

          if (v_b4542a.email) {
            const v_e0c7e8 = v_b4542a.email.toLowerCase().trim();
            v_bccb57.add(v_e0c7e8);
            if (__DEV__) {
              console.log('[AddUserModal] 연결된 부계정 이메일:', v_e0c7e8);
            }
          }
        });
        if (__DEV__) {
          console.log('[AddUserModal] 총 연결된 부계정 수:', v_bccb57.size);
        }
        v_47501d(v_bccb57);
      } catch (v_5e9bfe) {
        console.error('[AddUserModal] 부계정 리스트 로드 실패:', v_5e9bfe);

      }
    } catch (v_5e9bfe) {
      console.error('[AddUserModal] business 상태 로드 실패:', v_5e9bfe);
      if (v_998b9d(v_c65f5d, v_5e9bfe)) {
        return;
      }
      v_03e392.alert(v_8d41d7('common.error'), v_8d41d7('sub_account.load_user_info_failed'));
      v_0890f8();
    }
  };

  const v_41b56e = () => {
    v_fedf34('');
    v_ff2199([]);
    v_99e77d(null);
    v_9c3167('');
    v_8d29b6('');
    v_58158a(false);
    v_e37907(false);
    v_f01884(false);
    v_92e3ba('');
    v_fd7d1f(v_e71371 ? 'nickname' : 'email');
  };

  const v_f2e683 = v_de06a3(
    async (v_47a385) => {
      if (!v_47a385 || v_47a385.length < 2) {
        v_ff2199([]);
        return;
      }

      v_58158a(true);
      try {
        const v_a7f568 = await v_ed063b({ email: v_47a385 });

        const v_df4c43 = v_a7f568
          .filter((v_660822) => {
            const v_70217c = v_660822.email.toLowerCase().trim();

            if (v_78547c && v_70217c === v_78547c) {
              return false;
            }
            return true;
          })
          .map((v_660822) => {
            const v_70217c = v_660822.email.toLowerCase().trim();

            const v_cf8dea = v_1b4841.has(v_70217c);
            return {
              ...v_660822,
              isLinked: v_cf8dea,
            };
          });

        v_ff2199(v_df4c43);
      } catch (v_5e9bfe) {
        console.error('[AddUserModal] 이메일 검색 실패:', v_5e9bfe);
        if (v_998b9d(v_c65f5d, v_5e9bfe)) {
          return;
        }
        v_03e392.alert(v_8d41d7('common.error'), v_8d41d7('sub_account.member_search_failed'));
      } finally {
        v_58158a(false);
      }
    },
    [v_c65f5d, v_1b4841, v_78547c]
  );

  v_c4deb2(() => {
    if (v_729796 === 'email' && v_e0c7e8) {
      const v_cb36b1 = setTimeout(() => {
        v_f2e683(v_e0c7e8);
      }, 500);
      return () => clearTimeout(v_cb36b1);
    }
  }, [v_e0c7e8, v_729796, v_f2e683]);

  const v_51cad4 = async (member: v_19205c) => {

    const v_70217c = v_660822.email.toLowerCase().trim();

    if (v_1b4841.has(v_70217c)) {
      v_03e392.alert(v_8d41d7('common.notification'), v_8d41d7('sub_account.already_linked'));
      return;
    }

    if ((v_660822 as any).isLinked) {
      v_03e392.alert(v_8d41d7('common.notification'), v_8d41d7('sub_account.already_linked'));
      return;
    }

    v_99e77d(v_660822);
    v_fedf34(v_660822.email);
    v_ff2199([]);

    v_34a50a(true);
    try {
      await v_9112f4(v_660822.email);
      v_e37907(true);
      v_fd7d1f('otp');
      v_03e392.alert(v_8d41d7('common.success'), v_8d41d7('sub_account.otp_sent'));
    } catch (v_5e9bfe) {
      console.error('[AddUserModal] OTP 발송 실패:', v_5e9bfe);
      if (v_998b9d(v_c65f5d, v_5e9bfe)) {
        return;
      }
      v_03e392.alert(v_8d41d7('common.error'), v_8d41d7('sub_account.otp_send_failed'));
    } finally {
      v_34a50a(false);
    }
  };

  const v_7914f7 = () => {
    if (v_af419b.length !== v_28d629) {
      v_03e392.alert(v_8d41d7('common.notification'), v_8d41d7('sub_account.otp_enter_all'));
      return;
    }

    const v_849cde = v_af419b.replace(/\D/g, '').slice(0, v_28d629);
    if (v_849cde.length !== v_28d629) {
      v_03e392.alert(v_8d41d7('common.notification'), v_8d41d7('sub_account.otp_invalid_format'));
      return;
    }

    v_fd7d1f('nickname');
  };

  const v_0dbfdf = async () => {
    if (!v_7b9eeb || !v_ab0e46.trim() || v_af419b.length !== v_28d629) {
      v_03e392.alert(v_8d41d7('common.notification'), v_8d41d7('sub_account.enter_all_info'));
      return;
    }

    const v_849cde = v_af419b.replace(/\D/g, '').slice(0, v_28d629);
    if (v_849cde.length !== v_28d629) {
      v_03e392.alert(v_8d41d7('common.notification'), v_8d41d7('sub_account.otp_invalid_format'));
      return;
    }

    v_34a50a(true);
    try {

      await v_01afb4({
        name: v_ab0e46.trim(),
        email: v_7b9eeb.email,
        otp: v_849cde, 
      });

      const v_e3c76c = v_7b9eeb.email.toLowerCase().trim();
      v_47501d((v_ba2215) => new Set(v_ba2215).add(v_e3c76c));

      v_03e392.alert(v_8d41d7('common.success'), v_8d41d7('sub_account.add_success'));
      v_b0e537();
      v_0890f8();
      v_41b56e();
    } catch (v_5e9bfe) {
      console.error('[AddUserModal] 부계정 추가 실패:', v_5e9bfe);
      if (v_998b9d(v_c65f5d, v_5e9bfe)) {
        return;
      }

      let v_a8cd21 = v_8d41d7('sub_account.otp_invalid');
      if (v_5e9bfe instanceof Error) {
        const v_1744b9 = v_5e9bfe.message;

        if (v_1744b9.toLowerCase().includes('otp') ||
          v_1744b9.toLowerCase().includes('인증') ||
          v_1744b9.toLowerCase().includes('code') ||
          v_1744b9.toLowerCase().includes('verification') ||
          v_1744b9.toLowerCase().includes('invalid') ||
          v_1744b9.toLowerCase().includes('잘못') ||
          v_1744b9.toLowerCase().includes('incorrect') ||
          v_1744b9.toLowerCase().includes('wrong')) {
          v_a8cd21 = v_1744b9;
        }
      }
      v_03e392.alert(v_8d41d7('sub_account.otp_verification_failed'), v_a8cd21);
    } finally {
      v_34a50a(false);
    }
  };

  const v_6b4310 = async () => {
    if (!v_a404bd.trim()) {
      v_03e392.alert(v_8d41d7('common.notification'), v_8d41d7('sub_account.enter_nickname'));
      return;
    }

    v_34a50a(true);
    try {
      await v_01afb4({
        name: v_a404bd.trim(),
      });
      v_03e392.alert(v_8d41d7('common.success'), v_8d41d7('sub_account.add_success'));
      v_b0e537();
      v_0890f8();
      v_41b56e();
    } catch (v_5e9bfe) {
      console.error('[AddUserModal] 비회원 부계정 추가 실패:', v_5e9bfe);
      if (v_998b9d(v_c65f5d, v_5e9bfe)) {
        return;
      }
      v_03e392.alert(v_8d41d7('common.error'), v_5e9bfe instanceof Error ? v_5e9bfe.message : v_8d41d7('sub_account.add_failed'));
    } finally {
      v_34a50a(false);
    }
  };

  const v_b3ff71 = () => {
    v_f01884(true);
    v_fd7d1f('email');
  };

  const v_e26a6d = async () => {
    try {
      const v_727031 = await v_7ef860();
      const v_2fa46c = v_727031.referral_code;
      if (v_2fa46c) {

        const v_3f557d = `https://service-mh.example.invalid/referral/${v_2fa46c}`;
        await v_f2c756.openURL(v_3f557d);
      } else {
        v_03e392.alert(v_8d41d7('common.notification'), v_8d41d7('sub_account.no_referral_code'));
      }
    } catch (v_5e9bfe) {
      console.error('[AddUserModal] 레퍼럴 링크 열기 실패:', v_5e9bfe);
      v_03e392.alert(v_8d41d7('common.error'), v_8d41d7('sub_account.copy_failed'));
    }
  };

  const v_7f2e65 = () => {
    v_41b56e();
    v_0890f8();
  };

  const v_0e461e = (v_3b402b): boolean => {
    const v_9a3638 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return v_9a3638.test(v_3b402b.trim());
  };

  const v_0df16a = () => {

    setTimeout(() => {
      v_e99f51.current?.scrollTo({ y: 150, animated: true });
    }, v_326be8.OS === 'ios' ? 300 : 100);
  };

  const v_1fcb24 = () => {
    if (v_729796 === 'email') {
      return (
        <>
          <Text style={v_d81136.instruction}>{v_8d41d7('sub_account.search_by_email')}</Text>
          <TextField
            ref={v_2df89f}
            label={v_8d41d7('common.email')}
            value={v_e0c7e8}
            onChangeText={v_fedf34}
            placeholder={v_8d41d7('sub_account.enter_email')}
            keyboardType="email-address"
            autoCapitalize="none"
            containerStyle={v_d81136.inputContainer}
            onFocus={v_0df16a}
          />
          {v_4568f9 && (
            <View style={v_d81136.searchingContainer}>
              <ActivityIndicator size="small" color={v_1bfbd0.primary} />
              <Text style={v_d81136.searchingText}>{v_8d41d7('sub_account.searching')}</Text>
            </View>
          )}
          {!v_4568f9 && v_76148b.length > 0 && (
            <ScrollView
              style={v_d81136.searchResultsScrollContainer}
              nestedScrollEnabled={true}
              keyboardShouldPersistTaps="handled"
            >
              <View style={v_d81136.searchResultsContainer}>
                {v_76148b.map((v_660822, v_a56041) => {
                  const v_70217c = v_660822.email.toLowerCase().trim();
                  const v_cf8dea = v_1b4841.has(v_70217c) || (v_660822 as any).isLinked || false;
                  if (__DEV__ && v_cf8dea) {
                    console.log('[AddUserModal] 연결된 계정 감지:', {
                      email: v_70217c,
                      hasInLinkedEmails: v_1b4841.has(v_70217c),
                      memberIsLinked: (v_660822 as any).isLinked,
                      linkedEmailsSize: v_1b4841.size,
                    });
                  }
                  return (
                    <TouchableOpacity
                      key={v_a56041}
                      style={[
                        v_d81136.searchResultItem,
                        v_cf8dea && v_d81136.searchResultItemLinked,
                      ]}
                      onPress={v_cf8dea ? undefined : () => v_51cad4(v_660822)}
                      disabled={v_cf8dea}
                      activeOpacity={v_cf8dea ? 1 : 0.7}
                    >
                      <View style={v_d81136.searchResultContent}>
                        <View style={v_d81136.searchResultTextContainer}>
                          <Text style={[
                            v_d81136.searchResultName,
                            v_cf8dea && v_d81136.searchResultNameDisabled,
                          ]}>
                            {v_660822.name}
                          </Text>
                          <Text style={[
                            v_d81136.searchResultEmail,
                            v_cf8dea && v_d81136.searchResultEmailDisabled,
                          ]}>
                            {v_660822.email}
                          </Text>
                        </View>
                        {v_cf8dea && (
                          <View style={v_d81136.linkedBadge}>
                            <Text style={v_d81136.linkedBadgeText}>{v_8d41d7('sub_account.linked')}</Text>
                          </View>
                        )}
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
          )}
          {!v_4568f9 && v_e0c7e8.length >= 2 && v_76148b.length === 0 && (
            <View style={v_d81136.noResultsContainer}>
              <Text style={v_d81136.noResultsText}>{v_8d41d7('sub_account.no_search_results')}</Text>
              {(() => {

                if (__DEV__) {
                  console.log('[AddUserModal] 레퍼럴 버튼 표시 조건 확인 (Basic):', {
                    isBusiness: v_e71371,
                    isBusinessType: typeof v_e71371,
                    isBusinessStrictTrue: v_e71371 === true,
                    isBusinessTruthy: !!v_e71371,
                    email: v_e0c7e8,
                    emailLength: v_e0c7e8.length,
                    isValidEmail: v_0e461e(v_e0c7e8),
                    searching: v_4568f9,
                    searchResultsLength: v_76148b.length,
                    shouldShow: v_e71371 === true || !!v_e71371,
                  });
                }

                if (v_e71371) {
                  if (__DEV__) {
                    console.log('[AddUserModal] 레퍼럴 버튼 표시됨 (Basic)');
                  }
                  return (
                    <TouchableOpacity
                      style={[
                        v_d81136.referralLinkButton,
                        !v_0e461e(v_e0c7e8) && v_d81136.referralLinkButtonDisabled,
                      ]}
                      onPress={v_e26a6d}
                      disabled={!v_0e461e(v_e0c7e8)}
                      activeOpacity={v_0e461e(v_e0c7e8) ? 0.7 : 1}
                    >
                      <Text
                        style={[
                          v_d81136.referralLinkText,
                          !v_0e461e(v_e0c7e8) && v_d81136.referralLinkTextDisabled,
                        ]}
                      >
                        {v_8d41d7('sub_account.send_referral_link')}
                      </Text>
                    </TouchableOpacity>
                  );
                }

                if (__DEV__) {
                  console.log('[AddUserModal] 레퍼럴 버튼이 표시되지 않음 (Basic):', {
                    isBusiness: v_e71371,
                    isBusinessType: typeof v_e71371,
                    isBusinessValue: v_e71371,
                    isBusinessTruthy: !!v_e71371,
                    isBusinessNull: v_e71371 === null,
                  });
                }
                return null;
              })()}
            </View>
          )}
        </>
      );
    }

    if (v_729796 === 'otp') {
      return (
        <>
          <Text style={v_d81136.instruction}>
            {v_8d41d7('sub_account.enter_otp', { email: v_7b9eeb?.email })}
          </Text>
          <View style={v_d81136.otpWrap}>
            <OtpInput
              length={v_28d629}
              value={v_af419b}
              onChange={v_9c3167}
              editable={true}
            />
          </View>
          <PrimaryButton
            title={v_8d41d7('common.next')}
            onPress={v_7914f7}
            disabled={v_af419b.length !== v_28d629 || v_683210}
            style={v_d81136.button}
          />
        </>
      );
    }

    if (v_729796 === 'nickname') {
      return (
        <>
          <Text style={v_d81136.instruction}>{v_8d41d7('sub_account.enter_nickname')}</Text>
          <TextField
            label={v_8d41d7('sub_account.nickname')}
            value={v_ab0e46}
            onChangeText={v_8d29b6}
            placeholder={v_8d41d7('sub_account.enter_nickname_placeholder')}
            containerStyle={v_d81136.inputContainer}
          />
          <PrimaryButton
            title={v_8d41d7('sub_account.link')}
            onPress={v_0dbfdf}
            disabled={!v_ab0e46.trim() || v_683210}
            style={v_d81136.button}
          />
        </>
      );
    }
  };

  const v_f378bb = () => {
    if (v_729796 === 'nickname' && !v_a72c3f) {
      return (
        <>
          <Text style={v_d81136.instruction}>{v_8d41d7('sub_account.enter_nickname')}</Text>
          <TextField
            label={v_8d41d7('sub_account.nickname')}
            value={v_a404bd}
            onChangeText={v_92e3ba}
            placeholder={v_8d41d7('sub_account.enter_nickname_placeholder')}
            containerStyle={v_d81136.inputContainer}
          />
          <PrimaryButton
            title={v_8d41d7('sub_account.add_sub_account')}
            onPress={v_6b4310}
            disabled={!v_a404bd.trim() || v_683210}
            style={v_d81136.button}
          />
          <SecondaryButton
            title={v_8d41d7('sub_account.add_by_email')}
            onPress={v_b3ff71}
            style={v_d81136.button}
          />
        </>
      );
    }

    if (v_729796 === 'email' || v_a72c3f) {
      return (
        <>
          <Text style={v_d81136.instruction}>{v_8d41d7('sub_account.search_by_email')}</Text>
          <TextField
            ref={v_2df89f}
            label={v_8d41d7('common.email')}
            value={v_e0c7e8}
            onChangeText={v_fedf34}
            placeholder={v_8d41d7('sub_account.enter_email')}
            keyboardType="email-address"
            autoCapitalize="none"
            containerStyle={v_d81136.inputContainer}
            onFocus={v_0df16a}
          />
          {v_4568f9 && (
            <View style={v_d81136.searchingContainer}>
              <ActivityIndicator size="small" color={v_1bfbd0.primary} />
              <Text style={v_d81136.searchingText}>{v_8d41d7('sub_account.searching')}</Text>
            </View>
          )}
          {!v_4568f9 && v_76148b.length > 0 && (
            <ScrollView
              style={v_d81136.searchResultsScrollContainer}
              nestedScrollEnabled={true}
              keyboardShouldPersistTaps="handled"
            >
              <View style={v_d81136.searchResultsContainer}>
                {v_76148b.map((v_660822, v_a56041) => {
                  const v_70217c = v_660822.email.toLowerCase().trim();
                  const v_cf8dea = v_1b4841.has(v_70217c) || (v_660822 as any).isLinked || false;
                  if (__DEV__ && v_cf8dea) {
                    console.log('[AddUserModal] 연결된 계정 감지:', {
                      email: v_70217c,
                      hasInLinkedEmails: v_1b4841.has(v_70217c),
                      memberIsLinked: (v_660822 as any).isLinked,
                      linkedEmailsSize: v_1b4841.size,
                    });
                  }
                  return (
                    <TouchableOpacity
                      key={v_a56041}
                      style={[
                        v_d81136.searchResultItem,
                        v_cf8dea && v_d81136.searchResultItemLinked,
                      ]}
                      onPress={v_cf8dea ? undefined : () => v_51cad4(v_660822)}
                      disabled={v_cf8dea}
                      activeOpacity={v_cf8dea ? 1 : 0.7}
                    >
                      <View style={v_d81136.searchResultContent}>
                        <View style={v_d81136.searchResultTextContainer}>
                          <Text style={[
                            v_d81136.searchResultName,
                            v_cf8dea && v_d81136.searchResultNameDisabled,
                          ]}>
                            {v_660822.name}
                          </Text>
                          <Text style={[
                            v_d81136.searchResultEmail,
                            v_cf8dea && v_d81136.searchResultEmailDisabled,
                          ]}>
                            {v_660822.email}
                          </Text>
                        </View>
                        {v_cf8dea && (
                          <View style={v_d81136.linkedBadge}>
                            <Text style={v_d81136.linkedBadgeText}>{v_8d41d7('sub_account.linked')}</Text>
                          </View>
                        )}
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
          )}
          {!v_4568f9 && v_e0c7e8.length >= 2 && v_76148b.length === 0 && (
            <View style={v_d81136.noResultsContainer}>
              <Text style={v_d81136.noResultsText}>{v_8d41d7('sub_account.no_search_results')}</Text>
              {(() => {

                if (__DEV__) {
                  console.log('[AddUserModal] 레퍼럴 버튼 표시 조건 확인 (Business):', {
                    isBusiness: v_e71371,
                    isBusinessType: typeof v_e71371,
                    isBusinessStrictTrue: v_e71371 === true,
                    isBusinessTruthy: !!v_e71371,
                    email: v_e0c7e8,
                    emailLength: v_e0c7e8.length,
                    isValidEmail: v_0e461e(v_e0c7e8),
                    searching: v_4568f9,
                    searchResultsLength: v_76148b.length,
                    shouldShow: v_e71371 === true || !!v_e71371,
                  });
                }

                if (v_e71371) {
                  if (__DEV__) {
                    console.log('[AddUserModal] 레퍼럴 버튼 표시됨 (Business)');
                  }
                  return (
                    <TouchableOpacity
                      style={[
                        v_d81136.referralLinkButton,
                        !v_0e461e(v_e0c7e8) && v_d81136.referralLinkButtonDisabled,
                      ]}
                      onPress={v_e26a6d}
                      disabled={!v_0e461e(v_e0c7e8)}
                      activeOpacity={v_0e461e(v_e0c7e8) ? 0.7 : 1}
                    >
                      <Text
                        style={[
                          v_d81136.referralLinkText,
                          !v_0e461e(v_e0c7e8) && v_d81136.referralLinkTextDisabled,
                        ]}
                      >
                        {v_8d41d7('sub_account.send_referral_link')}
                      </Text>
                    </TouchableOpacity>
                  );
                }

                if (__DEV__) {
                  console.log('[AddUserModal] 레퍼럴 버튼이 표시되지 않음 (Business):', {
                    isBusiness: v_e71371,
                    isBusinessType: typeof v_e71371,
                    isBusinessValue: v_e71371,
                    isBusinessTruthy: !!v_e71371,
                    isBusinessNull: v_e71371 === null,
                  });
                }
                return null;
              })()}
              <TouchableOpacity
                style={v_d81136.retryButton}
                onPress={() => {
                  v_fedf34('');
                  v_ff2199([]);
                }}
              >
                <Text style={v_d81136.retryButtonText}>{v_8d41d7('sub_account.retry_search')}</Text>
              </TouchableOpacity>
            </View>
          )}
        </>
      );
    }

    if (v_729796 === 'otp') {
      return (
        <>
          <Text style={v_d81136.instruction}>
            {v_8d41d7('sub_account.enter_otp', { email: v_7b9eeb?.email })}
          </Text>
          <View style={v_d81136.otpWrap}>
            <OtpInput
              length={v_28d629}
              value={v_af419b}
              onChange={v_9c3167}
              editable={true}
            />
          </View>
          <PrimaryButton
            title={v_8d41d7('common.next')}
            onPress={v_7914f7}
            disabled={v_af419b.length !== v_28d629 || v_683210}
            style={v_d81136.button}
          />
        </>
      );
    }

    if (v_729796 === 'nickname' && v_a72c3f) {
      return (
        <>
          <Text style={v_d81136.instruction}>{v_8d41d7('sub_account.enter_nickname')}</Text>
          <TextField
            label={v_8d41d7('sub_account.nickname')}
            value={v_ab0e46}
            onChangeText={v_8d29b6}
            placeholder={v_8d41d7('sub_account.enter_nickname_placeholder')}
            containerStyle={v_d81136.inputContainer}
          />
          <PrimaryButton
            title={v_8d41d7('sub_account.link')}
            onPress={v_0dbfdf}
            disabled={!v_ab0e46.trim() || v_683210}
            style={v_d81136.button}
          />
        </>
      );
    }
  };

  return (
    <Modal
      visible={v_cf55be}
      transparent
      animationType="slide"
      onRequestClose={v_7f2e65}
    >
      <Pressable style={v_d81136.overlay} onPress={v_7f2e65}>
        <KeyboardAvoidingView
          behavior={v_326be8.OS === 'ios' ? 'padding' : undefined}
          style={v_d81136.keyboardAvoid}
          keyboardVerticalOffset={0}
        >
          <Pressable style={v_d81136.modal} onPress={(v_9e86fd) => v_9e86fd.stopPropagation()}>
            {}
            <View style={v_d81136.dragHandle} />

            <ScrollView
              ref={v_e99f51}
              contentContainerStyle={v_d81136.scrollContent}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
              automaticallyAdjustKeyboardInsets={true}
              keyboardDismissMode="interactive"
            >
              <View style={v_d81136.header}>
                <Text style={v_d81136.title}>{v_8d41d7('account_selector.add_sub_account')}</Text>
                <TouchableOpacity
                  style={v_d81136.closeBtn}
                  onPress={v_7f2e65}
                  hitSlop={12}
                  accessibilityRole="button"
                  accessibilityLabel={v_8d41d7('common.close')}
                >
                  <Feather name="x" size={24} color={v_1bfbd0.text} />
                </TouchableOpacity>
              </View>

              {v_683210 && (
                <View style={v_d81136.loadingOverlay}>
                  <ActivityIndicator size="large" color={v_1bfbd0.primary} />
                </View>
              )}

              {v_e71371 === false && v_1fcb24()}
              {v_e71371 === true && v_f378bb()}
              {v_e71371 === null && (
                <View style={v_d81136.loadingContainer}>
                  <ActivityIndicator size="small" color={v_1bfbd0.primary} />
                  <Text style={v_d81136.loadingText}>{v_8d41d7('profile.loading')}</Text>
                </View>
              )}
            </ScrollView>
          </Pressable>
        </KeyboardAvoidingView>
      </Pressable>
    </Modal>
  );
};

const v_d81136 = v_472849.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  keyboardAvoid: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modal: {
    width: '100%',
    maxHeight: '90%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  dragHandle: {
    width: 40,
    height: 4,
    backgroundColor: v_1bfbd0.border,
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 8,
  },
  scrollContent: {
    padding: v_9b1a04.large,
    paddingBottom: 400, 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  title: {
    fontSize: v_ef658a.xlarge,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
  },
  closeBtn: {
    padding: 4,
  },
  instruction: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    marginBottom: 20,
    lineHeight: 22,
  },
  inputContainer: {
    marginBottom: 20,
  },
  otpWrap: {
    marginBottom: 24,
  },
  button: {
    marginBottom: 12,
  },
  searchingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    gap: 8,
  },
  searchingText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
  },
  searchResultsScrollContainer: {
    maxHeight: 300,
    marginTop: 8,
    marginBottom: 20,
  },
  searchResultsContainer: {
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
    borderRadius: 8,
  },
  searchResultItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: v_1bfbd0.borderLight,
  },
  searchResultItemLinked: {
    backgroundColor: v_1bfbd0.lightGray,
    opacity: 0.7,
  },
  searchResultContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchResultTextContainer: {
    flex: 1,
  },
  searchResultName: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
    marginBottom: 4,
  },
  searchResultNameDisabled: {
    color: v_1bfbd0.secondaryText,
    opacity: 0.6,
  },
  searchResultEmail: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
  },
  searchResultEmailDisabled: {
    opacity: 0.6,
  },
  linkedBadge: {
    backgroundColor: v_1bfbd0.success,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginLeft: 8,
  },
  linkedBadgeText: {
    fontSize: v_ef658a.small,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.white,
  },
  noResultsContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    marginBottom: 20,
  },
  noResultsText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    marginBottom: 16,
  },
  referralLinkButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: v_1bfbd0.primary,
    borderRadius: 8,
    marginBottom: 12,
  },
  referralLinkButtonDisabled: {
    backgroundColor: v_1bfbd0.border,
    opacity: 0.5,
  },
  referralLinkText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.white,
  },
  referralLinkTextDisabled: {
    color: v_1bfbd0.secondaryText,
  },
  retryButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
    borderRadius: 8,
  },
  retryButtonText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
  },
  loadingContainer: {
    paddingVertical: 24,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  loadingText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    borderRadius: 16,
  },
});
