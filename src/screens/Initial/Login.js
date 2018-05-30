import React, { Component } from "react";
import { BackHandler, StyleSheet, StatusBar, TouchableWithoutFeedback } from 'react-native'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { MainContent, InitialContent } from "../../config/routes"
import {logIn} from '../../store/actions/index'
import {Form, Button, Text, Toast,TextInput, Item, Input, Icon, Label, Container, Header, Content, View} from 'native-base'
import AppHeader from '../../components/header'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.userIsLoggedIn) {
      this.props.navigation.navigate('MainContent');
    }
  }

  placeUsernameHandler = val => {
    this.setState({
      username: val
    })
  };
  placePasswordHandler = val => {
    this.setState({
      password: val
    })
  };

  signIn = () => {
    this.props.onSignIn(this.state.username, this.state.password)
  };

  cadastroScreen = () => {

  }

  goBack = () => this.props.navigation.goBack(null);

  render() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return this.goBack();
    });
    return (
      <Container>
        <AppHeader title = 'Login' leftButtonPress = {this.goBack}/>
        <Content style={{margin: 20 ,marginTop: 120}}>
          <Form>
            <Item style={{marginBottom: 20}} >
             <Icon active name="md-mail"/>
             <Input 
             placeholder="Email"
             autoCapitalize='none'
             autoCorrect={false}
             autoFocus={true}
             keyboardType='email-address'
             value={this.state.username}
             onChange={(event) => this.placeUsernameHandler(event.nativeEvent.text)} /> 
            </Item>

            <Item >
             <Icon active name="md-key"/>
             <Input
              placeholder="Senha"
              autoCapitalize='none'
              autoCorrect = {false}
              secureTextEntry={true} 
              value={this.state.password}
              onChange={(event) => this.placePasswordHandler(event.nativeEvent.text)}
             /> 
            </Item>
            <Button full style={styles.button}
             onPress={(e) => this.signIn(e)}> 
              <Text>ENTRAR</Text>
            </Button>
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
          </Form>
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

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'white'
    },
    button: {
      marginTop: 25,
      borderRadius: 5,
    }
  
})

