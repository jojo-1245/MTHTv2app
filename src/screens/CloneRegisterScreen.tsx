import v_a3453e, { v_df9f57, v_5ab095 } from 'bapkr';
import {
  v_e767d1,
  v_326be8,
  v_122070,
  v_472849,
  v_19b633,
  v_3094a2,
} from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_729608, v_cb41de, v_d56c0a, v_e775af } from '../components';
import { v_1bfbd0, v_843035, v_9b1a04, v_202d44 } from '../constants';
import type { v_8ad91b } from '../navigation';

type Props = v_432191<v_8ad91b, 'CloneRegister'>;

const CloneRegisterScreen: v_a3453e.FC<Props> = ({ navigation: v_c65f5d }) => {
  const [v_ebd523, v_c0ab6e] = v_5ab095({
    firstName: '',
    lastName: '',
    age: '',
    genre: '',
    country: '',
    relationshipOption: '',
    customRelationship: '',
    title: '',
  });

  const v_4090ac = (key: keyof typeof v_ebd523, v_3b402b) => {
    v_c0ab6e(v_ba2215 => ({ ...v_ba2215, [v_b24339]: v_3b402b }));
  };

  const v_643690 = v_df9f57(
    () =>
      v_202d44.map(v_b9bbbd => ({
        label: `${v_b9bbbd.flagEmoji} ${v_b9bbbd.name}`,
        value: v_b9bbbd.name,
      })),
    [],
  );

  const v_b62b55 = v_df9f57(
    () => [
      { label: 'Mother', value: 'Mother' },
      { label: 'Father', value: 'Father' },
      { label: 'Sibling', value: 'Sibling' },
      { label: 'Friend', value: 'Friend' },
      { label: 'Other', value: 'custom' },
    ],
    [],
  );

  const v_585b02 = () => {
    v_c65f5d.navigate('CloneUpload');
  };

  return (
    <View style={v_d81136.screen}>
      <Header
        title="Register Clone"
        subtitle='"Help us get to know the person you wish to meet."'
        showBackButton
        onBackPress={() => v_c65f5d.goBack()}
      />

      <KeyboardAvoidingView
        style={v_d81136.flex}
        behavior={v_326be8.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={v_326be8.OS === 'ios' ? 96 : 0}
      >
        <ScrollView
          contentContainerStyle={v_d81136.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={v_d81136.container}>
            <View>
            <Text style={v_d81136.fieldLabel}>Name</Text>
            <View style={v_d81136.row}>
              <TextField
                placeholder="Jakson"
                value={v_ebd523.firstName}
                onChangeText={v_9b6134 => v_4090ac('firstName', v_9b6134)}
                containerStyle={v_d81136.inlineField}
              />
              <TextField
                placeholder="Kim"
                value={v_ebd523.lastName}
                onChangeText={v_9b6134 => v_4090ac('lastName', v_9b6134)}
                containerStyle={v_d81136.inlineField}
              />
            </View>
          </View>

          <View style={v_d81136.row}>
            <View style={v_d81136.inlineGroup}>
              <Text style={v_d81136.fieldLabel}>Age</Text>
              <TextField
                placeholder="70"
                keyboardType="number-pad"
                value={v_ebd523.age}
                onChangeText={v_9b6134 => v_4090ac('age', v_9b6134)}
              />
            </View>
            <View style={v_d81136.inlineGroup}>
              <Text style={v_d81136.fieldLabel}>Gender</Text>
              <SelectField
                value={v_ebd523.genre}
                placeholder="Male"
                options={[
                  { label: 'Male', value: 'Male' },
                  { label: 'Female', value: 'Female' },
                ]}
                onValueChange={v_3b402b => v_4090ac('genre', v_3b402b)}
              />
            </View>
          </View>

          <SelectField
            label="Country"
            value={v_ebd523.country}
            placeholder="USA"
            options={v_643690}
            onValueChange={v_3b402b => v_4090ac('country', v_3b402b)}
            maxDropdownHeight={320}
          />

            <View style={v_d81136.row}>
              <View style={v_d81136.inlineGroup}>
                <Text style={v_d81136.fieldLabel}>Relationship</Text>
                <SelectField
                  value={
                    v_ebd523.relationshipOption === 'custom'
                      ? 'custom'
                      : v_ebd523.relationshipOption
                  }
                  placeholder="Father"
                  options={v_b62b55}
                  onValueChange={v_3b402b => {
                    if (v_3b402b === 'custom') {
                      v_c0ab6e(v_ba2215 => ({
                        ...v_ba2215,
                        relationshipOption: v_3b402b,
                        customRelationship: '',
                      }));
                      return;
                    }
                    v_c0ab6e(v_ba2215 => ({
                      ...v_ba2215,
                      relationshipOption: v_3b402b,
                      customRelationship: '',
                    }));
                  }}
                />
              </View>
              {v_ebd523.relationshipOption === 'custom' ? (
                <View style={v_d81136.inlineGroup}>
                  <Text style={v_d81136.fieldLabel}>Custom</Text>
                  <TextField
                    placeholder="Enter relationship"
                    value={v_ebd523.customRelationship}
                    onChangeText={v_9b6134 => v_4090ac('customRelationship', v_9b6134)}
                  />
                </View>
              ) : null}
            </View>

          <TextField
            label="Title or Term of Address"
            placeholder="Dad"
            value={v_ebd523.title}
            onChangeText={v_9b6134 => v_4090ac('title', v_9b6134)}
          />

            <PrimaryButton title="Next" onPress={v_585b02} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const v_d81136 = v_472849.create({
  screen: {
    flex: 1,
    backgroundColor: v_1bfbd0.background,
    paddingBottom: 40,
  },
  flex: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: v_9b1a04.xlarge,
  },
  container: {
    width: '100%',
    maxWidth: 780,
    paddingHorizontal: v_9b1a04.large,
    paddingTop: 24,
    paddingBottom: v_9b1a04.xlarge,
    gap: v_9b1a04.large,
  },
  fieldLabel: {
    fontSize: 14,
    color: v_1bfbd0.mutedText,
    fontFamily: v_843035.medium,
    marginBottom: v_9b1a04.small,
  },
  row: {
    flexDirection: 'row',
    gap: v_9b1a04.medium,
  },
  inlineField: {
    flex: 1,
  },
  inlineGroup: {
    flex: 1,
  },
});

export default v_b1090c;


