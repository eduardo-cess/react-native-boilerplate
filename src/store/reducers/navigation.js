import { NAVIGATE_PRODUTO_SCREEN, NAVIGATE_MAIN_SCREEN } from '../actions/actionTypes';

var initialState = {
    screen: 'InitialScreen',
    title: 'Bem Vindo'
}

export default function navigateTo (state = initialState, action = {}) {
    switch(action.type){
        case NAVIGATE_MAIN_SCREEN:
            return {screen: 'MainScreen', title: 'Bem Vindo'}
        case NAVIGATE_PRODUTO_SCREEN:
            return {screen: 'ProdutoScreen', title: 'Produto'}
        default:
            return state
    }
}