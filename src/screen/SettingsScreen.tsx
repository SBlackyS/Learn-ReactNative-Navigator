import React from 'react'
import { Text, View } from 'react-native';
import { useSafeAreaFrame, useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/styles';



export const SettingsScreen = () => {

  const insets = useSafeAreaInsets();

  return (
    <View style={{
      ...styles.global,
      marginTop: insets.top + 20
    }}>
        <Text>Settings Screen</Text>
    </View>
  )
}
