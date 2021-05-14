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

//Поля ввода форм
const formNameInput = popupEditProfile.querySelector('.form__text-input_name_name');
const formJobInput = popupEditProfile.querySelector('.form__text-input_name_job');
const formTitleInput = popupAddArticle.querySelector('.form__text-input_name_title');
const formLinkInput = popupAddArticle.querySelector('.form__text-input_name_link');

//Формы
const formEditProfile = popupEditProfile.querySelector('.form');
const formAddArticle = popupAddArticle.querySelector('.form');


function openPopup(popup) {
  if (popup === popupEditProfile) {
    formNameInput.value = profileName.textContent;
    formJobInput.value = profileJob.textContent;
  }
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function editProfileSubmitHandler (evt) {
  evt.preventDefault();
  /*
  profileName.textContent = formNameInput.value;
  profileJob.textContent = formJobInput.value;
  closePopup(popupEditProfile);
  */
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


function getCardElement(name, link) {
  const elementTemplate = document.querySelector('#element').content;

  //клонируем
  const articleItem = elementTemplate.querySelector('.element').cloneNode(true);
  const articleImage = articleItem.querySelector('.element__image');

  // наполняем содержимым
  articleItem.querySelector('.element__title').textContent = name;
  articleImage.src = link;
  articleImage.alt = name + ' фото';
  // добавим обработчик клика по like
  articleItem.querySelector('.element__like-icon').addEventListener('click', function(event) {
    event.target.classList.toggle('element__like-icon_active');
  });
  // добавим обработчик клика по delete
  articleItem.querySelector('.element__delete-icon').addEventListener('click', function(event) {
    event.target.closest('.element').remove();
  });
  // добавим обработчик клика по картинке
  articleItem.querySelector('.element__image').addEventListener('click', function(event) {
    showImage(link, name);
  });
  return articleItem;
}



renderCard = function(data, wrap) {
  wrap.prepend(getCardElement(data.name, data.link));
};


function showImage(url, caption) {
  const imgUrl = popupImage.querySelector('.popup__image');
  const imgCaption = popupImage.querySelector('.popup__figcaption');
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

profileEditLink.addEventListener('click' , () => openPopup(popupEditProfile));
addButton.addEventListener('click' , () => openPopup(popupAddArticle));


initialCards.reverse().forEach((data) => {
  renderCard(data, elementsContainer)
});

//Form validation

// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage) => {
  // Выбираем элемент ошибки на основе уникального класса
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__text-input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');

};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__text-input_type_error');
  errorElement.textContent = '';
  errorElement.classList.remove('form__input-error_active');
};

// Функция, которая проверяет валидность поля
const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    // Если проходит, скроем
    hideInputError(formElement, inputElement);
  }
};

// Функция принимает массив полей

const hasInvalidInput = (inputList) => {
  // проходим по этому массиву методом some
  return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся фунцкция
    // hasInvalidInput вернёт true

    return !inputElement.validity.valid;
  })
};

// Функция принимает массив полей ввода
// и элемент кнопки, состояние которой нужно менять

const toggleButtonState = (inputList, buttonElement) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    buttonElement.classList.add('form__submit-button_inactive');
  } else {
    // иначе сделай кнопку активной
    buttonElement.classList.remove('form__submit-button_inactive');
  }
};

const setEventListeners = (formElement) => {
  // Находим все поля внутри формы,
  // сделаем из них массив методом Array.from
  const inputList = Array.from(formElement.querySelectorAll('.form__text-input'));
  const buttonElement = formElement.querySelector('.form__submit-button');
  // Вызовем toggleButtonState, чтобы не ждать ввода данных в поля
  toggleButtonState(inputList, buttonElement);


  // Обойдём все элементы полученной коллекции
  inputList.forEach((inputElement) => {
    // каждому полю добавим обработчик события input
    inputElement.addEventListener('input', () => {
      // Внутри колбэка вызовем isValid,
      // передав ей форму и проверяемый элемент
      isValid(formElement, inputElement);
      // Вызовем toggleButtonState и передадим ей массив полей и кнопку
      toggleButtonState(inputList, buttonElement);
    });
  });
};


const enableValidation = () => {
  // Найдём все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll('.form'));
  //console.log(formList);

  // Переберём полученную коллекцию
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      // У каждой формы отменим стандартное поведение
      evt.preventDefault();
    });

    // Для каждой формы вызовем функцию setEventListeners,
    // передав ей элемент формы
    setEventListeners(formElement);
  });
};

const enableOverlayClose = () => {
  const popupList = Array.from(document.querySelectorAll('.popup'));
  console.log(popupList);

  // Переберём полученную коллекцию
  popupList.forEach((popupElement) => {
    console.log(popupElement);
    popupElement.addEventListener('mousedown' , () => closePopup(popupElement));
  });
};


// Вызовем функцию
enableValidation();
enableOverlayClose();

