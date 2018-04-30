
import { getAllProdutosFirebase } from "../functions/produto";
import { GET_ALL_PRODUTOS } from "./actionTypes";
import { db } from "../../config/firebase";

export const getAllProdutos = () => {
  return async dispatch => {
    let allProdutos = await getAllProdutosFirebase()
    dispatch({
      type: GET_ALL_PRODUTOS,
      payload: allProdutos
    })
  };
};
