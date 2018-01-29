import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class AppService {

  constructor(private _http: Http) { }

  register(form) {
    const url = `localhost:3000/register`;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const body = JSON.stringify(form);
    return this._http.post(url, body, {headers: headers});
  }

}
