//import showImage from '/pages/index.js';

export class Card {
  constructor(data, userID, {handleCardClick}, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._userID = userID;
    this._owner = data.owner
    //console.log(this);
  }


  _handleClickRemove = () => {
    this._element.remove();
    this._element = null;
  };

  /*
  _handleClickImage = () => {
    this._handleCardClick();
  };
  */

  _getTemplate = () => {
    const elementTemplate = document.querySelector(this._cardSelector).content;
    //клонируем
    const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
    return cardElement;
  }

  _getNumberOfLikes = () => {
    return this._likes ? this._likes.length : 0;
  }

  _isCardOwner = () => {
    return this._owner._id === this._userID ? true : false;
  }

  getCardElement = () => {
    this._element = this._getTemplate();
    //const articleImage = this._element.querySelector('.element__image');
    this._image = this._element.querySelector('.element__image');
    this._element.querySelector('.element__title').textContent = this._name;
    this._element.setAttribute('id', this._id);
    this._image.src = this._link;
    this._image.alt = this._name + ' фото';
    this._element.querySelector('.element__like-counter').textContent = this._getNumberOfLikes();
    if (this._isCardOwner() == false) {
      //this._element.querySelector('.element__delete-icon').remove(); // Удаляем иконку удаления, если не автор
      console.log(this._element.querySelector('.element__delete-icon'));
      this._element.querySelector('.element__delete-icon').remove();
    }
    this._setEventListeners();

    return this._element;
  }

  _setEventListeners = () => {

    // добавим обработчик клика по like
    this._element.querySelector('.element__like-icon').addEventListener('click', function (event) {
      event.target.classList.toggle('element__like-icon_active');
    });

    // добавим обработчик клика по delete
    // Только если это наша карточка
    if (this._isCardOwner() == true) {
      this._element.querySelector('.element__delete-icon').addEventListener('click', () => {
        this._handleClickRemove();
      })
    }

    // добавим обработчик клика по картинке
    this._element.querySelector('.element__image').addEventListener('click', () => {
      //this._handleClickImage();
      this._handleCardClick();
    });

  }

}
