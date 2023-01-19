import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgBmSaB9w5ccYj277JPaE1KUYn4nanpAQ",
  authDomain: "wsc-db.firebaseapp.com",
  projectId: "wsc-db",
  storageBucket: "wsc-db.appspot.com",
  messagingSenderId: "824306330592",
  appId: "1:824306330592:web:9fac5c3def6fc25fa1d985",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
