// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyB7JhXOONqImUkhcz_1D1Xg5_BxvTEDGbo",
    authDomain: "centum-community.firebaseapp.com",
    projectId: "centum-community",
    storageBucket: "centum-community.appspot.com",
    messagingSenderId: "657191542877",
    appId: "1:657191542877:web:cd2ae3b9539add05b86db4"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
