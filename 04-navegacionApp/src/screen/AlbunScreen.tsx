import React, { useContext } from 'react'
import { Button, View } from 'react-native'
import { Text } from 'react-native-paper'
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const AlbunScreen = () => {

  const {logOut,authState:{isLoggedIn}} = useContext(AuthContext)

  return (
      <View style={styles.globalmargin}>
          <Text style={styles.title}>AlbunScreen</Text>

          {
            isLoggedIn && (
              <Button title='LogOut' onPress={logOut}/>
            )
          }
      </View>
  )
}
