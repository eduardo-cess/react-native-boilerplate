import React, { Component } from "react";
import { View, BackHandler, Text } from 'react-native'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Icon from 'react-native-vector-icons';
import { increment, decrement, navigateToMainScreen } from "../../store/actions";
import { Container, Header, Content, Item, Form, Input } from "native-base";

class CadastroScreen extends Component {

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
      <Container >
        <Header/>
        <Content style={{margin: 20}}>
          <Form>
            <Item rounded>
             <Icon active name="person"/>
             <Input placeholder="Nome"/> 
            </Item>
            <Item>
            <Icon type="MaterialIcons" android="email"/>
             <Input placeholder="Email"/> 
            </Item>
            <Item>
             <Icon active name="password"/>
             <Input placeholder="Senha"/> 
            </Item>
          </Form>
        </Content>
      </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(CadastroScreen);