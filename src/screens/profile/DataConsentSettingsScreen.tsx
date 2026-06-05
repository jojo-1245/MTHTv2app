import v_a3453e, { v_de06a3, v_5ab095 } from 'bapkr';
import {
  v_3094a2,
  v_19b633,
  v_79139e,
  v_472849,
  v_03e392,
} from 'rcmrninabrnb';
import { v_cf763b } from 'ixigazcpvfldbecwtbvavtbi';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_772971 } from 'jmpfvteuuztnp';
import { v_1bfbd0, v_843035, v_ef658a, v_9b1a04 } from '../../constants';
import { v_729608, v_570c34, v_1c1837 } from '../../components';
import v_e209a2 from '../../components/DataConsentModal';
import type { v_8ad91b } from '../../navigation';
import { v_2d6571, v_b26d7d } from '../../utils/consentStore';
import type { v_8c7694 } from '../../utils/consentStore';

type Props = v_432191<v_8ad91b, 'DataConsentSettings'>;

const CONSENT_KINDS: v_8c7694[] = ['health', 'skin', 'chat'];

const DataConsentSettingsScreen: v_a3453e.FC<Props> = () => {
  const { t: v_8d41d7 } = v_772971();
  const [v_40c2c9, v_a75e8e] = v_5ab095<Record<v_8c7694, boolean>>({
    health: false,
    skin: false,
    chat: false,
  });
  const [v_683210, v_34a50a] = v_5ab095(true);

  const [v_7fceda, v_a9568a] = v_5ab095<v_8c7694 | null>(null);

  const v_3eb745 = v_de06a3(async () => {
    v_34a50a(true);
    const [v_c9d09f, v_6d2603, v_bff046] = await Promise.all(
      v_02bdb6.map((v_0eb677) => v_2d6571(v_0eb677))
    );
    v_a75e8e({ health: v_c9d09f, skin: v_6d2603, chat: v_bff046 });
    v_34a50a(false);
  }, []);

  v_cf763b(
    v_de06a3(() => {
      v_3eb745();
    }, [v_3eb745])
  );

  const v_bf58a4 = async (kind: v_8c7694, v_a448ad) => {
    if (!v_a448ad) {

      v_03e392.alert(
        v_8d41d7(`consent.${v_94302c}.title`, v_94302c),
        v_8d41d7('consent.revoke_confirm', 'Revoking consent will stop this feature until you consent again. Continue?'),
        [
          { text: v_8d41d7('common.cancel'), style: 'cancel' },
          {
            text: v_8d41d7('consent.revoke_action', 'Revoke'),
            style: 'destructive',
            onPress: async () => {
              await v_b26d7d(v_94302c);
              v_a75e8e((v_ba2215) => ({ ...v_ba2215, [v_94302c]: false }));
            },
          },
        ]
      );
    } else {

      v_a9568a(v_94302c);
    }
  };

  return (
    <MainLayout>
      <Header
        title={v_8d41d7('consent.settings_title', 'Data Consent')}
        showBackButton
      />
      <SafeScrollView>
        <View style={v_d81136.container}>
          <Text style={v_d81136.description}>
            {v_8d41d7(
              'consent.settings_description',
              'Manage your consent for each data processing activity. Revoking consent will stop that feature and require re-consent on next use.'
            )}
          </Text>

          {v_02bdb6.map((v_94302c) => {
            const v_9f1622 = v_8d41d7(`consent.${v_94302c}.title`, v_94302c);
            const v_fa63e0 = v_8d41d7(`consent.${v_94302c}.purpose`, '');
            return (
              <View key={v_94302c} style={v_d81136.row}>
                <View style={v_d81136.rowText}>
                  <Text style={v_d81136.rowTitle}>{v_9f1622}</Text>
                  {v_fa63e0 ? (
                    <Text style={v_d81136.rowPurpose}>{v_fa63e0}</Text>
                  ) : null}
                </View>
                <Switch
                  value={v_40c2c9[v_94302c]}
                  onValueChange={(v_81e2ef) => v_bf58a4(v_94302c, v_81e2ef)}
                  trackColor={{
                    false: v_1bfbd0.toggleTrackOff,
                    true: v_1bfbd0.toggleTrackOn,
                  }}
                  thumbColor={v_1bfbd0.white}
                  disabled={v_683210}
                  accessibilityLabel={v_9f1622}
                />
              </View>
            );
          })}
        </View>
      </SafeScrollView>

      {}
      {v_7fceda !== null && (
        <DataConsentModal
          visible={true}
          kind={v_7fceda}
          onAgree={() => {

            v_a75e8e((v_ba2215) => ({ ...v_ba2215, [v_7fceda]: true }));
            v_a9568a(null);
          }}
          onCancel={() => {

            v_a9568a(null);
          }}
        />
      )}
    </MainLayout>
  );
};

export default v_4fd298;

const v_d81136 = v_472849.create({
  container: {
    paddingHorizontal: v_9b1a04.medium,
    paddingTop: v_9b1a04.medium,
    paddingBottom: 40,
  },
  description: {
    fontFamily: v_843035.regular,
    fontSize: v_ef658a.medium,
    color: v_1bfbd0.secondaryText,
    lineHeight: 22,
    marginBottom: v_9b1a04.xlarge,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: v_9b1a04.medium,
    borderBottomWidth: 1,
    borderBottomColor: v_1bfbd0.borderLight,
  },
  rowText: {
    flex: 1,
    marginRight: v_9b1a04.medium,
  },
  rowTitle: {
    fontFamily: v_843035.semibold,
    fontSize: v_ef658a.large,
    color: v_1bfbd0.text,
  },
  rowPurpose: {
    fontFamily: v_843035.regular,
    fontSize: v_ef658a.small,
    color: v_1bfbd0.secondaryText,
    marginTop: 4,
    lineHeight: 18,
  },
});
