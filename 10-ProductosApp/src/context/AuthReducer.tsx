import { Usuario } from '../interfaces/app-interfaces';

export interface AuthState{
    status: 'checking' | 'authenticated' | 'not-authenticated';
    token: string | null;
    errorMessage: string;
    user: Usuario | null;
}

type AuthAction = 
    | {type: 'signUp', payload:{token:string,user:Usuario}}
    | {type: 'addError', payload:{token:string,user:Usuario}}