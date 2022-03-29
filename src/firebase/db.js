import { db } from './firebase';
import { collection, doc, setDoc, getDoc } from 'firebase/firestore';

// Candidates API
const candidatesCollection = collection(db, 'candidates');

export const updateCandidate = (id, field) =>
  setDoc(doc(candidatesCollection, id), field, { merge: true }).then(() =>
    getCandidate(id)
  );

export const getCandidate = (id) =>
  getDoc(doc(candidatesCollection, id)).then((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
