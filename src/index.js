import 'firebaseui/dist/firebaseui.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Block } from 'notiflix/build/notiflix-block-aio';
Notify.init({
  position: 'right-bottom',
});
import './js/user';
// import './js/test-db';
import { currentUserId } from './js/user';
import './js/main-movies';
import './js/my-library-header';
import './js/pagination';
import './js/push-data-to-database';
import './js/modal-team';
import './js/search-line';
import './js/hideAndOpen-modal.js';
import './js/modal-review';
