
const refs = {
    openModalCard: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    body:document.querySelector ("body"),


    modalImgReview:document.querySelector('#img-review'),
    captionImgText:document.querySelector('#caption-review'),
    voteImgReview:document.querySelector('#vote-review'),
    // votesImgReview:document.querySelector('#votes-review-review'),
    // popularityImgReview:document.querySelector('#popularity-review'),
    // popularityImgReview:document.querySelector('#popularity-review'),

    genreImgReview:document.querySelector('#genre-review'),
    aboutImgReview:document.querySelector('#about-review'),
  };

  refs.openModalCard.addEventListener("click", openModalReview);
  refs.closeModalBtn.addEventListener("click", closeModalReview);

  function openModalReview() {
    refs.modal.classList.remove("is-hidden");
    refs.body.classList.add("no-scroll");

    refs.modal.addEventListener('click', onBackdropClick);
    window.addEventListener('keydown', onEscKeyPressExit);


    getIdCardReview();


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

function getIdCardReview(e){
  // const returnObj = e.currentTarget;
  const returnObj={};

  const {
    id,
    backdrop_path = './images/imgModalReview.jpg',
    title,
    vote_average = '10',
    vote_count = '10',
    popylarity,
    original_title,
    genre_ids,
    overview = 'An excellent film and worthy of your attention!',

  } = returnObj;

  refs.modalImgReview.src = backdrop_path;
  refs.captionImgText.textContentL = title;
  refs.aboutImgReview.textContent = overview;


  // refs.modal.innerHTML = returnObj.map(film =>{
  //   return `
  //   <div class="modal-review">
  //   <button
  //     type="button"
  //     class="review__btn-close"
  //     data-modal-close
  //     aria-label="Close"
  //   >
  //     <svg width="30" height="30">
  //       <use href="./images/icons.svg#close"></use>
  //     </svg>
  //   </button>
  //   <div class="modal-review__body">
  //     <div class="modal-review__card">
  //       <img class="modal-review__content" id="img-review" />
  //     </div>
  //     <div>
  //       <h2 class="modal-review__title" id="caption-review">A FISTFUL OF LEAD</h2>
  //       <ul class="modal-review__items">
  //         <li class="modal-review__item list">Vote / Votes</li>
  //         <p class="modal-review__item--grid">
  //           <span class="modal-review__item--rating" id="vote-review"> 7.3 </span>
  //           <span class="modal-review__slash"> / </span>
  //           <span class="modal-review__item--dark"  id="votes-review"> 1260 </span>
  //         </p>
  //         <li class="modal-review__item list">Popularity</li>
  //         <p class="modal-review__item--dark" id="popularity-review">100.2</p>
  //         <li class="modal-review__item list">Original Title</li>
  //         <p class="modal-review__item--dark" id="title-review">A FISTFUL OF LEAD</p>
  //         <li class="modal-review__item list">Genre</li>
  //         <p class="modal-review__item--dark" id="genre-review">Western</p>
  //       </ul>
  //       <p class="modal-review__subtitle">About</p>
  //       <p class="modal-review__about" id="about-review">
  //         <!-- Four of the West’s most infamous outlaws assemble to steal a huge
  //         stash of gold from the most corrupt settlement of the gold rush towns.
  //         But not all goes to plan one is killed and the other three escapes
  //         with bags of gold hide out in the abandoned gold mine where they
  //         happen across another gang of three – who themselves were planning to
  //         hit the very same bank! As tensions rise, things go from bad to worse
  //         as they realise the bags of gold are filled with lead... they’ve been
  //         double crossed – but by who and how? -->
  //       </p>
  //       <div class="modal-review__btn-container">
  //         <button type="button" class="modal-review__btn">
  //           add to Watched
  //         </button>
  //         <button type="button" class="modal-review__btn">add to queue</button>
  //       </div>
  //   `
  // })
  // .join('');

  // renderCardReview();

}

function renderCardReview(film){
  const markup = film.map() 

}


//   const load = key => {
//     try {
//           const serializedState = localStorage.getItem(key);
//           return serializedState === null ? undefined : JSON.parse(serializedState);
//     } catch (error) {
//           console.error("Get state error: ", error.message);
//     }
// } 

// refs.form.addEventListener('input', throttle(e => {

// let parseFormData = localStorage.getItem(STORAGE_KEY);

// if (parseFormData) {
//     parseFormData = load(STORAGE_KEY);
// } else {
//     parseFormData = {};
// }

// parseFormData[e.target.name] = e.target.value;
// localStorage.setItem(STORAGE_KEY, JSON.stringify(parseFormData));

// }, 500));


// var userDeviceRef = db.collection("USERS").doc(data.uid);
// userDeviceRef.get().then(function(doc){
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//         console.log("document customdata foo: " + doc.data().DEVICES.ID);
//     }
// }
// data.uid возвращает правильное значение. значение идентификатора документа. 
// doc.data() возвращает все поля и его дочерние doc.data() в формате строки


// db.collection('name_of_collection').get().then((snapshot) => {
//   snapshot.docs.forEach(doc => {
//       console.log(doc.data());
//   });
// })