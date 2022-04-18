import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {
    const [contador, setcontador] = useState(10)


  return (
      <View style={styles.container}>
          <Text style={styles.title}>Contador: {contador}</Text>

          <Fab title="-1" onPress={ () => setcontador(contador-1)} position="bl"></Fab>
          <Fab title="+1" onPress={ () => setcontador(contador+1)} position="br"></Fab>

          {/* <TouchableOpacity style={styles.fablocationBr} onPress={() => setcontador(contador+1)}>
            <View style={styles.fab}>
              <Text style={styles.fabtext}>+</Text>
            </View>
          </TouchableOpacity> */}
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center'
    },

    title:{
        textAlign: 'center',
        fontSize: 40,
        position: 'relative',
        top: -65
    }

});
