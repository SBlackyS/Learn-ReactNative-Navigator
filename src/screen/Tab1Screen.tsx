import React from 'react'
import { Text, View } from 'react-native'
import { useEffect } from 'react';
import { styles } from '../theme/styles';

import Icon from 'react-native-vector-icons/Ionicons';

export const Tab1Screen = () => {

  useEffect(() => {
    console.log('Tab1Screen')
  }, [])
  


  return (
    <View style={ styles.global }>
        <Text style={ styles.title }>Iconos</Text>
        <Text>
          <Icon name="airplane-outline" size={80} color="#900" />;
        </Text>
        
    </View>
  )
}
