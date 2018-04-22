import React from "react";
// import { Text } from "react-native";
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
import CadastroScreen from '../screens/Initial/Cadastro'
import EsqueceuSenhaScreen from '../screens/Initial/EsqueceuSenha'
import InitialScreen from '../screens/Initial/Initial'
import LoginScreen from '../screens/Initial/Login'

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
    },
    ProdutoresScreen: {
      screen: ProdutoresScreen,
      navigationOptions: {
        tabBarLabel: "Produtores"
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
      navigationOptions: {
        headerTitle: "Bem Vindo",
        headerLeft: (
          <Button light transparent>
            <Icon name='menu' />
          </Button>
        ),
      }
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

// export const FeiraTabs = TabNavigator({
//   FeiraInfoTabScreen: {
//     screen: FeiraInfoTabScreen,
//     navigationOptions: {
//       tabBarLabel: "Informações"
//     }
//   },
//   FeiraProdutosTabScreen: {
//     screen: FeiraProdutosTabScreen,
//     navigationOptions: {
//       tabBarLabel: "Produtos"
//     }
//   },
//   ProdutoresScreen: {
//     screen: ProdutoresScreen,
//     navigationOptions: {
//       tabBarLabel: "Produtores"
//     }
//   }
// },
//   {
//     tabBarOptions: {
//       style: {
//         backgroundColor: primaryColor
//       }
//     }
//   })









// export const ProdutosTab = StackNavigator(
//   {
//     Produtos: { screen: Produtos },
//     ProdutoScreen: {
//       screen: ProdutoScreen,
//       navigationOptions: {
//         tabBarVisible: false,
//         swipeEnabled: false
//       }
//     }
//   },
//   {
//     headerMode: "none"
//   }
// );

// export const Tabs = TabNavigator(
//   {
//     Produtos: {
//       screen: ProdutosTab,
//       navigationOptions: {
//         tabBarLabel: "Produtos"
//       }
//     },
//     Produtores: {
//       screen: Produtores,
//       navigationOptions: {
//         tabBarLabel: "Produtores"
//       }
//     }
//   },
//   {
//     tabBarOptions: {
//       style: {
//         backgroundColor: secondaryColor
//       }
//     }
//   }
// );

// export const MainContent = StackNavigator(
//   {
//     Tabs: { screen: MainScreen },
//     FeirasScreen: { screen: FeirasScreen }
//   },
//   {
//     headerMode: "none"
//   }
// );

// export const Root = SwitchNavigator(
//   {
//     Tabs: { screen: MainContent },
//     InitialScreen: { screen: InitialScreen },
//     Produtores: { screen: Produtores },
//     Login: { screen: LoginScreen }
//   },
//   {
//     // mode: 'modal',
//     headerMode: "screen"
//   }
// );
