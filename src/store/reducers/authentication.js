import { LOG_IN, LOG_OUT } from "../actions/actionTypes";

const initialState = {
  userId: null,
  isLoggedIn: false,
  error: ''
};

export default function authenticate(state = initialState, action = {}) {
  switch (action.type) {
    case LOG_IN:
      return {...state, 
        isLoggedIn: true,
        error: action.error,
        userId: action.userId,
      }
    case LOG_OUT:
      return {...state,
        isLoggedIn: false,
      }
    default:
      return state;
  }
}