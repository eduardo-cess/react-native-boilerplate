import {db} from "../../config/firebase"

var produtosRef = db.collection("produtos");

export const getAllProdutosFirebase = async () => {
    let produtosQuery = await produtosRef.get()
    let produtos = firebaseDataToArray(produtosQuery)
    return produtos
}

// export function listenToDatabaseChanges (dispatch) {
//     produtosRef
//       .onSnapshot(function(doc) {
//           console.log("Current data: ", doc.data());
//       });
  
//   }

export const getProduto = (idProduto) => {}

const firebaseDataToArray = function (querySnapshot) {
    let data = []
    querySnapshot.forEach(doc => {
        data.push(doc.data())
    })
    return data
}