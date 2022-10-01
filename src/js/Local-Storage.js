import {
  addWatchedFilmByUser,
  addQueueFilmByUser,
  deleteQueueFilmById,
  deleteWatchedFilmById,
  isQueue,
  isWatched,
  getWatchedFilmsByUser,
  getQueueFilmsByUser,
} from './db';
import { currentUserId } from './user';

const refs = {
  KEY: 'a115fde3660c9e5b413d785f288ed44e',
  btnWatchedEl: document.querySelector('#test-watched'),
  btnQueueEl: document.querySelector('#test-queue'),
  btnWatchedItemAdd: document.querySelector('.d-add-watched'),
  btnWatchedItemRemove: document.querySelector('.d-remove-watched'),
  btnQueueItemAdd: document.querySelector('.d-add-queue'),
  btnQueueItemRemove: document.querySelector('.d-remove-queue'),
};

refs.btnWatchedEl.addEventListener('click', () => onBtnClickWatched(438148));
refs.btnQueueEl.addEventListener('click', () => onBtnClickQueue(762504));

function onBtnClickQueue(filmId) {
  findFilmById(filmId).then(film => {
    if (isQueue(currentUserId, filmId)) {
      deleteQueueFilmById(currentUserId, filmId);
      console.log('вызвали удалить');
      return;
    } else {
      addQueueFilmByUser(currentUserId, film);
      console.log('вызвали добавить');
    }
    console.log(film);
  });
}
function onBtnClickWatched(filmId) {
  findFilmById(filmId).then(film => {
    if (isWatched(currentUserId, filmId)) {
      deleteWatchedFilmById(currentUserId, filmId);
      console.log('вызвали удалить');
      return;
    } else {
      addWatchedFilmByUser(currentUserId, film);
      console.log('вызвали добавить');
    }
    console.log(film);
  });
}

async function findFilmById(filmId) {
  const data = await fetch(`
https://api.themoviedb.org/3/movie/${filmId}?api_key=${refs.KEY}&language=en-US`);
  const film = await data.json();
  //   console.log(film);
  return film;
}

async function onIsWatchedClick() {
  const answer = await isWatched(currentUserId, 438148);
  //   if (answer) {
  //     refs.btnWatchedItemRemove.classList.add('show');
  //     console.log(answer);
  //   } else {
  //     return;
  //   }
  console.log(answer);
}
onIsWatchedClick();
async function onIsQueueClick() {
  const answer = await isQueue(currentUserId, folm.id);
  if (answer) {
    refs.btnQueueItemRemove.classList.add('show');
  } else {
    return;
  }
}
