import { create, login, onAuth, logOut } from './firebase';

const emailInput = document.querySelector('#email-input');
const pwdInput = document.querySelector('#pwd-input');
const registerForm = document.querySelector('#register-form');
const logOutBtn = document.querySelector('button[data-id="log-out"]');
const loginEmail = document.querySelector('#login-email-input');
const loginPwd = document.querySelector('#login-pwd-input');
const loginForm = document.querySelector('#login-form');
const logInHeaderBtn = document.querySelector('button[data-id="log-in"]');

export let currentUserId = null;

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
    hideLogInBtn()
    showLogOutBtn()
    currentUserId = user.uid;
    console.log(`юзер залогинен, ID = ${user.uid}`);
    // ...
  } else {
    // все для отсутствия юзера
    console.log('нема юзера');
    showLogInBtn()
    hideLogOutBtn()
    // ...
  }
});


////////-- LOG IN BTN --////////////

function showLogInBtn(){
  logInHeaderBtn.classList.remove("visually-hidden");
}

function hideLogInBtn(){
  logInHeaderBtn.classList.add("visually-hidden");
}

////////-- LOG OUT BTN --////////////


function showLogOutBtn(){
  logOutBtn.classList.remove("visually-hidden")
}

function hideLogOutBtn(){
  logOutBtn.classList.add("visually-hidden");

}
