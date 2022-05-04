import React, { useContext } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { PermissionsContext } from '../context/PermissionsContext';
import { BlackButton } from '../components/BlackButton';

export const PermissionsScreen = () => {

    const {permissions,askLocationPermission} = useContext(PermissionsContext);
   
  return (
      <View style={styles.container}>
          <Text style={styles.title}>Permissions Screen</Text>
          <Text style={styles.text}>Es necesario el uso del GPS para usar esta aplicacion</Text>
          <BlackButton
            title='Permiso'
            onPress={askLocationPermission}
            style={{marginVertical:20}}
          />

          <Text>
              {JSON.stringify(permissions,null,5)}
          </Text>
      </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        width:250,
        textAlign:'center',
        marginBottom:10,
    },
    text:{
        width:250,
        textAlign:'center'
    }
});