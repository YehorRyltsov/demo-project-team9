// window.onload = function (){
//   // document.querySelector('.loader').classList.toggle("loader-is-open");
//   let preloader = document.querySelector('.loader');
//   preloader.style.display = "none";
// }

// let preloader = document.querySelector('.loader');
// preloader.style.display = "none";

// fn for your code

export function showLoader() { 
  document.querySelector('.overlay').classList.toggle("is-hidden");
}

export function hideLoader() { 
  document.querySelector('.overlay').classList.remove("is-hidden");
}

// export {showLoader, hideLoader};