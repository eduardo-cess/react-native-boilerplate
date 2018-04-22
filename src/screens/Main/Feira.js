import React, { Component } from "react";
import { View, BackHandler, Image } from 'react-native'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increment, decrement, navigateToMainScreen } from "../../store/actions";
import {
  Content,
  Text,
  List,
  ListItem,
  Left,
  Right,
  Icon,
  Switch,
  Body,
  Container,
  Tab, Tabs
} from 'native-base';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import ImageSlider from 'react-native-image-slider';
import FeiraInfoTab from "./FeiraInfoTab";
import Produtores from "./Produtores";
import Produtos from "./Produtos";


class FeiraScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [
        "https://igx.4sqi.net/img/general/600x600/12150528_pB7hmkY0J44uEtPmVuQvEAzERrCG2SGKqCavoIE3ICM.jpg",
        "https://www.matraqueando.com.br/wp-content/uploads/2013/10/Feira-do-Acai-Belem-Para-04.jpg",
        "https://i.pinimg.com/originals/37/1d/b1/371db165333a0c0b7267f2cf75b5c857.jpg",
      ]
    }
  }

  goBack = () => this.props.navigation.goBack(null);

  render() {
    BackHandler.addEventListener('hardwareBackPress', function () {
      return this.goBack;
    });
    return (

      <ParallaxScrollView
        parallaxHeaderHeight={200}
        renderForeground={() => (
          <ImageSlider
            images={this.state.images}
            autoPlayWithInterval={5000}
          />
        )}>
        <Tabs initialPage={0}>
          <Tab heading="INFORMAÇÕES">
            <FeiraInfoTab />
          </Tab>
          <Tab heading="PRODUTOS" >
            <Produtos goToPage={() => this.props.navigation.navigate('ProdutoScreen')} />
          </Tab>
        </Tabs>
      </ParallaxScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    // valor: state.counter.valor
  };
};
const mapDispatchToProps = dispatch => {
  return {
    // onIncrement: () => dispatch(increment()),
    // onDecrement: () => dispatch(decrement()),
    // onNavigateToMainScreen: () => dispatch(navigateToMainScreen())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeiraScreen);
