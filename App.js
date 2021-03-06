
import React from "react";
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducers from './src/store/reducers'
import Setup from "./src/boot/setup"

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
// const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducers)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Setup />
      </Provider>
    );
  }
}