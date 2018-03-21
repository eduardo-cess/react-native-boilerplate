
import React, {Component} from "react";
import {Container, Header, Content, Form, Item, Input, Label, Button, Text} from 'native-base';

export default class LoginScreen extends Component {
  render () {
    return (
      <Container style={{flex: 1, alignContent: 'center'}} >
        <Header/>
        <Content style={{marginTop: '30%'}}>
          <Image source={require('./../static/img/logo_planta.png')} />
          <Form>
            <Item floatingLabel>
              <Label>Email</Label> 
              <Input style={{paddingLeft: 10}} keyboardType='email-address'/>
            </Item>
            <Item floatingLabel last>
              <Label>Senha</Label> 
              <Input style={{paddingLeft: 10}} secureTextEntry />
            </Item>
          </Form>
          <Button style={{marginTop: '10%' , marginLeft: '40%'}} primary><Text> Entrar </Text></Button>
        </Content>
      </Container>
        
    );
  }
}