import {
  addWatchedFilmByUser,
  addQueueFilmByUser,
  deleteQueueFilmById,
  deleteWatchedFilmById,
  isQueue,
  isWatched,
} from './db';
// import { currentUserId } from './user';

export const refs = {
  KEY: 'a115fde3660c9e5b413d785f288ed44e',
  btnWatchedEl: document.querySelector('#dima-btn-watched'),
  btnQueueEl: document.querySelector('#dima-btn-queue'),
  btnWatchedItemAdd: document.querySelector('.d-add-watched'),
  btnWatchedItemRemove: document.querySelector('.d-remove-watched'),
  btnQueueItemAdd: document.querySelector('.d-add-queue'),
  btnQueueItemRemove: document.querySelector('.d-remove-queue'),
};

refs.btnQueueEl.classList.remove('active');
refs.btnWatchedEl.addEventListener('click', () => onBtnClickWatched(762504));
refs.btnQueueEl.addEventListener('click', () => onBtnClickQueue(762504));

// -------------- При клике на кнопку Queue ---------------

export async function onBtnClickQueue(filmId) {
  refs.btnWatchedEl.classList.remove('active');
  refs.btnQueueEl.classList.add('active');
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
  btnQueueItemAdd.classList.toggle('hide');
  btnQueueItemRemove.classList.toggle('hide');
}

// -------------- При клике на кнопку Watched ---------------

export async function onBtnClickWatched(userId, filmId) {
  refs.btnWatchedEl.classList.add('active');
  refs.btnQueueEl.classList.remove('active');
  const answer = await isWatched(userId, filmId);

  findFilmById(filmId).then(film => {
    if (answer) {
      deleteWatchedFilmById(userId, filmId);
      console.log('вызвали удалить');
      return;
    } else {
      addWatchedFilmByUser(userId, film);
      console.log('вызвали добавить');
      console.log(film);
    }
  });
  refs.btnWatchedItemAdd.classList.toggle('hide');
  refs.btnWatchedItemRemove.classList.toggle('hide');
}

// -------------- Для поиска фильма по ID ---------------

export async function findFilmById(filmId) {
  const data = await fetch(`
https://api.themoviedb.org/3/movie/${filmId}?api_key=${refs.KEY}&language=en-US`);
  const film = await data.json();
  return film;
}

// -------------- Узнать есть фильм в базе или нет (возвращает true/false) ---------------

export async function answerIsWatched(currentUserId, filmId) {
  const answer = await isWatched(currentUserId, filmId);
  return answer;
}
export async function answerIsQueue(currentUserId, filmId) {
  const answer = await isQueue(currentUserId, filmId);
  return answer;
}
// ------------Проверка Юзера
function isCurrentUser(userID) {
  if (userID === null) {
    btnWatchedEl.setAttribute('disabled', 'disabled');
  } else {
    btnWatchedEl.removeAttribute('disabled');
  }
}

// answerIsWatched(currentUserId, 438148).then(console.log);
// answerIsWatched(currentUserId, 438148).then(answer => {
//   if (answer) {
//     refs.btnWatchedItemAdd.classList.add('hide');
//     refs.btnWatchedItemRemove.classList.remove('hide');

//     console.log(answer);
//   } else {
//     refs.btnWatchedItemAdd.classList.remove('hide');
//     refs.btnWatchedItemRemove.classList.add('hide');
//   }
// });
