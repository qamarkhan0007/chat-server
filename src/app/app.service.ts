import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
  baseUrl: any = 'http://localhost:3000/';

  constructor(private _http: Http) { }

  register(data) {
    const _path = this.baseUrl + 'register',
    headers = new Headers({'Content-type' : 'application/json'}),
    options = new RequestOptions({headers: headers}),
    body = JSON.stringify(data);
    return this._http.post(_path, body, options).map(res => {
      return res.json();
    });
  }
  login(data) {
    const _path = this.baseUrl + 'login',
    headers = new Headers({'Content-type': 'application/json'}),
    body = JSON.stringify(data);
    return this._http.post(_path, body, {headers: headers}).map( res => {
      return res.json();
    });
  }

}
