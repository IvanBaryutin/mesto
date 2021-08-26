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
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: card.name,
        link: card.link
      })
    })
    .then((res) => {
      return res.json(); // возвращаем результат работы метода и идём в следующий then
    })
  }

  deleteCard = (cardId) =>{
    this._headers['Content-Type'] = 'application/json';
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then((res) => {
      return res.json(); // возвращаем результат работы метода и идём в следующий then
    })
  }

  updateAvatar = ({avatar}) =>{
    this._headers['Content-Type'] = 'application/json';
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
      avatar: avatar
      })
    })
    .then((res) => {
      return res.json(); // возвращаем результат работы метода и идём в следующий then
    })
  }

}
