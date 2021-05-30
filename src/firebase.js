import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyAaD7zsWHOURrSplKB1t91HL74aUN5PhEU",
    authDomain: "unichat-2f256.firebaseapp.com",
    projectId: "unichat-2f256",
    storageBucket: "unichat-2f256.appspot.com",
    messagingSenderId: "524794123889",
    appId: "1:524794123889:web:42ba3333b2052e81a7add0",
  })
  .auth();
