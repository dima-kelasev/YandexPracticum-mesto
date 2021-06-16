import FormValidator from "../components/FormValidator.js";
import Card from '../components/Card.js';
import {PopupWithForm} from "../components/PopupWithForm.js";
import {PopupWithImage} from "../components/PopupWithImage.js";
import {Section} from '../components/Section.js';
import {UserInfo} from "../components/UserInfo.js";
import {
  config,
  initialCards,
  inputPlace,
  popupPlace,
  popupEditProfile,
  popupImg,
  titleText,
  subtitleText,
  nameInput,
  jobInput,
  gallery,
  inputLink,
  profileBtn,
  btnPlus,
} from "../utils/constans.js";


//создание экземпляров классов
const formEditProfile = new FormValidator(config, popupEditProfile);

const formAddCard = new FormValidator(config, popupPlace);

//форма добавления карточки
const popUpAdd = new PopupWithForm({
  popupSelector: popupPlace,
  handleFormSubmit: () => {
    const user = new UserInfo(inputPlace.value, inputLink.value)
    const dataUser = user.getUserInfo()
    const newCard = new Card({
      data: dataUser,
      handleCardClick: (job, name) => {
        const popUpWithImg = new PopupWithImage(popupImg)
        popUpWithImg.open(job, name)
      }
    }, "#cards")
    gallery.prepend(newCard.genereteCard())
  }
})

//форма редактирования
const popUpEdit = new PopupWithForm({
  popupSelector: popupEditProfile,
  handleFormSubmit: () => {
    const user = new UserInfo(nameInput.value, jobInput.value)
    const dataUser = user.getUserInfo()
    titleText.textContent = dataUser.name;
    subtitleText.textContent = dataUser.link;
  }
})

//рендер всех карточек
const renderCards = new Section({
  items: initialCards,
  renderer: (data) => {
    const card = new Card({
      data,
      handleCardClick: (link, name) => {
        const popUpWithImg = new PopupWithImage(popupImg)
        popUpWithImg.open(link, name)
      }
    }, '#cards');
    renderCards.addItem(card.genereteCard())
  }
}, gallery);


//вызовы методов
formEditProfile.enableValidation();
formAddCard.enableValidation();
renderCards.renderItems()

//слущатели
profileBtn.addEventListener('click', () => {
  // подъставлем данные в пользователя при открытии
  const infoUser = new UserInfo(titleText.textContent, subtitleText.textContent)
  const dataUser = infoUser.getUserInfo()
  nameInput.value = dataUser.name
  jobInput.value = dataUser.link
  popUpEdit.open()

})
btnPlus.addEventListener('click', () => {
  popUpAdd.open()
})
