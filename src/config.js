import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


// const firebaseConfig = {
//   apiKey: "AIzaSyA9RyvraNnwewm2qkeGOqJtzgc1nl6xt1I",
//   authDomain: "project-ae6ac.firebaseapp.com",
//   projectId: "project-ae6ac",
//   storageBucket: "project-ae6ac.appspot.com",
//   messagingSenderId: "882294480883",
//   appId: "1:882294480883:web:3762cf5c559a8442fbfc86"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDzOvajd6eTWIz7ICHhbxgOoji2U1MbAjM",
  authDomain: "oshofri-df185.firebaseapp.com",
  projectId: "oshofri-df185",
  storageBucket: "oshofri-df185.appspot.com",
  messagingSenderId: "503124590704",
  appId: "1:503124590704:web:77776d4ad657120cdc74b5"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const storage = getStorage();

export const auth = getAuth();
