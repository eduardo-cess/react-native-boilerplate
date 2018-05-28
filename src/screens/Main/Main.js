import React, { Component } from "react";
import { View, Button, BackHandler, Text, DrawerLayoutAndroid } from 'react-native'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increment, decrement, navigateToMainScreen } from "../../store/actions";
import { MainContent } from "../../config/routes"
import SideBar from "../../components/sideBar"

import authenticate from "../../store/reducers/authentication";

class MainScreen extends Component {

  componentDidMount() {
    this.auth();
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isLoggedIn) {
      this.props.navigation.navigate("InitialContent");
    }
  }

  auth = () => {
    if (!this.props.isLoggedIn) {
      this.props.navigation.navigate("InitialContent");
    }
  };

  render() {
    return (

      <MainContent />
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.authenticate.isLoggedIn,
    screenTitle: state.navigateTo.title
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
