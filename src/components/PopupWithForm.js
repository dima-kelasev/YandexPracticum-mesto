import {Popup} from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor({popupSelector, handleFormSubmit}) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__name');
    this._buttonSubmit = this._form.querySelector('.popup__btn')

    this._inputValues = {}
  }

  loading(isLoading) {
    if (isLoading) {
      this._buttonSubmit.textContent = 'Cохранение...'
    } else {
      this._buttonSubmit.textContent = 'Сохранить'
    }
  }

  _getInputValues = () => {
    this._inputList.forEach((input) => {
      this._inputValues[input.name] = `${input.value}`;
    });
    return this._inputValues;
  }

  _submitForm = (e) => {
    e.preventDefault();
    // this._handleSubmit();
    this._handleFormSubmit(this._getInputValues());
    this.close();
  }

  // setSubmitHandler(handleSubmit) {
  //   this._handleSubmit = handleSubmit;
  // }



  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._submitForm);
  }

  _removeEventListeners() {
    super._removeEventListeners();
    this._form.removeEventListener('submit', this._submitForm);
  }

  close() {
    super.close();
    this._form.reset();
  }

}