import { combineReducers } from 'redux'
import counter from './counter'
import authenticate from './authentication';
import produtos from './produtos';

const rootReducer = combineReducers({
  counter,
  authenticate,
  produtos
})

export default rootReducer
