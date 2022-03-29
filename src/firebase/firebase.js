import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import config from './config.json';

const app = initializeApp(config);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
