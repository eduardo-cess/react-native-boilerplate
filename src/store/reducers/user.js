import { GET_USER_DATA } from '../actions/actionTypes'

const initialState = {
  user: {
    nome: '****',
    id: '****',
    email: '****',
    perfil: '****',
    imagem: '****',
    telefone: {
      numero: '****',
      codigo: '****',
      ddd: '****',
    },
    endereco: {
      rua: '****',
      numero: '****',
      cidade: '****',
      estado: '****',
      cep: '****',
    }
  }
}
  
export default function user(state = initialState, action={}) {
    switch (action.type) {
      case GET_USER_DATA: 
        return {...state, user: action.payload}
      default:
        return state
    }
  }