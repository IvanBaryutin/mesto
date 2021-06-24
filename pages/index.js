import {
  initialCards,
  profileEditLink,
  addButton,
  closePopupLinkProfile,
  closePopupLinkArticle,
  closePopupLinkImage,
  profileName,
  profileJob,
  elementsContainer,
  //popupEditProfile,
  //popupAddArticle,
  //popupImage,
  imgUrl,
  imgCaption,
  formNameInput,
  formJobInput,
  //formTitleInput,
  //formLinkInput,
  formEditProfile,
  formAddArticle,
  settings
} from '../utils/constants.js';

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { Popup } from '../components/Popup.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { popupWithForm } from '../components/PopupWithForm.js';

let openedPopup;


/*
function openPopup(popup) {
  popup.classList.add('popup_opened');
  openedPopup = popup;
  document.addEventListener('keydown', checkPressedPopupButton);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', checkPressedPopupButton);
}
*/
/*
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
  formAddArticleValidator.toggleButtonState();
}
*/
/*
const renderCard = function (data) {
  const card = new Card(data, '#element');
  const cardElement = card.getCardElement();
  elementsContainer.prepend(cardElement);
};
*/

/*
export default function showImage(url, caption) {
  if (url && caption) {
    imgUrl.src = url;
    imgUrl.alt = caption + ' фото';
    imgCaption.textContent = caption;
    openPopup(popupImage);
  }
}
*/
/*
formEditProfile.addEventListener('submit', editProfileSubmitHandler);
formAddArticle.addEventListener('submit', addArticleSubmitHandler);
*/

//closePopupLinkProfile.addEventListener('click', () => closePopup(popupEditProfile));
//closePopupLinkArticle.addEventListener('click', () => closePopup(popupAddArticle));
//closePopupLinkImage.addEventListener('click', () => closePopup(popupImage));

/*
profileEditLink.addEventListener('click', () => {
  formNameInput.value = profileName.textContent;
  formJobInput.value = profileJob.textContent;
  openPopup(popupEditProfile);
});
*/

//Проверяем какая кнопка клавиатуры нажата
/*
function checkPressedPopupButton(evt) {
  if (evt.key === 'Escape') {
    closePopup(openedPopup);
  }
};
*/

//Закрываем попап по нажатию на попап
/*
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
*/
const popupAddArticleNew = new popupWithForm(
  '.popup_content_article',
  {
  handleFormSubmit: (inputData) => {
    //console.log(inputData);
  }
});


popupAddArticleNew.setEventListeners();
addButton.addEventListener('click', () => popupAddArticleNew.open());

const popupEditProfileNew = new popupWithForm('.popup_content_profile');
popupEditProfileNew.setEventListeners();
profileEditLink.addEventListener('click', () => popupEditProfileNew.open());

const formEditProfileValidator = new FormValidator(settings, formEditProfile);
formEditProfileValidator.enableValidation();

const formAddArticleValidator= new FormValidator(settings, formAddArticle);
formAddArticleValidator.enableValidation();


const popupWithImageNew = new PopupWithImage('.popup_content_image');
popupWithImageNew.setEventListeners();


//const popupAddArticleNew = new Popup('.popup_content_article');
//popupAddArticleNew.setEventListeners();



// Добавляем начальные карточки
const defaultCardList = new Section({ data: initialCards,
  renderer: (item) => {
  const card = new Card({name: item.name, link: item.link}, {
    handleCardClick: (event) => {
      //console.log(item.name);
      //console.log(item.link);
      //console.log(popupWithImageNew);
      popupWithImageNew.open(item.link, item.name);
    }
  },
  '#element');

  const cardElement = card.getCardElement();
  defaultCardList.addItem(cardElement);
  },
}, '.elements');

defaultCardList.renderItems();

