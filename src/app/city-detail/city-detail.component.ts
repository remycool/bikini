import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Station } from '../station';
import { StationService } from '../station.service';
import { Status } from '../status';
import { CLOSED, CHAQUE_MINUTE } from '../constantes';
import { LocalisationService } from '../localisation.service';
import { CookieService } from '../cookie.service';
import { Language } from '../Language';



@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit, OnDestroy {
  stations: Station[];
  selectedStation: Station;
  IntervalId: any;
  currentCityName: string;
  isBadRequest: boolean;
  isMobile: boolean;
  countrySelected: any;
  culture: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private stationService: StationService,
    private localisationService: LocalisationService,
    private cookieService: CookieService

  ) { }

  ngOnInit() {
    this.isMobile = window.innerWidth < 700;
    this.isBadRequest = false;
    this.getStations();
    this.IntervalId = setInterval(() => { this.getStations(); }, CHAQUE_MINUTE);
    this.stationService.selectedStation.subscribe(station => this.selectedStation = station);
    this.countrySelected = this.cookieService.loadCountryFromCookie('country');
    if (this.countrySelected)
      this.culture = Language.getPkgLang(this.countrySelected.alpha2Code);
    else
      this.culture = Language.getPkgLang('EN');
  }

  ngOnDestroy() {
    if (this.IntervalId)
      clearInterval(this.IntervalId);
  }

  getStations(): void {
    this.currentCityName = this.route.snapshot.paramMap.get('name');
    //tri les stations par ordre alphabétique et formate le nom ex= 'XXX-TOTO' => 'TOTO'
    this.stationService.getStations(this.currentCityName)
      .subscribe(stations => {
        stations.forEach(s => {
          if (this.localisationService.currentPosition !== null)
            s.distance = this.localisationService.getDistance(s.position);
        });
        this.stations = stations.sort((a, b) => a.distance - b.distance)
      }, e => {
        this.isBadRequest = true;
      })
  }

  formatStationName(name: string): string {
    return name.match(/[^0-9\-]/g).join('').trim();
  }

  isOpen(status: Status): string {
    return status == Status.CLOSED ? CLOSED : '';
  }

  getLevelAvailability(station: Station): string {
    const availability: number = station.available_bikes * 100 / station.bike_stands;
    var level: string = '';
    if (availability < 25)
      level = 'badge-danger';
    else {
      if (availability >= 25 && availability < 50)
        level = 'badge-warning';
      else {
        if (availability >= 50)
          level = 'badge-success';
      }
    }
    return level;
  }

  private onSelect(station: Station) {
    this.stationService.actualizeStation(station);
  }
}

