import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from "native-base";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Root, Tabs } from './config/routes';
import authenticate from './store/reducers/authentication';
import firebaseConfig from './config/firebaseConfig';
import login from './screens/login';


class App extends React.Component {

  componentWillMount() {
    firebaseConfig;
  }
  render() {
    return (
      <Root/>
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