import React, { Component } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
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
} from "native-base";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logOut, getAllProdutos } from "../../store/actions";
import { primaryColor } from '../../theme/variables/commonColor';

class Produtos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // modalVisible: false
    }
  }

  componentWillMount () {
    this.onGetAllProdutosHandler()
  }
  
  componentDidMount () {
    console.log("produtos",this.props.produtos)

  }

  componentWillUpdate () {
    console.log("produtos 2",this.props.produtos[0])
  }

  logOutHandler = () => {
    this.props.onLogOut()
  }

  onGetAllProdutosHandler = () => {
    this.props.onGetAllProdutos()
  }

  navigate = (produto) => {
    if (this.props.goToPage == null || this.props.goToPage == undefined) {
      console.log(this.props.navigation)
      return this.props.screenProps.rootNavigation.navigate("ProdutoScreen", {produto: produto})
    }
    else
      return this.props.goToPage()
  }

  render() {
    return (
      <ScrollView>
        <List>
          {
            this.props.produtos.map(produto => {
              return (
                <ListItem avatar key={produto.id} onPress={() => this.navigate(produto)}>
                  <Left>
                    <Thumbnail source={ (produto.imagem != null) ? {'uri': produto.imagem} : require('../../static/img/missing-image-640x360.png') } />
                  </Left>
                  <Body >
                    <Text >{produto.nome}</Text>
                    <Text note>de {produto.produtor}</Text>
                  </Body>
                  <Right>
                    <Text style={styles.money}>R${produto.preco.toFixed(2)}</Text>
                    <Text note>por {produto.tipo.toUpperCase()}</Text>
                  </Right>
                </ListItem>
              )
            })
          }
        </List>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  money: {
    fontSize: 17,
    color: primaryColor,
    fontWeight: 'bold',
  }
});

const mapStateToProps = state => {
  return {
    produtos: state.produtos.produtos,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLogOut: () => dispatch(logOut()),
    onGetAllProdutos: () => dispatch(getAllProdutos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Produtos);