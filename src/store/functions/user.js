import { db, firebaseDataToArray } from './shared'

var produtosRef = db.collection("usuarios");
var idUsuario = 'EngZQZANlXTPEjKqgeqc'
export const getUserDataFirebase = async () => {
    let user = await produtosRef.doc(idUsuario).get()
    // let user = firebaseDataToArray(userQuery)
    return user.data()
}