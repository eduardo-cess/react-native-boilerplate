import {auth} from '../../config/firebase'

export const getUserAuthentication = async (user) => {
  var response 
  await auth.signInWithEmailAndPassword(user.email, user.password). then(
    user => {
      response =  user.id
    }
  ).catch( error => {
    response = error
  })
  return response
}

// export const getAllProdutosFirebase = async () => {
//   let produtosQuery = await produtosRef.get()
//   let produtos = firebaseDataToArray(produtosQuery)
//   return produtos
// }