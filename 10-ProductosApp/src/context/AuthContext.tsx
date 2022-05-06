import React, { createContext,useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import cafeApi from '../api/CafeApi';
import { Usuario, LoginResponse, LoginData } from '../interfaces/app-interfaces';
import { authReducer, AuthState } from './AuthReducer';
import { useEffect } from 'react';

type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: Usuario | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    signUp: ()=> void;
    signIn: (logindata:LoginData)=> void;
    logout: ()=> void;
    removeError: ()=> void;
}

const AuthInitialState:AuthState = {
    status:'checking',
    token:null,
    user:null,
    errorMessage:''
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {

const [state, dispatch] = useReducer(authReducer, AuthInitialState);

useEffect(() => {
    checkToken();

}, []);

const checkToken = async()=>{

    //NO TOKEN, NO AUTENTICADO
    const token = AsyncStorage.getItem('token');
    if(!token) return dispatch({type:'notAuthenticated'});

    //HAY TOKEN
    const resp = await cafeApi.get('/auth');
    if(resp.status !== 200){
        return dispatch({type:'notAuthenticated'});
    }

    await AsyncStorage.setItem('token', resp.data.token);

    dispatch({
        type:'signUp',
        payload:{
            token:resp.data.token,
            user:resp.data.usuario
        }
    });
}


const signIn = async({correo,password}:LoginData)=> {
    try {
        const {data} = await cafeApi.post<LoginResponse>('/auth/login',{correo,password});
        dispatch({
            type:'signUp',
            payload:{
                token:data.token,
                user:data.usuario
            }
        });

        await AsyncStorage.setItem('token',data.token);

    } catch (error) {
        console.log(error);
        dispatch({
            type:'addError',
        // @ts-ignore
            payload:error.response.data.msg || 'Informacion incorrecta'
        })
    }
};

const signUp = async()=> {
    
};


const logout = ()=> {

};

const removeError = ()=> {
    dispatch({
        type:'removeError'
    });
};


    return(
        <AuthContext.Provider value={{
            ...state,
            signUp,
            signIn,
            logout,
            removeError,
        }}>
            {children}
        </AuthContext.Provider>
    )
}