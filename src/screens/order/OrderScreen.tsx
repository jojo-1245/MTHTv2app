import v_a3453e, { v_de06a3, v_c4deb2, v_df9f57, v_5ab095 } from 'bapkr';
import {
  v_39a996,
  v_03e392,
  v_cf9c33,
  v_326be8,
  v_472849,
  v_19b633,
  v_79c4f2,
  v_4623af,
  v_3094a2,
} from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_dec439 } from 'zvyjokvuouwvifyzks';
import {
  v_729608,
  v_1c1837,
  v_cb41de,
  v_570c34,
  v_e775af,
} from '../../components';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../../constants';
import type { v_8ad91b } from '../../navigation';
import {
  v_b892c9,
  v_5e3aed,
  v_7ef52a,
  type v_5c6842,
} from '../../services/orderApi';
import { v_7ef860 } from '../../services/authApi';
import { v_998b9d } from '../../utils/authErrorHandler';
import v_8da413, { type v_1445c8 } from './KakaoPostcodeWebView';

type Props = v_432191<v_8ad91b, 'Order'>;

const v_80b147 = 1;
const v_98df28 = 99;
const v_ca3665 = 5;

const OrderScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d, route: v_c7daf6 }) => {
  const v_9af408 = v_c7daf6.params?.productId;

  const [v_01bee9, v_2ea5dd] = v_5ab095<v_5c6842 | null>(null);
  const [v_cd31a8, v_deef62] = v_5ab095(true);
  const [v_95616f, v_885e0e] = v_5ab095<string | null>(null);

  const [v_ac2689, v_c94a71] = v_5ab095<number>(1);
  const [v_34afb7, v_3ca278] = v_5ab095('');
  const [v_a58975, v_990428] = v_5ab095('');
  const [v_c7ff99, v_1ec804] = v_5ab095('');
  const [v_157c04, v_21c545] = v_5ab095('');
  const [v_0d1622, v_905b24] = v_5ab095('');
  const [v_6f0995, v_28444b] = v_5ab095(false);
  const [v_5292f9, v_bdcb85] = v_5ab095(false);

  const [v_620274, v_a841e5] = v_5ab095<{
    postal_code: string;
    address: string;
    address_detail: string;
  } | null>(null);

  const [v_e8f6ef, v_98cd8a] = v_5ab095(false);

  const [v_88dca2, v_e33ec0] = v_5ab095(false);

  v_c4deb2(() => {
    let v_2008a4 = false;

    if (typeof v_9af408 !== 'number' || !Number.isFinite(v_9af408) || v_9af408 <= 0) {
      v_885e0e('잘못된 접근입니다. 상품 정보가 없습니다.');
      v_deef62(false);
      return;
    }

    v_deef62(true);
    v_885e0e(null);

    Promise.allSettled([v_5e3aed(v_9af408), v_7ef860()])
      .then(([v_b09d89, v_9ec4c0]) => {
        if (v_2008a4) return;

        if (v_b09d89.status === 'fulfilled') {
          v_2ea5dd(v_b09d89.value);
        } else {

          if (v_998b9d(v_c65f5d, v_b09d89.reason)) return;
          v_885e0e(
            (v_b09d89.reason as Error)?.message || '상품 정보를 불러올 수 없습니다.'
          );
        }

        if (v_9ec4c0.status === 'fulfilled') {
          const v_b32680 = v_9ec4c0.value as Record<string, unknown>;
          const v_f39418 = (v_b32680.firstname as string | undefined) || '';
          const v_d0c163 = (v_b32680.lastname as string | undefined) || '';
          const v_05b02f =
            (v_b32680.name as string | undefined) ||
            [v_f39418, v_d0c163].filter(Boolean).join(' ').trim();
          if (v_05b02f) v_3ca278(v_05b02f);

          const v_49ea09 = (v_b32680.mobile as string | undefined) || (v_b32680.phone as string | undefined) || '';
          if (v_49ea09) v_990428(String(v_49ea09).replace(/\D/g, ''));

          const v_12cd99 = (v_b32680.postal_code as string | undefined) || (v_b32680.zipcode as string | undefined) || '';
          const v_ead2a6 = v_12cd99 ? String(v_12cd99).replace(/\D/g, '').slice(0, v_ca3665) : '';
          if (v_ead2a6) v_1ec804(v_ead2a6);

          const v_33c3a8 = (v_b32680.address as string | undefined) || '';
          if (v_33c3a8) v_21c545(v_33c3a8);

          const v_0aaf59 =
            (v_b32680.address_detail as string | undefined) ||
            (v_b32680.addressDetail as string | undefined) ||
            '';
          if (v_0aaf59) v_905b24(v_0aaf59);

          if (v_ead2a6 && v_33c3a8) {
            v_a841e5({
              postal_code: v_ead2a6,
              address: v_33c3a8,
              address_detail: v_0aaf59,
            });
            v_98cd8a(true);
          }
        }

      })
      .finally(() => {
        if (!v_2008a4) v_deef62(false);
      });

    return () => {
      v_2008a4 = true;
    };
  }, [v_9af408, v_c65f5d]);

  const v_9d30c8 = (v_479f05) => {
    const v_e6d4a6 = v_479f05.replace(/\D/g, '');
    if (v_e6d4a6 === '') {
      v_c94a71(v_80b147);
      return;
    }
    let v_f4e98d = parseInt(v_e6d4a6, 10);
    if (Number.isNaN(v_f4e98d)) v_f4e98d = v_80b147;
    if (v_f4e98d < v_80b147) v_f4e98d = v_80b147;
    if (v_f4e98d > v_98df28) v_f4e98d = v_98df28;
    v_c94a71(v_f4e98d);
  };

  const v_5c00fc = () => v_c94a71((v_ab6401) => Math.max(v_80b147, v_ab6401 - 1));
  const v_d387c7 = () => v_c94a71((v_ab6401) => Math.min(v_98df28, v_ab6401 + 1));

  const v_50861a = (v_479f05) => {
    const v_e6d4a6 = v_479f05.replace(/\D/g, '').slice(0, 13);
    v_990428(v_e6d4a6);
  };

  const v_3403e6 = (v_479f05) => {
    v_1ec804(v_479f05.replace(/\D/g, '').slice(0, v_ca3665));
  };

  const v_4d5e48 = v_de06a3((data: v_1445c8) => {
    v_1ec804(v_9390e8.zonecode);
    v_21c545(v_9390e8.roadAddress || v_9390e8.jibunAddress || '');
    v_bdcb85(false);
  }, []);

  const v_123bae = v_df9f57(() => {
    const v_d4dbe7 = v_34afb7.trim().length >= 2;
    const v_b6e9a9 = v_a58975.length >= 8 && v_a58975.length <= 13;
    const v_e6dd1f = v_c7ff99.length === v_ca3665;
    const v_67dd78 = v_157c04.trim().length > 0;
    const v_89608c = v_ac2689 >= v_80b147 && v_ac2689 <= v_98df28;
    return {
      nameOk: v_d4dbe7,
      mobileOk: v_b6e9a9,
      postalOk: v_e6dd1f,
      addressOk: v_67dd78,
      qtyOk: v_89608c,
      allOk: v_d4dbe7 && v_b6e9a9 && v_e6dd1f && v_67dd78 && v_89608c,
    };
  }, [v_34afb7, v_a58975, v_c7ff99, v_157c04, v_ac2689]);

  const v_ee89db = v_df9f57(() => v_7ef52a(v_01bee9?.image_url ?? null), [v_01bee9?.image_url]);

  const v_585b02 = async () => {
    if (!v_01bee9) return;
    if (v_88dca2) return; 

    if (!v_123bae.allOk) {
      const v_67083f = [];
      if (!v_123bae.nameOk) v_67083f.push('받는 사람 이름을 2자 이상 입력해주세요.');
      if (!v_123bae.mobileOk) v_67083f.push('휴대폰 번호는 숫자만 8~13자리로 입력해주세요.');
      if (!v_123bae.postalOk) v_67083f.push(`우편번호는 ${v_ca3665}자리입니다.`);
      if (!v_123bae.addressOk) v_67083f.push('주소를 입력해주세요.');
      if (!v_123bae.qtyOk) v_67083f.push('수량을 다시 확인해주세요.');
      v_03e392.alert('입력 확인', v_67083f.join('\n'));
      return;
    }

    v_e33ec0(true);
    try {
      const v_43c42e = await v_b892c9({
        gunki_id: v_01bee9.id,
        quantity: v_ac2689,
        recipient_name: v_34afb7.trim(),
        recipient_mobile: v_a58975,
        postal_code: v_c7ff99,
        address: v_157c04.trim(),
        address_detail: v_0d1622.trim(),
        save_address: v_6f0995,
      });

      const v_9f4f5e = v_43c42e.order_no || String(v_43c42e.order_id || '');
      v_03e392.alert(
        '주문 접수',
        `주문이 접수되었습니다.\n주문번호: ${v_9f4f5e || '-'}`,
        [
          {
            text: '확인',
            onPress: () => {

              v_c65f5d.reset({
                index: 0,
                routes: [{ name: 'MetaHome' }],
              });
            },
          },
        ],
        { cancelable: false }
      );
    } catch (v_5e9bfe) {
      if (v_998b9d(v_c65f5d, v_5e9bfe)) return;
      const v_a8cd21 = v_5e9bfe instanceof Error ? v_5e9bfe.message : '주문 처리 중 오류가 발생했습니다.';
      v_03e392.alert('주문 실패', v_a8cd21);
    } finally {
      v_e33ec0(false);
    }
  };

  if (v_cd31a8) {
    return (
      <MainLayout activeKey="home">
        <View style={v_d81136.screen}>
          <Header title="주문하기" showBackButton onBackPress={() => v_c65f5d.goBack()} />
          <View style={v_d81136.centered}>
            <ActivityIndicator size="large" color={v_1bfbd0.primary} />
            <Text style={v_d81136.loadingText}>상품 정보를 불러오는 중...</Text>
          </View>
        </View>
      </MainLayout>
    );
  }

  if (v_95616f || !v_01bee9) {
    return (
      <MainLayout activeKey="home">
        <View style={v_d81136.screen}>
          <Header title="주문하기" showBackButton onBackPress={() => v_c65f5d.goBack()} />
          <View style={v_d81136.centered}>
            <Feather name="alert-circle" size={36} color={v_1bfbd0.error} />
            <Text style={v_d81136.errorText}>{v_95616f || '상품 정보를 찾을 수 없습니다.'}</Text>
            <TouchableOpacity style={v_d81136.retryBtn} onPress={() => v_c65f5d.goBack()}>
              <Text style={v_d81136.retryBtnText}>돌아가기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </MainLayout>
    );
  }

  return (
    <MainLayout activeKey="home">
      <View style={v_d81136.screen}>
        <Header title="주문하기" showBackButton onBackPress={() => v_c65f5d.goBack()} />

        <SafeScrollView
          contentContainerStyle={v_d81136.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          autoAdjustKeyboardPadding={true}
          showBottomBackground={false}
        >
          {}
          <View style={v_d81136.productCard}>
            <View style={v_d81136.productImageBox}>
              {v_ee89db ? (
                <Image source={{ uri: v_ee89db }} style={v_d81136.productImage} resizeMode="contain" />
              ) : (
                <View style={v_d81136.productImagePlaceholder}>
                  <Text style={v_d81136.productImagePlaceholderText} numberOfLines={2}>
                    {v_01bee9.product_name}
                  </Text>
                </View>
              )}
            </View>
            <View style={v_d81136.productInfo}>
              <View style={v_d81136.categoryBadge}>
                <Text style={v_d81136.categoryBadgeText}>{v_01bee9.category || '상품'}</Text>
              </View>
              <Text style={v_d81136.productName} numberOfLines={2}>
                {v_01bee9.product_name}
              </Text>
              {v_01bee9.representative_function ? (
                <Text style={v_d81136.productFunc} numberOfLines={2}>
                  {v_01bee9.representative_function}
                </Text>
              ) : null}
              <Text style={v_d81136.priceText}>
                {v_01bee9.daily_price != null
                  ? `1일 ${v_01bee9.daily_price.toLocaleString()}원`
                  : '1일 가격 미정'}
                {' / '}
                {v_01bee9.monthly_price != null
                  ? `1개월 ${v_01bee9.monthly_price.toLocaleString()}원`
                  : '1개월 가격 미정'}
              </Text>

              {}
              <View style={v_d81136.qtyBlock}>
                <Text style={v_d81136.sectionLabel}>수량</Text>
                <View style={v_d81136.qtyRow}>
                  <TouchableOpacity
                    style={[v_d81136.qtyBtn, v_ac2689 <= v_80b147 && v_d81136.qtyBtnDisabled]}
                    onPress={v_5c00fc}
                    disabled={v_ac2689 <= v_80b147 || v_88dca2}
                  >
                    <Feather name="minus" size={18} color={v_ac2689 <= v_80b147 ? '#C0C0C0' : v_1bfbd0.text} />
                  </TouchableOpacity>
                  <TextInput
                    style={v_d81136.qtyInput}
                    keyboardType="number-pad"
                    value={String(v_ac2689)}
                    onChangeText={v_9d30c8}
                    editable={!v_88dca2}
                    maxLength={2}
                  />
                  <TouchableOpacity
                    style={[v_d81136.qtyBtn, v_ac2689 >= v_98df28 && v_d81136.qtyBtnDisabled]}
                    onPress={v_d387c7}
                    disabled={v_ac2689 >= v_98df28 || v_88dca2}
                  >
                    <Feather name="plus" size={18} color={v_ac2689 >= v_98df28 ? '#C0C0C0' : v_1bfbd0.text} />
                  </TouchableOpacity>
                  <Text style={v_d81136.qtyHint}>최대 {v_98df28}개</Text>
                </View>
              </View>
            </View>
          </View>

          {}
          <View style={v_d81136.section}>
            <Text style={v_d81136.sectionTitle}>받는 사람 정보</Text>

            <TextField
              label="이름"
              placeholder="받는 사람 이름"
              value={v_34afb7}
              onChangeText={v_3ca278}
              editable={!v_88dca2}
            />

            <TextField
              label="휴대폰"
              placeholder="숫자만 입력 (예: 01012345678)"
              keyboardType="phone-pad"
              value={v_a58975}
              onChangeText={v_50861a}
              editable={!v_88dca2}
            />

            {v_620274 && v_e8f6ef ? (

              <View style={v_d81136.savedAddressCard}>
                <View style={v_d81136.savedAddressHeader}>
                  <View style={v_d81136.savedAddressBadge}>
                    <Feather name="check-circle" size={12} color={v_1bfbd0.primary} />
                    <Text style={v_d81136.savedAddressBadgeText}>기본 배송지</Text>
                  </View>
                </View>
                <Text style={v_d81136.savedAddressLine}>
                  <Text style={v_d81136.savedAddressLabel}>[{v_c7ff99}] </Text>
                  {v_157c04}
                </Text>
                {v_0d1622 ? (
                  <Text style={v_d81136.savedAddressLineSub}>{v_0d1622}</Text>
                ) : null}
                <TouchableOpacity
                  style={v_d81136.changeAddressBtn}
                  onPress={() => {
                    v_98cd8a(false);
                    v_1ec804('');
                    v_21c545('');
                    v_905b24('');
                  }}
                  disabled={v_88dca2}
                  activeOpacity={0.7}
                >
                  <Feather name="edit-3" size={14} color={v_1bfbd0.primary} />
                  <Text style={v_d81136.changeAddressBtnText}>다른 주소로 보내기</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <>
                {}
                <View style={v_d81136.postalRow}>
                  <View style={v_d81136.postalInputWrap}>
                    <TextField
                      label="우편번호"
                      placeholder="우편번호"
                      keyboardType="number-pad"
                      value={v_c7ff99}
                      onChangeText={v_3403e6}
                      editable={!v_88dca2}
                    />
                  </View>
                  {}
                  <View style={v_d81136.postcodeBtnColumn}>
                    <Text style={v_d81136.postcodeBtnSpacer}> </Text>
                    <TouchableOpacity
                      style={v_d81136.postcodeBtn}
                      onPress={() => v_bdcb85(true)}
                      disabled={v_88dca2}
                      activeOpacity={0.8}
                    >
                      <Feather name="search" size={16} color="#FFFFFF" />
                      <Text style={v_d81136.postcodeBtnText}>주소 찾기</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <TextField
                  label="주소"
                  placeholder="기본 주소 (주소 찾기로 자동 입력)"
                  value={v_157c04}
                  onChangeText={v_21c545}
                  editable={!v_88dca2}
                />

                <TextField
                  label="상세주소"
                  placeholder="동/호수 등"
                  value={v_0d1622}
                  onChangeText={v_905b24}
                  editable={!v_88dca2}
                />

                {}
                <View style={v_d81136.checkboxGroup}>
                  <TouchableOpacity
                    style={v_d81136.checkboxRow}
                    onPress={() => v_28444b((v_81e2ef) => !v_81e2ef)}
                    activeOpacity={0.7}
                    disabled={v_88dca2}
                  >
                    <View style={[v_d81136.checkbox, v_6f0995 && v_d81136.checkboxChecked]}>
                      {v_6f0995 ? <Feather name="check" size={14} color="#FFFFFF" /> : null}
                    </View>
                    <Text style={v_d81136.checkboxLabel}>이 주소를 기본 배송지로 저장</Text>
                  </TouchableOpacity>
                  <Text style={v_d81136.checkboxHint}>
                    체크 시 회원정보에 저장되어 다음 주문 시 자동 입력됩니다
                  </Text>
                </View>

                {}
                {v_620274 && (
                  <TouchableOpacity
                    style={v_d81136.revertAddressBtn}
                    onPress={() => {
                      v_98cd8a(true);
                      v_1ec804(v_620274.postal_code);
                      v_21c545(v_620274.address);
                      v_905b24(v_620274.address_detail);
                      v_28444b(false);
                    }}
                    disabled={v_88dca2}
                    activeOpacity={0.7}
                  >
                    <Feather name="rotate-ccw" size={14} color={v_1bfbd0.secondaryText} />
                    <Text style={v_d81136.revertAddressBtnText}>기본 배송지로 되돌리기</Text>
                  </TouchableOpacity>
                )}
              </>
            )}
          </View>

          {}
          <View style={v_d81136.submitWrap}>
            <PrimaryButton
              title={v_88dca2 ? '주문 처리 중...' : '주문하기'}
              onPress={v_585b02}
              disabled={!v_123bae.allOk || v_88dca2}
            />
            {v_88dca2 && (
              <ActivityIndicator
                size="small"
                color={v_1bfbd0.buttonPrimary}
                style={{ marginTop: 8, alignSelf: 'center' }}
              />
            )}
          </View>
        </SafeScrollView>

        <KakaoPostcodeWebView
          visible={v_5292f9}
          onClose={() => v_bdcb85(false)}
          onSelect={v_4d5e48}
        />
      </View>
    </MainLayout>
  );
};

const v_d81136 = v_472849.create({
  screen: {
    flex: 1,
    backgroundColor: v_1bfbd0.background,
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: v_9b1a04.large,
  },
  loadingText: {
    marginTop: v_9b1a04.medium,
    fontSize: 14,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
  },
  errorText: {
    marginTop: v_9b1a04.medium,
    fontSize: 14,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.text,
    textAlign: 'center',
  },
  retryBtn: {
    marginTop: v_9b1a04.large,
    paddingHorizontal: v_9b1a04.large,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: v_1bfbd0.primary,
  },
  retryBtnText: { color: '#fff', fontFamily: v_843035.semibold },
  content: {
    paddingHorizontal: v_9b1a04.large,
    paddingVertical: v_9b1a04.large,
    gap: v_9b1a04.large,
  },
  productCard: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
  productImageBox: {
    paddingVertical: v_9b1a04.large,
    paddingHorizontal: v_9b1a04.medium,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 160,
    backgroundColor: '#F9FAFB',
  },
  productImage: { width: '100%', height: 140 },
  productImagePlaceholder: {
    width: '100%',
    height: 140,
    backgroundColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    paddingHorizontal: 12,
  },
  productImagePlaceholderText: {
    fontSize: 14,
    fontFamily: v_843035.medium,
    color: '#6B7280',
    textAlign: 'center',
  },
  productInfo: { padding: v_9b1a04.medium },
  categoryBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    backgroundColor: '#EEF2FF',
    marginBottom: 6,
  },
  categoryBadgeText: { fontSize: 11, fontFamily: v_843035.medium, color: '#4F46E5' },
  productName: { fontSize: 16, fontFamily: v_843035.bold, color: v_1bfbd0.text, marginBottom: 4 },
  productFunc: {
    fontSize: 12,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    marginBottom: 8,
  },
  priceText: { fontSize: 14, fontFamily: v_843035.semibold, color: '#111827' },
  section: { gap: v_9b1a04.small },
  sectionTitle: {
    fontSize: 15,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
    marginBottom: 4,
  },
  sectionLabel: { fontSize: 14, fontFamily: v_843035.medium, color: v_1bfbd0.text },

  qtyBlock: {
    marginTop: v_9b1a04.medium,
    paddingTop: v_9b1a04.medium,
    borderTopWidth: 1,
    borderTopColor: v_1bfbd0.borderLight,
    gap: v_9b1a04.small,
  },
  qtyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  qtyBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  qtyBtnDisabled: { backgroundColor: '#F5F5F5' },
  qtyInput: {
    minWidth: 60,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
    borderRadius: 8,
    paddingVertical: v_326be8.OS === 'ios' ? 8 : 4,
    paddingHorizontal: 8,
    backgroundColor: '#FFFFFF',
  },
  qtyHint: { fontSize: 12, fontFamily: v_843035.regular, color: v_1bfbd0.secondaryText },
  postalRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  postalInputWrap: { flex: 1 },
  postcodeBtnColumn: {
    flexDirection: 'column',
  },

  postcodeBtnSpacer: {
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 4,
    opacity: 0,
  },

  postcodeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: v_1bfbd0.primary,
    height: 64,
  },
  postcodeBtnText: { color: '#FFFFFF', fontFamily: v_843035.semibold, fontSize: 13, },

  savedAddressCard: {
    paddingVertical: v_9b1a04.medium,
    paddingHorizontal: v_9b1a04.medium,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: v_1bfbd0.border,
    backgroundColor: '#F8FAFC',
    gap: 6,
  },
  savedAddressHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  savedAddressBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    backgroundColor: '#EEF2FF',
  },
  savedAddressBadgeText: {
    fontSize: 11,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.primary,
  },
  savedAddressLine: {
    fontSize: 14,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.text,
    lineHeight: 20,
  },
  savedAddressLabel: {
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.primary,
  },
  savedAddressLineSub: {
    fontSize: 13,
    fontFamily: v_843035.regular,
    color: v_1bfbd0.secondaryText,
    lineHeight: 18,
  },
  changeAddressBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 8,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: v_1bfbd0.primary,
    backgroundColor: '#FFFFFF',
  },
  changeAddressBtnText: {
    fontSize: 13,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.primary,
  },
  revertAddressBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 8,
  },
  revertAddressBtnText: {
    fontSize: 12,
    fontFamily: v_843035.medium,
    color: v_1bfbd0.secondaryText,
    textDecorationLine: 'underline',
  },
  checkboxGroup: {
    marginTop: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    gap: 4,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  checkboxHint: {
    fontSize: 12,
    fontFamily: v_843035.regular,
    color: '#666666',
    marginLeft: 28,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: v_1bfbd0.border,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  checkboxChecked: {
    backgroundColor: v_1bfbd0.primary,
    borderColor: v_1bfbd0.primary,
  },
  checkboxLabel: { fontSize: 13, fontFamily: v_843035.regular, color: v_1bfbd0.text },
  submitWrap: {
    marginTop: v_9b1a04.small,
    marginBottom: v_9b1a04.large,
  },
});

export default v_66dd56;
