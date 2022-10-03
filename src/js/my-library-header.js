import { getWatchedFilmsByUser, getQueueFilmsByUser } from './db';
import { currentUserId } from './user';
import { showModal } from './hideAndOpen-modal';

import emptyLibraryPageUrl from '../images/empty-library-page.jpg';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

let movieWatchedList = [];
let movieQueueList = [];

const header = document.querySelector('.header');
const searchInput = document.querySelector('.search-form');
const homeHeader = document.querySelector('.home-link');
const myLibraryHeader = document.querySelector('.library-link');
const myLibraryBtnWrap = document.querySelector('.library-btn__wrap');
const watchedBtn = document.querySelector('.watched-btn');
const queueBtn = document.querySelector('.queue-btn');
const logo = document.querySelector('.logo-link');
const sectionPagination = document.querySelector('.section-pagination');
const pagin = document.querySelector('#pagination');

const cardList = document.querySelector('.gallery-films');

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

function onMyLibraryClick(evt) {
  evt.preventDefault();
  getUserSavedMovies();
  disableBtns(evt);
  if (currentUserId) {
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

function getUserSavedMovies() {
  movieQueueList = getQueueFilmsByUser(currentUserId);
  movieWatchedList = getWatchedFilmsByUser(currentUserId);
}

function onWatchedBtnClick(evt) {
  disableBtns(evt);
  retrieveWatchedMovies(movieWatchedList);
}

function onQueueBtnClick(evt) {
  disableBtns(evt);
  retrieveWatchedMovies(movieQueueList);
}

function disableBtns(evt) {
  if (evt.currentTarget.classList.contains('watched-btn')) {
    queueBtn.classList.remove('active');
    watchedBtn.classList.add('active');

    watchedBtn.disabled = true;
    queueBtn.disabled = false;
  } else if (evt.currentTarget.classList.contains('queue-btn')) {
    watchedBtn.classList.remove('active');
    queueBtn.classList.add('active');

    watchedBtn.disabled = false;
    queueBtn.disabled = true;
  } else {
    watchedBtn.classList.remove('active');
    queueBtn.classList.add('active');
  }
}

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

function retrieveWatchedMovies(movies) {
  getUserSavedMovies();
  Loading.pulse({
    svgSize: '150px',
    svgColor: '#FF6B08',
  });
  Loading.remove(600);
  setTimeout(function () {
    if (movies.length >= 1) {
      return renderWatchedList(movies);
    } else {
      showEmptyLibrary();
      sectionPagination.style.display = 'none';
    }
  }, 300);
}

function renderWatchedList(array) {
  const renderMovies = array.map(item => {
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

  //------- Настроить ПАГИНАЦИЮ ----------------------!!!!!!!!!!!
}

// ------------------------------------------------------------!!!!!!!!!!
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

  const genreName = genres.map(genre => genre.name);

  const markup = `
                <li class="photo-card" data-idcard="${id}">
                <a class="link" href="#">
                  <img src= "https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title} loading="lazy" width: 0px class="card-image">
                  <div class="info">
                    <p class="info-item">
                      <b>${original_title.toUpperCase()}</b>
                    </p>
                    <p class="info-item">
                    <b class="info-genres">${genreName.join(
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
