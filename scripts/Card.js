import showImage from './index.js';

export class Card {
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
    this._element.querySelector('.element__like-icon').addEventListener('click', function (event) {
      event.target.classList.toggle('element__like-icon_active');
    });

    // добавим обработчик клика по delete
    this._element.querySelector('.element__delete-icon').addEventListener('click', function (event) {
      event.target.closest('.element').remove();
    });

    // добавим обработчик клика по картинке
    this._element.querySelector('.element__image').addEventListener('click', function (event) {
      showImage(link, caption);
    });

  }

}
