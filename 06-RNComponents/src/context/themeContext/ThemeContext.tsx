import { Children, createContext, useReducer, useEffect } from 'react';
import * as React from 'react';
import { ThemeState, themereducer, lightTheme, darkTheme } from './ThemeReducer';
import { useColorScheme } from 'react-native';

interface ThemeContextProps{
    theme:ThemeState;
    setDarkTheme:()=> void;
    setLightTheme:()=> void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}:any) => {

    const colorScheme = useColorScheme();

    const [theme,dispatch] = useReducer(themereducer, (colorScheme === 'dark')? darkTheme : lightTheme);  //necesito leer el tema global del dispositivo

    useEffect(() => {
        (colorScheme === 'light')
        ?setLightTheme()
        :setDarkTheme();
    
    }, [colorScheme])
    

    const setDarkTheme = () => {
        dispatch({type:'set_dark_theme'});
        console.log('set dark theme');
    }

    const setLightTheme = () => {
        dispatch({type:'set_light_theme'});
        console.log('set light theme');
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}