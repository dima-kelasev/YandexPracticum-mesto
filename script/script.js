const profile = document.querySelector('.profile__btn');
const closeProfileBtn = document.querySelector('.popup__btnclose');
const closeCardBtn = document.querySelector('#closePlaceform')
const popupEditProfile = document.querySelector('#popup-edit-profile');
const popupPlace = document.querySelector('#popup-place__form');
const popupImg = document.querySelector('#popup-img__form');
const formProfile = document.querySelector('#pop-form-edit');
const formPlace = document.querySelector('#popup-place__form_Add');
const btnPlus = document.querySelector('.profile__add')
const nameInput = document.querySelector('.popup__name_js_first-name');
const jobInput = document.querySelector('.popup__name_js_job');
const inputPlace = document.querySelector('.popup__name_place');
const inputLink = document.querySelector('.popup__name_link');
const titleText = document.querySelector('.profile__title');
const subtitleText = document.querySelector('.profile__subtitle');
const gallery = document.querySelector('.gallery');

function openPopup(popup) {
	popup.classList.add('popup_opened');
}

function closePopup(popup) {
	popup.classList.remove('popup_opened');
}

function editProfile() {
  openPopup(popupEditProfile);
	nameInput.value = titleText.textContent;
	jobInput.value = subtitleText.textContent;
}

function handleFormSubmit(e) {
  e.preventDefault();
	titleText.textContent = nameInput.value;
	subtitleText.textContent = jobInput.value;
	closePopup(popupEditProfile);
}

profile.addEventListener('click', editProfile);
closeProfileBtn.addEventListener('click', function () {
	closePopup(popupEditProfile);
});
formProfile.addEventListener('submit', handleFormSubmit);
btnPlus.addEventListener('click', function () {
	openPopup(popupPlace);
});
closeCardBtn.addEventListener('click', function () {
	closePopup(popupPlace);
});

const initialCards = [
	{
		name: 'Архыз',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
	  trash: 'imegas/trash.png',
		alt: 'Архыз'
	},
	{
		name: 'Челябинская область',
	  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
	  trash: 'imegas/trash.png',
		alt: 'Челябинская область'
	},
	{
		name: 'Домбай',
		link: 'https://images.unsplash.com/photo-1558098115-228ee6fbc761?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1785&q=80',
		trash: 'imegas/trash.png',
		alt: 'Домбай'
	},
	{
		name: 'Камчатка',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
		trash: 'imegas/trash.png',
		alt: 'Камчатка'
	},
	{
		name: 'Холмогорский район',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
		trash: 'imegas/trash.png',
		alt: 'Холмогорский район'
	},
	{
		name: 'Байкал',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
		trash: 'imegas/trash.png',
		alt: 'Байкал'
	}
];

const templateCards = document.querySelector('#cards').content;
const imgTitle = document.querySelector('.popup__img-title');
const closeImg = popupImg.querySelector('#popup-img__close');

function createElement(item) {
	const element = templateCards.querySelector('.gallery__item').cloneNode(true);
	element.querySelector('.gallery__img').src = item.link;
	element.querySelector('.gallery__img').alt = item.alt;
	element.querySelector('.gallery__title').textContent = item.name;
	element.querySelector('.gallery__trash').src = item.trash;

	const removeCard = element.querySelector('.gallery__trash');
	const likeBtn = element.querySelector('.gallery__like');
	const imgClick = element.querySelector('.gallery__img');

	likeBtn.addEventListener('click', function (e) {
		e.target.classList.toggle('gallery__like_active');
	})

	removeCard.addEventListener('click', function (e) {
		e.target.closest('.gallery__item').remove();
	})

	imgClick.addEventListener('click', function (e) {
		const activeImg = e.target;
		const srcImg = activeImg.src;
		const altImg = activeImg.alt;
		let title = element.querySelector('.gallery__title').textContent;

		popupImg.querySelector('.popup__img-main').src = srcImg;
		popupImg.querySelector('.popup__img-main').alt = altImg;
		imgTitle.textContent = title;
		openPopup(popupImg);
	});

	return element;
}

function addCards(element ,cards) {
	element.append(cards);
}

function getCardElement(e) {
	e.preventDefault();
	const initialElement = {
		name: inputPlace.value,
		link: inputLink.value,
	}
	const templateElement = createElement(initialElement);
	gallery.prepend(templateElement);
	formPlace.reset();
	closePopup(popupPlace);
}

function addCard() {
	  initialCards.forEach( (item) => {
			const templateElement = createElement(item)
			addCards(gallery, templateElement);
	})
}

closeImg.addEventListener('click', function () {
	closePopup(popupImg);
})
formPlace.addEventListener('submit',getCardElement);
addCard();