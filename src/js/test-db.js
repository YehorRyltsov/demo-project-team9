import { currentUserId } from './user';

import {
  addWatchedFilmByUser,
  deleteWatchedFilmById,
  addQueueFilmByUser,
  deleteQueueFilmById,
  getWatchedFilmsByUser,
  getQueueFilmsByUser,
} from './db';

const ref = {
  addWatched: document.querySelector('#add-watched'),
  addQueue: document.querySelector('#add-queue'),
  removeWatched: document.querySelector('#remove-watched'),
  removeQueue: document.querySelector('#remove-queue'),
  getWatched: document.querySelector('#get-watched'),
  getQueue: document.querySelector('#get-queue'),
};

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
let idToRemove = 616037;

ref.addWatched.addEventListener('click', onAddWatchedClick);
ref.removeWatched.addEventListener('click', onRemoveWatchedClick);
ref.addQueue.addEventListener('click', onAddQueueClick);
ref.removeQueue.addEventListener('click', onRemoveQueueClick);
ref.getWatched.addEventListener('click', onWatchedClick);
ref.getQueue.addEventListener('click', onQueueClick);

function onAddWatchedClick() {
  console.log(currentUserId);
  if (!currentUserId) {
    //TODO: добавить всплывашку залогинься
    console.log('добавить всплывашку залогинься');
  }
  addWatchedFilmByUser(currentUserId, film);
}

function onAddQueueClick() {
  console.log(currentUserId);
  if (!currentUserId) {
    //TODO: добавить всплывашку залогинься
    console.log('добавить всплывашку залогинься');
  }
  idToRemove = addQueueFilmByUser(currentUserId, film);
  console.log(idToRemove);
}

function onRemoveWatchedClick() {
  deleteWatchedFilmById(currentUserId, idToRemove);
}

function onRemoveQueueClick() {
  deleteQueueFilmById(currentUserId, idToRemove);
}

function onWatchedClick() {
  getWatchedFilmsByUser(currentUserId);
}

function onQueueClick() {
  getQueueFilmsByUser(currentUserId);
}
