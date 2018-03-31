import React, { Component } from "react";
import { View, StyleSheet, Modal, TouchableHighlight } from "react-native";
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
  List,
  Thumbnail,
  Spinner
} from "native-base";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logOut, getAllProdutos, navigateToProdutoScreen } from "../store/actions";
import { navigateTo } from '../store/reducers';

class Produtos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false
    }
  }
  setLoadingModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  produtos = [
    {"id": 1, "nome": "Tomates", "preco": 0.50, "produtor": "Produtor X"},
    {"id": 2, "nome": "Cheiro Verde", "preco": 1.50, "produtor": "Produtor Y"},
    {"id": 3, "nome": "Pepino", "preco": 1.50, "produtor": "Produtor Z"},
    {"id": 4, "nome": "Mel", "preco": 5.0, "produtor": "Produtor X"},
    {"id": 5, "nome": "Milho", "preco": 2.0, "produtor": "Produtor XY"},
    {"id": 6, "nome": "Semente de Girassol/KG", "preco": 5.50, "produtor": "Produtor Z"},
    {"id": 7, "nome": "Beterraba", "preco": 6.50, "produtor": "Produtor XYZ"},
    {"id": 8, "nome": "Tomates", "preco": 0.50, "produtor": "Produtor ZZ"},
    {"id": 9, "nome": "Tomates", "preco": 0.50, "produtor": "Produtor Y"},
    {"id": 10, "nome": "Tomates", "preco": 0.50, "produtor": "Produtor XYZ"}
  ]

  logOutHandler = () => {
    this.props.onLogOut()
  }
  getAllProdutosHandler = () => {
    this.props.onGetAllProdutos()
  }
  navigateToProdutoScreenHandler = () => {
    this.props.onNavigateToProdutoScreen()
  }

  navigateToProduto = () => {
    this.setLoadingModalVisible(true)
    this.navigateToProdutoScreenHandler()
    setTimeout(() => this.props.navigation.navigate("ProdutoScreen"),1)
    this.setLoadingModalVisible(false)

  }
  render() {
    return (
      <Container>
        <Content>
          <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {}}>
            <View style={{ flex: 1, justifyContent: "center" }}>
            </View>
            <View style={{ flex: 1, justifyContent: "center", flexDirection: "row" }}>
              <Spinner/>
            </View>
          </Modal>
          <List  >
            {
              this.props.produtos.map(produto => {
                return(
                  <ListItem avatar key={produto.id} onPress={this.navigateToProduto}>
                    <Left>
                      <Thumbnail source={{ uri: 'https://tudoparasuaempresa.com.br/assets/img/!product-image.jpg' }} />
                    </Left>
                    <Body >
                      <Text >{produto.nome}</Text>
                      <Text note>{produto.produtor}</Text>
                    </Body>
                    <Right>
                      <Text style={styles.money}>R${produto.preco.toFixed(2)}</Text>
                    </Right>
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
  money: {
    fontSize: 17,
    color: 'green',
    fontWeight: 'bold',
  }
});

const mapStateToProps = state => {
  return {
    produtos: produtos,
    screenTitle: state.navigateTo.title
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLogOut: () => dispatch(logOut()),
    onGetAllProdutos: () => dispatch(getAllProdutos()),
    onNavigateToProdutoScreen: () => dispatch(navigateToProdutoScreen())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Produtos);
