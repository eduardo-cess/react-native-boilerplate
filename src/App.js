import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from "native-base";
import { Root, Tabs } from './config/routes';

export default class AnatomyExample extends React.Component {
  render() {
    return (
      <Container>
        <Header >
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Bem Vindo</Title>
          </Body>
          <Right />
        </Header>
          <Root/>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>UFPA - Developers</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
