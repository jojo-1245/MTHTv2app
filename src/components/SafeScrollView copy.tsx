import v_a3453e, { v_680bcc, v_5ab095, v_c4deb2 } from 'bapkr';
import { v_122070, v_326be8, v_472849, v_72945f, v_7e4944, v_3094a2, v_0e1f26 } from 'rcmrninabrnb';
import { v_e0068c } from 'vvfgtwbmdpbnvhtfbtbgudicfmpscw';
import { v_c18c22 } from 'svuoaeceudfxfjvvpmmmchnwljywbphjgb';
import { v_1bfbd0 } from '../constants';

interface SafeScrollViewProps extends v_72945f {
  children: v_a3453e.ReactNode;
  style?: v_7e4944;
  contentContainerStyle?: v_7e4944;

  additionalBottomPadding?: number;

  showBottomBackground?: boolean;

  bottomBackgroundColor?: string;
}

const v_570c34 = v_680bcc<v_122070, SafeScrollViewProps>(({
  children: v_21f619,
  style: v_7fa4e4,
  contentContainerStyle: v_9aecf5,
  additionalBottomPadding: v_86fc47 = 0,
  showBottomBackground: v_bb8530 = true,
  bottomBackgroundColor: v_53b2af = "#fafafa",
  ...v_b1927c
}, v_6d4ed3) => {
  const v_033e14 = v_e0068c();

  const v_f9771e = v_c18c22(0);

  const v_cebf7c =
    v_326be8.OS === 'ios'
      ? v_033e14.bottom + v_86fc47
      : Math.max(v_f9771e, v_033e14.bottom) + v_86fc47;

  return (
    <View style={v_d81136.wrapper}>
      <ScrollView
        ref={v_6d4ed3}
        style={[v_d81136.container, v_7fa4e4]}
        contentContainerStyle={[
          {
            paddingBottom: v_cebf7c,
          },
          v_9aecf5,
        ]}
        {...v_b1927c}
      >
        {v_21f619}
      </ScrollView>
      {v_bb8530 && (
        <View
          style={[
            v_d81136.bottomBackground,
            {
              height: Math.max(v_cebf7c, 1),
              backgroundColor: v_53b2af,
            },
          ]}
          pointerEvents="none"
        />
      )}
    </View>
  );
});

v_570c34.displayName = 'SafeScrollView';

const v_d81136 = v_472849.create({
  wrapper: {
    flex: 1,
    position: 'relative',
  },
  container: {
    flex: 1,
  },
  bottomBackground: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 10,
  },
});

export default v_570c34;
export type { SafeScrollViewProps };

