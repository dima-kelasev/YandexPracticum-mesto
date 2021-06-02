const popupImg = document.querySelector('#popup-img__form');
const imgTitle = document.querySelector('.popup__img-title');
const popupEditProfile = document.querySelector('#popup-edit-profile');
const popupPlace = document.querySelector('#popup-place__form');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Домбай',
    link: 'https://images.unsplash.com/photo-1558098115-228ee6fbc761?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1785&q=80',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  }
];

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__name',
  submitButtonSelector: '.popup__btn',
  inputErrorClass: 'popup__name_type_error',
  errorClass: 'popup__name-error-active'
}

export {config, initialCards, popupImg, imgTitle, popupEditProfile, popupPlace};