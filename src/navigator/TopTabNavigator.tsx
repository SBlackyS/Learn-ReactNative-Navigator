import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screen/ChatScreen';
import { ContactScreen } from '../screen/ContactsScreen';
import { AlbumScreen } from '../screen/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/styles';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const { top: paddingTop } = useSafeAreaInsets();


  return (
    <Tab.Navigator
        style={{
            paddingTop
        }}
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        screenOptions={ ({route}) => ({
            tabBarPressColor: colores.primary,
            tabBarShowIcon: true,
            tabBarIndicatorStyle: {
                backgroundColor: colores.primary
            },
            tabBarStyle: {
                elevation: 0,
                borderWidth: 0,
                shadowColor: 'transparent'
            },
            tabBarIcon: ({ focused, color }) => {

                let iconName: string = '';
                switch (route.name) {
                    case 'Chat':
                        iconName = 'CH';
                        break;
                    case 'Contact':
                        iconName = 'CT';
                        break;
                    case 'Album':
                        iconName = 'AB';
                        break;
                }

                return <Text style={{ color }}>{ iconName }</Text>
            }
        })}
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="Album" component={AlbumScreen} />
    </Tab.Navigator>
  );
}