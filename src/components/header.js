import React, { Component } from "react";
import { View, Text } from "react-native";
import {
  Header,
  Body,
  Left,
  Button,
  Icon,
  Right,
  Title,
  Drawer,
  Item,
  Input
} from "native-base";

class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searching: false
    };
  }

  search = () => {
    this.setState((prevState, props) => {
      return {searching: !prevState.searching};
    });
  }

  render() {
    let mainHeader = (
      <Header noShadow hasTabs>
        <Left>
          <Button transparent onPress={() => this.props.leftButtonPress()}>
            <Icon
              name={this.props.title === "Bem Vindo" ? "menu" : "md-arrow-back"}
            />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => this.search()}>
            <Icon name="search" />
          </Button>
        </Right>
      </Header>
    );

    let searchHeader = (
      <Header searchBar rounded>
         <Left>
            <Button transparent onPress={() => this.search()}>
              <Icon name="md-arrow-back" />
            </Button>
         </Left>
        <Right style={{paddingTop: 15, paddingBottom: 15,}}>
          <Item rounded style={{backgroundColor: "white"}}>
            <Input placeholder="Pesquisar" />
          </Item>
          <Button transparent onPress={() => this.search()}>
            <Icon name="search" />
          </Button>
        </Right>
      </Header>
    );

    let header = this.state.searching === false ? mainHeader : searchHeader;
    
    return <View>{header}</View>;
  }
}

export default AppHeader;
