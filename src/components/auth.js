import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/performance";

const config = {
  apiKey: "AIzaSyCQunbvqK-IwqYcdyX3Uxa_8he1Pdc38BE",
  authDomain: "stocks-a07be.firebaseapp.com",
  databaseURL: "https://stocks-a07be.firebaseio.com",
  projectId: "stocks-a07be",
  storageBucket: "stocks-a07be.appspot.com",
  messagingSenderId: "894056603926",
  appId: "1:894056603926:web:ac49c0e606ad9a33a33037",
  measurementId: "G-CE8RVD70WK"
};

firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const firebaseAuth = firebase.auth;
export const db = firebase.firestore();
export const perf = firebase.performance();

export function loginWithGoogle() {
  return firebaseAuth().signInWithRedirect(googleProvider);
}

export function auth(email, pw) {
  let username = localStorage.getItem("user");
  return firebaseAuth()
    .createUserWithEmailAndPassword(email, pw)
    .then(function(newUser) {
      db.collection("users")
        .doc(newUser.user.uid)
        .set({
          email,
          username,
          funds: parseInt(10000),
          currentfunds: parseInt(10000),
          cryptoFunds: parseInt(10000),
          positions: "0",
          admin: false
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
      return firebase.auth().currentUser.updateProfile({
        displayName: username
      });
    });
}

export function logout() {
  return firebaseAuth().signOut();
}

export function login(email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw);
}

export function resetPassword(email) {
  return firebaseAuth().sendPasswordResetEmail(email);
}
