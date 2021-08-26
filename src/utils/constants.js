/*
//Массив данных для начальных карточек elements
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
*/

//Кнопки
export const profileEditLink = document.querySelector('.profile__edit-button'); // Кнопка открытия окна Редактировать профиль
export const addButton = document.querySelector('.profile__addbutton'); // Кнопка открытия формы Добавить карточку
export const avatarEditLink = document.querySelector('.profile__avatar-button'); // Кнопка открытия формы Обновить аватар

export const closePopupLinkProfile = document.querySelector('.popup__close_content_profile'); // Кнопка закрытия формы Редактировать профиль
export const closePopupLinkArticle = document.querySelector('.popup__close_content_article'); // Кнопка закрытия формы Добавить карточку
export const closePopupLinkImage = document.querySelector('.popup__close_content_image'); // Кнопка закрытия попапа с картинкой


export const profileName = document.querySelector('.profile__name'); // Заголовок h1 с именем
export const profileJob = document.querySelector('.profile__subtitle'); // Параграф с профессией

export const elementsContainer = document.querySelector('.elements'); // Секция с карточками


//Модальные окна
export const popupEditProfile = document.querySelector('.popup_content_profile'); // Попап с формой Редактировать профиль
export const popupAddArticle = document.querySelector('.popup_content_article'); // Попап с формой Добавить карточку
export const popupImage = document.querySelector('.popup_content_image'); // Попап с детальной картинкой
export const imgUrl = popupImage.querySelector('.popup__image'); // img большого изображения
export const imgCaption = popupImage.querySelector('.popup__figcaption'); // Блок div описания картинки

export const popupUpdateAvatar = document.querySelector('.popup_content_update'); // Попап с формой Обновить аватар
export const popupApproveDelete = document.querySelector('.popup_content_confirm'); // Попап с формой подтверждения удаления карточки


//Поля ввода форм
export const formNameInput = popupEditProfile.querySelector('.form__text-input_name_name'); // Поле Имя
export const formJobInput = popupEditProfile.querySelector('.form__text-input_name_job'); // Поле Профессия
export const formTitleInput = popupAddArticle.querySelector('.form__text-input_name_title'); // Поле Название места
export const formLinkInput = popupAddArticle.querySelector('.form__text-input_name_link'); // Поле Ссылка на картинку


//Формы
export const formEditProfile = popupEditProfile.querySelector('.form'); // Форма Редактировать профиль
export const formAddArticle = popupAddArticle.querySelector('.form'); // Форма Добавить карточку

export const formUpdateAvatar = popupUpdateAvatar.querySelector('.form'); // Форма Обновить аватар
export const formApproveDelete = popupApproveDelete.querySelector('.form'); // Форма Подтвердить удаление карточки

// Настройки с селекторами для валидации
export const settings = {
  formSelector: '.form',
  inputSelector: '.form__text-input',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_inactive',
  inputErrorClass: 'form__text-input_type_error',
  errorClass: 'form__input-error_active'
}
