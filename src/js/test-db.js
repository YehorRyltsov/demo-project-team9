// Тестовый для проверки работы с Realtime Database

//Импортируем текущего пользователя
import { currentUserId } from './user';

//Импортирем функции из db.js
import {
  addWatchedFilmByUser,
  deleteWatchedFilmById,
  addQueueFilmByUser,
  deleteQueueFilmById,
  getWatchedFilmsByUser,
  getQueueFilmsByUser,
  isWatched,
  isQueue,
} from './db';

//Добавлены ref-ы слушатели на кнопки
const ref = {
  addWatched: document.querySelector('#add-watched'),
  addQueue: document.querySelector('#add-queue'),
  removeWatched: document.querySelector('#remove-watched'),
  removeQueue: document.querySelector('#remove-queue'),
  getWatched: document.querySelector('#get-watched'),
  getQueue: document.querySelector('#get-queue'),
  isWatched: document.querySelector('#is-watched'),
  isQueue: document.querySelector('#is-queue'),
};

ref.addWatched.addEventListener('click', onAddWatchedClick);
ref.removeWatched.addEventListener('click', onRemoveWatchedClick);
ref.addQueue.addEventListener('click', onAddQueueClick);
ref.removeQueue.addEventListener('click', onRemoveQueueClick);
ref.getWatched.addEventListener('click', onWatchedClick);
ref.getQueue.addEventListener('click', onQueueClick);
ref.isWatched.addEventListener('click', onIsWatchedClick);
ref.isQueue.addEventListener('click', onIsQueueClick);

//Тестовый объект фильма, полученный с API, для отправки в БД
const film = {
  adult: false,
  backdrop_path: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg',
  belongs_to_collection: {
    id: 131296,
    name: 'Thor Collection',
    poster_path: '/yw7gr7DhHHVTLlO8Se8uH17TDMA.jpg',
    backdrop_path: '/3KL8UNKFWgIKXzLHjwY0uwgjzYl.jpg',
  },
  budget: 250000000,
  genres: [
    { id: 14, name: 'Fantasy' },
    { id: 28, name: 'Action' },
    { id: 35, name: 'Comedy' },
  ],
  homepage: 'https://www.marvel.com/movies/thor-love-and-thunder',
  id: 616037,
  imdb_id: 'tt10648342',
  original_language: 'en',
  original_title: 'Thor: Love and Thunder',
  overview:
    'After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.',
  popularity: 1869.63,
  poster_path: '/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg',
  production_companies: [
    {
      id: 420,
      logo_path: '/hUzeosd33nzE5MCNsZxCGEKTXaQ.png',
      name: 'Marvel Studios',
      origin_country: 'US',
    },
    {
      id: 176762,
      logo_path: null,
      name: 'Kevin Feige Productions',
      origin_country: 'US',
    },
  ],
  production_countries: [
    { iso_3166_1: 'US', name: 'United States of America' },
  ],
  release_date: '2022-07-06',
  revenue: 758004063,
  runtime: 119,
  spoken_languages: [
    { english_name: 'English', iso_639_1: 'en', name: 'English' },
  ],
  status: 'Released',
  tagline: 'The one is not the only.',
  title: 'Thor: Love and Thunder',
  video: false,
  vote_average: 6.772,
  vote_count: 3840,
};

const folm = {
  adult: false,
  backdrop_path: '/C8FpZfTPEZDjngPlatiFsaDB4A.jpg',
  belongs_to_collection: null,
  budget: 90000000,
  genres: [
    {
      id: 28,
      name: 'Action',
    },
    {
      id: 35,
      name: 'Comedy',
    },
    {
      id: 53,
      name: 'Thriller',
    },
  ],
  homepage: 'https://www.bullettrainmovie.com',
  id: 718930,
  imdb_id: 'tt12593682',
  original_language: 'en',
  original_title: 'Bullet Train',
  overview:
    "Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans, as Ladybug's latest mission puts him on a collision course with lethal adversaries from around the globe—all with connected, yet conflicting, objectives—on the world's fastest train.",
  popularity: 2897.045,
  poster_path: '/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg',
  production_companies: [
    {
      id: 5,
      logo_path: '/71BqEFAF4V3qjjMPCpLuyJFB9A.png',
      name: 'Columbia Pictures',
      origin_country: 'US',
    },
    {
      id: 121470,
      logo_path: null,
      name: '87North Productions',
      origin_country: 'US',
    },
  ],
  production_countries: [
    {
      iso_3166_1: 'US',
      name: 'United States of America',
    },
  ],
  release_date: '2022-07-03',
  revenue: 230000000,
  runtime: 127,
  spoken_languages: [
    {
      english_name: 'Japanese',
      iso_639_1: 'ja',
      name: '日本語',
    },
    {
      english_name: 'English',
      iso_639_1: 'en',
      name: 'English',
    },
    {
      english_name: 'Russian',
      iso_639_1: 'ru',
      name: 'Pусский',
    },
    {
      english_name: 'Spanish',
      iso_639_1: 'es',
      name: 'Español',
    },
  ],
  status: 'Released',
  tagline: 'The end of the line is just the beginning.',
  title: 'Bullet Train',
  video: false,
  vote_average: 7.438,
  vote_count: 1032,
};

//Тестовый id фильма, полученный из объекта
let idToRemove = film.id;

//Вызовы функций

function onAddWatchedClick() {
  console.log(currentUserId);
  if (!currentUserId) {
    //TODO: добавить всплывашку залогинься
    console.log('добавить всплывашку залогинься');
  }
  addWatchedFilmByUser(currentUserId, folm);
}

function onAddQueueClick() {
  console.log(currentUserId);
  if (!currentUserId) {
    //TODO: добавить всплывашку залогинься
    console.log('добавить всплывашку залогинься');
  }
  idToRemove = addQueueFilmByUser(currentUserId, folm);
  // console.log(idToRemove);
}

function onRemoveWatchedClick() {
  deleteWatchedFilmById(currentUserId, folm.id);
}

function onRemoveQueueClick() {
  deleteQueueFilmById(currentUserId, 113988);
}

// async function isWatched() {
//   const result = await isWatched(currentUserId, folm.id);
//   console.log(result);
// }

function onWatchedClick() {
  getWatchedFilmsByUser(currentUserId);
}

function onQueueClick() {
  getQueueFilmsByUser(currentUserId);
}

async function onIsWatchedClick() {
  const d = await isWatched(currentUserId, folm.id);
  console.log(d);
}

async function onIsQueueClick() {
  const d = await isQueue(currentUserId, folm.id);
  console.log(d);
}

export { onQueueClick };
