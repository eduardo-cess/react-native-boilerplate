import React, { Component } from "react";
import { View, BackHandler, Image, StyleSheet } from 'react-native'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increment, decrement, navigateToMainScreen } from "../../store/actions";
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
        { "id": 2, "type": "time", "information": "Seg. a Sex. de 05:00am até 16:00pm", "icon": "time" },
        { "id": 1, "type": "address", "information": "Rua X, Entre Rua Y e Rua Z. Bairro X", "icon": "pin" },
        { "id": 3, "type": "extraInfo", "information": "Outras informações e curiosidades... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "icon": "information" },
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
