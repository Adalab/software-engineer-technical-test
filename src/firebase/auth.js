import { auth } from './firebase';
import {
  sendPasswordResetEmail,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updatePassword,
} from 'firebase/auth';

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

// Sign out
export const doSignOut = () => signOut(auth);

// Password Reset
export const doPasswordReset = (email) => sendPasswordResetEmail(auth, email);

// Password Change
export const doPasswordUpdate = (password) =>
  updatePassword(auth.currentUser, password);
