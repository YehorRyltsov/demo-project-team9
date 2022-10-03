// window.onload = function (){
//   // document.querySelector('.loader').classList.toggle("loader-is-open");
//   let preloader = document.querySelector('.loader');
//   preloader.style.display = "none";
// }

// let preloader = document.querySelector('.loader');
// preloader.style.display = "none";

// fn for your code
import { Loading } from 'notiflix/build/notiflix-loading-aio';

export function hideLoader() {
  document.querySelector('.overlay').classList.add('is-hidden');
}

export function showLoader() {
  document.querySelector('.overlay').classList.remove('is-hidden');
}

// export { showLoader, hideLoader };

// const loaderMain = () => {
//   const loaderContainer = document.querySelector('.overlay');
//   window.addEventListener('load', () => {
//     setTimeout(() => {
//       if (!loaderContainer.classList.contains('is-hidden')) {
//         loaderContainer.classList.add('is-hidden');
//       }
//     }, 600);
//   });
// };

// loaderMain();
const loaderMain = () => {
  Loading.pulse({
    svgSize: '150px',
    svgColor: '#FF6B08',
 });
  Loading.remove(400);
};
loaderMain();
