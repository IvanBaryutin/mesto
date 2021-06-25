export class UserInfo {
  constructor({ usernameSelector, jobSelector }) {
    this._usernameSelector = usernameSelector;
    this._jobSelector = jobSelector;
    this._userInfo = {};
  }

  setUserInfo = (name, job) => {
    document.querySelector(this._usernameSelector).textContent = name;
    document.querySelector(this._jobSelector).textContent = job;
  }

  getUserInfo = () => {
    this._userInfo.name = document.querySelector(this._usernameSelector).textContent;
    this._userInfo.job = document.querySelector(this._jobSelector).textContent;
    return this._userInfo;
  }
}
