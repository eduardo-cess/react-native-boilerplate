import { LOG_IN, LOG_OUT, RECOVER_PASSWORD, SIGN_UP } from "../actions/actionTypes";

const initialState = {
  userId: null,
  isLoggedIn: false,
  error: '',
  userCreatedWithSucess: ''
};

export default function authenticate(state = initialState, action = {}) {
  switch (action.type) {
    case LOG_IN:
      return {...state, 
        isLoggedIn: action.isLoggedIn,
        error: action.error,
        userId: action.userId,
      }
      break;
    case LOG_OUT:
      return {...state,
        isLoggedIn: false,
      }
      break;
    case RECOVER_PASSWORD:
      return {
        ...state,
        error: action.error
      }
      break;
    case SIGN_UP:
      return {
        ...state,
        error: action.error,
        userCreatedWithSucess: action.sucess
      }
      break;
    default:
      return state;
  }
}