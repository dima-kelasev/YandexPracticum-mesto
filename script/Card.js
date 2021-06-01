const popupImg = document.querySelector('#popup-img__form');
const imgTitle = document.querySelector('.popup__img-title');
// const closeImg = popupImg.querySelector('#popup-img__close');
import {openPopup} from "./utils.js";


class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }
  //получение темплэйта
 _getTemplate() {
   return document.querySelector(this._templateSelector).content.querySelector('.gallery__item').cloneNode(true);
  }

//генерация карточек
  genereteCard() {
    this._element  = this._getTemplate();
    const galleryImg = this._element.querySelector('.gallery__img')
    galleryImg.src = this._link;
    galleryImg.alt = this._name;
    this._element.querySelector('.gallery__title').textContent = this._name;
    this._setListener();
    return this._element;
  }

  //метод открытия попапа img
  _handleOpenPopup = () => {
    popupImg.querySelector('.popup__img-main').src = this._link;
    popupImg.querySelector('.popup__img-main').alt = this._name;
    imgTitle.textContent = this._name;
    openPopup(popupImg)
  };

  _setListener() {
  //  открытие попапа на картинку
    this._element.querySelector('.gallery__img').addEventListener("click", this._handleOpenPopup);
  //  кнопка лайка
    this._element.querySelector('.gallery__like').addEventListener('click',  (e) => {
      e.target.classList.toggle('gallery__like_active');
    })
  //  удаление карточки
    this._element.querySelector('.gallery__trash').addEventListener('click',  (e) => {
      e.target.closest('.gallery__item').remove();
    })
  }
}

export default Card;