import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPh5qFvLblt0svERibT_BpwaNPG5vYhjo",
  authDomain: "rajnish-wood-art-review.firebaseapp.com",
  projectId: "rajnish-wood-art-review",
  storageBucket: "rajnish-wood-art-review.firebasestorage.app",
  messagingSenderId: "42805621037",
  appId: "1:42805621037:web:4632169737a3f1d05023a4  ",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
