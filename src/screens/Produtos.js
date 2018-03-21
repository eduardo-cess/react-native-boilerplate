import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
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
  Thumbnail
} from "native-base";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increment, decrement, logOut } from "../store/actions";

class Produtos extends Component {
  incrementHandler = () => {
    this.props.onIncrement();
  };
  decrementHandler = () => {
    this.props.onDecrement();
  };
  logOutHandler = () => {
    this.props.onLogOut()
    // this.props.navigation.navigate('InitialScreen')
  }

  render() {
    return (
<Container>
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://tudoparasuaempresa.com.br/assets/img/!product-image.jpg' }} />
              </Left>
              <Body>
                <Text>Tomates</Text>
                <Text note>Produtor X</Text>
              </Body>
              <Right>
                <Text style={styles.money}>R$0,50</Text>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://tudoparasuaempresa.com.br/assets/img/!product-image.jpg' }} />
              </Left>
              <Body>
                <Text>Cheiro Verde</Text>
                <Text note>Produtor X</Text>
              </Body>
              <Right>
                <Text style={styles.money}>R$1,50</Text>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://tudoparasuaempresa.com.br/assets/img/!product-image.jpg' }} />
              </Left>
              <Body>
                <Text>Pepino</Text>
                <Text note>Produtor X</Text>
              </Body>
              <Right>
                <Text style={styles.money}>R$1,50</Text>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://tudoparasuaempresa.com.br/assets/img/!product-image.jpg' }} />
              </Left>
              <Body>
                <Text>Mel</Text>
                <Text note>Produtor X</Text>
              </Body>
              <Right>
                <Text style={styles.money}>R$5,00</Text>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://tudoparasuaempresa.com.br/assets/img/!product-image.jpg' }} />
              </Left>
              <Body>
                <Text>Milho</Text>
                <Text note>Produtor Y</Text>
              </Body>
              <Right>
                <Text style={styles.money}>R$2,00</Text>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://tudoparasuaempresa.com.br/assets/img/!product-image.jpg' }} />
              </Left>
              <Body>
                <Text>Semente de Girassol/KG</Text>
                <Text note>Produtor Z</Text>
              </Body>
              <Right>
                <Text style={styles.money}>R$6,50</Text>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://tudoparasuaempresa.com.br/assets/img/!product-image.jpg' }} />
              </Left>
              <Body>
                <Text>Beterraba</Text>
                <Text note>Produtor X</Text>
              </Body>
              <Right>
                <Text style={styles.money}>R$0,50</Text>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://tudoparasuaempresa.com.br/assets/img/!product-image.jpg' }} />
              </Left>
              <Body>
                <Text>Tomates</Text>
                <Text note>Produtor XYZ</Text>
              </Body>
              <Right>
                <Text style={styles.money}>R$0,45</Text>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://tudoparasuaempresa.com.br/assets/img/!product-image.jpg' }} />
              </Left>
              <Body>
                <Text>Tomates</Text>
                <Text note>Produtor X</Text>
              </Body>
              <Right>
                <Text style={styles.money}>R$0,50</Text>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://tudoparasuaempresa.com.br/assets/img/!product-image.jpg' }} />
              </Left>
              <Body>
                <Text>Tomates</Text>
                <Text note>Produtor X</Text>
              </Body>
              <Right>
                <Text style={styles.money}>R$0,50</Text>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://tudoparasuaempresa.com.br/assets/img/!product-image.jpg' }} />
              </Left>
              <Body>
                <Text>Tomates</Text>
                <Text note>Produtor X</Text>
              </Body>
              <Right>
                <Text style={styles.money}>R$0,50</Text>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://tudoparasuaempresa.com.br/assets/img/!product-image.jpg' }} />
              </Left>
              <Body>
                <Text>Tomates</Text>
                <Text note>Produtor X</Text>
              </Body>
              <Right>
                <Text style={styles.money}>R$0,50</Text>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://tudoparasuaempresa.com.br/assets/img/!product-image.jpg' }} />
              </Left>
              <Body>
                <Text>Tomates</Text>
                <Text note>Produtor X</Text>
              </Body>
              <Right>
                <Text style={styles.money}>R$0,50</Text>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://tudoparasuaempresa.com.br/assets/img/!product-image.jpg' }} />
              </Left>
              <Body>
                <Text>Tomates</Text>
                <Text note>Produtor X</Text>
              </Body>
              <Right>
                <Text style={styles.money}>R$0,50</Text>
              </Right>
            </ListItem>
          </List>

           
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  money: {
    fontSize: 19,
    color: 'green',
  }
});

const mapStateToProps = state => {
  return {
    valor: state.counter.valor
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onLogOut: () => dispatch(logOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Produtos);
