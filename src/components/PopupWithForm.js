import { Popup } from '../components/Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popup = document.querySelector(popupSelector);
    this._form = this._popup.querySelector('.form');
    this._popupCloseBtn = this._popup.querySelector('.popup__close');
    this._inputList = Array.from(this._form.querySelectorAll('.form__text-input'));
  }



  _getInputValues = () => {
    const inputValues = {};
    this._inputList.forEach(input => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();

      // добавим вызов функции _handleFormSubmit
      // передадим ей объект — результат работы _getInputValues
      this._handleFormSubmit(this._getInputValues());
      //this.close(); // Закрываем в then после ответа сервер, а не здесь
    });
  }

  close = () => {
    super.close();
    this._form.reset();
  }

  setNewFormSubmit(handler) {
    this._handleFormSubmit = handler;
  }


}
