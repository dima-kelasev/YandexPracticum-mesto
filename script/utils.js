import {config} from "./constans.js";
import FormValidator from "./FormValidator.js";
import {popupPlace, popupEditProfile} from "./constans.js";

const checkActiveButtonProfile = new FormValidator(config, popupEditProfile);
const checkActiveButtonAddForm = new FormValidator(config, popupPlace);


const handleEscUp = event => {
  if (event.key === 'Escape') {
    const popupActive = document.querySelector('.popup_opened');
    closePopup(popupActive);
  }
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscUp);
}


function openPopup(popup) {
  checkActiveButtonProfile._toggleButtonState();
  checkActiveButtonAddForm._toggleButtonState();
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscUp);
}

export {openPopup, closePopup};