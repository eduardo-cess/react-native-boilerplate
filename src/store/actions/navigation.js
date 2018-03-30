import { NAVIGATE_PRODUTO_SCREEN, NAVIGATE_MAIN_SCREEN } from './actionTypes';

export function navigateToMainScreen() {
    return {
        type: NAVIGATE_MAIN_SCREEN
    }
}
export function navigateToProdutoScreen() {
    return {
        type: NAVIGATE_PRODUTO_SCREEN
    }
}