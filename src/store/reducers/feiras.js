import { GET_ALL_FEIRAS, UPDATE_FEIRA, SET_CURRENT_FEIRA } from "../actions/actionTypes";

var initialState = {
    feiras: [],
    currentFeira: {}
}

export default function feiras (state = initialState, action = {}) {
    switch (action.type){
        case GET_ALL_FEIRAS:
            return {...state, feiras: action.payload}
        case SET_CURRENT_FEIRA: 
            return {...state, currentFeira: action.payload}
        // case UPDATE_FEIRA:
        //     let currentProdutoIndex = getIndexProduto(action.payload.id, state.produtos)
        //     let newProdutos = state.produtos
        //     newProdutos[currentProdutoIndex] = action.payload
        //     return {...state, prdutos: newProdutos}
        default:
            return state
    }
}

// const getIndexProduto = (idProduto, allProdutos) => {
//     let index = -1
//     for (let i = 0; i < allProdutos.length; i++) {
//       if(allProdutos[i]['id'] == idProduto){
//         index = i
//         break
//       }
//     }
//     return index
// }