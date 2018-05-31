import { LOG_IN, LOG_OUT, SIGN_UP, RECOVER_PASSWORD} from './actionTypes';
import {getUserAuthentication, signUpUser, recoverPassword} from '../functions/firebaseAuthentication'
import {insertUserNameAndPerfil} from '../functions/user';

export const logIn = (username, password) => {
    console.log(username)
    return async dispatch => {
        let response = await getUserAuthentication({username, password})
        dispatch({
            type: LOG_IN,
            userId: response,
            userStatus: 'isLogged'
        })
    }
}

export const logOut = () => {
    return {
        type: LOG_OUT
    }
}

export const signUp = (fullName, email, password) => {
    return async dispatch => {
        let response = await signUpUser({fullName, email, password})
        if(response){
            let inserUserPerfil = await insertUserNameAndPerfil({response, fullName, email})
        }
        
    }
}

export const resetPassword = (email) => {
    return async dispatch => {
        let response = await sendRecoverResetEmail(email)
    }
}