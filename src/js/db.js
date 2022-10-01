import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase';
import { getDatabase, ref, set, onValue, push, get } from 'firebase/database';

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
let idToDelete = ''; //удаление проходит по ключу из БД

// Принимет уникальный id пользователя,
// если такого id не существует - создает запись в БД
// в списке watched c объектом, полученным в параметре film
export function addWatchedFilmByUser(userId, film) {
  const watchedListRef = ref(db, `user/${userId}/watched/`);
  const newfilmRef = push(watchedListRef);
  set(newfilmRef, film);
}

// Принимет уникальный id пользователя и id фильма из объекта(с API)
// если ьакой есть - удаляет из списка watched
export function deleteWatchedFilmById(userId, filmId) {
  const dbRef = ref(db, `user/${userId}/watched/`);
  onValue(
    dbRef,
    snapshot => {
      snapshot.forEach(childSnapshot => {
        if (childSnapshot.val().id === filmId) {
          idToDelete = childSnapshot.key;
          const watchedFilmToRemove = ref(
            db,
            `user/${userId}/watched/${idToDelete}`
          );
          set(watchedFilmToRemove, null);
        }
      });
    },
    {
      onlyOnce: true,
    }
  );
}

// Принимет уникальный id пользователя,
// если такого id не существует - создает запись в БД
// в списке queue c объектом, полученным в параметре film
export function addQueueFilmByUser(userId, film) {
  const queueListRef = ref(db, `user/${userId}/queue/`);
  const newfilmRef = push(queueListRef);
  set(newfilmRef, film);
}

// Принимет уникальный id пользователя и id фильма из объекта(с API)
// если ьакой есть - удаляет из списка queue
export function deleteQueueFilmById(userId, filmId) {
  const dbRef = ref(db, `user/${userId}/queue/`);
  onValue(
    dbRef,
    snapshot => {
      snapshot.forEach(childSnapshot => {
        if (childSnapshot.val().id === filmId) {
          idToDelete = childSnapshot.key;
          const queueFilmToRemove = ref(
            db,
            `user/${userId}/queue/${idToDelete}`
          );
          set(queueFilmToRemove, null);
        }
      });
    },
    {
      onlyOnce: true,
    }
  );
}

// Принимет уникальный id пользователя и возвращает массив объектов
// фильиов списка watched, если список пустой - возвращает пустой массив
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
  console.log(result);
  return result;
}

// Принимет уникальный id пользователя и возвращает массив объектов
// фильиов списка queue, если список пустой - возвращает пустой массив
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
  console.dir(result);
  return result;
}

// Проверяет находится ли фильм в списке watched
// Принимет уникальный id пользователя и id фильма из объекта(с API)
// если такой есть - возвращает true, если отсутствует - false

export async function isWatched(userId, filmId) {
  let result = false;
  const dbRef = ref(db, `user/${userId}/watched/`);
  const snapshot = await get(dbRef);
  snapshot.forEach(childSnapshot => {
    // console.log(childSnapshot.val().id);
    if (childSnapshot.val().id === filmId) {
      result = true;
    }
  });
  return result;
}

// Проверяет находится ли фильм в списке queue
// Принимет уникальный id пользователя и id фильма из объекта(с API)
// если такой есть - возвращает true, если отсутствует - false

export async function isQueue(userId, filmId) {
  let result = false;
  const dbRef = ref(db, `user/${userId}/queue/`);
  const snapshot = await get(dbRef);
  snapshot.forEach(childSnapshot => {
    // console.log(childSnapshot.val().id);
    if (childSnapshot.val().id === filmId) {
      result = true;
    }
  });
  return result;
}
