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
//import { Popup } from '../components/Popup.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { popupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';


const userInfo = new UserInfo({usernameSelector: '.profile__name', jobSelector: '.profile__subtitle'});

const popupAddArticleNew = new popupWithForm(
  '.popup_content_article',
   (inputData) => {

    const card = new Card({name: inputData.title, link: inputData.link}, {
      handleCardClick: (event) => {
        popupWithImageNew.open(inputData.link, inputData.title);
      }
    },
    '#element');

    const cardElement = card.getCardElement();
    console.log(cardElement);
    defaultCardList.addItem(cardElement);

});

popupAddArticleNew.setEventListeners();
addButton.addEventListener('click', () => popupAddArticleNew.open());


const popupEditProfileNew = new popupWithForm(
  '.popup_content_profile',
    (inputData) => {
      console.log(inputData);
      userInfo.setUserInfo(inputData.name, inputData.job);
});

popupEditProfileNew.setEventListeners();
profileEditLink.addEventListener('click', () => {
  popupEditProfileNew.open();
  const inputValues = userInfo.getUserInfo();
  formNameInput.value = inputValues.name;
  formJobInput.value = inputValues.job;
});



const formEditProfileValidator = new FormValidator(settings, formEditProfile);
formEditProfileValidator.enableValidation();

const formAddArticleValidator= new FormValidator(settings, formAddArticle);
formAddArticleValidator.enableValidation();


const popupWithImageNew = new PopupWithImage('.popup_content_image');
popupWithImageNew.setEventListeners();


// Добавляем начальные карточки
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

defaultCardList.renderItems();

