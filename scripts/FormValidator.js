export class FormValidator {
  constructor(settings, form) {
    this._settings = settings;
    this._form = form;
    this._inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
    this._buttonElement = this._form.querySelector(this._settings.submitButtonSelector);
  }

  enableValidation = () => {
    this._setEventListeners();
  }

  _setEventListeners = () => {
    this._form.addEventListener('submit', (evt) => {
      // У каждой формы отменим стандартное поведение
      evt.preventDefault();
    });

    // Находим все поля внутри формы, сделаем из них массив методом Array.from
    //const inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
    //const buttonElement = this._form.querySelector(this._settings.submitButtonSelector);
    //Вызовем toggleButtonState, чтобы не ждать ввода данных в поля
    this.toggleButtonState();

    // Обойдём все элементы полученной коллекции
    this._inputList.forEach((inputElement) => {
      // каждому полю добавим обработчик события input
      inputElement.addEventListener('input', () => {
        // Внутри колбэка вызовем isValid,передав ей форму и проверяемый элемент

        this._isValid(inputElement);
        // Вызовем toggleButtonState и передадим ей массив полей и кнопку
        this.toggleButtonState();
      });
    });

  }

  toggleButtonState = () => {
    // Если есть хотя бы один невалидный инпут
    if (this._hasInvalidInput(this._inputList)) {
      // сделаем кнопку неактивной
      this._buttonElement.classList.add(this._settings.inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      // иначе сделаем кнопку активной
      this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  };

  _isValid = (inputElement) => {
    if (!inputElement.validity.valid) {
      // Если поле не проходит валидацию, покажем ошибку
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      // Если проходит, скроем
      this._hideInputError(inputElement);

    }
  }


  // Функция принимает массив полей
  _hasInvalidInput = (inputList) => {
    // проходим по массиву полей методом some
    return inputList.some((inputElement) => {
      // Если поле не валидно, колбэк вернёт true, обход массива прекратится и вся функция hasInvalidInput вернёт true
      return !inputElement.validity.valid;
    })
  };


  // Функция, которая добавляет класс с ошибкой
  _showInputError = (inputElement, errorMessage) => {
    // Выбираем элемент ошибки на основе уникального класса
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._settings.errorClass);
  };

  // Функция, которая удаляет класс с ошибкой
  _hideInputError = (inputElement) => {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._settings.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._settings.errorClass);
  };

}
