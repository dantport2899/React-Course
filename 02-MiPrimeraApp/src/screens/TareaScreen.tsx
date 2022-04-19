import React from 'react'
import { StyleSheet, View } from 'react-native'

export const TareaScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.cajaMorada}></View>
        <View style={styles.cajaNaranja}></View>
        <View style={styles.cajaAzul}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#28425B',

        justifyContent:'center', //ejercicio 2,3,6
        // justifyContent:'space-between',  //ejericio 4,5
        // flexDirection: 'row'  //ejercicio 5
        
    },

    cajaMorada:{
        width:100,        
        height:100,
        // height:'100%', //ejercicio 5
        borderWidth:10,
        borderColor:'white',
        backgroundColor: '#5856D6',

        // alignSelf:'flex-end'  //ejercicio 3, 4
        alignSelf:'center', //ejercicio 6,7
        top:100, // ejercicio 7
        

    },

    cajaNaranja:{
        width:100,
        height:100,
        // height:'100%', //ejercicio 5
        
        borderWidth:10,
        borderColor:'white',
        backgroundColor: '#F0A23B',
        
        // flex:1   //ejercicio 1
        // alignSelf:'center'  //ejercicio 4
        alignSelf:'center', //ejercicio 6,7
        right:-100, //ejercicio 6,7



    },

    cajaAzul:{
        width:100,
        // width:'100%',  //ejercicio2
        height:100,
        // height:'100%', //ejercicio 5

        borderWidth:10,
        borderColor:'white',
        backgroundColor: '#28C4D9',

        // alignSelf:'center'  //ejercicio 3
        // alignSelf:'flex-start'  //ejercicio 4
        alignSelf:'center', //ejercicio 6

    },
});
