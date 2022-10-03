import * as basicLightbox from 'basiclightbox';
import '../../node_modules/basiclightbox/dist/basicLightbox.min.css';

import  {markup } from './footer';


const openModal = document.querySelector('[data-modal-open-team]');
const body = document.querySelector('body');
 const backdrop = document.querySelector('#modalTeam');


openModal.addEventListener('click', onOpenModal);
 const modal = basicLightbox.create(markup, {
  onClose: intance => {
    body.classList.remove('noScroll');
   }
 });


function onOpenModal(e) {
  e.preventDefault();
  modal.show();
  window.addEventListener('keydown', onCloseModal);
  body.classList.add('noScroll');

  
  onCloseModal(e);

};
  
function onCloseModal(event) {    
    if (event.code === 'Escape') {
      modal.close();
     
      window.removeEventListener('keydown', onCloseModal);
    }
   
};
