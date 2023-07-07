import { StyleSheet } from 'react-native';

export const colores = {
    primary: '#5856D6'
}


export const styles = StyleSheet.create({
    global: {
        marginHorizontal: 20,
        // margin: 10,
        width: 'auto'
    },
    title: {
        color:"#000000",
        fontSize: 20,
        textAlign: 'center',
        borderBottomWidth: 3,
        padding: 5,
        borderBottomColor: 'black',
        marginBottom: 10,

    },
    btnProfile:{
        backgroundColor: '#A5D7E8',
        width: 100,
        height: 100,
        alignItems:'center',
        borderRadius: 20,
        justifyContent: 'center',
        marginHorizontal:10

    },
    btnText: {
        color: 'white',
        fontSize:20,
        textAlign:'center'
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    containerIMG: {
        alignItems: 'center',
        marginTop: 15
    },
    menuContainer: {
        marginHorizontal: 20,
        marginVertical: 30,
    },
    menuItem: {
        fontSize: 17,
    },
    menuBoton: {
        marginVertical: 3
    }

})