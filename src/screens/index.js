import React from "react";
import { StyleSheet, View, DrawerLayoutAndroid } from "react-native";
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
  Text,
  Drawer
} from "native-base";

import { NavigationActions } from "react-navigation";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Tabs, DrawerNavigation } from "../config/routes";

import SideBar from "../components/sideBar";
import AppHeader from "../components/header";

import Produtos from "./Produtos";

import authenticate from "../store/reducers/authentication";
import navigateTo from "../store/reducers";

class MainScreen extends React.Component {
  componentDidMount() {
    this.auth();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.userStatus === "isLoggedOut") {
      this.props.navigation.navigate("InitialScreen");
    }
  }

  auth = () => {
    if (this.props.userStatus === "isLoggedOut") {
      this.props.navigation.navigate("InitialScreen");
    }
  };

  openDrawer = () => {
    return this.refs["DRAWER_REF"].openDrawer();
  };

  renderHeader = () => {
    if (this.props.screenTitle === "Bem Vindo")
      return (
        <AppHeader
          leftButtonPress={this.openDrawer}
          title={this.props.screenTitle}
        />
      );
  };

  render() {
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => (
          <SideBar
            goToFeirasScreen={() =>
              this.props.navigation.navigate("FeirasScreen")
            }
          />
        )}
        ref={"DRAWER_REF"}
      >
        <Container>
          {this.renderHeader()}
          <Tabs />
          <Footer>
            <FooterTab>
              <Button full>
                <Text style={{ color: "white" }}>
                  UFPA - Developers - {this.props.screenTitle}
                </Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </DrawerLayoutAndroid>
    );
  }
}

const mapStateToTprops = state => {
  return {
    userStatus: state.authenticate.userStatus,
    screenTitle: state.navigateTo.title
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToTprops, mapDispatchToProps)(MainScreen);
