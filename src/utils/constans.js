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
const popupDelete = document.querySelector('#popup-delete')
const popupAvatar = document.querySelector('#popup-avatar')
const btnPlus = document.querySelector('.profile__add');
const formInput = document.querySelector('.popup__name')
const nameInput = document.querySelector('.popup__name_js_first-name');
const jobInput = document.querySelector('.popup__name_js_job');
const inputPlace = document.querySelector('.popup__name_place');
const inputLink = document.querySelector('.popup__name_link');
const titleText = document.querySelector('.profile__title');
const subtitleText = document.querySelector('.profile__subtitle');
const avatar = document.querySelector('.profile__img')
const gallery = document.querySelector('.gallery');
const closeImg = popupImg.querySelector('#popup-img__close');
const popupList = Array.from(document.querySelectorAll('.popup'));
const cards = document.querySelector('#cards');
const btnDelete = document.querySelector('.gallery__trash')
const btnAva = document.querySelector('.profile__pen')

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__name',
  submitButtonSelector: '.popup__btn',
  inputErrorClass: 'popup__name_type_error',
  errorClass: 'popup__name-error-active'
}

const userConfig = {
  nameSelector: '.profile__title',
  subSelector: '.profile__subtitle',
  avatarSelector: '.profile__img'
}

const apiConfig = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-25',
  token: '8da154f6-954e-43f0-bf1e-69fea5b0fb49'
}

export {
  config,
  userConfig,
  apiConfig,
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
  formInput,
  avatar,
  popupDelete,
  btnDelete,
  popupAvatar,
  btnAva
};