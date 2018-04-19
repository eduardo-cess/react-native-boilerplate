import React, { Component } from "react";
import { View, BackHandler, Text, Button } from 'react-native'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increment, decrement, navigateToMainScreen } from "../../store/actions";

class ProdutoresScreen extends Component {

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
      <View>
        <Text>Produtores</Text>
        <Button title={"Produtores"} onPress={() => this.props.navigation.navigate("ProdutorScreen")} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ProdutoresScreen);
