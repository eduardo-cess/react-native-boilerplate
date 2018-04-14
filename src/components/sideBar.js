import React, { Component } from "react";
import { StyleSheet } from "react-native";
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
  Body
} from "native-base";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logOut } from "../store/actions";

class SideBar extends Component {
  logOutHandler = () => {
    this.props.onLogOut();
  };
  render() {
    return (
      <Content style={{ backgroundColor: "white" }}>
        <Image
          source={{
            uri:
              "https://static.wixstatic.com/media/647c38_179df1cfc5ee4e89ae5443c32a83343f~mv2.png/v1/fill/w_630,h_388,al_c,usm_0.66_1.00_0.01/647c38_179df1cfc5ee4e89ae5443c32a83343f~mv2.png"
          }}
          style={{ height: 200, width: null, flex: 1 }}
        />
        <List>
          <ListItem icon onPress={() => this.props.goToFeirasScreen()}>
            <Left>
              <Icon name="md-heart" style={styles.iconStyle}/>
            </Left>
            <Body>
              <Text style={styles.menuFont}>Feiras</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon name="bluetooth" style={styles.iconStyle}/>
            </Left>
            <Body>
              <Text style={styles.menuFont}>Bluetooth</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon name="settings" style={styles.iconStyle}/>
            </Left>
            <Body>
              <Text style={styles.menuFont}>Configurações</Text>
            </Body>
          </ListItem>
          <ListItem icon onPress={this.logOutHandler}>
            <Left>
              <Icon name="exit" style={styles.iconStyle}/>
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
    fontSize: 15,
    // fontWeight: "bold"
  },
  iconStyle: {
    color: "#616161"
  }
});

const mapStateToProps = state => {
  return {
    userStatus: state.authenticate.userStatus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogOut: () => dispatch(logOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
