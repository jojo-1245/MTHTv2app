import v_a3453e, { v_de06a3, v_c4deb2, v_5ab095 } from 'bapkr';
import { v_3094a2, v_19b633, v_472849, v_39a996 } from 'rcmrninabrnb';
import { v_772971 } from 'jmpfvteuuztnp';
import { v_889fad } from '../components/AlertHost';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_729608, v_1c1837, v_cb41de, v_570c34, v_1a40c4 } from '../components';
import { v_1bfbd0, v_843035, v_ef658a, v_9b1a04 } from '../constants';
import {
  v_a1b0e7,
  v_6a6196,
  v_c61ec1,
  v_b0c711,
  v_c4536c,
} from '../services/shopApi';
import type { v_8ad91b } from '../navigation';
import { v_a0daa8 } from '../navigation';

type Props = v_432191<v_8ad91b, 'ShopPaymentConfirm'>;

function v_dc25a4(v_3b402b): string {
  const v_f4e98d = Number(v_3b402b);
  if (!v_3b402b || !isFinite(v_f4e98d)) return '-';
  return v_f4e98d.toLocaleString('ko-KR') + '원';
}

const ShopPaymentConfirmScreen: v_a3453e.FC<Props> = ({ route: v_c7daf6 }) => {
  const { t: v_8d41d7 } = v_772971();
  const { goBack: v_c7ac57 } = v_a0daa8();
  const { orderId: v_9d3240, krwAmount: v_24bce5, mthtAmount: v_855115 } = v_c7daf6.params;
  const [v_3f8465, v_b4f1d2] = v_5ab095(false);
  const [v_f13438, v_6efceb] = v_5ab095(true);
  const [v_567b76, v_19951e] = v_5ab095<string | null>(null);
  const [v_2fb8cc, v_08ff46] = v_5ab095<'paid' | 'declined' | null>(null);
  const [v_359525, v_332381] = v_5ab095<string | undefined>();
  const [v_9c27d9, v_510d50] = v_5ab095<string | null>(null);

  v_c4deb2(() => {
    let v_2008a4 = false;
    v_6efceb(true);
    v_510d50(null);
    v_08ff46(null);
    v_332381(undefined);
    v_6a6196(v_9d3240).then((v_fd5f43) => {
      if (v_2008a4) return;
      if (!v_fd5f43) {
        v_510d50(v_8d41d7('shop.payment.error_stale_order'));
        v_6efceb(false);
        return;
      }
      v_19951e(v_fd5f43.status);
      if (v_fd5f43.status === 'paid') {
        v_08ff46('paid');
        v_332381(v_fd5f43.tx_hash ?? undefined);
      } else if (v_fd5f43.status === 'declined') {
        v_510d50(v_8d41d7('shop.payment.error_declined_status'));
      } else if (v_fd5f43.status === 'failed') {
        v_510d50(v_8d41d7('shop.payment.error_failed_retry'));
      }
      v_6efceb(false);
    });
    return () => { v_2008a4 = true; };
  }, [v_9d3240, v_8d41d7]);

  const v_d9b231 = v_de06a3(async (v_403b73) => {
    if (v_3f8465 || v_2fb8cc || v_9c27d9) return;
    v_b4f1d2(true);
    try {
      const v_8f00b9 = await v_a1b0e7(v_9d3240, v_403b73);
      if (v_8f00b9.status === 'paid') {
        v_08ff46('paid');
        v_332381(v_8f00b9.tx_hash);
      } else {
        v_08ff46('declined');
      }
    } catch (v_9e86fd) {
      const v_479f05 = v_9e86fd instanceof Error ? v_9e86fd.message : '';
      if (__DEV__ && v_479f05) console.warn('[ShopPaymentConfirm] approve/decline error:', v_9d3240, v_479f05);
      const v_f3252e = v_9e86fd as { response?: { data?: { error?: { message?: string } } }; message?: string };
      const v_fc86a8 = v_f3252e.response?.data?.error?.message;
      if (v_479f05 === 'request timeout') {
        const v_1300ee = await v_6a6196(v_9d3240);
        if (v_1300ee?.status === 'paid') {
          v_08ff46('paid');
          v_332381(v_1300ee.tx_hash ?? undefined);
          return;
        }
      }
      const v_badeaf = v_479f05 ? v_8d41d7(v_c4536c(v_479f05)) : v_8d41d7('shop.payment.error_generic');
      const v_3cfdfc = __DEV__ && (v_fc86a8 || v_479f05) ? `\n\n(${v_fc86a8 || v_479f05})` : '';
      v_889fad(v_8d41d7('common.error'), v_badeaf + v_3cfdfc, [
        {
          text: v_8d41d7('shop.payment.open_shop_payment'),
          onPress: () => { v_b0c711(v_9d3240).catch(() => null); },
        },
        { text: v_8d41d7('common.confirm') },
      ]);
    } finally {
      v_b4f1d2(false);
    }
  }, [v_3f8465, v_2fb8cc, v_9d3240, v_9c27d9, v_8d41d7]);

  return (
    <MainLayout>
      <View style={v_d81136.container}>
        <Header title={v_8d41d7('shop.payment.title')} showBackButton onBackPress={v_c7ac57} />
        <SafeScrollView contentContainerStyle={v_d81136.content} showBottomBackground={false}>
          <View style={v_d81136.inner}>
            <Text style={v_d81136.label}>{v_8d41d7('shop.payment.order_id')}</Text>
            <Text style={v_d81136.orderId}>{v_9d3240}</Text>

            <View style={v_d81136.card}>
              <Text style={v_d81136.amountLabel}>{v_8d41d7('shop.payment.amount')}</Text>
              <Text style={v_d81136.krw}>{v_dc25a4(v_24bce5)}</Text>
              {v_855115 ? (
                <Text style={v_d81136.mtht}>≈ {v_855115} MTHT</Text>
              ) : null}
            </View>

            {v_f13438 ? (
              <View style={v_d81136.centerBox}>
                <ActivityIndicator size="large" color={v_1bfbd0.buttonPrimary} />
              </View>
            ) : v_9c27d9 ? (
              <View style={v_d81136.panel}>
                <Text style={v_d81136.declined}>{v_9c27d9}</Text>
                <View style={v_d81136.actionGroup}>
                  <PrimaryButton
                    title={v_8d41d7('shop.payment.open_shop_payment')}
                    onPress={() => { v_b0c711(v_9d3240).catch(() => null); }}
                  />
                  <Button title={v_8d41d7('common.close')} variant="outline" onPress={v_c7ac57} style={v_d81136.secondaryBtn} />
                </View>
              </View>
            ) : v_2fb8cc === 'paid' ? (
              <View style={v_d81136.panel}>
                <Text style={v_d81136.success}>{v_8d41d7('shop.payment.success')}</Text>
                <Text style={v_d81136.hint}>{v_8d41d7('shop.payment.return_shop_hint')}</Text>
                {v_359525 ? <Text style={v_d81136.tx} numberOfLines={2}>{v_359525}</Text> : null}
                <View style={v_d81136.actionGroup}>
                  <PrimaryButton
                    title={v_8d41d7('shop.payment.view_order')}
                    onPress={() => { v_c61ec1(v_9d3240).catch(() => null); }}
                  />
                  <Button title={v_8d41d7('common.close')} variant="outline" onPress={v_c7ac57} style={v_d81136.secondaryBtn} />
                </View>
              </View>
            ) : v_2fb8cc === 'declined' ? (
              <View style={v_d81136.panel}>
                <Text style={v_d81136.declined}>{v_8d41d7('shop.payment.declined')}</Text>
                <View style={v_d81136.actionGroup}>
                  <PrimaryButton title={v_8d41d7('common.close')} onPress={v_c7ac57} />
                </View>
              </View>
            ) : v_567b76 === 'charging' ? (
              <View style={v_d81136.centerBox}>
                <ActivityIndicator size="large" color={v_1bfbd0.buttonPrimary} />
                <Text style={v_d81136.hintCenter}>{v_8d41d7('shop.payment.processing')}</Text>
              </View>
            ) : (
              <View style={v_d81136.panel}>
                <Text style={v_d81136.hintCenter}>{v_8d41d7('shop.payment.hint')}</Text>
                {v_3f8465 ? (
                  <View style={v_d81136.centerBox}>
                    <ActivityIndicator size="large" color={v_1bfbd0.buttonPrimary} />
                  </View>
                ) : null}
                <View style={v_d81136.actionGroup}>
                  <PrimaryButton
                    title={v_8d41d7('shop.payment.approve')}
                    onPress={() => v_d9b231('approve')}
                    disabled={v_3f8465}
                  />
                  <Button
                    title={v_8d41d7('shop.payment.decline')}
                    variant="outline"
                    onPress={() => v_d9b231('decline')}
                    disabled={v_3f8465}
                    style={v_d81136.secondaryBtn}
                  />
                </View>
              </View>
            )}
          </View>
        </SafeScrollView>
      </View>
    </MainLayout>
  );
};

const v_d81136 = v_472849.create({
  container: { flex: 1, backgroundColor: v_1bfbd0.background },
  content: {
    flexGrow: 1,
    paddingHorizontal: v_9b1a04.large,
    paddingTop: v_9b1a04.medium,
    paddingBottom: v_9b1a04.xlarge,
  },
  inner: { width: '100%' },
  label: { fontFamily: v_843035.regular, fontSize: v_ef658a.small, color: v_1bfbd0.secondaryText },
  orderId: { fontFamily: v_843035.semibold, fontSize: v_ef658a.medium, color: v_1bfbd0.text, marginBottom: v_9b1a04.large },
  card: {
    backgroundColor: v_1bfbd0.white,
    borderRadius: 16,
    padding: v_9b1a04.large,
    marginBottom: v_9b1a04.large,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  amountLabel: { fontFamily: v_843035.regular, fontSize: v_ef658a.small, color: v_1bfbd0.secondaryText },
  krw: { fontFamily: v_843035.bold, fontSize: 28, color: v_1bfbd0.buttonPrimary, marginTop: 8 },
  mtht: { fontFamily: v_843035.medium, fontSize: v_ef658a.medium, color: v_1bfbd0.text, marginTop: 6 },
  panel: {
    backgroundColor: v_1bfbd0.white,
    borderRadius: 16,
    padding: v_9b1a04.large,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  centerBox: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: v_9b1a04.large,
    gap: 12,
  },
  hint: {
    fontFamily: v_843035.regular,
    fontSize: v_ef658a.small,
    color: v_1bfbd0.secondaryText,
    marginBottom: v_9b1a04.medium,
    lineHeight: 22,
    textAlign: 'left',
  },
  hintCenter: {
    fontFamily: v_843035.regular,
    fontSize: v_ef658a.small,
    color: v_1bfbd0.secondaryText,
    marginBottom: v_9b1a04.large,
    lineHeight: 22,
    textAlign: 'center',
  },
  actionGroup: { gap: 12, marginTop: 4 },
  secondaryBtn: { marginTop: 0 },
  success: {
    fontFamily: v_843035.semibold,
    fontSize: v_ef658a.large,
    color: '#27ae60',
    marginBottom: v_9b1a04.xmedium,
    textAlign: 'center',
  },
  declined: {
    fontFamily: v_843035.semibold,
    fontSize: v_ef658a.large,
    color: v_1bfbd0.secondaryText,
    marginBottom: v_9b1a04.medium,
    textAlign: 'center',
    lineHeight: 24,
  },
  tx: {
    fontFamily: v_843035.regular,
    fontSize: v_ef658a.small,
    color: v_1bfbd0.secondaryText,
    marginBottom: v_9b1a04.medium,
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default v_d3b4f6;
