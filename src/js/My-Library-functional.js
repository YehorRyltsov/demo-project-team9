//---!!!!!!!!! ЭТОТ ФАЙЛ НЕ АКТИВЕН - НЕ ИМПОРТИРОВАТЬ ------------!!!!

// // import './test-db';
// import { getWatchedFilmsByUser, getQueueFilmsByUser } from './db';
// import { currentUserId } from './user';

// console.log(currentUserId);

// // let movieWatchedList = getWatchedFilmsByUser();
// let movieWatchedList = [];
// let movieQueueList = getQueueFilmsByUser();

// const movieList = document.querySelector('body');

// const btnShowSavedMovies = document.querySelector('.watched-btn');
// btnShowSavedMovies.addEventListener('click', e => {
//   retrieveWatchedMovies(movieWatchedList);

//   btnShowSavedMovies.disabled = true;
//   btnShowMoviesQueue.disabled = false;
// });

// const btnShowMoviesQueue = document.querySelector('.queue-btn');
// btnShowMoviesQueue.addEventListener('click', e => {
//   retrieveWatchedMovies(movieQueueList);

//   btnShowSavedMovies.disabled = false;
//   btnShowMoviesQueue.disabled = true;
// });

// function retrieveWatchedMovies(movies) {
//   btnShowSavedMovies.disabled = true;
//   btnShowMoviesQueue.disabled = false;
//   if (movies.length === 0) {
//     console.log('There is no items yet');
//     showEmptyLibrary();
//     // ----- рендер сторінки про відсутність фільмів у бібліотеці
//   } else {
//     return renderWatchedList(movies);
//   }
// }

// function renderWatchedList(array) {
//   const renderMovies = array.map(item => {
//     let { poster_path, original_title, genres, release_date, vote_average } =
//       item;
//     return makeMoviesListMarkup(
//       poster_path,
//       original_title,
//       genres,
//       release_date,
//       vote_average
//     );
//   });
//   console.log(renderMovies);
//   //   movieList.innerHTML = renderMovies;
//   movieList.insertAdjacentHTML('beforeend', renderMovies); //---- указать контейнер в котором рендерить список
// }

// function makeMoviesListMarkup(
//   poster_path,
//   original_title,
//   genres,
//   release_date,
//   vote_average
// ) {
//   const markup = `${poster_path}, ${original_title}, ${genres}, ${release_date}, ${vote_average}`;
//   return markup;
// } //------ взять функцию разметки с основной страницы

// function showEmptyLibrary() {
//   const markup = `<li>
//   <a>
//   <p class="empty-library__text"> There is nothing here yet! </p>
//   <img class="empty-library__image" src="${emptyLibraryPageUrl}" alt="empty cinema hall">
//   </a>
//   </li>`;
//   pagination.style.display = 'none';
//   movieList.insertAdjacentHTML('beforeend', markup);
// }
