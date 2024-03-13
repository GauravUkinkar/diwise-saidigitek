// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhmWLVW2EmwS4eiZ2R2_Olv8MfpoGQ0Jo",
  authDomain: "saidigitek-db-6c5aa.firebaseapp.com",
  projectId: "saidigitek-db-6c5aa",
  storageBucket: "saidigitek-db-6c5aa.appspot.com",
  messagingSenderId: "583677570754",
  appId: "1:583677570754:web:2f487cfe4ed29321c1155b",
  measurementId: "G-5DK7F0GWYK",
  databaseURL: "https://saidigitek-db-6c5aa-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);