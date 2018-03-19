import React, { Component } from "react";
import { View } from "react-native";
import { Button, Text } from "native-base";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import authenticate from "../store/reducers/authentication";
// import counter from "../store/reducers/counter";
import { increment, logIn } from '../store/actions';
// import { logIn } from '../store/actions/authentication';

class InitialScreen extends Component {
    logInHandler = () => {
      this.props.onLogIn();
      this.props.navigation.navigate("Tabs");
    }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={{ flex: 1, justifyContent: "center" }}>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", flexDirection: "row" }}
        >
          <Button onPress={this.logInHandler}>
            <Text> Login </Text>
          </Button>
        </View>
      </View>
    );
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
    onLogIn: () => dispatch(logIn()),
    inc: () => dispatch(increment)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InitialScreen);
