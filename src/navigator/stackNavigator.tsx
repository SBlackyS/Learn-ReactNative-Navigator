import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1Screen } from '../screen/Page1Screen';
import { Pagina2Screen } from '../screen/Page2Screen';
import { Pagina3Screen } from '../screen/Page3Screen';
import { Katty } from '../screen/Profile';


export type RootStackParams = {
  Pagina1Screen: undefined, 
  Pagina2Screen: undefined, 
  Pagina3Screen: undefined, 
  Profile: {age: number, name: string}, 
}

const Stack = createStackNavigator<RootStackParams>();

export const MyStackNavigator = () => {
  return (
    <Stack.Navigator
      //  initialRouteName="Pagina2Screen" Sirve para indicar una pagina inicial
      screenOptions={{
        headerStyle:{
          elevation: 0,
          shadowColor: 'transparent' //IOS
        },
        cardStyle: {
          backgroundColor: 'white'
        },
      }}
    >
      

      <Stack.Screen name="Pagina1Screen" options={ { title: "Pagina 1" } } component={Pagina1Screen} />
      <Stack.Screen name="Pagina2Screen" options={ { title: "Pagina 2" } } component={Pagina2Screen} />
      <Stack.Screen name="Pagina3Screen" options={ { title: "Pagina 3" } } component={Pagina3Screen} />
      <Stack.Screen name="Profile" component={Katty} />
    </Stack.Navigator>
  );
}
