const admin = require('firebase-admin');
const functions = require('firebase-functions');
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

admin.initializeApp({
  databaseURL: config.databaseURL
});

let db = admin.firestore();

db.collection('users').get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });