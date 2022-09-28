import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCBxxRSUEogARLc21jYUMyG-oQ62S7fczo',
  authDomain: 'filmoteka-9ac74.firebaseapp.com',
  projectId: 'filmoteka-9ac74',
  storageBucket: 'filmoteka-9ac74.appspot.com',
  messagingSenderId: '294408467658',
  appId: '1:294408467658:web:cb60f19715353b83323033',
  measurementId: 'G-KN88PKYZVD',
  databaseURL:
    'https://filmoteka-9ac74-default-rtdb.europe-west1.firebasedatabase.app',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export function create(email, password) {
  // const auth = getAuth(app);
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.error(error.message);
    });
}

export function login(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

export function onAuth(fn) {
  onAuthStateChanged(auth, fn);
}

export function logOut() {
  signOut(auth);
}
