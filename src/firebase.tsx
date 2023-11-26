import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyAXUj8lgV5uNlkdAGE523vnRN77EHoPUfw",
  authDomain: "new-app-b81f9.firebaseapp.com",
  projectId: "new-app-b81f9",
  storageBucket: "new-app-b81f9.appspot.com",
  messagingSenderId: "768018712654",
  appId: "1:768018712654:web:1c3616346f74110a9d9b1f",
  measurementId: "G-QC5FWVSFSJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 

export { db }; 
