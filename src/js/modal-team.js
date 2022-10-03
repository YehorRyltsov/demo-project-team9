import * as basicLightbox from 'basiclightbox';
import '../../node_modules/basiclightbox/dist/basicLightbox.min.css';

import  {markup } from './footer';


const openModal = document.querySelector('[data-modal-open-team]');
const body = document.querySelector('body');
 const backdrop = document.querySelector('#modalTeam');
const lightBox = document.querySelector('.basicLightbox--visible');

openModal.addEventListener('click', onOpenModal);
 const modal = basicLightbox.create(markup);



function onOpenModal(e) {
  e.preventDefault();
  modal.show();
  window.addEventListener('keydown', onCloseModal);
  // body.classList.add('noScroll');
  // lightBox.addEventListener('click', onClickBackdrop); 
  
  onCloseModal(e);
  // onClickBackdrop();
  // openModal.removeEventListener('click', onOpenModal);
};
  
function onCloseModal(event) {    
    if (event.code === 'Escape') {
      modal.close();
      // body.classList.remove('noScroll');
      window.removeEventListener('keydown', onCloseModal);
    }
   
};
// function onClickBackdrop(event) {  
//   if (!backdrop === event.currentTarget) {
//    modal.close(); 
//     lightBox.removeEventListener('click', onClickBackdrop);
//      body.classList.remove('noScroll');
     
//   }    
// };
// console.log('111', lightBox);