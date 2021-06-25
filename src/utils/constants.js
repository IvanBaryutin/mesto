//Массив данных для карточек elements
export const initialCards = [
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
export const profileEditLink = document.querySelector('.profile__edit-button');
export const addButton = document.querySelector('.profile__addbutton');
export const closePopupLinkProfile = document.querySelector('.popup__close_content_profile');
export const closePopupLinkArticle = document.querySelector('.popup__close_content_article');
export const closePopupLinkImage = document.querySelector('.popup__close_content_image');


export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__subtitle');

export const elementsContainer = document.querySelector('.elements');


//Модальные окна
export const popupEditProfile = document.querySelector('.popup_content_profile');
export const popupAddArticle = document.querySelector('.popup_content_article');
export const popupImage = document.querySelector('.popup_content_image');
export const imgUrl = popupImage.querySelector('.popup__image');
export const imgCaption = popupImage.querySelector('.popup__figcaption');


//Поля ввода форм
export const formNameInput = popupEditProfile.querySelector('.form__text-input_name_name');
export const formJobInput = popupEditProfile.querySelector('.form__text-input_name_job');
export const formTitleInput = popupAddArticle.querySelector('.form__text-input_name_title');
export const formLinkInput = popupAddArticle.querySelector('.form__text-input_name_link');


//Формы
export const formEditProfile = popupEditProfile.querySelector('.form');
export const formAddArticle = popupAddArticle.querySelector('.form');


export const settings = {
  formSelector: '.form',
  inputSelector: '.form__text-input',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_inactive',
  inputErrorClass: 'form__text-input_type_error',
  errorClass: 'form__input-error_active'
}
