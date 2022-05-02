import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/StackNavigator';
import { Tabs } from './src/navigation/Tabs';

export const App = () => {
    return (

      <NavigationContainer>
        {/* <StackNavigator/> */}
        <Tabs/>
      </NavigationContainer>
    )
}

export default App;