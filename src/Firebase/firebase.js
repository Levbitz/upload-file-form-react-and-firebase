import firebase from "firebase/app";

import "firebase/storage";
import "firebase/firestore";

const app = firebase.initializeApp({
  //copy and paste your firebase confing snippet and your good to go

  apiKey: "AIzaSyAGpVh8iY3ivH2Qywof0303Vwyw3jZvQ8o",
  authDomain: "file-upload-248e4.firebaseapp.com",
  projectId: "file-upload-248e4",
  storageBucket: "file-upload-248e4.appspot.com",
  messagingSenderId: "436994981297",
  appId: "1:436994981297:web:bf96692cb5c656711e5190",
});

const fbStorage = app.storage();
const db = app.firestore();

export { fbStorage, db };
