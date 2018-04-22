import React, { Component } from "react";
import { TabNavigator } from 'react-navigation';
import ProdutosScreen from './Produtos'
import FeirasScreen from './Feiras'
import ProdutoresScreen from './Produtores'
import { primaryColor } from '../../theme/variables/commonColor';
import { MainTabs } from "../../config/routes";
import { DrawerLayoutAndroid } from 'react-native';
import SideBar from "../../components/sideBar";


class MainTabsScreen extends Component {
  render() {
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => (
          <SideBar goToMainScreen={() => this.props.navigation.navigate("MainTabs")} />
        )}
        ref={"DRAWER_REF"}
      >
        <MainTabs screenProps={{ rootNavigation: this.props.navigation }} />
      </DrawerLayoutAndroid>

    )
  }
};

export default MainTabsScreen;
