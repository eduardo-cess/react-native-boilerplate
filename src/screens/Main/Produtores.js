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
// import { navigateToMainScreen } from "../store/actions";

class ProdutoresScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      produtores: [
        { "id": 1, "nome": "Associação X" },
        { "id": 2, "nome": "Associação Y" },
        { "id": 3, "nome": "Associação Z" },
        { "id": 5, "nome": "Associação XY" },
        { "id": 6, "nome": "Associação XZ" },
        { "id": 7, "nome": "Associação XYZ" },
        { "id": 8, "nome": "Associação Y" },
        { "id": 9, "nome": "Associação YX" },
        { "id": 10, "nome": "Associação YZ" },
        { "id": 11, "nome": "Associação YXZ" },
      ]
    }
  }
  render() {
    return (
      <Container>
        <Content>
          <List  >
            {
              this.state.produtores.map(produtor => {
                return (
                  <ListItem avatar key={produtor.id} onPress={() => this.props.screenProps.rootNavigation.navigate('ProdutorScreen')}>
                    <Left>
                      <Thumbnail source={{ uri: 'https://tudoparasuaempresa.com.br/assets/img/!product-image.jpg' }} />
                    </Left>
                    <Body >
                      <Text >{produtor.nome}</Text>
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
const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {};
};

// const styles = StyleSheet.create({
//   data: {
//     fontSize: 15,
//     color: 'gray',
//   }
// });

export default connect(mapStateToProps, mapDispatchToProps)(ProdutoresScreen);