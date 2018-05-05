import { db, firebaseDataToArray } from './shared'

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

