import { Popup} from '../components/Popup.js';

import { imgUrl, imgCaption } from '../utils/constants.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

  }

  open = (url, caption) => {

    if (url && caption) {
      imgUrl.src = url;
      imgUrl.alt = caption + ' фото';
      imgCaption.textContent = caption;
      super.open();
    }

  }
}
