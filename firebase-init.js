// ============================================================
// STEP — Mão de Obra · Shared Firebase Setup
// Every page (index.html, platform.html, admin.html) imports
// its auth/db objects from this one file so there's only one
// place to update if the config ever changes.
// ============================================================

import { initializeApp, deleteApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  collection,
  getDocs,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCt3m7Ews7giHvv5SOrgnfiS9kmCh2rOAU",
  authDomain: "step-mao-de-obra.firebaseapp.com",
  projectId: "step-mao-de-obra",
  storageBucket: "step-mao-de-obra.firebasestorage.app",
  messagingSenderId: "723863023554",
  appId: "1:723863023554:web:ba99fa542d1eb2032af05b"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export {
  firebaseConfig,
  initializeApp,
  deleteApp,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  collection,
  getDocs,
  serverTimestamp
};

// Looks up this user's profile doc in Firestore (role + active flag).
// Every page that needs to know "who is this / are they allowed in"
// calls this after Firebase confirms they're logged in.
export async function getUserProfile(uid) {
  const snap = await getDoc(doc(db, "users", uid));
  return snap.exists() ? snap.data() : null;
}
