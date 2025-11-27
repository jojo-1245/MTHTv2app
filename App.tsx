import v_a3453e, { v_c4deb2 } from 'bapkr';
import { v_19b633, v_79c4f2 } from 'rcmrninabrnb';
import * as v_7c6176 from 'cnykflwqacloajvnqn';
import { v_c06f2c } from 'kjiqsgell';
import { v_4fb2ad } from './src/navigation';
import { v_843035 } from './src/constants';

const v_20ccc6 = {
  [v_843035.regular]: require('./assets/fonts/PretendardGOV-Regular.otf'),
  [v_843035.medium]: require('./assets/fonts/PretendardGOV-Medium.otf'),
  [v_843035.semibold]: require('./assets/fonts/PretendardGOV-SemiBold.otf'),
  [v_843035.bold]: require('./assets/fonts/PretendardGOV-Bold.otf'),
  [v_843035.extrabold]: require('./assets/fonts/PretendardGOV-ExtraBold.otf'),
};

let v_e0cae9 = false;
type TextLikeComponent = typeof v_19b633 & {
  defaultProps?: {
    style?: v_19b633['props']['style'];
  };
};

const v_83baa4 = () => {
  if (v_e0cae9) {
    return;
  }

  ([v_19b633, v_79c4f2] as TextLikeComponent[]).forEach((v_b0de9c) => {
    if (!v_b0de9c.defaultProps) {
      v_b0de9c.defaultProps = {};
    }

    v_b0de9c.defaultProps.style = [
      { fontFamily: v_843035.regular },
      v_b0de9c.defaultProps.style,
    ];
  });

  v_e0cae9 = true;
};

export default function v_6540c3() {
  const [v_43f571, v_d39d7d] = v_c06f2c(v_20ccc6);

  v_c4deb2(() => {
    v_7c6176.preventAutoHideAsync().catch(() => null);
  }, []);

  v_c4deb2(() => {
    if (v_43f571) {
      v_83baa4();
    }

    if (v_43f571 || v_d39d7d) {
      v_7c6176.hideAsync().catch(() => null);
    }
  }, [v_43f571, v_d39d7d]);

  if (!v_43f571 && !v_d39d7d) {
    return null;
  }

  return <AppNavigator />;
}

