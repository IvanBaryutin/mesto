import showImage from './index.js';

export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _handleClickImage = () => {
    showImage(this._link, this._name);
  };

  _handleClickRemove = () => {
    this._element.remove();
    this._element = null;
  };

  _getTemplate = () => {
    const elementTemplate = document.querySelector(this._cardSelector).content;
    //клонируем
    const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
    return cardElement;
  }

  getCardElement = () => {
    this._element = this._getTemplate();
    //const articleImage = this._element.querySelector('.element__image');
    this._image = this._element.querySelector('.element__image');
    this._element.querySelector('.element__title').textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name + ' фото';
    this._setEventListeners();

    return this._element;
  }

  _setEventListeners = () => {

    // добавим обработчик клика по like
    this._element.querySelector('.element__like-icon').addEventListener('click', function (event) {
      event.target.classList.toggle('element__like-icon_active');
    });

    // добавим обработчик клика по delete
    this._element.querySelector('.element__delete-icon').addEventListener('click', () => {
      this._handleClickRemove();
    });

    // добавим обработчик клика по картинке
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleClickImage();
    });

  }

}
