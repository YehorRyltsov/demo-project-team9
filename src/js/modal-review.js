// import {onCardClick} from './main-movies'; 

const refs = {
    
    modal: document.querySelector("[data-modal]"),
    body:document.querySelector ("body"),
    closeModalBtn: document.querySelector("[data-modal-close]"),

    // modalImgReview:document.querySelector('#img-review'),
    // captionImgText:document.querySelector('#caption-review'),
    // voteImgReview:document.querySelector('#vote-review'),
    // votesImgReview:document.querySelector('#votes-review'),
    // popularityImgReview:document.querySelector('#popularity-review'),
    // titleImgReview:document.querySelector('#title-review'),
    // genreImgReview:document.querySelector('#genre-review'),
    // aboutImgReview:document.querySelector('#about-review'),
  };
  // import {onCardClick} from './modal-review'; 
  // data-idcard="${move.id}
  // cardList.addEventListener('click', onCardClick);

  refs.closeModalBtn.addEventListener("click", closeModalReview);

  export function openModalReview() {
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
    return fetch(`https://api.themoviedb.org/3/movie/${сardId}?api_key=cfb01d01cf730c010b0d096c15822b40`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => console.log(error));
}


function renderModalCardReview(card){
  // refs.modalImgReview.src = card.belongs_to_collection.poster_path? card.belongs_to_collection.poster_path : './images/imgModalReview.jpg';
  // refs.captionImgText.textContent = card.title;

  // refs.voteImgReview.textContent = card.vote_average.toFixed(1);
  // refs.votesImgReview.textContent = card.vote_count.toFixed(0);
  // refs.popularityImgReview.textContent = card.popularity.toFixed(1);
  // refs.titleImgReview.textContent = card.original_title;
  // refs.genreImgReview.textContent = card.genres.map(genre => genre.name).join(", ");
  // refs.aboutImgReview.textContent = card.overview? card.overview : 'An excellent film and worthy of your attention!';

  
  

  
  refs.modal.innerHTML = card.map( move => {
    return `<div class="modal-review">
    <button
      type="button"
      class="review__btn-close"
      data-modal-close
      aria-label="Close"
    >
      <svg width="30" height="30">
        <use href="./images/icons.svg#close"></use>
      </svg>
    </button>
    <div class="modal-review__body">
      <div class="modal-review__card">
        <img class="modal-review__content" 
        src="https://image.tmdb.org/t/p/w500${move.belongs_to_collection.poster_path? card.belongs_to_collection.poster_path : './images/imgModalReview.jpg'}" />
      </div>
      <div>
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
        <p class="modal-review__about" id="about-review">${move.overview? card.overview : 'An excellent film and worthy of your attention!'}
        </p>
        <div class="modal-review__btn-container">
          <button type="button" class="modal-review__btn">
            add to Watched
          </button>
          <button type="button" class="modal-review__btn">add to queue</button>
        </div>
      </div>
    </div>
  </div>`;
})
.join('');



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




  // const {
  //   id,
  //   backdrop_path = './images/imgModalReview.jpg',
  //   title,
  //   vote_average = '10',
  //   vote_count = '10',
  //   popylarity,
  //   original_title,
  //   genre_ids,
  //   overview = 'An excellent film and worthy of your attention!',

  // } = returnObj;

  // refs.modalImgReview.src = backdrop_path;
  // refs.captionImgText.textContentL = title;
  // refs.aboutImgReview.textContent = overview;
