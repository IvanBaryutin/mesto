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

  form.addEventListener('submit', formSubmitHandler);
  closePopupLink.addEventListener('click', closePopup);
  profileEditLink.addEventListener('click', openPopup);
