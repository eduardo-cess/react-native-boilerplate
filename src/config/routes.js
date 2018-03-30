import React from 'react'
import { TabNavigator, StackNavigator, SwitchNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'

import Produtos from '../screens/Produtos'
import Produtores from '../screens/Produtores'
import { primaryColor, secondaryColor } from '../theme/variables/commonColor';
import InitialScreen from '../screens/InitialScreen';
import MainScreen from '../screens/index';
import LoginScreen from '../screens/login';
import ProdutoScreen from '../screens/ProdutoScreen';

export const ProdutosTab = StackNavigator({
  Produtos: { screen: Produtos},
  ProdutoScreen: { 
    screen: ProdutoScreen,
    navigationOptions: { 
      tabBarVisible: false,
      swipeEnabled: false
     }
   },
},
{
  headerMode: 'none'
});

export const Tabs = TabNavigator(
{
  Produtos: {
    screen: ProdutosTab,
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
  Produtores: { screen: Produtores},
  Login: { screen: LoginScreen},
}, 
{
  // mode: 'modal',
  headerMode: 'screen',
});