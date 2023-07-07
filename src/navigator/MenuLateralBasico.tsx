import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MyStackNavigator } from './stackNavigator';
import { SettingsScreen } from '../screen/SettingsScreen';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {

    const { width } = useWindowDimensions();
    console.log(width);
    return (
    <Drawer.Navigator
        screenOptions={{
            headerShown: false,
            drawerType: width >= 768 ? 'permanent' : 'front'
        }}
    >
      <Drawer.Screen name="stackNavigator" options={{ title: 'Home' }} component={ MyStackNavigator } />
      <Drawer.Screen name="SettingsScreen" options={{ title: 'Settings' }} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}