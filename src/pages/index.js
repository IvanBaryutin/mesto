import './index.css'; // добавьте импорт главного файла стилей
import {
  //initialCards,
  profileEditLink,
  avatarEditLink,
  addButton,
  formNameInput,
  formJobInput,
  formEditProfile,
  formAddArticle,
  formUpdateAvatar,
  settings
} from '../utils/constants.js';

let defaultCardList;
let userID;

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';


export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-25',
  headers: {
    authorization: '1e5c33de-1f37-4db9-b61a-be6eb6c35223'
    //'Content-Type': 'application/json',
    //'Access-Control-Allow-Origin': 'origin-list'
  }
});

// Загружаем информацию о пользователе с сервера
api.getUserInfo()
.then(res =>{
  userInfo.setUserInfo(res);
  userInfo.setAvatar(res);
  userID = res._id;
});

// Загружаем начальные карточки с сервера
api.getInitialCards()
.then(res =>{
  defaultCardList = new Section({ data: res.reverse(),
    renderer: (item) => {
      const cardElement = createCard(item);
      defaultCardList.addItem(cardElement);
    },
  }, '.elements');
  defaultCardList.renderItems();
});

// Экземпляр класса UserInfo
const userInfo = new UserInfo({usernameSelector: '.profile__name', jobSelector: '.profile__subtitle', avatarSelector: '.profile__avatar'});

// Функция создания новой карточки, возвращает элемент <article>
function createCard(item) {
  const card = new Card(item, userID, {
    handleCardClick: (event) => {
      popupWithImageNew.open(item.link, item.name);
    },
    handleRemoveClick: (event) => {
      popupApproveDelete.open();
      popupApproveDelete.setNewFormSubmit(
        () => {
          api.deleteCard(item._id)
          .then(res =>{
            card.remove();
          });
        }
      )
    },
    handleLikeClick: (event) => {
      popupApproveDelete.open();
      popupApproveDelete.setNewFormSubmit(
        () => {
          api.deleteCard(item._id)
          .then(res =>{
            card.remove();
          });
        }
      )
    }
  },
  '#element');
  return card.getCardElement();
}


// Экземпляр класса для попапа с формой добавления карточки, передаем в качестве аргумента функцию в handleFormSubmit
// которая по факту выполняется при сабмите формы
const popupAddArticleNew = new PopupWithForm(
  '.popup_content_article',
  (inputData) => {
    api.addCard(inputData)
    .then(res =>{
      const cardElement = createCard(res);
      defaultCardList.addItem(cardElement);
    });
  }
);
// Добавляем слушателей к папапу с формой Добавить карточку: Сабмит, закрытие по кликам
popupAddArticleNew.setEventListeners();


// Добавляем слушатель на клик по кнопке Добавить карточку
addButton.addEventListener('click', () => {
  formAddArticleValidator.toggleButtonState(); // Выставим правильное состояние кнопки перед открытием попапа
  popupAddArticleNew.open();
});

// Экземпляр класса для попапа с формой Редактировать профиль, передаем в качестве аргумента стрелочную функцию в handleFormSubmit
// которая по факту выполняется при сабмите формы
const popupEditProfileNew = new PopupWithForm(
  '.popup_content_profile',
    (inputData) => {
      api.setUserInfo(inputData)
      .then(res =>{
        userInfo.setUserInfo(res);
      });

});
// Добавляем слушателей к папапу с формой Добавить карточку: Сабмит, закрытие по кликам
popupEditProfileNew.setEventListeners();

// Добавляем слушателя клика к кнопке Редактировать профиль:
profileEditLink.addEventListener('click', () => {
  popupEditProfileNew.open();
  const inputValues = userInfo.getUserInfo();
  formNameInput.value = inputValues.name;
  formJobInput.value = inputValues.about;
});











// Экземпляр класса для попапа с формой Редактировать профиль, передаем в качестве аргумента стрелочную функцию в handleFormSubmit
const popupUpdateAvatar = new PopupWithForm(
  '.popup_content_update',
    (inputData) => {
      api.updateAvatar(inputData)
      .then(res =>{
        userInfo.setAvatar(res);
      });
});
// Добавляем слушателей к попапу с формой Добавить карточку: Сабмит, закрытие по кликам
popupUpdateAvatar.setEventListeners();

// Добавляем слушатель на клик по кнопке Добавить карточку
avatarEditLink.addEventListener('click', () => {
  //formAddArticleValidator.toggleButtonState(); // Выставим правильное состояние кнопки перед открытием попапа
  popupUpdateAvatar.open();
});






// Экземпляр класса для попапа с кнопкой подтверждения удаления карточки, передаем в качестве аргумента стрелочную функцию в handleFormSubmit
const popupApproveDelete = new PopupWithForm(
  '.popup_content_confirm');
// Добавляем слушателей к попапу с формой Добавить карточку: Сабмит, закрытие по кликам
popupApproveDelete.setEventListeners();

// Добавляем слушатель на клик по кнопке Добавить карточку
/*
avatarEditLink.addEventListener('click', () => {
  //formAddArticleValidator.toggleButtonState(); // Выставим правильное состояние кнопки перед открытием попапа
  popupApproveDelete.open();
});
*/






// Добавляем слушателя клика к кнопке Редактировать профиль:
profileEditLink.addEventListener('click', () => {
  popupEditProfileNew.open();
  const inputValues = userInfo.getUserInfo();
  formNameInput.value = inputValues.name;
  formJobInput.value = inputValues.about;
});

// Добавляем валидаторы форм
const formEditProfileValidator = new FormValidator(settings, formEditProfile);
formEditProfileValidator.enableValidation();

const formAddArticleValidator= new FormValidator(settings, formAddArticle);
formAddArticleValidator.enableValidation();

const formUpdateAvatarValidator= new FormValidator(settings, formUpdateAvatar);
formUpdateAvatarValidator.enableValidation();



const popupWithImageNew = new PopupWithImage('.popup_content_image');
popupWithImageNew.setEventListeners();
