import 'react-native-gesture-handler';
import * as React from 'react';

// import { MyStackNavigator } from './src/navigator/stackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { MenuLateral } from './src/navigator/MenuLateral';
import { BottomTabsIOS } from './src/navigator/Tabs';


export const App = () => {
  return (
    <NavigationContainer>
      {/* <MyStackNavigator/> */}
      {/* <MenuLateralBasico /> */}
      <MenuLateral />
      {/* <Tabs /> */}
    </NavigationContainer>
  );
};

export default App;