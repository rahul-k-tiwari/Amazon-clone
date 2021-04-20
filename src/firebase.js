// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB0gAmip0guLnHm6fo_WWSnOEoDq3p-WX4",
  authDomain: "clone-8ebf7.firebaseapp.com",
  projectId: "clone-8ebf7",
  storageBucket: "clone-8ebf7.appspot.com",
  messagingSenderId: "816683058433",
  appId: "1:816683058433:web:5b9b9735bd93d4588f0700",
  measurementId: "G-5R4XHVCC16"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db , auth};

