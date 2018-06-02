import React, { Component } from "react";
import { View, BackHandler, Text, StyleSheet,TouchableWithoutFeedback } from 'react-native'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Header, Content, Item, Form, Input, Icon, Button } from "native-base";
import AppHeader from "../../components/header";
import { signUp } from "../../store/actions";
import { withFormik } from 'formik'
import * as Yup from 'yup'

class Cadastro extends Component {

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
          <TagFormCadastro/>
          <TouchableWithoutFeedback onPress={ () => this.props.navigation.navigate('LoginScreen')}>
              <View>
                <Text style={{fontSize:18, color: 'blue', marginLeft: 200, marginTop:10}} >
                  Acessar conta 
                </Text>
              </View>
            </TouchableWithoutFeedback>
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

const formCadastro = props => {
  const {
    values,
    touched,
    dirty,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    setFieldValue,
    setFieldTouched,
    isSubmitting,
  } = props;
  return(
    <Form>
      <Item style={{marginBottom: 20}} >
        <Icon active name="md-person"/>
        <Input 
        placeholder="Seu Nome Ex:(Armando Almeida)"
        autoCapitalize='words'
        autoCorrect={false}
        autoFocus={true}
        onBlur={setFieldTouched}
        keyboardType='default'
        value={props.values.fullName}
        onChangeText={text => props.setFieldValue('fullName', text)} 
        /> 
        {props.errors.fullName && touched.fullName &&  <Icon  style={{color: 'red'}}name='md-alert'/> } 
      </Item>
      <Item style={{marginBottom: 20}} >
        <Icon active name="md-mail"/>
        <Input 
        placeholder="Email"
        autoCapitalize='none'
        autoCorrect={false}
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
        onChangeText={text => props.setFieldValue('password', text)} 
        /> 
        {props.errors.password && <Icon  style={{color: 'red'}}name='md-alert'/> }
      </Item>
      <Item >
        <Icon active name="md-key"/>
        <Input
        placeholder="Confirmar Senha"
        autoCapitalize='none'
        autoCorrect = {false}
        secureTextEntry={true} 
        value={props.values.confirmPassword}
        onChangeText={text => props.setFieldValue('confirmPassword', text)} 
        /> 
        {props.errors.confirmPassword && <Icon  style={{color: 'red'}}name='md-alert'/> }
      </Item>
      <Button full style={styles.button}
        onPress={(e) => this.validatePassword(e)}> 
        <Text style={{color:'white'}} >CADASTRAR</Text>
      </Button>
    </Form>
  );
}

const atach= withFormik({
  mapPropsToValues: () => ({fullName:'', email: '', password: '', confirmPassword: ''}),
  validationSchema: Yup.object().shape({
    fullName: Yup.string()
      .min(6, 'O nome deve conter no mínimo 6 caracteres')
      .required('Preencha o campo de Nome'),
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('Preencha o campo de e-mail'),
    password: Yup.string()
      .min(6, 'A senha deve conter no mínimo 6 caracteres')
      .required('Preencha o campo de senha'),
    confirmPassword: Yup.string()
      .min(6, 'A senha deve conter no mínimo 6 caracteres')
      .required('Preencha o campo de senha'),
  }),
  handleSubmit: (values, {props, setSubmitting}) => {
    props.signIn(values.email, values.password)
    setSubmitting: false
  }
})

const TagFormCadastro = atach(formCadastro)