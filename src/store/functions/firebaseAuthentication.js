import {auth} from '../../config/firebase'

export const getUserAuthentication = async (user) => {
  var response 
  await auth.signInWithEmailAndPassword(user.username, user.password). then(
    user => {
      response = user.uid
    }
  ).catch( error => {
    response = error
  })
  return response
}

export const signUpUser = async (user) => {
  var response

  await auth.createUserWithEmailAndPassword(user.username, user.password).then(
    user => {
      response = user.uid
    }
  ).catch(error => {
    response = error
  })
  return response
}


export const logOut = async (user) => {
  var response 

  await auth.signOut();
}