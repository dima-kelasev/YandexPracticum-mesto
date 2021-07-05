import {Popup} from './Popup.js';

export  class PopupConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._form = this._popup.querySelector('.popup__form');
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmit();
    });
  }

  submitDelete(handleSubmit) {
    this._handleSubmit = handleSubmit;
  }
}