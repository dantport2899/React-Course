import { Theme } from '@react-navigation/native';
type ThemeAction =
    | {type:'set_light_theme'}
    | {type:'set_dark_theme'}

export interface ThemeState extends Theme{
    currentTheme:'light'|'dark',
    dividerColor: string;
}

export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    dividerColor: '#084F6A',
    colors:{
        primary: '#084F6A',
        background: 'white',
        card: 'white',
        text: 'black',
        border: 'black',
        notification: 'green',
    }
}

export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dark: true,
    dividerColor: '#75CEDB',
    colors:{
        primary: '#75CEDB',
        background: 'black',
        card: 'black',
        text: 'white',
        border: 'black',
        notification: 'green',
    }
}

export const themereducer = (state:ThemeState, action:ThemeAction):ThemeState => {
    switch (action.type) {
        case 'set_light_theme':
            return{...lightTheme}
        
        case 'set_dark_theme':
            return{...darkTheme}
        default:
            return state
    }
}