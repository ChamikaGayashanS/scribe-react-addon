/* eslint-disable prettier/prettier */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCttkz6E4uEg7IBx1vBnOxLRVZkuUtgJrI",
    authDomain: "scribe-it-admin-web.firebaseapp.com",
    projectId: "scribe-it-admin-web",
    storageBucket: "scribe-it-admin-web.appspot.com",
    messagingSenderId: "1004974721609",
    appId: "1:1004974721609:web:b13e3ef622063e16afcd98",
    measurementId: "G-C7MH4J3TLV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage();

const firestore = getFirestore(app);

export { firestore, storage };
