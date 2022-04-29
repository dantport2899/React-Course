import 'react-native-gesture-handler';
import React from 'react';
import {
  DefaultTheme,
  DarkTheme,
  Theme,
} from '@react-navigation/native';
import {Navigator} from './src/navigator/Navigator';
import {ThemeProvider} from './src/context/themeContext/ThemeContext';

// const custonTheme: Theme = {
//   dark:true,
//   colors:{
//     ...DefaultTheme.colors,
//     // primary: string;
//     // background: 'black',
//     // card: string;
//     // text: 'white',
//     // border: string;
//     // notification: string;
//   }
// }

export const App = () => {
  return (
    <AppState>
      {/* <NavigationContainer
      // theme={custonTheme}
      > */}
        <Navigator />
      {/* </NavigationContainer> */}
    </AppState>
  );
};

const AppState = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
