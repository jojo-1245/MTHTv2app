import v_a3453e from 'bapkr';
import { v_ac28fd } from 'ixigazcpvfldbecwtbvavtbi';
import { v_709be7 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_c316d8 } from '../screens';

export type RootStackParamList = {
  Home: undefined;
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const v_ce4741 = {
  home: 'Home',
  main: 'Home',
  login: 'Home', 
} as const;

