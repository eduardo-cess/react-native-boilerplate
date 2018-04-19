import React, { Component } from "react";
import { View, Text } from "react-native";
import { Header, Body, Left, Button, Icon, Right, Title, Drawer } from "native-base";

class AppHeader extends Component {
  render() {
    return (
      <Header noShadow hasTabs>
        <Left>
          <Button transparent onPress={() => this.props.leftButtonPress()}>
            <Icon name={(this.props.title === 'Bem Vindo') ? "menu" : "md-arrow-back"} />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}

export default AppHeader;
