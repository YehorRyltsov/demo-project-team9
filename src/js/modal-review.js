import {
  addWatchedFilmByUser,
  addQueueFilmByUser,
  deleteQueueFilmById,
  deleteWatchedFilmById,
  isQueue,
  isWatched,
} from './db';
import { currentUserId } from './user';
import {
  findFilmById,
  answerIsQueue,
  answerIsWatched,
} from './push-data-to-database';
const refs = {
  modal: document.querySelector('[data-modal]'),
  body: document.querySelector('body'),
};

function openModalReview() {
  refs.modal.classList.remove('is-hidden');
  refs.body.classList.add('no-scroll');
  refs.modal.addEventListener('click', onBackdropClick);
  window.addEventListener('keydown', onEscKeyPressExit);
}

export function onCardClick(e) {
  e.preventDefault();
  const сardId = e.target.closest('li').dataset.idcard;
  console.log(сardId);
  openModalReview();
  fetchMoveId(сardId)
    .then(renderModalCardReview)
    .catch(error => console.error(error));
}

async function fetchMoveId(сardId) {
  return await fetch(
    `https://api.themoviedb.org/3/movie/${сardId}?api_key=cfb01d01cf730c010b0d096c15822b40`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => console.log(error));
}

function closeModalReview() {
  refs.modal.classList.add('is-hidden');
  refs.body.classList.remove('no-scroll');
  refs.modal.removeEventListener('click', onBackdropClick);
  window.removeEventListener('keydown', onEscKeyPressExit);
}

function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    closeModalReview();
  }
}

function onEscKeyPressExit(event) {
  if (event.code === 'Escape') {
    closeModalReview();
  }
}

function renderModalCardReview(move) {
  refs.modal.innerHTML = `<div class="modal-review">
    <button
    type ="button" class="review__btn-close close"
    >
    </button>
    <div class="modal-review__body">
      <div class="modal-review__card">
        <img class="modal-review__content" 
        src="https://image.tmdb.org/t/p/w500${move.poster_path}"
            ? "https://image.tmdb.org/t/p/w500${move.poster_path}"
            : "./images/imgModalReview.jpg" 
            alt="${move.original_title}" />
      </div>
      <div class="modal-review__container">
        <h2 class="modal-review__title">${move.title}</h2>
        <div class="modal-review__items">
          <div class="modal-review__item list">Vote / Votes</div>
          <p class="modal-review__item--grid">
            <span class="modal-review__item--rating"> ${move.vote_average.toFixed(
              1
            )} </span>
            <span class="modal-review__slash"> / </span>
            <span class="modal-review__item--dark"> ${move.vote_count.toFixed(
              0
            )} </span>
          </p>
          <div class="modal-review__item list">Popularity</div>
          <p class="modal-review__item--dark">${move.popularity.toFixed(1)} </p>
          <div class="modal-review__item list">Original Title</div>
          <p class="modal-review__item--dark">${move.original_title}</p>
          <div class="modal-review__item list">Genre</div>
          <p class="modal-review__item--dark">${move.genres
            .map(genre => genre.name)
            .join(', ')} </p>
        </div>
        <p class="modal-review__subtitle">About</p>
        <p class="modal-review__about">${
          move.overview
            ? move.overview
            : 'An excellent film and worthy of your attention!'
        }
        </p>
        <div class="modal-review__btn-container">
          <button
    type="button"
    id="dima-btn-watched"
    class="d-btn-watched library-btn active"
  >
    <span class="d-add-watched">ADD TO WATCHED</span>
    <span class="d-remove-watched hide">REMOVE WATCHED</span>
  </button>
          <button
    type="button"
    id="dima-btn-queue"
    class="d-btn-queue library-btn active"
  >
    <span class="d-add-queue">ADD TO QUEUE</span>
    <span class="d-remove-queue hide">REMOVE QUEUE</span>
  </button>
        </div>
      </div>
    </div>
  </div>`;

  const closeModalBtn = document.querySelector('.review__btn-close');
  closeModalBtn.addEventListener('click', closeModalReview);
  // --------------------------------------------  DIMA  ------------------------------------------------
  const btnWatchedEl = document.querySelector('#dima-btn-watched');
  const btnQueueEl = document.querySelector('#dima-btn-queue');
  const btnWatchedItemAdd = document.querySelector('.d-add-watched');
  const btnWatchedItemRemove = document.querySelector('.d-remove-watched');
  const btnQueueItemAdd = document.querySelector('.d-add-queue');
  const btnQueueItemRemove = document.querySelector('.d-remove-queue');
  answerIsWatched(currentUserId, move.id).then(answer => {
    if (answer) {
      btnWatchedItemAdd.classList.add('hide');
      btnWatchedItemRemove.classList.remove('hide');

      console.log(answer);
    } else {
      btnWatchedItemAdd.classList.remove('hide');
      btnWatchedItemRemove.classList.add('hide');
    }
  });
  answerIsQueue(currentUserId, move.id).then(answer => {
    if (answer) {
      btnQueueItemAdd.classList.add('hide');
      btnQueueItemRemove.classList.remove('hide');

      console.log(answer);
    } else {
      btnQueueItemAdd.classList.remove('hide');
      btnQueueItemRemove.classList.add('hide');
    }
  });
  btnQueueEl.classList.remove('active');
  btnWatchedEl.addEventListener('click', () => onBtnClickWatched(move.id));
  btnQueueEl.addEventListener('click', () => onBtnClickQueue(move.id));
  // -------------- При клике на кнопку Watched ---------------
  async function onBtnClickWatched(filmId) {
    btnWatchedEl.classList.add('active');
    btnQueueEl.classList.remove('active');
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
  // -------------- При клике на кнопку Queue ---------------
  async function onBtnClickQueue(filmId) {
    btnWatchedEl.classList.remove('active');
    btnQueueEl.classList.add('active');
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

async function answerIsWatched(currentUserId, filmId) {
  const answer = await isWatched(currentUserId, filmId);
  return answer;
}
async function answerIsQueue(currentUserId, filmId) {
  const answer = await isQueue(currentUserId, filmId);
  return answer;
}
