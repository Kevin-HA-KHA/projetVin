// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Remplacez les valeurs par celles de votre projet Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCVepsfVNdNY81cDSqJaiVubHw_22VGw84",
    authDomain: "sil-vin-418010.firebaseapp.com",
    projectId: "sil-vin-418010",
    storageBucket: "sil-vin-418010.appspot.com",
    messagingSenderId: "462604635630",
    appId: "1:462604635630:web:412c35efc45148782692ff"
};

const app = initializeApp(firebaseConfig);

// Initialiser Firebase Storage
const storage = getStorage(app);

export { storage };
