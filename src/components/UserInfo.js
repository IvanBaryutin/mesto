export class UserInfo {
  constructor({ usernameSelector, jobSelector, avatarSelector }) {
    this._usernameSelector = usernameSelector;
    this._jobSelector = jobSelector;
    this._userInfo = {};
    this._name = document.querySelector(usernameSelector);
    this._about = document.querySelector(jobSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  setUserInfo = ({ name, about }) => {
    this._name.textContent = name;
    this._about.textContent = about;
  }

  setAvatar = ({ avatar }) => {
    this._avatar.style.backgroundImage = `url(${avatar})`;
  }

  // Заполняет поля данными при открытии формы
  getUserInfo = () => {
    this._userInfo.name = this._name.textContent;
    this._userInfo.about = this._about.textContent;
    return this._userInfo;
  }


}
