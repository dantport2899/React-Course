import { Children, createContext, useReducer } from 'react';
import * as React from 'react';
import { ThemeState, themereducer, lightTheme } from './ThemeReducer';

interface ThemeContextProps{
    theme:ThemeState;
    setDarkTheme:()=> void;
    setLightTheme:()=> void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}:any) => {

    const [theme,dispatch] = useReducer(themereducer, lightTheme);  //necesito leer el tema global del dispositivo

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