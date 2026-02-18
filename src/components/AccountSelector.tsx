import v_a3453e, { v_5ab095, v_c4deb2 } from 'bapkr';
import {
  v_472849,
  v_19b633,
  v_4623af,
  v_3094a2,
  v_aa7413,
  v_09d0e5,
  v_39a996,
} from 'rcmrninabrnb';
import { v_dec439 } from 'zvyjokvuouwvifyzks';
import { v_772971 } from 'jmpfvteuuztnp';
import { v_ada615 } from 'ixigazcpvfldbecwtbvavtbi';
import { v_1bfbd0, v_843035, v_9b1a04, v_ef658a } from '../constants';
import { v_766523, v_abf760 } from '../services';
import { v_998b9d } from '../utils/authErrorHandler';

export interface AccountItem {
  id: string;
  name: string;
  isCurrent?: boolean;
  linked_member_id?: number | null; 
}

export interface AccountSelectorProps {

  accounts?: AccountItem[];
  selectedAccountId: string;
  onSelectAccount: (accountId: string) => void;
  onAddSubAccount?: () => void;
  onDeleteAccount?: (accountId: string) => void;
  onLinkEmail?: (accountId: string) => void; 

  disabled?: boolean;

  autoLoad?: boolean;
}

export const AccountSelector: v_a3453e.FC<AccountSelectorProps> = ({
  accounts: v_1a4063,
  selectedAccountId: v_e7b2f2,
  onSelectAccount: v_92fed4,
  onAddSubAccount: v_ea2e32,
  onDeleteAccount: v_6162cd,
  onLinkEmail: v_20eb4f,
  disabled: v_4a6533 = false,
  autoLoad: v_e22d35 = true,
}) => {
  const { t: v_8d41d7 } = v_772971();
  const v_c65f5d = v_ada615();
  const [v_c403c7, v_f099fd] = v_5ab095(false);
  const [v_0651a9, v_34cfea] = v_5ab095<string | null>(null);
  const [v_c86f08, v_d690d0] = v_5ab095<AccountItem[]>(v_1a4063 || []);
  const [v_cd31a8, v_deef62] = v_5ab095(false);
  const [v_95616f, v_885e0e] = v_5ab095<Error | null>(null);

  v_c4deb2(() => {
    const v_358be6 = async () => {

      if (v_1a4063 || !v_e22d35) {
        return;
      }

      v_deef62(true);
      v_885e0e(null);
      try {
        console.log('[AccountSelector] API 호출 시작...');
        const v_28724c = await v_766523();
        console.log('[AccountSelector] API 응답 받음:', {
          subAccountsCount: v_28724c.length,
          subAccounts: JSON.stringify(v_28724c, null, 2),
        });

        const v_5f4f8f = v_28724c.map((v_9f1d92) => ({
          id: v_9f1d92.id,
          name: v_9f1d92.name,
          isCurrent: v_9f1d92.isCurrent,
        }));

        console.log('[AccountSelector] 변환된 accounts:', {
          convertedCount: v_5f4f8f.length,
          convertedAccounts: JSON.stringify(v_5f4f8f, null, 2),
        });

        v_d690d0(v_5f4f8f);
        console.log('[AccountSelector] accounts state 업데이트 완료');
      } catch (v_5e9bfe) {
        console.error('[AccountSelector] 부계정 리스트 로드 실패:', {
          error: v_5e9bfe,
          errorMessage: v_5e9bfe instanceof Error ? v_5e9bfe.message : String(v_5e9bfe),
          errorStack: v_5e9bfe instanceof Error ? v_5e9bfe.stack : undefined,
        });

        if (v_998b9d(v_c65f5d, v_5e9bfe)) {
          return;
        }

        v_885e0e(v_5e9bfe instanceof Error ? v_5e9bfe : new Error('계정 리스트를 불러오는데 실패했습니다.'));
      } finally {
        v_deef62(false);
      }
    };

    v_358be6();
  }, [v_1a4063, v_e22d35]);

  v_c4deb2(() => {
    if (v_1a4063) {
      console.log('[AccountSelector] accounts prop 변경됨:', {
        accountsPropCount: v_1a4063.length,
        accountsProp: JSON.stringify(v_1a4063, null, 2),
      });
      v_d690d0(v_1a4063);
    }
  }, [v_1a4063]);

  const v_0c2f9b = v_c86f08.find((v_779914) => v_779914.id === v_e7b2f2) || v_c86f08[0];

  v_c4deb2(() => {
    console.log('[AccountSelector] 현재 상태:', {
      accountsCount: v_c86f08.length,
      accounts: JSON.stringify(v_c86f08, null, 2),
      selectedAccountId: v_e7b2f2,
      selectedAccount: v_0c2f9b ? JSON.stringify(v_0c2f9b, null, 2) : null,
      isLoading: v_cd31a8,
      loadError: v_95616f ? v_95616f.message : null,
      accountsPropProvided: !!v_1a4063,
      autoLoad: v_e22d35,
    });
  }, [v_c86f08, v_e7b2f2, v_0c2f9b, v_cd31a8, v_95616f, v_1a4063, v_e22d35]);

  return (
    <>
      <TouchableOpacity
        style={v_d81136.trigger}
        onPress={() => !v_4a6533 && v_f099fd(true)}
        activeOpacity={0.8}
        disabled={v_4a6533}
      >
        <View style={v_d81136.avatar}>
          <Feather name="user" size={18} color="#615FFF" />
        </View>
        <Text style={v_d81136.triggerText} numberOfLines={1}>
          {v_0c2f9b?.name || ''}
        </Text>
        {!v_4a6533 && (
          <Feather
            name={v_c403c7 ? 'chevron-up' : 'chevron-down'}
            size={16}
            color={v_1bfbd0.secondaryText}
          />
        )}
      </TouchableOpacity>

      <Modal
        visible={v_c403c7}
        transparent
        animationType="fade"
        onRequestClose={() => {
          v_f099fd(false);
          v_34cfea(null);
        }}
      >
        <Pressable
          style={v_d81136.modalOverlay}
          onPress={() => {
            v_f099fd(false);
            v_34cfea(null);
          }}
        >
          <Pressable style={v_d81136.modalContent} onPress={(v_9e86fd) => v_9e86fd.stopPropagation()}>
            <Text style={v_d81136.modalTitle}>{v_8d41d7('account_selector.title')}</Text>
            {v_cd31a8 ? (
              <View style={v_d81136.loadingContainer}>
                <ActivityIndicator size="small" color={v_1bfbd0.primary} />
                <Text style={v_d81136.loadingText}>계정 목록을 불러오는 중...</Text>
              </View>
            ) : v_95616f ? (
              <View style={v_d81136.errorContainer}>
                <Text style={v_d81136.errorText}>{v_95616f.message}</Text>
              </View>
            ) : v_c86f08.length === 0 ? (
              <View style={v_d81136.emptyContainer}>
                <Text style={v_d81136.emptyText}>계정이 없습니다.</Text>
              </View>
            ) : (
              v_c86f08.map((v_b4542a, v_a56041) => (
                <View key={v_b4542a.id} style={v_d81136.accountRowWrapper}>
                  <TouchableOpacity
                    style={v_d81136.accountRow}
                    onPress={() => {
                      v_34cfea(null);
                      v_92fed4(v_b4542a.id);
                      v_f099fd(false);
                    }}
                    activeOpacity={0.7}
                  >
                    <View
                      style={[
                        v_d81136.avatar,
                        v_b4542a.id === v_e7b2f2 && v_d81136.avatarSelected,
                      ]}
                    >
                      <Feather
                        name="user"
                        size={18}
                        color={v_b4542a.id === v_e7b2f2 ? '#FFFFFF' : '#615FFF'}
                      />
                    </View>
                    <Text
                      style={[
                        v_d81136.accountName,
                        v_b4542a.id === v_e7b2f2 && v_d81136.accountNameSelected,
                      ]}
                      numberOfLines={1}
                    >
                      {v_b4542a.name}
                    </Text>
                    {v_6162cd && v_a56041 > 0 && (
                      <TouchableOpacity
                        style={v_d81136.optionBtn}
                        onPress={(v_9e86fd) => {
                          v_9e86fd.stopPropagation();
                          v_34cfea(
                            v_0651a9 === v_b4542a.id ? null : v_b4542a.id,
                          );
                        }}
                        hitSlop={8}
                      >
                        <Feather name="more-vertical" size={18} color={v_1bfbd0.secondaryText} />
                      </TouchableOpacity>
                    )}
                  </TouchableOpacity>
                  {v_0651a9 === v_b4542a.id && (
                    <View style={v_d81136.dropdownMenu}>
                      {v_b4542a.linked_member_id === null && v_20eb4f && (
                        <TouchableOpacity
                          style={v_d81136.dropdownItem}
                          onPress={() => {
                            v_20eb4f?.(v_b4542a.id);
                            v_34cfea(null);
                          }}
                          activeOpacity={0.7}
                        >
                          <Feather name="mail" size={18} color={v_1bfbd0.primary} />
                          <Text style={v_d81136.dropdownItemText}>
                            {v_8d41d7('account_selector.link_email')}
                          </Text>
                        </TouchableOpacity>
                      )}
                      <TouchableOpacity
                        style={v_d81136.dropdownItem}
                        onPress={() => {
                          v_6162cd?.(v_b4542a.id);
                          v_34cfea(null);
                        }}
                        activeOpacity={0.7}
                      >
                        <Feather name="trash-2" size={18} color="#EF4444" />
                        <Text style={v_d81136.dropdownItemTextDelete}>
                          {v_8d41d7('account_selector.delete')}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              ))
            )}
            {v_ea2e32 && (
              <TouchableOpacity
                style={v_d81136.addRow}
                onPress={() => {
                  v_ea2e32();
                  v_f099fd(false);
                }}
                activeOpacity={0.7}
              >
                <View style={v_d81136.addIconWrap}>
                  <Feather name="plus" size={18} color={v_1bfbd0.secondaryText} />
                </View>
                <Text style={v_d81136.addText}>{v_8d41d7('account_selector.add_sub_account')}</Text>
              </TouchableOpacity>
            )}
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
};

const v_d81136 = v_472849.create({
  trigger: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E0E7FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarSelected: {
    backgroundColor: '#615FFF',
  },
  triggerText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.text,
    maxWidth: 80,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-start',
    paddingTop: 100,
    paddingHorizontal: 24,
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: v_9b1a04.large,
    overflow: 'visible',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  modalTitle: {
    fontSize: v_ef658a.large,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
    marginBottom: 16,
  },
  accountRowWrapper: {
    position: 'relative',
    overflow: 'visible',
  },
  accountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 12,
  },
  accountName: {
    flex: 1,
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.text,
  },
  accountNameSelected: {
    fontFamily: v_843035.semibold,
    color: '#615FFF',
  },
  optionBtn: {
    padding: 4,
  },
  dropdownMenu: {
    position: 'absolute',
    top: 48,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingVertical: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    zIndex: 10,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  dropdownItemText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.text,
  },
  dropdownItemTextDelete: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.regular,
    color: '#EF4444',
  },
  addRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    marginTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    gap: 12,
  },
  addIconWrap: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.secondaryText,
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
  errorContainer: {
    paddingVertical: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.error,
    textAlign: 'center',
  },
  emptyContainer: {
    paddingVertical: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: v_ef658a.medium,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
  },
});
