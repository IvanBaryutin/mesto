import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

//Массив данных для карточек elements
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//Кнопки
const profileEditLink = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__addbutton');
const closePopupLinkProfile = document.querySelector('.popup__close_content_profile');
const closePopupLinkArticle = document.querySelector('.popup__close_content_article');
const closePopupLinkImage = document.querySelector('.popup__close_content_image');


const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__subtitle');

const elementsContainer = document.querySelector('.elements');

//Модальные окна
const popupEditProfile = document.querySelector('.popup_content_profile');
const popupAddArticle = document.querySelector('.popup_content_article');
const popupImage = document.querySelector('.popup_content_image');
const imgUrl = popupImage.querySelector('.popup__image');
const imgCaption = popupImage.querySelector('.popup__figcaption');
let openedPopup;



//Поля ввода форм
const formNameInput = popupEditProfile.querySelector('.form__text-input_name_name');
const formJobInput = popupEditProfile.querySelector('.form__text-input_name_job');
const formTitleInput = popupAddArticle.querySelector('.form__text-input_name_title');
const formLinkInput = popupAddArticle.querySelector('.form__text-input_name_link');

//Формы
const formEditProfile = popupEditProfile.querySelector('.form');
const formAddArticle = popupAddArticle.querySelector('.form');


function openPopup(popup) {
  popup.classList.add('popup_opened');
  openedPopup = popup;
  document.addEventListener('keydown', checkPressedPopupButton);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', checkPressedPopupButton);
}

function editProfileSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = formNameInput.value;
  profileJob.textContent = formJobInput.value;
  closePopup(popupEditProfile);
}

function addArticleSubmitHandler(evt) {
  evt.preventDefault();
  const title = formTitleInput.value;
  const link = formLinkInput.value;
  const newCard = {
    name: title,
    link: link
  }
  renderCard(newCard, elementsContainer);
  closePopup(popupAddArticle);
  formAddArticle.reset();
  form2.toggleButtonState();
}

const renderCard = function (data) {
  const card = new Card(data, '#element');
  const cardElement = card.getCardElement();
  elementsContainer.prepend(cardElement);
};


export default function showImage(url, caption) {
  if (url && caption) {
    imgUrl.src = url;
    imgUrl.alt = caption + ' фото';
    imgCaption.textContent = caption;
    openPopup(popupImage);
  }
}

formEditProfile.addEventListener('submit', editProfileSubmitHandler);
formAddArticle.addEventListener('submit', addArticleSubmitHandler);

closePopupLinkProfile.addEventListener('click', () => closePopup(popupEditProfile));
closePopupLinkArticle.addEventListener('click', () => closePopup(popupAddArticle));
closePopupLinkImage.addEventListener('click', () => closePopup(popupImage));

profileEditLink.addEventListener('click', () => {
  formNameInput.value = profileName.textContent;
  formJobInput.value = profileJob.textContent;
  openPopup(popupEditProfile);
});
addButton.addEventListener('click', () => openPopup(popupAddArticle));

//Проверяем какая кнопка клавиатуры нажата
function checkPressedPopupButton(evt) {
  if (evt.key === 'Escape') {
    closePopup(openedPopup);
  }
};

//Закрываем попап по нажатию на попап
const enableOverlayClose = () => {
  const popupList = Array.from(document.querySelectorAll('.popup'));
  popupList.forEach((popupElement) => {
    popupElement.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup')) {
        closePopup(popupElement);
      }
    });
  });
};

enableOverlayClose();

const settings = {
  formSelector: '.form',
  inputSelector: '.form__text-input',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_inactive',
  inputErrorClass: 'form__text-input_type_error',
  errorClass: 'form__input-error_active'
}

const form1 = new FormValidator(settings, formEditProfile);
form1.enableValidation();
const form2 = new FormValidator(settings, formAddArticle);
form2.enableValidation();



/*
const enableValidation = (settings) => {
  // Найдём все формы с указанным классом в DOM
  const formList = Array.from(document.querySelectorAll(settings.formSelector));

  // Переберём полученную коллекцию
  formList.forEach((formElement) => {
    const form = new FormValidator(settings, formElement);
    form.enableValidation();
  });
};

// включение валидации вызовом enableValidation, все настройки передаются при вызове
enableValidation({
  formSelector: '.form',
  inputSelector: '.form__text-input',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_inactive',
  inputErrorClass: 'form__text-input_type_error',
  errorClass: 'form__input-error_active'
});
*/

initialCards.reverse().forEach((data) => {
  renderCard(data);
});
