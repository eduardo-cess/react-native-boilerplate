import { LOG_IN, LOG_OUT } from "../actions/actionTypes";

const initialState = {
  userStatus: "isLoggedOut",
  userId: null,
  username: '',
  password: '',
  isLoggedIn: false
};

export default function authenticate(state = initialState, action = {}) {
  switch (action.type) {
    case LOG_IN:
      return Object.assign({}, state, {
        isLoggedIn: true,
        username: action.username,
        password: action.password
      })
    case LOG_OUT:
      return Object.assign({}, state, {
        isLoggedIn: false,
        username: '',
        password: ''
      })
    default:
      return state;
  }
}