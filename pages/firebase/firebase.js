// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkvTzG6YYyApb5IDedlsknT-AghdopFDk",
  authDomain: "hackinfinity-eda64.firebaseapp.com",
  projectId: "hackinfinity-eda64",
  storageBucket: "hackinfinity-eda64.appspot.com",
  messagingSenderId: "620138670167",
  appId: "1:620138670167:web:8a0980ddc5b5b350235b12",
  measurementId: "G-ESGCV1WZTM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};
// const analytics = getAnalytics(app);