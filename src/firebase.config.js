// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3KlqYTAaemX72oHfxILYtrB5aTBIZP9g",
  authDomain: "gub-eco-system.firebaseapp.com",
  projectId: "gub-eco-system",
  storageBucket: "gub-eco-system.appspot.com",
  messagingSenderId: "890792379884",
  appId: "1:890792379884:web:68056e0b29765efe1fecc9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
