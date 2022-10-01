export function fetchMovies(page = 1) {
   return fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=cfb01d01cf730c010b0d096c15822b40&page=${page}`)    
    .then(response => {
        return response.json()})
}

export function fetchGenres() {
   return fetch("https://api.themoviedb.org/3//genre/movie/list?api_key=cfb01d01cf730c010b0d096c15822b40")    
        .then(response => {
            return response.json()})
}

export function fetchSearchMovies(query, page=1) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=cfb01d01cf730c010b0d096c15822b40&page=${page}&query=${query}`)    
         .then(response => {
             return response.json()})
 }