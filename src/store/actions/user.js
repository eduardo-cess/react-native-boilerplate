import { GET_USER_DATA, UPDATE_USER_DATA } from './actionTypes'
import { getUserDataFirebase, updateUserDataFirebase } from '../functions/user';

export const getUserData = () => {
    return async dispatch => {
        let user = await getUserDataFirebase()
        console.log(user)
        dispatch({
          type: GET_USER_DATA,
          payload: user
        })
      };
}

export const updateUser = (user) => {
  return async dispatch => {
    updateUserDataFirebase(user)
    console.log(user)
    dispatch({
      type: UPDATE_USER_DATA,
      payload: user
    })
  };
}