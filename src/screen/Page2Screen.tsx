import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/styles';

interface Props extends StackScreenProps<any, any>{};

export const Pagina2Screen = ( { navigation }: Props ) => {

    useEffect(() => {
        navigation.setOptions({
            title: 'Katty I love you ♥',
            headerBackTitle: 'Back' //IOS
        })
    }, [])
    

    return (
        <View style={ styles.global }>
            <Text style={ styles.title }> Pagina 2 Screen </Text>
            <Button
                title='Go to page 3'
                onPress={ () => navigation.navigate('Pagina3Screen') }
            />
            <Button
                title="Go Back"
                onPress={ () => navigation.popToTop() }            
            />
        </View>
    )
}