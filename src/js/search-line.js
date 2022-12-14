import { onCardClick } from './modal-review';
import { searchMovies, fetchGenres } from './fetch-movies';
import { createPagination } from './pagination';
import { mainMovieEx } from './main-movies';
import { pageUp } from './page-up-pagination';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import Notiflix from 'notiflix';
import {lengthGenreMoviesArray} from './lengthGenreMovies';

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
  if (query.length > 1) {
    searchMovie(query, 1);
  } else if (query.length === 1) {
    formWarning.textContent =
      'No matches found for your query. Enter the correct movie name.';
  } else {
    mainMovieEx(1);
  }
}

export function searchMovieEx(page) {
  let query = searchButton.elements['search'].value;
  query = query.replace(/\s+/g, ' ').trim();
  searchMovie(query, page);
}

function searchMovie(query, page) {
  searchMovies(query, page)
    .then(movies => {
      if (movies.results.length) {
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
              let year = date.getFullYear();
              if (isNaN(year)) {
                year = 'pending';
              }
              let src = 'https://i.ibb.co/0GKG6L1/img-Modal-Review.jpg';
              if (move.poster_path != null && move.poster_path != 'null') {
                src = `https://image.tmdb.org/t/p/w500${move.poster_path}`;
              }
              let genresArray = lengthGenreMoviesArray(move);
              return `
                <li class="photo-card" data-idcard="${move.id}">
                <a class="link" href="#">
                  <img src= "${src}" alt="${
                move.original_title
              } loading="lazy" width: 0px class="card-image">
                  <div class="info">
                    <p class="info-item">
                      <b>${move.title.toUpperCase()}</b>
                    </p>
                    <p class="info-item">
                    <b class="info-genres">${genresArray} | ${year}</b>
                    </p>
                  </div>
                  </a>
                </li>`;
            })
            .join('');
          cardList.innerHTML = '';
          cardList.insertAdjacentHTML('afterbegin', arrMove);
          createPagination(page, 20, movies.total_results, mainMovieEx);
          cardList.addEventListener('click', onCardClick);
          pageUp();
          Loading.pulse({
            svgSize: '150px',
            svgColor: '#FF6B08',
          });
          Loading.remove(600);
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
}
