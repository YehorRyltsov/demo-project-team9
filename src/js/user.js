import { create, login, onAuth, logOut } from './firebase';

const emailInput = document.querySelector('#email-input');
const pwdInput = document.querySelector('#pwd-input');
const pwdRepeatInput = document.querySelector('#second-pwd-input');
const registerForm = document.querySelector('#register-form');
const logOutBtn = document.querySelector('button[data-id="log-out"]');
const loginEmail = document.querySelector('#login-email-input');
const loginPwd = document.querySelector('#login-pwd-input');
const loginForm = document.querySelector('#login-form');
const formLoginBtn = document.querySelector('#form-login-btn');
const formSignupBtn = document.querySelector('#form-signup-btn');

const logInHeaderBtn = document.querySelector('button[data-id="log-in"]');
const modal = document.querySelector('[data-log-modal]');
const body = document.querySelector('body');

export let currentUserId = null;

logOutBtn.addEventListener('click', logOut);
registerForm.addEventListener('submit', registrationUser);
loginForm.addEventListener('submit', onLogin);

function onLogin(e) {
  e.preventDefault();
  try {
    login(loginEmail.value, loginPwd.value);
    // Notiflix.Notify.success('Login success'); // ...

    e.currentTarget.reset();
  } catch (error) {
    // Notiflix.Notify.failure('Login failure');

    console.error(error);
    console.log('неправильные данные для входа');
  }
}

function registrationUser(e) {
  e.preventDefault();
  noCheked();
  try {
    create(emailInput.value, pwdInput.value);
    e.currentTarget.reset();
  } catch (error) {
    console.error(error);
    e.currentTarget.reset();
  }
}

onAuth(user => {
  if (user) {
    //  все для залогиненого юзера
    hideLogInBtn();
    showLogOutBtn();
    hideModal();
    currentUserId = user.uid;
    console.log(`юзер залогинен, ID = ${user.uid}`);
    // ...
  } else {
    // все для отсутствия юзера
    console.log('нема юзера');
    currentUserId = null;
    showLogInBtn();
    hideLogOutBtn();
    // ...
  }
});

////////-- LOG IN BTN --////////////

function showLogInBtn() {
  logInHeaderBtn.classList.remove('visually-hidden');
}

function hideLogInBtn() {
  logInHeaderBtn.classList.add('visually-hidden');
}

////////-- LOG OUT BTN --////////////

function showLogOutBtn() {
  logOutBtn.classList.remove('visually-hidden');
}

function hideLogOutBtn() {
  logOutBtn.classList.add('visually-hidden');
}

/////////////---HIDE-MODAL--- ///////////

function hideModal() {
  modal.classList.add('is-hidden');
  body.classList.remove('no-scroll');
}

export function loginCheck() {
  console.log('проверка');
  // pwdInput.addEventListener('input', onPwdInput);
  pwdRepeatInput.addEventListener('input', onPwdRepeatInput);
}

function onPwdRepeatInput(e) {
  const element = e.currentTarget;
  const pwdToCheck = pwdInput.value;
  // console.log(pwdToCheck);
  // console.log(e.currentTarget.value);
  if (element.value === pwdToCheck) {
    cheked();
    formSignupBtn.disabled = false;
  } else {
    noCheked();
    formSignupBtn.disabled = true;
  }
}

function noCheked() {
  pwdInput.classList.remove('checked');
  pwdRepeatInput.classList.remove('checked');
}

function cheked() {
  pwdInput.classList.add('checked');
  pwdRepeatInput.classList.add('checked');
}
