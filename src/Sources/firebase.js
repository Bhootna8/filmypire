import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA561-7-vj6ZezFCCBDIRESXhswNrpie4s",
  authDomain: "filmy-5df19.firebaseapp.com",
  projectId: "filmy-5df19",
  storageBucket: "filmy-5df19.appspot.com",
  messagingSenderId: "63557571079",
  appId: "1:63557571079:web:445d6e867e6c293c3a50a2"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const fireStore = getFirestore(firebaseApp);