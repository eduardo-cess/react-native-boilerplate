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
  
  componentWillUpdate (nextProps) {
    console.log("produtos 2",this.props.produtos[0])
    console.log(nextProps.searchText)
    // alert(this.props.searchText)
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
      return this.props.goToPage().navigate('ProdutoScreen', {produto: produto})
  }

  render() {
    let filteredProdutos = this.props.produtos.filter(produto => {
      return produto.nome.search(this.props.searchText) != -1
    })
    return (
      <ScrollView>
        <List>
          {
            filteredProdutos.map(produto => {
              return (
                <ListItem avatar key={produto.id} onPress={() => this.navigate(produto)}>
                  <Left>
                    <Thumbnail source={ (produto.imagem != null) ? {'uri': produto.imagem} : require('../../static/img/missing-image-640x360.png') } />
                  </Left>
                  <Body >
                    <Text >{produto.nome}</Text>
                    <Text note>de {produto.produtor.nome}</Text>
                  </Body>
                  <Right>
                    <Text style={styles.money}>R${produto.preco}</Text>
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
    searchText: state.search.text
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLogOut: () => dispatch(logOut()),
    onGetAllProdutos: () => dispatch(getAllProdutos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Produtos);