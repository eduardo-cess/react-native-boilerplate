import { db, firebaseDataToArray } from './shared'

var dbRef = db.collection("feiras");

export const getAllFeirasFirebase = async () => {
    let feirasQuery = await dbRef.get()
    let feiras = firebaseDataToArray(feirasQuery)
    return feiras
}

export const updateFeiraFirebase = (data) => {
    dbRef.doc(data.id).update(data).then(function () {
        console.log("Feira successfully updated!");
    }).catch(function (error) {
        console.error("Error writing document: ", error);
    });
}

