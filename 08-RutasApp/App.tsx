import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/navigation/Navigator';
import {PermissionsProvider} from './src/context/PermissionsContext';

const AppState = ({children}: any) => {
  return <PermissionsProvider>{children}</PermissionsProvider>;
};

export const App = () => {
  return (
    <AppState>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </AppState>
  );
};

export default App;
