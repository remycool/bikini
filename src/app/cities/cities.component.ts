import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { CityService } from '../city.service';
import { Location } from '@angular/common';
import { CookieService } from '../cookie.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities: City[];
  selectedCity;
  countrySelected: any;

  constructor(private cityService: CityService,private cookieService:CookieService) { }

  ngOnInit() {
    this.countrySelected = this.cookieService.loadCountryFromCookie('country');
    if (this.countrySelected)
      this.getCities();
  }

 

  getCities(): void {
    var currentCode = this.countrySelected.alpha2Code;
    this.cityService.getCities()
      .subscribe(cities => {
        this.cities = cities.filter(
          (c: City) => c.country_code === this.countrySelected.alpha2Code)
          .sort(
          (a, b): number => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          });
      });
  }

  onSelect(selectedCity: string): void {
    this.cityService.actualizeCity(selectedCity);
  }



}
