import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { firebaseConfig } from './firebase-config';
import Notiflix from 'notiflix';
Notiflix.Notify.init({
  position: 'center-top',
});
import { mainMovieEx } from './main-movies';

const app = initializeApp(firebaseConfig);
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
  mainMovieEx(1);
}
