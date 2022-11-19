let name = document.querySelector('.profile__name');
let desctiption = document.querySelector('.profile__desctiption');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-icon');
let popup = document.querySelector('.popup');
function popupOpen() {
  popup.classList.add('popup__opened')
  nameInput.value = name.textContent
  aboutInput.value = desctiption.textContent
}

function popupClose() {
  popup.classList.remove('popup__opened')
}

editButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);

let formElement = document.querySelector('.form');
let nameInput = formElement.querySelector('.field__item_name');
let aboutInput = formElement.querySelector('.field__item_about');

function formSubmitHandler(evt) {
  evt.preventDefault()
  name.textContent = nameInput.value
  desctiption.textContent = aboutInput.value
  popupClose()
}

formElement.addEventListener('submit', formSubmitHandler)