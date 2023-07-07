import React, { useEffect } from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
// import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/styles';
import { DrawerScreenProps } from '@react-navigation/drawer';

// interface Props extends StackScreenProps<any, any>{};
interface Props extends DrawerScreenProps<any,any>{};


export const Pagina1Screen = ( { navigation }: Props ) => {

    useEffect(() => {
        navigation.setOptions({
            title: 'People',
            headerLeft: () => 
                <Button 
                    title="Menu"
                    onPress={ () => navigation.toggleDrawer() }
                />
        })
    }, [])
    
    return (
        <View style= { styles.global }>
            <Text style={ styles.title }> Pagina 1 Screen </Text>

            <Button
                title= 'Go to page 2'
                onPress={ () => navigation.navigate('Pagina2Screen') }
            />

            <Text style={ styles.title }>Navegar con Argumentos</Text>

            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                    style={ {
                        ...styles.btnProfile,
                        backgroundColor: '#576CBC'
                    } }
                    onPress={ () => navigation.navigate('Profile', {
                        age: 27,
                        name: 'Katty♥'
                    }) }
                >
                    <Text style={ styles.btnText }>Katty Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={ styles.btnProfile }
                    onPress={ () => navigation.navigate('Profile', {
                        age:22,
                        name: 'Pau♥'
                    }) }
                >
                    <Text style={ styles.btnText }>Paulo Profile</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    )
}