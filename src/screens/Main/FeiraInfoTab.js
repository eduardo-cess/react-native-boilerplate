import React, { Component } from "react";
import { View, BackHandler, Image, StyleSheet } from 'react-native'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import { increment, decrement, navigateToMainScreen } from "../../store/actions";
import {
  Content,
  Text,
  List,
  ListItem,
  Left,
  Right,
  Icon,
  Switch,
  Body,
  Container,
  Thumbnail
} from 'native-base';
import { primaryColor } from '../../theme/variables/commonColor';

class FeiraInfoTabScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      infos: [
        { "id": 2, "type": "time", "information": "Seg. a Sex. de 05:00hs até 16:00hs", "icon": "time" },
        { "id": 1, "type": "address", "information": "Cidade Z, Rua X, Entre Rua Y e Rua Z. Bairro X, CEP: 66666-666", "icon": "pin" },
        { "id": 3, "type": "extraInfo", "information": "Outras informações e curiosidades... A feira foi inaugurada dia 12/03/1990. É famosa por seus tomates de boa qualidade, etc...", "icon": "information-circle" },
      ]
    }
  }
  render() {
    return (
      <Container>
        <Content>
          <List  >
            {
              this.state.infos.map(info => {
                return (
                  <ListItem avatar key={info.id}>
                    <Left>
                      <Icon name={info.icon} style={styles.icon} />
                    </Left>
                    <Body >
                      <Text style={styles.font}>{info.information}</Text>
                    </Body>
                  </ListItem>
                )
              })
            }
          </List>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  font: {
    // fontSize: 18,
    // fontWeight: "bold"
    color: "#343a36"
  },
  icon: {
    color: primaryColor
  }
});

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

export default connect(mapStateToProps, mapDispatchToProps)(FeiraInfoTabScreen);
