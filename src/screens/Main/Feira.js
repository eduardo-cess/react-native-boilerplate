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
import ImageSlider from 'react-native-image-slider';
import FeiraInfoTab from "./FeiraInfoTab";
import Produtores from "./Produtores";
import Produtos from "./Produtos";
// import { FeiraTabs } from "../../config/routes";
import Carousel from "../../components/carousel"

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
  render() {
    return (
      <Container>
        <Content style={{ backgroundColor: "white" }}>
          {/* <Image
            source={{
              uri:
                "https://igx.4sqi.net/img/general/600x600/12150528_pB7hmkY0J44uEtPmVuQvEAzERrCG2SGKqCavoIE3ICM.jpg"
            }}
            style={{ height: 200, width: null, flex: 1 }}
          /> */}
          <View style={{ height: 185, width: null, flex: 1 }}>
            <ImageSlider
              images={this.state.images}
              autoPlayWithInterval={4000}
            />
          </View>
          {/* <FeiraTabs /> */}
          <Tabs initialPage={0}>
            <Tab heading="INFORMAÇÕES">
              <FeiraInfoTab />
            </Tab>
            <Tab heading="PRODUTOS">
              <Produtos goToPage={() => this.props.navigation.navigate('ProdutoScreen')} />
            </Tab>
            {/* <Tab heading="PRODUTORES">
              <Produtores />
            </Tab> */}
          </Tabs>
        </Content>
      </Container>
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
