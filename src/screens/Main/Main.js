import React, { Component } from "react";
import { View, Button, BackHandler, Text, DrawerLayoutAndroid } from 'react-native'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import { increment, decrement, navigateToMainScreen } from "../../store/actions";
import { MainContent } from "../../config/routes"
import SideBar from "../../components/sideBar"

import authenticate from "../../store/reducers/authentication";

class MainScreen extends Component {

  componentDidMount() {
    // this.auth();
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.userStatus === "isLoggedOut") {
    //   this.props.navigation.navigate("InitialContent");
    // }
  }

  auth = () => {
    if (this.props.userStatus === "isLoggedOut") {
      this.props.navigation.navigate("InitialContent");
    }
  };

  render() {
    return (

      <MainContent />
    );
  }
  // static navigationOptions = ({ navigation }) => {
  //   const params = navigation.state.params || {};

  //   return {
  //     headerTitle: "<LogoTitle />",
  //     headerLeft: (
  //       <Button onPress={() => alert("sgsrgs")} title="+1csds" color="#fff" />
  //     ),
  //   };
  // };
}

const mapStateToProps = state => {
  return {
    userStatus: state.authenticate.userStatus,
    // screenTitle: state.navigateTo.title
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
