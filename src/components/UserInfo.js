export class UserInfo {
  constructor({ usernameSelector, jobSelector }) {
    this._usernameSelector = usernameSelector;
    this._jobSelector = jobSelector;
    this._userInfo = {};
    this._name = document.querySelector(usernameSelector);
    this._job= document.querySelector(jobSelector);
  }

  setUserInfo = (name, job) => {
    //document.querySelector(this._usernameSelector).textContent = name;
    //document.querySelector(this._jobSelector).textContent = job;
    this._name.textContent = name;
    this._job.textContent = job;
  }

  getUserInfo = () => {
    this._userInfo.name = this._name.textContent;
    this._userInfo.job = this._job.textContent;
    return this._userInfo;
  }
}
