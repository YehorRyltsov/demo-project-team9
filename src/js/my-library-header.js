import { getWatchedFilmsByUser, getQueueFilmsByUser } from './db';
import { currentUserId } from './user';
import { showModal } from './hideAndOpen-modal';
import { createPagination } from './pagination';
import emptyLibraryPageUrl from '../images/empty-library-page.jpg';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

let movieWatchedList = [];
let movieQueueList = [];
let chunkQueue = {};

const header = document.querySelector('.header');
const searchInput = document.querySelector('.search-form');
const homeHeader = document.querySelector('.home-link');
const myLibraryHeader = document.querySelector('.library-link');
const myLibraryBtnWrap = document.querySelector('.library-btn__wrap');
const watchedBtn = document.querySelector('.watched-btn');
const queueBtn = document.querySelector('.queue-btn');
const logo = document.querySelector('.logo-link');
const sectionPagination = document.querySelector('.section-pagination');
const cardList = document.querySelector('.gallery-films');
const pagin = document.querySelector('#pagination');

homeHeader.addEventListener('click', onHeaderHomeClick);
myLibraryHeader.addEventListener('click', onMyLibraryClick);
watchedBtn.addEventListener('click', onWatchedBtnClick);
queueBtn.addEventListener('click', onQueueBtnClick);
logo.addEventListener('click', onHeaderHomeClick);

export function onHeaderHomeClick(evt) {
  myLibraryBtnWrap.classList.add('visually-hidden');
  searchInput.classList.remove('visually-hidden');
  homeHeader.classList.add('current');
  myLibraryHeader.classList.remove('current');
  header.classList.remove('header__my-library-bg');
  header.classList.add('home-header-bg');
  pagin.style.display = 'flex';
  cardList.classList.add('gallery-films');
}

export function refreshQueue(filmId) {
  getQueueMoviesByUserID();
  chunkQueue = refreshChunk(chunkQueue, filmId);
  if (chunkQueue.total) {
    renderWatchedList(chunkQueue.moves[0], chunkQueue.total, 1);
  } else {
    showEmptyLibrary();
  }
}
function refreshChunk(chunkQueue, filmId) {
  let newChunk = [];
  chunkQueue.moves.map(element => {
    let f = element.filter(function (elem) {
      return elem.id != filmId;
    });
    newChunk.push(f);
  });
  return { moves: newChunk, total: chunkQueue.total - 1 };
}

function onMyLibraryClick(evt) {
  evt.preventDefault();
  watchedBtn.classList.remove('active');
  queueBtn.classList.add('active');
  getQueueMoviesByUserID();
  if (currentUserId !== null) {
    searchInput.classList.add('visually-hidden');
    myLibraryBtnWrap.classList.remove('visually-hidden');
    myLibraryHeader.classList.add('current');
    homeHeader.classList.remove('current');
    header.classList.remove('home-header-bg');
    header.classList.add('header__my-library-bg');
    retrieveWatchedMovies(movieQueueList);
  } else {
    showModal();
  }
}
function getQueueMoviesByUserID() {
  return (movieQueueList = getQueueFilmsByUser(currentUserId));
}
function getWatchedMoviesByUserID() {
  return (movieWatchedList = getWatchedFilmsByUser(currentUserId));
}
function chunkByPage(list_moves) {
  var moves = [];
  var total = list_moves.length;
  for (var i = 0, len = list_moves.length; i < len; i += 20)
    moves.push(list_moves.slice(i, i + 20));
  return { total: total, moves: moves };
}
function onWatchedBtnClick() {
  queueBtn.classList.remove('active');
  watchedBtn.classList.add('active');
  watchedBtn.disabled = true;
  queueBtn.disabled = false;
  getWatchedMoviesByUserID();
  retrieveWatchedMovies(movieWatchedList);
}

function onQueueBtnClick() {
  watchedBtn.classList.remove('active');
  queueBtn.classList.add('active');
  watchedBtn.disabled = false;
  queueBtn.disabled = true;
  getQueueMoviesByUserID();
  retrieveWatchedMovies(movieQueueList);
}

export { onWatchedBtnClick, onQueueBtnClick };

// Функция для пустого массива

function showEmptyLibrary() {
  cardList.style.justifyContent = 'center';
  cardList.innerHTML = `<li>
  <p class="empty-library__text"> There is nothing here yet! </p>
  <img class="empty-library__image" src="${emptyLibraryPageUrl}" alt="empty cinema hall">
  </li>`;
  const cardNoMovies = document.querySelector('.empty-library__text');
  cardNoMovies.style.margin = '0';
}

//------------------ My library functional -----------------
export function libraryMovieEx(page) {
  let pageInd = page - 1;
  renderWatchedList(chunkQueue.moves[pageInd], chunkQueue.total, page);
}
function retrieveWatchedMovies(movies) {
  Loading.pulse({
    svgSize: '150px',
    svgColor: '#FF6B08',
  });
  Loading.remove(600);
  setTimeout(function () {
    if (movies.length) {
      chunkQueue = chunkByPage(movies);
      return renderWatchedList(chunkQueue.moves[0], chunkQueue.total, 1);
    } else {
      showEmptyLibrary();
      sectionPagination.style.display = 'none';
    }
  }, 300);
}

function renderWatchedList(arrayOfWatched, totalCout, page) {
  const renderMovies = arrayOfWatched.map(item => {
    let {
      poster_path,
      original_title,
      genres,
      release_date,
      vote_average,
      id,
    } = item;
    return makeMoviesListMarkup(
      poster_path,
      original_title,
      genres,
      release_date,
      vote_average,
      id
    );
  });

  cardList.innerHTML = '';
  cardList.insertAdjacentHTML('afterbegin', renderMovies.join(''));
  createPagination(page, 20, totalCout, libraryMovieEx);

  function makeMoviesListMarkup(
    poster_path,
    original_title,
    genres,
    release_date,
    vote_average,
    id
  ) {
    const date = new Date(`${release_date}`);
    const year = date.getFullYear();

    const genresNames = [];
    const genreName = genres.map(genre => genresNames.push(genre.name));

    const markup = `
                <li class="photo-card" data-idcard="${id}">
                <a class="link" href="#">
                  <img src= "https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title} loading="lazy" width: 0px class="card-image">
                  <div class="info">
                    <p class="info-item">
                      <b>${original_title.toUpperCase()}</b>
                    </p>
                    <p class="info-item">
                    <b class="info-genres">${genresNames.join(
                      ', '
                    )} | ${year} <span class="info-genres vote-average">${vote_average.toFixed(
      1
    )}</span></b>                      
                                          </p>                   
                  </div>
                  </a>
                </li>`;
    return markup;
  }
}
