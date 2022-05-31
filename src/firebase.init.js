// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID

    /*    apiKey: "AIzaSyBLts0jikBcOxx1zB1Gp_aLCA0SOsDcSm0",
       authDomain: "doctors-portal-aj.firebaseapp.com",
       projectId: "doctors-portal-aj",
       storageBucket: "doctors-portal-aj.appspot.com",
       messagingSenderId: "216277773354",
       appId: "1:216277773354:web:65c1ab2753f063b31ba753" */
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;