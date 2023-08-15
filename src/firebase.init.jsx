// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVLYKJKN7jDuNRx_fnuHk6fDCAA4qPpf4",
  authDomain: "fir-router-integratioin.firebaseapp.com",
  projectId: "fir-router-integratioin",
  storageBucket: "fir-router-integratioin.appspot.com",
  messagingSenderId: "8648906241",
  appId: "1:8648906241:web:b22fbf7f51538738019200"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;