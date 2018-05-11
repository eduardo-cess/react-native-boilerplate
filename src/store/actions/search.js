import { SEARCH } from './actionTypes';

export function search(text) {
    return {
        type: SEARCH,
        payload: text
    }
}
