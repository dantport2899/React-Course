import React from 'react';
import { Text, View, Button } from 'react-native'
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useEffect } from 'react';

interface Props extends StackScreenProps<any,any>{};

export const Pagina1Screen = ({navigation}:Props) => {

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () =>{
  //       <Button 
  //         title='Menu',
  //         on
  //       />
  //     }
  //   })
  // }, []);
  

  return (
      <View style={styles.globalmargin}>
          <Text style={styles.title}>Pagina 1 Screen</Text>
          <Button title='Ir pagina 2' onPress={ () => navigation.navigate('Pagina2Screen')}/>
          {/* <Button title='Ir persona' onPress={ () => navigation.navigate('Persona')}/> */}

          <Text style={{
            marginVertical:20,
            fontSize:20,
            marginLeft:5
          }}>Navegar con argumentos</Text>

          <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{...styles.botongrande, backgroundColor:'#5856D6'}} onPress={ () => navigation.navigate('Persona', {id:1 ,nombre:'Pedro'})}>
                <Text style={styles.botongrandetexto}>Pedro</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{...styles.botongrande, backgroundColor:'#FF9427'}} onPress={ () => navigation.navigate('Persona', {id:2 ,nombre:'Maraia'})}>
                <Text style={styles.botongrandetexto}>Maria</Text>
            </TouchableOpacity>
          </View>
          

          
      </View>
  )
}
