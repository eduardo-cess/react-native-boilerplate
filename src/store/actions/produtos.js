import axios from 'axios';
import produtos from '../../static/mock/produtos'

import { GET_ALL_PRODUTOS } from "./actionTypes";

export const getAllProdutos = () => {
    // const produtos = axios.get('/../../static/mock/produtos.json')
    // return (dispatch) => {
    //     produtos.then(({data}) => {
    //         dispatch({
    //             type: GET_ALL_PRODUTOS,
    //             payload: data
    //         })
    //     })
    // }
    return {
        type: GET_ALL_PRODUTOS,
        payload: produtos
    }
}