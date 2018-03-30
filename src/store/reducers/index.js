import { combineReducers } from 'redux'
import counter from './counter'
import authenticate from './authentication';
import produtos from './produtos';
import navigateTo from './navigation';

const rootReducer = combineReducers({
  counter,
  authenticate,
  produtos,
  navigateTo
})

export default rootReducer
