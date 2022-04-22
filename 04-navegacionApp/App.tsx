import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';  //importar la libreria de navegacion
import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { MenuLateral } from './src/navigator/MenuLateral';
import { AuthProvider } from './src/context/AuthContext';

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator></StackNavigator> */}
        {/* <MenuLateralBasico></MenuLateralBasico> */}
        <MenuLateral></MenuLateral>
        {/* <Tabs></Tabs> */}
      </AppState>
      
    </NavigationContainer>
  )
}

const AppState = ({children}:any) =>{
  return(
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App;

