import { getWatchedFilmsByUser, getQueueFilmsByUser, watchedFilms } from './db';
import { currentUserId } from './user';
watchedFilms;
import { showModal } from './hideAndOpen-modal';
import { fetchMoves, fetchGenres } from './fetch-movies';
import { pageUp } from './page-up-pagination';
import { createPagination } from './pagination';

// console.log(currentUserId);

import emptyLibraryPageUrl from '../images/empty-library-page.jpg';

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
let movieQueueList = [];

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
  // onClickReturnFromLibrary();
}

function onMyLibraryClick(evt) {
  evt.preventDefault();
  console.log(currentUserId);
  // console.log(getWatchedFilmsByUser(currentUserId));
  getWatchedFilmsByUser(currentUserId);
  console.log(watchedFilms);
  movieQueueList = getQueueFilmsByUser(currentUserId);
  console.log(movieQueueList);

  if (currentUserId !== null) {
    searchInput.classList.add('visually-hidden');
    myLibraryBtnWrap.classList.remove('visually-hidden');
    myLibraryHeader.classList.add('current');
    homeHeader.classList.remove('current');
    header.classList.remove('home-header-bg');
    header.classList.add('header__my-library-bg');
    console.log(movieQueueList);
    setTimeout(function () {
      retrieveWatchedMovies(watchedFilms);
    }, 500);

    // console.log(movieWatchedList);
  } else {
    showModal();
  }
}

function onWatchedBtnClick() {
  queueBtn.classList.remove('active');
  console.log(1);
  watchedBtn.classList.add('active');
  watchedBtn.disabled = true;
  queueBtn.disabled = false;
  retrieveWatchedMovies(movieWatchedList);
}

function onQueueBtnClick() {
  watchedBtn.classList.remove('active');
  console.log(2);
  queueBtn.classList.add('active');
  watchedBtn.disabled = false;
  queueBtn.disabled = true;
  retrieveWatchedMovies(movieQueueList);
}

export { onWatchedBtnClick, onQueueBtnClick };

// Функция для пустого массива

function showEmptyLibrary() {
  cardList.innerHTML = `<li>
  <p class="empty-library__text"> There is nothing here yet! </p>
  <img class="empty-library__image" src="${emptyLibraryPageUrl}" alt="empty cinema hall">
  </li>`;
}

//------------------ My library functional -----------------

function retrieveWatchedMovies(movies) {
  // const films = [...movies].map();
  console.log(movies);
  if (movies.length > 0) {
    return renderWatchedList(movies);
  } else {
    console.log('No Movies');
    showEmptyLibrary();
    sectionPagination.style.display = 'none';
  }
}

function renderWatchedList(arrayMovies) {
  // console.log(renderMovies);
  const renderMovies = arrayMovies.map(item => {
    let { poster_path, original_title, genres, release_date, vote_average } =
      item;
    return makeMoviesListMarkup(
      poster_path,
      original_title,
      genres,
      release_date,
      vote_average
    );
  });
  cardList.innerHTML = '';
  cardList.innerHTML = renderMovies;

  createPagination(1, 20, 20);
  pageUp();
  // if (array.lenght > 20) {
  //   createPagination(page, 20, array.length);
  // }

  // cardList.insertAdjacentHTML('beforeend', renderMovies); //---- указать контейнер в котором рендерить список
}

function makeMoviesListMarkup(
  poster_path,
  original_title,
  genres,
  release_date,
  vote_average
) {
  const date = new Date(`${release_date}`);
  const year = date.getFullYear();

  const genresNames = [];
  const genreName = genres.map(genre => genresNames.push(genre.name));

  const markup = `
                <li class="photo-card">
                <a class="link" href="#">
                  <img src= "https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title} loading="lazy" width: 0px class="card-image">
                  <div class="info">
                    <p class="info-item">
                      <b>${original_title.toUpperCase()}</b>
                    </p>
                    <p class="info-item">                      
                      <b class="info-genres">${genresNames.join(', ')}</b>
                      <b class="info-genres"> | </b>
                      <b class="info-genres">${year}</b>
                      <b class="info-genres vote-average">${vote_average.toFixed(
                        1
                      )}</b>
                    </p>                   
                  </div>
                  </a>
                </li>`;
  return markup;
}

// const pagin = document.querySelector('#pagination');
// function onClickReturnFromLibrary() {
//   fetchMoves().then(movies => {
//     fetchGenres().then(genres => {
//       const arrayGen = genres.genres;

//       const filmsArr = movies.results;
//       console.log(filmsArr);

//       const arrMove = filmsArr
//         .map(move => {
//           const genres = move.genre_ids.map(id => {
//             for (let genre of arrayGen) {
//               if (id === genre.id) {
//                 return genre.name;
//               }
//             }
//           });
//           move.genres = genres;
//           return move;
//         })
//         .map(move => {
//           const date = new Date(`${move.release_date}`);
//           const year = date.getFullYear();
//           return `
//                 <li class="photo-card">
//                 <a class="link" href="#">
//                   <img src= "https://image.tmdb.org/t/p/w500${
//                     move.poster_path
//                   }" alt="${
//             move.original_title
//           } loading="lazy" width: 0px class="card-image">
//                   <div class="info">
//                     <p class="info-item">
//                       <b>${move.title.toUpperCase()}</b>
//                     </p>
//                     <p class="info-item">
//                       <b class="info-genres">${move.genres.join(', ')}</b>
//                       <b class="info-genres"> | </b>
//                       <b class="info-genres">${year}</b>
//                     </p>
//                   </div>
//                   </a>
//                 </li>`;
//         })
//         .join('');
//       // cardList.insertAdjacentHTML('afterbegin', arrMove);
//       cardList.innerHTML = arrMove;

//       // createPagination(page, 20, arrMove.total_results);
//       // console.log(createPagination(1, 20, movies.total_results));
//     });
//   });
// }
