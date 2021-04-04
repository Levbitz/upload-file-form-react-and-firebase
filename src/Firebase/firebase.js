import firebase from "firebase/app";

import "firebase/storage";
import "firebase/firestore";

const app = firebase.initializeApp({
  //copy and paste your firebase confing snippet and your good to go
});

const fbStorage = app.storage();
const db = app.firestore();

export { fbStorage, db };
