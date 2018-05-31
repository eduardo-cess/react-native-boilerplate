import React, { Component } from "react";
import { BackHandler, StyleSheet, StatusBar, TouchableWithoutFeedback } from 'react-native'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { MainContent, InitialContent } from "../../config/routes"
import {logIn} from '../../store/actions/index'
import {Container, Content,View, Text} from 'native-base'
import AppHeader from '../../components/header'
import LoginForm from "./formLogin";


class Login extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.userIsLoggedIn) {
      this.props.navigation.navigate('MainContent');
    }
  }

  signIn = (email, password) => {
    this.props.onSignIn(email, password)
  };

  goBack = () => this.props.navigation.goBack(null);

  render() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return this.goBack();
    });
    return (
      <Container>
        <AppHeader title = 'Login' leftButtonPress = {this.goBack}/>
        <Content style={{margin: 20 ,marginTop: 120}}>
            <LoginForm signIn = {this.signIn}/>
            <View style = {{flex:1, justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'row' }} >
              <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("EsqueceuSenhaScreen")}>
                <Text style={{color: 'blue'}} >Esqueceu sua senha?</Text>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={ () => this.props.navigation.navigate('CadastroScreen')}>
                <Text style={{color: 'blue', marginLeft: 80, marginTop:10}} >
                  Cadastre-se
                </Text>
              </TouchableWithoutFeedback>
            </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { 
    userIsLoggedIn: state.authenticate.isLoggedIn
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSignIn: (username, password) => dispatch(logIn(username, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
