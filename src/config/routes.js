import React from 'react'
import { TabNavigator, StackNavigator, SwitchNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'

import Produtos from '../screens/Produtos'
import Produtores from '../screens/Produtores'
import { primaryColor, secondaryColor } from '../theme/variables/commonColor';
import InitialScreen from '../screens/InitialScreen';
import MainScreen from '../screens/index';

export const Tabs = TabNavigator(
{
    Produtos: {
      screen: Produtos,
      navigationOptions: {
        tabBarLabel: 'Produtos',
      },
    },
    Produtores: {
      screen: Produtores,
      navigationOptions: {
        tabBarLabel: 'Produtores',
      },
    },
}, 
{
    tabBarOptions: {
    style: {
        backgroundColor: secondaryColor,
    },
    }
});

  export const Root = SwitchNavigator({
    Tabs: { screen: MainScreen },
    InitialScreen: { screen: InitialScreen},
  }, 
  {
    mode: 'modal',
    headerMode: 'none',
  });