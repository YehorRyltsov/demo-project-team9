export function fetchMoves() {
   return fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=cfb01d01cf730c010b0d096c15822b40")    
    .then(response => {
        return response.json()})
}

export function fetchGenres() {
   return fetch("https://api.themoviedb.org/3//genre/movie/list?api_key=cfb01d01cf730c010b0d096c15822b40")    
        .then(response => {
            return response.json()})
}

