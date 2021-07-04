import FormValidator from "../components/FormValidator.js";
import Api from "../components/Api.js";
import Card from '../components/Card.js';
import {PopupWithForm} from "../components/PopupWithForm.js";
import {PopupWithImage} from "../components/PopupWithImage.js";
import {Section} from '../components/Section.js';
import {UserInfo} from "../components/UserInfo.js";
import {
  btnPlus,
  config,
  gallery,
  jobInput,
  nameInput,
  popupEditProfile,
  popupImg,
  popupPlace,
  profileBtn,
  userConfig,
  apiConfig,
  titleText,
  subtitleText,
  avatar,
  popupDelete,
  popupAvatar,
  btnAva
} from "../utils/constans.js";
import './index.css'


//создание экземпляров классов
const formEditProfile = new FormValidator(config, popupEditProfile);
formEditProfile.enableValidation();

const formAddCard = new FormValidator(config, popupPlace);
formAddCard.enableValidation();

const formAvatar = new FormValidator(config, popupAvatar)
formAvatar.enableValidation()

//Api
const { baseUrl, token} = apiConfig
const api = new Api(baseUrl, token)

//класс информации о пользователе
const {nameSelector, subSelector} = userConfig
const user = new UserInfo(nameSelector, subSelector);

//попап с картинкой
const popUpWithImg = new PopupWithImage(popupImg)
popUpWithImg.setEventListeners()


//экземпляр Section
const cardList = new Section({
  renderer: (item) => {
    cardList.addItem(createNewCard(item))
  }
}, gallery)


//рендер всех карточек
api.getInitialCards()
.then((result) => {
  cardList.renderItems(result)
})
.catch((err) => {
  console.log(err);
})


//форма добавления карточки
const popUpAdd = new PopupWithForm({
  popupSelector: popupPlace,
  handleFormSubmit: (data) => {
    popUpAdd.loading(true)
    api.addNewCard(data)
    .then( data => {
      cardList.addItem(createNewCard(data))
    })
    .finally(() => {
      popUpAdd.loading(false)
    })
  }
})
popUpAdd.setEventListeners()


//форма редактирования
const popUpEdit = new PopupWithForm({
  popupSelector: popupEditProfile,
  handleFormSubmit: (data) => {
    popUpEdit.loading(true)
    api.setInfo(data)
    .then((res) => {
      user.setUserInfo(res)
    })
    .finally(() => {
      popUpEdit.loading(false)
    })
  }
})
popUpEdit.setEventListeners()


//форма смены аватара
const popupAva = new PopupWithForm({
  popupSelector: popupAvatar,
  handleFormSubmit: (data) => {
    popupAva.loading(true)
    api.setAva(data)
    .then(res => {
      avatar.src = res.avatar
    })
    .finally(() => {
      popupAva.loading(false)
    })
  }
})
popupAva.setEventListeners()


let userId = null

//подставляем данные с сервера в название профиля и аватара
api.getInfo()
.then(res => {
  userId = res._id
  titleText.textContent = res.name
  subtitleText.textContent = res.about
  avatar.src = res.avatar
})


//функция создания карточки
const createNewCard = (item) => {
  const newCard = new Card({
    data: item,
    handleCardClick: (job, name) => {
      popUpWithImg.open(job, name)
    },
    currentUser: userId,
    deleteButtonClick: () => {
      const popupConfurm = new PopupWithForm({
        popupSelector: popupDelete,
        handleFormSubmit: () => {
          api.deleteCard(item._id)
          .then(() => {
            newCard.removeCard()
          })
        }
      })
      popupConfurm.open()
      popupConfurm.setEventListeners()
    },
    setLike: () => {
      api.setlike(newCard._data)
      .then((data) => {
        newCard.setLike(data)
      })
    },
    deleteLike: () => {
      api.removeLike(newCard._data)
      .then((data) => {
        newCard.deleteLike(data)
      })
    }
  }, "#cards")
  return newCard.genereteCard()
}


//слушатели
profileBtn.addEventListener('click', () => {
  const {name, about} = user.getUserInfo()
  nameInput.value = name
  jobInput.value = about
  formEditProfile.toggleButtonState()
  popUpEdit.open()
})

btnPlus.addEventListener('click', () => {
  formAddCard.toggleButtonState()
  popUpAdd.open()
})

btnAva.addEventListener('click', () => {
  formAvatar.toggleButtonState()
  popupAva.open()
})


