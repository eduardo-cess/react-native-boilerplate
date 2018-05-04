import React, { Component } from "react";
import { View, BackHandler, Text, StatusBar, StyleSheet } from 'react-native'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increment, decrement, navigateToMainScreen } from "../../store/actions";

class SplashScreen extends Component {

  // componentDidMount(){
  //   BackHandler.addEventListener('hardwareBackPress', () => {
  //     this.navigateToMainScreenHandler()
  //   });
  // }

  // navigateToMainScreenHandler = () => {
  //   this.props.onNavigateToMainScreen()
  // }
  // backToMainScreen = () => {
  //   this.props.navigation.goBack()
  //   this.navigateToMainScreenHandler()
  // }
  render() {
    return (
      <View style= {styles.container}>
        <StatusBar
          backgroundColor= '#4f6d7a'
          barStyle= 'light-content'
        />
        <Text>SplashScreen</Text>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    // valor: state.counter.valor
  };
};
const mapDispatchToProps = dispatch => {
  return {
    // onIncrement: () => dispatch(increment()),
    // onDecrement: () => dispatch(decrement()),
    // onNavigateToMainScreen: () => dispatch(navigateToMainScreen())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#4f6d7a',
  }
})