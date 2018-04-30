
// import { getAllProdutosFirebase } from "../functions/produto";
import { GET_ALL_PRODUTOS } from "./actionTypes";
import { db } from "../../config/firebase";

var ProdutosRef = db.collection("produtos");

export const getAllProdutos = () => {
  return dispatch => {
    ProdutosRef.get()
      .then(function(querySnapshot) {
        let allProdutos = []
        querySnapshot.forEach(function(doc) {
          // console.log(doc.id, " => ", doc.data());
          allProdutos.push(doc.data())
        });
        dispatch({
          type: GET_ALL_PRODUTOS,
          payload: allProdutos
        })
      });
  };
};
