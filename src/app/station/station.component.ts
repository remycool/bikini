import { Component, OnInit } from '@angular/core';
import { Station } from '../station';
import { ActivatedRoute } from '@angular/router';
import { StationService } from '../station.service';
import { CityService } from '../city.service';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit {

  station: Station;
  currentCity: string;
  
  constructor(
    private route: ActivatedRoute,
    private stationService: StationService,
    private cityService: CityService, ) { }
    
  getLevelAvailability(): string {
    const availability: number = this.station.available_bikes * 100 / this.station.bike_stands;
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

  ngOnInit() {
    this.station = new Station();
    this.stationService.selectedStation.subscribe(station => this.station = station);
    this.cityService.selectedCity.subscribe(selectedCity=>this.currentCity = selectedCity);
  }

}
