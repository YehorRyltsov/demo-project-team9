





const refs = {
    modal: document.querySelector("[data-modal]"),
    body:document.querySelector ("body"),
    











  };


  function openModalReview() {
    
    refs.modal.classList.remove("is-hidden");
    refs.body.classList.add("no-scroll");

    refs.modal.addEventListener('click', onBackdropClick);
    window.addEventListener('keydown', onEscKeyPressExit);

  }


  export function onCardClick(e){
    e.preventDefault();
    const сardId = e.target.closest('li').dataset.idcard;
    console.log(сardId);
    openModalReview();
    fetchMoveId(сardId)
    .then(renderModalCardReview)
    .catch(error => console.error(error));
   
  }


  async function fetchMoveId(сardId){
    return await fetch(`https://api.themoviedb.org/3/movie/${сardId}?api_key=cfb01d01cf730c010b0d096c15822b40`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => console.log(error));
}


function closeModalReview(){
  refs.modal.classList.add("is-hidden");
  refs.body.classList.remove("no-scroll");
  
  refs.modal.removeEventListener('click', onBackdropClick);
  window.removeEventListener('keydown', onEscKeyPressExit);
  
  }
  

  function onBackdropClick(event) {
    if (event.target === event.currentTarget) {
      closeModalReview();

    }
  }

  
  function onEscKeyPressExit(event) {
    if (event.code === 'Escape') {
      closeModalReview();

    }
  }


  function renderModalCardReview(move){
  refs.modal.innerHTML = `<div class="modal-review">
    <button
    type ="button" class="review__btn-close close"
    >
    </button>
    <div class="modal-review__body">
      <div class="modal-review__card">
        <img class="modal-review__content" 
        src="https://image.tmdb.org/t/p/w500${
            move.poster_path}"
            ? "https://image.tmdb.org/t/p/w500${
            move.poster_path}"
            : "./images/imgModalReview.jpg" />
      </div>
      <div class="modal-review__container">
        <h2 class="modal-review__title" id="caption-review">${move.title}</h2>
        <ul class="modal-review__items">
          <li class="modal-review__item list">Vote / Votes</li>
          <p class="modal-review__item--grid">
            <span class="modal-review__item--rating" id="vote-review"> ${move.vote_average.toFixed(1)
            } </span>
            <span class="modal-review__slash"> / </span>
            <span class="modal-review__item--dark"  id="votes-review"> ${move.vote_count.toFixed(0)} </span>
          </p>
          <li class="modal-review__item list">Popularity</li>
          <p class="modal-review__item--dark" id="popularity-review">${move.popularity.toFixed(1)} </p>
          <li class="modal-review__item list">Original Title</li>
          <p class="modal-review__item--dark" id="title-review">${
            move.original_title}</p>
          <li class="modal-review__item list">Genre</li>
          <p class="modal-review__item--dark" id="genre-review">${move.genres.map(genre => genre.name).join(", ")} </p>
        </ul>
        <p class="modal-review__subtitle">About</p>
        <p class="modal-review__about" id="about-review">${move.overview? move.overview : 'An excellent film and worthy of your attention!'}
        </p>
        <div class="modal-review__btn-container">
          <button type="button" class="modal-review__btn">
            ADD TO WACHAD
          </button>
          <button type="button" class="modal-review__btn">ADD TO QUEUE</button>
        </div>
      </div>
    </div>
  </div>`;

  const closeModalBtn = document.querySelector(".review__btn-close");
  closeModalBtn.addEventListener("click", closeModalReview);
}
