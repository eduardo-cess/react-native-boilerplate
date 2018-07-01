import React, { Component } from "react";
import { View, BackHandler, Image, StyleSheet } from 'react-native';
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

class ProdutoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }
  render() {
    const { params } = this.props.navigation.state;
    const produto = params.produto

    return (
      <Container>
        <Content style={{ backgroundColor: "white" }}>
          <Image
            source={ (produto.imagem != null) ? {'uri': produto.imagem} : require('../../static/img/missing-image-640x360.png') }
            style={{ height: 200, width: null, flex: 1 }}
          />

          <View style={{ padding: 15 }}>
            <View style={styles.titleView}>
              <Text style={styles.title}>{produto.nome}</Text>
            </View>
            <View style={styles.priceView}>
              <Text style={styles.price}>R${produto.preco.toFixed(2)}</Text>
              <View style={{ justifyContent: "flex-end" }}>
                <Text > por {produto.tipo.toUpperCase()}</Text>
              </View>
            </View>
            {/* <Form>
              <View style={styles.qtdView}>
                <Text style={{ fontSize: 17 }}>Quantidade: </Text>
                <Picker
                  mode="dropdown"
                  style={{ width: undefined, color: primaryColor }}
                  selectedValue={this.state.selected2}
                  onValueChange={this.onValueChange2.bind(this)}
                >
                  <Picker.Item label="1" value="0" />
                  <Picker.Item label="2" value="1" />
                  <Picker.Item label="3" value="2" />
                  <Picker.Item label="4" value="3" />
                  <Picker.Item label="5" value="4" />
                  <Picker.Item label="Mais..." value="5" />
                </Picker>
              </View>
              <Button style={styles.button} full onPress={() => Toast.show({
                text: 'Item Comprado',
                buttonText: 'Ok'
              })}
              >
                <Text>COMPRAR</Text>
              </Button>
              <Button style={styles.button} full bordered onPress={() => Toast.show({
                text: 'Item adicionado ao carrinho',
                buttonText: 'Ok'
              })}>
                <Text>Adicionar ao carrinho</Text>
              </Button>
            </Form> */}
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
                    <Text style={styles.fontInfo}>Feira X - Cidade Z, Rua X, Entre Rua Y e Rua Z. Bairro X, CEP: 66666-666</Text>
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
            <View style={{ marginTop: 10 }}>
              <Text style={styles.subTitle}>Outros produtos deste vendedor:</Text>
              <Text style={styles.fontInfo}>Em breve...</Text>
            </View>
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
