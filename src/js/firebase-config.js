import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCBxxRSUEogARLc21jYUMyG-oQ62S7fczo',
  authDomain: 'filmoteka-9ac74.firebaseapp.com',
  projectId: 'filmoteka-9ac74',
  storageBucket: 'filmoteka-9ac74.appspot.com',
  messagingSenderId: '294408467658',
  appId: '1:294408467658:web:cb60f19715353b83323033',
  measurementId: 'G-KN88PKYZVD',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default class User {
  static async create(email, password) {
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
      });
  }

  async login(email, password) {
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
}
