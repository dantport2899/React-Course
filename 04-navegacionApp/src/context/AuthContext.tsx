import * as React from 'react';
import { createContext, useReducer } from 'react';
import { Value } from 'react-native-reanimated';
import { authReducer } from './AuthReducer';

//definir como luce , que informacion tendre
export interface AuthState{
    isLoggedIn:boolean;
    username?:string;
    favoriteIcon?:string;
}

//Estado inicial
export const authInitialState:AuthState={
    isLoggedIn:false,
    username: undefined,
    favoriteIcon: undefined,
}

//lo usaremos para decirle a react como luce y que expone el context
export interface AuthContextProps{
    authState:AuthState;
    signIn: ()=>void;
    logOut: () => void; 
    changefavoriteIcon: (iconName: string) => void;
    changeUsername: (username: string) => void;
}


//crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

//componente que es el proveedor de el estado
export const AuthProvider = ({children}:any) =>{

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () =>{
        dispatch({type:'signIn'});
    }

    const logOut = () => {
        dispatch({type:'logOut'})
    }

    const changefavoriteIcon = (iconName:string) => {
        dispatch({type:'changeFavIcon', payload:iconName});
    }

    const changeUsername = (username:string) => {
        dispatch({type:'changeUsername', payload:username});
    }

    

    return(
        <AuthContext.Provider 
            value={{
                authState,
                signIn,
                logOut,
                changefavoriteIcon,
                changeUsername,
            }}>
            {children}
        </AuthContext.Provider>
    )
}