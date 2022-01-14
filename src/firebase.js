// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCdvuooD7tcZuGCkPWlBfOa7bSVIRz-Xqo",
    authDomain: "class-notes-260ca.firebaseapp.com",
    projectId: "class-notes-260ca",
    storageBucket: "class-notes-260ca.appspot.com",
    messagingSenderId: "993375396853",
    appId: "1:993375396853:web:c88164c9da1136376876bc",
    measurementId: "G-8144EYBDLD"
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const db = getDatabase(app);

export default db;