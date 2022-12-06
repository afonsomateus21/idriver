import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIYWVBH3x8dbq0MU97jOSe_J9b7xcXKvQ",
  authDomain: "idriver-dc9fd.firebaseapp.com",
  projectId: "idriver-dc9fd",
  storageBucket: "idriver-dc9fd.appspot.com",
  messagingSenderId: "289524394177",
  appId: "1:289524394177:web:6c1de7bb809bd39d8c0c40",
  measurementId: "G-VZ18K22JZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
