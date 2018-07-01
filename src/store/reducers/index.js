import { combineReducers } from 'redux'
import user from './user'
import authenticate from './authentication';
import produtos from './produtos';
import search from './search';
import feiras from './feiras'

const rootReducer = combineReducers({
  user,
  authenticate,
  produtos,
  search,
  feiras
})

export default rootReducer
