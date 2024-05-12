// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

console.log(import.meta.env.VITE_APIKEY)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "prodswap-hub.firebaseapp.com",
  projectId: "prodswap-hub",
  storageBucket: "prodswap-hub.appspot.com",
  messagingSenderId: "324146707126",
  appId: "1:324146707126:web:634347d961a471ae604417"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);