let profile = document.querySelector('.profile__vector');
let closeBtn = document.querySelector('.popup__close');
let popUp = document.querySelector('.popup');
let form = document.querySelector('.popup__form');
let sendBtn = document.querySelector('.popup__btn')
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__job')
let titleText = document.querySelector('.profile__title');
let subtitleText = document.querySelector('.profile__subtitle');

function openProfile() {
	popUp.classList.add('open')
}

function closeProfile() {
	popUp.classList.remove('open')
}

function FormSubmitHandle(e) {
	e.preventDefault();
	let name = nameInput.value;
	let job = jobInput.value;
	console.log(job)

titleText.textContent = name;
subtitleText.textContent = job;
closeProfile()
}

profile.addEventListener('click', openProfile);
closeBtn.addEventListener('click', closeProfile);
form.addEventListener('submit', FormSubmitHandle)