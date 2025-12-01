import v_a3453e from 'bapkr';
import { v_ac28fd } from 'ixigazcpvfldbecwtbvavtbi';
import { v_709be7 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import {
  v_a82b55,
  v_c1e2b5,
  v_040c8f,
  v_c316d8,
  v_d49470,
  v_b1090c,
  v_af04e5,
  v_2b0ec1,
  v_f4f851,
  v_873cfb,
  v_0d311d,
  v_db1cc4,
  v_f40fc5,
} from '../screens';
import type { v_da1883 } from '../types';

export type RootStackParamList = {
  Home: undefined;
  ListHome: undefined;
  CloneRegister: undefined;
  CloneUpload:
    | {
        facePreview?: string;
      }
    | undefined;
  CloneCamera: undefined;
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
  PasswordVerification: undefined;
  ResetPassword: undefined;
  PasswordChanged: undefined;
  EmailVerification:
    | {
        email?: string;
      }
    | undefined;
  CountrySelect:
    | {
        selectedIso2?: string;
        onSelectCountry?: (country: v_da1883) => void;
      }
    | undefined;
};

const v_cb3606 = v_709be7<RootStackParamList>();

export const AppNavigator: v_a3453e.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={v_c316d8} />
        <Stack.Screen name="ListHome" component={v_d49470} />
        <Stack.Screen name="CloneRegister" component={v_b1090c} />
        <Stack.Screen name="CloneUpload" component={v_af04e5} />
        <Stack.Screen name="CloneCamera" component={v_2b0ec1} />
        <Stack.Screen name="Login" component={v_f4f851} />
        <Stack.Screen name="Signup" component={v_f40fc5} />
        <Stack.Screen name="ForgotPassword" component={v_040c8f} />
        <Stack.Screen name="PasswordVerification" component={v_0d311d} />
        <Stack.Screen name="ResetPassword" component={v_db1cc4} />
        <Stack.Screen name="PasswordChanged" component={v_873cfb} />
        <Stack.Screen name="EmailVerification" component={v_a82b55} />
        <Stack.Screen name="CountrySelect" component={v_c1e2b5} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const v_ce4741 = {
  home: 'Home',
  listHome: 'ListHome',
  cloneRegister: 'CloneRegister',
  cloneUpload: 'CloneUpload',
  cloneCamera: 'CloneCamera',
  main: 'Home',
  login: 'Login',
  signup: 'Signup',
  forgotPassword: 'ForgotPassword',
  passwordVerification: 'PasswordVerification',
  resetPassword: 'ResetPassword',
  passwordChanged: 'PasswordChanged',
  emailVerification: 'EmailVerification',
  countrySelect: 'CountrySelect',
} as const;

