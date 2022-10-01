import { getWatchedFilmsByUser, getQueueFilmsByUser } from './db';
import { currentUserId } from './user';
import { showModal } from './hideAndOpen-modal';

console.log(currentUserId);

let movieWatchedList = getWatchedFilmsByUser(currentUserId); // ----- working version !!!
// let movieWatchedList = []; // ------ JUST FOR TEST !!!
let movieQueueList = getQueueFilmsByUser(currentUserId);
import emptyLibraryPageUrl from '../images/empty-library-page.jpg'; // Импортирует картинку

const header = document.querySelector('.header');
const searchInput = document.querySelector('.search-form');
const homeHeader = document.querySelector('.home-link');
const myLibraryHeader = document.querySelector('.library-link');
const myLibraryBtnWrap = document.querySelector('.library-btn__wrap');
const watchedBtn = document.querySelector('.watched-btn');
const queueBtn = document.querySelector('.queue-btn');
const logo = document.querySelector('.logo-link');
// const renderList = document.querySelector(); // Выбирает ul в разметке карточек

homeHeader.addEventListener('click', onHeaderHomeClick);
myLibraryHeader.addEventListener('click', onMyLibraryClick);
watchedBtn.addEventListener('click', onWatchedBtnClick);
queueBtn.addEventListener('click', onQueueBtnClick);
logo.addEventListener('click', onHeaderHomeClick);

function onHeaderHomeClick(evt) {
  evt.preventDefault();
  myLibraryBtnWrap.classList.add('visually-hidden');
  searchInput.classList.remove('visually-hidden');
  homeHeader.classList.add('current');
  myLibraryHeader.classList.remove('current');
  header.classList.remove('header__my-library-bg');
  header.classList.add('home-header-bg');
}

function onMyLibraryClick(evt) {
  evt.preventDefault();

  // if (myLibraryHeader.classList.contains('current')) {
  //   retrieveWatchedMovies(movieQueueList);
  // }
  console.log(currentUserId);
  if (currentUserId === null) {
    showModal();
  } else {
    searchInput.classList.add('visually-hidden');
    myLibraryBtnWrap.classList.remove('visually-hidden');
    myLibraryHeader.classList.add('current');
    homeHeader.classList.remove('current');
    header.classList.remove('home-header-bg');
    header.classList.add('header__my-library-bg');
    retrieveWatchedMovies(movieQueueList);
  }
}

function onWatchedBtnClick() {
  queueBtn.classList.remove('active');
  watchedBtn.classList.add('active');
  watchedBtn.disabled = true;
  queueBtn.disabled = false;
  retrieveWatchedMovies(movieWatchedList);
}

function onQueueBtnClick() {
  watchedBtn.classList.remove('active');
  queueBtn.classList.add('active');
  watchedBtn.disabled = false;
  queueBtn.disabled = true;
  retrieveWatchedMovies(movieQueueList);
}

export { onWatchedBtnClick, onQueueBtnClick };

// Функция для пустого массива

function showEmptyLibrary() {
  cardList.innerHTML = `<li>
  <a>
  <p class="empty-library__text"> There is nothing here yet! </p>
  <img class="empty-library__image" src="${emptyLibraryPageUrl}" alt="empty cinema hall">
  </a>
  </li>`;
  pagination.style.display = 'none';
}

//------------------ My library functional -----------------
// const movieList = document.querySelector('body'); // - временный выбор для тестирования
const cardList = document.querySelector('.gallery-films');

function retrieveWatchedMovies(movies) {
  if (movies.length === 0) {
    console.log('There is no items yet');
    showEmptyLibrary();
    // ----- рендер сторінки про відсутність фільмів у бібліотеці
  } else {
    return renderWatchedList(movies);
  }
}

function renderWatchedList(array) {
  const renderMovies = array.map(item => {
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
  console.log(renderMovies);
  //   movieList.innerHTML = renderMovies;
  cardList.innerHTML = renderMovies;
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
} //------ взять функцию разметки с основной страницы. Пока только тестовый вариант
