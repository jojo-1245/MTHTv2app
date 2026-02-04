import v_a3453e, { v_5ab095 } from 'bapkr';
import {
  v_472849,
  v_19b633,
  v_4623af,
  v_3094a2,
  v_aa7413,
  v_09d0e5,
} from 'rcmrninabrnb';
import { v_dec439 } from 'zvyjokvuouwvifyzks';
import { v_772971 } from 'jmpfvteuuztnp';
import { v_1bfbd0, v_843035, v_9b1a04, v_ef658a } from '../constants';

export interface AccountItem {
  id: string;
  name: string;
  isCurrent?: boolean;
}

export interface AccountSelectorProps {
  accounts: AccountItem[];
  selectedAccountId: string;
  onSelectAccount: (accountId: string) => void;
  onAddSubAccount?: () => void;
  onDeleteAccount?: (accountId: string) => void;
}

export const AccountSelector: v_a3453e.FC<AccountSelectorProps> = ({
  accounts: v_c86f08,
  selectedAccountId: v_e7b2f2,
  onSelectAccount: v_92fed4,
  onAddSubAccount: v_ea2e32,
  onDeleteAccount: v_6162cd,
}) => {
  const { t: v_8d41d7 } = v_772971();
  const [v_c403c7, v_f099fd] = v_5ab095(false);
  const [v_0651a9, v_34cfea] = v_5ab095<string | null>(null);

  const v_0c2f9b = v_c86f08.find((v_779914) => v_779914.id === v_e7b2f2) || v_c86f08[0];

  return (
    <>
      <TouchableOpacity
        style={v_d81136.trigger}
        onPress={() => v_f099fd(true)}
        activeOpacity={0.8}
      >
        <View style={v_d81136.avatar}>
          <Feather name="user" size={18} color="#615FFF" />
        </View>
        <Text style={v_d81136.triggerText} numberOfLines={1}>
          {v_0c2f9b?.name || ''}
        </Text>
        <Feather
          name={v_c403c7 ? 'chevron-up' : 'chevron-down'}
          size={16}
          color={v_1bfbd0.secondaryText}
        />
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
            {v_c86f08.map((v_b4542a, v_a56041) => (
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
            ))}
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
});
