// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7sQW-mpjrRScQOpC8K3ToDrA9c5KRfzA",
  authDomain: "learn-with-ex.firebaseapp.com",
  projectId: "learn-with-ex",
  storageBucket: "learn-with-ex.appspot.com",
  messagingSenderId: "955740144280",
  appId: "1:955740144280:web:468a4781cdce18ba1a86ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;