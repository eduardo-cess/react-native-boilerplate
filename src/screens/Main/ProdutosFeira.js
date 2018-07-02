import React, { Component } from "react";
import { View, StyleSheet, ScrollView, Modal, Image, AsyncStorage } from "react-native";
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
  Form,
  Item,
  Label,
  Input,
  Fab,
  Picker,
} from "native-base";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logOut, getAllProdutos, addProduto, getAllProdutosFromProdutor } from "../../store/actions";
import { primaryColor, secondaryColor } from '../../theme/variables/commonColor';

class ProdutosFeiraScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newProduct: false,
      nome: '',
      preco: '',
      tipo: 'UNIDADE',
      detalhes: '',
      newProductImage: null,
      uploadingImage: false
    }
  }

  componentWillMount () {
    this.onGetAllProdutosHandler()
    
  }

  onGetAllProdutosHandler = async () => {
    await this.props.onGetAllProdutos()
  }

  navigate = (produto) => {
    return this.props.goToPage().navigate("ProdutoScreen", {produto: produto})
  }

  render() {
    let filteredProdutos = this.props.produtos.filter(produto => {
      if(produto.feiras != undefined && produto.feiras[this.props.currentFeira.id] == true)
        return produto
    })
    console.log(this.props.produtos)
    return (
      <ScrollView>
        {/* <Button 
        block style={{backgroundColor: "#FDD835"}} 
        onPress={()=>this.props.navigation.navigate('AdicionarProdutoFeiraScreen')}
        >
          <Text>ADICIONAR/REMOVER PRODUTO</Text>
        </Button> */}
        <List>
          {
            filteredProdutos.map(produto => {
              return (
                <ListItem avatar key={produto.id} 
                onPress={() => this.navigate(produto)}>
                  <Left>
                    <Thumbnail source={ (produto.imagem != '-') ? {'uri': produto.imagem} : require('../../static/img/missing-image-640x360.png') } />
                  </Left>
                  <Body >
                    <Text >{produto.nome}</Text>
                    <Text note>de {produto.produtor.nome}</Text>
                  </Body>
                  <Right>
                    <Text style={styles.money}>R${parseFloat(produto.preco).toFixed(2)}</Text>
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
  },
  title: {
    fontSize: 16,
    fontWeight: "bold"
  },
  content: {
    fontSize: 14,
  },
  separator: {
    paddingBottom: 30,
    paddingTop: 30,
  },
  separatorText: {
    fontSize: 16,
  },
  modal: {
    backgroundColor: 'rgba(0,0,0,0.7)'
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  qtdView: {
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    margin: 10,
    backgroundColor: "#F5F5F5",
    borderRadius: 5
  },
});

const mapStateToProps = state => {
  return {
    produtos: state.produtos.produtos,
    searchText: state.search.text,
    user: state.user.user,
    currentFeira: state.feiras.currentFeira
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLogOut: () => dispatch(logOut()),
    onGetAllProdutos: () => dispatch(getAllProdutos()),
    addProduto: (produto) => dispatch(addProduto(produto))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProdutosFeiraScreen);