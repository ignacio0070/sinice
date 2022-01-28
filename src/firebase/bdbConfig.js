
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyB1CC0i4Wb3Tb9bmkO1gJPdVFobefDRy-A",
  authDomain: "treyquers.firebaseapp.com",
  projectId: "treyquers",
  storageBucket: "treyquers.appspot.com",
  messagingSenderId: "498059464864",
  appId: "1:498059464864:web:0c9f412c077a55b8fc39c5"
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp= ()=>{ 
  return app
}