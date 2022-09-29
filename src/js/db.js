import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase';
import {
  getDatabase,
  ref,
  set,
  onValue,
  child,
  push,
  update,
} from 'firebase/database';

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export function addWatchedFilmById(userId, filmId) {}

export function deleteWatchedFilmById(userId, filmId) {}

export function addQueueFilmById(userId, filmId) {}

export function deleteQueueFilmById(userId, filmId) {}

export function getWatchedFilmsByUser(userId) {}

export function getQueueFilmsByUser(userId) {}
