import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'

import Produtos from '../screens/Produtos'
import Produtores from '../screens/Produtores'
import { primaryColor, secondaryColor } from '../theme/variables/commonColor';

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

  export const Root = StackNavigator({
    Tabs: { screen: Tabs }
  }, 
  {
    mode: 'modal',
    headerMode: 'none',
  });