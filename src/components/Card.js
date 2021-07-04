class Card {
  constructor({data, handleCardClick, currentUser, deleteButtonClick, setLike, deleteLike}, templateSelector) {
    this._data = data
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._likeCounter = data.likes;
    this._owner = data.owner._id;
    this._currentUser = currentUser;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;

    this._deleteButtonClick = deleteButtonClick;
    this._setLike = setLike;
    this._deleteLike = deleteLike;

  }

  //получение темплэйта
  _getTemplate() {
    return document.querySelector(this._templateSelector).content.querySelector('.gallery__item').cloneNode(true);
  }

  _likesNumber(data) {
    return String(data.likes.length)
  }

  setLike(data) {
    this._element.querySelector('.gallery__like').classList.add('gallery__like_active');
    this._element.querySelector('.gallery__like_count').textContent = this._likesNumber(data);
  }

  deleteLike(data) {
    this._element.querySelector('.gallery__like').classList.remove('gallery__like_active');
    this._element.querySelector('.gallery__like_count').textContent = this._likesNumber(data);
  }

  _LikedByMe() {
    this._data.likes.forEach((likeOwner) => {
      if (likeOwner._id === this._currentUser) {
        this._element.querySelector('.gallery__like').classList.add('gallery__like_active');
      }
    })
  }

//генерация карточек
  genereteCard() {
    this._element = this._getTemplate();
    const galleryImg = this._element.querySelector('.gallery__img');
    this._element.querySelector('.gallery__like_count').textContent = this._likeCounter.length
    galleryImg.src = this._link;
    galleryImg.alt = this._name;
    this._element.querySelector('.gallery__title').textContent = this._name;

    this._setListener();
    this._LikedByMe()

    if (this._owner === this._currentUser) {
      this._element.querySelector('.gallery__trash').classList.remove('gallery__trash_hide')
    }
    return this._element;
  }

  _setListener() {
    //  открытие попапа на картинку
    this._element.querySelector('.gallery__img').addEventListener("click", () => {
      this._handleCardClick(this._link, this._name)
    });
    //  кнопка лайка
    this._element.querySelector('.gallery__like').addEventListener('click', () => {
      if (this._element.querySelector('.gallery__like').classList.contains('gallery__like_active')) {
        this._deleteLike()
      } else {
        this._setLike()
      }
      // e.target.classList.toggle('gallery__like_active');
      // this._likeBtn.textContent = + 1;
    })
    //  удаление карточки
    this._element.querySelector('.gallery__trash').addEventListener('click', (e) => {
      this._deleteButtonClick()
    })
  }

  getId() {
    return this._id
  }

  removeCard() {
    this._element.remove();
  }
}

export default Card;