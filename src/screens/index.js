import React from "react";
import { StyleSheet, View } from "react-native";
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
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Tabs } from '../config/routes';
import authenticate from '../store/reducers/authentication';
import SideBar from '../components/sideBar';
import AppHeader from '../components/header'
import Produtos from './Produtos';

class MainScreen extends React.Component {
  componentDidMount() {
    this.auth()
  }

  componentWillReceiveProps (nextProps) {
    if(nextProps.userStatus === 'isLoggedOut'){
      this.props.navigation.navigate('InitialScreen')
    }
  }

  auth = () => {
    if (this.props.userStatus === 'isLoggedOut'){
      this.props.navigation.navigate('InitialScreen')
    }
  }
  
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };


  render() {
    return (
      <Drawer  
      ref={(ref) => { this.drawer = ref; }}
      content={<SideBar/>}
      onClose={() => this.closeDrawer()}
      type="displace"
      captureGestures='open'
      tapToClose={true}
      negotiatePan={true}
      panOpenMask={0.25}
      >
        <Container>
          <AppHeader leftButtonPress={this.openDrawer} title={'Bem Vindo'}/>
          <Tabs/>
          <Footer>
            <FooterTab>
              <Button full>
                <Text style={{color: 'white'}}>UFPA - Developers</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      
      </Drawer>
    );
  }
}

const mapStateToTprops = (state) => {
  return {
    userStatus: state.authenticate.userStatus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToTprops, mapDispatchToProps)(MainScreen)