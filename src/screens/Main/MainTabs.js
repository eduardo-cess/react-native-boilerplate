import React, { Component } from "react";
import { TabNavigator } from 'react-navigation';
import ProdutosScreen from './Produtos'
import FeirasScreen from './Feiras'
import ProdutoresScreen from './Produtores'
import { primaryColor } from '../../theme/variables/commonColor';
import { MainTabs } from "../../config/routes";
import { DrawerLayoutAndroid, View, TouchableHighlight } from 'react-native';
import SideBar from "../../components/sideBar";
import { Button, Icon, Text } from 'native-base';
import AppHeader from '../../components/header';


class MainTabsScreen extends Component {
  constructor() {
    super();
    this.openDrawer = this.openDrawer.bind(this);
  }

  static navigationOptions = {
    header: null
  };

  openDrawer() {
    this.drawer.openDrawer();
  }

  render() {
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => (
          <SideBar goToMainScreen={() => this.props.navigation.navigate("MainTabs")} />
        )}
        ref={(_drawer) => this.drawer = _drawer}
      >
        <AppHeader title="Bem Vindo" leftButtonPress={() => this.openDrawer()} />
        <MainTabs screenProps={{ rootNavigation: this.props.navigation }} />
      </DrawerLayoutAndroid>

    )
  }
};

export default MainTabsScreen;
