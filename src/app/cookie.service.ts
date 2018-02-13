import { Injectable } from '@angular/core';
import { NgXCookies } from 'ngx-cookies';

@Injectable()
export class CookieService {

  constructor() {

  }

  loadCountryFromCookie(cookie: string): any {
    if (NgXCookies.exists(cookie)) {
      var cookie = NgXCookies.getCookie(cookie);
      return JSON.parse(cookie);
    }
    else
      return {}
  }

}
