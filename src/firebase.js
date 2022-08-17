// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


/* const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_CENTER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
}; */
const firebaseConfig = {
  apiKey: "AIzaSyAZfEvMKuTT7lNcthb9xIzLZ11L_c1JZnQ",
  authDomain: "movies-8c52d.firebaseapp.com",
  projectId:  "movies-8c52d",
  storageBucket: "movies-8c52d.appspot.com",
  messagingSenderId: "525315278257",
  appId: "1:525315278257:web:eca13ccea86a7d8c2f6990",
  measurementId: "G-5CG466BD79"
};





// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)