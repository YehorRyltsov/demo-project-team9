// import { searchMovies } from './fetch-movies';
// import { mainMovieEx } from './main-movies';
// import { showLoader, hideLoader } from './pre_loader';

// export function pageUp() {
//   showLoader();
//   if (window.pageYOffset > 0) {
//     window.scrollBy(0, -30);
//     setTimeout(pageUp, 0);
//   } else if ((window.scrollBy === 0, -30)) {
//     hideLoader();
//   }
// }

// export function spinnerSearch() {
//   showLoader();
//   if (searchMovieEx === 1) {
//     hideLoader();
//   }
// }
import { Loading } from 'notiflix/build/notiflix-loading-aio';
export function pageUp() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -30);
    setTimeout(pageUp, 0);
    Loading.pulse({
      svgSize: '150px',
      svgColor: '#FF6B08',
    });
    Loading.remove(600);
  }
}
