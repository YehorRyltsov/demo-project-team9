import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase';
import { getDatabase, ref, set, onValue, push } from 'firebase/database';

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export function addWatchedFilmByUser(userId, film) {
  const watchedListRef = ref(db, `user/${userId}/watched/`);
  const newfilmRef = push(watchedListRef);
  set(newfilmRef, film);
}

export function deleteWatchedFilmByID(userId, filmId) {
  const watchedFilmToRemove = ref(
    db,
    `user/${userId}/watched/-ND9RtXPA9J5Yz5_ocWW`
  );
  set(watchedFilmToRemove, null);
}

export function addQueueFilmByUser(userId, film) {
  const queueListRef = ref(db, `user/${userId}/queue/`);
  const newfilmRef = push(queueListRef);
  set(newfilmRef, film);
}

export function deleteQueueFilmById(userId, filmId) {
  const queueFilmToRemove = ref(db, `user/${userId}/queue/${filmId}`);
  set(queueFilmToRemove, null);
}

export function getWatchedFilmsByUser(userId) {
  const result = [];
  const dbRef = ref(db, `user/${userId}/watched/`);
  onValue(
    dbRef,
    snapshot => {
      snapshot.forEach(childSnapshot => {
        result.push(childSnapshot.val());
      });
    },
    {
      onlyOnce: true,
    }
  );
  // console.log(result);
  return result;
}

export function getQueueFilmsByUser(userId) {
  const result = [];
  const dbRef = ref(db, `user/${userId}/queue/`);
  onValue(
    dbRef,
    snapshot => {
      snapshot.forEach(childSnapshot => {
        result.push(childSnapshot.val());
      });
    },
    {
      onlyOnce: true,
    }
  );
  // console.log(result);
  return result;
}
