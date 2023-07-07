import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screen/Tab1Screen';
import { Tab2Screen } from '../screen/Tab2Screen';
import { Tab3Screen } from '../screen/Tab3Screen';
import { MyStackNavigator } from './stackNavigator';
import { colores } from '../theme/styles';
import { Platform, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTabNavigator } from './TopTabNavigator';


export const Tab = () => {


  return Platform.OS === 'ios'
          ? <BottomTabsIOS />
          : <TabsAndroid />

}

const TabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {

  return(
    <TabAndroid.Navigator
      sceneAnimationEnabled={ true }
      barStyle={{ backgroundColor: colores.primary }}
      screenOptions={ ({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: colores.primary,
        tabBarStyle:{
          borderTopColor: colores.primary,
          borderTopWidth:0,
          elevation: 0
        },
        tabBarLabelStyle: {
          fontSize: 11
        },
        tabBarIcon: ({focused, color}) => {

          let iconName: string = '';
          switch( route.name ){
            case 'Tab1Screen':
              iconName = 'T1'
              break;
            case 'TopTab':
              iconName = 'TB'
              break;
            case 'Stack':
              iconName = 'SK'
              break;
          }

          return <Text style={{ color }}>{ iconName }</Text>
        }
      }) }
    >
      <TabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab1'}} component={Tab1Screen} />
      <TabAndroid.Screen name="TopTab" options={{ title: 'TopTab'}} component={TopTabNavigator} />
      <TabAndroid.Screen name="Stack" options={{ title: 'Stack'}} component={MyStackNavigator} />
    </TabAndroid.Navigator>
  )
} 





const TabIOS = createBottomTabNavigator();

const BottomTabsIOS = () => {
  return (
    <TabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={ ({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: colores.primary,
        tabBarStyle:{
          borderTopColor: colores.primary,
          borderTopWidth:0,
          elevation: 0
        },
        tabBarLabelStyle: {
          fontSize: 11
        },
        tabBarIcon: ({focused, color, size}) => {

          let iconName: string = '';
          switch( route.name ){
            case 'Tab1Screen':
              iconName = 'T1'
              break;
            case 'TopTab':
              iconName = 'TB'
              break;
            case 'Stack Navigator':
              iconName = 'SK'
              break;
          }

          return <Text style={{ color }}>{ iconName }</Text>
        }
      }) }
    
    >
      {/* Modificacion del ícono del tabBarNavigator */}
      {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1', tabBarIcon: (props) => <Text style={{ color: props.color }}>T1</Text>  }} component={Tab1Screen} /> */}
      <TabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
      <TabIOS.Screen name="TopTab" options= {{ title:'TopTab' }} component={TopTabNavigator} />
      <TabIOS.Screen name="Stack Navigator" options={{ title: 'Stack' }} component={MyStackNavigator} />
    </TabIOS.Navigator>
  );
}