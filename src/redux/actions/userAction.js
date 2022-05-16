import { collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { typeUsers } from "../types/types";

const deleteUser = (email) => ({
  type: typeUsers.delete,
  payload: email
})

export const deleteUserAsync = (user, setIsLoggedIn) => {
  return async(dispatch) => {
    const userRef = collection(db, 'usuarios');
    const q = query(userRef, where('email', '==', user.email));
    try{
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async(docu) => {
        await deleteDoc(doc(db, 'usuarios', docu.id))
        dispatch(deleteUser(user.email))
      })
      setIsLoggedIn(false)
    } catch (error) {
      console.log(error);
    }
  }
}