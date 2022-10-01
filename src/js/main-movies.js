import {fetchMovies, fetchGenres} from './fetch-movies';
const cardList = document.querySelector('.gallery-films');

export function createMovies (movies){
  return fetchGenres ()
    .then(genres => {
      // console.log(genres);
      const arrayGen = genres.genres;
      console.log(arrayGen);

      const filmsArr = movies.results;
      console.log(movies);

      const arrMove = filmsArr
        .map(addGenresToMovie(arrayGen))
        .map(getHtmlForMovie)
        .join('');
      cardList.insertAdjacentHTML('afterbegin', arrMove);
    });
}

export function showTrendingMovies (page) {
  return fetchMovies(page)
    .then(createMovies);
}

function addGenresToMovie(arrayGen) {
  return (movie) => {
      const genres = movie.genre_ids.map(id => {
        for (let genre of arrayGen) {
          if (id === genre.id) {
            return genre.name;
          }
        }
      });
      movie.genres = genres;
      return movie;
    };
  }

function getHtmlForMovie(movie) {
  const date = new Date(`${movie.release_date}`);
  const year = date.getFullYear();
  return `
      <li class="photo-card">
      <a class="link" href="#">
        <img src= "https://image.tmdb.org/t/p/w500${
          movie.poster_path
        }" alt="${
      movie.original_title
    } loading="lazy" width: 0px class="card-image">
        <div class="info">
          <p class="info-item">
            <b>${movie.title.toUpperCase()}</b>
          </p>
          <p class="info-item">                      
            <b class="info-genres">${movie.genres.join(', ')}</b>
            <b class="info-genres"> | </b>
            <b class="info-genres">${year}</b>
          </p>                   
        </div>
        </a>
      </li>`;
}

showTrendingMovies(1);