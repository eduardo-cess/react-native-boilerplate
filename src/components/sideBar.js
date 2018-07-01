import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Image } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Left,
  Right,
  Icon,
  Switch,
  Body,
  Thumbnail
} from "native-base";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logOut } from "../store/actions";
import { primaryColor } from '../theme/variables/commonColor';

class SideBar extends Component {
  logOutHandler = () => {
    this.props.onLogOut();
  };
  render() {
    let user = this.props.user
    console.log(user)
    return (
      <Content style={{ backgroundColor: "white" }}>
        <TouchableOpacity 
        style={{ height: 123, width: null, flex: 1, backgroundColor: primaryColor, flexDirection: 'row', justifyContent: 'space-evenly', }}
        onPress={this.props.goToMinhaContaScreen}>
          {/* <View style={{ alignItems: "center", justifyContent: 'center' }}>
            <Thumbnail
              source={ (user.imagem != "-") ? {'uri': user.imagem} : require('../static/img/user-256.png') }
              style={{ height: 65, width: 65, }}
            />
          </View> */}
          <View style={{ justifyContent: 'center' }}>
            <Text style={{ color: "white", fontSize: 23, fontFamily: 'sans-serif' }}>Bem Vindo!</Text>
            {/* <Text style={{ color: "white", fontSize: 15 }}>{user.email}</Text> */}
          </View>
        </TouchableOpacity>
        <List >
          {/* <ListItem icon onPress={this.props.goToMinhaContaScreen}>
            <Left>
              <Icon name="person" style={styles.icon} />
            </Left>
            <Body>
              <Text style={styles.menuFont}>Minha conta</Text>
            </Body>
          </ListItem> */}
          <ListItem icon>
            <Left>
              <Icon name="settings" style={styles.icon} />
            </Left>
            <Body>
              <Text style={styles.menuFont}>Configurações</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon name="share" style={styles.icon} />
            </Left>
            <Body>
              <Text style={styles.menuFont}>Compartilhe</Text>
            </Body>
          </ListItem>
          <ListItem icon onPress={this.logOutHandler}>
            <Left>
              <Icon name="exit" style={styles.icon} />
            </Left>
            <Body>
              <Text style={styles.menuFont}>Sair</Text>
            </Body>
          </ListItem>
        </List>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  menuFont: {
    fontSize: 16,
    // fontWeight: "bold"
  },
  icon: {
    color: "#616161"
  }
});

const mapStateToProps = state => {
  return {
    userStatus: state.authenticate.userStatus,
    user: state.user.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogOut: () => dispatch(logOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
