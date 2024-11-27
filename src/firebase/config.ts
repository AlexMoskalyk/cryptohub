import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

const firebaseConfig:FirebaseConfig = {
  apiKey: "AIzaSyDh5eUrTHh4gq8mlE2j0asq8vI2UWz3nS4",
  authDomain: "cryptohub-6006f.firebaseapp.com",
  projectId: "cryptohub-6006f",
  storageBucket: "cryptohub-6006f.appspot.com",
  messagingSenderId: "769102355080",
  appId: "1:769102355080:web:83bbd6408deff042485d3d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
