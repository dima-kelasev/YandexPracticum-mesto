let profile = document.querySelector('.profile__btn');
let closeBtn = document.querySelector('.popup__btnclose');
let closeCardBtn = document.querySelector('.popup-place__btnclose')
let popUp = document.querySelector('.popup');
let popupPlace = document.querySelector('.popup-place');
let form = document.querySelector('.popup__form');
let formPlace = document.querySelector('.popup-place__form');
let btnPlus = document.querySelector('.profile__add')
let nameInput = document.querySelector('.popup__name_js_first-name');
let jobInput = document.querySelector('.popup__name_js_job');
let inputPlace = document.querySelector('.popup-place__name_place');
let inputLink = document.querySelector('.popup-place__name_link');
let titleText = document.querySelector('.profile__title');
let subtitleText = document.querySelector('.profile__subtitle');
let gallery = document.querySelector('.gallery');



function openProfile() {
	popUp.classList.add('popup_opened');
	let name = titleText.textContent;
	let work = subtitleText.textContent;

	nameInput.value = name;
	jobInput.value = work
}

function openCard() {
	popupPlace.classList.add('popup-place_opened');
}

function closeCard() {
	popupPlace.classList.remove('popup-place_opened');
}

function closeProfile() {
	popUp.classList.remove('popup_opened') || popupPlace.classList.remove('popup-place_opened');
}

function FormSubmitHandle(e) {
	e.preventDefault();
	let name = nameInput.value;
	let job = jobInput.value;

titleText.textContent = name;
subtitleText.textContent = job;
closeProfile()
}

profile.addEventListener('click', openProfile);
closeBtn.addEventListener('click', closeProfile);
form.addEventListener('submit', FormSubmitHandle);
btnPlus.addEventListener('click', openCard);
closeCardBtn.addEventListener('click', closeCard);


const initialCards = [
	{
		name: 'Архыз',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
		trash: 'imegas/trash.png'
	},
	{
		name: 'Челябинская область',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
		trash: 'imegas/trash.png'
	},
	{
		name: 'Домбай',
		link: 'https://images.unsplash.com/photo-1558098115-228ee6fbc761?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1785&q=80',
		trash: 'imegas/trash.png'
	},
	{
		name: 'Камчатка',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
		trash: 'imegas/trash.png'
	},
	{
		name: 'Холмогорский район',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
		trash: 'imegas/trash.png'
	},
	{
		name: 'Байкал',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
		trash: 'imegas/trash.png'
	}
];

function addCard() {
	const templateCards = document.querySelector('#cards').content;

	formPlace.addEventListener('submit', function (e) {
		e.preventDefault();
		const place = inputPlace.value;
		const link = inputLink.value;

		const templateElement = templateCards.querySelector('.gallery__item').cloneNode(true);
		templateElement.querySelector('.gallery__img').src = link;
		templateElement.querySelector('.gallery__title').textContent = place;
		const removeCard = templateElement.querySelector('.gallery__trash');
		const likeBtn = templateElement.querySelector('.gallery__like');
		const imgClick = templateElement.querySelector('.gallery__img');

		removeCard.addEventListener('click', function (e) {
			e.target.closest('.gallery__item').remove();
		})

		likeBtn.addEventListener('click', function (e) {
			const activeLike = e.target;
			activeLike.classList.toggle('like_action')
		})

		imgClick.addEventListener('click', function (e) {
			const activeImg = e.target;
			const srcImg = activeImg.src;

			let title = templateElement.querySelector('.gallery__title').textContent;
			let popupImg = document.querySelector('.popup-img');
			let imgTitle = document.querySelector('.popup-img__title');
			let closeImg = popupImg.querySelector('.popup-img__close');

			popupImg.querySelector('.popup-img__main').src = srcImg
			imgTitle.textContent = title
			popupImg.classList.add('popup-img_opend');

			closeImg.addEventListener('click', function () {
				popupImg.classList.remove('popup-img_opend');
			})
		})

		gallery.prepend(templateElement)
		closeProfile()
	})

	  initialCards.forEach( (item) => {
		const templateElement = templateCards.querySelector('.gallery__item').cloneNode(true);
		  const removeCard = templateElement.querySelector('.gallery__trash');
		  const likeBtn = templateElement.querySelector('.gallery__like');
		  const imgClick = templateElement.querySelector('.gallery__img');

		  likeBtn.addEventListener('click', function (e) {
		  	const activeLike = e.target;
		  	activeLike.classList.toggle('like_action')
		  })

		  removeCard.addEventListener('click', function (e) {
		  	e.target.closest('.gallery__item').remove();
		  })

		  templateElement.querySelector('.gallery__img').src = item.link;
		  templateElement.querySelector('.gallery__title').textContent = item.name;
		  templateElement.querySelector('.gallery__trash').src = item.trash;

		  gallery.append(templateElement)

		  imgClick.addEventListener('click', function (e) {
		  	const activeImg = e.target;
			const srcImg = activeImg.src;

			let title = templateElement.querySelector('.gallery__title').textContent;
			let popupImg = document.querySelector('.popup-img');
			let imgTitle = document.querySelector('.popup-img__title');
			let closeImg = popupImg.querySelector('.popup-img__close');

			popupImg.querySelector('.popup-img__main').src = srcImg
		  	imgTitle.textContent = title
		  	popupImg.classList.add('popup-img_opend');

		  	closeImg.addEventListener('click', function () {
			  popupImg.classList.remove('popup-img_opend');
		  	})
		  })
	})
}
addCard()

