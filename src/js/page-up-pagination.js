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
