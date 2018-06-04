import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {StyleSheet, BackHandler} from "react-native";
import { increment, decrement, navigateToMainScreen } from "../../store/actions";
import { Container, Content, Item, Icon, Input, Form, Button, Text, View } from "native-base";
import { resetPassword } from "../../store/actions";
import AppHeader from "../../components/header";
import * as Yup from 'yup'
import { withFormik } from "formik";


class EsqueceuSenhaScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: ''
    }
  }

  componentWillReceiveProps(props) {
    if (props.error != '') {
      this.state.error = props.error
    }
  }

  sendEmailRecuperarSenha = (email) => {
    this.props.onSendEmailRecuperarSenha(email)
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
         <TagFormResetSenha sendEmailRecuperarSenha = {this.sendEmailRecuperarSenha}/>
         <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center', marginTop: 15}}>
              {this.state.error != '' && <Text style={{color: 'red'}}>{this.state.error}</Text> }
            </View>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    error: state.authenticate.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSendEmailRecuperarSenha : (email) => dispatch(resetPassword(email)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EsqueceuSenhaScreen);

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    borderRadius: 5,
  }
});


const formResetSenha = props => {
  return(
    <Form>
      <Item>
        <Icon active name="md-mail"/>
          <Input 
          placeholder="Email"
          autoCapitalize='none'
          autoCorrect={false}
          autoFocus={true}
          keyboardType='email-address'
          value={props.values.email}
          onChangeText={text => props.setFieldValue('email', text)} />
          {props.errors.email && <Icon  style={{color: 'red'}}name='md-alert'/> }
      </Item>
      <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center', marginTop: 20}}>
        {props.errors.email && <Text style={{color: 'red'}}>{props.errors.email}</Text> }
      </View>
      <Button full style={styles.button}
      onPress={props.handleSubmit}> 
        <Text style={{color:'white'}} >RECUPERAR</Text>
      </Button>
    </Form>
  );
}

const atach = withFormik({
  mapPropsToValues: () => ({email: ''}),
  validationSchema: Yup.object().shape({
    email: Yup.string()
    .email('Digite um e-mail válido')
    .required('Preencha o campo de e-mail')
  }),
  handleSubmit: (values, actions) => {
    actions.props.sendEmailRecuperarSenha(values.email);
  }
});

const TagFormResetSenha = atach(formResetSenha)