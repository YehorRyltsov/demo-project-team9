import 'firebaseui/dist/firebaseui.css';

import './js/user';

import addWatchedFilmById from './js/db';

const ref = {
  addWatched: document.querySelector('#add-watched'),
  addQueue: document.querySelector('#add-queue'),
  removeWatched: document.querySelector('#remove-watched'),
  removeQueue: document.querySelector('#remove-queue'),
  getWatched: document.querySelector('#get-watched'),
  getQueue: document.querySelector('#get-queue'),
};

ref.addWatched.addEventListener('click', () => {
  addWatchedFilmById(user.uid);
});
