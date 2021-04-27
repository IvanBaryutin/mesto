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
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  }
];

  let profileEditLink = document.querySelector('.profile__edit-button');
  let closePopupLink = document.querySelector('.popup__close');

  let profileName = document.querySelector('.profile__name');
  let profileJob = document.querySelector('.profile__subtitle');


  let popup = document.querySelector('.popup');

  let formNameInput = popup.querySelector('.form__text-input_name_name');
  let formJobInput = popup.querySelector('.form__text-input_name_job');
  let form = popup.querySelector('.form');

  function openPopup() {
    formNameInput.value = profileName.textContent;
    formJobInput.value = profileJob.textContent;
    popup.classList.add('popup_opened');
  }

  function closePopup() {
    popup.classList.remove('popup_opened');
  }

  function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
    profileName.textContent = formNameInput.value;
    profileJob.textContent = formJobInput.value;
    closePopup();
  }

  /*
  function addElementsCards() {
    const elementTemplate = document.querySelector('#element').content;
    const elementsContainer = document.querySelector('.elements');
    //console.log(elementTemplate);

    //клонируем
    const element = elementTemplate.querySelector('.element').cloneNode(true);
    const element1 = elementTemplate.querySelector('.element').cloneNode(true);

    // наполняем содержимым
    element.querySelector('.element__image').src = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg';
    element.querySelector('.element__title').textContent = 'Архыз';

    // наполняем содержимым
    element1.querySelector('.element__image').src = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg';
    element1.querySelector('.element__title').textContent = 'Архыз';

    // отображаем на странице
    elementsContainer.append(element, element1);

  }
  */

  function addElementsCards(userElementsData) {
    const elementTemplate = document.querySelector('#element').content;
    const elementsContainer = document.querySelector('.elements');

    // создадим из массива дел массив элементов
    const cardsElements = userElementsData.map(el => {

      //клонируем
      const listItem = elementTemplate.querySelector('.element').cloneNode(true);

      // наполняем содержимым
      listItem.querySelector('.element__title').textContent = el['name'];
      listItem.querySelector('.element__image').src = el['link'];
      return listItem;
    });
    // добавим элементы в DOM, «разложив» массив
    elementsContainer.append(...cardsElements);

  }

  form.addEventListener('submit', formSubmitHandler);
  closePopupLink.addEventListener('click', closePopup);
  profileEditLink.addEventListener('click', openPopup);
  addElementsCards(initialCards);
  addElementsCards(initialCards2);
