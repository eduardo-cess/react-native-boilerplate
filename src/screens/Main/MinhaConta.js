import React, { Component } from "react";
import { View, BackHandler, Text, StyleSheet, Image } from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  Content,
  Separator,
  ListItem,
  List,
  Fab,
  Icon,
  Button,
  Toast,
  Body,
  Left,
  Right
} from 'native-base';
import ImagePicker from 'react-native-image-crop-picker'
import RNFetchBlob from 'react-native-fetch-blob'
import { getUserData } from "../../store/actions";
import { primaryColor } from '../../theme/variables/commonColor';
import { storage } from '../../config/firebase';

class MinhaContaScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      dp: null
    };
  }

  componentWillMount () {
    this.onGetUserDataHandler()
  }

  onGetUserDataHandler = () => {
    this.props.onGetUserData()
  }

  openPicker(){
    this.setState({ loading: true })
    const Blob = RNFetchBlob.polyfill.Blob
    const fs = RNFetchBlob.fs
    window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
    window.Blob = Blob
    //const { uid } = this.state.user
    const uid = "12345"
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      mediaType: 'photo'
    }).then(image => {

      const imagePath = image.path

      let uploadBlob = null

      const imageRef = storage.ref(uid).child("dp.jpg")
      let mime = 'image/jpg'
      fs.readFile(imagePath, 'base64')
        .then((data) => {
          //console.log(data);
          return Blob.build(data, { type: `${mime};BASE64` })
      })
      .then((blob) => {
          uploadBlob = blob
          return imageRef.put(blob, { contentType: mime })
        })
        .then(() => {
          uploadBlob.close()
          return imageRef.getDownloadURL()
        })
        .then((url) => {

          let userData = {}
          //userData[dpNo] = url
          //firebase.database().ref('users').child(uid).update({ ...userData})

          let obj = {}
          obj["loading"] = false
          obj["dp"] = url
          this.setState(obj)

        })
        .catch((error) => {
          console.log(error)
        })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    let user = this.props.user
    let endereco = user.endereco
    return (
      <Content style={{ backgroundColor: "white" }}>
        {/* <List> */}
        <View >
          <Image
            source={require("../../static/img/goku-480x350.jpg")}
            style={{ height: 250, flex: 1, width: null }}
          />
          <Fab
            active={this.state.active}
            containerStyle={{}}
            style={{ backgroundColor: primaryColor }}
            position="bottomRight"
            onPress={() => this.openPicker()}>
            <Icon name="create" />
          </Fab>
        </View>
        <Separator style={styles.separator}>
          <Text style={styles.separatorText}>Dados da Conta</Text>
        </Separator>
        <ListItem >
          <Body>
            <View>
              <Text style={styles.title}>Nome e Sobrenome</Text>
              <Text style={styles.content}>{user.nome}</Text>
            </View>
          </Body>
          <Right>
            <Button transparent icon>
              <Icon name="create" />
            </Button>
          </Right>
        </ListItem>
        <ListItem>
          <Body>
            <View>
              <Text style={styles.title}>Email</Text>
              <Text style={styles.content}>{user.email}</Text>
            </View>

          </Body>
          <Right>
            <Button transparent icon>
              <Icon name="create" />
            </Button>
          </Right>
        </ListItem>
        <ListItem last>
          <Body>
            <View>
              <Text style={styles.title}>Telefone</Text>
              <Text style={styles.content}>({user.telefone.ddd}) {user.telefone.numero}</Text>
            </View>
          </Body>
          <Right>
            <Button transparent icon>
              <Icon name="create" />
            </Button>
          </Right>
        </ListItem>
        <Separator style={styles.separator}>
          <Text style={styles.separatorText}>Endereço</Text>
        </Separator>
        <ListItem>
          <Body>
            <View>
              <Text style={styles.title}>{endereco.rua}, {endereco.numero}</Text>
              <Text style={styles.content}>{endereco.cep} - {endereco.cidade} - {endereco.estado}</Text>
            </View>
          </Body>
          <Right>
            <Button transparent icon>
              <Icon name="create" />
            </Button>
          </Right>
        </ListItem>

        {/* </List> */}
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "bold"
  },
  content: {
    fontSize: 14,
  },
  separator: {
    // backgroundColor: "gray",
    paddingBottom: 30,
    paddingTop: 30,
  },
  separatorText: {
    fontSize: 16,
    // color: "white"
  }
})
const mapStateToProps = state => {
  return {
    user: state.user.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onGetUserData: () => dispatch(getUserData())
    // onIncrement: () => dispatch(increment()),
    // onDecrement: () => dispatch(decrement()),
    // onNavigateToMainScreen: () => dispatch(navigateToMainScreen())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MinhaContaScreen);