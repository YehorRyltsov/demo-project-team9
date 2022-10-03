import {
  addWatchedFilmByUser,
  addQueueFilmByUser,
  deleteQueueFilmById,
  deleteWatchedFilmById,
  isQueue,
  isWatched,
} from './db';
import { showModal } from './hideAndOpen-modal';
import { currentUserId } from './user';
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

export async function onBtnClickQueue(filmId, QueueItemAdd, QueueItemRemove) {
  if (currentUserId === null) {
    showModal();
  } else {
    refs.btnWatchedEl.classList.remove('active');
    refs.btnQueueEl.classList.add('active');
    const btnQueueItemAdd = await QueueItemAdd;
    const btnQueueItemRemove = await QueueItemRemove;
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
}

// -------------- При клике на кнопку Watched ---------------

export async function onBtnClickWatched(
  filmId,
  WatchedItemAdd,
  WatchedItemRemove
) {
  if (currentUserId === null) {
    showModal();
  } else {
    const btnWatchedItemAdd = await WatchedItemAdd;
    const btnWatchedItemRemove = await WatchedItemRemove;
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
    btnWatchedItemAdd.classList.toggle('hide');
    btnWatchedItemRemove.classList.toggle('hide');
  }
}

// -------------- Для поиска фильма по ID ---------------

export async function findFilmById(filmId) {
  const data = await fetch(`
https://api.themoviedb.org/3/movie/${filmId}?api_key=${refs.KEY}&language=en-US`);
  const film = await data.json();
  return film;
}

// -------------- Узнать есть фильм в базе или нет (возвращает true/false) ---------------
// answerIsWatched(currentUserId, move.id).then(answer => {
//   if (answer) {
//     btnWatchedItemAdd.classList.add('hide');
//     btnWatchedItemRemove.classList.remove('hide');

//     console.log(answer);
//   } else {
//     btnWatchedItemAdd.classList.remove('hide');
//     btnWatchedItemRemove.classList.add('hide');
//   }
// });
// answerIsQueue(currentUserId, move.id).then(answer => {
//   if (answer) {
//     btnQueueItemAdd.classList.add('hide');
//     btnQueueItemRemove.classList.remove('hide');

//     console.log(answer);
//   } else {
//     btnQueueItemAdd.classList.remove('hide');
//     btnQueueItemRemove.classList.add('hide');
//   }
// });

export async function answerIsWatched(currentUserId, filmId) {
  const answer = await isWatched(currentUserId, filmId);
  return answer;
}
export async function answerIsQueue(currentUserId, filmId) {
  const answer = await isQueue(currentUserId, filmId);
  return answer;
}
// ------------Проверка Юзера
// export function OnBtnClickCheckUser(userId) {
//   if (userId === null) {
//     showModal();
//   } else {
//     console.log('Hello, you are login.');
//   }
// }

//
