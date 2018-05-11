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
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { search } from '../store/actions/search';


class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searching: false,
      text: ''
    };
  }

  search = (text) => {
    this.props.onSearch(text)
  }

  searchClose = () => {
    this.setState((prevState, props) => {
      return {searching: false, text: ''};
    });
    this.search('')

  }
  searchOpen = () => {
    this.setState((prevState, props) => {
      return {searching: true};
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
          <Button transparent onPress={() => this.searchOpen()}>
            <Icon name="search" />
          </Button>
        </Right>
      </Header>
    );

    let searchHeader = (
      <Header searchBar rounded>
         <Left>
            <Button transparent onPress={() => this.searchClose()}>
              <Icon name="md-arrow-back" />
            </Button>
         </Left>
        <Right style={{paddingTop: 15, paddingBottom: 15,}}>
          <Item rounded style={{backgroundColor: "white"}}>
            <Input placeholder="Pesquisar" onChangeText={(text) => {this.setState({text}); this.search(text)}}/>
          </Item>
          <Button transparent onPress={() => this.search(this.state.text)}>
            <Icon name="search" />
          </Button>
        </Right>
      </Header>
    );

    let header = this.state.searching === false ? mainHeader : searchHeader;
    
    return <View>{header}</View>;
  }
}

const mapStateToProps = state => {
  return {
    // valor: state.counter.valor
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSearch: text => dispatch(search(text))
    // onIncrement: () => dispatch(increment()),
    // onDecrement: () => dispatch(decrement()),
    // onNavigateToMainScreen: () => dispatch(navigateToMainScreen())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
