import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyC0cwdbc5CP3mNiilTu7oohm4WHCLPzb68",
  authDomain: "test-front-escribano.firebaseapp.com",
  projectId: "test-front-escribano",
  storageBucket: "test-front-escribano.appspot.com",
  messagingSenderId: "583585572622",
  appId: "1:583585572622:web:c4c401b1a05781ce3c995f"
};

const fb = firebase.initializeApp(firebaseConfig)

export const dataBase = fb.firestore()