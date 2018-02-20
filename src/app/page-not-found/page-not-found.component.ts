import { Component, OnInit } from '@angular/core';
import { CookieService } from '../cookie.service';
import { Language } from '../Language';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  culture: any;
  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    var country= this.cookieService.loadCountryFromCookie('country');
    if (country)
      this.culture = Language.getPkgLang(country.alpha2Code);
    else
      this.culture = Language.getPkgLang('EN');
  }

}
