import { combineReducers } from 'redux'
import user from './user'
import authenticate from './authentication';
import produtos from './produtos';
import navigateTo from './navigation';

const rootReducer = combineReducers({
  user,
  authenticate,
  produtos,
  navigateTo
})

export default rootReducer
