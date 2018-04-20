import React, { Component } from "react";
import { View, BackHandler, Image } from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increment, decrement, navigateToMainScreen } from "../../store/actions";
import { Container, Content, Text } from 'native-base';

class ProdutoScreen extends Component {

  render() {
    return (
      <Container>
        <Content style={{ backgroundColor: "white" }}>
          <Image
            source={{
              uri:
                "https://2.bp.blogspot.com/-BoRHgyCRWjI/Tow8J2n1gfI/AAAAAAAAEyc/MSHjp5dHeAU/s640/tomates.jpg"
            }}
            style={{ height: 200, width: null, flex: 1 }}
          />
          <Text>Tomate</Text>
          <Text>R$5.00 por KG</Text>
          <Text>Outras informações</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProdutoScreen);
