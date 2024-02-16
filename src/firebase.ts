import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4uzItmhwqYtap-anVU1vPdgRAcLBPeCw",
  authDomain: "discord-clone-udemy-98237.firebaseapp.com",
  projectId: "discord-clone-udemy-98237",
  storageBucket: "discord-clone-udemy-98237.appspot.com",
  messagingSenderId: "289118109841",
  appId: "1:289118109841:web:20230236e4e8be8d7cbf30",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
