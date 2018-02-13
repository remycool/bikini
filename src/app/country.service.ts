import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { Country } from './country';
import { forEach } from '@angular/router/src/utils/collection';
import { City } from './city';


@Injectable()
export class CountryService {

  constructor(public http: HttpClient) { }
  countries: Country[];
  contracts: City[];

  getCountries(): Country[] {

    const france: Country = { name: 'France', alpha2Code: 'FR' };
    const australie: Country = { name: 'Australia', alpha2Code: 'AU' };
    const irlande: Country = { name: 'Ireland', alpha2Code: 'IE' };
    const norvege: Country = { name: 'Norway', alpha2Code: 'NO' };
    const espagne: Country = { name: 'Spain', alpha2Code: 'ES' };
    const belgique: Country = { name: 'belgium', alpha2Code: 'BE' };
    const suede: Country = { name: 'Sweden', alpha2Code: 'SE' };
    const japon: Country = { name: 'Japan', alpha2Code: 'JP' };
    const russie: Country = { name: 'Russia', alpha2Code: 'RU' };
    const lituanie: Country = { name: 'Lithuania', alpha2Code: 'LT' };
    const slovenie: Country = { name: 'Slovenia', alpha2Code: 'SI' };

    this.countries = [france, australie, irlande, norvege, espagne, belgique, suede, japon, russie, lituanie, slovenie];
    return this.countries;
  };

}
