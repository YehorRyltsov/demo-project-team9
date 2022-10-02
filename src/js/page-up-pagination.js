export function pageUp() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -30);
    setTimeout(pageUp, 0);
  }
}
