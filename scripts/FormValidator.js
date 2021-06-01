export class FormValidator {
  constructor(settings, form) {
    this._settings = settings;
    this._form = form;
  }

  _enableValidation = () => {
    this._setEventListeners();
  }

  _setEventListeners = () => {
    this._form.addEventListener('submit', (evt) => {
      // У каждой формы отменим стандартное поведение
      evt.preventDefault();
    });

    // Находим все поля внутри формы, сделаем из них массив методом Array.from
    const inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
    const buttonElement = this._form.querySelector(this._settings.submitButtonSelector);
    //Вызовем toggleButtonState, чтобы не ждать ввода данных в поля
    this._toggleButtonState(inputList, buttonElement);

    // Обойдём все элементы полученной коллекции
    inputList.forEach((inputElement) => {
      // каждому полю добавим обработчик события input
      inputElement.addEventListener('input', () => {
        // Внутри колбэка вызовем isValid,передав ей форму и проверяемый элемент

        this._isValid(this._form, inputElement);
        // Вызовем toggleButtonState и передадим ей массив полей и кнопку
        this._toggleButtonState(inputList, buttonElement);
      });
    });

  }

  _toggleButtonState = (inputList, buttonElement) => {
    // Если есть хотя бы один невалидный инпут
    if (this._hasInvalidInput(inputList)) {
      // сделаем кнопку неактивной
      buttonElement.classList.add(this._settings.inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      // иначе сделаем кнопку активной
      buttonElement.classList.remove(this._settings.inactiveButtonClass);
      buttonElement.disabled = false;
    }
  };

  _isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      // Если поле не проходит валидацию, покажем ошибку
      this._showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      // Если проходит, скроем
      this._hideInputError(formElement, inputElement);

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
  _showInputError = (formElement, inputElement, errorMessage) => {
    // Выбираем элемент ошибки на основе уникального класса
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._settings.errorClass);
  };

  // Функция, которая удаляет класс с ошибкой
  _hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._settings.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._settings.errorClass);
  };

}
