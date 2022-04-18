import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Box Object Model</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
      flex: 1,  //hace que se expanda en toda la pantalla
      backgroundColor: 'red',
  },

  title:{
      paddingHorizontal: 90,
      paddingVertical: 25,
      fontSize:20,
      marginTop:10,
      marginHorizontal:20,
      // width: 150,
      borderWidth: 10
      // backgroundColor: 'red'
    }
});