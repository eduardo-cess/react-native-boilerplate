import React, { Component } from "react";
import { View } from "react-native";
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
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increment, decrement, logOut } from "../store/actions";

class Produtos extends Component {
  incrementHandler = () => {
    this.props.onIncrement();
  };
  decrementHandler = () => {
    this.props.onDecrement();
  };
  logOutHandler = () => {
    this.props.onLogOut()
    // this.props.navigation.navigate('InitialScreen')
  }

  render() {
    return (
      <Container>
        <View style={{ flex: 1, alignContent: "center" }}>
          <Button block success onPress={this.incrementHandler}>
            <Text>Increment</Text>
          </Button>
          <Button block danger onPress={this.decrementHandler}>
            <Text>Decrement</Text>
          </Button>
        </View>
        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
        >
          <Text style={{ fontSize: 60 }}>{this.props.valor}</Text>
        </View>
        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
        >
          <Button danger onPress={this.logOutHandler} iconLeft>
          <Icon name='exit'/>
            <Text>LOGOUT</Text>
          </Button>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    valor: state.counter.valor
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onLogOut: () => dispatch(logOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Produtos);
