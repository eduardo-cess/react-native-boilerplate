
// import * as Expo from "expo";
import React, { Component } from "react";
import { Platform, StatusBar } from "react-native";
import { StyleProvider } from "native-base";

import App from "../App";
import getTheme from "../theme/components/index";
import variables from "../theme/variables/commonColor";

export default class Setup extends Component {
  constructor() {
    super();
    // this.state = {
    //   isReady: false
    // };
  }
  componentWillMount() {
    // this.loadFonts();
  }
  // async loadFonts() {
  //   await Expo.Font.loadAsync({
  //     Roboto: require("native-base/Fonts/Roboto.ttf"),
  //     Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
  //     Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
  //   });
  //   this.setState({ isReady: true });
  // }
  render() {
    if (Platform.OS === 'android') StatusBar.setHidden(true)
    // if (!this.state.isReady) {
    //   return <Expo.AppLoading />;
    // }
    return (
      <StyleProvider style={getTheme(variables)}>
        <App />
      </StyleProvider>
    );
  }
}