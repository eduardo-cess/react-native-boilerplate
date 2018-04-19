import { INCREMENT, DECREMENT } from '../actions/actionTypes'

const initialState = {
      valor: 0
}
  
export default function counter(state = initialState, action={}) {
    switch (action.type) {
      case INCREMENT: 
        return {...state, valor: state.valor + 1}
      case DECREMENT:
        return {...state, valor: state.valor - 1}
      default:
        return state
    }
  }