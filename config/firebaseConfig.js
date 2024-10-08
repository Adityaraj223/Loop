// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "loop-af2db.firebaseapp.com",
  projectId: "loop-af2db",
  storageBucket: "loop-af2db.appspot.com",
  messagingSenderId: "142533213403",
  appId: "1:142533213403:web:1e5bbd4cb57c307ddca0fe",
  measurementId: "G-SXCVH433JT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Initialize Firebase Analytics only in the browser
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      const analytics = getAnalytics(app);
    } else {
      console.log('Firebase Analytics is not supported on this environment');
    }
  });
}
