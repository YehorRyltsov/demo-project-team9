// window.onload = function (){
//   // document.querySelector('.loader').classList.toggle("loader-is-open");
//   let preloader = document.querySelector('.loader');
//   preloader.style.display = "none";
// }

// let preloader = document.querySelector('.loader');
// preloader.style.display = "none";

// fn for your code

function showLoader() { 
  document.querySelector('.loader').classList.toggle("loader-is-open");
}

function hideLoader() { 
  document.querySelector('.loader').classList.remove("loader-is-open");
}

export {showLoader, hideLoader};