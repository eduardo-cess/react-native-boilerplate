import React, { Component } from "react";
import { View, BackHandler, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
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
import openMap from 'react-native-open-maps';

class FeiraInfoTabScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  goToFeira = () => {
    openMap(this.props.currentFeira.localizacao);
  }
  render() {
      let {currentFeira} = this.props
    return (
      <Container>
        <Content>
          <List  >
            <ListItem >
                <Icon name='pin' style={styles.icon} />
                <Body>
                    <Text style={styles.font}>Rua: {currentFeira.endereco.rua}</Text>
                    <Text style={styles.font}>Bairro: {currentFeira.endereco.bairro}</Text>
                    <Text style={styles.font}>Complemento: {currentFeira.endereco.complemento}</Text>
                    <TouchableOpacity onPress={()=>this.goToFeira()}>
                        <Text style={{color: 'blue'}}>Veja no Mapa</Text>
                    </TouchableOpacity>
                </Body>
            </ListItem>  
            <ListItem >
                <Icon name='time' style={styles.icon} />
                <Body >
                    <Text style={styles.font}>{currentFeira.horario}</Text>
                </Body>
            </ListItem>  
            <ListItem >
                <Icon name='information-circle' style={styles.icon} />
                <Body >
                    <Text style={styles.font}>{currentFeira.info}</Text>
                </Body>
            </ListItem>  
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
    color: primaryColor,
    marginRight: 20,
  }
});

const mapStateToProps = state => {
  return {
    currentFeira: state.feiras.currentFeira
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
