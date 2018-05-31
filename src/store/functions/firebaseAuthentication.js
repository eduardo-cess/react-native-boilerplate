import {auth} from '../../config/firebase'

export const getUserAuthentication = async (user) => {
  var response 
  console.log(user);
  await auth.signInWithEmailAndPassword(user.email, user.password). then(
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
  console.log(user)
  await auth.createUserWithEmailAndPassword(user.email, user.password).then(
    user => {
      console.log(user.uid)
      response = user.uid
    }
  ).catch(error => {
    console.log(error)
    response = error
  })
  return response
}


export const logOut = async () => {
  await auth.signOut();
}

export const sendRecoverResetEmail = async (email) => {
  await auth.sendPasswordResetEmail(email);
}