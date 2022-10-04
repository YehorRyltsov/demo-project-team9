import { create, login, onAuth, logOut } from './firebase';
import { goHome } from './fn-go-home';

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
const svgPwdInput = document.querySelector('.form-register-svg.pwdInput');
const svgPwdRepeatInput = document.querySelector(
  '.form-register-svg.pwdRepeatInput'
);
const logInHeaderBtn = document.querySelector('button[data-id="log-in"]');
const modal = document.querySelector('[data-log-modal]');
const body = document.querySelector('body');

export let currentUserId = null;

logOutBtn.addEventListener('click', onLogOut);
registerForm.addEventListener('submit', registrationUser);
loginForm.addEventListener('submit', onLogin);

function onLogOut() {
  logOut();
  goHome();
}

function onLogin(e) {
  e.preventDefault();
  try {
    login(loginEmail.value, loginPwd.value);
    e.currentTarget.reset();
  } catch (error) {}
}

function registrationUser(e) {
  e.preventDefault();
  noCheked();
  try {
    create(emailInput.value, pwdInput.value);
    e.currentTarget.reset();
  } catch (error) {
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
  } else {
    // все для отсутствия юзера
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
  pwdRepeatInput.addEventListener('input', onPwdRepeatInput);
}

function onPwdRepeatInput(e) {
  const element = e.currentTarget;
  const pwdToCheck = pwdInput.value;
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
  svgPwdInput.classList.remove('checked');
  svgPwdRepeatInput.classList.remove('checked');
}

function cheked() {
  pwdInput.classList.add('checked');
  pwdRepeatInput.classList.add('checked');
  svgPwdInput.classList.add('checked');
  svgPwdRepeatInput.classList.add('checked');
}
