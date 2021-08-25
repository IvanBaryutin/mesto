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
    //this._headers['Content-Type'] = 'application/json';
    //console.log(this._headers);
    return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      headers: this._headers,
    })
    .then((res) => {
      return res.json(); // возвращаем результат работы метода и идём в следующий then
    })
  }

}
