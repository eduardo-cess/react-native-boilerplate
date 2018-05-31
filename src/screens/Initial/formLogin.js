import React from 'react'
import { BackHandler, StyleSheet, StatusBar, TouchableWithoutFeedback } from 'react-native'
import { withFormik } from 'formik'
import { Button, Input, Icon, Item, Form, Text, View} from 'native-base'
import * as Yup from 'yup'

const LoginForm = (props) => {
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
        }

          />
          { props.errors.password &&  <Icon  style={{color: 'red'}}name='md-alert'/> } 
      </Item>
      <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center', marginTop: 20}}>
        {props.errors.email && <Text style={{color: 'red'}}>{props.errors.email}</Text> }
        {props.errors.password && <Text style={{color: 'red'}}>{props.errors.password}</Text> }
      </View>
      <Button full style={styles.button}
        onPress={props.handleSubmit}> 
        <Text>ENTRAR</Text>
      </Button>
    </Form>
  );
}

const atach= withFormik({
  mapPropsToValues: () => ({email: '', password: ''}),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('Preencha o campo de e-mail'),
    password: Yup.string()
      .min(6, 'A senha deve conter no mínimo 6 caracteres')
      .required('Preencha o campo de senha'),
  }),
  handleSubmit: (values, {props, setSubmitting}) => {
    props.signIn(values.email, values.password)
    setSubmitting: false
  }
})

export default atach(LoginForm)

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

