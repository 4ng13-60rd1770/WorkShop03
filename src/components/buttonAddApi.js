import React from 'react'
import { db } from '../firebase/firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { products } from '../api';

export default function ButtonAddApi() {

  const peticion = () => {
    console.log(products)
    products.hombre.forEach(element => {
      addDoc(collection(db, 'hombre'), element);
    })
  }

  return (
    <button onClick={peticion}>Traer api</button>
  )
}
