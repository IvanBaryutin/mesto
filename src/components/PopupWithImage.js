import { Popup } from '../components/Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = document.querySelector('.popup_content_image');
    this._imgUrl = this._popupImage.querySelector('.popup__image');;
    this._imgCaption = this._popupImage.querySelector('.popup__figcaption');;
  }

  open = (url, caption) => {

    if (url && caption) {
      this._imgUrl.src = url;
      this._imgUrl.alt = caption + ' фото';
      this._imgCaption.textContent = caption;
      super.open();
    }

  }
}
