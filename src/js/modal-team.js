import * as basicLightbox from 'basiclightbox';
import '../../node_modules/basiclightbox/dist/basicLightbox.min.css';

import  {markup } from './footer';


  const openModal = document.querySelector('[data-modal-open-team]')
 
// console.log("1", openModal);


openModal.addEventListener('click', onOpenModal);
 const modal = basicLightbox.create(markup);

function onOpenModal(e) {
 e.preventDefault();
  modal.show();
  window.addEventListener('keydown', onCloseModal);

// document.body.style.position = 'fixed';
// document.body.style.top = `-${window.scrollY}px`;
 
}
function onCloseModal(e) {
    
    if (e.code === 'Escape') {
      modal.close();
      window.removeEventListener('keydown', closeModalHandler);
      
    }
}
