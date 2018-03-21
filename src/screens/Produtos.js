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
  Text,
  ListItem,
  List
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
        <Header />
        <Content>
          <List>
            <ListItem avatar>

              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
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
