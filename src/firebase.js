import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "portfolio-55eba.firebaseapp.com",
  projectId: "portfolio-55eba",
  storageBucket: "portfolio-55eba.appspot.com",
  messagingSenderId: "1086164276420",
  appId: "1:1086164276420:web:940f56296d04acfce3e591",
  measurementId: "G-52NQ9X4R27",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
