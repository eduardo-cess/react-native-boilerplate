import { LOG_IN, LOG_OUT } from "../actions/actionTypes";

const initialState = {
  userStatus: "isLoggedOut"
};

export default function authenticate(state = initialState, action = {}) {
  switch (action.type) {
    case LOG_IN:
      return { userStatus: "isLoggedIn" };
    case LOG_OUT:
      return { userStatus: "isLoggedOut" };
    default:
      return state;
  }
}
