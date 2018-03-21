import React from "react";
import { StyleSheet, View } from "react-native";
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
  Text
} from "native-base";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Tabs } from '../config/routes';
import authenticate from '../store/reducers/authentication';

class MainScreen extends React.Component {
  componentDidMount() {
    this.auth()
  }

  componentWillReceiveProps (nextProps) {
    if(nextProps.userStatus === 'isLoggedOut'){
      this.props.navigation.navigate('InitialScreen')
    }
  }

  auth = () => {
    if (this.props.userStatus === 'isLoggedOut'){
      this.props.navigation.navigate('InitialScreen')
    }
  }
  

  render() {
    return (
      <Container>
        <Header >
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Bem Vindo</Title>
          </Body>
          <Right />
        </Header>
          <Tabs/>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>UFPA - Developers {this.props.userStatus}</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const mapStateToTprops = (state) => {
  return {
    userStatus: state.authenticate.userStatus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToTprops, mapDispatchToProps)(MainScreen)