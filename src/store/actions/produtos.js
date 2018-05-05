
import { getAllProdutosFirebase } from "../functions/produto";
import { GET_ALL_PRODUTOS } from "./actionTypes";

export const getAllProdutos = () => {
  return async dispatch => {
    let allProdutos = await getAllProdutosFirebase()
    dispatch({
      type: GET_ALL_PRODUTOS,
      payload: allProdutos
    })
  };
};

// export function listenToDatabaseChanges (dispatch) {
//   db.collection("cities").doc("SF")
//     .onSnapshot(function(doc) {
//         console.log("Current data: ", doc.data());
//     });

// }
