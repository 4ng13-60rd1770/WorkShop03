import React from 'react'
import { db } from '../firebase/firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

export default function buttonAddApi() {
  const peticion = () => {
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };  
    fetch('https://imdb-api.com/API/AdvancedSearch/k_1b36os8g?title_type=tv_movie', requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(JSON.parse(result).results)
        // .forEach(element => addDoc(collection(db, 'productos'), element)); 
      })
      .catch(error => console.log('error', error));
  }
  return (
    <button onClick={peticion}>Traer api</button>
  )
}
