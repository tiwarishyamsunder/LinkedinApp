// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpTBsLpwYuHqNySdFMJlg42WX3dhXM6g8",
  authDomain: "linkedin-clone-39ea3.firebaseapp.com",
  projectId: "linkedin-clone-39ea3",
  storageBucket: "linkedin-clone-39ea3.appspot.com",
  messagingSenderId: "136693082862",
  appId: "1:136693082862:web:6c79b398d5ec2d049361ff",
  measurementId: "G-6MERHHTJH3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);
export { auth, app, firestore, storage,analytics };