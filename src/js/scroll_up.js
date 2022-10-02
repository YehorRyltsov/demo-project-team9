const scrollUp = document.querySelector('.scroll-top');
scrollUp.addEventListener('click', function (e) {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', function (e) {
  var topOffset = window.pageYOffset;
  if (topOffset < 100) {
    scrollUp.classList.add('is-hidden');
  } else {
    scrollUp.classList.remove('is-hidden');
  }
});
