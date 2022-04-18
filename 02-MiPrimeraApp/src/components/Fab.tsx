import React, { useState } from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View , Platform } from 'react-native'

interface Props{
    title: string,
    onPress: () => void,
    position?: 'br' | 'bl'
}

export const Fab = ({title, onPress, position="br"}: Props) => {

    const ios = () =>{
        return (
            <TouchableOpacity  
                onPress={(onPress)} 
                activeOpacity={ 0.75 }
                style={[
                    styles.fablocation,
                    (position==='bl') ? styles.left : styles.right
            ]}>
                    <View style={styles.fab}>
                    <Text style={styles.fabtext}>{title}</Text>
                    </View>
            </TouchableOpacity>
        )
    }

    const android = () =>{
        return (
            <View style={[
                styles.fablocation,
                (position==='bl') ? styles.left : styles.right
            ]}>
                <TouchableNativeFeedback  onPress={(onPress)} background={TouchableNativeFeedback.Ripple('blue',false, 30)}>
                    <View style={styles.fab}>
                    <Text style={styles.fabtext}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }


  return (Platform.OS === 'ios') ? ios() : android();
}


const styles = StyleSheet.create({
   
    fablocation:{
        position: 'absolute'  ,
        bottom: 25
    },

    left:{
        left: 25
    },
    
    right:{
        right: 25
    },

    fab:{
        backgroundColor: '#5856d6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
        
    },

    fabtext:{
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold',
      alignSelf: 'center'
    }
});
