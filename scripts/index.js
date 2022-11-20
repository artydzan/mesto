let name = document.querySelector('.profile__name');
let desctiption = document.querySelector('.profile__description');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-icon');
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.form');
let nameInput = formElement.querySelector('.field__item-name_disabled');
let aboutInput = formElement.querySelector('.field__item-description_disabled');
function popupOpen() {
  popup.classList.add('popup__opened');
  nameInput.value = name.textContent;
  aboutInput.value = desctiption.textContent;
}

function popupClose() {
  popup.classList.remove('popup__opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  desctiption.textContent = aboutInput.value;
  popupClose();
}

editButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);
formElement.addEventListener('submit', formSubmitHandler);
