import {getApp, getApps, initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from './fbconfig';

  
  // Initialize Firebase
export const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
export const db = getFirestore(app)