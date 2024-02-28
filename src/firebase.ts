import {getApp, getApps, initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCNLKg2DloLCNyxr1_K09xydvl0lo2J8vo",
    authDomain: "postcareai-chatbot.firebaseapp.com",
    projectId: "postcareai-chatbot",
    storageBucket: "postcareai-chatbot.appspot.com",
    messagingSenderId: "1095465867146",
    appId: "1:1095465867146:web:18d19b946b0b11aea45a73",
    databaseURL: "https://postcareai-chatbot-default-rtdb.firebaseio.com/"
  };
  
  // Initialize Firebase
  export const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
  export const db = getFirestore(app)