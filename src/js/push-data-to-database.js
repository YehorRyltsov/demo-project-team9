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
};

// -------------- При клике на кнопку Queue ---------------

export async function onBtnClickQueue(filmId, QueueItemAdd, QueueItemRemove) {
  if (currentUserId === null) {
    showModal();
  } else {
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

export async function answerIsWatched(currentUserId, filmId) {
  const answer = await isWatched(currentUserId, filmId);
  return answer;
}
export async function answerIsQueue(currentUserId, filmId) {
  const answer = await isQueue(currentUserId, filmId);
  return answer;
}
