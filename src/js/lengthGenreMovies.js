let genre;

export function lengthGenreMovies({genres}){
  let genreLength = genres.map(genre => genre.name);

  if(genreLength.length >= 3){
   genre = genreLength.slice(0, 2).join(', ') + ' and others';
  } else if(genreLength.length < 3){
   genre = genreLength.join(', ');
  }
  
  return genre;
}



let genreArray;

export function lengthGenreMoviesArray(move){

  if(move.genres.length >= 3){
    genreArray = move.genres.slice(0, 2).join(', ') + ' and others';
   } else if ( move.genres.length < 3){
    genreArray = move.genres.join(', ');
   }
   
   return genreArray;
}

