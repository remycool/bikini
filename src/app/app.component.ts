import { Component, OnInit } from '@angular/core';
import { CityService } from './city.service';
import { LocalisationService } from './localisation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  title = 'Bikini';
  currentCity: string;

  constructor(
    private cityService: CityService,
    private locatorService: LocalisationService) { }



  ngOnInit(): void {
    this.locatorService.localize();
    this.initCurrentCity();
    this.cityService.selectedCity.subscribe(selectedCity => this.currentCity = selectedCity);
  }

  initCurrentCity(): void {
    this.currentCity = '';
  }

}
