export class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }


  getUserInfo = () =>{
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers,
    })
    .then((res) => {
      return res.json(); // возвращаем результат работы метода и идём в следующий then
    })
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      headers: this._headers,
    })
    .then((res) => {
      return res.json(); // возвращаем результат работы метода и идём в следующий then
    })
  }

  setUserInfo = (user) =>{
    this._headers['Content-Type'] = 'application/json';
    //console.log(this._headers);
    //console.log(user);
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: user.name,
        about: user.about
        //avatar: user.avatar
      })
    })
    .then((res) => {
      return res.json(); // возвращаем результат работы метода и идём в следующий then
    })
  }

  addCard = (card) =>{
    this._headers['Content-Type'] = 'application/json';
    console.log(card);
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: card.name,
        link: card.link
        //avatar: user.avatar
      })
    })
    .then((res) => {
      return res.json(); // возвращаем результат работы метода и идём в следующий then
    })
  }

}
