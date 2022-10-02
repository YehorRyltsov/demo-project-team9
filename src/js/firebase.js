import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import Notiflix from 'notiflix';
Notiflix.Notify.init({
  position: 'center-top',
});

export const firebaseConfig = {
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

export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function create(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      Notiflix.Notify.success(`Yahoooo!!!! Welcome ${email}`);
      const user = userCredential.user;
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(error.message);
      Notiflix.Notify.failure('We cant create user likes this');
    });
}

export function login(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      Notiflix.Notify.success('Login success');
      const user = userCredential.user;
    })
    .catch(error => {
      Notiflix.Notify.failure('Login failure');
    });
}

export function onAuth(fn) {
  onAuthStateChanged(auth, fn);
}

export function logOut() {
  signOut(auth);
  Notiflix.Notify.info('You just logOut');
}
