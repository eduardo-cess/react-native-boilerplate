import React, { Component } from "react";
import { View, BackHandler, StyleSheet, Image, Modal } from 'react-native';
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
  Right,
  CardItem,
  Card,
  Form,
  Item,
  Label,
  Input,
  Header,
  Title,
  Text
} from 'native-base';
import ImagePicker from 'react-native-image-crop-picker'
import RNFetchBlob from 'react-native-fetch-blob'
import { getUserData, updateUser } from "../../store/actions";
import { primaryColor } from '../../theme/variables/commonColor';
import { storage, db } from '../../config/firebase';
// import Modal from "react-native-modal";
import { Spinner } from 'native-base';

class MinhaContaScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      editing: false,
      dp: null,
      form: {}
    };
  }

  componentWillMount () {
    this.onGetUserDataHandler()
    let user = this.props.user
    this.setState({
      form: user
    })
  }

  componentDidMount () {
  }

  componentDidUpdate(nextProps, prevState) {
    if(nextProps.user != this.props.user)
      this.onUpdateUserDataHandler(this.props.user) 
  }

  onGetUserDataHandler = () => {
    this.props.onGetUserData()
  }
  onUpdateUserDataHandler = (user) => {
    this.props.onUpdateUserData(user)
  }

  openPicker(user){
    this.setState({ loading: true })
    const Blob = RNFetchBlob.polyfill.Blob
    const fs = RNFetchBlob.fs
    window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
    window.Blob = Blob
    const uid = user.id
    ImagePicker.openPicker({
      width: 300,
      height: 250,
      cropping: true,
      mediaType: 'photo'
    }).then((image) => {

      const imagePath = image.path

      let uploadBlob = null
      let time = new Date().getTime()
      const imageRef = storage.ref("users/imagens/").child(`${uid}-${time}.jpg`)
      let mime = 'image/jpg'
      fs.readFile(imagePath, 'base64')
        .then((data) => {
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
          console.log(url)

          this.onUpdateUserDataHandler({...user, "imagem": url})
          let obj = {}
          obj["loading"] = false
          obj["dp"] = url
          this.setState(obj)

        })
        .catch((error) => {
          console.log(error)
          this.setState({loading: false})
        })
    })
    .catch((error) => {
      console.log(error)
      this.setState({loading: false})
    })
  }

  onEditUserInfo = () => {
    console.log(this.state)
  }

  render() {
    let user = this.props.user
    let endereco = user.endereco
    let form = this.state.form
    return (
      <Content style={{ backgroundColor: "white" }}>
        <Modal 
        visible={this.state.loading}
        animationType="slide"
        transparent={true}
        hardwareAccelerated={true}
        onRequestClose={()=>this.setState({loading: false})}
        >
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'rgba(0,0,0,0.7)' }}>
            <Text style={{color: "white"}}>Fazendo o Upload da imagem</Text>
            <Spinner/>
          </View>
        </Modal>

        <Modal 
        visible={this.state.editing}
        animationType="slide"
        transparent={true}
        hardwareAccelerated={true}
        onRequestClose={()=>this.setState({editing: false})}
        >
            <Content style={styles.modal}>
              <Header>
                <View style={styles.modalHeader}>
                  <Button transparent onPress={() => this.setState({editing: false})}>
                    <Icon name="md-arrow-back"/>
                  </Button>
                  <Title>Editar Informações</Title>
                </View>
              </Header>
              <View style={{flex: 1, backgroundColor: "white"}}>
                  <Form>
                    <Item floatingLabel>
                      <Label>Nome</Label>
                      <Input value={this.state.form.nome} onChange={ (val) => this.setState((prevState, props) => {return {...prevState.form, nome: val} }) }/>
                    </Item>
                    <Item floatingLabel>
                      <Label>Email</Label>
                      <Input value={form.email}/>
                    </Item>
                    {/* <View style={{
                    flexDirection: 'row', 
                    alignItems: 'center', 
                    flex: 1,
                    backgroundColor: 'red'}}
                    > */}
                      {/* <Item floatingLabel>
                        <Label>DDD</Label>
                        <Input value={form.telefone.ddd}/>
                      </Item>
                      <Item floatingLabel>
                        <Label>Telefone</Label>
                        <Input value={form.telefone.numero} />
                      </Item>  */}
                    {/* </View> */}
                  </Form>
                <View style={{flexDirection: 'row', flex: 1, marginTop: 20,}}>
                  <View style={{ flex: 1}}>
                    <Button full light onPress={() => this.setState({editing: false})}>
                      <Text>Cancelar</Text>
                    </Button>
                  </View>
                  <View style={{ flex: 1}}>
                    <Button full success onPress={() => this.onEditUserInfo()}>
                      <Text>Confirmar</Text> 
                    </Button>
                  </View>
                </View>
              </View>
            </Content>
        </Modal>

        <View >
          <Image
            key={user.imagem}
            source={(user.imagem != '-') ? {'uri': user.imagem} : require('../../static/img/missing-image-640x360.png')}
            style={{ height: 250, flex: 1, width: null }}
          />
          <Fab
            active={this.state.active}
            containerStyle={{}}
            style={{ backgroundColor: primaryColor, width: 40, height: 40 }}  
            position="bottomRight"
            onPress={() => this.openPicker(user)}>
            <Icon name="create" />
          </Fab>
        </View>
        <Separator style={styles.separator}>
          <View style={{flexDirection: 'row', justifyContent: "space-between",}}>
            <View style={{justifyContent: "center", alignItems: "center"}}> 
              <Text style={styles.separatorText}>Dados da Conta</Text>
            </View>
            <View style={{justifyContent: "center",}}>
              <Button transparent icon onPress={()=>this.setState({editing: true})}>
                <Icon name="create" />
              </Button>
            </View>
          </View>
        </Separator>
        <ListItem >
          <Body>
            <View>
              <Text style={styles.title}>Nome</Text>
              <Text style={styles.content}>{user.nome}</Text>
            </View>
          </Body>
        </ListItem>
        <ListItem>
          <Body>
            <View>
              <Text style={styles.title}>Email</Text>
              <Text style={styles.content}>{user.email}</Text>
            </View>

          </Body>
        </ListItem>
        <ListItem last>
          <Body>
            <View>
              <Text style={styles.title}>Telefone</Text>
              <Text style={styles.content}>({user.telefone.ddd}) {user.telefone.numero}</Text>
            </View>
          </Body>
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
        </ListItem>
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
    paddingBottom: 30,
    paddingTop: 30,
  },
  separatorText: {
    fontSize: 16,
  },
  modal: {
    backgroundColor: 'rgba(0,0,0,0.7)'
  },
  modalHeader: {
    flexDirection: 'row', 
    alignItems: 'center', 
    flex: 1
  },

})
const mapStateToProps = state => {
  return {
    user: state.user.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onGetUserData: () => dispatch(getUserData()),
    onUpdateUserData: (user) => dispatch(updateUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MinhaContaScreen);