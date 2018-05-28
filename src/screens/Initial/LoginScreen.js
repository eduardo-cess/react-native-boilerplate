import React, { Component } from "react";
import { BackHandler, StyleSheet, StatusBar } from 'react-native'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {LOG_IN} from '../../store/actions/index'
import {Form, Button, Text, Toast,TextInput, Item, Input, Icon, Label, Container, Header, Content} from 'native-base'
class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      senha: ''
    }
  }
  placeEmailHandler = val => {
    this.setState({
      email: val
    })
  };
  placeSenhaHandler = val => {
    this.setState({
      senha: val
    })
  };

   signIn = () => {
     console.log(props)
    // this.props.onSignIn(props.email, props.senha)
   }

  render() {
    return (
      <Container>
        <Header/>
        <Content style={{margin: 30,marginTop: 120}}>
          <Form>
            <Item style={{marginBottom: 20}} >
             <Icon active name="md-mail"/>
             <Input 
             placeholder="Email"
             autoCapitalize='none'
             autoCorrect={false}

             value={this.state.email}
             onChange={(event) => this.placeEmailHandler(event.nativeEvent.text)}
             keyboardType={"email-address"}/> 
            </Item>
            <Item >
             <Icon active name="md-key"/>
             <Input secureTextEntry={true} placeholder="Senha" value={this.state.senha}
             onChange={(event) => this.placeSenhaHandler(event.nativeEvent.text)}
             /> 
            </Item>
            <Button full style={styles.button}
            > 
              <Text>ENTRAR</Text>
            </Button>
          </Form>
        </Content>
      </Container>



  // <View style={styles.container}>
  //         <Form>
  //           <Text style={styles.text} >Olá! Para continuar,digite o seu email</Text>
  //           <Item>
  //             <Input 
  //             placeholder='Email'
  //             keyboardType = {'email-address'}
  //             style={{width: 300, borderColor: "white", borderWidth: 1, backgroundColor: 'white'}}
  //             value={this.state.email}
  //             onChange={(event) => this.emailChangeHandler(event.nativeEvent.text)}
  //             />
  //          </Item>
  //             <Button style={styles.button} full onPress={() => Toast.show({
  //               text: 'Login Realizado',
  //               buttonText: 'Esse'
  //             })}>
  //             <Text style = {{fontSize: 17}}>Continuar</Text>
  //             </Button>
  //           </Form>
  //       </View>
      );
    }
  }
  const mapStateToProps = state => {
    return { };
  };
  const mapDispatchToProps = dispatch => {
    return {
      onSignIn: (email, senha) => dispatch(LOG_IN(email, senha))

      // onIncrement: () => dispatch(increment()),
      // onDecrement: () => dispatch(decrement()),
      // onNavigateToMainScreen: () => dispatch(navigateToMainScreen())
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'white'
    },
    button: {
      marginTop: 30,
      borderRadius: 5,
    },
    text: {
      marginBottom: 5,
      fontSize: 25,
      color: 'black',
      width: 300,
      alignItems: 'center'

    }
  
})

