import Firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyBR4QGsdrUvRaLPMlHOTUNw20a29aYYdIo",
  authDomain: "appagriculturafamiliar.firebaseapp.com",
  databaseURL: "https://appagriculturafamiliar.firebaseio.com",
  projectId: "appagriculturafamiliar",
  storageBucket: "appagriculturafamiliar.appspot.com",
  messagingSenderId: "703635634619"
};

Firebase.initializeApp(config)

export const db = Firebase.firestore()
export const auth = Firebase.auth()
