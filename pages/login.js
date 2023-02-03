import React from 'react';
import styles from "./../styles/login.module.scss";

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDkvTzG6YYyApb5IDedlsknT-AghdopFDk",
    authDomain: "hackinfinity-eda64.firebaseapp.com",
    projectId: "hackinfinity-eda64",
    storageBucket: "hackinfinity-eda64.appspot.com",
    messagingSenderId: "620138670167",
    appId: "1:620138670167:web:8a0980ddc5b5b350235b12",
    measurementId: "G-ESGCV1WZTM"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function login() {
  function userlogin(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    loginWithEmailAndPassword(email, password);
  }
  const loginWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("sign in successfull ...");
    } catch(err) {
      console.log(err);
      alert(err.message)
    }

}
  return (
    <div className={styles.login}>
        <div>
        <input
          type="email"
          placeholder="Email"
          id="email"
        />
        <input
            type="password"
            placeholder="Password"
            id="password"
        />
        <button onClick={userlogin}>login</button>
        </div>
    </div>
  )
}

export default login;