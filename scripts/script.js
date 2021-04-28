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

const initialCards2 = [
  {
    name: 'Городок',
    link: 'https://images.unsplash.com/photo-1619550148107-ec8561f7cbac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'
  }
];

  let profileEditLink = document.querySelector('.profile__edit-button');
  let addButton = document.querySelector('.profile__addbutton');


  let closePopupLinkProfile = document.querySelector('.popup__close_content_profile');
  let closePopupLinkArticle = document.querySelector('.popup__close_content_article');

  let profileName = document.querySelector('.profile__name');
  let profileJob = document.querySelector('.profile__subtitle');

  let popupEditProfile = document.querySelector('.popup_content_profile');
  let popupAddArticle = document.querySelector('.popup_content_article');

  let formNameInput = popupEditProfile.querySelector('.form__text-input_name_name');
  let formJobInput = popupEditProfile.querySelector('.form__text-input_name_job');

  let formTitleInput = popupAddArticle.querySelector('.form__text-input_name_title');
  let formLinkInput = popupAddArticle.querySelector('.form__text-input_name_link');

  let formEditProfile = popupEditProfile.querySelector('.form');
  let formAddArticle = popupAddArticle.querySelector('.form');


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


  function editProfileSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
    profileName.textContent = formNameInput.value;
    profileJob.textContent = formJobInput.value;
    closePopupEditProfile();
  }

  function addArticleSubmitHandler (evt) {
    evt.preventDefault();
    const title = formTitleInput.value;
    const link = formLinkInput.value;
    if (title && link) {
      const NewCards = [
        {
          name: title,
          link: link
        }
      ]
      //console.log(NewCards);
      addElementsCards(NewCards);
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

      return articleItem;
    });
     // добавим элементы в DOM, «разложив» массив
     elementsContainer.prepend(...cardsElements);
  }





  formEditProfile.addEventListener('submit', editProfileSubmitHandler);
  formAddArticle.addEventListener('submit', addArticleSubmitHandler);
  closePopupLinkProfile.addEventListener('click', closePopupEditProfile);
  closePopupLinkArticle .addEventListener('click', closePopupAddArticle);
  profileEditLink.addEventListener('click', openPopupEditProfile);

  addButton.addEventListener('click', openPopupAddArticle);

  addElementsCards(initialCards);

  /*
  let likeIcons = document.querySelectorAll('.element__like-icon');
  console.log('test');
  Array.from(likeIcons).forEach(icon => {
    icon.addEventListener('click', function(event) {
        event.target.classList.toggle('element__like-icon_active');
    });
  });
  */
