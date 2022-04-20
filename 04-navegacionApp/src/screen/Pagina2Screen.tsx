import React from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';


export const Pagina2Screen = () => {

  const navigator = useNavigation<any>();

  useEffect(() => {
    navigator.setOptions({
      title: 'Hola mundo',
      headerBackTitle: 'Atras'  //boton de regreso en ios
    })  
  }, [])
  

  return (
      <View style={styles.globalmargin}>
          <Text style={styles.title}>Pagina 2 Screen</Text>
          <Button title='ir pagina 3' onPress={ () => navigator.navigate('Pagina3Screen')}/>
      </View>
  )
}
