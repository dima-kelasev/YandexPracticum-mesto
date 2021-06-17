class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;

    this._inputList = Array.from(formElement.querySelectorAll(this._config.inputSelector));
    this.buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
  }

  enableValidation() {
    this._setEventListeners();
  }

  _setEventListeners() {
    this._inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this.toggleButtonState();
      })
    })
    this.toggleButtonState();
  }

  toggleButtonState = () => {
    this.buttonElement.disabled = !!this._checkFormValidity();
  }

  _checkFormValidity = () => {
    return this._inputList.some(input => !input.validity.valid);
  }

  _checkInputValidity = (input) => {
    if (input.validity.valid) {
      this._hideError(input);
    } else {
      this._showError(input);
    }
  }

  _hideError = (input) => {
    const errorElement = this._formElement.querySelector(`#${input.id}-error`);
    input.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = '';
  }

  _showError = (input) => {
    const errorElement = this._formElement.querySelector(`#${input.id}-error`);
    input.classList.add(this._config.inputErrorClass);
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add(this._config.errorClass);
  }
}

export default FormValidator;