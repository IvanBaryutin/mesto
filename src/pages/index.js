import './index.css'; // добавьте импорт главного файла стилей
import {
  initialCards,
  profileEditLink,
  addButton,
  formNameInput,
  formJobInput,
  formEditProfile,
  formAddArticle,
  settings
} from '../utils/constants.js';

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';

// Экземпляр класса UserInfo
const userInfo = new UserInfo({usernameSelector: '.profile__name', jobSelector: '.profile__subtitle'});

// Функция создания новой карточки, возвращает элемент <article>
function createCard(item) {
  const card = new Card({name: item.name, link: item.link}, {
    handleCardClick: (event) => {
      popupWithImageNew.open(item.link, item.name);
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
    const cardElement = createCard(inputData);
    defaultCardList.addItem(cardElement);
  }
);
// Добавляем слушателей к папапу с формой Добавить карточку: Сабмит, закрытие по кликам
popupAddArticleNew.setEventListeners();

/*
const popupAddArticleNew = new PopupWithForm(
  '.popup_content_article',
   (inputData) => {

    const card = new Card({name: inputData.title, link: inputData.link}, {
      handleCardClick: (event) => {
        popupWithImageNew.open(inputData.link, inputData.title);
      }
    },
    '#element');

    const cardElement = card.getCardElement();
    defaultCardList.addItem(cardElement);

});
*/

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
      userInfo.setUserInfo(inputData.name, inputData.job);
});
// Добавляем слушателей к папапу с формой Добавить карточку: Сабмит, закрытие по кликам
popupEditProfileNew.setEventListeners();

// Добавляем слушателя клика к кнопке Редактировать профиль:
profileEditLink.addEventListener('click', () => {
  popupEditProfileNew.open();
  const inputValues = userInfo.getUserInfo();
  formNameInput.value = inputValues.name;
  formJobInput.value = inputValues.job;
});

// Добавляем валидаторы форм
const formEditProfileValidator = new FormValidator(settings, formEditProfile);
formEditProfileValidator.enableValidation();

const formAddArticleValidator= new FormValidator(settings, formAddArticle);
formAddArticleValidator.enableValidation();



const popupWithImageNew = new PopupWithImage('.popup_content_image');
popupWithImageNew.setEventListeners();


// Добавляем начальные карточки, передаем функцию для использования в методе класса
const defaultCardList = new Section({ data: initialCards,
  renderer: (item) => {

    const cardElement = createCard(item);
    //console.log(item);
    defaultCardList.addItem(cardElement);
  },
}, '.elements');


/*
const defaultCardList = new Section({ data: initialCards,
  renderer: (item) => {
  const card = new Card({name: item.name, link: item.link}, {
    handleCardClick: (event) => {
      popupWithImageNew.open(item.link, item.name);
    }
  },
  '#element');

  const cardElement = card.getCardElement();
  defaultCardList.addItem(cardElement);
  },
}, '.elements');
*/

defaultCardList.renderItems();

