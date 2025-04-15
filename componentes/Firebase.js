import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOsYTou7qM0urC8dESjsY1PImFBthgAmE",
  authDomain: "acessobdat.firebaseapp.com",
  projectId: "acessobdat",
  storageBucket: "acessobdat.firebasestorage.app",
  messagingSenderId: "484696325111",
  appId: "1:484696325111:web:9289f7dd78e1d0e6e20cf2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};