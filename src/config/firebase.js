import firebase from 'firebase'

const config = {
  authDomain: "YOUR DOMAIN",
  databaseURL: "YOUR URL",
  projectId: "YOUR ID",
  storageBucket: "YOUR BUCKET",
  messagingSenderId: "YOUR ID"
}

firebase.initializeApp(config)

const database = firebase.database()

export default database