import { GET_ALL_PRODUTOS } from "../actions/actionTypes";

var initialState = {
    produtos: []
}

export default function produtos (state = initialState, action = {}) {
    switch (action.type){
        case GET_ALL_PRODUTOS:
            return {...state, produtos: action.payload}
        default:
            return state
    }

}