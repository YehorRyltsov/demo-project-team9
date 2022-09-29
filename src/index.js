import 'firebaseui/dist/firebaseui.css';

// import './js/user';

// user
import { create, login, onAuth, logOut } from './js/firebase';

const emailInput = document.querySelector('#email-input');
const pwdInput = document.querySelector('#pwd-input');
const registerForm = document.querySelector('#register-form');
const logOutBtn = document.querySelector('#log-out');
const loginEmail = document.querySelector('#login-email-input');
const loginPwd = document.querySelector('#login-pwd-input');
const loginForm = document.querySelector('#login-form');

let currentUserId = null;

logOutBtn.addEventListener('click', logOut);
registerForm.addEventListener('submit', registrationUser);
loginForm.addEventListener('submit', onLogin);

function onLogin(e) {
  e.preventDefault();
  try {
    login(loginEmail.value, loginPwd.value);
    e.currentTarget.reset();
  } catch (error) {
    console.error(error);
  }
}

function registrationUser(e) {
  e.preventDefault();
  try {
    create(emailInput.value, pwdInput.value);
    e.currentTarget.reset();
  } catch (error) {
    console.error(error);
  }
}

onAuth(user => {
  if (user) {
    //  все для залогиненого юзера

    currentUserId = user.uid;
    console.log(`юзер залогинен, ID = ${user.uid}`);
    // ...
  } else {
    // все для отсутствия юзера
    console.log('нема юзера');
    // ...
  }
});
// user

import addWatchedFilmById from './js/db';

const ref = {
  addWatched: document.querySelector('#add-watched'),
  addQueue: document.querySelector('#add-queue'),
  removeWatched: document.querySelector('#remove-watched'),
  removeQueue: document.querySelector('#remove-queue'),
  getWatched: document.querySelector('#get-watched'),
  getQueue: document.querySelector('#get-queue'),
};

ref.addWatched.addEventListener('click', () => {
  try {
    addWatchedFilmById(currentUserId);
  } catch (error) {
    console.error(error);
  }
});
