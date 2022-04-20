import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';  //importar la libreria de navegacion
import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { MenuLateral } from './src/navigator/MenuLateral';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator></StackNavigator> */}
      {/* <MenuLateralBasico></MenuLateralBasico> */}
      <MenuLateral></MenuLateral>
    </NavigationContainer>
  )
}

export default App;

