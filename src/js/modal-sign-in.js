const signInBtn = document.querySelector(".sign-in-btn")
const signUpBtn = document.querySelector(".sign-up-btn")
const formBox = document.querySelector(".form-box")

signUpBtn.addEventListener("click", function() {
  formBox.classList.add("active");
})

signInBtn.addEventListener("click", function() {
  formBox.classList.remove("active");
})