import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { City } from './city';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { API_KEY } from './constantes';
import { Station } from './station';


@Injectable()
export class StationService {

  constructor(private http: HttpClient) { }

  private _selectedStation = new BehaviorSubject<Station>(new Station());
  selectedStation = this._selectedStation.asObservable();

  getStations(city: string): Observable<Station[]> {
    const finalUrl: string = `https://api.jcdecaux.com/vls/v1/stations?contract=${city}${API_KEY}`;
    return this.http.get<Station[]>(finalUrl);
  }

  actualizeStation(station: Station) {
    this._selectedStation.next(station);
  }
}
