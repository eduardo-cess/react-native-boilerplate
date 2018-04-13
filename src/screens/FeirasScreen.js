import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

export class FeirasScreen extends Component {
  render() {
    return (
      <View>
        <Text> prop vsgfsg sd hhsjt jjs jjsyrky</Text>
        <Text> prop vsgfsg sd hhsjt jjs jjsyrky</Text>
        <Text> prop vsgfsg sd hhsjt jjs jjsyrky</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FeirasScreen);
