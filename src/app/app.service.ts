import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor(private _http: Http) { }

  register(data) {
    const _path = 'http://localhost:3000/register',
    headers = new Headers({'Content-type' : 'application/json'}),
    options = new RequestOptions({headers: headers}),
    body = JSON.stringify(data);
    return this._http.post(_path, body, options).map(res => {
      return res.json();
    });
  }

}
