import FormValidator from "./FormValidator.js";
import Card from './Card.js';
import {closePopup, openPopup} from "./utils.js";
import {config, initialCards} from "./constans.js";
import {popupPlace, popupEditProfile} from "./constans.js";


const profileBtn = document.querySelector('.profile__btn');
const closeProfileBtn = document.querySelector('.popup__btn-close');
const closeCardBtn = document.querySelector('#closePlaceform');
const popupImg = document.querySelector('#popup-img__form');
const formProfile = document.querySelector('#pop-form-edit');
const formPlace = document.querySelector('#popup-place__form_Add');
const btnPlus = document.querySelector('.profile__add');
const nameInput = document.querySelector('.popup__name_js_first-name');
const jobInput = document.querySelector('.popup__name_js_job');
const inputPlace = document.querySelector('.popup__name_place');
const inputLink = document.querySelector('.popup__name_link');
const titleText = document.querySelector('.profile__title');
const subtitleText = document.querySelector('.profile__subtitle');
const gallery = document.querySelector('.gallery');

const closeImg = popupImg.querySelector('#popup-img__close');

const popupList = Array.from(document.querySelectorAll('.popup'));

const formEditProfile = new FormValidator(config, popupEditProfile);
formEditProfile.enableValidation();

const formAddCard = new FormValidator(config, popupPlace);
formAddCard.enableValidation();


//закрытие по нажатию на пустую область и клавишу Esc
const closePopUpClickOverlay = (popUp) => {
  popUp.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
      closePopup(popUp);
    }
  })
}

popupList.forEach((form) => {
    closePopUpClickOverlay(form);
  }
)

function openProfile() {
  openPopup(popupEditProfile);
}

function handleProfileFormSubmit(e) {
  e.preventDefault();
  titleText.textContent = nameInput.value;
  subtitleText.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

function createCard(dataCard) {
  const card = new Card(dataCard, '#cards')
  gallery.prepend(card.genereteCard())
}

function addCardElement(e) {
  e.preventDefault();
  const initialElement = {
    name: inputPlace.value,
    link: inputLink.value,
  }
  createCard(initialElement);
  formPlace.reset();
  closePopup(popupPlace);
}

function addCards() {
  //реверс не важен, но я решил повторить, что бы выводилось как раньше)
  initialCards.reverse().forEach((item) => {
    createCard(item);
  })
}

profileBtn.addEventListener('click', openProfile);

closeProfileBtn.addEventListener('click', function () {
  closePopup(popupEditProfile);
});

formProfile.addEventListener('submit', handleProfileFormSubmit);

btnPlus.addEventListener('click', function () {
  openPopup(popupPlace);
});

closeCardBtn.addEventListener('click', function () {
  closePopup(popupPlace);
});

closeImg.addEventListener('click', function () {
  closePopup(popupImg);
})

formPlace.addEventListener('submit', addCardElement);

addCards();

