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

//Тестовый массив для добавления
const initialCardsTest = [
  {
    name: 'Городок',
    link: 'https://images.unsplash.com/photo-1619550148107-ec8561f7cbac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'
  }
];

//Кнопки
const profileEditLink = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__addbutton');
const closePopupLinkProfile = document.querySelector('.popup__close_content_profile');
const closePopupLinkArticle = document.querySelector('.popup__close_content_article');
const closePopupLinkImage = document.querySelector('.popup__close_content_image');


let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__subtitle');

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

function openPopupEditProfile() {
  formNameInput.value = profileName.textContent;
  formJobInput.value = profileJob.textContent;
  popupEditProfile.classList.add('popup_opened');
}

function openPopupAddArticle() {
  popupAddArticle.classList.add('popup_opened');
}


function closePopupEditProfile() {
  popupEditProfile.classList.remove('popup_opened');
}

function closePopupAddArticle() {
  popupAddArticle.classList.remove('popup_opened');
}

function closePopupImage() {
  popupImage.classList.remove('popup_opened');
}

function editProfileSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = formNameInput.value;
  profileJob.textContent = formJobInput.value;
  closePopupEditProfile();
}

function addArticleSubmitHandler (evt) {
  evt.preventDefault();
  const title = formTitleInput.value;
  const link = formLinkInput.value;
  if (title && link) {
    const NewCard = [
      {
        name: title,
        link: link
      }
    ]
    addElementsCards(NewCard);
  }
  closePopupAddArticle();
}





function addElementsCards(userElementsData) {
  const elementTemplate = document.querySelector('#element').content;
  const elementsContainer = document.querySelector('.elements');

  // создадим из массива дел массив элементов
  const cardsElements = userElementsData.map(el => {

    //клонируем
    const articleItem = elementTemplate.querySelector('.element').cloneNode(true);

    // наполняем содержимым
    articleItem.querySelector('.element__title').textContent = el['name'];
    articleItem.querySelector('.element__image').src = el['link'];
    articleItem.querySelector('.element__image').alt = el['name']+ ' фото';
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
      //console.log(event.target.src);
      //console.log(event.target.parentNode.querySelector('.element__title').textContent);
      showImage(event.target.src, event.target.parentNode.querySelector('.element__title').textContent);
    });

    return articleItem;
  });
  // добавим элементы в DOM, «разложив» массив
  elementsContainer.prepend(...cardsElements);
}

function showImage(url, caption) {
  const imgUrl = popupImage.querySelector('.popup__image');
  const imgCaption = popupImage.querySelector('.popup__figcaption');
  if (url && caption) {
    imgUrl.src = url;
    imgCaption.textContent = caption;
    popupImage.classList.add('popup_opened');
  }
}

formEditProfile.addEventListener('submit', editProfileSubmitHandler);
formAddArticle.addEventListener('submit', addArticleSubmitHandler);

closePopupLinkProfile.addEventListener('click', closePopupEditProfile);
closePopupLinkArticle .addEventListener('click', closePopupAddArticle);
closePopupLinkImage.addEventListener('click', closePopupImage);

profileEditLink.addEventListener('click', openPopupEditProfile);
addButton.addEventListener('click', openPopupAddArticle);

addElementsCards(initialCards);
