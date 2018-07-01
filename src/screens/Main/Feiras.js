import React, { Component } from "react";
import { View, StyleSheet,BackHandler } from 'react-native'
import {
  Container,
  Content,
  Left,
  Right,
  Body,
  Icon,
  Text,
  ListItem,
  List,
  Thumbnail,
} from "native-base";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllFeiras, setCurrentFeira } from '../../store/actions';

class FeirasScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  async componentWillMount () {
    await this.props.getAllFeiras()
  }

  setFeiraAndNavigate = (feira) => {
    this.props.setCurrentFeira(feira)
    this.props.screenProps.rootNavigation.navigate('FeiraScreen')
  }

  render() {
    let feiras = this.props.feiras
    return (
      <Container>
        <Content>
          <List  >
            {
              feiras.map(feira => {
                return (
                  <ListItem avatar key={feira.id} onPress={() => this.setFeiraAndNavigate(feira)}>
                    <Left>
                      <Thumbnail source={ (feira.imagens[0] != '-') ? {'uri': feira.imagens[0]} : require('../../static/img/missing-image-640x360.png') } />
                    </Left>
                    <Body >
                      <Text >{feira.nome}</Text>
                      <Text style={styles.data}>{feira.data}</Text>
                    </Body>
                  </ListItem>
                )
              })
            }
          </List>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    feiras: state.feiras.feiras
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getAllFeiras: () => dispatch(getAllFeiras()),
    setCurrentFeira: (feira) => dispatch(setCurrentFeira(feira))
  };
};

const styles = StyleSheet.create({
  data: {
    fontSize: 15,
    color: 'gray',
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FeirasScreen);