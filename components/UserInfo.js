export class UserInfo {
  constructor(usernameSelector, jobSelector ) {
    this._usernameSelector = usernameSelector;
    this._jobSelector = jobSelector;
    this._userInfo = {};
  }

  setUserInfo = () => {
    this._userInfo.name = document.querySelector(this._usernameSelector).textContent;
    this._userInfo.job = document.querySelector(this._jobSelector).textContent;
    return this._userInfo;
  }

  getUserInfo = () => {
    this._userInfo.name = document.querySelector(this._usernameSelector).textContent;
    this._userInfo.job = document.querySelector(this._jobSelector).textContent;
    return this._userInfo;
  }
}
