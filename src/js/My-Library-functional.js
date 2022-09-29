let movieLocalList = [];
const btnShowSavedMovies = document.querySelector('.watched-btn');
btnShowSavedMovies.addEventListener('click', e => {});

const btnShowMoviesQueue = document.querySelector('.queue-btn');
btnShowMoviesQueue.addEventListener('click', e => {});

function retrieveWatchedMovies() {
  const movies = getMoviesFromStorage();
  if (movies.length === 0) {
    // ----- рендер сторінки про відсутність фільмів у бібліотеці
  } else {
    renderWatchedList(movies);
  }
}
function getMoviesFromStorage() {
  try {
    movieLocalList = JSON.parse(allFilms); //----- заменить на запрос в хранилище Юзера
    return movieLocalList;
  } catch {
    console.log('error');
  }
}

function renderWatchedList(array) {
  const renderMovies = array.map(item => {
    return makeMoviesListMarkup();
  });
  movieList.insertAdjacentHTML('beforeend', renderMovies); //---- указать контейнер в котором рендерить список
}

function makeMoviesListMarkup() {} //------ взять функцию разметки с основной страницы
