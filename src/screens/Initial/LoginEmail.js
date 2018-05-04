import React, { Component } from "react";
import { View, BackHandler, StyleSheet, StatusBar } from 'react-native'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {Form, Button, Text, Toast,TextInput, Item, Input, Icon, Label} from 'native-base'
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {email:''};
  }

  emailChangeHandler = val => {
    this.setState({
      email: val
    })
  }
  // componentDidMount(){
  //   BackHandler.addEventListener('hardwareBackPress', () => {
  //     this.navigateToMainScreenHandler()
  //   });
  // }

  // navigateToMainScreenHandler = () => {
  //   this.props.onNavigateToMainScreen()
  // }
  // backToMainScreen = () => {
  //   this.props.navigation.goBack()
  //   this.navigateToMainScreenHandler()
  // }
  render() {
    return (
  <View style={styles.container}>
          <Form>
            <Text style={styles.text} >Olá! Para continuar,digite o seu email</Text>
            <Item>
              <Input 
              placeholder='Email'
              keyboardType = {'email-address'}
              style={{width: 300, borderColor: "white", borderWidth: 1, backgroundColor: 'white'}}
              value={this.state.email}
              onChange={(event) => this.emailChangeHandler(event.nativeEvent.text)}
              />
           </Item>
              <Button style={styles.button} full onPress={() => Toast.show({
                text: 'Login Realizado',
                buttonText: 'Esse'
              })}>
              <Text style = {{fontSize: 17}}>Continuar</Text>
              </Button>
            </Form>
        </View>
      );
    }
  }
  const mapStateToProps = state => {
    return {
      // valor: state.counter.valor
    };
  };
  const mapDispatchToProps = dispatch => {
    return {
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
      marginBottom: 5,
      borderRadius: 5,
      width: 300
    },
    text: {
      marginBottom: 5,
      fontSize: 25,
      color: 'black',
      width: 300,
      alignItems: 'center'

    }
  
})

