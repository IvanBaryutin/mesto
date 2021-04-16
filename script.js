

document.addEventListener('DOMContentLoaded', function(){ // Аналог $(document).ready(function(){

  let ProfileEditLink = document.querySelector('.profile__edit-link');
  ProfileEditLink.addEventListener('click', openPopup);
  let closePopupLink = document.querySelector('.popup__close');
  closePopupLink.addEventListener('click', closePopup);

  let profileName = document.querySelector('.profile__name');
  let profileJob = document.querySelector('.profile__subtitle');


  let popup = document.querySelector('.popup');
  let FormNameInput = popup.querySelector('input[name="name"]');
  let FormJobInput = popup.querySelector('input[name="job"]');
  let form = popup.querySelector('.form');



  form.addEventListener('submit', formSubmitHandler);


  function openPopup() {
    FormNameInput.value = profileName.innerText;
    FormJobInput.value = profileJob.innerText;
    popup.classList.add('popup_opened');
  }

  function closePopup() {
    popup.classList.remove('popup_opened');
  }

  function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
    profileName.textContent = FormNameInput.value;
    profileJob.textContent = FormJobInput.value;
    closePopup();
  }

});







