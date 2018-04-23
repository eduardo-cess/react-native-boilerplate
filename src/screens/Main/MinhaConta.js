import React, { Component } from "react";
import { View, BackHandler, Text, StyleSheet, Image } from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increment, decrement, navigateToMainScreen } from "../../store/actions";
import {
  Content,
  Separator,
  ListItem,
  List,
  Fab,
  Icon,
  Button,
  Toast,
  Body,
  Left,
  Right
} from 'native-base';
import { primaryColor } from '../../theme/variables/commonColor';

class MinhaContaScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // active: 'false'
    };
  }

  render() {
    return (
      <Content style={{ backgroundColor: "white" }}>
        {/* <List> */}
        <View >
          <Image
            source={require("../../static/img/goku-480x350.jpg")}
            style={{ height: 250, flex: 1, width: null }}
          />
          <Fab
            active={this.state.active}
            containerStyle={{}}
            style={{ backgroundColor: primaryColor }}
            position="bottomRight"
            onPress={() => Toast.show({ text: 'Editar Foto', buttonText: 'OK', position: 'top' })}>
            <Icon name="create" />
          </Fab>
        </View>
        <Separator style={styles.separator}>
          <Text style={styles.separatorText}>Dados da Conta</Text>
        </Separator>
        <ListItem >
          <Body>
            <View>
              <Text style={styles.title}>Nome e Sobrenome</Text>
              <Text style={styles.content}>Carlos Santiago</Text>
            </View>
          </Body>
          <Right>
            <Button transparent icon>
              <Icon name="create" />
            </Button>
          </Right>
        </ListItem>
        <ListItem>
          <Body>
            <View>
              <Text style={styles.title}>Email</Text>
              <Text style={styles.content}>carlos@email.com</Text>
            </View>

          </Body>
          <Right>
            <Button transparent icon>
              <Icon name="create" />
            </Button>
          </Right>
        </ListItem>
        <ListItem last>
          <Body>
            <View>
              <Text style={styles.title}>Telefone</Text>
              <Text style={styles.content}>(91) 99999-9999</Text>
            </View>
          </Body>
          <Right>
            <Button transparent icon>
              <Icon name="create" />
            </Button>
          </Right>
        </ListItem>
        <Separator style={styles.separator}>
          <Text style={styles.separatorText}>Endereço</Text>
        </Separator>
        <ListItem>
          <Body>
            <View>
              <Text style={styles.title}>Rua XXXXX, 78</Text>
              <Text style={styles.content}>66666-666 - Belém - Pará</Text>
            </View>
          </Body>
          <Right>
            <Button transparent icon>
              <Icon name="create" />
            </Button>
          </Right>
        </ListItem>

        {/* </List> */}
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "bold"
  },
  content: {
    fontSize: 14,
  },
  separator: {
    // backgroundColor: "gray",
    paddingBottom: 30,
    paddingTop: 30,
  },
  separatorText: {
    fontSize: 16,
    // color: "white"
  }
})
const mapStateToProps = state => {
  return {
    // valor: state.counter.valor
  };
};
const mapDispatchToProps = dispatch => {
  return {
    // onIncrement: () => dispatch(increment()),
    // onDecrement: () => dispatch(decrement()),
    // onNavigateToMainScreen: () => dispatch(navigateToMainScreen())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MinhaContaScreen);