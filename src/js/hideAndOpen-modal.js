const signInBtn = document.querySelector(".sign-in-btn")
const signUpBtn = document.querySelector(".sign-up-btn")
const formBox = document.querySelector(".form-box")

signUpBtn.addEventListener("click", function() {
  formBox.classList.add("active");
})

signInBtn.addEventListener("click", function() {
  formBox.classList.remove("active");
})

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     document.body.classList.toggle("modal-open");
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();

const refs = {
  openModalBtn: document.querySelector("[data-modal-open]"),
  closeModalBtn: document.querySelector("[data-modal-close]"),
  modal: document.querySelector("[data-modal]"),
  
};

refs.openModalBtn.addEventListener("click", showModal);
refs.closeModalBtn.addEventListener("click", hideModal);


function showModal() {
  // document.body.classList.toggle("modal-open");
  refs.modal.classList.remove("is-hidden");
}

function hideModal(){
  refs.modal.classList.add("is-hidden");
}