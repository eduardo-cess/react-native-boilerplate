import React, { Component } from "react";
import { BackHandler, StyleSheet, StatusBar, TouchableWithoutFeedback,ActivityIndicator } from 'react-native'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { MainContent, InitialContent } from "../../config/routes"
import {logIn} from '../../store/actions/index'
import AppHeader from '../../components/header'
import { withFormik } from 'formik'
import { Container, Content, Button, Input, Icon, Item, Form, Text, View} from 'native-base'
import * as Yup from 'yup'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      error: ''
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.usesettingsrIsLoggedIn) {
      this.props.navigation.navigate('MainContent');
    }
    if (nextProps.error != '') {
      this.state.error = nextProps.error}
  }

  signIn = (email, password) => {
    this.props.onSignIn(email, password)
  };

  goBack = () => this.props.navigation.goBack(null);

  render() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return this.goBack();
      this.state = {
        submitting: false
      }
    });
    return (
      <Container>
        <AppHeader title = 'Login' leftButtonPress = {this.goBack}/>
        <Content style={{margin: 20 ,marginTop: 120}}>
            <TagFormLogin signIn = {this.signIn}/>
            <View style = {{flex:1, justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'row' }}>
              <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("EsqueceuSenhaScreen")}>
                <Text style={{color: 'blue'}} >Esqueceu sua senha?</Text>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={ () => this.props.navigation.navigate('CadastroScreen')}>
                <Text style={{color: 'blue', marginLeft: 80, marginTop:10}} >
                  Cadastre-se
                </Text>
              </TouchableWithoutFeedback>
            </View>
            <View style = {{flex:1, justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'row'}}>
              {this.state.error != '' && <Text style={{color: 'red' , marginTop: 15}}>{this.state.error}</Text>}
            </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { 
    userIsLoggedIn: state.authenticate.isLoggedIn,
    error: state.authenticate.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSignIn: (username, password) => dispatch(logIn(username, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);


const loginForm = props => {
  return (
    <Form>
      <Item style={{marginBottom: 20}} >
        <Icon active name="md-mail"/>
        <Input 
          placeholder="Email"
          autoCapitalize='none'
          autoCorrect={false}
          autoFocus={true}
          keyboardType='email-address'
          value={props.values.email}
          onChangeText={text => props.setFieldValue('email', text)} 
        /> 
        {props.errors.email && <Icon  style={{color: 'red'}}name='md-alert'/> } 
      </Item>
      <Item >
        <Icon active name="md-key"/>
        <Input
        placeholder="Senha"
        autoCapitalize='none'
        autoCorrect = {false}
        secureTextEntry={true} 
        value={props.values.password}
        onChangeText={text => props.setFieldValue('password', text)
        }/>
        { props.errors.password &&  <Icon  style={{color: 'red'}}name='md-alert'/> } 
      </Item>
      <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center', marginTop: 20}}>
        {props.errors.email && <Text style={{color: 'red'}}>{props.errors.email}</Text> }
        {props.errors.password && <Text style={{color: 'red'}}>{props.errors.password}</Text> }
      </View>
      <Button full style={styles.button}
        onPress={props.handleSubmit}
        > 
        <Text>ENTRAR</Text>
      </Button>
    </Form>
  );
}

const atach= withFormik({
  mapPropsToValues: () => ({email: 'cliente@gmail.comaa', password: 'cliente123', submitting: false}),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('Preencha o campo de e-mail'),
    password: Yup.string()
      .min(6, 'A senha deve conter no mínimo 6 caracteres')
      .required('Preencha o campo de senha'),
  }),
  handleSubmit: (values, actions) => {
    values.submitting= true
    actions.props.signIn(values.email, values.password)
  }
})

const TagFormLogin = atach(loginForm)

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

