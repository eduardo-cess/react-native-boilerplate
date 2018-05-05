export {db} from "../../config/firebase"

export const firebaseDataToArray = function (querySnapshot) {
    let data = []
    querySnapshot.forEach(doc => {
        data.push(doc.data())
    })
    return data
}