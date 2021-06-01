export {openPopup, closePopup}


const popupBtnList = Array.from(document.querySelectorAll('.popup__btn'))
const inputList = Array.from(document.querySelectorAll('.popup__name'))

const handleEscUp = event => {
  if(event.key === 'Escape') {
    const popupActive = document.querySelector('.popup_opened')
    closePopup(popupActive)
  }
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscUp)
}

const checkInputBeforOpen = () => {
  popupBtnList.forEach((button) => {
    const inputcheckValid = (listInput) => {
      return listInput.some(input => !input.validity.valid)
    }
    button.disabled = !!inputcheckValid(inputList);
  })
}


function openPopup(popup) {

  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscUp);
  checkInputBeforOpen()
}