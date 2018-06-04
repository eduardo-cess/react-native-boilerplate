import { LOG_IN, LOG_OUT, SIGN_UP, RECOVER_PASSWORD} from './actionTypes';
import {getUserAuthentication, signUpUser, sendResetPasswordEmail} from '../functions/firebaseAuthentication'
import {insertUserNameAndPerfil} from '../functions/user';

export const logIn = (username, password) => {
    return async dispatch => {
        let response = await getUserAuthentication(username, password)
        if (response.sucess){
            dispatch({
                type: LOG_IN,
                userId: response.uid,
                isLoggedIn: true
            })
        }else{
            dispatch({
                type: LOG_IN,
                error: response.error,
            })
        }
    }
}

export const logOut = () => {
    return async dispatch => {
        let response = await sendResetPasswordEmail();
        if(!response.sucess){
            dispatch({
                type: RECOVER_PASSWORD,
                error: response.error,
            })
        }
    }
}

export const signUp = (fullName, email, password) => {
    return async dispatch => {
        let response = await signUpUser(email, password)
        if(response.sucess){
            let inserUserPerfil = await insertUserNameAndPerfil(response.uid, fullName, email)
            if(insertUserNameAndPerfil.sucess){
                dispatch({
                    type: SIGN_UP,
                    sucess: 'Usuário criado com Sucesso, faça login no app'
                })
            }
        }else{
            dispatch({
                type: SIGN_UP,
                error: response.error,
            })
        }
        
    }
}

export const resetPassword = (email) => {
    return async dispatch => {
        let response = await sendResetPasswordEmail(email)
        if (response.sucess){
            dispatch({
                type: RECOVER_PASSWORD,
                sucess: 'Email enviado com sucesso',
            })
        }else {
            dispatch({
                type: RECOVER_PASSWORD,
                error: response.error,
            })
        }
    }
}