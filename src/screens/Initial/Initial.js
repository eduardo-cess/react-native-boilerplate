import React, { Component } from "react";
import { View , StyleSheet, Image} from "react-native";
import {Container, Button, Text, Spinner, Footer } from "native-base";
import { InitialContent } from "../../config/routes"
import { SecundaryColor} from "../../theme/variables/commonColor"
class InitialScreen extends Component {
  signUpScreen = () => {
    this.props.navigation.navigate("CadastroScreen");
  }
  signInScreen = () => {
    this.props.navigation.navigate("LoginScreen");
  }
  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Image 
            style={styles.image} 
            source={require("../../static/img/icone.png")}/>
          <View>
            <Text style={{fontSize:12, marginBottom: 50}}>Agricultura familiar para todos.</Text>
          </View>
          <View style={styles.components}>
            <Button onPress={this.signUpScreen} info> 
              <Text>CADASTRAR</Text>
            </Button>
          </View>
          <View>
            <Text style={{fontSize:12, marginBottom:5}}>Você já possui uma conta?</Text>
          </View>
          <View full bordered>
            <Button onPress= {this.signInScreen}> 
              <Text>ENTRAR</Text>
            </Button>
          </View>
        </View>
        <View style={styles.footer}>
          <Footer>
          <Text style={styles.footerText}>
            {`Usando o nosso app você concorda com os 
              Termos de Uso
            `} 
          </Text>
          </Footer>
        </View>
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
    height: 150, 
    width: 150,
    borderRadius: 90, 
  }
});