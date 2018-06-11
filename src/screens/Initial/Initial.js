import React, { Component } from "react";
import { View , StyleSheet, Image} from "react-native";
import {Container, Button, Text, Spinner, Footer, Content } from "native-base";
import { InitialContent } from "../../config/routes"
import { SecundaryColor} from "../../theme/variables/commonColor"
class InitialScreen extends Component {
  signUpScreen = () => {
    this.props.navigation.navigate("CadastroScreen");
  }
  signInScreen = () => {
    this.props.navigation.navigate("LoginScreen");
  }

  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <Container>
        <Content style={{margin: 30}}>
          <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}} >
            <Image 
              style={styles.image} 
              source={require("../../static/img/icone.png")}/>
            <Text style={{fontSize:19, marginBottom: 50}}>Agricultura Saudável</Text>
          </View>
          <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}} >
            <Button  style={{marginBottom: 30}} full onPress={this.signUpScreen} info> 
              <Text>CADASTRAR</Text>
            </Button>
            <Text style={{fontSize:15, marginBottom:5}}>Você já possui uma conta?</Text>
            <Button full onPress= {this.signInScreen}> 
              <Text>ENTRAR</Text>
            </Button>
          </View>
          </Content>
          <Footer style={{flexDirection: 'column',justifyContent: 'center', alignItems:'center'}} >
            <Text style={{fontSize: 15}}>
              Usando o nosso app você concorda com os 
            </Text>
            <Text style={{fontSize: 15}}>
              Termos de Uso 
            </Text>
          </Footer>
      </Container>
    )
  }
}
export default (InitialScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  components: {
    marginBottom: 30,
  },
  footerText: {
    fontSize:12,
    color: 'white'
  },
  image: {
    height: 200, 
    width: 200,
    borderRadius: 110, 

  },
    button: {
      marginTop: 30,
      borderRadius: 5,
    }
});