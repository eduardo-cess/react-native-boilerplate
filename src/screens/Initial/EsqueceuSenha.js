import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {StyleSheet, BackHandler} from "react-native";
import { increment, decrement, navigateToMainScreen } from "../../store/actions";
import { Container, Content, Item, Icon, Input, Form, Button, Text } from "native-base";
import { resetPassword } from "../../store/actions";
import AppHeader from "../../components/header";

class EsqueceuSenhaScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: ''
    }
  }

  sendEmailRecuperarSenha = () => {
    this.props.onSendEmailRecuperarSenha(this.state.email)
  }

  goBack = () => this.props.navigation.goBack(null);

  render() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return this.goBack();
    });
    return (
      <Container>
        <AppHeader title="Recuperar Senha" leftButtonPress = {this.goBack}/>
        <Content style={{margin:20}}>
          <Form>
            <Item>
              <Icon active name="md-mail"/>
                <Input 
                placeholder="Email"
                autoCapitalize='none'
                autoCorrect={false}
                autoFocus={true}
                keyboardType='email-address'
                value={this.state.email}
                onChange={(event) => this.placeUsernameHandler(event.nativeEvent.text)} />
            </Item>
            <Button full style={styles.button}
             onPress={(e) => this.sendEmailRecuperarSenha()}> 
              <Text style={{color:'white'}} >RECUPERAR</Text>
            </Button>
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
    onSendEmailRecuperarSenha : (email) => dispatch(resetPassword(email))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EsqueceuSenhaScreen);

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    borderRadius: 5,
  }
});