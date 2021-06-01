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

function editProfileSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = formNameInput.value;
  profileJob.textContent = formJobInput.value;
  closePopup(popupEditProfile);
}

function addArticleSubmitHandler (evt) {
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
}

const renderCard = function(data) {
  const card = new Card(data, '.element');
	const cardElement = card.getCardElement();
	elementsContainer.prepend(cardElement);
};


function showImage(url, caption) {
  if (url && caption) {
    imgUrl.src = url;
    imgUrl.alt = caption + ' фото';
    imgCaption.textContent = caption;
    openPopup(popupImage);
  }
}

formEditProfile.addEventListener('submit', editProfileSubmitHandler);
formAddArticle.addEventListener('submit', addArticleSubmitHandler);

closePopupLinkProfile.addEventListener('click' , () => closePopup(popupEditProfile));
closePopupLinkArticle.addEventListener('click' , () => closePopup(popupAddArticle));
closePopupLinkImage.addEventListener('click' , () => closePopup(popupImage));

profileEditLink.addEventListener('click' , () => {
  formNameInput.value = profileName.textContent;
  formJobInput.value = profileJob.textContent;
  openPopup(popupEditProfile);
});
addButton.addEventListener('click' , () => openPopup(popupAddArticle));




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
    popupElement.addEventListener('click' , (evt) => {
      if (evt.target.classList.contains('popup')) {
        closePopup(popupElement);
      }
    });
  });
};

enableOverlayClose();


class Card {
	constructor(data, cardSelector) {
		this._name = data.name;
		this._link = data.link;
		this._cardSelector = cardSelector;
	}

	_getTemplate = () => {
    const elementTemplate = document.querySelector('#element').content;
    //клонируем
    const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
    return cardElement;
	}
  getCardElement = () => {
    this._element = this._getTemplate();
    const articleImage = this._element.querySelector('.element__image');
    this._element.querySelector('.element__title').textContent = this._name;
    articleImage.src = this._link;
    articleImage.alt = this._name + ' фото';

    this._setEventListeners(this._link, this._name);

    return this._element;
  }

  _setEventListeners = (link, caption) => {

    // добавим обработчик клика по like
    this._element.querySelector('.element__like-icon').addEventListener('click', function(event) {
      event.target.classList.toggle('element__like-icon_active');
    });

    // добавим обработчик клика по delete
    this._element.querySelector('.element__delete-icon').addEventListener('click', function(event) {
      event.target.closest('.element').remove();
    });

    // добавим обработчик клика по картинке
    this._element.querySelector('.element__image').addEventListener('click', function(event) {
      showImage(link, caption);
    });

  }

}

initialCards.reverse().forEach((data) => {
  renderCard(data);
});



