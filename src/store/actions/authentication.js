import { LOG_IN, LOG_OUT } from './actionTypes';
import {getUserAuthentication} from '../functions/firebaseAuthentication'


export const logIn = (username, password) => {
    return async dispatch => {
        let user = await getUserAuthentication({username, password})
        dispatch({
            type: LOG_IN,
            
        })
    }
}

export const logOut = () => {
    return {
        type: LOG_OUT
    }
}