import { SEARCH } from '../actions/actionTypes';

var initialState = {
    text: ''
}

export default function search (state = initialState, action = {}) {
    switch(action.type){
        case SEARCH:
            return {...state, text: action.payload}
        default:
            return state
    }
}