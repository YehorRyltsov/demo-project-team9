import {
  addWatchedFilmByUser,
  addQueueFilmByUser,
  deleteQueueFilmById,
  deleteWatchedFilmById,
  isQueue,
  isWatched,
} from './db';
import { currentUserId } from './user';

const KEY = 'a115fde3660c9e5b413d785f288ed44e';
const btnWatchedEl = document.querySelector('#test-watched');
async function fetchFilms() {
  const data = await fetch(`
     https://api.themoviedb.org/3/trending/all/week?api_key=${KEY}`);
  const films = await data.json();
  console.log(films.results);
  return films.results;
}

btnWatchedEl.addEventListener('click', onBtnClickWatched(113988));

function onBtnClickQueue(filmId) {
  findFilmById(filmId).then(film => {
    const filmKeyForStorage = `${filmId}`;
    const films = {
      name: `${film.title}`,
      id: `${film.id}`,
      genres: `${film.genres.map(genre => ` ${genre.name}`)}`,
      year: `${film.release_date.slice(0, 4)}`,
      raiting: `${film.vote_average.toFixed(1)}`,
    };

    localStorage.setItem(filmKeyForStorage, JSON.stringify(films));
  });
}
function onBtnClickWatched(filmId) {
  console.log(isWatched(currentUserId, filmId));
  findFilmById(filmId).then(film => {
    if (isWatched(currentUserId, filmId)) {
      deleteWatchedFilmById(currentUserId, filmId);
      console.log('вызвали удалить');
      return;
    } else {
      addWatchedFilmByUser(currentUserId, film);
      console.log('вызвали добавить');
    }
  });
}

onBtnClickQueue(113988);

async function findFilmById(filmId) {
  const data = await fetch(`
https://api.themoviedb.org/3/movie/${filmId}?api_key=${KEY}&language=en-US`);
  const film = await data.json();
  //   console.log(film);
  return film;
}
findFilmById(113988);
