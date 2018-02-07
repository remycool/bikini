import { Component, OnInit } from '@angular/core';
import { Station } from '../station';
import { ActivatedRoute } from '@angular/router';
import { StationService } from '../station.service';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit {

  station: Station;
  currentCity: string;
  link:string;
  constructor(
    private route: ActivatedRoute,
    private stationService: StationService) { }

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
    //this.station = new Station();
    const selectedStation = this.route.snapshot.paramMap.get('station-name');
    this.currentCity = this.route.snapshot.paramMap.get('city-name');
    this.stationService.getStations(this.currentCity)
      .subscribe(stations => {
        this.station = stations.find(s => s.name === selectedStation);
      });
      this.link=`/city/${this.currentCity}`;
  }


}
