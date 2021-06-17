import FormValidator from "../components/FormValidator.js";
import Card from '../components/Card.js';
import {PopupWithForm} from "../components/PopupWithForm.js";
import {PopupWithImage} from "../components/PopupWithImage.js";
import {Section} from '../components/Section.js';
import {UserInfo} from "../components/UserInfo.js";
import {
  btnPlus,
  config,
  gallery,
  initialCards,
  jobInput,
  nameInput,
  popupEditProfile,
  popupImg,
  popupPlace,
  profileBtn,
  subtitleText,
  titleText,
} from "../utils/constans.js";
import './index.css'

//функция создания карточки
const createNewCard = (item) => {
  const popUpWithImg = new PopupWithImage(popupImg)
  const newCard = new Card({
    data: item,
    handleCardClick: (job, name) => {
      popUpWithImg.open(job, name)
    }
  }, "#cards")
  return newCard.genereteCard()
}

//создание экземпляров классов
const formEditProfile = new FormValidator(config, popupEditProfile);

const formAddCard = new FormValidator(config, popupPlace);

const user = new UserInfo(titleText, subtitleText);

//рендер всех карточек
const renderCards = new Section({
  items: initialCards,
  renderer: (data) => {
    renderCards.addItem(createNewCard(data))
  }
}, gallery);

//форма добавления карточки
const popUpAdd = new PopupWithForm({
  popupSelector: popupPlace,
  handleFormSubmit: (data) => {
    renderCards.addItem(createNewCard(data))
  }
})

//форма редактирования
const popUpEdit = new PopupWithForm({
  popupSelector: popupEditProfile,
  handleFormSubmit: (item) => {
    user.setUserInfo(item)
  }
})

//вызовы методов
formEditProfile.enableValidation();
formAddCard.enableValidation();
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
