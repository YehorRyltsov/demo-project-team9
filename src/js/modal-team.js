import * as basicLightbox from 'basiclightbox';
import '../../node_modules/basiclightbox/dist/basicLightbox.min.css';

import { markup } from './footer';

const openModal = document.querySelector('[data-modal-open-team]');

// console.log("1", openModal);

openModal.addEventListener('click', onOpenModal);
const modal = basicLightbox.create(markup);

function onOpenModal() {
  modal.show();
  window.addEventListener('keydown', onCloseModal);
}
function onCloseModal(e) {
  if (e.code === 'Escape') {
    modal.close();
    window.removeEventListener('keydown', closeModalHandler);
  }
}
