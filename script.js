let profile = document.querySelector('.profile__btn');
let closeBtn = document.querySelector('.popup__btnclose');
let popUp = document.querySelector('.popup');
let form = document.querySelector('.popup__form');
let sendBtn = document.querySelector('.popup__btn')
let nameInput = document.querySelector('.popup__name_js_first-name');
let jobInput = document.querySelector('.popup__name_js_job')
let titleText = document.querySelector('.profile__title');
let subtitleText = document.querySelector('.profile__subtitle');

function openProfile() {
	popUp.classList.add('popup_opened');
	let name = titleText.textContent;
	let work = subtitleText.textContent;

	nameInput.value = name;
	jobInput.value = work
}

function closeProfile() {
	popUp.classList.remove('popup_opened')
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
form.addEventListener('submit', FormSubmitHandle)