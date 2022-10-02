import {onCardClick} from './modal-review';
import { fetchMoves, fetchGenres } from './fetch-movies';
import { createPagination } from './pagination';
import { searchMovieEx } from './search-line';

const cardList = document.querySelector('.gallery-films');
const searchButton = document.querySelector('#search-form');

export function mainMovieEx(page) {
  let query = searchButton.elements['search'].value;
  query = query.replace(/\s+/g, ' ').trim();
  if (query.length > 1) {
    searchMovieEx(page);
  } else {
    fetchMove(page);
  }
}
function fetchMove(page) {
  fetchMoves(page).then(movies => {
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
          return `
                <li class="photo-card" data-idcard="${move.id}">
                <a class="link" href="#">
                  <img src= "https://image.tmdb.org/t/p/w500${
                    move.poster_path
                  }" alt="${
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
      cardList.addEventListener('click', onCardClick);
    });
  });
}
fetchMove(1);