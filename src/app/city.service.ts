import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { City } from './city';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class CityService {
  private cityUrl: string = 'https://api.jcdecaux.com/vls/v1/contracts?&apiKey=241ace44b314f7de38e84d4a52062c3b10b9804e';
  private _selectedCity = new BehaviorSubject<string>('');
  selectedCity = this._selectedCity.asObservable();
  constructor(private http: HttpClient) { }

  getCities(): Observable<City[]> {

    return this.http.get<City[]>(this.cityUrl);
  }


  actualizeCity(city: string) {
    this._selectedCity.next(city);
  }

}
