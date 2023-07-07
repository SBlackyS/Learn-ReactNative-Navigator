import React, { useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/styles';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any>{};

export const Pagina3Screen = ( { navigation }: Props ) => {

    useEffect(() => {
        navigation.setOptions({
            title: "Katty's Song ♥",
            headerBackTitle: 'Back' //IOS
        })
    }, [])
    

    return (
        <View style={ styles.global }>
            <Text style={ styles.title }> Pagina 3 Screen </Text>

            <Button 
                title="Go to Page 1"
                onPress={ () => { navigation.popToTop() } }
            />
            <Button 
                title="Go Back"
                onPress={ () => { navigation.pop() } }
            />

        </View>
    )
}