import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { SettingsScreen } from '../screen/SettingsScreen';
import { Text, useWindowDimensions, Image, View, TouchableOpacity } from 'react-native';
import { styles } from '../theme/styles';
import { Tab } from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const { width } = useWindowDimensions();


    return (
    <Drawer.Navigator
        screenOptions={{
            headerShown: false,
            drawerType: width >= 768 ? 'permanent' : 'front',
            
        }}
        drawerContent={ (props) => <MenuInterno { ...props }/> }
    >
      <Drawer.Screen name="Tabs"  component={ Tab } />
      <Drawer.Screen name="SettingsScreen"  component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ( { navigation } : DrawerContentComponentProps ) => {

  return (
    <DrawerContentScrollView>

      {/* Parte del avatar */}
      <View style={ styles.containerIMG }>
        <Image
          source={{
            uri: 'https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-avatar-placeholder-png-image_3416697.jpg'
          }}
          style={ styles.avatar }
        />
      </View>

      {/* Opciones de menú */}
      <View style={ styles.menuContainer }>
        <TouchableOpacity 
          style={ styles.menuBoton }
          onPress={ () => navigation.navigate('Tabs') }
        >
          <Text style={ styles.menuItem }>Navigation Tabs</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={ styles.menuBoton }
          onPress={ () => navigation.navigate('SettingsScreen') }  
        >
          <Text style={ styles.menuItem }>Settings</Text>
        </TouchableOpacity>
      </View>

    </DrawerContentScrollView>

  );
}