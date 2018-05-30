import {db} from '../../config/firebase'

export const insertUserNameAndPerfil = async (user) => {
  user.perfil = '2';
  await db.collection('usuarios').doc(user.id).set(user).then(
    function(docRef) {console.log('adicionado com sucesso', docRef)}
  ).catch (
    function(error) {console.log('Erro', error)}
  );
}