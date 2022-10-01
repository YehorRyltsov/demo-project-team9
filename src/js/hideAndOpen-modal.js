const signInBtn = document.querySelector(".sign-in-btn")
const signUpBtn = document.querySelector(".sign-up-btn")
const formBox = document.querySelector(".form-box")

const refs = {
  openModalBtn: document.querySelector("[data-modal-log-open]"),
  closeModalBtn: document.querySelector("[data-modal-log-close]"),
  modal: document.querySelector("[data-log-modal]"),
  body:document.querySelector ("body"),
};

///////////// -------MOVE--BTN-------------///////////////////

signUpBtn.addEventListener("click", function() {
  formBox.classList.add("active");
})

signInBtn.addEventListener("click", function() {
  formBox.classList.remove("active");
})



/////////////////------CLOSE/OPEN--BTN---------//////////////////

refs.openModalBtn.addEventListener("click", showModal);
refs.closeModalBtn.addEventListener("click", hideModal);

function showModal() {
  refs.modal.classList.remove("is-hidden");
  refs.body.classList.add("no-scroll");

  refs.modal.addEventListener('click', onBackdropClick);
  window.addEventListener('keydown', onEscKeyPressExit);
}

function hideModal(){
  refs.modal.classList.add("is-hidden")
  refs.body.classList.remove("no-scroll");

  refs.modal.removeEventListener('click', onBackdropClick);
  window.removeEventListener('keydown', onEscKeyPressExit); 
}

function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    hideModal();
  }
}

function onEscKeyPressExit(event) {
  if (event.code === 'Escape') {
    hideModal();
  }
}

//////////////////-------------/////////////////////////

