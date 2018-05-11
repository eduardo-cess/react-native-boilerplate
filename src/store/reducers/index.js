import { combineReducers } from 'redux'
import user from './user'
import authenticate from './authentication';
import produtos from './produtos';
import search from './search';

const rootReducer = combineReducers({
  user,
  authenticate,
  produtos,
  search
})

export default rootReducer
