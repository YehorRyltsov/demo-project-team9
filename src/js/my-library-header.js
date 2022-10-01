import { getWatchedFilmsByUser, getQueueFilmsByUser } from './db';
import { currentUserId } from './user';

console.log(currentUserId);

// let movieWatchedList = getWatchedFilmsByUser(); // ----- working version !!!
let movieWatchedList = []; // ------ JUST FOR TEST !!!
let movieQueueList = getQueueFilmsByUser();
// import emptyLibraryPageUrl from '../images/empty-library-page'; // Импортирует картинку

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
  searchInput.classList.add('visually-hidden');
  myLibraryBtnWrap.classList.remove('visually-hidden');
  myLibraryHeader.classList.add('current');
  homeHeader.classList.remove('current');
  header.classList.remove('home-header-bg');
  header.classList.add('header__my-library-bg');
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

// function showEmptyLibrary() {
//   renderList.innerHTML = `<li>
//   <a>
//   <p class="empty-library__text"> There is nothing here yet! </p>
//   <img class="empty-library__image" src="${emptyLibraryPageUrl}" alt="empty cinema hall">
//   </a>
//   </li>`;
//   pagination.style.display = 'none';
// }

//------------------ My library functional -----------------
const movieList = document.querySelector('body'); // - временный выбор для тестирования

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
  movieList.insertAdjacentHTML('beforeend', renderMovies); //---- указать контейнер в котором рендерить список
}

function makeMoviesListMarkup(
  poster_path,
  original_title,
  genres,
  release_date,
  vote_average
) {
  const markup = `${poster_path}, ${original_title}, ${genres}, ${release_date}, ${vote_average}`;
  return markup;
} //------ взять функцию разметки с основной страницы. Пока только тестовый вариант
