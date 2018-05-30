import React, { Component } from "react";
import { View, BackHandler, Text, StyleSheet,TouchableWithoutFeedback } from 'react-native'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Header, Content, Item, Form, Input, Icon, Button } from "native-base";
import AppHeader from "../../components/header";
import { signUp } from "../../store/actions";

class Cadastro extends Component {
  constructor(props){
    super(props) 
      this.state = {
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
  }

  validatePassword(e){
    if( this.state.password === this.state.confirmPassword){
      this.props.onSignUp(this.state.fullName, this.state.email, this.state.password)
    }
    else {
      console.log("As senhas não coincidem")
    }
  }

  goBack = () => this.props.navigation.goBack(null);

  render() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return this.goBack();
    });
    return (
      <Container >
        <AppHeader title='Cadastro' leftButtonPress = {this.goBack}/>
        <Content style={{margin: 20}}>
          <Form>
            <Item style={{marginBottom: 20}} >
              <Icon active name="md-person"/>
              <Input 
              placeholder="Seu Nome Ex:(Armando Almeida)"
              autoCapitalize='words'
              autoCorrect={false}
              autoFocus={true}
              keyboardType='default'
              value={this.state.fullName}
              onChangeText ={(text) => this.setState({fullName: text})} /> 
            </Item>
            <Item style={{marginBottom: 20}} >
              <Icon active name="md-mail"/>
              <Input 
              placeholder="Email"
              autoCapitalize='none'
              autoCorrect={false}
              autoFocus={true}
              keyboardType='email-address'
              value={this.state.email}
              onChangeText ={(text) => this.setState({email: text})} /> 
            </Item>
            <Item >
             <Icon active name="md-key"/>
             <Input
              placeholder="Senha"
              autoCapitalize='none'
              autoCorrect = {false}
              secureTextEntry={true} 
              value={this.state.password}
              onChangeText={(text) => this.setState({password: text})}
             /> 
            </Item>
            <Item >
             <Icon active name="md-key"/>
             <Input
              placeholder="Confirmar Senha"
              autoCapitalize='none'
              autoCorrect = {false}
              secureTextEntry={true} 
              value={this.state.confirmPassword}
              onChangeText={(text) => this.setState({confirmPassword: text})}
             /> 
            </Item>
            <Button full style={styles.button}
             onPress={(e) => this.validatePassword(e)}> 
              <Text style={{color:'white'}} >CADASTRAR</Text>
            </Button>
            <TouchableWithoutFeedback onPress={ () => this.props.navigation.navigate('LoginScreen')}>
                <View>
                  <Text style={{fontSize:18, color: 'blue', marginLeft: 200, marginTop:10}} >
                    Acessar conta 
                  </Text>
                </View>
              </TouchableWithoutFeedback>
          </Form>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSignUp : (fullName, email, password) => dispatch(signUp(fullName, email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    borderRadius: 5,
  },
});