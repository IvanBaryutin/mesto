export class UserInfo {
  constructor({ usernameSelector, jobSelector, avatarSelector }) {
    this._usernameSelector = usernameSelector;
    this._jobSelector = jobSelector;
    this._userInfo = {};
    this._name = document.querySelector(usernameSelector);
    this._about= document.querySelector(jobSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  setUserInfo = ({name, about}) => {
    this._name.textContent = name;
    this._about.textContent = about;
  }

  setAvatar = ({avatar}) => {
    //console.log(avatar);
    this._avatar.style.backgroundImage=`url(${avatar})`;
    //console.log(`url(${avatar})`);
  }

  // Заполняет поля данными при открытии формы
  getUserInfo = () => {
    this._userInfo.name = this._name.textContent;
    this._userInfo.about = this._about.textContent;
    //console.log(this._userInfo);
    return this._userInfo;
  }


}
