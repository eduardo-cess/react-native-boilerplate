import { combineReducers } from 'redux'
import counter from './counter'
import authenticate from './authentication';

const rootReducer = combineReducers({
  counter,
  authenticate
})

export default rootReducer
