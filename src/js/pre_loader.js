window.onload = function (){
  let preloader = document.querySelector('.loader');
  preloader.style.display = "none";
}

preloader.style.display = "none";

function showLoader() { 
  document.querySelector('.loader').classList.toggle("is-open");
}
function hideLoader() { 
  document.querySelector('.loader').classList.remove("is-open");
}

export {showLoader, hideLoader};