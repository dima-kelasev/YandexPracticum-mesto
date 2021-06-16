import FormValidator from "./FormValidator.js";
import {config, popupEditProfile, popupPlace} from "../utils/constans.js";

export class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleOverlayClose = this._handleOverlayClose.bind(this);
  }


  open() {
    this._popup.classList.add('popup_opened');
    this._setEventListeners();
    const checkActiveButtonProfile = new FormValidator(config, popupEditProfile);
    const checkActiveButtonAddForm = new FormValidator(config, popupPlace);
    checkActiveButtonProfile._toggleButtonState();
    checkActiveButtonAddForm._toggleButtonState();
  }

  close() {
    this._popup.classList.remove('popup_opened');
    this._removeEventListeners();
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _handleOverlayClose = (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      this.close();
    }
  }

  _handleButtonClose = () => {
    this.close();
  }

  _setEventListeners() {
    this._closeButton = this._popup.querySelector('.popup__btn-close');
    document.addEventListener('keydown', this._handleEscClose);
    this._popup.addEventListener('mousedown', this._handleOverlayClose);
    this._closeButton.addEventListener('click', this._handleButtonClose);
  }

  _removeEventListeners() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.removeEventListener('mousedown', this._handleOverlayClose);
    this._closeButton.removeEventListener('click', this._handleButtonClose);
  }
}