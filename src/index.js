import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

const div = document.querySelector(".gallary-films");

export function fetchMoves() {
    fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=cfb01d01cf730c010b0d096c15822b40")    
    .then(response => {
        return response.json()})
    .then(movies => {
        fetch("https://api.themoviedb.org/3//genre/movie/list?api_key=cfb01d01cf730c010b0d096c15822b40")    
        .then(response => {
            return response.json()})
        .then(genres => {
            // console.log(genres);
            const arrayGen = genres.genres;
            console.log(arrayGen);

            const filmsArr = movies.results;
            console.log(filmsArr);
            
            const arrMove = filmsArr.map(move => {
                const genres = move.genre_ids.map(id => {
                  for(let genre of arrayGen){
                    if(id === genre.id){
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
                  <img src= "https://image.tmdb.org/t/p/w500${move.poster_path}" alt="${move.original_title} loading="lazy">
                  <div class="info">
                    <p class="info-item">
                      <b>${move.title}</b>
                    </p>
                    <p class="info-item">
                      <b>${year}</b>
                    </p>
                    <p class="info-item">
                      <b>${move.genres.join(', ')}</b>
                    </p>
                    <p class="info-item">
                      <b></b>
                    </p>
                  </a>
                  </div>
                </div>` }).join('');               
            div.insertAdjacentHTML('afterbegin', arrMove);    
        });       
    });
}
fetchMoves()
