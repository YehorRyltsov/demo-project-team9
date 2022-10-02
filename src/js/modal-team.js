import * as basicLightbox from 'basiclightbox';
import '../../node_modules/basiclightbox/dist/basicLightbox.min.css';

import  {markup } from './footer';


  const openModal = document.querySelector('[data-modal-open-team]')
//  const backdrop = document.querySelector('.modal-team');
// console.log("1", openModal);


openModal.addEventListener('click', onOpenModal);
 const modal = basicLightbox.create(markup);

function onOpenModal(e) {
  e.preventDefault();
  modal.show();
  window.addEventListener('keydown', onCloseModal);
  onCloseModal();
 
}
function onCloseModal(e) {
    // e.preventDefault();
    if (e.code === 'Escape') {
      modal.close();
      //  body.classList.remove('noScroll');
      window.removeEventListener('keydown', onCloseModal);
    }
    // openModal.removeEventListener('click', onOpenModal);
  }
// function clickBackdrop(e) {
//   if (!e.currentTarget === backdrop) {
//   modal.close();
//        body.classList.remove('noScroll');
//     openModal.removeEventListener('click', clickBackdrop);
//    
//   }
// };