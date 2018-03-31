import React, { Component } from "react";
import { View } from "react-native";
import { Button, Text, Spinner } from "native-base";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increment, logIn } from '../store/actions';

class InitialScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: false};
  }

  logInHandler = () => {
    this.setState({ isLoading: true });
    this.props.onLogIn();
    setTimeout(()=>this.props.navigation.navigate("Tabs"), 1) 
  }
  
  render() {
    let mainContent = () => {
      if (this.state.isLoading === false){
        return(
          <Button onPress={this.logInHandler}>
            <Text> Login </Text>
          </Button>
        )
      } else {
        return (<Spinner/>)
      }
    }

    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        
      </View>
      <View
        style={{ flex: 1, justifyContent: "center", flexDirection: "row" }}
      >
      {mainContent()}
      </View>
    </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    userStatus: state.authenticate.userStatus,
    valor: state.counter.valor
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogIn: () => dispatch(logIn())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InitialScreen);
