import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const ProtectedScreen = () => {
const {user,token,logout} = useContext(AuthContext);

  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Protected Screen
        </Text>
        <Button
          title='logout'
          color='#5856D6'
          onPress={logout}
        />
        <Text>
          {JSON.stringify(user,null,5)}
        </Text>
        <Text>
          {token}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignContent:'center'
    },
    title:{
      fontSize:20,
      marginBottom:20,
    }
});
