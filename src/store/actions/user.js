import { GET_USER_DATA } from './actionTypes'
import { getUserDataFirebase } from '../functions/user';

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

// export const decrement = () => {
//     return {
//         type: DECREMENT
//     }
// }