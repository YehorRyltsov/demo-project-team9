import { Loading } from 'notiflix/build/notiflix-loading-aio';
const scrollUp = document.querySelector('.scroll-top');
scrollUp.addEventListener('click', function (e) {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  Loading.pulse({
    svgSize: '150px',
    svgColor: '#FF6B08',
  });
  Loading.remove(600);
});

window.addEventListener('scroll', function (e) {
  var topOffset = window.pageYOffset;
  if (topOffset < 100) {
    scrollUp.classList.add('is-hidden');
  } else {
    scrollUp.classList.remove('is-hidden');
  }
});
