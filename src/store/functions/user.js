import {db} from '../../config/firebase'

export const insertUserNameAndPerfil = async (userId, fullname, email) => {
  var user  = {}
  user.id = userId
  user.fullname = fullname
  user.email = email
  user.perfil = '2';
  var reponse = {}
  await db.collection('usuarios').doc(user.id).set(user).then(
    docRef => {
      console.log('adicionado com sucesso', docRef)
      response.sucess = true
    }
  ).catch (
    error => {
      console.log('Erro', error)
      response.sucess = false
      response.error = 'Houve um problema na persistencia dos dados'

    }
  );
  return response
}