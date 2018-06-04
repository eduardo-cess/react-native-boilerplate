import {auth} from '../../config/firebase'

export const getUserAuthentication = async (email, password) => {
  var response = {}
  console.log(email + password)
  await auth.signInWithEmailAndPassword(email, password). then(
    user => {
      response.sucess = true
      response.uid = user.uid
    }
  ).catch( error => {
    let messageError 
    switch (error) {
      case 'auth/user-not-found':
      messageError = 'Não existe usuário cadastrado com este e-mail'
      break;
      case 'auth/invalid-email':
      messageError = 'Email invalido'
      break; 
      case 'auth/user-disabled': 
      messageError = 'Este usuário foi desabilitado'
      case 'auth/wrong-password': 
      messageError = 'Senha incorreta'
      default:
      messageError = "Houve um problema na autenticação"
      break;
    }
    response.sucess = false
    response.error = messageError
  })
  console.log(response.error)
  return response
}

export const signUpUser = async (email, password) => {
  var response = {}
  await auth.createUserWithEmailAndPassword(email, password).then(
    user => {
      response.sucess = true    
      response.uid = user.uid
    }
  ).catch(error => {
    let messageError
    switch (error) {
      case 'email-already-in-use':
        messageError = 'Este email já está em uso'
        break;
      case 'invalid-email':
        messageError = 'Email inválido'
        break;
      case 'weak-password':
        messageError = 'Senha fraca, por favor a senha deve ter mais de 6 dígitos'
        break;
      default:
        messageError = 'Houve um problema, por favor tente mais tarde'
        break;
    }
    response.sucess = false
    response.error = messageError
  })
  return response
}


export const logOut = async () => {
  var response = {}
  await auth.signOut().then(
    response.sucess = true
  ).catch(error => {
    let messageError
    switch (error) {
      case 'null-user':
        messageError = 'Não existe usuário logado'
        break;
      default:
        messageError = 'Ocorreu um erro'
        break;
    }
    response.sucess = false
    response.error = messageError
  });
  return error;
}

export const sendResetPasswordEmail = async (email) => {
  var response = {}
  await auth.sendPasswordResetEmail(email).then(
    response.sucess = true
  ).catch( error => {
   let messageError
   switch (error) {
     case 'invalid-email':
       messageError = 'Email inválido'
       break;
     default:
     messageError = 'Ocorreu um problema, tente novamente mais tarde'
       break;
   }
   response.sucess = false
   response.error = messageError
  })
  return response
}