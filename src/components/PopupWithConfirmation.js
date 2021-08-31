import { Popup } from '../components/Popup.js';

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popup = document.querySelector(popupSelector);
    this._form = this._popup.querySelector('.form');
    this._popupCloseBtn = this._popup.querySelector('.popup__close');
  }




  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();

      // добавим вызов функции _handleFormSubmit
      // передадим ей объект — результат работы _getInputValues
      this._handleFormSubmit();
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
