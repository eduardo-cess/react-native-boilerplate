import React, { Component } from "react";
import { View, BackHandler, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increment, decrement, navigateToMainScreen } from "../../store/actions";
import {
  Container,
  Content,
  Text,
  Form,
  Picker,
  Icon,
  Button,
  Toast,
  List,
  ListItem,
  Left,
  Body
} from 'native-base';
import { primaryColor } from '../../theme/variables/commonColor';
import { getFeiraFirebase } from "../../store/functions/feira";
import openMap from 'react-native-open-maps';

class ProdutoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined,
      feira: null
    };
  }

  async componentWillMount() {
    let feira = await this.getFeiraFromProduto()
    this.setState({feira: feira})
  }

  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }

  formatPreco = (preco) => {
    let formatedPreco = preco.replace(',','.')
    return parseFloat(formatedPreco).toFixed(2)
  }

  getFeiraFromProduto = async () => {
    const idFeira = Object.keys(this.props.navigation.state.params.produto.feiras)[0]
    let feira = await getFeiraFirebase(idFeira)
    return feira
  }

  goToFeira = () => {
    openMap(this.state.feira.localizacao);
  }

  render() {
    const { params } = this.props.navigation.state;
    const produto = params.produto
    let feira = this.state.feira

    return (
      <Container>
        <Content style={{ backgroundColor: "white" }}>
          <Image
            source={ (produto.imagem != '-') ? {'uri': produto.imagem} : require('../../static/img/missing-image-640x360.png') }
            style={{ height: 200, width: null, flex: 1 }}
          />

          <View style={{ padding: 15 }}>
            <View style={styles.titleView}>
              <Text style={styles.title}>{produto.nome}</Text>
            </View>
            <View style={styles.priceView}>
              <Text style={styles.price}>R${this.formatPreco(produto.preco)}</Text>
              <View style={{ justifyContent: "flex-end" }}>
                <Text > por {produto.tipo.toUpperCase()}</Text>
              </View>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.subTitle}>Informações sobre Vendedor :</Text>
              <List  >
                <ListItem avatar>
                  <Left>
                    <Icon name="person" style={styles.icon} />
                  </Left>
                  <Body >
                    <Text style={styles.fontInfo}>{produto.produtor.nome}</Text>
                  </Body>
                </ListItem>
                <ListItem avatar>
                  <Left>
                    <Icon name="pin" style={styles.icon} />
                  </Left>
                  <Body >
                    <Text style={styles.font}>Feira: {(feira!=null)?feira.nome:'-'}</Text>
                    <Text style={styles.font}>Rua: {(feira!=null)?feira.endereco.rua:'-'}</Text>
                    <Text style={styles.font}>Bairro: {(feira!=null)?feira.endereco.bairro:'-'}</Text>
                    <Text style={styles.font}>Complemento: {(feira!=null)?feira.endereco.complemento:'-'}</Text>
                    <TouchableOpacity onPress={()=>this.goToFeira()}>
                      <Text style={{color: 'blue', fontWeight: 'bold',}}>Veja no Mapa</Text>
                    </TouchableOpacity>
                  </Body>
                </ListItem>
              </List>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.subTitle}>Detalhes do Produto:</Text>
              <List  >
                <ListItem avatar>
                  <Left>
                    <Icon name="information-circle" style={styles.icon} />
                  </Left>
                  <Body >
                    <Text style={styles.fontInfo}>{(produto.detalhes == '-') ? 'Nenhum detalhe fornecido' : produto.detalhes}</Text>
                  </Body>
                </ListItem>
              </List>
            </View>
            {/* <View style={{ marginTop: 10 }}>
              <Text style={styles.subTitle}>Outros produtos deste vendedor:</Text>
              <Text style={styles.fontInfo}>Em breve...</Text>
            </View> */}
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  titleView: {
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingBottom: 5,
  },
  title: {
    fontSize: 27
  },
  subTitle: {
    fontSize: 17
  },
  priceView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingBottom: 10,
  },
  qtdView: {
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 10,
    backgroundColor: "#F5F5F5",
    borderRadius: 5
  },
  price: {
    fontSize: 27,
    color: primaryColor
  },
  button: {
    marginBottom: 5,
    borderRadius: 5
  },
  fontInfo: {
    color: "#343a36",
    textAlign: "justify"
  },
  icon: {
    color: primaryColor
  }
})
const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProdutoScreen);
