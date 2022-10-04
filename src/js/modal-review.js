import { Loading } from 'notiflix/build/notiflix-loading-aio';
import {
  answerIsQueue,
  answerIsWatched,
  onBtnClickWatched,
  onBtnClickQueue,
  findFilmById,
  OnBtnClickCheckUser,
} from './push-data-to-database';
import { currentUserId } from './user';
import {lengthGenreMovies} from './lengthGenreMovies';

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

refs.modal.addEventListener('click', onBackdropClick);
window.addEventListener('keydown', onEscKeyPressExit);

function openModalReview() {
  refs.modal.classList.remove('is-hidden');
  refs.body.classList.add('no-scroll');

  refs.modal.addEventListener('click', onBackdropClick);
  window.addEventListener('keydown', onEscKeyPressExit);
}

function openModalReview() {
  refs.modal.classList.remove('is-hidden');
  refs.body.classList.add('no-scroll');

  refs.modal.addEventListener('click', onBackdropClick);
  window.addEventListener('keydown', onEscKeyPressExit);
}

export function onCardClick(e) {
  e.preventDefault();
  Loading.pulse({
    svgSize: '150px',
    svgColor: '#FF6B08',
  });
  Loading.remove(600);
  const сardId = e.target.closest('li').dataset.idcard;
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
  let src = 'https://i.ibb.co/0GKG6L1/img-Modal-Review.jpg';
  if (move.poster_path != null && move.poster_path != 'null') {
    src = `https://image.tmdb.org/t/p/w500${move.poster_path}`;
  }
  let genre = lengthGenreMovies(move);
  refs.modal.innerHTML = `<div class="modal-review">
    <button
    type ="button" class="review__btn-close close"
    >
    </button>
    <div class="modal-review__body">
      <div class="modal-review__card">
        <img class="modal-review__content"
        src="${src}" />
      </div>
      <div class="modal-review__container">
        <h2 class="modal-review__title">${move.title.toUpperCase()}</h2>
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
          <p class="modal-review__item--dark">${move.original_title.toUpperCase()}</p>
          <div class="modal-review__item list">Genre</div>
          <p class="modal-review__item--dark">${genre} </p>
        </div>
        <p class="modal-review__subtitle">About</p>
        <p class="modal-review__about">${
          move.overview
            ? move.overview
            : 'An excellent film and worthy of your attention!'
        }
        </p>
        <div class="modal-review__btn-container">
          <button type="button" class="modal-review__btn watched">
            <span class="d-add-watched">ADD TO WATCHED</span>
    <span class="d-remove-watched hide">REMOVE WATCHED</span>
          </button>
          <button type="button" class="modal-review__btn queue"> <span class="d-add-queue">ADD TO QUEUE</span>
    <span class="d-remove-queue hide">REMOVE QUEUE</span></button>
        </div>
      </div>
    </div>
  </div>`;

  const closeModalBtn = document.querySelector('.review__btn-close');
  closeModalBtn.addEventListener('click', closeModalReview);
  // ------------------ DIMA ------------------------------
  const btnWatchedEl = document.querySelector('.watched');
  const btnQueueEl = document.querySelector('.queue');
  const btnWatchedItemAdd = document.querySelector('.d-add-watched');
  const btnWatchedItemRemove = document.querySelector('.d-remove-watched');
  const btnQueueItemAdd = document.querySelector('.d-add-queue');
  const btnQueueItemRemove = document.querySelector('.d-remove-queue');

  btnWatchedEl.addEventListener('click', () =>
    onBtnClickWatched(move.id, btnWatchedItemAdd, btnWatchedItemRemove)
  );
  btnQueueEl.addEventListener('click', () =>
    onBtnClickQueue(move.id, btnQueueItemAdd, btnQueueItemRemove)
  );
  if (currentUserId === null) {
    return;
  } else {
    answerIsWatched(currentUserId, move.id).then(answer => {
      if (answer) {
        btnWatchedItemAdd.classList.add('hide');
        btnWatchedItemRemove.classList.remove('hide');

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
  }
}
