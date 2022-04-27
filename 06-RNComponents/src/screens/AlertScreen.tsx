import React from 'react';
import {Alert, Button, Text, View} from 'react-native';
import prompt from 'react-native-prompt-android';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/AppTheme';

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      'Titulo',
      'Este es el cuerpo de la alerta',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {
        cancelable: true, //click afuera para cerrar la alerta
        onDismiss: () => console.log('On dismiss'),
      },
    );
  };

  const showPrompt = () => {

    prompt(
        'Enter password',
        'Enter your password to claim your $1.5B in lottery winnings',
        [
         {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
         {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
        ],
        {
            type: 'secure-text',
            cancelable: false,
            defaultValue: 'test',
            placeholder: 'placeholder'
        }
    );
    
    // Alert.prompt(
    //     'Estas seguro?',
    //     'Esta accion no se puede revertir',
    //     (valor:string) => console.log('Info: ',valor),
    //     'plain-text',
    //     'hola mundo',
    //     'number-pad'
    // )
  }

  return (
    <View style={styles.globalmargin}>
      <HeaderTitle title="Alertas" />
      <Button title="Mostrar alerta" onPress={showAlert} />

      <View style={{height:10}}/>

      <Button title="Mostrar Prompt" onPress={showPrompt} />

    </View>
  );
};
