import React, { Component } from "react";
import { View, BackHandler, StyleSheet } from 'react-native'
import {
  Container,
  Content,
  Left,
  Right,
  Body,
  Icon,
  Text,
  ListItem,
  List,
  Thumbnail,
} from "native-base";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { navigateToMainScreen } from "../store/actions";
import AppHeader from '../components/header';

class FeirasScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      feiras: [
        {"id": 1, "nome": "Feira da UFPA", "data": "23/04/2018"},
        {"id": 2, "nome": "Feira da Batista Campos", "data": "24/04/2018"},
        {"id": 3, "nome": "Feira da Praça da Bandeira", "data": "25/04/2018"},
        {"id": 5, "nome": "Feira X", "data": "25/04/2018"},
        {"id": 6, "nome": "Feira Y", "data": "26/04/2018"},
      ]
    }
  }

  componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.navigateToMainScreenHandler()
    });
  }
  navigateToMainScreenHandler = () => {
    this.props.onNavigateToMainScreen()
  }
  backToMainScreen = () => {
    this.props.navigation.goBack()
    this.navigateToMainScreenHandler()
  }

  render() {
    return (
      <Container>
      <AppHeader title={'Feiras'} leftButtonPress={() => this.backToMainScreen()}/>
        <Content>

          <List  >
            {
              this.state.feiras.map(feira => {
                return(
                  <ListItem avatar key={feira.id} onPress={this.navigateToProduto}>
                    <Left>
                      <Thumbnail source={{ uri: 'https://tudoparasuaempresa.com.br/assets/img/!product-image.jpg' }} />
                    </Left>
                    <Body >
                      <Text >{feira.nome}</Text>
                      <Text style={styles.data}>{feira.data}</Text>
                    </Body>
                    {/* <Right>
                      <Text style={styles.data}>{feira.data}</Text>
                    </Right> */}
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
const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    onNavigateToMainScreen: () => dispatch(navigateToMainScreen())
  };
};

const styles = StyleSheet.create({
  data: {
    fontSize: 15,
    color: 'gray',
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FeirasScreen);
