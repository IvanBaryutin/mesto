document.addEventListener('DOMContentLoaded', function(){ // Аналог $(document).ready(function(){

  let page = document.querySelector('.page');

  let ProfileEditLink = page.querySelector('.profile__edit-link');
  ProfileEditLink.addEventListener('click', openPopup);
  let closePopupLink = document.querySelector('.popup__close');
  closePopupLink.addEventListener('click', closePopup);
});


function openPopup() {
  let profileName = document.querySelector('.profile__name').innerText;
  let profileJob = document.querySelector('.profile__subtitle').innerText;

  popup = document.querySelector('.popup');

  let FormNameInput = popup.querySelector('input[name="name"]');
  let FormJobInput = popup.querySelector('input[name="job"]');

  FormNameInput.value = profileName;
  FormJobInput.value = profileJob;
  popup.classList.add('popup_opened');
}

function closePopup() {
  console.log('test');
  popup.classList.remove('popup_opened');
}
