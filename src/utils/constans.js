const imgTitle = document.querySelector('.popup__img-title');
const popUpImg = document.querySelector('.popup__img-main')
const popupEditProfile = document.querySelector('#popup-edit-profile');
const popupPlace = document.querySelector('#popup-place__form');
const profileBtn = document.querySelector('.profile__btn');
const closeProfileBtn = document.querySelector('.popup__btn-close');
const closeCardBtn = document.querySelector('#closePlaceform');
const popupImg = document.querySelector('#popup-img__form');
const formProfile = document.querySelector('#pop-form-edit');
const formPlace = document.querySelector('#popup-place__form_Add');
const btnPlus = document.querySelector('.profile__add');
const formInput = document.querySelector('.popup__name')
const nameInput = document.querySelector('.popup__name_js_first-name');
const jobInput = document.querySelector('.popup__name_js_job');
const inputPlace = document.querySelector('.popup__name_place');
const inputLink = document.querySelector('.popup__name_link');
const titleText = document.querySelector('.profile__title');
const subtitleText = document.querySelector('.profile__subtitle');
const gallery = document.querySelector('.gallery');
const closeImg = popupImg.querySelector('#popup-img__close');
const popupList = Array.from(document.querySelectorAll('.popup'));
const cards = document.querySelector('#cards');

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

export {
  config,
  initialCards,
  popupImg,
  imgTitle,
  popUpImg,
  popupEditProfile,
  popupPlace,
  profileBtn,
  closeProfileBtn,
  closeCardBtn,
  formPlace,
  formProfile,
  btnPlus,
  nameInput,
  jobInput,
  inputLink,
  inputPlace,
  subtitleText,
  titleText,
  gallery,
  closeImg,
  popupList,
  cards,
  formInput
};