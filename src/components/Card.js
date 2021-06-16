class Card {
  constructor({data, handleCardClick}, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick

  }

  //получение темплэйта
  _getTemplate() {
    return document.querySelector(this._templateSelector).content.querySelector('.gallery__item').cloneNode(true);
  }

//генерация карточек
  genereteCard() {
    this._element = this._getTemplate();
    const galleryImg = this._element.querySelector('.gallery__img');
    galleryImg.src = this._link;
    galleryImg.alt = this._name;
    this._element.querySelector('.gallery__title').textContent = this._name;
    this._setListener();
    return this._element;
  }

  _setListener() {
    //  открытие попапа на картинку
    this._element.querySelector('.gallery__img').addEventListener("click", () => {
      this._handleCardClick(this._link, this._name)
    });
    //  кнопка лайка
    this._element.querySelector('.gallery__like').addEventListener('click', (e) => {
      e.target.classList.toggle('gallery__like_active');
    })
    //  удаление карточки
    this._element.querySelector('.gallery__trash').addEventListener('click', (e) => {
      e.target.closest('.gallery__item').remove();
      this._element = null;
    })
  }
}

export default Card;