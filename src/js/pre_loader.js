import { Loading } from 'notiflix/build/notiflix-loading-aio';

export function hideLoader() {
  document.querySelector('.overlay').classList.add('is-hidden');
}

export function showLoader() {
  document.querySelector('.overlay').classList.remove('is-hidden');
}

const loaderMain = () => {
  Loading.pulse({
    svgSize: '150px',
    svgColor: '#FF6B08',
  });
  Loading.remove(400);
};
loaderMain();
