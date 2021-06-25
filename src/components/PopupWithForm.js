import { Popup } from '../components/Popup.js';

export class popupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popup = document.querySelector(popupSelector);
    this._form = this._popup.querySelector('.form');
    this._popupCloseBtn = this._popup.querySelector('.popup__close');
  }

  _getInputValues = () => {
    const inputList = Array.from(this._form.querySelectorAll('.form__text-input'));
    const inputValues = {};
    inputList.forEach(input => {
      inputValues[input.name] = input.value;
      //console.log(input.name + input.value);
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
      this.close();
    });
  }

  close = () => {
    super.close();
    this._form.reset();
  }

}
