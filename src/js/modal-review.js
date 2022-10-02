import {
  addWatchedFilmByUser,
  addQueueFilmByUser,
  deleteQueueFilmById,
  deleteWatchedFilmById,
  isQueue,
  isWatched,
} from './db';
// import { showLoader, hideLoader } from './pre_loader';
import { currentUserId } from './user';
import {
  // onBtnClickQueue,
  // onBtnClickWatched,
  findFilmById,
} from './push-data-to-database';

const refs = {
  modal: document.querySelector('[data-modal]'),
  body: document.querySelector('body'),
  closeModalBtn: document.querySelector('[data-modal-close]'),

  // modalImgReview:document.querySelector('#img-review'),
  // captionImgText:document.querySelector('#caption-review'),
  // voteImgReview:document.querySelector('#vote-review'),
  // votesImgReview:document.querySelector('#votes-review'),
  // popularityImgReview:document.querySelector('#popularity-review'),
  // titleImgReview:document.querySelector('#title-review'),
  // genreImgReview:document.querySelector('#genre-review'),
  // aboutImgReview:document.querySelector('#about-review'),
  // Dima
  // btnWatchedItemAdd: document.querySelector('.d-add-watched'),
  // btnWatchedItemRemove: document.querySelector('.d-remove-watched'),
  // btnQueueItemAdd: document.querySelector('.d-add-queue'),
  // btnQueueItemRemove: document.querySelector('.d-remove-queue'),
  // btnWatchedEl: document.querySelector('#dima-btn-watched'),
  // btnQueueEl: document.querySelector('#dima-btn-queue'),
  galleryFims: document.querySelector('.gallery-films'),
};

// import {onCardClick} from './modal-review';
// data-idcard="${move.id}
// cardList.addEventListener('click', onCardClick);
refs.galleryFims.addEventListener('click', onCardClick);
function openModalReview(id) {
  refs.modal.classList.remove('is-hidden');
  refs.body.classList.add('no-scroll');

  refs.modal.addEventListener('click', onBackdropClick);
  window.addEventListener('keydown', onEscKeyPressExit);
  // Dima
  // showLoader();
  // refs.btnWatchedEl.addEventListener('click', () => onBtnClickWatched(id));
  // refs.btnQueueEl.addEventListener('click', () => onBtnClickQueue(id));
  // answerIsWatched(currentUserId, id).then(answer => {
  //   if (answer) {
  //     refs.btnWatchedItemAdd.classList.add('hide');
  //     refs.btnWatchedItemRemove.classList.remove('hide');

  //     console.log(answer);
  //   } else {
  //     refs.btnWatchedItemAdd.classList.remove('hide');
  //     refs.btnWatchedItemRemove.classList.add('hide');
  //   }
  // });
  // answerIsQueue(currentUserId, id).then(answer => {
  //   if (answer) {
  //     refs.btnQueueItemAdd.classList.add('hide');
  //     refs.btnQueueItemRemove.classList.remove('hide');

  //     console.log(answer);
  //   } else {
  //     refs.btnQueueItemAdd.classList.remove('hide');
  //     refs.btnQueueItemRemove.classList.add('hide');
  //   }
  // });
}
// Dima
// refs.modal.classList.add('loader');
async function answerIsWatched(currentUserId, filmId) {
  const answer = await isWatched(currentUserId, filmId);
  return answer;
}
async function answerIsQueue(currentUserId, filmId) {
  const answer = await isQueue(currentUserId, filmId);
  return answer;
}

export function onCardClick(e) {
  e.preventDefault();
  const сardId = e.target.closest('li').dataset.id;
  console.log(сardId);
  openModalReview(сardId);
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
  // refs.modalImgReview.src = `https://image.tmdb.org/t/p/w500${
  //   card.poster_path}`
  //   ?`https://image.tmdb.org/t/p/w500${
  //   card.poster_path}`
  //   : './images/imgModalReview.jpg';
  // refs.captionImgText.textContent = card.title;
  // refs.voteImgReview.textContent = card.vote_average.toFixed(1);
  // refs.votesImgReview.textContent = card.vote_count.toFixed(0);
  // refs.popularityImgReview.textContent = card.popularity.toFixed(1);
  // refs.titleImgReview.textContent = card.original_title;
  // refs.genreImgReview.textContent = card.genres.map(genre => genre.name).join(", ");
  // refs.aboutImgReview.textContent = card.overview? card.overview : 'An excellent film and worthy of your attention!';

  console.log('move', move);
  refs.closeModalBtn.addEventListener('click', closeModalReview);
  listenerBtnWatched(move.id);

  return (refs.modal.innerHTML = `<div class="modal-review">
    <button
    type ="button" class="review__btn-close close"
    >
    </button>
    <div class="modal-review__body">
      <div class="modal-review__card">
        <img class="modal-review__content" 
        src="https://image.tmdb.org/t/p/w500${move.poster_path}"
            ? "https://image.tmdb.org/t/p/w500${move.poster_path}"
            : "./images/imgModalReview.jpg" />
      </div>
      <div class="modal-review__container">
        <h2 class="modal-review__title" id="caption-review">${move.title}</h2>
        <ul class="modal-review__items">
          <li class="modal-review__item list">Vote / Votes</li>
          <p class="modal-review__item--grid">
            <span class="modal-review__item--rating" id="vote-review"> ${move.vote_average.toFixed(
              1
            )} </span>
            <span class="modal-review__slash"> / </span>
            <span class="modal-review__item--dark"  id="votes-review"> ${move.vote_count.toFixed(
              0
            )} </span>
          </p>
          <li class="modal-review__item list">Popularity</li>
          <p class="modal-review__item--dark" id="popularity-review">${move.popularity.toFixed(
            1
          )} </p>
          <li class="modal-review__item list">Original Title</li>
          <p class="modal-review__item--dark" id="title-review">${
            move.original_title
          }</p>
          <li class="modal-review__item list">Genre</li>
          <p class="modal-review__item--dark" id="genre-review">${move.genres
            .map(genre => genre.name)
            .join(', ')} </p>
        </ul>
        <p class="modal-review__subtitle">About</p>
        <p class="modal-review__about" id="about-review">${
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
  </div>`);
}

// Dima ----------------------------------
async function listenerBtnWatched(id) {
  const filmId = await id;
  const dimarefs = await {
    btnWatchedEl: document.querySelector('#dima-btn-watched'),
    btnQueueEl: document.querySelector('#dima-btn-queue'),
    btnWatchedItemAdd: document.querySelector('.d-add-watched'),
    btnWatchedItemRemove: document.querySelector('.d-remove-watched'),
    btnQueueItemAdd: document.querySelector('.d-add-queue'),
    btnQueueItemRemove: document.querySelector('.d-remove-queue'),
  };
  answerIsWatched(currentUserId, filmId).then(answer => {
    if (answer) {
      dimarefs.btnWatchedItemAdd.classList.add('hide');
      dimarefs.btnWatchedItemRemove.classList.remove('hide');

      console.log(answer);
    } else {
      dimarefs.btnWatchedItemAdd.classList.remove('hide');
      dimarefs.btnWatchedItemRemove.classList.add('hide');
    }
  });
  answerIsQueue(currentUserId, filmId).then(answer => {
    if (answer) {
      dimarefs.btnQueueItemAdd.classList.add('hide');
      dimarefs.btnQueueItemRemove.classList.remove('hide');

      console.log(answer);
    } else {
      dimarefs.btnQueueItemAdd.classList.remove('hide');
      dimarefs.btnQueueItemRemove.classList.add('hide');
    }
  });
  dimarefs.btnQueueEl.classList.remove('active');
  dimarefs.btnWatchedEl.addEventListener('click', () =>
    onBtnClickWatched(filmId)
  );
  dimarefs.btnQueueEl.addEventListener('click', () => onBtnClickQueue(filmId));
  // -----
  async function onBtnClickWatched(filmId) {
    dimarefs.btnWatchedEl.classList.add('active');
    dimarefs.btnQueueEl.classList.remove('active');
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
    dimarefs.btnWatchedItemAdd.classList.toggle('hide');
    dimarefs.btnWatchedItemRemove.classList.toggle('hide');
  }
  async function onBtnClickQueue(filmId) {
    dimarefs.btnWatchedEl.classList.remove('active');
    dimarefs.btnQueueEl.classList.add('active');
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
    dimarefs.btnQueueItemAdd.classList.toggle('hide');
    dimarefs.btnQueueItemRemove.classList.toggle('hide');
  }
  // -----
}
// -----------------
