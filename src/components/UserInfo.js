export class UserInfo {
  constructor({ usernameSelector, jobSelector }) {
    this._usernameSelector = usernameSelector;
    this._jobSelector = jobSelector;
    this._userInfo = {};
    this._name = document.querySelector(usernameSelector);
    this._job= document.querySelector(jobSelector);
  }

  setUserInfo = ({name, about}) => {
    console.log(name, about);
    this._name.textContent = name;
    this._job.textContent = about;
  }

  getUserInfo = () => {
    this._userInfo.name = this._name.textContent;
    this._userInfo.job = this._job.textContent;
    return this._userInfo;
  }
}
