const nameProfile = document.querySelector('.profile__name')
const descriptionProfile = document.querySelector('.profile__description')
const editProfileBtn = document.querySelector('.profile__edit-button')
const addProfileBtn = document.querySelector('.profile__add-button')
const popupBigImg = document.querySelector('.popup_bigimg')
const popupProfileEdit = document.querySelector('.popup_edit')
const popupProfileAdd = document.querySelector('.popup_add')
const closePopupEditBtn = popupProfileEdit.querySelector('.popup__close-icon')
const closePopupAddBtn = popupProfileAdd.querySelector('.popup__close-icon')
const closePopupBigBtn = popupBigImg.querySelector('.popup__close-icon')
const popupBigImage = popupBigImg.querySelector('.popup__image')
const popupBigTitle = popupBigImg.querySelector('.popup__title')
const elementsCardContainer = document.querySelector('.elements__list')
const popupAddCardForm = document.querySelector('.form_add')
const popupAddInputTitleForm = document.querySelector('.field__item_value_title')
const popupAddinputUrlForm = document.querySelector('.field__item_value_url')
const popupEditElementForm = document.querySelector('.form_edit') 
const popupEditInputNameForm = popupEditElementForm.querySelector('.field__item_value_name')
const popupEditInputDescriptionForm = popupEditElementForm.querySelector('.field__item_value_description')
const templatesCard = document
  .querySelector('#elements-card')
  .content.querySelector('.element')
const popupOpening = document.querySelector('.popup')

function openPopup(popup) {
  popup.classList.add('popup_opened')
}

function closePopup(popup) {
  popup.classList.remove('popup_opened')
}

function submitEditProfileForm(evt) {
  evt.preventDefault()
  nameProfile.textContent = popupEditInputNameForm.value 
  descriptionProfile.textContent = popupEditInputDescriptionForm.value
  closePopup(popupProfileEdit)
}

const handleTemplatesDeleteCard = (event) => {
  event.target.closest('.element').remove()
}

const handleTemplatesLikeCard = (event) => {
  event.target
    .closest('.element__like')
    .classList.toggle('element__like_active')
}

const generateTemplatesCard = (dataCard) => {
  const newTemplatesCard = templatesCard.cloneNode(true)
  const titleTemplates = newTemplatesCard.querySelector('.element__title')
  const imageTemplates = newTemplatesCard.querySelector('.element__pic')
  titleTemplates.textContent = dataCard.name
  imageTemplates.src = dataCard.link
  imageTemplates.alt = dataCard.name
  
  const deleteTemplatesBtn = newTemplatesCard.querySelector('.element__trash')
  deleteTemplatesBtn.addEventListener('click', handleTemplatesDeleteCard)
  const likeTemplatesBtn = newTemplatesCard.querySelector('.element__like')
  likeTemplatesBtn.addEventListener('click', handleTemplatesLikeCard)

  const openPopupBigImage = () => {
    openPopup(popupBigImg)
    popupBigImage.src = imageTemplates.src
    popupBigTitle.textContent = dataCard.name
    popupBigImage.alt = dataCard.name
  }
  imageTemplates.addEventListener('click', openPopupBigImage)

  return newTemplatesCard
}
const submitAddCardForm = (event) => {
  event.preventDefault()
  renderInitialCards({ name: popupAddInputTitleForm.value, link: popupAddinputUrlForm.value })
  closePopup(popupProfileAdd)
  popupAddCardForm.reset();
}
const renderInitialCards = (dataCard) => {
  elementsCardContainer.prepend(generateTemplatesCard(dataCard))
}

initialCards.forEach((dataCard) => {
  renderInitialCards(dataCard)
})

popupAddCardForm.addEventListener('submit', submitAddCardForm)

editProfileBtn.addEventListener('click', () => {
  openPopup(popupProfileEdit)
  popupEditInputNameForm.value = nameProfile.textContent;
  popupEditInputDescriptionForm.value = descriptionProfile.textContent;
})

addProfileBtn.addEventListener('click', () => openPopup(popupProfileAdd))
closePopupEditBtn.addEventListener('click', () => closePopup(popupProfileEdit))

closePopupAddBtn.addEventListener('click', () => closePopup(popupProfileAdd))

closePopupBigBtn.addEventListener('click', () => {
  closePopup(popupBigImg);
  popupBigImage.src = '';
});

popupEditElementForm.addEventListener('submit', submitEditProfileForm)

popupBigImage.src = '';
