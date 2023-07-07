import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/styles'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/stackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'Profile'>{};
export const Katty = (  { navigation, route }  : Props ) => {
  // console.log(JSON.stringify(props, null, 3)); Imprime de forma mas ordenada

  const params = route.params;

  //Usamos una funcion de 1 uso la cual actualiza el nombre de la pantalla
  useEffect(() => {
    navigation.setOptions({
      title: params.name //Forzamos a typescript a que sepa que yo se lo que hago y que no hay problema
    })
  }, [])
  
  return (
    <View style= { styles.global }>
        <Text style= { {
            ...styles.title,
            textAlign: 'left'
            } }>
          {
            JSON.stringify(params,null,3)
          }
        </Text>

        <Button 
            title='Back to Principal'
            onPress={ () => navigation.pop() }
        />
    </View>
  )
}

export default Katty