import React, { useContext } from 'react'
import { View, Button } from 'react-native'
import { Text } from 'react-native-paper'
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';


export const ContactScreen = () => {
  
  const { signIn, authState:{isLoggedIn} } = useContext(AuthContext)

  return (
      <View style={styles.globalmargin}>
          <Text style={styles.title}>ContacScreen</Text>

          {
            //borra el boton al logearse el usuario
            !isLoggedIn && <Button title="SignIn" onPress={signIn}/>
          }
          
      </View>
  )
}
