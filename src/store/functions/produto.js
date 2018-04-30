import {db} from "../../config/firebase"

var produtosRef = db.collection("produtos");

export const getAllProdutosFirebase = async () => {
    let produtos = []
    let produtosQuery = await produtosRef.get()
        // .then(function(querySnapshot) {
        //     querySnapshot.forEach(function(doc) {
        //     allProdutos = this.firebaseDataToArray(querySnapshot)
        //     console.log(doc.id, " => ", doc.data());
            
        //     });
        // });
    produtos = firebaseDataToArray(produtosQuery)
    return produtos
}

var firebaseDataToArray = function (querySnapshot) {
    let data = []
    querySnapshot.forEach(doc => {
      data.push(doc.data())
    })
    return data
  }
  

export const getProduto = (idProduto) => {}