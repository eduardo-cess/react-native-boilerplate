import React from "react";
import {
  TabNavigator,
  StackNavigator,
  SwitchNavigator
} from "react-navigation";
import { Button, Icon, Text } from 'native-base';

import FeirasScreen from '../screens/Main/Feiras'
import MainTabsScreen from '../screens/Main/MainTabs';
import FeiraScreen from '../screens/Main/Feira'
import MainScreen from '../screens/Main/Main'
import ProdutoScreen from '../screens/Main/Produto'
import ProdutosScreen from '../screens/Main/Produtos'
import ProdutorScreen from '../screens/Main/Produtor'
import ProdutoresScreen from '../screens/Main/Produtores'
import MinhaContaScreen from '../screens/Main/MinhaConta'

import CadastroScreen from '../screens/Initial/Cadastro'
import EsqueceuSenhaScreen from '../screens/Initial/EsqueceuSenha'
import InitialScreen from '../screens/Initial/Initial'
import LoginScreen from '../screens/Initial/Login'
import SplashScreen from '../screens/Initial/Splash' 

import { primaryColor } from '../theme/variables/commonColor';


export const MainTabs = TabNavigator(
  {
    ProdutosScreen: {
      screen: ProdutosScreen,
      navigationOptions: {
        tabBarLabel: "Produtos"
      }
    },
    FeirasScreen: {
      screen: FeirasScreen,
      navigationOptions: {
        tabBarLabel: "Feiras"
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: primaryColor
      }
    }
  }
);

export const FeiraContent = StackNavigator({
  FeiraScreen: {
    screen: FeiraScreen,
    navigationOptions: {
      headerTitle: 'Feira',
    }
  },
  ProdutosScreen: {
    screen: ProdutosScreen,
  },
  ProdutoScreen: {
    screen: ProdutoScreen,
    navigationOptions: {
      headerTitle: 'Produto',
    }
  },
},
  {
    headerMode: "none"
  })

export const MainContent = StackNavigator(
  {
    MainTabs: {
      screen: MainTabsScreen,
    },
    FeiraScreen: {
      screen: FeiraContent,
      navigationOptions: {
        headerTitle: 'Feira',
      }
    },
    ProdutoScreen: {
      screen: ProdutoScreen,
      navigationOptions: {
        headerTitle: 'Produto',
      }
    },
    ProdutorScreen: {
      screen: ProdutorScreen,
      navigationOptions: {
        headerTitle: 'Produtor',
      }
    },
    MinhaContaScreen: {
      screen: MinhaContaScreen,
      navigationOptions: {
        headerTitle: 'Minha Conta',
      }
    },
  },
  {
    headerMode: "float",
    headerTransitionPreset: "uikit",
    navigationOptions: {
      headerTitleStyle: {
        color: '#FFF'
      },
      headerStyle: {
        backgroundColor: primaryColor
      },
      headerBackTitle: null,
      headerTintColor: '#FFF',
    }
  }
);

export const InitialContent = StackNavigator(
  {
    InitialScreen: { screen: InitialScreen },
    LoginScreen: { screen: LoginScreen },
    SplashScreen: { screen: SplashScreen},
    CadastroScreen: { screen: CadastroScreen },
    EsqueceuSenhaScreen: { screen: EsqueceuSenhaScreen },
  },
  {
    headerMode: "none"
  }
);

export const Root = SwitchNavigator(
  {
    MainContent: { screen: MainScreen },
    InitialContent: { screen: InitialContent }
  },
  {
    headerMode: "none"
  }
);
