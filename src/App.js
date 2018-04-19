import React from "react";
import { StyleSheet, View } from "react-native";

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Root } from './config/routes';
import authenticate from './store/reducers/authentication';
// import firebaseConfig from './config/firebaseConfig';


class App extends React.Component {

  componentWillMount() {
    // firebaseConfig;
  }
  render() {
    return (
      <Root />
    );
  }
}

const mapStateToTprops = (state) => {
  return {
    userStatus: state.authenticate.userStatus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToTprops, mapDispatchToProps)(App)