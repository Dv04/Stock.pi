import React from 'react';
import styles from "./../styles/login.module.scss";

import googleSVG from "./google.png";

import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail} from "firebase/auth";
import { getFirestore, query, getDocs, collection, where, addDoc} from "firebase/firestore";

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

const login = () => {
  function userlogin(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    loginWithEmailAndPassword(email, password);
  }

  const loginWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // alert("sign in successfull ...");
      navigateToHome();
    } catch(err) {
      console.log(err);
      alert(err.message)
    }
  }

  const sendPasswordReset = async () => {
    var email = document.getElementById("email").value;
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name: user.displayName,
            authProvider: "google",
            email: user.email,
        });
        }
        navigateToHome();
        // console.log("your google auth is successful");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
    };

  function navigateToRegister() {
    window.location.href = "/register";
  }

  const navigateToHome = () => {
    window.location.href = "/home";
};

  return (
    <div className={styles.login}>
        <div className={styles.login}>
                <div className={styles.box}>
                    <div className={styles.left}>
                        <form>
                            <h1>Sign in</h1>
                            <div className={styles.googleBtn}>
                                <div className={styles.googleIconWrapper}>
                                    <img
                                        className={styles.googleIcon}
                                        src={googleSVG}
                                        alt="google svg"
                                    />
                                </div>
                                <p className={styles.btnText} onClick={signInWithGoogle}>
                                    <b>Sign in with google</b>
                                </p>
                            </div>
                            <span>or sign in with your account</span>
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
                            <u onClick={sendPasswordReset} >Forgot your password?</u>
                            <button onClick={userlogin}>Sign In</button>
                            <div className={styles.registerLinkText}>
                                do not have an account,{" "}
                                <span
                                    className={styles.registerLink}
                                    onClick={navigateToRegister}
                                >
                                    reigster here
                                </span>
                            </div>
                        </form>
                    </div>
                    <div className={styles.right}></div>
                </div>
            </div>

        {/* <div>
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
        </div> */}
    </div>
  )
}

export default login;