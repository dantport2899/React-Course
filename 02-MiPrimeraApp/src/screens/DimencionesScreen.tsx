import React from 'react'
import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from 'react-native'

// const {width,height} = Dimensions.get('window');  //obtener las dimenciones de la pantalla del telefono

export const DimencionesScreen = () => {
    const {width,height} = useWindowDimensions();
    
return (
    <View style={styles.container}>
        <View>
            <View style={{
                ...styles.cajaMorada,
                width: width*.50
            }}></View>
            <View style={styles.cajaNaranja}></View>
        </View>      
        <Text style={styles.titulo}>w: {width}, H: {height}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:600,
        backgroundColor: 'red'
    },
    cajaMorada:{
        backgroundColor:'#5856D6',
        width:'50%',
        height:'50%'
    },
    cajaNaranja:{
        backgroundColor: '#F0A23B',
        width:'50%',
        height:'50%'
    },
    titulo:{
        fontSize:30,
        textAlign:'center'
    }
});
