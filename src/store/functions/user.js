import { db, firebaseDataToArray } from './shared'

var userRef = db.collection("usuarios");
var idUsuario = 'EngZQZANlXTPEjKqgeqc'
export const getUserDataFirebase = async () => {
    let user = await userRef.doc(idUsuario).get()
    return user.data()
}
export const updateUserDataFirebase = (user) => {
    userRef.doc(user.id).update(user)
        .then(function() {
            console.log("Document successfully updated!");
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
}