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

const KEY = 'a115fde3660c9e5b413d785f288ed44e';
const btnWatchedEl = document.querySelector('#test-watched');
const btnQueueEl = document.querySelector('#test-queue');
async function fetchFilms() {
  const data = await fetch(`
     https://api.themoviedb.org/3/trending/all/week?api_key=${KEY}`);
  const films = await data.json();
  console.log(films.results);
  return films.results;
}

btnWatchedEl.addEventListener('click', () => onBtnClickWatched(760741));
btnQueueEl.addEventListener('click', () => onBtnClickQueue(762504));

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
https://api.themoviedb.org/3/movie/${filmId}?api_key=${KEY}&language=en-US`);
  const film = await data.json();
  //   console.log(film);
  return film;
}
findFilmById(113988);
getWatchedFilmsByUser(currentUserId);
getQueueFilmsByUser(currentUserId);
