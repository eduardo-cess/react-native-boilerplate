import React, { Component } from "react";
import { View , StyleSheet} from "react-native";
import { Button, Text, Spinner } from "native-base";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { InitialContent } from "../../config/routes"
class InitialScreen extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { isLoading: false };
  // }

  // logInHandler = () => {
  //   this.setState({ isLoading: true });
  //   this.props.onLogIn();
  //   setTimeout(() => this.props.navigation.navigate("MainContent"), 1)
  // }
  
  signUpScreen = () => {
    this.props.navigation.navigate("CadastroScreen");
  }
  signInScreen = () => {
    this.props.navigation.navigate("LoginEmailScreen");
  }
  render() {
  //   let mainContent = () => {
  //     if (this.state.isLoading === false) {
  //       return (
  //         <Button onPress={this.logInHandler}>
  //           <Text> Login </Text>
  //         </Button>
  //       )
  //     } else {
  //       return (<Spinner />)
  //     }
  //   }

    return (
        <View style={styles.container}>
          <View style={styles.components}>
            <Text>Seja bem vindo</Text>
          </View>
          <View style={styles.components}>
            <Button onPress= {this.signInScreen}> 
              <Text>Entrar</Text>
            </Button>
          </View>
          <View style={styles.components}>
            <Button onPress={this.signUpScreen} > 
              <Text>Cadastrar novo Usuário</Text>
            </Button>
          </View>

      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    userStatus: state.authenticate.userStatus,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogIn: () => dispatch(logIn())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InitialScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  components: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },

});