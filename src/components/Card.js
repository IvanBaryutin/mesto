//import showImage from '/pages/index.js';

export class Card {
  constructor(data, userID, { handleCardClick, handleLikeClick, handleRemoveClick }, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleRemoveClick = handleRemoveClick;
    this._handleLikeClick = handleLikeClick;
    this._userID = userID;
    this._owner = data.owner;
    this._status = false;
  }




  _getTemplate = () => {
    const elementTemplate = document.querySelector(this._cardSelector).content;
    //клонируем
    const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
    return cardElement;
  }

  _getNumberOfLikes = () => {
    return this._likes ? this._likes.length : 0;
  }

  setNumberOfLikes = (numberOfLikes) => {
    this._element.querySelector('.element__like-counter').textContent = numberOfLikes;
  }

  _checkLikeStatus = () => {
    if (this._likes.length > 0) {
      this._likes.forEach((element) => {
        if (element._id === this._userID) {
          this.setLike();
        } else {
          this.unsetLike();
        }
      })
    }
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
    this.setNumberOfLikes(this._getNumberOfLikes());
    if (this._isCardOwner() == false) {
      this._element.querySelector('.element__delete-icon').remove(); // Удаляем кнопку удаление, если не наша карточка
    }
    this._checkLikeStatus();
    this._setEventListeners();


    return this._element;
  }

  _setEventListeners = () => {

    // добавим обработчик клика по like
    this._element.querySelector('.element__like-icon').addEventListener('click', (event) => {
      this._handleLikeClick(event, this._status);
    });

    // добавим обработчик клика по delete
    // Только если это наша карточка
    if (this._isCardOwner() == true) {
      this._element.querySelector('.element__delete-icon').addEventListener('click', () => {
        this._handleRemoveClick();
      })
    }

    // добавим обработчик клика по картинке
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleCardClick();
    });

  }

  setLike = () => {
    this._status = true;
    this._element.querySelector('.element__like-icon').classList.add('element__like-icon_active');
  }

  unsetLike = () => {
    this._status = false;
    this._element.querySelector('.element__like-icon').classList.remove('element__like-icon_active');
  }

  remove = () => {
    this._element.remove();
    this._element = null;
  }

}
