import FormValidator from "../components/FormValidator.js";
import Card from '../components/Card.js';
import {PopupWithForm} from "../components/PopupWithForm.js";
import {PopupWithImage} from "../components/PopupWithImage.js";
import {Section} from '../components/Section.js';
import {UserInfo} from "../components/UserInfo.js";
import {
  btnPlus,
  config,
  userConfig,
  gallery,
  initialCards,
  jobInput,
  nameInput,
  popupEditProfile,
  popupImg,
  popupPlace,
  profileBtn,
} from "../utils/constans.js";
import './index.css'



//создание экземпляров классов
const formEditProfile = new FormValidator(config, popupEditProfile);
formEditProfile.enableValidation();

const formAddCard = new FormValidator(config, popupPlace);
formAddCard.enableValidation();

//класс информации о пользователе
const {nameSelector, subSelector} = userConfig
const user = new UserInfo(nameSelector, subSelector);

//попап с картинкой
const popUpWithImg = new PopupWithImage(popupImg)
popUpWithImg.setEventListeners()

//форма добавления карточки
const popUpAdd = new PopupWithForm({
  popupSelector: popupPlace,
  handleFormSubmit: (data) => {
    renderCards.addItem(createNewCard(data))
  }
})
popUpAdd.setEventListeners()

//форма редактирования
const popUpEdit = new PopupWithForm({
  popupSelector: popupEditProfile,
  handleFormSubmit: (item) => {
    user.setUserInfo(item)
  }
})
popUpEdit.setEventListeners()

//функция создания карточки
const createNewCard = (item) => {
  const newCard = new Card({
    data: item,
    handleCardClick: (job, name) => {
      popUpWithImg.open(job, name)
    }
  }, "#cards")
  return newCard.genereteCard()
}

//рендер всех карточек
const renderCards = new Section({
  items: initialCards,
  renderer: (data) => {
    renderCards.addItem(createNewCard(data))
  }
}, gallery);
renderCards.renderItems()


//слушатели
profileBtn.addEventListener('click', () => {
  // подставляем данные в пользователя при открытии
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
