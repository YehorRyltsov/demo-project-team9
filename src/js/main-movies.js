import { fetchMoves, fetchGenres } from './fetch-movies.js';

const div = document.querySelector('.gallary-films');

fetchMoves().then(movies => {
  fetchGenres().then(genres => {
    const arrayGen = genres.genres;
    console.log(arrayGen);

    const filmsArr = movies.results;
    console.log(filmsArr);

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
                <div class="photo-card">
                  <img src= "https://image.tmdb.org/t/p/w500${
                    move.poster_path
                  }" alt="${move.original_title} loading="lazy" width: 0px>
                  <div class="info">
                    <p class="info-item">
                      <b>${move.title.toUpperCase()}</b>
                    </p>
                    <p class="info-item">                      
                      <b class="info-genres">${move.genres.join(', ')}</b>
                      <b class="info-genres"> | </b>
                      <b class="info-genres">${year}</b>
                    </p>                   
                  </a>
                  </div>
                </div>`;
      })
      .join('');
    div.insertAdjacentHTML('afterbegin', arrMove);
  });
});
