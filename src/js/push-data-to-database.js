import {
  addWatchedFilmByUser,
  addQueueFilmByUser,
  deleteQueueFilmById,
  deleteWatchedFilmById,
  isQueue,
  isWatched,
} from './db';
import { currentUserId } from './user';

export const dimarefs = {
  KEY: 'a115fde3660c9e5b413d785f288ed44e',
  btnWatchedEl: document.querySelector('#dima-btn-watched'),
  btnQueueEl: document.querySelector('#dima-btn-queue'),
  btnWatchedItemAdd: document.querySelector('.d-add-watched'),
  btnWatchedItemRemove: document.querySelector('.d-remove-watched'),
  btnQueueItemAdd: document.querySelector('.d-add-queue'),
  btnQueueItemRemove: document.querySelector('.d-remove-queue'),
};

dimarefs.btnQueueEl.classList.remove('active');
// refs.btnWatchedEl.addEventListener('click', () => onBtnClickWatched(642885));
// refs.btnQueueEl.addEventListener('click', () => onBtnClickQueue(762504));

// -------------- При клике на кнопку Queue ---------------

export async function onBtnClickQueue(filmId) {
  dimarefs.btnWatchedEl.classList.remove('active');
  dimarefs.btnQueueEl.classList.add('active');
  const answer = await isQueue(currentUserId, filmId);

  findFilmById(filmId).then(film => {
    if (answer) {
      deleteQueueFilmById(currentUserId, filmId);
      console.log('вызвали удалить');
      return;
    } else {
      addQueueFilmByUser(currentUserId, film);
      console.log('вызвали добавить');
      console.log(film);
    }
  });
  dimarefs.btnQueueItemAdd.classList.toggle('hide');
  dimarefs.btnQueueItemRemove.classList.toggle('hide');
}

// -------------- При клике на кнопку Watched ---------------

export async function onBtnClickWatched(filmId) {
  dimarefs.btnWatchedEl.classList.add('active');
  dimarefs.btnQueueEl.classList.remove('active');
  const answer = await isWatched(currentUserId, filmId);

  findFilmById(filmId).then(film => {
    if (answer) {
      deleteWatchedFilmById(currentUserId, filmId);
      console.log('вызвали удалить');
      return;
    } else {
      addWatchedFilmByUser(currentUserId, film);
      console.log('вызвали добавить');
      console.log(film);
    }
  });
  dimarefs.btnWatchedItemAdd.classList.toggle('hide');
  dimarefs.btnWatchedItemRemove.classList.toggle('hide');
}

// -------------- Для поиска фильма по ID ---------------

export async function findFilmById(filmId) {
  const data = await fetch(`
https://api.themoviedb.org/3/movie/${filmId}?api_key=${dimarefs.KEY}&language=en-US`);
  const film = await data.json();
  return film;
}
async function answerIsWatched(currentUserId, filmId) {
  const answer = await isWatched(currentUserId, filmId);
  return answer;
}

// -------------- Узнать есть фильм в базе или нет (возвращает true/false) ---------------

// answerIsWatched(currentUserId, 438148).then(answer => {
//   if (answer) {
//     dimarefs.btnWatchedItemAdd.classList.add('hide');
//     dimarefs.btnWatchedItemRemove.classList.remove('hide');

//     console.log(answer);
//   } else {
//     dimarefs.btnWatchedItemAdd.classList.remove('hide');
//     dimarefs.btnWatchedItemRemove.classList.add('hide');
//   }
// });
