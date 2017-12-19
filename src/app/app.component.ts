import { Component, OnInit } from '@angular/core';
import { CityService } from './city.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  title = 'Bikini';
  currentCity:string;
  
  constructor(private cityService: CityService) { }

  

  ngOnInit(): void {
  this.initCurrentCity();
  this.cityService.selectedCity.subscribe(selectedCity => this.currentCity = selectedCity);
  }

  initCurrentCity():void{
    this.currentCity = '';
  }

}
