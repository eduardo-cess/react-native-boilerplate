import { LOG_IN, LOG_OUT } from './actionTypes';
import {getUserAuthentication} from '../functions/firebaseAuthentication'


export const logIn = (username, password) => {
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

export const singUp = (name, username, password) => {
    return {
        type: SIGN_UP,
        name: name,
    }
}