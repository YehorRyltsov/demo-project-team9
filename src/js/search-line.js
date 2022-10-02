import { searchMovies, fetchGenres } from './fetch-movies';
import { createPagination } from './pagination';
import Notiflix from 'notiflix';
Notiflix.Notify.init({
  position: 'center-top',
});

const searchButton = document.querySelector('#search-form');
const cardList = document.querySelector('.gallery-films');
const pagin = document.querySelector('#pagination');

searchButton.addEventListener('submit', submitSearchForm);

function submitSearchForm(evt) {
  evt.preventDefault();
  let query = evt.target.elements['search'].value;
  query = query.replace(/\s+/g, ' ').trim();
  searchMovie(query, 1);
}
// functiom for export
export function searchMovieEx(page) {
  let query = searchButton.elements['search'].value;
  query = query.replace(/\s+/g, ' ').trim();
  searchMovie(query, page);
}

function searchMovie(query, page) {
  if (query.length > 1) {
    searchMovies(query, page)
      .then(movies => {
        if (movies.results.length > 0) {
          fetchGenres().then(genres => {
            const arrayGen = genres.genres;

            const filmsArr = movies.results;

            const arrMove = filmsArr
              .map(move => {
                const genres = move.genre_ids.map(id => {
                  for (let genre of arrayGen) {
                    if (id === genre.id) {
                      return genre.name;
                    }
                  }
                });
                move.genres = genres;
                return move;
              })
              .map(move => {
                const date = new Date(`${move.release_date}`);
                const year = date.getFullYear();
                let src = 'https://i.ibb.co/0GKG6L1/img-Modal-Review.jpg';
                if (move.poster_path != null && move.poster_path != 'null') {
                  src = `https://image.tmdb.org/t/p/w500${move.poster_path}`;
                }

                return `
                <li class="photo-card">
                <a class="link" href="#">
                  <img src= "${src}" alt="${
                  move.original_title
                } loading="lazy" width: 0px class="card-image">
                  <div class="info">
                    <p class="info-item">
                      <b>${move.title.toUpperCase()}</b>
                    </p>
                    <p class="info-item">                      
                      <b class="info-genres">${move.genres.join(', ')}</b>
                      <b class="info-genres"> | </b>
                      <b class="info-genres">${year}</b>
                    </p>                   
                  </div>
                  </a>
                </li>`;
              })
              .join('');
            cardList.innerHTML = '';
            cardList.insertAdjacentHTML('afterbegin', arrMove);
            createPagination(page, 20, movies.total_results);
          });
        } else {
          cardList.innerHTML = '';
          pagin.innerHTML = '';
          Notiflix.Notify.info('Oops, there is no movies');
        }
      })
      .catch(error => {
        Notiflix.Notify.failure('Oops, there is something wrong');
        console.log(error);
      });
  } else {
    return (formWarning.textContent =
      'No matches found for your query. Enter the correct movie name.');
  }
}

function getGener(id, arrayGen) {
  for (let genre of arrayGen) {
    if (id === genre.id) {
      return genre.name;
    }
  }
}
