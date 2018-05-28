import React, { Component } from "react";
import { BackHandler, StyleSheet, StatusBar } from 'react-native'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { MainContent } from "../../config/routes"
import {logIn} from '../../store/actions/index'
import {Form, Button, Text, Toast,TextInput, Item, Input, Icon, Label, Container, Header, Content} from 'native-base'
class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log('componeteWill', nextProps)
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

