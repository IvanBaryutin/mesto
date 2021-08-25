export class UserInfo {
  constructor({ usernameSelector, jobSelector, avatarSelector }) {
    this._usernameSelector = usernameSelector;
    this._jobSelector = jobSelector;
    this._userInfo = {};
    this._name = document.querySelector(usernameSelector);
    this._job= document.querySelector(jobSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  setUserInfo = ({name, about}) => {
    console.log(name, about);
    this._name.textContent = name;
    this._job.textContent = about;
  }

  setAvatar = ({avatar}) => {
    console.log(avatar);
    this._avatar.style.backgroundImage=`url(${avatar})`;
    console.log(`url(${avatar})`);
  }

  getUserInfo = () => {
    this._userInfo.name = this._name.textContent;
    this._userInfo.job = this._job.textContent;
    return this._userInfo;
  }


}
