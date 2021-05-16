const hideError = (formElement, input, config) => {
  const {inputErrorClass, errorClass,} = config
  const errorEl = formElement.querySelector(`#${input.id}-error`)
  input.classList.remove(inputErrorClass)
  errorEl.classList.remove(errorClass)
  errorEl.textContent = '';
}

const showError = ( formElement, input, config) => {
  const {inputErrorClass, errorClass,} = config
  const errorEl = formElement.querySelector(`#${input.id}-error`)
  input.classList.add(inputErrorClass)
  errorEl.textContent = input.validationMessage;
  errorEl.classList.add(errorClass)
}

const validatInputCheck = (formElement, input, config) => {
  if(input.validity.valid) {
    hideError(formElement, input, config)
  } else {
    showError(formElement, input, config)
  }
}

const inputcheckValid = (listInput) => {
  console.log(listInput.some(input => input.validity.valid))
  return listInput.some(input => !input.validity.valid)
}

const checkButton = (buttonElement, listInput) => {
  buttonElement.disabled = !!inputcheckValid(listInput);
}

const setEventListeners = (formElement, config) => {
  const {inputSelector, submitButtonSelector} = config
  const listInput = Array.from(formElement.querySelectorAll(inputSelector))
  const buttonElement = formElement.querySelector(submitButtonSelector)
  listInput.forEach((input) => {
    input.addEventListener('input', () => {
      validatInputCheck(formElement, input, config)
      checkButton(buttonElement, listInput)
    })
  })
  checkButton(buttonElement, listInput)
}

const enableValidation = (config) => {
  const {formSelector} = config
  const formList = Array.from((document.querySelectorAll(formSelector)))
  formList.forEach((formElement) => {
    setEventListeners(formElement, config)
  })
}

