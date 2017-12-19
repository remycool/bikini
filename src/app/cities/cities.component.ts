import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { CityService } from '../city.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities: City[];
  selectedCity;
  constructor(private cityService: CityService, private location: Location) { }

  ngOnInit() {
    this.getCities();
  }

  getCities(): void {

    this.cityService.getCities()
      .subscribe(cities => this.cities = cities.filter((c: City) => c.country_code === 'FR')
        .sort((a, b): number => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        }));
  }

  onSelect(selectedCity: string): void {
    this.cityService.actualizeCity(selectedCity);
  }



}
